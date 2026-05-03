# Mobile Responsiveness Refactoring Plan

The goal is to refactor the dashboard components to be fully responsive on mobile screens, meeting all your requirements including the collapsible sidebar, responsive grid layouts, and touch target sizing.

## Open Questions

- **Top Navigation Bar**: Your requirements mention a "Top navigation bar", but the current code in `layout.tsx` and `page.tsx` does not have a dedicated top nav bar. To satisfy the requirement for the mobile hamburger button, I will introduce a mobile-only top header that contains the hamburger button and the app title, which will only be visible on smaller screens (`< 768px`). Please let me know if you prefer a different approach.

## Proposed Changes

### UI & Navigation Layer

#### [MODIFY] src/components/Sidebar.tsx
- Add a mobile-only Top Header containing a Hamburger toggle button.
- Convert the sidebar into a collapsible off-canvas menu on mobile (`< 768px`).
- Use `z-50`, `fixed`, `transform`, and `transition-transform duration-300` classes to slide the sidebar in/out on mobile.
- Add a semi-transparent backdrop overlay (`bg-black/50`) when the sidebar is open on mobile.
- Ensure all interactive links have a minimum height/width of `44px` (using `p-3` and flex alignment) to improve touch targets.

#### [MODIFY] src/app/layout.tsx
- Update the `<main>` tag's classes to be responsive: `md:ml-[280px]` (only apply the margin on desktop).
- Adjust padding to be responsive: `p-4 sm:p-6 lg:p-8`.
- Add top padding on mobile (`pt-20 md:pt-8`) to account for the new mobile top header.
- Ensure no horizontal scrolling on the body (`overflow-x-hidden`).

---

### Dashboard Page

#### [MODIFY] src/app/dashboard/page.tsx
- **Stats Grid**: Change the hardcoded 4-column grid (`grid-cols-4`) to a responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- **Alert Banner**: Update the "Missing Bodies Alert" banner to wrap its contents elegantly on small screens (stack the button below the text on mobile using `flex-col sm:flex-row`).
- **Recent Activity**: 
  - Ensure the activity list items maintain good readability on mobile.
  - Stack the timestamp or align it properly to avoid horizontal clipping.
  - Ensure parent containers have `max-w-full`.

---

## Verification Plan

### Manual Verification
- Resize the browser window to mobile width (< 768px).
- Verify the sidebar is hidden by default and a hamburger menu appears.
- Click the hamburger menu to ensure the sidebar slides in and the dark overlay appears.
- Click the overlay to ensure the sidebar closes.
- Verify the Stats Grid collapses into a single column on mobile and 2 columns on tablets.
- Verify all touch targets (buttons, links) are at least `44x44px`.
- Verify no horizontal scrolling occurs on the main page.
