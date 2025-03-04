import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
    return (
        <>
       <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Feel free to reach out via the form below.
        </p>
        
        <form className="w-full max-w-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
      </>
    );
  }
  