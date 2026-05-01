---
name: Utility Modern
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin: 24px
---

## Brand & Style

This design system is built upon the pillars of efficiency, precision, and clarity. It is tailored for high-utility applications where information density must be balanced with ease of use. The aesthetic follows a **Corporate / Modern** direction, drawing inspiration from high-end technical documentation and professional productivity tools.

The visual language avoids unnecessary decoration, favoring structural integrity and systematic alignment. It aims to evoke a sense of reliability and quiet sophistication, ensuring that the user feels in total control of the environment. Whitespace is used intentionally to group related settings, reducing cognitive load during complex configuration tasks.

## Colors

The palette is anchored by a vibrant indigo primary color, chosen for its high visibility and professional associations. This is supported by a comprehensive neutral scale of cool grays that define the UI's structural layers.

- **Primary (Indigo):** Used for primary actions, active states, and critical progress indicators.
- **Secondary (Sky):** Used for informational accents and secondary interactive elements.
- **Neutral (Slate/Gray):** A range of cool grays provides the foundation for backgrounds, borders, and text.
- **Backgrounds:** The primary interface uses a very light gray (#F8FAFC) to reduce glare while providing enough contrast for white container elements to pop.
- **Semantic Colors:** Standardized Red (Error), Amber (Warning), and Green (Success) are used sparingly to signal system status.

## Typography

This design system utilizes **Inter** for all typographic needs, leveraging its tall x-height and excellent legibility in small-scale utility interfaces. 

The hierarchy is strictly enforced through a combination of font weight and subtle color shifts. Headlines use a tighter letter-spacing and heavier weights to anchor pages. Body copy is optimized for readability with a standard 1.5x line height. Labels for forms and metadata utilize a medium weight (500) to distinguish them clearly from input values. All uppercase text is reserved for small labels (label-sm) with increased tracking to ensure readability at a glance.

## Layout & Spacing

A disciplined **8px grid system** governs all spatial relationships. The layout utilizes a **Fixed Grid** model for settings and dashboards to maintain a readable line length, centering content on larger displays.

- **Grid:** A 12-column system is used for complex layouts, while settings forms typically occupy a 6 or 8-column centered span.
- **Section Spacing:** Major functional areas are separated by 32px (xl), while internal component spacing (like labels to inputs) uses 8px (base).
- **Forms:** Settings forms follow a vertical stack with 24px (lg) spacing between form groups to create a clear visual rhythm.
- **Margins:** Page-level margins are set to a minimum of 24px to ensure breathing room on mobile and tablet devices.

## Elevation & Depth

Visual hierarchy is primarily achieved through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows. This keeps the interface feeling "flat" and efficient.

- **Level 0 (Base):** The main background color (#F8FAFC).
- **Level 1 (Surface):** White containers (#FFFFFF) used for cards and form sections, featuring a subtle 1px border (#E2E8F0).
- **Level 2 (Interaction):** Very soft, diffused shadows (0px 4px 6px rgba(0,0,0,0.05)) are used exclusively for elements that hover or require immediate attention, such as dropdown menus and modals.
- **Depth Cues:** Active states for buttons and inputs are indicated by a 2px primary color outline or a slight shift in background saturation.

## Shapes

The design system employs a **Soft** shape language to maintain a professional, semi-technical appearance. Extreme roundness is avoided to ensure the UI feels structural and space-efficient.

- **Small Components:** Checkboxes, small buttons, and tags use a 0.25rem (4px) radius.
- **Standard Components:** Input fields, primary buttons, and cards use a 0.5rem (8px) radius.
- **Large Components:** Modals and large feature containers use a 0.75rem (12px) radius.
- **Focus Indicators:** Focus rings follow the shape of the parent element with a 2px offset.

## Components

Consistency in component behavior is vital for this design system's functional promise.

- **Buttons:** Primary buttons use a solid Indigo background with white text. Secondary buttons use a transparent background with a Slate-300 border. Transitions should be a snappy 150ms ease-in-out.
- **Input Fields:** Use a 1px border (#CBD5E1) that thickens and changes to Indigo on focus. Placeholders should be a light gray (#94A3B8).
- **Settings Groups:** Settings are organized into "Sections" with a Title (title-md), an optional description (body-md), and a divider line at the bottom.
- **Chips & Tags:** Small, low-contrast pills with 4px corner radius, used for status indicators or filtering categories.
- **Toggles:** Physical switch metaphors are used for binary settings, employing the primary color for the "On" state.
- **Data Tables:** High-density rows with 1px horizontal dividers and no vertical lines. Headers are bolded and set in label-sm style.
- **Feedback:** Inline validation messages appear immediately below the input field in a smaller font size (12px) using semantic colors.