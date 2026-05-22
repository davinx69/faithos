"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const denominations = ["All", "Pentecostal", "Anglican", "Catholic", "Baptist", "Evangelical", "Methodist"];

type Church = {
  id: string;
  name: string;
  denomination: string;
  pastor: string;
  address: string;
  state: string;
  service_times: string;
  verified: boolean;
};

export default function SearchPage() {
  const [churches, setChurches] = useState<Church[]>([]);
  const [filtered, setFiltered] = useState<Church[]>([]);
  const [search, setSearch] = useState("");
  const [activeDenom, setActiveDenom] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChurches() {
      const { data } = await supabase
        .from("churches")
        .select("*")
        .eq("published", true)
        .order("name");
      setChurches(data ?? []);
      setFiltered(data ?? []);
      setLoading(false);
    }
    fetchChurches();
  }, []);

  useEffect(() => {
    let results = churches;
    if (activeDenom !== "All") {
      results = results.filter((c) => c.denomination === activeDenom);
    }
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.pastor.toLowerCase().includes(q) ||
          c.address.toLowerCase().includes(q) ||
          c.denomination.toLowerCase().includes(q)
      );
    }
    setFiltered(results);
  }, [search, activeDenom, churches]);

  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-bold text-xl">FAITH</span>
          <span className="text-[#5DCAA5] font-bold text-xl">_OS™</span>
        </Link>
        <Link href="/register" className="bg-[#5DCAA5] text-[#042C53] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition">
          Register Your Church
        </Link>
      </nav>

      <section className="bg-[#042C53] px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Find a Church in Nigeria</h1>
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by church name, pastor, or area..."
              className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-900 bg-white outline-none placeholder-gray-400"
            />
            <button className="bg-[#5DCAA5] text-[#042C53] font-semibold px-6 py-3 rounded-lg text-sm">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {denominations.map((d) => (
              <span
                key={d}
                onClick={() => setActiveDenom(d)}
                className={`text-xs px-3 py-1 rounded-full cursor-pointer transition border ${
                  activeDenom === d
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
        {loading ? (
          <p className="text-sm text-gray-500">Loading churches...</p>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6">
              {filtered.length} church{filtered.length !== 1 ? "es" : ""} found
              {activeDenom !== "All" && ` · ${activeDenom}`}
              {search && ` · "${search}"`}
            </p>

            {filtered.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
                <p className="text-gray-500 text-sm">No churches found.</p>
                <p className="text-gray-400 text-xs mt-1">Try a different search or denomination.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filtered.map((church) => (
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
            )}
          </>
        )}
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