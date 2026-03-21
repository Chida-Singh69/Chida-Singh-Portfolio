# Chida's Minecraft Portfolio

A **Minecraft-inspired personal portfolio** built with **React + Vite**.  
Showcases projects, experience, skills, and contact info in a pixel-art UI with smooth animations and section snap scrolling.

## Features

- **Minecraft Theme:** Inventory-style navigation, pixel fonts, blocky icons, and game-inspired backgrounds.
- **Smooth Animations:** Section transitions and interactive UI using Framer Motion.
- **Snap Scrolling:** Each section fits perfectly on scroll for a seamless experience.
- **Responsive Design:** Works on desktop and mobile.
- **Easy Project Expansion:** Add new projects by editing a single array.
- **Asset-Based Icons:** Uses real Minecraft item/block icons from the `/src/assets` folder.
- **Custom Background:** Beautiful Minecraft sunset wallpaper from `/src/background`.

## Sections

- **Home:** Name, title, and navigation.
- **Projects:** Inventory grid with project details, tech stack, and links.
- **Experience:** Timeline with roles, dates, and highlights.
- **Skills:** Displayed as Minecraft items.
- **About:** Education and personal info.
- **Contact:** Social links and email.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- **Add Projects:**  
  Edit `src/Components/Projects.jsx` and add to the `projectsData` array.
- **Change Background:**  
  Replace `/src/background/evening_sunset_background.jpg` with your own image.
- **Update Icons:**  
  Add or replace icons in `/src/assets` and update references in components.
- **Edit Content:**  
  Update text and details in each section's component file.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Custom CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Credits

- Minecraft assets and icons are property of Mojang/Microsoft, used for personal portfolio purposes.
---
