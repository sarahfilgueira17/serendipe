# Design System Document: The Kinetic Intelligence Framework

## 1. Overview & Creative North Star
The "Kinetic Intelligence" framework is designed to bridge the gap between abstract high-technology and tangible premium experience. This system rejects the static, boxy layouts of traditional enterprise tech in favor of a dynamic, one-page editorial journey.

**Creative North Star: The Luminescent Core**
Like the reference imagery from Intel and Cisco, the UI should feel as if it is powered by an internal light source. We move beyond "standard" modernism by utilizing intentional asymmetry, deep tonal layering, and "active" white space. Every element is a piece of a singular, high-performance machine—connected not by lines, but by light and depth.

---

## 2. Colors: Depth and Luminescence
Our palette is rooted in the "Deep Sea" spectrum, using neon accents to guide the user's eye through a mobile-first, one-page narrative.

### The "No-Line" Rule
**Explicit Instruction:** Use of 1px solid borders for sectioning or containment is strictly prohibited. 
- Boundaries must be defined through background color shifts. For example, a `surface-container-low` section should sit directly on a `background` or `surface` base. 
- Visual separation is achieved through contrast, not strokes.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of glass panels. 
- **Base Layer:** `surface` (#090f12)
- **Primary Content Blocks:** `surface-container-low` (#0e1418) or `surface-container` (#131b1e).
- **Interactive Elements/Cards:** `surface-container-highest` (#1e272b) to create natural "lift."

### The "Glass & Gradient" Rule
To capture the high-tech soul of the institute:
- **Glassmorphism:** Use `surface-variant` at 40-60% opacity with a `backdrop-filter: blur(20px)` for floating navigation bars or overlays.
- **Signature Textures:** Apply a linear gradient from `primary` (#71b1ff) to `primary-container` (#56a4fb) at a 135-degree angle for all primary CTAs and hero-level accents. This creates the "Intel-style" glow that feels alive.

---

## 3. Typography: The Futuristic Voice
We utilize a high-contrast pairing to balance technical precision with human readability.

- **Display & Headline (Space Grotesk):** This futuristic sans-serif is our "technical voice." Its geometric quirks suggest innovation. Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em) to feel intentional and editorial.
- **Title & Body (Manrope):** Our "human voice." Manrope provides exceptional legibility at small scales. 
- **The Hierarchy Strategy:** Lead with massive headlines in `on-surface` and support them with `body-md` in `on-surface-variant` (#a6acb0) to create a sophisticated, low-contrast secondary layer that emphasizes the primary message.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows are secondary to light. We convey hierarchy through "Tonal Layering."

- **The Layering Principle:** Place a `surface-container-lowest` (#000000) card inside a `surface-container-low` section. The natural contrast creates a recessed "void" look, perfect for data or code snippets.
- **Ambient Shadows:** For floating components, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow must never be harsh; it should feel like an ambient occlusion glow.
- **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` (#43494c) at 15% opacity. This creates a "hairline" suggestion of a container without breaking the seamless flow.
- **Subtle Glows:** Emulate the Cisco-style UI by adding a `box-shadow: 0 0 15px` using the `primary` token at 20% opacity for active states or "Powered by AI" badges.

---

## 5. Components

### Buttons (The Kinetic Drivers)
- **Primary:** Gradient fill (`primary` to `primary-container`), `full` roundedness, and `title-sm` typography. Include a subtle 10px outer glow of the same color on hover.
- **Secondary:** Transparent background with a "Ghost Border" and `on-surface` text.
- **Tertiary:** No background or border. Use `primary` color for text with an accompanying chevron icon.

### Chips (The Taxonomy)
- Use `surface-container-highest` for the background.
- For "Active" states, use the `tertiary` (#d28bff) token to provide a neon-purple counterpoint to the blue-heavy UI.

### Cards & Lists (The Narrative Blocks)
- **Constraint:** Zero divider lines.
- **Implementation:** Separate list items using `8` (2.75rem) of vertical spacing. 
- For cards, use a `surface-container-low` background with a subtle inner-glow (1px top-stroke using `primary` at 10% opacity) to catch the "light" from the top of the screen.

### Input Fields
- Background: `surface-container-lowest`.
- Focus State: A 2px bottom-bar using the `primary` gradient. Do not outline the entire box; keep the layout "open."

---

## 6. Do's and Don'ts

### Do:
- **Mobile-First Asymmetry:** Use the Spacing Scale `10` or `12` for side margins on mobile to let the content breathe, but use staggered vertical offsets for images to create an editorial feel.
- **Intentional Overlap:** Allow images or "Glass" containers to slightly overlap section transitions to break the "grid" feel.
- **Use "Space Grotesk" for numbers:** All data points and stats should be large, bold, and technical.

### Don't:
- **Don't use pure white:** Always use `on-surface` (#ecf1f6) for text to maintain the premium, low-strain dark mode experience.
- **Don't use 100% opaque borders:** This kills the "Glassmorphism" effect and makes the UI look like a template.
- **Don't crowd the content:** If in doubt, increase the spacing. High-tech institutes should feel expensive, and "space" is the ultimate luxury in digital design.