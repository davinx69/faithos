import Link from "next/link";
import { supabase } from "@/lib/supabase";

const denominations = ["All", "Pentecostal", "Anglican", "Catholic", "Baptist", "Evangelical", "Methodist"];

export default async function ChurchesPage() {
  const { data: churches, error } = await supabase
    .from("churches")
    .select("*")
    .eq("published", true)
    .order("name");

  if (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-bold text-xl tracking-tight">FAITH</span>
          <span className="text-[#5DCAA5] font-bold text-xl">_OS™</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/churches" className="text-[#5DCAA5] text-sm font-semibold">
            Find a Church
          </Link>
          <Link href="/register" className="bg-[#5DCAA5] text-[#042C53] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition">
            Register Your Church
          </Link>
        </div>
      </nav>

      <section className="bg-[#042C53] px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Find a Church in Nigeria</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by church name, pastor, or area..."
              className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-800 outline-none"
            />
            <button className="bg-[#5DCAA5] text-[#042C53] font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white transition">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {denominations.map((d) => (
              <span
                key={d}
                className={`text-xs px-3 py-1 rounded-full cursor-pointer transition border ${
                  d === "All"
                    ? "bg-[#5DCAA5] text-[#042C53] border-[#5DCAA5] font-semibold"
                    : "bg-white/10 border-white/20 text-[#B5D4F4] hover:bg-white/20"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 mb-6">
          {churches?.length ?? 0} verified churches found
        </p>

        <div className="flex flex-col gap-4">
          {churches?.map((church) => (
            <Link href={`/churches/${church.id}`} key={church.id}>
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#5DCAA5] transition cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-semibold text-[#042C53] text-base">{church.name}</h2>
                      {church.verified && (
                        <span className="bg-[#E1F5EE] text-[#085041] text-xs px-2 py-0.5 rounded-full font-medium">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#185FA5] font-medium mb-2">{church.denomination}</p>
                    <p className="text-sm text-gray-600 mb-1">👤 {church.pastor}</p>
                    <p className="text-sm text-gray-500 mb-1">📍 {church.address}</p>
                    <p className="text-sm text-gray-500">🕐 {church.service_times}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-gray-400">{church.state}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-[#021e38] px-6 py-8 text-center mt-10">
        <div className="text-white font-bold text-lg mb-1">
          FAITH<span className="text-[#5DCAA5]">_OS™</span>
        </div>
        <div className="text-[#85B7EB]/50 text-xs">
          Curated by Daniel' Vincent · Powered by THE EDGE™ — Ekklesia of Innovation
        </div>
      </footer>

    </main>
  );
}