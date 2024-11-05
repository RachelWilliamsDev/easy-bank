import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestArticles from "@/components/LatestArticles";
import NavBar from "@/components/NavBar";
import WhyChooseEasybank from "@/components/WhyChooseEasybank";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white">
      <NavBar />
      <Header />
      <WhyChooseEasybank />
      <LatestArticles />
      <Footer />
    </main>
  );
}
