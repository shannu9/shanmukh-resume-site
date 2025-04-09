export default function ResumePage({ data }) {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-sm text-gray-500">{data.email} | {data.phone}</p>
        <a href={data.linkedin} target="_blank" className="text-blue-600 underline">LinkedIn</a>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold">{edu.degree} @ {edu.institution}</h3>
            <p className="text-sm text-gray-600">{edu.location} {edu.expected || edu.year}</p>
            <div className="flex flex-wrap gap-2 mt-1 text-sm">
              {edu.relevantCourses.map(course => (
                <span key={course} className="bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-100">
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map(skill => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold">{exp.title} @ {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.location} | {exp.duration}</p>
            <ul className="list-disc list-inside mt-1 text-sm text-gray-700">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Academic Projects</h2>
        {data.projects.map(project => (
          <div key={project.id} className="mb-3">
            <h3 className="font-medium cursor-pointer text-blue-600 hover:underline">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Activities</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {data.activities.map((act, i) => <li key={i}>{act}</li>)}
        </ul>
      </section>
    </div>
  );
}