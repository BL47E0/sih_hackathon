import uuid

from sqlalchemy import Column, String, Text, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func

from app.db.database import Base


class Approval(Base):
    __tablename__ = "approvals"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    name = Column(
        String(200),
        nullable=False
    )

    department = Column(
        String(200),
        nullable=False
    )

    description = Column(Text)

    official_url = Column(Text)

    approval_stage = Column(
        String(50),
        nullable=False
    )

    created_at = Column(
        DateTime,
        server_default=func.now()
    )