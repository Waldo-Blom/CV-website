import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl text-white">Welcome to My Portfolio</h1>
      </main>
    </div>
  );
}