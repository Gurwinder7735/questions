import Questions from "@/components/questions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-2 md:p-24 w-full ">
      <Questions />
    </main>
  );
}
