# Finance

**Finance** is a web-based full-stack application designed for managing financial data efficiently. The application is deployed on Vercel, ensuring reliable and high-performance hosting.

## Live Demo

Check out the live demo: [Finance](finance-h4ns.vercel.app)

## Technologies Used

- **Frontend**
  - **Next.js 15**
  - **React**
  - **TypeScript**
  - **Tailwind CSS**
  - **Shadcn UI**

- **Backend**
  - **Drizzle ORM**
  - **Hono.js**

- **Database**
  - **PostgreSQL**
  - **NeonDB**

- **Tools**
  - **Zod**
  - **Clerk**
  - **Tanstack React Query**
  - **ESLint**

- **Deployment**
  - **Vercel**


## Project Structure

```plaintext
finance-main/
├── app/                # Main application pages and layouts
├── components/         # Reusable UI components
├── constants/          # Application-wide constants
├── db/                 # Database configuration and ORM logic
├── drizzle/            # Backend logic and database migrations
├── features/           # Feature-specific logic
├── hooks/              # Custom React hooks
├── lib/                # Shared utility functions
├── middleware.ts       # Middleware for requests
├── public/             # Static assets (images, fonts, etc.)
├── scripts/            # Helper scripts
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Node.js dependencies
```

## Features

- Modular and reusable component architecture
- Database operations using Drizzle ORM
- Fully responsive UI with Tailwind CSS
- Authentication by Clerk
- Interactive dashboard page
- Changeable chart types
- Accounts and Date filters
- Hono API interfaces
- Custom React forms
- CSV file import
- CSS with TailwindCSS and Shadcn UI
- NeonDB and Drizzle ORM
- API via Hono.js
- State management via Tanstack React Query
- Bulk delete and search in transactions
- PostgreSQL & Drizzle ORM
- Deployed on Vercel

## How to Run

1. Clone the repository or download the project files:

    ```bash
    git clone <repository-url>
    cd Finance
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env.local` file in the root directory. Add required variables as specified in `.env.example`.

4. Start the development server:

    ```bash
    npm run dev
    ```

5. To build the application for production:

    ```bash
    npm run build
    npm start
    ```

## Screenshots

### Login
![Login](https://github.com/Redline1e/finance/blob/main/public/screenshots/login.png)

### Home Page
![Dashboard](https://github.com/Redline1e/finance/blob/main/public/screenshots/dashboard.png)

### Transactions
![Transactions](https://github.com/Redline1e/finance/blob/main/public/screenshots/transactions.png)
