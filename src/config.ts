// ════════════════════════════════════════════════════════════
//  แก้ข้อมูลตัวเองที่ไฟล์เดียวนี้ — ทุกหน้าใช้ค่าจากตรงนี้
//  icon: ใช้ชื่อจาก Lucide → https://lucide.dev/icons (เช่น "github", "map-pin")
// ════════════════════════════════════════════════════════════

export const site = {
  name: "Bird",
  title: "Bird — Engineer & Builder",
  description: "Software engineer ที่ชอบทำของให้ง่ายแต่ใช้ได้จริง — backend, AI และเครื่องมือเล็กๆ ที่ทำให้ชีวิตคนทำงานดีขึ้น",
  email: "chalermporn.po@gmail.com",
  // คำที่พิมพ์วิ่งใน hero
  typed: ["Engineer.", "Builder.", "ทำของให้ง่าย.", "Verify before ship."],
};

export const about = {
  bio: "ผมเป็น software engineer ที่สนุกกับการ \"ทำของ\" มากกว่าพูดถึงมัน — เขียนเสร็จก็ ship เห็นผลไว แล้วค่อยปรับ กลางวันเขียนระบบหลังบ้านฝั่ง enterprise (clean/hexagonal architecture, ย้ายของเก่าจาก Java ไป Go) กลางคืนกับวันหยุดสร้างเครื่องมือของตัวเอง ตั้งแต่ระบบลงทะเบียนค่ายเด็กให้มูลนิธิ ไปจนถึง AI memory framework และ LLM ที่รันบนเครื่องตัวเอง สิ่งที่ยึดไว้เสมอคือ verify ก่อน ship, ไม่สร้างอะไรซับซ้อนก่อนเวลา และทำงานในจังหวะที่ไปได้ยาวๆ ไม่เผาตัวเอง",
  facts: [
    { icon: "wrench", label: "ถนัด", value: "Backend · Go · TypeScript · AI/LLM" },
    { icon: "map-pin", label: "อยู่ที่", value: "กรุงเทพฯ" },
    { icon: "target", label: "กำลังโฟกัส", value: "AI tooling & local LLM" },
  ],
  stats: [
    { num: 5, label: "ปีประสบการณ์" },
    { num: 20, label: "โปรเจกต์" },
    { num: 10, label: "งานพูด/แชร์" },
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

export const socials: Social[] = [
  { label: "GitHub", icon: "github", url: "https://github.com/chalermporn" },
  { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/chalermpornppos/" },
  { label: "Email", icon: "mail", url: "mailto:chalermporn.po@gmail.com" },
];
