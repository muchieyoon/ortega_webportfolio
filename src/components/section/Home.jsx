import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
    <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent leading-right">
            ecahunnie!
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm an Artist and Developer passionate about bringing ideas to life through illustration and web design. 
            I specialize in creating visually engaging artwork and building simple, functional websites. 
            My goal is to deliver creative designs and clear communication through commissioned work!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-amber-200 text-amber-950 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="https://www.instagram.com/ecahunnie_"
              className="border border-amber-200 text-amber-200 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
     </RevealOnScroll>
    </section>
  );
};