import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavBar />
      <Header />
    </main>
  );
}
