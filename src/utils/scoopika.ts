import { Scoopika, Agent, Endpoint } from "@scoopika/scoopika";

// SERVER ONLY USAGE

export const scoopika = new Scoopika({
  store: process.env.SCOOPIKA_STORE_ID,
  keys: {}, // enter the API keys of the providers your agent use
});

export const endpoint = new Endpoint({
  scoopika,
  agents: (scoopika) => {
    const agent = new Agent(
        "7bfdb069-6da6-4236-b54e-2fcb8a726644", // replace with your agent ID
        scoopika
    );

    // you can add tools to your agent here ;)
    // agent.addTool(...);

    return [agent];
  },
});
