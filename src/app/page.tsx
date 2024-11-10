import { Metadata } from "next";
import { Card } from "@/components";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function Home() {
  return (
    <main className="bg-background">
      <Card />
    </main>
  );
}
