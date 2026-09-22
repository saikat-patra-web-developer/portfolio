import { Boxes, Braces, Network, Search, Sparkles, Webhook } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiTailwindcss,
  SiLivewire,
  SiWordpress,
  SiVite,
  SiNodedotjs,
  SiClaude,
  SiGooglegemini,
  SiLangchain,
  SiPython,
  SiExpo,
  SiTypescript,
  SiSqlite,
  SiGooglesearchconsole,
  SiLighthouse
} from "react-icons/si";
import { TbBrandOpenai, TbBrandReactNative } from "react-icons/tb";

/**
 * Normalise a technology label so variants like
 * "WordPress (Custom)", "Lighthouse (99+)" or "SQLite / MMKV"
 * still resolve to the right logo.
 */
const normalize = (name = "") =>
  String(name).toLowerCase().replace(/[^a-z0-9]/g, "");

const ICONS = {
  react: SiReact,
  reactnative: TbBrandReactNative,
  laravel: SiLaravel,
  php: SiPhp,
  mysql: SiMysql,
  mariadb: SiMariadb,
  postgresql: SiPostgresql,
  psql: SiPostgresql,
  tailwindcss: SiTailwindcss,
  livewire: SiLivewire,
  wordpresscustom: SiWordpress,
  wordpress: SiWordpress,
  vite: SiVite,
  vitessr: SiVite,
  nodedotjs: SiNodedotjs,
  nodejs: SiNodedotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  openaiapi: TbBrandOpenai,
  openai: TbBrandOpenai,
  anthropicclaude: SiClaude,
  claude: SiClaude,
  geminiapi: SiGooglegemini,
  gemini: SiGooglegemini,
  langchain: SiLangchain,
  python: SiPython,
  pythonnodejs: SiPython,
  expo: SiExpo,
  sqlitemmkv: SiSqlite,
  sqlite: SiSqlite,
  googlesearchconsole: SiGooglesearchconsole,
  lighthouse99: SiLighthouse,
  lighthouse: SiLighthouse,
  // Generic-but-meaningful marks (no official brand logo exists)
  restapis: Network,
  webhooks: Webhook,
  vectordbs: Boxes,
  technicalseo: Search,
  geoaisearch: Sparkles,
  jsonldschemaorg: Braces,
  jsonld: Braces
};

export const TechIcon = ({ name, className = "w-3.5 h-3.5" }) => {
  const key = normalize(name);
  const Icon = ICONS[key] || Boxes;
  return (
    <Icon
      className={`${className} shrink-0`}
      aria-hidden="true"
      data-icon={ICONS[key] ? key : "fallback"}
    />
  );
};

export default TechIcon;
