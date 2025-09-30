import Entries from "@/components/entries";
import { HydrateClient, trpc } from "@/trpc/server";

const page = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 10);
  void trpc.hello.prefetch({ text: "noble" });
  return (
    <>
      <section>{generateRandomNumber()}</section>
      <section>
        <HydrateClient>
          <Entries />
        </HydrateClient>
      </section>
    </>
  );
};

export default page;
