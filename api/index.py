from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
from typing import List
from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'mtz_kecel')

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
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

# Routes
@app.get("/api/")
async def root():
    return {"message": "MTZ-Kecel API is running"}

@app.get("/api/categories", response_model=List[ProductCategoryItem])
async def get_categories():
    try:
        categories = await db.product_categories.find().to_list(100)
        for cat in categories:
            if '_id' in cat:
                cat['_id'] = str(cat['_id'])
        return categories
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/categories/{category_id}", response_model=ProductCategoryItem)
async def get_category(category_id: int):
    try:
        category = await db.product_categories.find_one({"id": category_id})
        if not category:
            raise HTTPException(status_code=404, detail="Category not found")
        if '_id' in category:
            category['_id'] = str(category['_id'])
        return category
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/company-info", response_model=CompanyInfoItem)
async def get_company_info():
    try:
        company_info = await db.company_info.find_one()
        if not company_info:
            raise HTTPException(status_code=404, detail="Company info not found")
        if '_id' in company_info:
            company_info['_id'] = str(company_info['_id'])
        return company_info
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/contact-info", response_model=ContactInfoItem)
async def get_contact_info():
    try:
        contact_info = await db.contact_info.find_one()
        if not contact_info:
            raise HTTPException(status_code=404, detail="Contact info not found")
        if '_id' in contact_info:
            contact_info['_id'] = str(contact_info['_id'])
        return contact_info
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Vercel handler
handler = app
