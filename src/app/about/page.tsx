import Header from "../../components/header";
export default function About() {
    return (
      <>
      <Header />
      <div className="max-w-4xl mx-auto p-8 text-center bg-white shadow-lg rounded-lg">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Me</h1>
      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
        Hi, I'm a passionate software engineer dedicated to crafting seamless digital experiences.
        With expertise in web and mobile development, I specialize in building scalable applications
        using cutting-edge technologies like React, Next.js, React Native, Node.js, and Express.
      </p>
      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
        I have a strong background in both frontend and backend development, ensuring robust,
        high-performance applications. My goal is to create intuitive user interfaces and efficient
        backend systems that drive business growth and enhance user satisfaction.
      </p>
      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
        Beyond coding, I love learning about emerging technologies, contributing to open-source projects,
        and solving complex real-world challenges. Let’s build something amazing together!
      </p>
      <div className="mt-6">
        <a href="/contact" className="text-lg font-semibold text-blue-600 hover:underline">
          Get in Touch
        </a>
      </div>
    </div>
      </>
    );
  }
  