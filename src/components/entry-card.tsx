import { trpc } from "@/trpc/client";
import { Button } from "./ui/button";
import { toast } from "sonner";

const EntryCard = ({
  id,
  count1,
  count2,
}: {
  id: string;
  count1: number;
  count2: number;
}) => {
  const utils = trpc.useUtils();

  const updateCount = trpc.updateCounts.useMutation({
    onSuccess: () => {
      utils.getCounts.invalidate();
      toast.success("Successfully updated count");
    },
    onError: () => {
      if (updateCount.error) {
        toast.error(updateCount.error.message);
      }
    },
  });

  const handleUpdateCount = (id: string) => {
    updateCount.mutate({ id });
  };

  return (
    <div className="flex items-center gap-6">
      <div className="border rounded-[6px] p-4 grid place-items-center grid-cols-3 w-96 bg-muted">
        <span>{count1}</span>
        <span>{count2}</span>
        <Button
          onClick={() => handleUpdateCount(id)}
          className="hover:cursor-pointer w-full"
        >
          {updateCount.isPending ? "Updating..." : "Update counts"}
        </Button>
      </div>
    </div>
  );
};

export default EntryCard;
