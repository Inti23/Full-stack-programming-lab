export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">

      <p className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-2">Get In Touch</p>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Contact Us</h1>
      <p className="text-slate-500 mb-8 leading-relaxed">
        Have a question? Drop us a message and we'll respond within 24 hours.
      </p>

      <form className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
          <input type="text" placeholder="e.g. Intizar Hussain"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
          <input type="email" placeholder="you@example.com"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
          <textarea rows={5} placeholder="Your message here..."
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-sky-400" />
        </div>
        <button type="submit"
          className="bg-slate-900 text-white rounded-lg py-3 font-bold hover:bg-slate-700 transition">
          Send Message →
        </button>
      </form>

    </div>
  );
}