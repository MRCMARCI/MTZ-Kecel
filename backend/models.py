from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class ProductCategoryItem(BaseModel):
    id: int
    name: str
    description: str
    image: str
    items: List[str]
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)


class CompanyValue(BaseModel):
    title: str
    description: str


class CompanyInfoItem(BaseModel):
    name: str
    description: str
    mission: str
    values: List[CompanyValue]
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)


class HoursDetail(BaseModel):
    day: str
    morning: Optional[str] = None
    afternoon: Optional[str] = None
    time: Optional[str] = None


class OpeningHours(BaseModel):
    monday: HoursDetail
    tuesday: HoursDetail
    wednesday: HoursDetail
    thursday: HoursDetail
    friday: HoursDetail
    saturday: HoursDetail
    sunday: HoursDetail


class ContactInfoItem(BaseModel):
    address: str
    phone: str
    mobile: str
    email: str
    hours: OpeningHours
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
