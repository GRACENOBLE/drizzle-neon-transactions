"use client";

import { trpc } from "@/trpc/client";

const Entries = () => {
  const greeting = trpc.hello.useQuery({ text: "noble" });
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
