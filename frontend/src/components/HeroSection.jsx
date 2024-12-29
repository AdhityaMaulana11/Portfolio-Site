export default function HeroSection() {
  return (
    <section
      id="home"
      className="px-6 md:px-12 py-12 md:flex items-center justify-around"
    >
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#252525] mb-4">
          Hello There! I'm <br /> Adhitya
        </h2>
        <p className="text-[#737373] mb-6">
          A passionate Full-Stack Web Developer who loves crafting functional
          and visually stunning web applications. With a strong foundation in
          both frontend and backend development, I thrive on turning ideas into
          seamless digital experiences.
        </p>
        <a
          href="/CV_Adhitya-Maulana-Wijaya.pdf"
          download="Adhitya_Maulana_Wijaya_CV.pdf"
          className="btn bg-[#FFCB05] text-[#252525] font-bold px-6 py-3 border-2 border-black rounded-lg hover:opacity-90 inline-block"
        >
          Download CV <span className="inline-block">↓</span>
        </a>
      </div>
      <div className="relative mt-12 md:mt-0">
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#FFCB05]"></div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="../../src/assets/merah.jpg"
              alt="Man"
              className="w-48 h-64 rounded-[1rem] object-cover border-4 border-[#E6B8B3]"
            />
            <div className="absolute top-0 right-0 bg-[#FFCB05] rounded-full px-2 py-1 text-xs">
              Adhitya Maulana Wijaya
            </div>
          </div>
          <div className="relative">
            <img
              src="../assets/Vscode-Logotype.png"
              alt="Woman"
              className="w-48 h-64 rounded-[1rem] object-scale-down bg-[#1f9cf0] border-4 border-[#8DC8D6]"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 left-16">
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-[#8DC8D6] transform rotate-45"></div>
            <div className="w-12 h-12 bg-[#FFCB05] transform -rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
