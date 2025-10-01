# Syntrix Website

A professional, modern, and responsive company website for Syntrix - an AI-assisted software development company. Built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with techy blue/black/white color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO with Next.js Head tags and meta optimization
- **Fast Performance**: Optimized for speed and Core Web Vitals
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Integration**: Ready for EmailJS or Formspree integration
- **Stripe Integration**: Payment processing ready for pricing plans
- **Chatbot Widget**: AI assistant widget (coming soon placeholder)

## 📁 Project Structure

```
syntrix-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   ├── pricing/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── ChatbotWidget.tsx
├── public/
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Payments**: Stripe (ready for integration)
- **Forms**: EmailJS/Formspree ready

## 📄 Pages

1. **Home** (`/`) - Hero section, about, services, testimonials, CTA
2. **Services** (`/services`) - Detailed service offerings with process
3. **Pricing** (`/pricing`) - Three pricing tiers with Stripe integration
4. **Portfolio** (`/portfolio`) - Project showcase with case studies
5. **About** (`/about`) - Company story, team, values, timeline
6. **Contact** (`/contact`) - Contact form, demo booking, FAQ

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd syntrix-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Stripe Configuration (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Configuration (for contact forms)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Calendly Integration (for demo booking)
NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
```

### Customization

1. **Company Information**: Update contact details in `src/components/Footer.tsx`
2. **Content**: Modify text and images in respective page components
3. **Colors**: Update TailwindCSS classes or modify `src/app/globals.css`
4. **Pricing**: Update pricing plans in `src/app/pricing/page.tsx`
5. **Services**: Modify services in `src/app/services/page.tsx`

## 📦 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Connect repository and configure build settings
- **Railway**: Deploy directly from GitHub
- **DigitalOcean App Platform**: Connect repository and deploy

### Build for Production

```bash
npm run build
npm start
```

## 🔌 Integrations

### Stripe Payment Processing

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add keys to environment variables
4. Update price IDs in `src/app/pricing/page.tsx`

### Email Form Integration

#### Option 1: EmailJS
1. Create account at [emailjs.com](https://emailjs.com)
2. Set up email service and template
3. Add service details to environment variables
4. Update form submission logic in `src/app/contact/page.tsx`

#### Option 2: Formspree
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Update form action in `src/app/contact/page.tsx`

### Calendly Demo Booking

1. Create account at [calendly.com](https://calendly.com)
2. Set up your availability
3. Update the Calendly URL in `src/app/contact/page.tsx`

## 🎨 Customization Guide

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` file with your component
3. Update navigation in `src/components/Navigation.tsx`

### Modifying Styles

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use TailwindCSS classes
- **Custom animations**: Add to `globals.css`

### Adding Content

- **Services**: Update `src/app/services/page.tsx`
- **Portfolio**: Modify `src/app/portfolio/page.tsx`
- **Team**: Update team section in `src/app/about/page.tsx`

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🚀 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Optimized for production

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Structure

- **Components**: Reusable UI components
- **Pages**: Route-based page components
- **Styles**: Global CSS and TailwindCSS
- **Types**: TypeScript type definitions

## 📞 Support

For support or questions:
- Email: hello@syntrix.com
- Website: [syntrix.com](https://syntrix.com)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ by the Syntrix Team**