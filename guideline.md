# Portfolio AI Agent Guidelines

## Project Owner

**Chou Sereyvisoth**

**Role:** Web Developer & Graphic Designer

**Location:** Phnom Penh, Cambodia

---

# 1. Core Principle

Build the portfolio as a **professional personal brand**, not as a generic template.

The central identity is:

> **CODE + DESIGN + CREATIVITY**

Chou Sereyvisoth should be presented as someone who can both build digital products and design the visual experience around them.

---

# 2. Always Inspect Before Editing

Before modifying the project:

- Inspect the repository.
- Inspect `package.json`.
- Inspect `src/`.
- Inspect existing components.
- Inspect routes.
- Inspect assets.
- Inspect Tailwind configuration.
- Inspect existing Framer Motion components.
- Check how the application currently runs.

Never assume the project is empty.

---

# 3. Protect Existing Work

Do not delete working components simply because a different implementation is possible.

Especially preserve existing useful components such as:

- `FadeIn`
- `Magnet`
- `AnimatedText`
- `ContactButton`
- `LiveProjectButton`

Also preserve useful existing interactions such as:

- Sticky project cards
- Scroll-based text reveal
- Magnetic hover effects

Only replace them when the requested redesign requires it.

---

# 4. Technology Rules

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Do not switch to JavaScript unless explicitly requested.

Do not introduce a new framework unless necessary.

Do not install a package for something that can reasonably be implemented with the existing stack.

---

# 5. Design Rules

The visual direction is:

**Cyberpunk + Premium + Clean + Creative**

Use:

- Dark backgrounds
- Neon blue/cyan
- Neon green
- Controlled gradients
- Thin borders
- Subtle glow
- Grid/technical details
- Modern typography
- Strong hierarchy
- Large typography
- Carefully controlled motion

Avoid:

- Excessive neon
- Rainbow gradients everywhere
- Excessive glassmorphism
- Cheap-looking gaming UI
- Too many glowing elements
- Unreadable text
- Excessive rounded cards
- Random decorative elements

Cyberpunk should feel intentional.

---

# 6. UX Comes First

Visual effects must never hurt usability.

A visitor should be able to quickly:

1. Understand who Sereyvisoth is.
2. Understand what he does.
3. See his skills.
4. See his services.
5. Explore his projects.
6. Contact him.

Do not make visitors fight the interface to find information.

---

# 7. Animation Rules

Use Framer Motion.

Animations should be:

- Smooth
- Short
- Purposeful
- Consistent

Prefer:

- Fade
- Slide
- Stagger
- Scale
- Scroll reveal
- Subtle parallax
- Magnetic hover

Avoid:

- Constant animation
- Excessive bouncing
- Long delays
- Distracting background movement
- Huge cursor effects
- Animations that block interaction

Always consider `prefers-reduced-motion`.

---

# 8. Responsive Rules

Every feature must work on:

- 360px mobile
- 390px mobile
- Tablet
- Laptop
- Desktop
- Large screens

Never allow accidental horizontal scrolling.

Do not assume hover exists on mobile.

Mouse/cursor effects should be disabled or simplified on touch devices.

---

# 9. Content Rules

Use the owner's real information.

Do not invent:

- Clients
- Awards
- Years of experience
- Revenue
- Number of users
- Testimonials
- Company partnerships
- Fake project results
- Fake certifications

If information is unknown, use a neutral placeholder or ask the owner.

---

# 10. Project Rules

Current projects:

### Chma Terk Kroch
Personal E-Commerce project.

### CV Builder
Personal interactive CV Builder.

### Management System
Personal management system.

If the repository contains more accurate project information, use the repository information.

Never invent technologies for a project just because they appear in the portfolio's general skill list.

---

# 11. Asset Rules

The owner has personal assets.

When personal images are provided:

- Use them.
- Do not replace them with random stock photos.
- Do not distort faces.
- Preserve image quality.
- Optimize large images when appropriate.

For missing project images, use clean placeholders that can later be replaced.

