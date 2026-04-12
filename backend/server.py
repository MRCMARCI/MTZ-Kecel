from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from models import ProductCategoryItem, CompanyInfoItem, ContactInfoItem


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "MTZ-Kecel API is running"}


# Product Categories endpoints
@api_router.get("/categories", response_model=List[ProductCategoryItem])
async def get_categories():
    """Get all product categories"""
    try:
        categories = await db.product_categories.find().to_list(100)
        # Convert MongoDB _id to string for JSON serialization
        for cat in categories:
            if '_id' in cat:
                cat['_id'] = str(cat['_id'])
        return categories
    except Exception as e:
        logging.error(f"Error fetching categories: {e}")
        raise HTTPException(status_code=500, detail="Error fetching product categories")


@api_router.get("/categories/{category_id}", response_model=ProductCategoryItem)
async def get_category(category_id: int):
    """Get a single product category by ID"""
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
        logging.error(f"Error fetching category {category_id}: {e}")
        raise HTTPException(status_code=500, detail="Error fetching category")


# Company Info endpoint
@api_router.get("/company-info", response_model=CompanyInfoItem)
async def get_company_info():
    """Get company information"""
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
        logging.error(f"Error fetching company info: {e}")
        raise HTTPException(status_code=500, detail="Error fetching company info")


# Contact Info endpoint
@api_router.get("/contact-info", response_model=ContactInfoItem)
async def get_contact_info():
    """Get contact information"""
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
        logging.error(f"Error fetching contact info: {e}")
        raise HTTPException(status_code=500, detail="Error fetching contact info")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
