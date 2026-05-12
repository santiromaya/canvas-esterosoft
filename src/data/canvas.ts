import {
  Users, Sparkles, Share2, Heart, Workflow, Boxes, Handshake, Receipt, Wallet,
  type LucideIcon,
} from "lucide-react";

export type CanvasBlock = {
  id: string;
  bmcNumber: number;
  title: string;
  short: string;
  question: string;
  icon: LucideIcon;
  area: string;
  content: { heading?: string; items: string[] }[];
};

export const BLOCKS: CanvasBlock[] = [
  {
    id: "segments",
    bmcNumber: 1,
    title: "Segmentos de Clientes",
    short: "A quién servimos",
    question: "¿Para quién estamos creando valor?",
    icon: Users,
    area: "segments",
    content: [
      { heading: "Gastronomía", items: ["Bares", "Restaurantes"] },
      { heading: "Salud", items: ["Médicos", "Otros profesionales de la salud"] },
    ],
  },
  {
    id: "value",
    bmcNumber: 2,
    title: "Propuesta de Valor",
    short: "Por qué elegirnos",
    question: "¿Qué valor entregamos a nuestros clientes?",
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
    bmcNumber: 3,
    title: "Relaciones con Clientes",
    short: "Cómo nos vinculamos",
    question: "¿Qué tipo de relación espera cada uno de nuestros segmentos de clientes?",
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
    id: "channels",
    bmcNumber: 4,
    title: "Canales",
    short: "Dónde nos encontramos",
    question: "¿A través de que canales quieren los segmentos de clientes que lleguemos a ellos?",
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
    id: "activities",
    bmcNumber: 5,
    title: "Actividades Clave",
    short: "Lo que hacemos",
    question: "¿Qué actividades requieren nuestra propuesta de valor?",
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
    id: "resources",
    bmcNumber: 6,
    title: "Recursos Clave",
    short: "Activos que potencian",
    question: "¿Qué recursos claves son requeridos por nuestra propuesta de valor?",
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
    id: "partners",
    bmcNumber: 7,
    title: "Socios Clave",
    short: "Alianzas estratégicas",
    question: "¿Quiénes son nuestros socios claves?",
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
    id: "costs",
    bmcNumber: 8,
    title: "Estructura de Costes",
    short: "En qué invertimos",
    question: "¿Cuáles son los costes más importantes inherentes a nuestro modelo de negocio?",
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
    bmcNumber: 9,
    title: "Fuentes de Ingreso",
    short: "Cómo generamos valor económico",
    question: "¿Por qué valor están realmente dispuestos a pagar nuestros clientes?",
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
