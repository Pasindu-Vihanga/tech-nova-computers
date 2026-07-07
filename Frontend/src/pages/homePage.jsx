import Header from "../components/header";

export default function HomePage() {
  return (
    <div className="w-full h-full overflow-y-scroll max-h-full">

      <Header />

      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to TechNova</h1>
      </div>

    </div>
  );
}
