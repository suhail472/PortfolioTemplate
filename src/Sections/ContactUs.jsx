function ContactUs()
{
    return(<>

             <section
        id="contact"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          Contact <span className="text-sky-400">Me</span>
        </h2>
        <div className="w-full max-w-3xl bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-10 animate-fade-in-up">
          <p className="text-center text-slate-300 mb-8">
            Got a project in mind or just want to say hi? Fill out the form below and I’ll get back to you as soon as possible!
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-full hover:bg-sky-500 transition-transform transform hover:scale-105 mt-2"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-slate-300">
            <p>Email: <span className="text-sky-400">suhailhilal92@gmail.com</span></p>
            <p>Phone: <span className="text-sky-400">+91 9797935307</span></p>
            <p>Location: <span className="text-sky-400">Srinagar, Kashmir</span></p>
          </div>
        </div>
      </section>

    </>)
}
export default ContactUs;