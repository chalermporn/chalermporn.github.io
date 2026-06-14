// ════════════════════════════════════════════════════════════
//  แก้ข้อมูลตัวเองที่ไฟล์เดียวนี้ — ทุกหน้าใช้ค่าจากตรงนี้
//  icon: ใช้ชื่อจาก Lucide → https://lucide.dev/icons (เช่น "github", "map-pin")
// ════════════════════════════════════════════════════════════

export const site = {
  name: "Bird",
  title: "Bird — Engineer & Builder",
  description: "Software engineer ที่ชอบทำของให้ง่ายแต่ใช้ได้จริง — backend, AI และเครื่องมือเล็กๆ ที่ทำให้ชีวิตคนทำงานดีขึ้น",
  // คำที่พิมพ์วิ่งใน hero
  typed: ["Engineer.", "Builder.", "ทำของให้ง่าย.", "Verify before ship."],
};

export const about = {
  bio: "ผมเป็น software engineer ที่มีความสุขกับการ \"ทำของ\" มากกว่าพูดถึงมัน — กลางวันดูแลระบบหลังบ้านฝั่ง enterprise กลางคืนกับวันหยุดก็ยังสนุกกับการสร้างเครื่องมือของตัวเอง ตั้งแต่ระบบให้มูลนิธิไปจนถึงงาน AI และ LLM ที่รันบนเครื่องตัวเอง สิ่งที่ยึดไว้เสมอคือทำของให้ง่ายแต่ใช้ได้จริง, verify ก่อน ship, ไม่สร้างอะไรซับซ้อนก่อนเวลา และทำงานในจังหวะที่ไปได้ยาวๆ ไม่เผาตัวเอง",
  // วิถีการทำงานที่ยึดไว้ (ไม่ใช่ resume)
  facts: [
    { icon: "wand-sparkles", label: "ของต้องง่าย", value: "ไม่ over-engineer ก่อนถึงเวลา" },
    { icon: "shield-check", label: "Verify ก่อน ship", value: "พิสูจน์ก่อน แล้วค่อยสรุป" },
    { icon: "heart", label: "UX มาก่อน", value: "คนใช้ต้องไม่งง" },
    { icon: "battery-charging", label: "ไปให้ยาว", value: "ไม่เผาตัวเองเพื่อ sprint เดียว" },
  ],
};

export type Project = {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  { icon: "bot", title: "AI Project", desc: "อธิบายสั้นๆ ว่าทำอะไร แก้ปัญหาอะไร", tags: ["Python", "LLM"], url: "#" },
  { icon: "chart-no-axes-combined", title: "Data Pipeline", desc: "อธิบายสั้นๆ", tags: ["Airflow", "BigQuery"], url: "#" },
  { icon: "globe", title: "Web App", desc: "อธิบายสั้นๆ", tags: ["TypeScript", "Astro"], url: "#" },
];

export type Social = { label: string; icon: string; url: string };

// ช่องทางติดต่อ
export const socials: Social[] = [
  { label: "Facebook", icon: "facebook", url: "https://www.facebook.com/chalermporn.po" },
  { label: "GitHub", icon: "github", url: "https://github.com/chalermporn" },
  { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/chalermpornppos/" },
];

