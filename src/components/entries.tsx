"use client";

import { trpc } from "@/trpc/client";
import { Button } from "./ui/button";

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
                <div key={id} className="flex items-center gap-6">
                  <div className="border rounded-[6px] p-4 grid place-items-center grid-cols-3 w-96 bg-muted">
                    <span>{count1}</span>
                    <span>{count2}</span>
                    <Button className="hover:cursor-pointer">
                      Update count
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Entries;
