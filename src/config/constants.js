// Central Instagram URL
export const INSTAGRAM_URL = "https://www.instagram.com/terran.ps/";

// Navigation links
export const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "البكجات", href: "#packages" },
  { label: "عن تيران", href: "#why-terran" },
  { label: "تواصل معنا", href: INSTAGRAM_URL, external: true },
];

// Package data matching the mockup layout (Order: Large [right], Small [middle], Sports [left])
export const PACKAGES = [
  {
    id: "large",
    name: "البكج الكبير",
    price: 100,
    currency: "₪",
    description:
      "مجموعة متكاملة من الإكسسوارات الرجالية الفاخرة التي تمنحك حضوراً أكثر تميزاً وثقة، تلائم المناسبات الكبرى والحضور الرسمي اليومي.",
    image: "/images/package-large-t.png",
    featured: true,
    badge: "الأكثر طلباً",
    ctaLabel: "اطلب عبر إنستقرام",
    featureGroups: [
      {
        label: "المحتويات الأساسية:",
        items: [
          "ساعة رجالية فاخرة",
          "محفظة جلدية منقوشة",
          "بلوزة",
          "عطر",
          "اطقم داخلية",
          "قبعة",
        ],
      },
    ],
  },
  {
    id: "small",
    name: "البكج الصغير",
    price: 60,
    currency: "₪",
    description:
      "مجموعة مختارة بعناية من الإكسسوارات الأساسية لتكون معك في كل يوم، ومصممة لتمنحك الأناقة المطلوبة والتناسق في روتينك.",
    image: "/images/package-small-t.png",
    featured: false,
    badge: "الهدية المثالية",
    ctaLabel: "اطلب عبر إنستقرام",
    featureGroups: [
      {
        label: "المحتويات الأساسية:",
        items: [
          "محفظة جلدية أنيقة",
          "بلوزة",
          "عطر",
          "علبة إهداء مخصصة",
        ],
      },
    ],
  },
  {
    id: "sports",
    name: "البكج الرياضي",
    price: 200,
    currency: "₪",
    description:
      "مجموعة رياضية متكاملة تضم 3 أطقم رياضية مميزة لأشهر الأندية، مصممة للمظهر الرياضي الأنيق والراحة القصوى طوال اليوم.",
    image: "/images/package-sports.png",
    featured: false,
    badge: "رياضي",
    ctaLabel: "اطلب عبر إنستقرام",
    featureGroups: [
      {
        label: "المحتويات الأساسية:",
        items: [
          "3 قمصان رياضية ",
          "ساعة عملية",
          "عطر رجالي مميز",
        ],
      },
    ],
  },
];
