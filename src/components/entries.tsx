import { counts } from "@/db/schema";
import { use } from "react";

type Counts = typeof counts.$inferSelect;

const Entries = ({ entries }: { entries: Promise<Counts[]> }) => {
  const allEntries = use(entries);
  return (
    <div>
      {allEntries.map(({ id, count1, count2 }) => (
        <div className="flex gap-4" key={id}>
          <div className="rounded-[6px] px-4 py-2 border border-muted max-w-96 grid grid-cols-2">
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
          </div>
          {/* <Button onClick={() => updateEntry(id)}>Update count</Button> */}
        </div>
      ))}
    </div>
  );
};

export default Entries;
