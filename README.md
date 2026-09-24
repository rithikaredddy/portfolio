# Portfolio

My personal portfolio site, live at https://anumandla-rithika.vercel.app

Built with React, TypeScript and Tailwind CSS, bundled with Vite and deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check and build into dist/
```

## How it's organised

```
src/
├── data/profile.ts      # all site content: projects, skills, experience, links
├── types.ts             # TypeScript types for that content
├── components/          # one component per section, plus shared pieces
│   ├── Header.tsx       # sticky nav
│   ├── Hero.tsx         # intro, links and call to action
│   ├── Experience.tsx
│   ├── Projects.tsx     # maps projects to ProjectCard
│   ├── ProjectCard.tsx  # uses SystemFlow and ApiTable
│   ├── SystemFlow.tsx   # request pipeline diagram
│   ├── ApiTable.tsx     # endpoint list with method badges
│   ├── Skills.tsx
│   ├── Credentials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Section.tsx      # shared section wrapper
│   └── Button.tsx       # shared link-button with variants
├── hooks/useScrolled.ts # header border after scrolling
├── lib/scroll.ts        # smooth in-page scrolling with header offset
├── lib/accents.ts       # accent color to Tailwind class map
├── App.tsx
├── main.tsx
└── index.css            # Tailwind import and theme colors
```

Content and layout are kept apart: adding a project or a skill only means editing `src/data/profile.ts`.
