import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
   
  ];

  const backendSkills = ["Node.js", "Python", "MySql", "PHP"];
  const digiSkills = ["Canva", "Krita"]; 
  const artSkills = ["Illustrations", "Layout", "Customized Characters"]; 
  

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Web Developer and Commissioned Digital Artist focused on building clean, 
              responsive websites and delivering personalized digital art for clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Art Software</h3>
                <div className="flex flex-wrap gap-2">
                  {digiSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Art Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {artSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Information Technology </strong> - San Pablo Colleges
                  (2022-Present)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Commissions Arts
                  </h4>
                  <p>
                    Commissioned in Nijisanji-En Fanprojects.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Zeal Day
                  </h4>
                  <p>
                    Fan-Project for Zeal Ginjoka Birthday as a Illustrator
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">
                    BTB Anniversary 
                  </h4>
                  <p>
                    Fan-Project for By The Beat from Nijisanji as a Illustrator/Artist. Still On-Going
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};