# Shoebill Fans Club — Sign-Up Page

A mockup sign-up page for the **Shoebill Fans Club** — celebrating the majestic dino bird and its legendary beak. Built with vanilla HTML, CSS, and JavaScript.

---

## Table of Contents

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
- **Password validation** — enforces a minimum of 8 characters with at least one uppercase letter, one lowercase letter, and one number
- **Password confirmation check** via JavaScript, with visual red-border feedback on mismatch
- **Responsive layout** that adapts for smaller screens (≤ 766px)
- **Smooth button interactions** with hover lift and active press animations

---

## Project Structure

```
project/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive layout
├── script.js       # Password confirmation validation logic
└── shoebill.jpg    # Shoebill bird image (required)
```

---

## Getting Started

No build tools or dependencies required. Just open the project in a browser:

1. **Clone or download** the project files into a folder.
2. Add a `shoebill.jpg` image file to the project root (the card image will not display without it).
3. Open `index.html` directly in your browser.

> **Note:** The form uses `method="get"`, so submission data will appear in the URL query string. This is intentional for a mockup/demo context.

---

## Form Validation

Validation is handled through a combination of **HTML5 native validation** and **JavaScript**.

| Field              | Validation                                                                 |
|--------------------|----------------------------------------------------------------------------|
| First Name         | Required                                                                   |
| Last Name          | Required                                                                   |
| Phone Number       | Required, `type="tel"`                                                     |
| Email              | Required, `type="email"` (browser-native format check)                     |
| Password           | Required, min 8 chars, must include uppercase, lowercase, and a digit      |
| Confirm Password   | Must match the Password field (checked via JavaScript on form submission)  |

When passwords do not match, both password fields are highlighted with a red border and an error message is displayed below the confirm field.

---

## Responsive Design

The layout uses **Flexbox** and a `@media` breakpoint at `max-width: 766px`:

- On **wider screens**: the image card and form sit side by side.
- On **smaller screens**: the layout stacks vertically, the card image repositions, and font sizes adjust for readability.

Font sizes throughout use `clamp()` for fluid scaling between viewport sizes.

---

## Technologies Used

- **HTML5** — Semantic structure and native form validation
- **CSS3** — Flexbox layout, CSS reset, `clamp()`, media queries, transitions
- **JavaScript (Vanilla)** — Password match validation on submit
- **Google Fonts** — [Sekuya](https://fonts.google.com/) for the card title

---

## Known Issues / Notes

- The **"Log in" link** in the footer is a placeholder and redirects to an external URL (currently a joke link).
- `shoebill.jpg` must be present in the project root — the card section will be blank otherwise.
- The form does not connect to any backend; data is not stored or processed.
