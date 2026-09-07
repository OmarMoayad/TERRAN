// Central Instagram URL
export const INSTAGRAM_URL = "https://instagram.com/terran.accessories";

// Navigation links
export const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "البكجات", href: "#packages" },
  { label: "عن TERRAN", href: "#why-terran" },
  { label: "تواصل معنا", href: INSTAGRAM_URL, external: true },
];

// Package data
export const PACKAGES = [
  {
    id: "small",
    name: "البكج الصغير",
    price: 60,
    currency: "₪",
    description:
      "مجموعة مختارة من الإكسسوارات الرجالية الأساسية لإطلالة أنيقة كل يوم.",
    image: "/images/package-small.png",
    featured: false,
    features: [
      "إكسسوارات أساسية",
      "تغليف فاخر",
      "توصيل سريع",
    ],
  },
  {
    id: "large",
    name: "البكج الكبير",
    price: 100,
    currency: "₪",
    description:
      "مجموعة متكاملة من الإكسسوارات الرجالية لإطلالة أكثر تميزًا.",
    image: "/images/package-large.png",
    featured: true,
    badge: "الأكثر طلبًا",
    features: [
      "مجموعة متكاملة",
      "تغليف فاخر مميز",
      "توصيل سريع",
    ],
  },
];
