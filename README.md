# Chidananda Singh Portfolio - Technical Guide

This document describes the technical architecture and implementation details of this Minecraft-inspired personal portfolio. It is designed to help anyone understand how the project functions and how the various advanced web technologies are integrated.

## Project Overview

The portfolio is a high-performance, single-page application (SPA) that uses a pixel-art design theme. It features interactive navigation, dynamic themes, and a range of technical optimizations to ensure a smooth user experience.

## Core Technologies

The following tools and libraries form the foundation of this project:

- **React:** A JavaScript library for building the user interface through reusable components.
- **Vite:** A modern build tool and development server that provides fast reload times and efficient bundling.
- **Framer Motion:** Used to create all the smooth transitions and interactive animations across the site.
- **Custom CSS:** Vanilla CSS is used for all styling to maintain a unique, blocky Minecraft aesthetic.
- **SASS:** For structured and maintainable styles.
- **React Three Fiber (Draft):** The infrastructure for future 3D enhancements is pre-installed.

## Performance Features

Performance was a primary goal during development. Several techniques are used to reduce initial load times:

### Asset Preloading and Prefetching
Critical assets like the main logo, fonts, and primary background images are preloaded in the HTML head. This tells the browser to download these items first. Other assets, like alternate backgrounds, are prefetched in the background after the main page is ready.

### Video Poster Images
The high-quality video backgrounds are large files. To prevent a blank screen while they load, static "poster" images are used. This ensures the site looks complete from the very first second.

### Code Splitting
The project uses `React.lazy` and `Suspense`. The code for sections like Projects, Skills, and Contact is only downloaded when a user clicks on them. This keeps the initial download size small and the startup time fast.

### Image Lazy Loading
Non-essential images like project icons and skill logos use the `loading="lazy"` attribute. They only load when they are about to become visible on the screen.

## SEO and Accessibility

The site is optimized to be easily discoverable by search engines and accessible to all users.

- **Descriptive Meta Tags:** Custom titles and descriptions are provided to improve search result appearance.
- **Open Graph and Twitter Cards:** These tags ensure that links shared on social media (LinkedIn, Twitter, etc.) display a professional preview with an image.
- **JSON-LD Structured Data:** The site includes a schema for "Person" and "WebSite" in JSON format. This helps Google understand your professional details and social media links.
- **Accessibility:** Images include descriptive alt text, and buttons use ARIA labels to help screen reader users.

## PWA and Offline Support

This site is a Progressive Web App (PWA), meaning it can be installed on a device and accessed without an internet connection.

### Web Manifest
The `manifest.json` file provides the browser with the metadata needed to install the site as an application. It includes branding colors, app icons, and display settings.

### Service Worker
A service worker (`sw.js`) is used to cache assets on the user's device. It includes a specialized handler for background videos to support "Range Requests." This is a technical requirement for certain browsers to play videos from a local cache correctly.

## Theme Management

The site features two main themes: Overworld and Nether.

- **Theme Toggle:** Users can switch between themes through a vertical toggle switch in the sidebar.
- **CSS Variables:** Themes are managed using CSS variables. Changing the theme updates colors and video backgrounds globally.
- **Adaptive Video:** The project automatically detects slow internet or mobile devices and serves smaller, compressed versions of the background videos to save data.

## Project Structure

- **/public:** Contains static assets like background videos, the manifest, robots.txt, and the service worker.
- **/src/Components:** Contains the individual React components for each section (Home, Projects, etc.).
- **/src/assets:** Contains the pixel-art icons and logos used throughout the site.
- **/src/App.jsx:** The main coordination point for navigation, themes, and asset management.

## Setup Instructions

To run this project locally:

1. Install all dependencies using `npm install`.
2. Start the development server with `npm run dev`.
3. Open the link provided in your terminal (usually http://localhost:5173).

For production, run `npm run build` to generate the optimized files in the `/dist` folder.
