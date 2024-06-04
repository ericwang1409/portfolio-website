import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
      
      <section className="bg-gradient-radial h-screen bg-beige">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-black font-mono">Hello, world!</h1>
          <p className="text-lg text-black font-mono">Welcome to my portfolio website.</p>
        </div>
      </section>
    </main>
  );
}
