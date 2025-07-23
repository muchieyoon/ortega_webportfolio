

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent text-center">
            Featured Arts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-200/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Zura </h3>
              <p className="text-gray-400 mb-4">
                Azura Cecillia—commonly known by her nickname Zura—a former VTuber from the Indonesian branch of NIJISANJI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Indie", "Zuratelier", "Botany", "Plant"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/ecahun_/status/1944444786217501113"
                  className="text-amber-500 hover:text-amber-200 transition-colors my-4"
                >
                  View Art →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-amber-200/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">By The Beat - 3rd Monthsary </h3>
              <p className="text-gray-400 mb-4">
                BY THE BEAT is NIJISANJI EN’s dynamic 11th wave, crafted around a virtual nightclub theme. 
                With four talented members embodying club roles and animal motifs, they engage fans as the energetic "Hzbeats" community.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["BTB", "Debonheir", "Zerpents", "Seinyans","Doremins"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/ecahun_/status/1933591968107671906"
                  className="text-amber-500 hover:text-amber-200  transition-colors my-4"
                >
                  View Art →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-amber-200/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Zeal Ginjoka NijiEnchanted</h3>
              <p className="text-gray-400 mb-4">
                In the narrative world, Zeal’s alter-ego is known as Zealliam, reinforcing his bartender identity in this Minecraft setting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Thumbnail", "Zealliam", "Minecraft", "PNGGinjoka"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/ecahun_/status/1914746522941690184"
                  className="text-amber-500 hover:text-amber-200  transition-colors my-4"
                >
                  View Art →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-amber-200/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Kindred Day</h3>
              <p className="text-gray-400 mb-4">
                Kindred Day is an annual celebration hosted by Vox Akuma, one of NIJISANJI EN's popular male Livers from Luxiem. 
                It takes place around May 22, marking a special moment for both Vox and his fan community, 
                the Kindred, to gather, celebrate their shared connections, and enjoy joyful moments together.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Kindred", "Akuma", "Fanprojects", "KindredDay2025"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://x.com/ecahun_/status/1925110992293470230"
                  className="text-amber-500 hover:text-amber-200  transition-colors my-4"
                >
                  View Art →
                </a>
              </div>
            </div>
          </div>
        </div>
    
    </section>
  );
};
