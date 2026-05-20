import Link from "next/link";

const churches: Record<string, any> = {
  "rccg-central-lagos": {
    name: "RCCG Central Lagos",
    denomination: "Pentecostal",
    pastor: "Pastor Adeyemi Olatunji",
    address: "14 Broad Street, Lagos Island, Lagos",
    service: "Sundays 8am & 10:30am",
    verified: true,
    branches: 12,
    phone: "+234 801 234 5678",
    about: "RCCG Central Lagos is one of the flagship parishes of the Redeemed Christian Church of God, serving the Lagos Island community since 1985. Known for powerful worship, strong youth ministry, and community outreach programs across Lagos.",
    programs: ["Sunday Service", "Wednesday Bible Study", "Friday Night Vigil", "Youth Church", "Children Church", "Men Fellowship", "Women Fellowship"],
    branchList: [
      { name: "RCCG Victory House", area: "Surulere, Lagos", pastor: "Pastor Tunde Alabi" },
      { name: "RCCG House of Glory", area: "Yaba, Lagos", pastor: "Pastor Seun Bello" },
      { name: "RCCG Throne of Grace", area: "Ikeja, Lagos", pastor: "Pastor Kemi Adeyemi" },
      { name: "RCCG Living Spring", area: "Lekki, Lagos", pastor: "Pastor Femi Ogun" },
    ],
  },
  "mfm-yaba": {
    name: "Mountain of Fire Yaba",
    denomination: "Pentecostal",
    pastor: "Pastor Bola Fashola",
    address: "23 Herbert Macaulay Way, Yaba, Lagos",
    service: "Sundays 7am & 9am",
    verified: true,
    branches: 8,
    phone: "+234 802 345 6789",
    about: "Mountain of Fire and Miracles Ministries Yaba is a prayer-focused church known for spiritual warfare ministry, deliverance services, and evangelism outreach across Lagos mainland.",
    programs: ["Sunday Service", "Power Must Change Hands", "Daily Devotion", "Prayer City Meetings", "Youth Ministry", "Children Church"],
    branchList: [
      { name: "MFM Mushin", area: "Mushin, Lagos", pastor: "Pastor Ayo Salami" },
      { name: "MFM Bariga", area: "Bariga, Lagos", pastor: "Pastor Dele Okafor" },
      { name: "MFM Shomolu", area: "Shomolu, Lagos", pastor: "Pastor Grace Nwachukwu" },
    ],
  },
  "cathedral-church-lagos": {
    name: "Cathedral Church of Christ",
    denomination: "Anglican",
    pastor: "Bishop Humphrey Olumakaiye",
    address: "Marina, Lagos Island, Lagos",
    service: "Sundays 7:30am & 10am",
    verified: true,
    branches: 5,
    phone: "+234 803 456 7890",
    about: "The Cathedral Church of Christ on Marina is the mother church of the Anglican Communion in Lagos, founded in 1867. One of the oldest and most historic churches in Nigeria.",
    programs: ["Sunday Eucharist", "Matins", "Evensong", "Wednesday Holy Communion", "Choir Ministry", "Mothers Union", "Youth Fellowship"],
    branchList: [
      { name: "St. Pauls Anglican", area: "Breadfruit, Lagos", pastor: "Rev. Akin Coker" },
      { name: "St. Peters Anglican", area: "Faji, Lagos", pastor: "Rev. Bisi Adekunle" },
    ],
  },
  "living-faith-lekki": {
    name: "Living Faith Church Lekki",
    denomination: "Pentecostal",
    pastor: "Pastor Emmanuel Adeyinka",
    address: "Admiralty Way, Lekki Phase 1, Lagos",
    service: "Sundays 8am & 10am",
    verified: true,
    branches: 20,
    phone: "+234 804 567 8901",
    about: "Living Faith Church Lekki (Winners Chapel) is one of the largest congregations on the Lekki corridor, known for Word-based teaching, excellence in worship, and strong young professionals ministry.",
    programs: ["Sunday Service", "Midweek Service", "Covenant Hour of Prayer", "Youth Alive", "Children Ministry", "Married Couples Fellowship"],
    branchList: [
      { name: "Winners Chapel Ajah", area: "Ajah, Lagos", pastor: "Pastor Dotun Balogun" },
      { name: "Winners Chapel VGC", area: "VGC, Lagos", pastor: "Pastor Sola Obi" },
      { name: "Winners Chapel Chevron", area: "Chevron, Lagos", pastor: "Pastor Nkem Eze" },
    ],
  },
  "christ-embassy-vi": {
    name: "Christ Embassy Victoria Island",
    denomination: "Pentecostal",
    pastor: "Pastor Grace Okonkwo",
    address: "10 Adeola Odeku Street, Victoria Island, Lagos",
    service: "Sundays 9am & 11am",
    verified: true,
    branches: 15,
    phone: "+234 805 678 9012",
    about: "Christ Embassy Victoria Island is part of the Loveworld Network founded by Pastor Chris Oyakhilome. Known for vibrant praise and worship, media ministry, and strong focus on the supernatural.",
    programs: ["Sunday Service", "Rhapsody Study", "Cell Meetings", "Youth Aglow", "Children Ministry", "Prayer and Fasting"],
    branchList: [
      { name: "Christ Embassy Onikan", area: "Onikan, Lagos", pastor: "Pastor Emeka Nwosu" },
      { name: "Christ Embassy Ikoyi", area: "Ikoyi, Lagos", pastor: "Pastor Titi Lawson" },
    ],
  },
  "deeper-life-surulere": {
    name: "Deeper Christian Life Surulere",
    denomination: "Evangelical",
    pastor: "Pastor James Adebayo",
    address: "32 Bode Thomas Street, Surulere, Lagos",
    service: "Sundays 8am",
    verified: true,
    branches: 6,
    phone: "+234 806 789 0123",
    about: "Deeper Christian Life Ministry Surulere is part of the global Deeper Life Bible Church founded by Pastor W.F. Kumuyi. Known for deep Bible teaching, holiness standards, and nationwide evangelism crusades.",
    programs: ["Sunday Service", "Bible Study Wednesdays", "Home Care Fellowship", "Youth Ministry", "Children Sunday School", "Evangelism Outreach"],
    branchList: [
      { name: "Deeper Life Aguda", area: "Aguda, Surulere", pastor: "Pastor Kunle Babs" },
      { name: "Deeper Life Ijesha", area: "Ijesha, Lagos", pastor: "Pastor Wale Ojo" },
    ],
  },
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ChurchProfile({ params }: Props) {
  const { id } = await params;
  const church = churches[id];

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
          <span className="text-[#5DCAA5] font-bold text-xl">_OS</span>
        </Link>
        <Link href="/churches" className="text-[#85B7EB] text-sm hover:text-white transition">
          Back to directory
        </Link>
      </nav>

      <section className="bg-[#042C53] px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/10 text-[#5DCAA5] text-xs px-3 py-0.5 rounded-full">{church.denomination}</span>
                {church.verified && (
                  <span className="bg-white/10 text-[#B5D4F4] text-xs px-3 py-0.5 rounded-full">Verified Ministry</span>
                )}
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">{church.name}</h1>
              <p className="text-[#85B7EB] text-sm">{church.pastor}</p>
            </div>
            <div className="text-center bg-white/10 rounded-xl px-5 py-3">
              <div className="text-2xl font-bold text-white">{church.branches}</div>
              <div className="text-xs text-[#85B7EB]">branches</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-6">

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-[#042C53] text-sm mb-4">Church Information</h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-3"><span className="text-gray-400 w-24">Address</span><span className="text-gray-700">{church.address}</span></div>
            <div className="flex gap-3"><span className="text-gray-400 w-24">Services</span><span className="text-gray-700">{church.service}</span></div>
            <div className="flex gap-3"><span className="text-gray-400 w-24">Phone</span><span className="text-gray-700">{church.phone}</span></div>
            <div className="flex gap-3"><span className="text-gray-400 w-24">Pastor</span><span className="text-gray-700">{church.pastor}</span></div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-[#042C53] text-sm mb-3">About this Church</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{church.about}</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-[#042C53] text-sm mb-4">Programs and Services</h2>
          <div className="flex flex-wrap gap-2">
            {church.programs.map((p: string) => (
              <span key={p} className="bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1 rounded-full">{p}</span>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-[#042C53] text-sm mb-4">Branches ({church.branchList.length} shown)</h2>
          <div className="flex flex-col gap-3">
            {church.branchList.map((b: any) => (
              <div key={b.name} className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3">
                <div>
                  <div className="text-sm font-medium text-[#042C53]">{b.name}</div>
                  <div className="text-xs text-gray-500">{b.area}</div>
                </div>
                <div className="text-xs text-gray-400">{b.pastor}</div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/churches" className="text-[#185FA5] text-sm text-center underline">
          Back to all churches
        </Link>
      </div>

      <footer className="bg-[#021e38] px-6 py-8 text-center mt-4">
        <div className="text-white font-bold text-lg mb-1">FAITH<span className="text-[#5DCAA5]">_OS</span></div>
        <div className="text-[#85B7EB]/50 text-xs">Curated by Daniel Vincent · Powered by THE EDGE — Ekklesia of Innovation</div>
      </footer>
    </main>
  );
}