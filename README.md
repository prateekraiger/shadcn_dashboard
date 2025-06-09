# Shadcn Dashboard

A modern, responsive dashboard template built with Next.js, TypeScript, and [shadcn/ui](https://ui.shadcn.com/). This dashboard demonstrates real-world usage with charts, tables, user management, and more.

## Features

- **Beautiful UI**: Built with shadcn/ui and Tailwind CSS for a clean, modern look.
- **Responsive Layout**: Works great on desktop and mobile.
- **Sidebar Navigation**: Quick access to Dashboard, Payments, Users, Search, and Settings.
- **Charts & Analytics**: Area, bar, and pie charts for visualizing data.
- **User Management**: View users, user profiles, and edit user details.
- **Payments Table**: Paginated, sortable payments table with real data structure.
- **Todo List**: Track important tasks and reminders.
- **Theme Support**: Light and dark mode toggle.

## Getting Started

1. **Install dependencies**

   ```powershell
   pnpm install
   ```

2. **Run the development server**

   ```powershell
   pnpm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Next.js app directory (pages, layouts, routes)
- `src/components/` - Reusable UI and dashboard components
- `src/components/ui/` - shadcn/ui primitives
- `public/` - Static assets

## Customization

- Add your own data sources or connect to APIs in the chart and table components.
- Update sidebar links and add new pages as needed.
- Tweak the theme and styles in `globals.css`.
