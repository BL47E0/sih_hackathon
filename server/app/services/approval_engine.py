from sqlalchemy.orm import Session

from app.models.approval import Approval
from app.models.project import Project
from app.models.project_approval import ProjectApproval


def analyze_project(
    db: Session,
    project: Project
):
    """
    Determine applicable approvals for a project
    and create project_approval records.
    """

    approvals = (
        db.query(Approval)
        .all()
    )

    created_approvals = []

    for approval in approvals:

        existing = (
            db.query(ProjectApproval)
            .filter(
                ProjectApproval.project_id == project.id,
                ProjectApproval.approval_id == approval.id
            )
            .first()
        )

        if existing:
            created_approvals.append(existing)
            continue

        project_approval = ProjectApproval(
            project_id=project.id,
            approval_id=approval.id,
            status="not_started",
            is_applicable=True
        )

        db.add(project_approval)

        created_approvals.append(project_approval)

    db.commit()

    return created_approvals