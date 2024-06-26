import Chat from "@/components/chat";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  return <Chat id={params.id} />;
}
