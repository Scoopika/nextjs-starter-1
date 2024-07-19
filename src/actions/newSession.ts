"use server";

import { scoopika } from "@/utils/scoopika";
import { revalidatePath } from "next/cache";

interface Props {
  id?: string;
  user_id?: string;
}

export async function newSession(props: Props) {
  const session = await scoopika.memory.newSession(props);

  await revalidatePath("/", "page");
  return true;
}
