
[Documentation](https://docs.scoopika.com/examples/nextjs-starter-1)

## Getting Started

First rename `.env.example` to `.env` and enter your Scoopika token and remote history store ID if you have one (notice that this template won't work as expected without a history store).

The you would want to run `npm install` or whatever the package manager you're using.

Then, Enter your agent ID in `src/utils/scoopika.ts` and `src/components/chat.tsx` (the ID passed to `new Agent`).

Now you can run the development server:

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

You'll see a list of sessions, you should be able to create sessions, and enter then to start a conversation with the agent.

## Development

Notice that this template is the most simple thing you can do with Scoopika, It was made in like 20 minutes and it's not meant to be directly deployed to users, but to show you a simple example of how easy it is to integrate Scoopika into your NextJS application.

You can continue with this template and improve it, you can change the `getUser` function to actually use your auth logic so you can create sessions based on the logged in user's ID.

This template also doesn't go deep into more advanced usage examples with tools and client-side actions, but you'll see comments guiding you through it. it's simple ;)

## Documentation

[Scoopika server-side library](https://docs.scoopika.com/packages/ts/scoopika)

[Scoopika client-side library](https://docs.scoopika.com/packages/ts/client)

[Scoopika React library](https://docs.scoopika.com/packages/ts/react)
