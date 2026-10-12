# TechNova Computer Academy

A premium computer training institute website with a central configuration, enquiry management system, and responsive multi-page design.

## Overview
This project provides a static-but-functional educational website foundation for TechNova Computer Academy, built around a modern, premium, technology-focused design. It includes a public-facing site, course catalogue, admissions pages, blog articles, FAQ, contact forms, callback modal, and admin dashboard mock-up.

## Template foundation
The site is designed as a custom adaptation of an education-focused template style and uses a clean, configurable structure with central content definitions.

## Features included
- Multi-page website structure
- Responsive design
- Course catalogue with search
- Course detail pages
- Callback modal form
- Public enquiry forms
- Admin dashboard view
- CSV export route
- Central site configuration file
- Contact, privacy, and terms pages
- Blog and FAQ pages
- WhatsApp and call links

## Stack
- Node.js
- Express.js
- EJS templates
- CSS custom styles
- Environment-based configuration

## Project structure
- `server.js` — Express server and routes
- `config/site.js` — central site configuration
- `data/siteData.js` — course, faculty, blog, gallery, and FAQ data
- `public/` — static front-end assets
- `views/` — EJS page templates

## Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and configure values:
   ```bash
   cp .env.example .env
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. Open http://localhost:3000

## Environment variables
See `.env.example` for the available configuration values.

## Notes
This repository is set up as a complete development starting point. In a full production environment, mail transport, admin protection, and live database storage should be configured with secure credentials and legal review.
