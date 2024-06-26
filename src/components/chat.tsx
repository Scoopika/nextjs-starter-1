"use client";

// This is the most simple thing you can do with Scoopika, it took like 7 minutes to do
// and you're free to extend it with images, voice, and more

import { client } from "@/utils/scoopikaClient";
import { Agent } from "@scoopika/client";
import { useChatState } from "@scoopika/react";
import { RunHistory } from "@scoopika/types";
import { useState } from "react";

interface Props {
  id?: string; // if session ID not provided a random one will be created
}

const Message = ({ msg }: { msg: RunHistory }) => {
  // This is just a simple example, you can display anything the agent returned here ;)

  if (msg.role === "user") {
    return <div className="p-4 text-sm">You: {msg.request.message}</div>;
  }

  return (
    <div className="p-4 text-sm bg-black/10">Agent: {msg.response.content}</div>
  );
};

export default function Chat({ id }: Props) {
  const agent = new Agent("7bfdb069-6da6-4236-b54e-2fcb8a726644", client); // replace with your agent ID
  const [message, setMessage] = useState<string>("");
  const {
    messages,
    newRequest,
    streamPlaceholder,
    status,
    loading,
    generating,
  } = useChatState(client, agent, {
    session_id: id,
    scroll: () => {
      const elm = document.getElementById("bottom");
      if (elm) elm.scrollIntoView();
    },
  });

  const run = async () => {
    if (loading || generating) return;

    newRequest({
      inputs: { message },
      options: { session_id: id }, // required for now
    });
    setMessage("");
  };

  return (
    <>
      <div className="w-full flex flex-col mb-24">
        {messages.map((msg, index) => (
          <Message key={`msg-${index}`} msg={msg} />
        ))}

        {streamPlaceholder && <Message msg={streamPlaceholder} />}
      </div>

      <div id="bottom"></div>

      <div className="fixed bottom-0 left-0 p-3 w-full bg-white">
        <div className="text-sm opacity-70">{status}</div>

        <div className="w-full p-3 border-2 bg-white border-black/50 rounded-lg flex items-center gap-3">
          <input
            autoFocus
            className="w-full bg-transparent outline-0"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => {
              const value = e?.currentTarget?.value;
              setMessage(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                run();
              }
            }}
          />
          <button
            className="outline-0 h-full bg-black text-white rounded-lg text-sm p-3 pt-1.5 pb-1.5 flex min-w-max"
            disabled={loading || generating}
            onClick={() => run()}
          >
            Send message
          </button>
        </div>
      </div>
    </>
  );
}
