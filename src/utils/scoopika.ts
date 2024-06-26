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
        "AGENT_ID", // replace with your agent ID
        scoopika
    );

    // you can add tools to your agent here ;)
    // agent.addTool(...);

    return [agent];
  },
});
