function Skills() {

  const skills = [
    "C++", "JavaScript", "React", "Tailwind CSS",
    "Data Structures", "OOPS", "Git", "GitHub"
  ]

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
