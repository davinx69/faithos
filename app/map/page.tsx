"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Church = {
  id: string;
  name: string;
  denomination: string;
  pastor: string;
  address: string;
  service_times: string;
  verified: boolean;
  latitude: number;
  longitude: number;
};

const denomColors: Record<string, string> = {
  Pentecostal: "#E63946",
  Anglican: "#457B9D",
  Catholic: "#6A0572",
  Baptist: "#E76F51",
  Evangelical: "#2A9D8F",
  Methodist: "#E9C46A",
};

export default function MapPage() {
  const mapRef = useRef<any>(null);
  const mapInstanceRef = useRef<any>(null);
  const [churches, setChurches] = useState<Church[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function fetchChurches() {
      const { data } = await supabase
        .from("churches")
        .select("*")
        .eq("published", true)
        .not("latitude", "is", null);
      setChurches(data ?? []);
      setReady(true);
    }
    fetchChurches();
  }, []);

  useEffect(() => {
    if (!ready || churches.length === 0 || mapInstanceRef.current) return;

    async function initMap() {
      const L = (await import("leaflet")).default;

      // Fix leaflet default icon
      const iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
      const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
      const shadowUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl });

      // Load CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      await new Promise((r) => setTimeout(r, 100));

      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current).setView([6.4541, 3.3947], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      churches.forEach((church) => {
        const color = denomColors[church.denomination] ?? "#042C53";
        const marker = L.circleMarker([church.latitude, church.longitude], {
          radius: 10,
          fillColor: color,
          fillOpacity: 0.9,
          color: "white",
          weight: 2,
        }).addTo(map);

        marker.bindPopup(`
          <div style="min-width:160px">
            <div style="font-weight:600;color:#042C53;font-size:13px">${church.name}</div>
            <div style="font-size:11px;color:#666;margin-top:2px">${church.denomination}</div>
            <div style="font-size:11px;color:#444;margin-top:6px">👤 ${church.pastor}</div>
            <div style="font-size:11px;color:#555;margin-top:2px">🕐 ${church.service_times}</div>
            <a href="/churches/${church.id}" style="display:block;margin-top:8px;font-size:11px;color:#185FA5;font-weight:600">View full profile</a>
          </div>
        `);
      });

      mapInstanceRef.current = map;
    }

    initMap();
  }, [ready, churches]);

  return (
    <main className="min-h-screen bg-[#f8f7f4] flex flex-col">
      <nav className="bg-[#042C53] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-bold text-xl">FAITH</span>
          <span className="text-[#5DCAA5] font-bold text-xl">_OS™</span>
        </Link>
        <div className="flex gap-3 items-center">
          <Link href="/churches" className="text-[#85B7EB] text-sm hover:text-white transition">
            List View
          </Link>
          <Link href="/register" className="bg-[#5DCAA5] text-[#042C53] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition">
            Register Church
          </Link>
        </div>
      </nav>

      <div className="bg-[#042C53] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-white font-bold text-lg">Church Map — Lagos, Nigeria</h1>
          <span className="text-[#85B7EB] text-xs">{churches.length} churches mapped</span>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          {Object.entries(denomColors).map(([denom, color]) => (
            <div key={denom} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
              <span className="text-xs text-gray-600">{denom}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={mapRef}
        style={{ flex: 1, minHeight: "500px", width: "100%" }}
      />

      <footer className="bg-[#021e38] px-6 py-4 text-center">
        <div className="text-white font-bold text-sm mb-0.5">
          FAITH<span className="text-[#5DCAA5]">_OS™</span>
        </div>
        <div className="text-[#85B7EB]/50 text-xs">
          Curated by Daniel' Vincent · Powered by THE EDGE™
        </div>
      </footer>
    </main>
  );
}