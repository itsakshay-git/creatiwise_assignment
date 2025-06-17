# 🧪 Component Testing Guide

## live video demo

- [live link](https://creatiwise-assignment-silk.vercel.app/)

This project uses **[Vitest](https://vitest.dev/)** and **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** for unit testing React components such as `Footer`, `Blogs`, `Experience`, `FAQ`, and more.

---

## 🚀 Getting Started

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

## 📁 Test File Structure

Tests are colocated with components and follow this naming pattern:

```bash
src/
components/
Footer/
Footer.jsx
Footer.test.jsx
Blogs/
Blogs.jsx
Blogs.test.jsx

```

---

## 🛠️ Installation & Setup

Install the necessary packages:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

```

## Update your vite.config.js to enable testing:

```javascript
//vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
```

## Create the setup.js file to extend Jest matchers:

```bash
// src/test/setup.js
import '@testing-library/jest-dom';
```

## 📦 Running Tests

Run all test files:

```bash
npx vitest
```

Run in watch mode:

```bash
npx vitest --watch
```

Run a specific test file:

```bash
npx vitest run src/components/Footer/Footer.test.jsx
```

## Example Test: Blogs

```javascript
import { render, screen } from "@testing-library/react";
import Blogs from "./Blogs";

test("renders all blog titles and tags", () => {
  render(<Blogs />);
  expect(screen.getByText("How UX works in web")).toBeInTheDocument();
  expect(
    screen.getByText("Case study - Analysis Application.")
  ).toBeInTheDocument();
  expect(screen.getByText("UX Thinking in UI Strategy")).toBeInTheDocument();

  ["UI", "UX", "DESIGN", "PRINT", "WEB", "MOBILE"].forEach((tag) => {
    expect(screen.getByText(tag)).toBeInTheDocument();
  });
});
```
