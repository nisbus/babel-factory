# Deployment Guide - Babel Factory

## Quick Deploy to Render

### Option 1: One-Click Deploy (Recommended)

1. **Click the Deploy Button**

   [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/nisbus/babel-factory)

2. **Configure**
   - Service name: `babel-factory`
   - Region: Oregon (or closest to you)
   - Branch: `main`
   - Plan: Starter (free) or higher

3. **Deploy**
   - Click "Apply"
   - Wait 3-5 minutes for build
   - Your site will be live at `https://babel-factory.onrender.com`

### Option 2: Manual Deploy via Render Dashboard

1. **Go to Render Dashboard**
   - Visit https://dashboard.render.com

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository: `nisbus/babel-factory`
   - Branch: `main`

3. **Configure Build**
   - Name: `babel-factory`
   - Region: Oregon
   - Runtime: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Plan: Starter (free)

4. **Environment Variables**
   - NODE_ENV = `production`

5. **Deploy**
   - Click "Create Web Service"
   - Wait for build to complete

### Option 3: Deploy via Render CLI

```bash
# Install Render CLI
npm install -g @render/cli

# Login to Render
render login

# Deploy
render deploy
```

## Custom Domain Setup

1. **Purchase Domain** (e.g., babelfactory.io)

2. **Add to Render**
   - Go to your service → Settings → Custom Domain
   - Add your domain
   - Configure DNS with your registrar:
     ```
     Type: CNAME
     Name: www
     Value: babel-factory.onrender.com
     ```

3. **Enable SSL**
   - Render automatically provisions SSL certificates
   - Your site will be available at `https://www.babelfactory.io`

## Environment Configuration

Currently, the app doesn't require environment variables, but for future features:

### Email Form Integration

To enable the contact form to send emails, add one of these:

**Option 1: EmailJS**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Option 2: SendGrid**
```env
SENDGRID_API_KEY=your_api_key
SENDGRID_FROM_EMAIL=hello@babelfactory.io
```

**Option 3: Formspree**
```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

### Analytics

**Google Analytics:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Plausible Analytics:**
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=babelfactory.io
```

## Post-Deployment Checklist

- [ ] Verify site loads at production URL
- [ ] Test all navigation links
- [ ] Test contact form (update with email backend)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Enable SSL certificate
- [ ] Set up monitoring (Render provides basic monitoring)
- [ ] Test page load speed (should be < 2 seconds)

## Updating the Site

```bash
# Make changes locally
git add .
git commit -m "Update: describe changes"
git push origin main

# Render will auto-deploy the changes
# Watch deployment at: https://dashboard.render.com
```

## Monitoring & Performance

**Render Dashboard:**
- View logs: Service → Logs
- Monitor metrics: Service → Metrics
- Health checks: Automatic

**Performance Tips:**
- Render Starter plan includes:
  - 512MB RAM
  - 0.5 CPU
  - Auto-scaling to handle traffic
  - Global CDN for static assets
  - Automatic HTTPS

## Troubleshooting

### Build Fails

**Check build logs:**
```bash
# In Render dashboard
Service → Events → View build logs
```

**Common issues:**
- Missing dependencies: Check `package.json`
- Build timeout: Upgrade to Standard plan
- Memory issues: Increase plan tier

### Site Not Loading

1. Check health check endpoint is responding
2. Verify `npm start` works locally
3. Check environment variables are set
4. Review service logs in dashboard

### Slow Performance

1. Upgrade to Standard plan for more resources
2. Enable Render CDN for static assets
3. Optimize images and bundle size
4. Consider using Next.js Image optimization

## Cost Estimates

**Render Pricing:**
- Starter Plan: **Free**
  - 512MB RAM, 0.5 CPU
  - Auto-sleep after inactivity
  - Good for landing pages

- Standard Plan: **$7/month**
  - 2GB RAM, 1 CPU
  - No auto-sleep
  - Better performance

- Pro Plan: **$25/month**
  - 4GB RAM, 2 CPU
  - Priority support
  - Production workloads

**Domain:**
- .io domain: ~$35/year
- .com domain: ~$12/year

**Total Cost (First Year):**
- Minimum: $35 (domain only, free Render)
- Recommended: $119 (domain + Standard plan)

## Support

**Render Support:**
- Documentation: https://render.com/docs
- Community: https://community.render.com
- Status: https://status.render.com

**Need Help?**
- Check Render logs first
- Review this deployment guide
- Contact: hello@babelfactory.io

---

**Last Updated:** October 5, 2025
