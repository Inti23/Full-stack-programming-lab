export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <p className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-2">Lab_08 · Next.js</p>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About Us</h1>

      <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
        <p className="text-sky-900 leading-relaxed">
          <strong>NextStore</strong> is a student project built as part of the{" "}
          <strong>Full Stack Programming</strong> course (BSSE-VI). It demonstrates
          core capabilities of <strong>Next.js 14</strong>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          { label: "Framework",  value: "Next.js 14 (App Router)" },
          { label: "Language",   value: "TypeScript + TSX" },
          { label: "Styling",    value: "Tailwind CSS" },
          { label: "Course",     value: "Full Stack Programming" },
          { label: "Instructor", value: "Mr. Sharif Hussain" },
          { label: "Section",    value: "BSSE-VI A & B" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">{label}</div>
            <div className="font-bold text-slate-800 text-sm">{value}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
      <p className="text-slate-600 leading-relaxed">
        To provide students with hands-on experience building real-world web applications
        using modern JavaScript frameworks — gaining practical skills in component architecture,
        routing, and full-stack development.
      </p>

    </div>
  );
}