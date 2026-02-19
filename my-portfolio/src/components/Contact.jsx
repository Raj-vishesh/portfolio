function Contact() {
  return (
    <section id="contact" className="py-24 bg-black px-6 text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-8">
          Open to internship opportunities and technical collaborations.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:visheshtopper99@gmail.com"
            className="block text-blue-400 hover:underline"
          >
            visheshtopper99@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/vishesh-chahar-a87432311/"
            target="_blank"
            className="block text-blue-400 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Raj-vishesh"
            target="_blank"
            className="block text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
