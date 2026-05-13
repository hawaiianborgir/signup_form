# 🦤 Shoebill Fans Club — Sign-Up Page

A mockup sign-up page for the **Shoebill Fans Club** — celebrating the majestic dino bird and its legendary beak. Built with vanilla HTML, CSS, and JavaScript.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Form Validation](#form-validation)
- [Responsive Design](#responsive-design)
- [Technologies Used](#technologies-used)
- [Known Issues / Notes](#known-issues--notes)

---

## Overview

This is a **static front-end mockup** of a fan club sign-up page. It features a two-column layout — a decorative shoebill image card on the left and a registration form on the right. Users can sign up to receive a free shoebill plushie (not real, unfortunately).

---

## Features

- **Decorative image card** with an overlay title using the custom *Sekuya* font
- **Sign-up form** collecting first name, last name, phone number, email, and password
- **Password pattern validation** — enforces a minimum of 8 characters with at least one uppercase letter, one lowercase letter, and one number
- **Password confirmation check** via JavaScript, with red-border styling (`.pass--error`) on mismatch
- **Auto-clearing error state** — the red border and error message clear as soon as the user starts retyping in the confirm password field
- **Input focus glow** — a subtle box-shadow appears on focused input fields
- **Responsive layout** that adapts for smaller screens (≤ 766px)
- **Smooth button interactions** with hover lift and active press animations

---

## Project Structure

```
project/
├── index.html      # Main HTML structure
├── style.css       # Styling, responsive layout, and error state classes
├── script.js       # Password pattern and confirmation validation logic
└── shoebill.jpg    # Shoebill bird image (required)
```

---

## Getting Started

No build tools or dependencies required. Just open the project in a browser:

1. **Clone or download** the project files into a folder.
2. Add a `shoebill.jpg` image file to the project root (the card section will be blank without it).
3. Open `index.html` directly in your browser.

> **Note:** The form uses `method="get"`, so submission data will appear in the URL query string. This is intentional for a mockup/demo context.

---

## Form Validation

Validation is handled through a combination of **HTML5 native validation**, **CSS error classes**, and **JavaScript event listeners**.

| Field            | Validation                                                             | Trigger               |
|------------------|------------------------------------------------------------------------|-----------------------|
| First Name       | Required                                                               | Native HTML5          |
| Last Name        | Required                                                               | Native HTML5          |
| Phone Number     | Required, `type="tel"`                                                 | Native HTML5          |
| Email            | Required, `type="email"` (browser-native format check)                 | Native HTML5          |
| Password         | Min 8 chars, must include uppercase, lowercase, and a digit            | On button click via JS|
| Confirm Password | Must match the Password field                                          | On form submit via JS |

### Error State Behaviour

- **Password field** — gains the `.pass--error` class (red border) when the pattern check fails on button click. The error clears automatically as the user edits the field to a valid value.
- **Confirm Password field** — gains the `.pass--error` class and shows an inline error message if the passwords don't match on submit. Both clear as soon as the user starts retyping.

---

## Responsive Design

The layout uses **Flexbox** and a `@media` breakpoint at `max-width: 766px`:

- On **wider screens**: the image card and form sit side by side.
- On **smaller screens**: the layout stacks vertically, the card image repositions, and font sizes adjust for readability.

Font sizes throughout use `clamp()` for fluid scaling between viewport sizes.

---

## Technologies Used

- **HTML5** — Semantic structure and native form validation
- **CSS3** — Flexbox layout, CSS reset, `clamp()`, media queries, transitions, and a `.pass--error` utility class for JS-driven error styling
- **JavaScript (Vanilla)** — Password pattern validation and confirmation match check, with dynamic class toggling and error message rendering
- **Google Fonts** — [Sekuya](https://fonts.google.com/) for the card title

---

## Known Issues / Notes

- The **"Log in" link** in the footer is a placeholder and redirects to an external URL (currently a joke link).
- `shoebill.jpg` must be present in the project root — the card section will be blank otherwise.
- The form does not connect to any backend; data is not stored or processed.