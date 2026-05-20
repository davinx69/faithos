import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-bold text-xl">FAITH</span>
          <span className="text-[#5DCAA5] font-bold text-xl">_OS</span>
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
              <input type="text" placeholder="e.g. RCCG Victory House" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Denomination *</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]">
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
              <input type="text" placeholder="e.g. Pastor John Adeyemi" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Full Address *</label>
              <input type="text" placeholder="e.g. 14 Broad Street, Lagos Island, Lagos" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">State *</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]">
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
                <input type="number" placeholder="e.g. 5" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
              </div>
            </div>

          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-[#042C53] text-sm mb-5">Service Times</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Sunday Service Times *</label>
              <input type="text" placeholder="e.g. 8am & 10:30am" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Midweek Service (if any)</label>
              <input type="text" placeholder="e.g. Wednesdays 6pm" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-[#042C53] text-sm mb-5">Contact Information</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Phone Number *</label>
              <input type="tel" placeholder="e.g. +234 801 234 5678" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Email Address</label>
              <input type="email" placeholder="e.g. info@yourchurch.org" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Website (if any)</label>
              <input type="url" placeholder="e.g. https://yourchurch.org" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Your Name (person submitting) *</label>
              <input type="text" placeholder="Your full name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#185FA5]" />
            </div>
          </div>
        </div>

        <div className="bg-[#E1F5EE] border border-[#9FE1CB] rounded-xl p-4 mb-6">
          <p className="text-[#085041] text-sm leading-relaxed">
            <strong>What happens next?</strong> After you submit, a FAITH_OS Kingdom Ambassador will contact you within 48 hours to schedule a visit, verify your church details, and set up your profile. Registration is completely free.
          </p>
        </div>

        <button className="w-full bg-[#042C53] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#185FA5] transition">
          Submit Registration →
        </button>

        <p className="text-center text-xs text-gray-400 mt-4">
          By submitting you agree to FAITH_OS verification terms. All listings are manually reviewed.
        </p>

      </div>

      <footer className="bg-[#021e38] px-6 py-8 text-center mt-4">
        <div className="text-white font-bold text-lg mb-1">FAITH<span className="text-[#5DCAA5]">_OS</span></div>
        <div className="text-[#85B7EB]/50 text-xs">Curated by Daniel Vincent · Powered by THE EDGE — Ekklesia of Innovation</div>
      </footer>

    </main>
  );
}