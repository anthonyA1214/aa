import Image from "next/image";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        {/* test */}
        <Image src="/logo.svg" alt="logo" height={40} width={40} />
      </main>
    </HydrateClient>
  );
}
