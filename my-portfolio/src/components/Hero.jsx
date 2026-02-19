function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900">

      <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Vishesh
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
        B.Tech CSE @ NIT Agartala • Building Efficient and Scalable Software Systems
      </p>

      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition duration-300 hover:scale-105"
      >
        View Projects
      </a>

    </section>
  )
}

export default Hero
