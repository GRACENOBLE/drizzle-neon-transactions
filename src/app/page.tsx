"use client";
import Entries from "@/components/entries";
import { Button } from "@/components/ui/button";
import { fetchEntries, updateEntry } from "@/server";
import { Suspense } from "react";

const page = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 10);
  const handleUpdateEntry = () => {};
  const entries = fetchEntries();
  return (
    <>
      <section>{generateRandomNumber()}</section>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Entries entries={entries} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
