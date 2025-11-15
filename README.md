# Producer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)
![AWS SES](https://img.shields.io/badge/AWS%20SES-Email-orange?style=flat-square&logo=amazon-aws)

## Overview

This portfolio website was created for a music industry professional who needed a platform to advertise their services and provide an easy way for potential clients to get in touch via email. No design was provided, only a moodboard, but was requested to be a single page (outside of the contact page) and to maintain a "brooding and mysterious" aesthetic.

### Requirements

- **Single-page focus** with minimal additional pages
- **Dark Visuals** for branding personality
- **Contact functionality** via email integration
- **Professional presentation** for music industry networking
- **Responsive design** for all devices

## Features

- Contact form with server-side validation
- AWS SES intergration
- Spotify iFrameAPI Component
- Responsive design and smooth scrolling for modern feel
- Motion animation
- Feature-based architecture
- TypeScript for type safety
- Docker containerization for production

## Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn
- AWS account (for SES email functionality)
- Spotify playlist/track URIs (for music showcase)

### **Environment Setup**

1. **Clone the repository**

```bash
git clone https://github.com/JordanTate/vybiral.git
cd vybiral
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:

```env
# AWS SES Configuration
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-east-1
AWS_SES_FROM_EMAIL=your-email@domain.com
AWS_SES_TO_EMAIL=contact@domain.com
```

4. **Run development server**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### **Production Deployment**

#### **Docker Deployment**

```bash
# Build the Docker image
docker build -t vybiral-portfolio .

# Run the container
docker run -p 3000:3000 --env-file .env.local vybiral-portfolio
```

## Techstack

### **Frontend**

- **Next.js 16.0.0** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Framer Motion** - Smooth animations and transitions
- **SCSS Modules** - Component-scoped styling
- **Tailwind CSS** - Utility-first CSS framework

### **Backend**

- **Next.js API Routes** - Serverless API endpoints
- **AWS SES** - Email delivery service
- **Zod** - Schema validation
- **Docker** - Containerization for deployment

### **Developer Experience**

- **ESLint** - Code linting and standards
- **TypeScript** - Static type checking
- **Environment validation** - Pre-build checks
- **Custom hooks** - Reusable logic patterns

## License

All rights reserved.

---
