# Body Lock — Chain of Custody

Body Lock is a modern, responsive web application designed for morgue body tracking and chain of custody management. Built with Next.js, Tailwind CSS, and TypeScript, it provides an intuitive interface for managing daily morgue operations efficiently and securely.

## GitHub Repository
**Link:** [https://github.com/dev-dammiee/body_lock](https://body-lock.vercel.app/missing)



## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dev-dammiee/body_lock
   cd body_lock
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

---

## Detailed Feature Breakdown

### 1. Dashboard Overview
- **What it does:** Provides a high-level, real-time snapshot of morgue operations and vital statistics.
- **How it works (technically):** The `page.tsx` within the `dashboard` directory uses responsive CSS Grid to render `StatCard` components. It maps over mock data (or fetched data) to display the most recent activity logs using custom `Badge` components. 
- **Edge cases / User interactions:**
  - *Responsive Layout:* On mobile devices (viewports < 768px), the 4-column grid collapses into a single column, ensuring readability without horizontal scrolling.
  - *Missing Alerts Banner:* Automatically conditionally renders only if the `missingAlerts` state is greater than zero, applying a visual pulsing effect (`pulse-red`) to draw immediate attention.

### 2. Mobile-Responsive Navigation (Sidebar)
- **What it does:** Allows users to navigate seamlessly across different application modules, adapting its UI depending on the device size.
- **How it works (technically):** Implemented in `Sidebar.tsx` as a Client Component (`'use client'`). It utilizes React state (`useState`) to track whether the menu is open or closed on mobile. On desktop, it is a fixed left-side panel. On mobile, it transforms into an off-canvas menu utilizing Tailwind's `translate-x` utility and `transition-transform` classes.
- **Edge cases / User interactions:** 
  - *Touch Targets:* All navigation links and buttons are enforced to be at least `44x44px` to meet mobile accessibility standards.
  - *Backdrop Click:* A semi-transparent overlay (`z-40`) is rendered behind the open menu on mobile; clicking it automatically closes the menu.

### 3. Body Intake & Registration (Admit Flow)
- **What it does:** Provides the interface for intaking and registering new bodies into the system with an assigned identification number.
- **How it works (technically):** Accessible via the `/admit` route, allowing users to input data. When a body is admitted, an "Admitted" event is logged in the system's history.
- **Edge cases / User interactions:** Ensures that generated Body IDs (e.g., `BL-2026-1245`) are unique and standardized to prevent duplication.

### 4. Inventory Tracking (Scan Tool)
- **What it does:** A tool for daily verification, ensuring all logged bodies are physically accounted for in their designated locations.
- **How it works (technically):** Accessible via the `/scan` route. Users can simulate a barcode scan or manual entry which logs a "Daily Scan" event with timestamps and user attribution.
- **Edge cases / User interactions:** Missing a scan within a 24-hour window triggers an alert that appears prominently on the main dashboard.

### 5. Body Release Management
- **What it does:** A secure process for discharging bodies to authorized parties (e.g., funeral homes or families).
- **How it works (technically):** Found under the `/release` route. Once finalized, the body's status is changed, and a "Body Released" badge is generated with the timestamp and releasing doctor's details.
- **Edge cases / User interactions:** Prevents release if there are active holds on the body (e.g., pending autopsy or police holds).

### 6. Audit & History Logging
- **What it does:** Maintains a tamper-evident log of all actions performed within the system for strict legal and operational accountability.
- **How it works (technically):** Found under the `/audit` route. The system captures the actor (user), timestamp, action type, and specific Body ID for every transaction. 
- **Edge cases / User interactions:** Audit logs are read-only to ensure chain-of-custody integrity, meaning records cannot be mutated once submitted. 

---

## Tech Stack & Architecture
- **Next.js (App Router):** Server-side rendering and intuitive file-based routing.
- **React 18:** Component architecture and state management.
- **Tailwind CSS:** Responsive, utility-first styling.
- **Lucide React:** Consistent, lightweight SVG iconography.
- **TypeScript:** Type safety for predictable, robust code.
