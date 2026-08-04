# Hotel Management Dashboard

A modern hotel management dashboard built with React, TypeScript, Vite, SCSS, and Chart.js. The application provides administrative interface for monitoring hotel operations such as guests, rooms, rates, deals, and front-desk availability.

## Overview

This project is a frontend-focused hotel management application designed to demonstrate practical React and TypeScript development.

It includes a dashboard with hotel statistics and charts, along with separate management views for guests, rooms, rates, deals, and front-desk room availability.

> **Note:** This is a frontend project. The application currently uses local/static data and React state for interactions; there is no backend database or persistent API layer.

## Features

### Dashboard

- Today's date display
- Hotel overview statistics
- Check-in, check-out, and in-hotel information
- Available and occupied room statistics
- Room type overview with pricing
- Room status information
- Floor completion status
- Occupancy statistics chart

### Front Desk

- Check room availability interface
- Check-in and check-out date fields
- Room availability table
- Room type and status information

### Guest Management

- Guest listing table
- Search guests by room number
- Check-in / check-out filtering
- Status filtering
- Pagination
- Guest detail modal
- Add guest form
- Guest profile image upload
- Check-in date validation

### Room Management

- View all rooms
- Filter available rooms
- Filter booked rooms
- Room status information
- Add room form
- Pagination
- Room details including:
  - Room number
  - Bed type
  - Floor
  - Facilities
  - Status

### Deals

- Ongoing deals
- Finished deals
- Deal listing table

### Rate Management

- Room rate listing
- Deal information
- Deal price
- Add rate form

## Tech Stack

- **React 19** — UI development
- **TypeScript** — Type-safe JavaScript
- **Vite** — Development server and build tool
- **React Router DOM** — Client-side routing
- **SCSS / Sass** — Styling and responsive layouts
- **Chart.js** — Data visualization
- **react-chartjs-2** — React integration for Chart.js

## Charts

The dashboard uses Chart.js for data visualization, including:

- Doughnut chart for floor completion status
- Bar chart for monthly occupancy statistics

## Application Routes

| Page       | Route         |
| ---------- | ------------- |
| Dashboard  | `/dashboard`  |
| Front Desk | `/front-desk` |
| Guest      | `/guest`      |
| Room       | `/room`       |
| Deal       | `/deal`       |
| Rate       | `/rate`       |

The root route also displays the dashboard.

## Project Structure

```text
hotel-management/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── aside/
│   │   ├── main/
│   │   ├── section/
│   │   │   ├── dashboard/
│   │   │   ├── frontDesk/
│   │   │   ├── guest/
│   │   │   ├── room/
│   │   │   └── Rate/
│   │   ├── table/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── aside.ts
│   │   ├── dashboard.ts
│   │   ├── deal.ts
│   │   ├── frontDesk.ts
│   │   ├── guest.ts
│   │   ├── header.ts
│   │   ├── rate.ts
│   │   ├── room.ts
│   │   └── routes.ts
│   │
│   ├── styles/
│   │   ├── style.scss
│   │   └── _variables.scss
│   │
│   ├── types/
│   │   └── data.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Reusable UI components are separated into areas such as:

- Buttons
- Inputs
- Headings
- Navigation
- Tables
- Pagination
- Forms
- Modal/overlay interfaces

## Data Management

The project currently uses TypeScript data modules instead of a backend API.

Example data areas include:

```text
src/data/
├── dashboard.ts
├── guest.ts
├── room.ts
├── rate.ts
├── deal.ts
└── frontDesk.ts
```

React state is used for interactive frontend operations such as:

- Searching
- Filtering
- Pagination
- Opening and closing forms
- Adding guests
- Adding rooms
- Adding rates

Because the project has no backend or database, newly added data is not permanently persisted after the application is refreshed.

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

You can check your versions with:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/sudip-stha/hotel-management.git
```

Move into the project directory:

```bash
cd hotel-management
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

## Development Highlights

This project demonstrates practical frontend development concepts including:

- Component-based React architecture
- TypeScript interfaces and typed data
- Client-side routing
- Lazy-loaded route components
- React state management
- Controlled form inputs
- Form validation
- Search and filtering
- Pagination
- Modal and overlay interfaces
- Reusable UI components
- Data visualization
- SCSS organization
- Separation of UI, data, and type definitions

## Project Status

**Status:** Frontend Prototype

The current version focuses on the user interface, frontend interactions, component architecture, and dashboard experience. Backend persistence and real-time hotel operations are not currently implemented.

Frontend Developer

- Live Demo: `https://hotel-management-eight-vert.vercel.app/`
- Portfolio: `https://sudip-dev.vercel.app/`
- LinkedIn: `https://www.linkedin.com/in/sudip-shrestha-063874305/`
