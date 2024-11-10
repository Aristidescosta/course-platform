import { Metadata } from "next";
import { Section } from "@/components";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function Home() {
  return (
    <main className="bg-background">
      <Section />
    </main>
  );
}
