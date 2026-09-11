from typing import Optional

from pydantic import BaseModel


class ProjectCreate(BaseModel):
    name: str
    industry: str
    business_type: Optional[str] = None
    location: str
    investment_amount: Optional[float] = None
    project_stage: str
    capacity: Optional[str] = None


class ProjectResponse(BaseModel):
    id: str
    name: str
    industry: str
    business_type: Optional[str] = None
    location: str
    investment_amount: Optional[float] = None
    project_stage: str
    capacity: Optional[str] = None