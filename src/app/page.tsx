export default function Home() {
  return (
    <div className="min-h-screen text-slate-800">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-y-3 px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img src="/img/logo.png" alt="Aspire Academy Logo" width="280" height="164" />
          </a>

          <ul className="order-3 flex w-full items-center justify-between border-t border-slate-200 pt-3 text-xs font-bold sm:order-2 sm:w-auto sm:justify-start sm:gap-8 sm:border-0 sm:pt-0 sm:text-sm">
            <li>
              <a href="#home" className="transition hover:text-smart-blue">
                Home
              </a>
            </li>
            <li>
              <a href="#courses" className="transition hover:text-smart-blue">
                Courses
              </a>
            </li>
            <li>
              <a href="#stories" className="transition hover:text-smart-blue">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#partnerships" className="transition hover:text-smart-blue">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-smart-blue">
                About Us
              </a>
            </li>
          </ul>

          <a
            href="#courses"
            className="order-2 rounded-full bg-smart-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-smart-blue-dark sm:order-3"
          >
            Enroll Now
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:px-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-smart-blue/10 px-4 py-2 text-sm font-bold text-smart-blue-dark">
              Future-Ready STEAM Learning
            </p>
            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Inspire Young Minds to{" "}
              <span className="bg-gradient-to-r from-smart-blue to-smart-green bg-clip-text text-transparent">
                Pioneer the possible
              </span>
            </h1>
            <p className="max-w-xl text-lg text-slate-700">
              Aspire Academy offers a wide range of STEAM courses for kids and teenagers through hands-on projects, mentor support, and real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="rounded-full bg-smart-green px-6 py-3 font-bold text-white transition hover:bg-smart-green-dark"
              >
                Explore Courses
              </a>
              <a
                href="#about"
                className="rounded-full border border-smart-blue px-6 py-3 font-bold text-smart-blue transition hover:bg-smart-blue hover:text-white"
              >
                Meet Aspire Academy
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white bg-white/85 p-8 shadow-2xl backdrop-blur-lg">
            <img src="/img/mascot-riding-a-rocket.jpg" alt="Aspire Academy Students" className="rounded-2xl" />
          </div>
        </section>

        <section id="courses" className="border-y border-white bg-white/80 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-wider text-smart-green-dark">Courses</p>
            <h2 className="mt-1 font-display text-3xl text-slate-900 sm:text-4xl">STEAM Pathways for Every Learner</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <article className="rounded-2xl bg-gradient-to-b from-smart-blue to-smart-blue-dark p-6 text-white">
                <h3 className="mb-2 font-display text-xl">Science Explorers</h3>
                <p className="text-sm text-blue-100">Fun lab investigations that spark curiosity and discovery.</p>
              </article>
              <article className="rounded-2xl bg-gradient-to-b from-smart-green to-smart-green-dark p-6 text-white">
                <h3 className="mb-2 font-display text-xl">Coding & AI Studio</h3>
                <p className="text-sm text-emerald-100">From coding basics to AI concepts through creative tasks.</p>
              </article>
              <article className="rounded-2xl bg-gradient-to-b from-cyan-600 to-cyan-800 p-6 text-white">
                <h3 className="mb-2 font-display text-xl">Engineering Builders</h3>
                <p className="text-sm text-cyan-100">Design, prototype, and test inventions with teamwork.</p>
              </article>
              <article className="rounded-2xl bg-gradient-to-b from-emerald-600 to-teal-800 p-6 text-white">
                <h3 className="mb-2 font-display text-xl">Creative Math & Design</h3>
                <p className="text-sm text-emerald-100">Apply math concepts to art, architecture, and digital media.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="stories" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-smart-blue-dark">Success Stories</p>
            <h2 className="mb-8 font-display text-3xl text-slate-900 sm:text-4xl">Our Students in Action</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <blockquote className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
                <p className="font-semibold text-slate-800">&quot;I built my first game and presented it to my class. I feel like a creator now!&quot;</p>
                <footer className="mt-4 text-sm text-slate-500">Aarav, Age 12</footer>
              </blockquote>
              <blockquote className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
                <p className="font-semibold text-slate-800">&quot;The robotics track taught me teamwork and practical problem-solving.&quot;</p>
                <footer className="mt-4 text-sm text-slate-500">Maya, Age 15</footer>
              </blockquote>
              <blockquote className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
                <p className="font-semibold text-slate-800">&quot;Aspire made science exciting. I now want to become an engineer.&quot;</p>
                <footer className="mt-4 text-sm text-slate-500">Ethan, Age 11</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="partnerships" className="bg-smart-blue-dark py-20 text-white">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-200">Partnerships</p>
              <h2 className="mb-4 mt-1 font-display text-3xl sm:text-4xl">Building the Future Together</h2>
              <p className="text-slate-200">
                We partner with schools, youth organizations, and innovation communities to bring high-impact STEAM education to more students.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center font-semibold">
              <div className="rounded-xl border border-white/10 bg-white/10 p-5">Schools</div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-5">Tech Partners</div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-5">STEM Clubs</div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-5">Community Centers</div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="rounded-3xl bg-gradient-to-r from-smart-blue to-smart-green p-8 text-white shadow-[0_12px_32px_rgba(15,94,156,0.35)] sm:p-12">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">About Us</p>
              <h2 className="mb-4 mt-1 font-display text-3xl sm:text-4xl">Aspire Academy</h2>
              <p className="max-w-3xl text-blue-50">
                Aspire Academy empowers kids and teenagers with the confidence and capabilities to shape tomorrow through STEAM. We make learning practical, inspiring, and deeply connected to real life.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <h3 className="mb-3 font-display text-xl text-white">Aspire Academy</h3>
            <p className="text-slate-300">Pioneer the possible</p>
          </div>
          <div>
            <h4 className="mb-3 font-bold text-white">Contact Us</h4>
            <p>
              Email:{" "}
              <a href="mailto:contact@aspireacademy.org" className="text-cyan-300 transition hover:text-cyan-200">
                contact@aspireacademy.org
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="text-cyan-300 transition hover:text-cyan-200">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-bold text-white">Follow Us</h4>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                WhatsApp
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                Instagram
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                Facebook
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
