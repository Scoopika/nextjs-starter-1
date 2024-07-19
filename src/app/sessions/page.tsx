import getUser from "@/utils/get_user";
import { scoopika } from "@/utils/scoopika";
import Sessions from "@/components/sessions";

export default async function Home() {

  const userId = await getUser(); // replace with your auth logic
  const sessions = await scoopika.memory.getUserSessions(userId);

  return (
    <main className="">
      <Sessions userId={userId} sessions={sessions} />
    </main>
  );
}
