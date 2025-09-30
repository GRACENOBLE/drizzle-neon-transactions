"use client";

import { trpc } from "@/trpc/client";

const Entries = ({ text }: { text: string }) => {
  const greeting = trpc.hello.useQuery({ text });
  return (
    <div>
      {!greeting.data ? (
        <div>Loading...</div>
      ) : (
        <div>{greeting.data.greeting}</div>
      )}
    </div>
  );
};
export default Entries;
