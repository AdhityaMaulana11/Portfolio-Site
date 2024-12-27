import Card from "./Card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <h2 className="text-center text-3xl font-bold text-[#1A1A1A] mb-4">
        I will make your <br /> dream websites come true
      </h2>
      <p className="text-center text-gray-500 mb-8">
        With expertise in both frontend and backend technologies, I aim to
        deliver projects that are as functional as they are beautiful.
      </p>
      <div className="text-justify grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card
          color="bg-[#C4E7E1]"
          title="Education"
          imgSrc="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
          alt="Education Icon"
          description="I'm an undergraduate student at universitas kuningan, majoring in informatic
                    engineering with a keen interest and driven professional in software engineering. My academic
                    journey helped me develop a deep understanding of both theory and practical application in the tech
                    industry."
        />
        <Card
          color="bg-[#FFDBD0]"
          title="Skills"
          imgSrc="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
          alt="Skills Icon"
          description="I specialize in building dynamic, user-focused web applications using modern
                    technologies such as:
                    Frontend: React, Tailwind CSS, HTML5, CSS3, JavaScript
                    Backend: Node.js, Express.js, MySQL, MongoDB
                    Tools & Platforms: Git, Docker, Vite, and RESTful APIs"
        />
        <Card
          color="bg-[#FFC64E]"
          title="Career"
          imgSrc="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Career Icon"
          description="My career journey has been fueled by a passion for problem-solving and
                    continuous improvement. Each experience has refined my ability to adapt, collaborate, and deliver
                    impactful solutions.
                    I’m always eager to take on new challenges, expand my skill set, and contribute to meaningful
                    projects that make a difference."
        />
      </div>
    </section>
  );
}
