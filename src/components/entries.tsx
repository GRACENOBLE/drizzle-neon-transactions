"use client";

import { trpc } from "@/trpc/client";
import { Button } from "./ui/button";
import EntryCard from "./entry-card";

const Entries = () => {
  const { data, isLoading, isError } = trpc.getCounts.useQuery();

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <p>Error loading greeting</p>
      ) : (
        <>
          {data && (
            <div className="flex flex-col gap-6 min-h-[100vh] justify-center items-center">
              <div className="border rounded-[6px] p-4 grid place-items-center grid-cols-3 w-96 bg-muted">
                <span>Count 1</span>
                <span>Count 2</span>
                <Button className=" opacity-0">Update count</Button>
              </div>
              {data.map(({ id, count1, count2 }) => (
                <EntryCard id={id} count1={count1} count2={count2} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Entries;
