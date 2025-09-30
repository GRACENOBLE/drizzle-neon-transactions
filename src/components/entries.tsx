"use client";

import { trpc } from "@/trpc/client";

const Entries = ({ text }: { text: string }) => {
  const { data, isLoading, isError } = trpc.hello.useQuery({ text });
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <p>Error loading greeting</p>
      ) : (
        <>{data && <div>{data.greeting}</div>}</>
      )}
    </div>
  );
};
export default Entries;