Do not use random copyrighted images just to fill space.

---

# 12. Links

Known links:

Email:
`chousereyvisoth@gmail.com`

LinkedIn:
`https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/`

GitHub:
`https://github.com/PalorkJork`

Portfolio:
`https://chousereyvisoth-portfolio.vercel.app/`

Phone / Telegram:
`+855 87 959 626`

Do not invent missing social media accounts.

---

# 13. Navigation

Use:

**About | Skills | Services | Projects | Contact**

Navigation should be:

- Clear
- Responsive
- Accessible
- Easy to understand

On mobile, use a clean menu.

---

# 14. Accessibility

Always consider:

- Semantic HTML
- Keyboard navigation
- Focus states
- Alt text
- Color contrast
- Form labels
- Reduced motion
- Touch-friendly controls

Never make text unreadable just because it looks futuristic.

---

# 15. Performance

Before adding visual effects, ask:

> Does this improve the experience enough to justify its performance cost?

Prefer:

- CSS transforms
- Lazy loading
- Optimized images
- Framer Motion for meaningful animation
- Minimal dependencies

Avoid:

- Heavy continuous JavaScript animation
- Huge unoptimized images
- Unnecessary third-party libraries
- Multiple large videos/GIFs loading immediately

---

# 16. Component Architecture

Prefer a structure similar to:

```text
src/
├── components/
│   ├── ui/
│   └── sections/
├── lib/
├── assets/
├── App.tsx
└── main.tsx
```

Use reusable components.

If multiple cards share the same structure, create one reusable component and render it from data.

---

# 17. Data-Driven Content

Prefer:

```ts
const projects = [...]
const services = [...]
const skills = [...]
```

and map them into reusable components.

Do not duplicate large blocks of JSX.

---

# 18. Forms

A contact form should not pretend to work if there is no real backend/email service.

If no email service exists:

- Build the UI.
- Validate the form.
- Clearly keep submission behavior configurable.
- Do not fake successful email delivery.

---

# 19. CV Download

The Download CV button should only download a real CV file.

If the CV file does not exist:

- Build the button structure.
- Make the asset path easy to configure.
- Do not create a fake download.

---

# 20. Dark/Light Mode

Dark mode is the primary visual experience.

If light mode is implemented:

- Keep it accessible.
- Do not allow the cyberpunk design to become unreadable.
- Maintain consistent contrast.
- Keep the dark mode as the main brand identity.

---

# 21. Custom Cursor

The custom cursor should be subtle.

It should never:

- Cover important text.
- Prevent clicking.
- Become huge.
- Cause performance problems.

Disable it on touch devices.

---

# 22. Error Handling

If something fails:

- Read the actual error.
- Identify the root cause.
- Fix the root cause.
- Do not randomly change unrelated files.

Do not hide errors just to make the UI appear functional.

---

# 23. Verification

After every meaningful change:

- Run/build the project when possible.
- Check TypeScript.
- Check imports.
- Check routes.
- Check browser console.
- Check mobile layout.
- Check desktop layout.
- Check animations.
- Check images.
- Check links.

---

# 24. Do Not Over-Engineer

The portfolio is a personal website.

Do not turn simple UI into unnecessary architecture.

Use the simplest maintainable solution.

---

# 25. Final Quality Standard

Before considering a task complete, ask:

### Brand
Does this feel like Sereyvisoth?

### Design
Does it look premium and cyberpunk without becoming messy?

### UX
Can a new visitor understand the website immediately?

### Code
Is the implementation clean and maintainable?

### Responsive
Does it work properly on mobile and desktop?

### Performance
Did we add unnecessary heavy effects?

### Authenticity
Did we use real information instead of invented achievements?

### Professionalism
Would this portfolio be appropriate to send to a recruiter or client?

If the answer to any of these is no, improve it before finishing.

---

# 26. Design Philosophy

The portfolio should communicate:

> **I can design the experience and build the system behind it.**

Every major section should reinforce that combination of:

**Developer + Designer + Problem Solver + Creative Thinker**
