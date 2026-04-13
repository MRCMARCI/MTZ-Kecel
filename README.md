# MTZ-Kecel - Szerszám és Alkatrész Weboldal

Egy modern, full-stack weboldal MTZ szerszámok és alkatrészek bemutatására, Magyar nyelven.

## 🚀 Technológiai Stack

- **Frontend**: React 19 + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Styling**: Tailwind CSS with custom red color scheme
- **Icons**: Lucide React

## ✨ Funkciók

- 🏪 8 termékkategória megjelenítése (Munkaruházat, Munkacipők, Kesztyűk, stb.)
- 📋 Céginformációk és értékek bemutatása
- 📞 Kapcsolati információk részletes nyitvatartással
- 🎨 Modern, reszponzív dizájn piros színvilággal
- ⚡ Smooth scroll animációk
- 📱 Mobil-barát hamburger menü
- 🔄 Real-time adatok MongoDB-ből

## 📦 Deployment Opciók

### Option 1: Emergent Platform (Jelenlegi)
Az alkalmazás jelenleg az Emergent platformon fut automatikus deployment-tel.

### Option 2: Vercel (Új)
Az alkalmazás most már Vercel-re is deployolható!

**Részletes Vercel deployment útmutató**: Lásd [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

**Gyors Start (Vercel):**
```bash
# 1. Telepítsd a Vercel CLI-t
npm i -g vercel

# 2. Jelentkezz be
vercel login

# 3. Deploy
vercel

# 4. Állítsd be az environment variable-öket a Vercel Dashboard-on:
# - MONGO_URL
# - DB_NAME  
# - REACT_APP_BACKEND_URL

# 5. Deploy production-re
vercel --prod
```

## 🛠️ Lokális Fejlesztés

### Előfeltételek
- Node.js 18+
- Python 3.9+
- MongoDB

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd mtz-kecel
```

2. **Backend Setup**
```bash
cd backend
pip install -r requirements.txt

# Hozz létre .env fájlt
echo "MONGO_URL=mongodb://localhost:27017" > .env
echo "DB_NAME=mtz_kecel" >> .env

# Seed the database
python seed_data.py

# Start the backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

3. **Frontend Setup**
```bash
cd frontend
yarn install

# Hozz létre .env fájlt
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# Start the frontend
yarn start
```

4. **Open Browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
/
├── api/                      # Vercel serverless functions
│   ├── index.py             # FastAPI backend for Vercel
│   └── requirements.txt
├── backend/                 # Original FastAPI backend
│   ├── server.py
│   ├── models.py
│   ├── seed_data.py
│   └── requirements.txt
├── frontend/                # React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── services/
│   │   │   └── api.js     # API service
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── .env
├── vercel.json             # Vercel configuration
├── VERCEL_DEPLOYMENT.md    # Vercel deployment guide
└── README.md
```

## 🎨 Design Guidelines

- **Színséma**: Piros (#dc2626) mint elsődleges szín
- **Betűtípus**: Rendszer betűk tiszta megjelenésért
- **Ikonok**: Lucide React (NO emojis)
- **Komponensek**: shadcn/ui alapú
- **Animációk**: Smooth scroll, hover effektek, transitions
- **Reszponzív**: Mobile-first approach

## 🔧 Environment Variables

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:8001  # vagy Vercel URL
```

### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=mtz_kecel
CORS_ORIGINS=*
```

## 📊 API Endpoints

- `GET /api/` - Health check
- `GET /api/categories` - Összes termékkategória
- `GET /api/categories/:id` - Egy termékkategória
- `GET /api/company-info` - Céginformációk
- `GET /api/contact-info` - Kapcsolati információk

## 🧪 Testing

```bash
# Backend API tesztelés
curl http://localhost:8001/api/categories

# Frontend ellenőrzés
# Nyisd meg a böngészőt: http://localhost:3000
```

## 🚢 Production Checklist

- [ ] MongoDB connection string beállítva
- [ ] Environment variables konfigurálva
- [ ] Database seedelve initial adatokkal
- [ ] Frontend build sikeres
- [ ] API endpoints tesztelve
- [ ] CORS beállítások ellenőrizve
- [ ] Custom domain konfigurálva (opcionális)

## 📝 Termék Kategóriák

1. Munkaruházat - Portwest termékek
2. Munkavédelmi Cipők - S3 védőcipők
3. Munkavédelmi Kesztyűk - Védő és munkakesztyűk
4. Csavarok és anyák - Kötőelemek
5. Kenőanyagok - Motor és ipari olajok
6. Kardántengely Alkatrészek
7. Bilincsek & Szorítók
8. Portwest Védőfelszerelések

## 🏢 Cég Információk

- **Név**: MTZ-Kecel
- **Cím**: 6237 Kecel, Soltvadkerti u. 17.
- **Telefon**: +36 78 422 700
- **Mobil**: +36 20 321 3055
- **Email**: beleczki.sandor@gmail.com
- **Tapasztalat**: 20+ év

## 📄 License

Proprietary - All rights reserved

## 🤝 Support

Kérdések vagy problémák esetén:
- Email: beleczki.sandor@gmail.com
- Telefon: +36 78 422 700

---

**Built with ❤️ for MTZ-Kecel** | Deployed on Emergent & Vercel
