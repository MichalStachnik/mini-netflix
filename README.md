This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Abstract

This is a simple Next.js project that showcases the features of Next.js 14. It utilizes React Server Components to fetch data on the server side allowing for smaller bundle sizes (less JavaScript being sent to the client), faster intial page load, and better SEO. A problem we could expect to encounter is if we wanted to extend the features of the project to include something like a search bar. Because there is no stateful values for the movies on the client - they are being fetched on the server, serialized, and sent to the client - it would not be possible to search for new movies on the client and replace the server rendered movies. They exist in 2 different worlds. A solution would be to have the a client component fetch the initial movies and set them to state, and render those stateful values. We could then add a search bar which could fetch different movies and set those to state. Doing so we would lose some of our advantages of having a server side rendered application but we would have a much more interactive and full featured app.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
