// ════════════════════════════════════════════════════════════
//  แก้ข้อมูลตัวเองที่ไฟล์เดียวนี้ — ทุกหน้าใช้ค่าจากตรงนี้
//  icon: ใช้ชื่อจาก Lucide → https://lucide.dev/icons (เช่น "github", "map-pin")
// ════════════════════════════════════════════════════════════

export const site = {
  name: "Bird",
  title: "Bird — Personal Portfolio",
  description: "Engineer & builder — data, AI และเครื่องมือที่ทำให้คนทำงานเร็วขึ้น",
  email: "you@example.com",
  // คำที่พิมพ์วิ่งใน hero
  typed: ["Engineer.", "Data & AI.", "Builder.", "Lifelong learner."],
};

export const about = {
  bio: "เขียนเล่าตัวเองสั้นๆ ตรงนี้ — ทำอะไร สนใจอะไร มีประสบการณ์ด้านไหน แก้ได้ที่ src/config.ts",
  facts: [
    { icon: "wrench", label: "Skill หลัก", value: "เพิ่มของคุณเอง" },
    { icon: "map-pin", label: "อยู่ที่", value: "กรุงเทพฯ" },
    { icon: "target", label: "กำลังโฟกัส", value: "เพิ่มของคุณเอง" },
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
  { label: "GitHub", icon: "github", url: "https://github.com/" },
  { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
  { label: "Medium", icon: "pen-line", url: "https://medium.com/" },
  { label: "YouTube", icon: "youtube", url: "https://youtube.com/" },
  { label: "Email", icon: "mail", url: "mailto:you@example.com" },
];
