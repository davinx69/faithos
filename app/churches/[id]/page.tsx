import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ChurchProfile({ params }: Props) {
  const { id } = await params;

  const { data: church } = await supabase
    .from("churches")
    .select("*")
    .eq("id", id)
    .single();

  const { data: branches } = await supabase
    .from("branches")
    .select("*")
    .eq("church_id", id);

  const { data: programs } = await supabase
    .from("programs")
    .select("*")
    .eq("church_id", id);

  if (!church) {
    return (
      <main className="min-h-screen bg-[#f8f7f4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#042C53] mb-4">Church not found</h1>
          <Link href="/churches" className="text-[#185FA5] text-sm underline">Back to directory</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-bold text-xl">FAITH</span>
          <span className="text-[#5DCAA5] font-bold text-xl">_OS™</span>
        </Link>
        <Link href="/churches" className="text-[#85B7EB] text-sm hover:text-white transition">
          ← Back to directory
        </Link>
      </nav>

      <section className="bg-[#042C53] px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/10 text-[#5DCAA5] text-xs px-3 py-0.5 rounded-full">{church.denomination}</span>
                {church.verified && (
                  <span className="bg-white/10 text-[#B5D4F4] text-xs px-3 py-0.5 rounded-full">✓ Verified Ministry</span>
                )}
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">{church.name}</h1>
              <p className="text-[#85B7EB] text-sm">👤 {church.pastor}</p>
            </div>
            <div className="text-center bg-white/10 rounded-xl px-5 py-3">
              <div className="text-2xl font-bold text-white">{branches?.length ?? 0}</div>
              <div className="text-xs text-[#85B7EB]">branches</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-6">

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-[#042C53] text-sm mb-4">Church Information</h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-3"><span className="text-gray-400 w-24">Address</span><span className="text-gray-700">📍 {church.address}</span></div>
            <div className="flex gap-3"><span className="text-gray-400 w-24">Services</span><span className="text-gray-700">🕐 {church.service_times}</span></div>
            {church.phone && <div className="flex gap-3"><span className="text-gray-400 w-24">Phone</span><span className="text-gray-700">📞 {church.phone}</span></div>}
            {church.email && <div className="flex gap-3"><span className="text-gray-400 w-24">Email</span><span className="text-gray-700">✉️ {church.email}</span></div>}
            {church.website && <div className="flex gap-3"><span className="text-gray-400 w-24">Website</span><a href={church.website} className="text-[#185FA5]" target="_blank">🌐 {church.website}</a></div>}
          </div>
        </div>

        {church.about && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-[#042C53] text-sm mb-3">About this Church</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{church.about}</p>
          </div>
        )}

        {programs && programs.length > 0 && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-[#042C53] text-sm mb-4">Programs and Services</h2>
            <div className="flex flex-wrap gap-2">
              {programs.map((p) => (
                <span key={p.id} className="bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1 rounded-full">{p.name}</span>
              ))}
            </div>
          </div>
        )}

        {branches && branches.length > 0 && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-[#042C53] text-sm mb-4">Branches ({branches.length} shown)</h2>
            <div className="flex flex-col gap-3">
              {branches.map((b) => (
                <div key={b.id} className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-[#042C53]">{b.name}</div>
                    <div className="text-xs text-gray-500">📍 {b.area}</div>
                  </div>
                  <div className="text-xs text-gray-400">👤 {b.pastor}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link href="/churches" className="text-[#185FA5] text-sm text-center underline">
          ← Back to all churches
        </Link>
      </div>

      <footer className="bg-[#021e38] px-6 py-8 text-center mt-4">
        <div className="text-white font-bold text-lg mb-1">FAITH<span className="text-[#5DCAA5]">_OS™</span></div>
        <div className="text-[#85B7EB]/50 text-xs">Curated by Daniel' Vincent · Powered by THE EDGE™ — Ekklesia of Innovation</div>
      </footer>
    </main>
  );
}