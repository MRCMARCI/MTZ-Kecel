import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


product_categories = [
    {
        "id": 1,
        "name": "Munkaruházat",
        "description": "Prémium Portwest munkaruházat tartósságra tervezve",
        "image": "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?w=800",
        "items": ["Munkanadrágok", "Munkakabátok", "Overálok", "Mellények"]
    },
    {
        "id": 2,
        "name": "Munkavédelmi Cipők",
        "description": "Maximális védelem kényelemmel párosítva",
        "image": "https://images.unsplash.com/photo-1581893260082-8f6953fe27dd?w=800",
        "items": ["Bakancsok", "Munkacipők", "Gumicsizmák", "S3 védőcipők"]
    },
    {
        "id": 3,
        "name": "Munkavédelmi Kesztyűk",
        "description": "Professzionális védelem minden munkafázishoz",
        "image": "https://images.pexels.com/photos/9754819/pexels-photo-9754819.jpeg?w=800",
        "items": ["Bőrkesztyűk", "Latexkesztyűk", "Nitril kesztyűk", "Vágásálló"]
    },
    {
        "id": 4,
        "name": "Csavarok & Rögzítők",
        "description": "Megbízható kötőelemek minden alkalmazáshoz",
        "image": "https://images.unsplash.com/photo-1607733067403-a0396fa4d3d0?w=800",
        "items": ["Csavarok", "Anyák", "Alátétek", "Menetes rudak"]
    },
    {
        "id": 5,
        "name": "Kenőanyagok",
        "description": "Minőségi olajok és kenőanyagok gépeihez",
        "image": "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?w=800",
        "items": ["Motor olajok", "Hidraulika olajok", "Váltó olajok", "Zsírok"]
    },
    {
        "id": 6,
        "name": "Kardántengely Alkatrészek",
        "description": "Eredeti minőségű kardántengely részegységek",
        "image": "https://images.unsplash.com/photo-1707064892275-a3088e8240be?w=800",
        "items": ["Kardántengelyek", "Keresztcsuklók", "Tömítések", "Csapágyak"]
    },
    {
        "id": 7,
        "name": "Bilincsek & Szorítók",
        "description": "Precíz rögzítési megoldások szakembereknek",
        "image": "https://images.unsplash.com/photo-1769971361807-1e3d025c2abb?w=800",
        "items": ["Tömlőbilincsek", "Fémbilincsek", "Spannbilincsek", "Gyorsbilincsek"]
    },
    {
        "id": 8,
        "name": "Portwest Védőfelszerelések",
        "description": "Hivatalos Portwest termékek raktárról",
        "image": "https://images.pexels.com/photos/8488007/pexels-photo-8488007.jpeg?w=800",
        "items": ["Védőruházat", "Védőszemüvegek", "Védősisakok", "Hallásvédők"]
    }
]

company_info = {
    "name": "MTZ-Kecel",
    "description": "Kecelen, több mint 20 éve szolgáljuk ki vásárlóinkat minőségi szerszámokkal, munkaruházattal és ipari alkatrészekkel. Családi vállalkozásunk a megbízhatóság és szakértelem szimbóluma lett a régióban. Partnereink között olyan neves gyártókat találhatnak, mint a Portwest, így garantáljuk termékeinksz kiemelkedő minőségét.",
    "mission": "Célunk, hogy minden ügyfél megtalálja nálunk a munkájához szükséges eszközöket, versenyképes áron, kiemelkedő minőségben és szakértő tanácsadással.",
    "values": [
        {
            "title": "Minőség",
            "description": "Csak ellenőrzött, megbízható gyártóktól kínálunk termékeket"
        },
        {
            "title": "Megbízhatóság",
            "description": "20+ éve folyamatosan elérhetőek vagyunk vásárlóinknak"
        },
        {
            "title": "Szakértelem",
            "description": "Tapasztalt munkatársaink segítenek a helyes választásban"
        },
        {
            "title": "Ár-érték arány",
            "description": "Kiemelkedő minőség mellett versenyképes áraink vannak"
        }
    ]
}

contact_info = {
    "address": "6237 Kecel, Soltvadkerti u. 17.",
    "phone": "+36 78 422 700",
    "mobile": "+36 20 321 3055",
    "email": "beleczki.sandor@gmail.com",
    "hours": {
        "monday": {"day": "Hétfő", "morning": "07:30 - 12:00", "afternoon": "13:00 - 17:00"},
        "tuesday": {"day": "Kedd", "morning": "07:30 - 12:00", "afternoon": "13:00 - 17:00"},
        "wednesday": {"day": "Szerda", "morning": "07:30 - 12:00", "afternoon": "13:00 - 17:00"},
        "thursday": {"day": "Csütörtök", "morning": "07:30 - 12:00", "afternoon": "13:00 - 17:00"},
        "friday": {"day": "Péntek", "morning": "07:30 - 12:00", "afternoon": "13:00 - 17:00"},
        "saturday": {"day": "Szombat", "time": "07:30 - 12:00"},
        "sunday": {"day": "Vasárnap", "time": "Zárva"}
    }
}


async def seed_database():
    print("Starting database seeding...")
    
    # Clear existing data
    await db.product_categories.delete_many({})
    await db.company_info.delete_many({})
    await db.contact_info.delete_many({})
    print("✓ Cleared existing data")
    
    # Insert product categories
    await db.product_categories.insert_many(product_categories)
    print(f"✓ Inserted {len(product_categories)} product categories")
    
    # Insert company info
    await db.company_info.insert_one(company_info)
    print("✓ Inserted company info")
    
    # Insert contact info
    await db.contact_info.insert_one(contact_info)
    print("✓ Inserted contact info")
    
    print("\n✅ Database seeding completed successfully!")
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_database())
