![Portfolio Screenshot](public/assets/images/portfolio-screenshot.webp)

## This is my redesigned developer portfolio, rebuilt from scratch to reflect my growth as a developer. It highlights modern practices, improved architecture, and a polished user experience.

## About

My previous portfolio was created early in my dev journey with JavaScript. Since then, I've gained extensive experience and adopted industry best practices. This project demonstrates my current skills and approach to building scalable, interactive, and responsive web applications.

## Tech Stack

- **Frontend Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind
- **Animations**: Framer Motion, Typewriter Effect
- **Utilities**: React Icons, React Scroll, Hcaptcha

## Features

- Responsive layout
- Smooth animations and interactive effects using Framer Motion
- Scroll-based navigation with active section highlighting for improved UX
- Dynamic typewriter effect for engaging text presentation
- Video player to showcase short project review clips
- Modular and scalable architecture
- Clean, reusable, and component-driven design
- Built with small, maintainable, and reusable components for cleaner code and easier scalability
- Optimized images using WebP format for faster loading and smaller file sizes
- Custom contact form integrated with domain-based email delivery, providing a professional and secure communication channel
- CAPTCHA protection implemented to prevent spam and ensure secure form submissions

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/viiktorstefanov/portfolio-v2.git
```

2. **Enter the project directory**

```bash
cd portfolio-v2
```

3. **Install dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed (v20 or later recommended).

```bash
npm install
```

4. **Rename and edit the data file**

Rename the example data file:

```bash
mv src/constants/example.data.ts src/constants/data.ts
```

Then open `src/constants/data.ts` and update it with your personal information:

- Bio  
- Skills  
- Experience
- Education
- Certificates
- Projects  

5. **Set up environment variables**

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the new `.env` file and fill in your credentials:

```env
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your-hcaptcha-site-key
FORMSPREE_ID=your-formspree-id
```

You can get your hCaptcha key from [hcaptcha.com](https://www.hcaptcha.com/) and your Formspree ID from [formspree.io](https://formspree.io/).

6. **Run the development server**

```bash
npm run dev
```