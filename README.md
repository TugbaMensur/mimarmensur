# Architectural Portfolio & Academic Archive — Tuğba Mensur

This is a high-end, minimalist multi-page portfolio and academic archive website built with React, Vite, and Tailwind CSS. The design system is strictly rooted in the Japanese spatial concept of **"Ma" (structured emptiness)** — prioritizing maximum whitespace, clean geometric lines, and the complete absence of unnecessary decoration.

Live Project Link: [mimarmensur.lovable.app](https://mimarmensur.lovable.app/)

---

## 📐 Design System & Visual Foundation

### 1. Concept: "Ma"
The layout must maintain generous padding, fluid scaling, and strict visual breathing room. Do not overcrowd grid elements.

### 2. Typography (Scaled +15% for spatial breathing room)
* **Headings / Logo / Accents:** `Josefin Sans` (Elegant, geometric, sharp sans-serif).
* **Body Text / Navigation / Lists:** `Avenir` (Professional, highly readable, neutral sans-serif).

### 3. Color Coding
The website utilizes a strict dual-color emotional layout to separate creative practice from theoretical research:
* 🔴 **Creative Block (Home, About, Portfolio):** Terracotta (`#FF1F06` / `#D53928`) — represents raw construction, earth, and physical form.
* 🔵 **Academic Block (Research, Thesis, Documents):** Deep Blue (`#091BFE`) — represents structured logic, intellectual depth, and blueprints.

### 4. Special Visual Effects
* **Hero Section Accent:** The word "Space" on the homepage is styled with **10% opacity** to achieve an weightless, ethereal architectural presence.

---

## 🗺️ Website Structure (Sitemap)

The project is structured as a comprehensive multi-page application:
* **Home:** Visual manifesto showcasing the signature transparent typography and primary identity.
* **About Me:** Creative biography and core design credo.
* **Portfolio:** Main architectural grid leading to **8 individual project pages** with dedicated vertical scroll logic.
* **Research Proposal:** In-depth theoretical analysis focusing on *Achieve* and *Earthquake* topics (utilizes the **Deep Blue** academic accent).
* **Master's Thesis:** Academic presentation and breakdown of the master's thesis.
* **Publications & Essays:** Text archive containing key publications (*Isarc*, *AURA*, *Utopia*).
* **Documents:**
    * *CV:* Clean, downloadable curriculum vitae.
    * *Additional Courses:* Perfectly aligned layout listing specialized courses attended or taught.
    * *Certificates:* Minimalist asset gallery for official credentials.
* **Reference & Contact:** Ultra-clean layout. **No social media icons, no language switchers.** Features only verified professional links and the primary email: `tugbamensur@outlook.com`.

---

## 🛠️ Technical Stack & Development

This project was initially generated and customized via **Lovable** using modern frontend workflows.

### Tech Stack:
* **Framework:** React (Vite-backed)
* **Styling:** Tailwind CSS (configured for custom typography and the exact Hex color codes listed above)
* **Routing:** React Router (Multi-page configuration)
* **UI Components:** Shadcn UI / Radix Primitives (highly customized for minimalism)

### Getting Started for Developers:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/TugbaMensur/mimarmensur.git](https://github.com/TugbaMensur/mimarmensur.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the local development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

### Guidelines for Future Modifications:
* **Styling:** Maintain strict compliance with the `#FF1F06` (Creative) and `#091BFE` (Academic) color restrictions. Do not add arbitrary shades.
* **Responsiveness:** The layout uses a "Smart Grid" approach. Ensure that when elements stack on mobile viewports, the rigorous font hierarchy and generous spacing remain perfectly proportional.
* **Footer Constraint:** The footer must remain completely clean. Only the plain text email and a standard copyright notice are allowed.
