# MTZ-Kecel Backend Implementation Contracts

## Overview
Az MTZ-Kecel weboldal backend implementációja. Az oldal egy információs weboldal munkaruházat, szerszámok és alkatrészek bemutatására.

## Current Mock Data (mockData.js)
- **productCategories**: 8 termékkategória képekkel és leírásokkal
- **companyInfo**: Céginformációk, küldetés, értékek
- **contactInfo**: Cím, telefonszámok, email, nyitvatartás

## Backend Implementation Plan

### 1. Database Models

#### ProductCategory Model
```javascript
{
  id: Number,
  name: String,
  description: String,
  image: String,
  items: [String],
  createdAt: Date,
  updatedAt: Date
}
```

#### CompanyInfo Model
```javascript
{
  name: String,
  description: String,
  mission: String,
  values: [{
    title: String,
    description: String
  }],
  updatedAt: Date
}
```

#### ContactInfo Model
```javascript
{
  address: String,
  phone: String,
  mobile: String,
  email: String,
  hours: {
    monday: { day, morning, afternoon },
    tuesday: { day, morning, afternoon },
    wednesday: { day, morning, afternoon },
    thursday: { day, morning, afternoon },
    friday: { day, morning, afternoon },
    saturday: { day, time },
    sunday: { day, time }
  },
  updatedAt: Date
}
```

### 2. API Endpoints

#### Product Categories
- `GET /api/categories` - Összes termékkategória lekérése
- `GET /api/categories/:id` - Egy termékkategória lekérése

#### Company Info
- `GET /api/company-info` - Céginformációk lekérése

#### Contact Info
- `GET /api/contact-info` - Kapcsolati információk lekérése

### 3. Seed Data
Seed script létrehozása a mockData.js adatainak betöltéséhez az adatbázisba.

### 4. Frontend Integration
- Mock adatok eltávolítása
- API hívások implementálása axios-szal
- Loading states hozzáadása
- Error handling

### 5. Testing
- Backend API-k tesztelése curl-lel
- Frontend integráció tesztelése böngészőben

## Migration Steps
1. ✅ Create MongoDB models
2. ✅ Create seed script
3. ✅ Implement API endpoints
4. ✅ Update frontend to use APIs
5. ✅ Test backend & frontend integration
