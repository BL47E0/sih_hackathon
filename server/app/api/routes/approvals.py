from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.project import Project
from app.models.approval import Approval
from app.models.project_approval import ProjectApproval
from app.services.approval_engine import analyze_project


router = APIRouter(
    prefix="/api/projects",
    tags=["Approvals"]
)


@router.post("/{project_id}/analyze")
def analyze_project_route(
    project_id: str,
    db: Session = Depends(get_db)
):
    project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    project_approvals = analyze_project(
        db,
        project
    )

    result = []

    for project_approval in project_approvals:

        approval = (
            db.query(Approval)
            .filter(
                Approval.id == project_approval.approval_id
            )
            .first()
        )

        if approval:
            result.append({
                "approval_id": str(approval.id),
                "name": approval.name,
                "department": approval.department,
                "stage": approval.approval_stage,
                "status": project_approval.status,
                "is_applicable": project_approval.is_applicable,
            })

    return {
        "project_id": str(project.id),
        "project_name": project.name,
        "approvals": result,
        "total": len(result)
    }