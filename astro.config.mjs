// @ts-check
import { defineConfig } from "astro/config";

// ──────────────────────────────────────────────────────────────
// ปรับ 2 ค่านี้ตอน deploy:
//  • user/org site  (repo ชื่อ <username>.github.io)  →  site: "https://<username>.github.io",  base: "/"
//  • project site   (repo ชื่ออื่น เช่น "me")          →  site: "https://<username>.github.io", base: "/me"
// ──────────────────────────────────────────────────────────────
export default defineConfig({
  site: "https://example.github.io",
  base: "/",
  trailingSlash: "ignore",
});
