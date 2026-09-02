# VELON

Built for every motion — a creative portfolio where motion meets meaning.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [GSAP](https://gsap.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [@tailwindcss/postcss](https://tailwindcss.com/) (PostCSS plugin)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3001`.

## Scripts

| Script        | Description                       |
| ------------- | --------------------------------- |
| `npm run dev` | Start the development server      |
| `npm run build` | Production build               |
| `npm start`   | Start the production server       |
| `npm run lint` | Run ESLint                      |

## Routes

| Route            | Description                          |
| ---------------- | ------------------------------------ |
| `/`              | Home                                 |
| `/About`         | About                                |
| `/Project`       | Project showcase index               |
| `/Project/[slug]` | Individual project page             |
| `/Blog`          | Blog                                 |
| `/Contact`       | Contact                              |

## Structure

```text
src/
  app/            App Router routes and layouts
  component/      React components (navigation, home, project, about, common)
  data/           Project data
```

## License

Private repository — all rights reserved.