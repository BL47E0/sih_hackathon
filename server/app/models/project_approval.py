import uuid

from sqlalchemy import Column, String, Text, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func

from app.db.database import Base


class ProjectApproval(Base):
    __tablename__ = "project_approvals"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    project_id = Column(
        UUID(as_uuid=True),
        nullable=False
    )

    approval_id = Column(
        UUID(as_uuid=True),
        nullable=False
    )

    status = Column(
        String(30),
        nullable=False,
        default="not_started"
    )

    is_applicable = Column(
        Boolean,
        nullable=False,
        default=True
    )

    notes = Column(Text)

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now()
    )