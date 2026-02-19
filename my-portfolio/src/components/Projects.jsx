function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Attendance Management System */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">
              Attendance Management System
            </h3>

            <p className="text-gray-400 mb-4">
              Developed an object-oriented attendance tracking system in C++ 
              featuring structured data management and file-based persistence.
            </p>

            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Role-based dashboards (Teacher / Student)</li>
              <li>Dynamic data handling using STL vectors</li>
              <li>Attendance percentage calculation</li>
              <li>Search functionality</li>
              <li>Persistent storage using file handling</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              C++ • OOP • STL • File Handling
            </p>

            <a
              href="https://github.com/Raj-vishesh/attendance-marking-project"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Code
            </a>
          </div>


          {/* InternTrack Pro */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">
              InternTrack Pro
            </h3>

            <p className="text-gray-400 mb-4">
              A structured React-based dashboard to manage internship 
              applications with an organized and responsive interface.
            </p>

            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Add and manage internship entries</li>
              <li>Status tracking (Applied / Interview / Rejected)</li>
              <li>Responsive dashboard layout</li>
              <li>Component-based architecture</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              React • Tailwind CSS • JavaScript
            </p>

            <span className="text-yellow-400 font-medium">
              🚧 In Progress
            </span>
          </div>


          {/* Multi-Utility Calculator */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-3">
              Multi-Utility Calculator
            </h3>

            <p className="text-gray-400 mb-4">
              Web-based calculator performing arithmetic operations along 
              with currency, length, and weight conversions using JavaScript logic.
            </p>

            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Basic arithmetic operations</li>
              <li>Currency conversion (Rupee)</li>
              <li>Length and weight conversions</li>
              <li>Interactive UI with responsive design</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              HTML • CSS • JavaScript
            </p>

            <a
              href="https://github.com/Raj-vishesh/smart-scientific-calculator/tree/main"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Code
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
