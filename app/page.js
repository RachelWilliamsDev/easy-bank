import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import WhyChooseEasybank from "@/components/WhyChooseEasybank";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavBar />
      <Header />
      <WhyChooseEasybank />
    </main>
  );
}
