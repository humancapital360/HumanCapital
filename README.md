# Human Capital 360 (HC360) Website

Welcome to the official repository for the **Human Capital 360** website. This project is a modern, responsive web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, designed to provide information about HC360's services, facilitate appointment bookings, and offer an e-commerce experience.

## 🚀 Features

-   **Modern UI/UX**: Built with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) for a polished, accessible, and responsive design.
-   **Appointment Booking**: Integrated booking system allowing users to schedule appointments directly.
-   **Contact & Feedback Forms**: Secure forms for general inquiries and user feedback, powered by **Nodemailer**.
-   **E-Commerce**: Shop functionality with product details, shopping cart, and checkout flow.
-   **Blog & Case Studies**: Dynamic content sections for company news and success stories.
-   **Interactive Components**: Includes carousels, charts (Recharts), and animated elements.
-   **Type Safety**: Fully written in **TypeScript** for robust and maintainable code.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Validation)
-   **Email**: [Nodemailer](https://nodemailer.com/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **Utilities**: [date-fns](https://date-fns.org/), [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   **Node.js**: Version 18.17 or later (LTS recommended).
-   **npm** or **pnpm** or **yarn**.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-org/hc360-new-web.git
    cd hc360-new-web
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables**:
    Create a `.env` file in the root directory and add the following variables. These are required for the contact and booking forms to send emails.

    ```env
    # SMTP Configuration for Email Notifications
    SMTP_HOST=humancapital360.com
    SMTP_PORT=587
    
    # Credentials for Appointment Emails
    SMTP_USER_APPOINTMENTS=appointments@humancapital360.com
    SMTP_PASS_APPOINTMENTS=your_password_here

    # Credentials for General Contact Emails
    SMTP_USER_CONTACT=contact@humancapital360.com
    SMTP_PASS_CONTACT=your_password_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and API routes
│   ├── api/              # Backend API routes (booking, contact, etc.)
│   ├── about-us/         # About Us page
│   ├── blog/             # Blog pages
│   ├── shop/             # E-commerce pages
│   ├── ...               # Other route directories
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # Shadcn UI primitive components
│   └── ...               # Custom project components (Footer, Navbar, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and libraries
├── public/               # Static assets (images, fonts) and legacy PHP scripts
└── styles/               # Additional stylesheets
```

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📄 License

This project is proprietary to **Human Capital 360**. All rights reserved.
