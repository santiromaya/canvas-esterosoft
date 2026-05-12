import {
  Users, Sparkles, Share2, Heart, Workflow, Boxes, Handshake, Receipt, Wallet,
  type LucideIcon,
} from "lucide-react";

export type CanvasBlock = {
  id: string;
  title: string;
  short: string;
  icon: LucideIcon;
  area: string; // grid-area
  content: { heading?: string; items: string[] }[];
};

export const BLOCKS: CanvasBlock[] = [
  {
    id: "partners",
    title: "Socios Clave",
    short: "Alianzas estratégicas",
    icon: Handshake,
    area: "partners",
    content: [
      { items: [
        "Plataforma Emprender (Programa Incubar)",
        "Nodo Tecnológico",
        "ITSE",
        "Smart City",
      ]},
    ],
  },
  {
    id: "activities",
    title: "Actividades Clave",
    short: "Lo que hacemos día a día",
    icon: Workflow,
    area: "activities",
    content: [
      { heading: "Ciclo de vida del software", items: [
        "Planificación", "Análisis", "Diseño", "Desarrollo",
        "Pruebas", "Implementación", "Mantenimiento",
      ]},
      { heading: "Comercial", items: ["Marketing", "Ventas"] },
    ],
  },
  {
    id: "value",
    title: "Propuesta de Valor",
    short: "Por qué elegirnos",
    icon: Sparkles,
    area: "value",
    content: [
      { items: [
        "Seguridad", "Calidad Visual", "Exclusividad",
        "Customización", "Adaptabilidad",
        "Soluciones ágiles", "Tecnologías modernas",
      ]},
    ],
  },
  {
    id: "relationships",
    title: "Relaciones con Clientes",
    short: "Cómo nos vinculamos",
    icon: Heart,
    area: "relationships",
    content: [
      { items: [
        "Seguimiento y asistencia constante",
        "Capacitación al staff",
        "Confianza mutua",
        "Comunicación activa",
      ]},
    ],
  },
  {
    id: "segments",
    title: "Segmentos de Clientes",
    short: "A quién servimos",
    icon: Users,
    area: "segments",
    content: [
      { heading: "Gastronomía", items: ["Bares", "Restaurantes"] },
      { heading: "Salud", items: ["Médicos", "Odontólogos"] },
    ],
  },
  {
    id: "resources",
    title: "Recursos Clave",
    short: "Activos que potencian la operación",
    icon: Boxes,
    area: "resources",
    content: [
      { heading: "Físicos", items: ["PC, Notebooks, Smartphones, Tablets", "Hardware"] },
      { heading: "Intelectuales", items: [
        "Licencias de IA",
        "Dominios (NIC Argentina, DonWeb, Hostinger)",
        "Cloud y licencias de contenido (Canva Pro, CapCut Pro, Claude Design)",
      ]},
      { heading: "Humanos", items: [
        "Desarrollador Backend / Ciberseguridad",
        "Desarrollador Frontend / UX·UI",
        "Científico de Datos / Ventas",
      ]},
      { heading: "Financieros", items: [
        "Capital semilla propio: aportes iniciales de los socios",
        "Subsidios estatales (PEI) para herramientas e insumos tecnológicos",
        "Reinversión de utilidades en infraestructura y escalabilidad",
      ]},
    ],
  },
  {
    id: "channels",
    title: "Canales",
    short: "Dónde nos encontramos",
    icon: Share2,
    area: "channels",
    content: [
      { items: [
        "Instagram @estero.soft",
        "TikTok @estero.soft",
        "Radio LV11",
        "Sitio web",
        "Boca a boca",
      ]},
    ],
  },
  {
    id: "costs",
    title: "Estructura de Costos",
    short: "En qué invertimos",
    icon: Receipt,
    area: "costs",
    content: [
      { heading: "Fijos", items: ["SaaS", "Cloud"] },
      { heading: "Variables", items: ["Meta Ads", "Google Ads", "Influencers / Periodistas"] },
      { heading: "Mantenimiento de Hardware", items: ["Reposición y actualización de periféricos y componentes"] },
      { heading: "Dominios y Certificados", items: ["Renovaciones anuales de dominios y SSL"] },
    ],
  },
  {
    id: "revenue",
    title: "Fuentes de Ingreso",
    short: "Cómo generamos valor económico",
    icon: Wallet,
    area: "revenue",
    content: [
      { items: [
        "Desarrollo de software a medida",
        "Suscripciones SaaS",
        "Mantenimiento y soporte continuo",
        "Servicios de consultoría tecnológica",
      ]},
    ],
  },
];
