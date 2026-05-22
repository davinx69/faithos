"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    church_name: "",
    denomination: "",
    pastor_name: "",
    address: "",
    state: "",
    branches_count: "",
    sunday_times: "",
    midweek_times: "",
    phone: "",
    email: "",
    website: "",
    submitted_by: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!form.church_name || !form.denomination || !form.pastor_name || !form.address || !form.state || !form.sunday_times || !form.phone || !form.submitted_by) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("registrations").insert({
      church_name: form.church_name,
      denomination: form.denomination,
      pastor_name: form.pastor_name,
      address: form.address,
      state: form.state,
      branches_count: form.branches_count ? parseInt(form.branches_count) : 0,
      sunday_times: form.sunday_times,
      midweek_times: form.midweek_times,
      phone: form.phone,
      email: form.email,
      website: form.website,
      submitted_by: form.submitted_by,
      status: "pending",
    });
    setLoading(false);
    if (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f8f7f4] flex flex-col">
        <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-white font-bold text-xl">FAITH</span>
            <span className="text-[#5DCAA5] font-bold text-xl">_OS™</span>
          </Link>
        </nav>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="text-5xl mb-4">🙏</div>
            <h1 className="text-2xl font-bold text-[#042C53] mb-3">Registration Submitted!</h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Thank you for registering <strong>{form.church_name}</strong>. A Kingdom Ambassador will contact you within 48 hours to verify your church details and set up your profile.
            </p>
            <Link href="/" className="bg-[#042C53] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#185FA5] transition inline-block">
              Back to FAITH_OS
            </Link>
          </div>
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
          Browse Churches
        </Link>
      </nav>

      <section className="bg-[#042C53] px-6 py-10 text-center">
        <div className="inline-block bg-white/10 border border-white/20 text-[#B5D4F4] text-xs font-medium tracking-widest uppercase px-4 py-1 rounded-full mb-4">
          Free Registration
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Register Your Church</h1>
        <p className="text-[#85B7EB] text-sm max-w-md mx-auto">
          Get your church listed on FAITH_OS. A Kingdom Ambassador will visit to verify your details before your profile goes live.
        </p>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-10">

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-[#042C53] text-sm mb-5">Church Details</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Church Name *</label>
              <input name="church_name" value={form.church_name} onChange={handleChange} type="text" placeholder="e.g. RCCG Victory House" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Denomination *</label>
              <select name="denomination" value={form.denomination} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]">
                <option value="">Select denomination</option>
                <option>Pentecostal</option>
                <option>Anglican</option>
                <option>Catholic</option>
                <option>Baptist</option>
                <option>Methodist</option>
                <option>Evangelical</option>
                <option>Orthodox</option>
                <option>Indigenous</option>
                <option>Campus Fellowship</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Lead Pastor Name *</label>
              <input name="pastor_name" value={form.pastor_name} onChange={handleChange} type="text" placeholder="e.g. Pastor John Adeyemi" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Full Address *</label>
              <input name="address" value={form.address} onChange={handleChange} type="text" placeholder="e.g. 14 Broad Street, Lagos Island, Lagos" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">State *</label>
                <select name="state" value={form.state} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]">
                  <option value="">Select state</option>
                  <option>Lagos</option>
                  <option>Abuja (FCT)</option>
                  <option>Rivers</option>
                  <option>Ogun</option>
                  <option>Oyo</option>
                  <option>Kano</option>
                  <option>Enugu</option>
                  <option>Anambra</option>
                  <option>Delta</option>
                  <option>Imo</option>
                  <option>Kaduna</option>
                  <option>Kwara</option>
                  <option>Osun</option>
                  <option>Ondo</option>
                  <option>Edo</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Number of Branches</label>
                <input name="branches_count" value={form.branches_count} onChange={handleChange} type="number" placeholder="e.g. 5" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-[#042C53] text-sm mb-5">Service Times</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Sunday Service Times *</label>
              <input name="sunday_times" value={form.sunday_times} onChange={handleChange} type="text" placeholder="e.g. 8am & 10:30am" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Midweek Service (if any)</label>
              <input name="midweek_times" value={form.midweek_times} onChange={handleChange} type="text" placeholder="e.g. Wednesdays 6pm" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-[#042C53] text-sm mb-5">Contact Information</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Phone Number *</label>
              <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="e.g. +234 801 234 5678" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Email Address</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="e.g. info@yourchurch.org" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Website (if any)</label>
              <input name="website" value={form.website} onChange={handleChange} type="url" placeholder="e.g. https://yourchurch.org" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Your Name (person submitting) *</label>
              <input name="submitted_by" value={form.submitted_by} onChange={handleChange} type="text" placeholder="Your full name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#185FA5]" />
            </div>
          </div>
        </div>

        <div className="bg-[#E1F5EE] border border-[#9FE1CB] rounded-xl p-4 mb-6">
          <p className="text-[#085041] text-sm leading-relaxed">
            <strong>What happens next?</strong> After you submit, a FAITH_OS Kingdom Ambassador will contact you within 48 hours to schedule a visit, verify your church details, and set up your profile. Registration is completely free.
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#042C53] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#185FA5] transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>

        <p className="text-center text-xs text-gray-400 mt-4">
          By submitting you agree to FAITH_OS verification terms. All listings are manually reviewed.
        </p>
      </div>

      <footer className="bg-[#021e38] px-6 py-8 text-center mt-4">
        <div className="text-white font-bold text-lg mb-1">FAITH<span className="text-[#5DCAA5]">_OS™</span></div>
        <div className="text-[#85B7EB]/50 text-xs">Curated by Daniel' Vincent · Powered by THE EDGE™ — Ekklesia of Innovation</div>
      </footer>
    </main>
  );
}