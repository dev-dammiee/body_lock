# Body Lock — Chain of Custody

Body Lock is a modern, responsive web application designed for morgue body tracking and chain of custody management. Built with Next.js, Tailwind CSS, and TypeScript, it provides an intuitive interface for managing daily morgue operations efficiently and securely.

## Features

- **Dashboard**: A comprehensive overview of current morgue statistics, including total bodies admitted, current occupancy, recent releases, and critical missing body alerts.
- **Admit**: Interface for intaking and registering new bodies into the system.
- **Scan**: Tool for daily verification and inventory tracking to ensure the chain of custody is maintained.
- **Release**: Secure process for discharging bodies to authorized parties.
- **Audit**: Detailed logging and history of all actions performed within the system for accountability.
- **Missing Alerts**: Real-time notifications and tracking for bodies that have missed their scheduled scans or cannot be located.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **UI Library**: React 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com) for utility-first, responsive design
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: TypeScript

## Project Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── admit/            # Body admission flow
│   ├── audit/            # System audit logs
│   ├── dashboard/        # Main overview dashboard
│   ├── missing/          # Missing body alerts and tracking
│   ├── release/          # Body release flow
│   └── scan/             # Daily scan and verification
├── components/           # Reusable React components
│   ├── Sidebar.tsx       # Main navigation sidebar (responsive)
│   └── ui/               # Generic UI components (Badges, StatCards)
└── lib/                  # Utility functions and shared logic
```

## Getting Started

First, make sure you have Node.js installed, then install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Mobile Responsiveness

The application is built with a responsive layout, ensuring that morgue attendants and coordinators can access critical information seamlessly on tablets and smartphones. 
- The sidebar navigation collapses into an off-canvas menu on smaller screens.
- Data grids and activity logs adapt to stacked layouts to prevent horizontal scrolling.
- Touch targets are optimized (minimum 44x44px) for ease of use on mobile devices.
