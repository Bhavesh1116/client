
import { Utensils, Beer, PersonStanding, Baby } from 'lucide-react';

export interface MenuItem {
  name: Record<string, string>;
  price: string;
  description: Record<string, string>;
  popular?: boolean;
  image: string;
}

export interface MenuCategory {
  title: Record<string, string>;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    title: { 
      en: "The Burger Loft", 
      hi: "बर्गर लॉफ्ट", 
      es: "El Loft de la Hamburguesa",
      fr: "Le Loft du Burger",
      de: "Die Burger Loft",
      zh: "汉堡阁",
      ja: "バーガーロフト",
      ar: "لوفت البرجر"
    },
    items: [
      { 
        name: { en: "Signature Truffle Burger", hi: "सिग्नेचर ट्रफल बर्गर", es: "Hamburguesa de Trufa" }, 
        price: "$18.50", 
        description: { 
          en: "Aged Wagyu beef, black truffle aioli, caramelized onions, and swiss cheese on a toasted brioche bun.",
          hi: "एज्ड वाग्यू बीफ, ब्लैक ट्रफल एओली, कैरामेलिज्ड प्याज और स्विस चीज़।"
        }, 
        popular: true,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop"
      },
      { 
        name: { en: "Spicy Inferno Burger", hi: "स्पाइसी इन्फर्नो बर्गर", es: "Hamburguesa Inferno" }, 
        price: "$16.00", 
        description: { 
          en: "Jalapeño-infused patty, pepper jack cheese, and our secret habanero kick-sauce.",
          hi: "जलपीनो पैटी, पेपर जैक चीज़ और हमारी सीक्रेट हैबनेरो सॉस।"
        },
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
      },
    ]
  },
  {
    title: { 
      en: "Gourmet Platters", 
      hi: "पेटू थाली", 
      es: "Platos Gourmet",
      fr: "Plats Gourmets",
      de: "Gourmet-Platten",
      zh: "美食拼盘",
      ja: "グルメプラッター",
      ar: "أطباق فاخرة"
    },
    items: [
      { 
        name: { en: "Slow-Roasted Ribeye", hi: "स्लो-रोस्टेड रिबे", es: "Ribeye Asado" }, 
        price: "$32.00", 
        description: { 
          en: "12oz hand-cut ribeye, herb butter basted, served with garlic parmesan mash and seasonal greens.",
          hi: "12oz हाथ से कटा रिबे, हर्ब बटर, लहसुन परमेसन मैश के साथ परोसा गया।"
        }, 
        popular: true,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop"
      },
      { 
        name: { en: "Atlantic Salmon", hi: "अटलांटिक सैल्मन", es: "Salmón del Atlántico" }, 
        price: "$28.50", 
        description: { 
          en: "Pan-seared wild salmon, lemon zest glaze, and roasted asparagus.",
          hi: "पैन-सीयर वाइल्ड सैल्मन, नींबू जेस्ट ग्लेज़ और भुना हुआ शतावरी।"
        },
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop"
      },
    ]
  },
];

export const FEATURES = [
  { icon: PersonStanding, text: { en: "Inclusive Dining", hi: "समावेशी डाइनिंग" } },
  { icon: Utensils, text: { en: "Chef Specials", hi: "शेफ स्पेशल" } },
  { icon: Beer, text: { en: "Craft Cocktails", hi: "क्राफ्ट कॉकटेल" } },
  { icon: Baby, text: { en: "Family Friendly", hi: "परिवार के अनुकूल" } },
];
