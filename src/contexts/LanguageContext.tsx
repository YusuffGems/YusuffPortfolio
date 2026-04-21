import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ta" | "hi";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.hireMe": "Hire Me",
    // Hero
    "hero.greeting": "Hey, I am",
    "hero.role": "Flutter Developer",
    "hero.roleSuffix": "· UI/UX Designer · E-commerce Specialist",
    "hero.intro":
      "I am a UI/UX designer and e-commerce specialist from Chennai with experience in WordPress, digital marketing, product management, and multimedia design.",
    "hero.viewPortfolio": "View Portfolio",
    "hero.contactMe": "Contact Me",
    // About
    "about.title1": "About",
    "about.title2": "Me",
    "about.p1":
      "A passionate UI/UX designer and e-commerce executive with extensive experience in digital operations, WordPress development, product management, and multimedia design. I bring creative vision and strategic thinking to every project, helping brands build strong digital identities.",
    "about.p2":
      "Based in Chennai, I specialize in crafting user-centric digital experiences that drive engagement and conversions. My multidisciplinary background allows me to bridge the gap between design, technology, and business strategy.",
    "about.education": "Education",
    "about.eduLine1": "Diploma in Automobile Engineering",
    "about.eduLine2": "Aalim Muhammed Salegh Polytechnic College · 2012–2015",
    "about.experience": "Experience",
    "about.expLine1": "Assistant Manager – IT at Leather Sector Skill Council",
    "about.expLine2": "6.5+ years in IT, UI/UX, e-commerce operations & digital marketing",
    "about.languages": "Languages",
    "about.langLine1": "English – Read, Write, Speak",
    "about.langLine2": "Tamil – Read, Write, Speak · Hindi – Speak",
    // Skills
    "skills.title1": "My",
    "skills.title2": "Skills",
    "skills.cat.core": "Core Skills",
    "skills.cat.ecom": "E-commerce Skills",
    "skills.cat.tools": "Software & Tools",
    // Services
    "services.title1": "My",
    "services.title2": "Services",
    // Portfolio
    "portfolio.title1": "Featured",
    "portfolio.title2": "Projects",
    "portfolio.subtitle":
      "A selection of my work across multimedia design, branding, and interactive experiences.",
    // Contact
    "contact.title1": "Get in",
    "contact.title2": "Touch",
    "contact.subtitle": "Have a project in mind? Let's talk.",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.location": "Chennai, India",
    "contact.toastTitle": "Opening email client!",
    "contact.toastDesc": "Your default email app will open with the message pre-filled.",
    // Footer
    "footer.rights": "All rights reserved.",
    // Language label
    "lang.label": "Language",
  },
  ta: {
    "nav.home": "முகப்பு",
    "nav.about": "என்னைப் பற்றி",
    "nav.skills": "திறன்கள்",
    "nav.services": "சேவைகள்",
    "nav.portfolio": "போர்ட்ஃபோலியோ",
    "nav.contact": "தொடர்பு",
    "nav.hireMe": "என்னை பணியமர்த்துங்கள்",
    "hero.greeting": "வணக்கம், நான்",
    "hero.role": "Flutter டெவலப்பர்",
    "hero.roleSuffix": "· UI/UX வடிவமைப்பாளர் · இ-காமர்ஸ் நிபுணர்",
    "hero.intro":
      "நான் சென்னையைச் சேர்ந்த UI/UX வடிவமைப்பாளர் மற்றும் இ-காமர்ஸ் நிபுணர். WordPress, டிஜிட்டல் மார்க்கெட்டிங், தயாரிப்பு மேலாண்மை மற்றும் மல்டிமீடியா வடிவமைப்பில் அனுபவம் உண்டு.",
    "hero.viewPortfolio": "போர்ட்ஃபோலியோ பார்க்க",
    "hero.contactMe": "என்னை தொடர்பு கொள்ளவும்",
    "about.title1": "என்னைப்",
    "about.title2": "பற்றி",
    "about.p1":
      "டிஜிட்டல் செயல்பாடுகள், WordPress மேம்பாடு, தயாரிப்பு மேலாண்மை மற்றும் மல்டிமீடியா வடிவமைப்பில் விரிவான அனுபவம் கொண்ட ஆர்வமுள்ள UI/UX வடிவமைப்பாளர் மற்றும் இ-காமர்ஸ் நிர்வாகி. ஒவ்வொரு திட்டத்திலும் ஆக்கப்பூர்வமான பார்வையையும் மூலோபாய சிந்தனையையும் கொண்டு வருகிறேன்.",
    "about.p2":
      "சென்னையை தளமாகக் கொண்டு, ஈடுபாட்டையும் மாற்றங்களையும் தூண்டும் பயனர்-மைய டிஜிட்டல் அனுபவங்களை உருவாக்குவதில் நிபுணத்துவம் பெற்றுள்ளேன். எனது பல துறை பின்னணி வடிவமைப்பு, தொழில்நுட்பம் மற்றும் வணிக மூலோபாயத்தை இணைக்க உதவுகிறது.",
    "about.education": "கல்வி",
    "about.eduLine1": "டிப்ளமோ - ஆட்டோமொபைல் இன்ஜினியரிங்",
    "about.eduLine2": "ஆலிம் முகமது சாலே பாலிடெக்னிக் கல்லூரி · 2012–2015",
    "about.experience": "அனுபவம்",
    "about.expLine1": "உதவி மேலாளர் – IT, லெதர் செக்டார் ஸ்கில் கவுன்சில்",
    "about.expLine2": "IT, UI/UX, இ-காமர்ஸ் மற்றும் டிஜிட்டல் மார்க்கெட்டிங்கில் 6.5+ ஆண்டுகள்",
    "about.languages": "மொழிகள்",
    "about.langLine1": "ஆங்கிலம் – படிக்க, எழுத, பேச",
    "about.langLine2": "தமிழ் – படிக்க, எழுத, பேச · இந்தி – பேச",
    "skills.title1": "எனது",
    "skills.title2": "திறன்கள்",
    "skills.cat.core": "முக்கிய திறன்கள்",
    "skills.cat.ecom": "இ-காமர்ஸ் திறன்கள்",
    "skills.cat.tools": "மென்பொருள் & கருவிகள்",
    "services.title1": "எனது",
    "services.title2": "சேவைகள்",
    "portfolio.title1": "சிறப்பு",
    "portfolio.title2": "திட்டங்கள்",
    "portfolio.subtitle":
      "மல்டிமீடியா வடிவமைப்பு, பிராண்டிங் மற்றும் ஊடாடும் அனுபவங்களில் எனது பணியின் தேர்வு.",
    "contact.title1": "தொடர்பில்",
    "contact.title2": "இருங்கள்",
    "contact.subtitle": "ஒரு திட்டம் மனதில் உள்ளதா? பேசுவோம்.",
    "contact.name": "உங்கள் பெயர்",
    "contact.email": "உங்கள் மின்னஞ்சல்",
    "contact.message": "உங்கள் செய்தி",
    "contact.send": "செய்தி அனுப்பு",
    "contact.location": "சென்னை, இந்தியா",
    "contact.toastTitle": "மின்னஞ்சல் கிளையன்ட் திறக்கப்படுகிறது!",
    "contact.toastDesc": "உங்கள் இயல்புநிலை மின்னஞ்சல் ஆப்ஸ் முன்-நிரப்பப்பட்ட செய்தியுடன் திறக்கும்.",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "lang.label": "மொழி",
  },
  hi: {
    "nav.home": "होम",
    "nav.about": "मेरे बारे में",
    "nav.skills": "कौशल",
    "nav.services": "सेवाएं",
    "nav.portfolio": "पोर्टफोलियो",
    "nav.contact": "संपर्क",
    "nav.hireMe": "मुझे हायर करें",
    "hero.greeting": "नमस्ते, मैं हूँ",
    "hero.role": "Flutter डेवलपर",
    "hero.roleSuffix": "· UI/UX डिज़ाइनर · ई-कॉमर्स विशेषज्ञ",
    "hero.intro":
      "मैं चेन्नई से एक UI/UX डिज़ाइनर और ई-कॉमर्स विशेषज्ञ हूँ, जिसके पास WordPress, डिजिटल मार्केटिंग, प्रोडक्ट मैनेजमेंट और मल्टीमीडिया डिज़ाइन का अनुभव है।",
    "hero.viewPortfolio": "पोर्टफोलियो देखें",
    "hero.contactMe": "मुझसे संपर्क करें",
    "about.title1": "मेरे",
    "about.title2": "बारे में",
    "about.p1":
      "एक भावुक UI/UX डिज़ाइनर और ई-कॉमर्स कार्यकारी जिसके पास डिजिटल ऑपरेशंस, WordPress विकास, प्रोडक्ट मैनेजमेंट और मल्टीमीडिया डिज़ाइन का व्यापक अनुभव है। मैं हर प्रोजेक्ट में रचनात्मक दृष्टि और रणनीतिक सोच लाता हूँ।",
    "about.p2":
      "चेन्नई में स्थित, मैं उपयोगकर्ता-केंद्रित डिजिटल अनुभवों को तैयार करने में विशेषज्ञता रखता हूँ जो जुड़ाव और रूपांतरण को बढ़ाते हैं। मेरी बहुविषयक पृष्ठभूमि डिज़ाइन, तकनीक और व्यावसायिक रणनीति के बीच की खाई को पाटने में मदद करती है।",
    "about.education": "शिक्षा",
    "about.eduLine1": "ऑटोमोबाइल इंजीनियरिंग में डिप्लोमा",
    "about.eduLine2": "आलिम मुहम्मद सालेग पॉलिटेक्निक कॉलेज · 2012–2015",
    "about.experience": "अनुभव",
    "about.expLine1": "सहायक प्रबंधक – IT, लेदर सेक्टर स्किल काउंसिल",
    "about.expLine2": "IT, UI/UX, ई-कॉमर्स और डिजिटल मार्केटिंग में 6.5+ वर्ष",
    "about.languages": "भाषाएँ",
    "about.langLine1": "अंग्रेजी – पढ़ें, लिखें, बोलें",
    "about.langLine2": "तमिल – पढ़ें, लिखें, बोलें · हिंदी – बोलें",
    "skills.title1": "मेरे",
    "skills.title2": "कौशल",
    "skills.cat.core": "मुख्य कौशल",
    "skills.cat.ecom": "ई-कॉमर्स कौशल",
    "skills.cat.tools": "सॉफ़्टवेयर और टूल्स",
    "services.title1": "मेरी",
    "services.title2": "सेवाएं",
    "portfolio.title1": "विशेष",
    "portfolio.title2": "प्रोजेक्ट्स",
    "portfolio.subtitle":
      "मल्टीमीडिया डिज़ाइन, ब्रांडिंग और इंटरैक्टिव अनुभवों में मेरे काम का चयन।",
    "contact.title1": "संपर्क",
    "contact.title2": "में रहें",
    "contact.subtitle": "क्या आपके मन में कोई प्रोजेक्ट है? बात करते हैं।",
    "contact.name": "आपका नाम",
    "contact.email": "आपका ईमेल",
    "contact.message": "आपका संदेश",
    "contact.send": "संदेश भेजें",
    "contact.location": "चेन्नई, भारत",
    "contact.toastTitle": "ईमेल क्लाइंट खुल रहा है!",
    "contact.toastDesc": "आपका डिफ़ॉल्ट ईमेल ऐप पहले से भरे संदेश के साथ खुलेगा।",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "lang.label": "भाषा",
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (stored as Lang) || "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
