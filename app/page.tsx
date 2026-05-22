import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      {/* NAVBAR */}
      <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-white font-bold text-xl tracking-tight">FAITH</span>
          <span className="text-[#5DCAA5] font-bold text-xl">_OS™</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/churches" className="text-[#85B7EB] text-sm hover:text-white transition">
            Find a Church
          </Link>
          <Link href="/map" className="text-[#85B7EB] text-sm hover:text-white transition">
            Map View
          </Link>
          <Link href="/register" className="bg-[#5DCAA5] text-[#042C53] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition">
            Register Your Church
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#042C53] px-6 pt-16 pb-20 text-center">
        <div className="inline-block bg-white/10 border border-white/20 text-[#B5D4F4] text-xs font-medium tracking-widest uppercase px-4 py-1 rounded-full mb-6">
          Nigeria Launch Edition
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Find Any Church<br />
          <span className="text-[#5DCAA5]">Anywhere in Nigeria</span>
        </h1>
        <p className="text-[#85B7EB] text-base max-w-lg mx-auto mb-10">
          The digital operating system for Christianity. Discover verified churches, branches, pastors, and programs across all denominations nationwide.
        </p>

        {/* SEARCH BAR */}
        <form action="/churches/search" method="get" className="max-w-xl mx-auto flex gap-2">
          <input
            type="text"
            name="q"
            placeholder="Search by church name, pastor, or location..."
            className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-900 bg-white outline-none placeholder-gray-400"
          />
          <button type="submit" className="bg-[#5DCAA5] text-[#042C53] font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white transition whitespace-nowrap">
            Search
          </button>
        </form>

        {/* QUICK FILTERS */}
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {["Pentecostal", "Anglican", "Catholic", "Baptist", "Methodist", "Campus Fellowship"].map((d) => (
            <span key={d} className="bg-white/10 border border-white/20 text-[#B5D4F4] text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition">
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100 px-6 py-8">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { num: "500+", label: "Churches registered" },
            { num: "36", label: "States covered" },
            { num: "20+", label: "Denominations" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#042C53]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#042C53] text-center mb-10">
          Everything you need to find your church home
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📍",
              title: "Church Discovery Map",
              desc: "Find verified churches near you with live directions, service times, and branch locations nationwide.",
            },
            {
              icon: "✅",
              title: "Verified Profiles",
              desc: "Every church is physically verified by our Kingdom Ambassadors — real data, real locations, real times.",
            },
            {
              icon: "🔍",
              title: "Branch Locator",
              desc: "Search for the closest branch of your denomination when you move or travel anywhere in Nigeria.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#042C53] text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#042C53] px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Is your church on FAITH_OS?</h2>
        <p className="text-[#85B7EB] text-sm mb-6 max-w-md mx-auto">
          Register your church for free. Get a verified profile, branch listing, and visibility across Nigeria.
        </p>
        <Link href="/register" className="bg-[#5DCAA5] text-[#042C53] font-semibold px-8 py-3 rounded-lg text-sm hover:bg-white transition inline-block">
          Register Your Church Free →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#021e38] px-6 py-8 text-center">
        <div className="text-white font-bold text-lg mb-1">
          FAITH<span className="text-[#5DCAA5]">_OS™</span>
        </div>
        <div className="text-[#85B7EB] text-xs mb-2">
          Explore Churches. Experience Community. Advance the Kingdom.
        </div>
        <div className="text-[#85B7EB]/50 text-xs">
          Curated by Daniel' Vincent · Powered by THE EDGE™ — Ekklesia of Innovation
        </div>
      </footer>

    </main>
  );
}