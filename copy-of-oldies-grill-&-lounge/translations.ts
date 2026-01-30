
export type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ar';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

const shared = {
  est: { en: 'Est. 2023', hi: 'स्थापना 2023', es: 'Est. 2023', fr: 'Est. 2023', de: 'Seit 2023', zh: '始于 2023', ja: '2023年創業', ar: 'تأسس ٢٠٢٣' },
};

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: { home: 'Home', about: 'About', menu: 'Menu', gallery: 'Gallery', contact: 'Contact', call: 'Order Now' },
    hero: { est: shared.est.en, title: 'OLDIES GRILL', subtitle: 'The Heart of Classic American Flavor', viewMenu: 'Explore Menu', orderNow: 'Call to Order' },
    about: { title: 'Modern Small-Town', titleHighlight: 'Classic', desc1: 'Welcome to Oldies Grill. We bring the warmth of a classic American diner to Bowdle.', desc2: 'Hearty comfort food that feels like home.', rating: '5.0 ★ Rating' },
    menu: { title: 'Signature Creations', popular: 'Best Seller', details: 'View Details', tag: 'Freshly Prepared' },
    footer: { contact: 'Contact Us', hours: 'Opening Hours', lunch: 'Lunch', dinner: 'Dinner', lunchTime: 'Until 2:00 PM', dinnerTime: '4:00 PM - Late', daily: 'Open Daily', rights: 'All Rights Reserved' }
  },
  hi: {
    nav: { home: 'होम', about: 'बारे में', menu: 'मेन्यू', gallery: 'गैलरी', contact: 'संपर्क', call: 'ऑर्डर करें' },
    hero: { est: shared.est.hi, title: 'ओल्डीज़ ग्रिल', subtitle: 'क्लासिक अमेरिकन स्वाद का केंद्र', viewMenu: 'मेन्यू देखें', orderNow: 'कॉल करें' },
    about: { title: 'आधुनिक छोटे शहर का', titleHighlight: 'क्लासिक', desc1: 'ओल्डीज़ ग्रिल में आपका स्वागत है। हम क्लासिक अमेरिकन डाइनर का अनुभव देते हैं।', desc2: 'घर जैसा ताज़ा और स्वादिष्ट खाना।', rating: '5.0 ★ रेटिंग' },
    menu: { title: 'सिग्नेचर क्रिएशन्स', popular: 'सबसे लोकप्रिय', details: 'विवरण देखें', tag: 'ताज़ा तैयार' },
    footer: { contact: 'संपर्क करें', hours: 'खुलने का समय', lunch: 'दोपहर का भोजन', dinner: 'रात का खाना', lunchTime: 'दोपहर 2:00 बजे तक', dinnerTime: 'शाम 4:00 बजे से', daily: 'रोजाना खुला है', rights: 'सर्वाधिकार सुरक्षित' }
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', menu: 'Menú', gallery: 'Galería', contact: 'Contacto', call: 'Pedir' },
    hero: { est: shared.est.es, title: 'OLDIES GRILL', subtitle: 'El corazón del sabor americano', viewMenu: 'Ver Menú', orderNow: 'Llamar' },
    about: { title: 'Clásico de', titleHighlight: 'Ciudad', desc1: 'Bienvenidos a Oldies Grill. Traemos el calor de la cena americana.', desc2: 'Comida casera reconfortante.', rating: '5.0 ★ Calificación' },
    menu: { title: 'Creaciones', popular: 'Más Vendido', details: 'Detalles', tag: 'Preparado al momento' },
    footer: { contact: 'Contacto', hours: 'Horario', lunch: 'Almuerzo', dinner: 'Cena', lunchTime: 'Hasta 2:00 PM', dinnerTime: '4:00 PM - Tarde', daily: 'Abierto diario', rights: 'Todos los derechos reservados' }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', menu: 'Menu', gallery: 'Galerie', contact: 'Contact', call: 'Commander' },
    hero: { est: shared.est.fr, title: 'OLDIES GRILL', subtitle: 'Le cœur de la saveur américaine', viewMenu: 'Le Menu', orderNow: 'Appeler' },
    about: { title: 'Classique de', titleHighlight: 'Ville', desc1: 'Bienvenue au Oldies Grill. La chaleur du diner américain.', desc2: 'Cuisine réconfortante comme à la maison.', rating: 'Note 5.0 ★' },
    menu: { title: 'Créations', popular: 'Best-seller', details: 'Détails', tag: 'Fraîchement préparé' },
    footer: { contact: 'Contact', hours: 'Horaires', lunch: 'Déjeuner', dinner: 'Dîner', lunchTime: 'Jusqu\'à 14h00', dinnerTime: '16h00 - Tard', daily: 'Ouvert tous les jours', rights: 'Tous droits réservés' }
  },
  de: {
    nav: { home: 'Heim', about: 'Über uns', menu: 'Menü', gallery: 'Galerie', contact: 'Kontakt', call: 'Bestellen' },
    hero: { est: shared.est.de, title: 'OLDIES GRILL', subtitle: 'Das Herz des Geschmacks', viewMenu: 'Menü ansehen', orderNow: 'Anrufen' },
    about: { title: 'Moderner', titleHighlight: 'Klassiker', desc1: 'Willkommen im Oldies Grill. Klassisches amerikanisches Flair.', desc2: 'Herzhaftes Essen wie bei Muttern.', rating: 'Bewertung 5.0 ★' },
    menu: { title: 'Kreationen', popular: 'Bestseller', details: 'Details', tag: 'Frisch zubereitet' },
    footer: { contact: 'Kontakt', hours: 'Öffnungszeiten', lunch: 'Mittagessen', dinner: 'Abendessen', lunchTime: 'Bis 14:00 Uhr', dinnerTime: '16:00 Uhr - Spät', daily: 'Täglich geöffnet', rights: 'Alle Rechte vorbehalten' }
  },
  zh: {
    nav: { home: '首页', about: '关于', menu: '菜单', gallery: '画廊', contact: '联系', call: '现在下单' },
    hero: { est: shared.est.zh, title: 'OLDIES GRILL', subtitle: '经典美式风味的核心', viewMenu: '探索菜单', orderNow: '电话预订' },
    about: { title: '现代小镇', titleHighlight: '经典', desc1: '欢迎来到 Oldies Grill。我们为您带来经典的美式餐厅体验。', desc2: '温馨如家的美味食物。', rating: '5.0 ★ 评分' },
    menu: { title: '招牌美食', popular: '最畅销', details: '查看详情', tag: '新鲜制作' },
    footer: { contact: '联系我们', hours: '营业时间', lunch: '午餐', dinner: '晚餐', lunchTime: '至下午 2:00', dinnerTime: '下午 4:00 至今', daily: '每日营业', rights: '版权所有' }
  },
  ja: {
    nav: { home: 'ホーム', about: 'について', menu: 'メニュー', gallery: 'ギャラリー', contact: '連絡先', call: '注文する' },
    hero: { est: shared.est.ja, title: 'OLDIES GRILL', subtitle: 'クラシックなアメリカンの味', viewMenu: 'メニューを見る', orderNow: '電話注文' },
    about: { title: '小規模な街の', titleHighlight: 'クラシック', desc1: 'Oldies Grillへようこそ。アメリカンの温かさをお届けします。', desc2: '家庭のような温かい料理。', rating: '5.0 ★ 評価' },
    menu: { title: 'シグネチャー', popular: 'ベストセラー', details: '詳細を見る', tag: '作りたて' },
    footer: { contact: 'お問い合わせ', hours: '営業時間', lunch: 'ランチ', dinner: 'ディナー', lunchTime: '午後2:00まで', dinnerTime: '午後4:00から', daily: '年中無休', rights: '無断複写・転載を禁じます' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'عنا', menu: 'القائمة', gallery: 'المعرض', contact: 'اتصل', call: 'اطلب الآن' },
    hero: { est: shared.est.ar, title: 'أولديز جريل', subtitle: 'قلب النكهة الأمريكية الكلاسيكية', viewMenu: 'اكتشف القائمة', orderNow: 'اتصل للطلب' },
    about: { title: 'كلاسيكي', titleHighlight: 'مودرن', desc1: 'أولديز جريل يرحب بكم. نكهة أمريكية أصيلة.', desc2: 'طعام دافئ مثل طعام المنزل.', rating: 'تقييم 5.0 ★' },
    menu: { title: 'إبداعاتنا', popular: 'الأكثر مبيعاً', details: 'التفاصيل', tag: 'محضر طازجاً' },
    footer: { contact: 'اتصل بنا', hours: 'ساعات العمل', lunch: 'الغداء', dinner: 'العشاء', lunchTime: 'حتى ٢:٠٠ م', dinnerTime: '٤:٠٠ م - متأخر', daily: 'مفتوح يومياً', rights: 'جميع الحقوق محفوظة' }
  }
};
