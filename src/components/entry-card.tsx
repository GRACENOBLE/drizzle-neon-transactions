import { trpc } from "@/trpc/client";
import { Button } from "./ui/button";

const EntryCard = ({
  id,
  count1,
  count2,
}: {
  id: string;
  count1: number;
  count2: number;
}) => {
  const updateCount = trpc.updateCounts.useMutation();
  const utils = trpc.useUtils();
  const handleUpdateCount = (id: string) => {
    updateCount.mutate({ id });
    utils.getCounts.invalidate();
  };
  return (
    <div className="flex items-center gap-6">
      <div className="border rounded-[6px] p-4 grid place-items-center grid-cols-3 w-96 bg-muted">
        <span>{count1}</span>
        <span>{count2}</span>
        <Button
          onClick={() => handleUpdateCount(id)}
          className="hover:cursor-pointer"
        >
          {updateCount.isPending ? "Updating..." : "Update count"}
        </Button>
      </div>
    </div>
  );
};

export default EntryCard;
