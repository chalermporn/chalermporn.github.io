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
  bio: "ผมเป็น Full Stack Engineer ที่ธนาคารกรุงไทย (KTB) ดูแลระบบหลังบ้านฝั่ง enterprise มา 7 ปี — งานที่ได้เล่นกับสถาปัตยกรรมจริงจังอย่าง clean / hexagonal architecture และการค่อยๆ ย้ายระบบจาก Java ไป Go โดยไม่ทำให้ของเดิมพัง นอกเวลางานผมเป็นผู้ก่อตั้ง ARAYA SOFT (โค้ดมันฮา) สร้างซอฟต์แวร์ \"เพื่อมวลชน\" ตั้งแต่ระบบลงทะเบียนค่ายเด็กให้มูลนิธิ ไปจนถึง AI memory framework และ LLM ที่รันบนเครื่องตัวเอง รวมแล้วผมอยู่ในสายงานนี้มา 15 ปี และยังสนุกกับการ \"ทำของ\" ให้ง่ายแต่ใช้ได้จริงเสมอ สิ่งที่ยึดไว้คือ verify ก่อน ship, ไม่สร้างอะไรซับซ้อนก่อนเวลา และทำงานในจังหวะที่ไปได้ยาวๆ ไม่เผาตัวเอง",
  facts: [
    { icon: "briefcase", label: "ตอนนี้", value: "Full Stack Engineer @ KTB" },
    { icon: "rocket", label: "ก่อตั้ง", value: "ARAYA SOFT · โค้ดมันฮา" },
    { icon: "map-pin", label: "อยู่ที่", value: "กรุงเทพฯ" },
    { icon: "target", label: "กำลังโฟกัส", value: "AI tooling & local LLM" },
  ],
  stats: [
    { num: 15, label: "ปีในสายงาน" },
    { num: 7, label: "ปีที่กรุงไทย" },
    { num: 12, label: "ปีปั้น ARAYA SOFT" },
  ],
};

export type Experience = {
  icon: string;
  role: string;
  org: string;
  period: string;
  desc?: string;
  url?: string;
};

// ประสบการณ์ — เรียงใหม่ → เก่า
export const experience: Experience[] = [
  {
    icon: "landmark",
    role: "Full Stack Engineer",
    org: "ธนาคารกรุงไทย (KTB)",
    period: "2019 – ปัจจุบัน",
    desc: "พัฒนาระบบหลังบ้านฝั่ง enterprise — clean / hexagonal architecture, ย้ายระบบจาก Java สู่ Go, และดู observability ทั้ง stack",
  },
  {
    icon: "rocket",
    role: "ผู้ก่อตั้ง & CEO",
    org: "ARAYA SOFT · โค้ดมันฮา",
    period: "2014 – ปัจจุบัน",
    desc: "สร้างซอฟต์แวร์เพื่อมวลชน — เครื่องมือและระบบที่ใช้ได้จริง ตั้งแต่งานมูลนิธิไปจนถึงเครื่องมือ AI",
    url: "https://codemunha.com",
  },
  {
    icon: "code",
    role: "Software Developer",
    org: "Aspiron",
    period: "2016 – 2019",
    desc: "พัฒนาเว็บแอปพลิเคชันให้ลูกค้าองค์กร",
  },
  {
    icon: "laptop",
    role: "Freelance Developer",
    org: "อิสระ",
    period: "2015",
    desc: "รับงานพัฒนาเว็บและซอฟต์แวร์ตามโจทย์ลูกค้า",
  },
  {
    icon: "graduation-cap",
    role: "Computer Technical Officer",
    org: "สจล. (KMITL)",
    period: "2011 – 2014",
    desc: "จุดเริ่มต้นสายงาน — ดูแลระบบและงานเทคนิคคอมพิวเตอร์",
  },
];

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
