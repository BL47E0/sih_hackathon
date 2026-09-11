import uuid

from sqlalchemy import Column, String, Text
from sqlalchemy.dialects.postgresql import UUID

from app.db.database import Base


class Dependency(Base):
    __tablename__ = "dependencies"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    from_approval_id = Column(
        UUID(as_uuid=True),
        nullable=False
    )

    to_approval_id = Column(
        UUID(as_uuid=True),
        nullable=False
    )

    dependency_type = Column(
        String(50),
        nullable=False
    )

    description = Column(Text)