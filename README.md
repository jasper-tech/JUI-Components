# UI Components

This project includes reusable UI components built with **React** and **Tailwind CSS**. These components are designed to be responsive and easy to integrate into your web applications.

## Components

### 1. **Responsive Header**

A responsive header with a logo, navigation links, and a hamburger menu for mobile screens.

**Features**:

- Adapts to both desktop and mobile screens.
- Toggleable mobile menu with a hamburger icon.

### 2. **Dashboard**

A responsive dashboard with cards displaying different content. The layout adapts to screen size, showing a one-column layout on mobile and a three-column layout on larger screens.

**Features**:

- Grid layout for cards.
- Cards with icons and titles.
- Responsive to various screen sizes.

### 3. **Sidebar**

A collapsible sidebar with navigation links and icons. It can toggle between collapsed and expanded states.

**Features**:

- Collapsible design for more screen space.
- Menu items with icons and text.
- Adapts to both desktop and mobile screens.

## Installation

1. Install Tailwind CSS in your React project:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Add Tailwind CSS to your project by including the following in your `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Usage

1. **ResponsiveHeader**: Use it in your main layout to create a responsive header.
2. **Dashboard**: Use the `Dashboard` component for a responsive card-based layout.
3. **Sidebar**: Integrate the `Sidebar` component to create a collapsible sidebar with navigation.

---
