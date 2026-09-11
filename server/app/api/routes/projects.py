from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.project import Project
from app.schemas.project import ProjectCreate


router = APIRouter(
    prefix="/api/projects",
    tags=["Projects"]
)


@router.post("/")
def create_project(
    project_data: ProjectCreate,
    db: Session = Depends(get_db)
):
    project = Project(
        name=project_data.name,
        industry=project_data.industry,
        business_type=project_data.business_type,
        location=project_data.location,
        investment_amount=project_data.investment_amount,
        project_stage=project_data.project_stage,
        capacity=project_data.capacity,
    )

    db.add(project)
    db.commit()
    db.refresh(project)

    return {
        "message": "Project created successfully",
        "project": {
            "id": str(project.id),
            "name": project.name,
            "industry": project.industry,
            "business_type": project.business_type,
            "location": project.location,
            "investment_amount": float(project.investment_amount)
            if project.investment_amount is not None
            else None,
            "project_stage": project.project_stage,
            "capacity": project.capacity,
        }
    }


@router.get("/{project_id}")
def get_project(
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

    return {
        "id": str(project.id),
        "name": project.name,
        "industry": project.industry,
        "business_type": project.business_type,
        "location": project.location,
        "investment_amount": float(project.investment_amount)
        if project.investment_amount is not None
        else None,
        "project_stage": project.project_stage,
        "capacity": project.capacity,
    }