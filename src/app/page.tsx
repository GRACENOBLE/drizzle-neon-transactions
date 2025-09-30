import Entries from "@/components/entries";
import { HydrateClient, trpc } from "@/trpc/server";

const page = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 10);
  const text = "noble";
  void trpc.getCounts.prefetch();
  return (
    <>
      <section>{generateRandomNumber()}</section>
      <section>
        <HydrateClient>
          <Entries  />
        </HydrateClient>
      </section>
    </>
  );
};

export default page;
