import uuid

from sqlalchemy import Column, String, Numeric, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func

from app.db.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    name = Column(String(200), nullable=False)

    industry = Column(String(100), nullable=False)

    business_type = Column(String(50))

    location = Column(String(100), nullable=False)

    investment_amount = Column(Numeric(15, 2))

    project_stage = Column(String(50), nullable=False)

    capacity = Column(String(200))

    created_at = Column(
        DateTime,
        server_default=func.now()
    )

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now()
    )