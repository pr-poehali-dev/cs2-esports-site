import Header from "@/components/Header";
import LiveMatches from "@/components/LiveMatches";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <LiveMatches />
      </main>
    </div>
  );
};

export default Index;
