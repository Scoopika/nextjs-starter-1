"use client";

import { newSession } from "@/actions/newSession";
import Link from "next/link";
import { useState } from "react";

interface Props {
  userId: string;
  sessions: string[];
}

export default function Sessions({ userId, sessions }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const createNewSession = async () => {
    setLoading(true);
    await newSession({ user_id: userId });
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl">Your sessions</h2>
      <div className="w-full flex items-center gap-3">
        <button
          className="outline-0 h-full bg-black text-white rounded-lg text-sm p-3 pt-1.5 pb-1.5 flex min-w-max"
          onClick={() => createNewSession()}
        >
          New session
        </button>
      </div>

      {loading && <div className="text-sm opacity-80 mt-2">Loading...</div>}

      <div className="w-full flex flex-col gap-4 mt-4">
        {sessions.map((session) => (
          <Link
            href={`/chat/${session}`}
            className="outline-0 h-full bg-black/10 rounded-lg text-sm p-3 pt-1.5 pb-1.5 flex min-w-max"
            key={`${session}`}
          >
            {session}
          </Link>
        ))}
      </div>
    </div>
  );
}
