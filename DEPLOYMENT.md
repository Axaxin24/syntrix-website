# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables (see below)
   - Click "Deploy"

## Environment Variables

Create these environment variables in your deployment platform:

```env
# Stripe Configuration (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Email Configuration (for contact forms)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Calendly Integration (for demo booking)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

## Other Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### AWS Amplify
1. Connect repository
2. Build settings: Use Next.js preset
3. Add environment variables
4. Deploy

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

## Pre-deployment Checklist

- [ ] Update company information in Footer.tsx
- [ ] Replace placeholder content with real content
- [ ] Set up Stripe account and get API keys
- [ ] Set up EmailJS or Formspree for contact forms
- [ ] Set up Calendly for demo booking
- [ ] Test all forms and functionality
- [ ] Optimize images and content
- [ ] Configure custom domain (optional)

## Post-deployment

1. Test all pages and functionality
2. Set up analytics (Google Analytics)
3. Configure SEO settings
4. Set up monitoring and alerts
5. Create backup strategy
