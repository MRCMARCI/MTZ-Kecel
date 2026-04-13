# MTZ-Kecel Vercel Deployment Guide

This guide explains how to deploy the MTZ-Kecel application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Database**: You'll need a MongoDB connection string (e.g., from MongoDB Atlas)
3. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket

## Deployment Steps

### 1. Prepare Your MongoDB Database

#### Option A: MongoDB Atlas (Recommended)
1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string (should look like: `mongodb+srv://username:password@cluster.mongodb.net/`)
4. Whitelist Vercel IP addresses (or use 0.0.0.0/0 for all IPs)

#### Option B: Use Existing MongoDB
- Ensure your MongoDB is accessible from Vercel's servers
- Get your connection string

### 2. Seed Your Database

Before deploying, populate your database with initial data:

```bash
# Set your MongoDB connection string
export MONGO_URL="your-mongodb-connection-string"
export DB_NAME="mtz_kecel"

# Run the seed script
cd backend
python seed_data.py
```

This will populate:
- 8 product categories
- Company information
- Contact information

### 3. Deploy to Vercel

#### Method 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New" → "Project"
3. Import your Git repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     ```
     MONGO_URL=your-mongodb-connection-string
     DB_NAME=mtz_kecel
     REACT_APP_BACKEND_URL=https://your-app.vercel.app
     ```
   - Make sure to add them for Production, Preview, and Development

6. Click "Deploy"

#### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add MONGO_URL
vercel env add DB_NAME
vercel env add REACT_APP_BACKEND_URL

# Deploy to production
vercel --prod
```

### 4. Update Frontend Backend URL

After first deployment, you'll get a URL like `https://your-app.vercel.app`

1. Go back to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Update `REACT_APP_BACKEND_URL` to your actual Vercel URL
3. Redeploy the application

### 5. Verify Deployment

Once deployed, test your application:

1. Visit your Vercel URL: `https://your-app.vercel.app`
2. Check the API: `https://your-app.vercel.app/api/`
3. Verify products load: `https://your-app.vercel.app/api/categories`

## Environment Variables Reference

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `DB_NAME` | MongoDB database name | `mtz_kecel` |
| `REACT_APP_BACKEND_URL` | Your Vercel app URL | `https://your-app.vercel.app` |

## Project Structure for Vercel

```
/
├── api/                      # Serverless API functions
│   ├── index.py             # Main FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/                # React application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env                # Frontend environment variables
├── vercel.json             # Vercel configuration
└── VERCEL_DEPLOYMENT.md    # This file
```

## Troubleshooting

### Issue: API Routes Not Working
**Solution**: Ensure `vercel.json` is in the root directory and routes are configured correctly.

### Issue: Database Connection Failed
**Solution**: 
- Verify MongoDB connection string is correct
- Check MongoDB Atlas IP whitelist includes Vercel IPs (or 0.0.0.0/0)
- Ensure environment variables are set in Vercel dashboard

### Issue: Frontend Can't Connect to Backend
**Solution**: 
- Update `REACT_APP_BACKEND_URL` to your actual Vercel URL
- Redeploy after updating environment variables

### Issue: CORS Errors
**Solution**: The API is configured to allow all origins. If issues persist:
- Check browser console for specific error messages
- Verify API routes are prefixed with `/api/`

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `REACT_APP_BACKEND_URL` to your custom domain
5. Redeploy

## Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you push to other branches or open PRs

## Support

For issues specific to:
- **Vercel Deployment**: Check [Vercel Documentation](https://vercel.com/docs)
- **MongoDB Atlas**: Check [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- **Application Issues**: Check application logs in Vercel Dashboard

## Notes

- The free Vercel plan includes:
  - 100GB bandwidth per month
  - Serverless function execution
  - Automatic HTTPS
  - Global CDN

- MongoDB Atlas free tier includes:
  - 512MB storage
  - Shared RAM
  - Good for small to medium applications

---

**Happy Deploying! 🚀**
