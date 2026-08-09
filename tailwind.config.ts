import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#090b12", panel: "#111521", violet: "#9b6cff", cyan: "#55d9ff" }, boxShadow: { glow: "0 18px 55px rgba(112,76,255,.18)" } } }, plugins: [] } satisfies Config;
