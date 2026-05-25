import {
  Armchair,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Globe2,
  Hammer,
  Headphones,
  Lamp,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  PanelTop,
  Ruler,
  Send,
  ShieldCheck,
  Ship,
  Store,
  Trees,
  Truck,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const whatsappNumber = '905551234567';

const productImages = {
  mdf: '/assets/mdf.png',
  particleboard: '/assets/particleboard.png',
  melamine: '/assets/melamine.png',
  flooring: '/assets/flooring.png',
  osb: '/assets/osb.png',
};

const languages = [
  ['en', 'EN'],
  ['fr', 'FR'],
  ['tr', 'TR'],
];

const copy = {
  en: {
    title: 'Sahel Sourcing | Premium Wood Panels from Türkiye',
    logoTagline: 'Wood Panels. Global Quality. Local Trust.',
    nav: ['Home', 'Products', 'Why Us', 'How It Works', 'Markets', 'About', 'Contact'],
    quote: 'Get a Quote',
    heroTitle: ['Connecting West Africa', 'to Premium Wood Panels', 'from', 'Türkiye'],
    heroText: 'Your reliable sourcing partner for MDF, Particleboard, Laminate Flooring and more.',
    whatsapp: 'Chat on WhatsApp',
    requestQuote: 'Request a Quote',
    trust: [
      ['Trusted Manufacturers', 'We work with top Turkish manufacturers like Kronospan.'],
      ['Export to West Africa', 'Fast and reliable shipping to Mali and neighboring countries.'],
      ['Quality Guaranteed', 'International quality standards you can rely on.'],
    ],
    audienceTitle: 'Supplying quality materials for',
    audience: ['Furniture Manufacturers', 'Interior Designers', 'Construction Companies', 'Distributors & Retailers', 'Joinery & Carpentry'],
    productsEyebrow: 'Our Products',
    productsTitle: 'High Quality Wood Panel Solutions',
    viewDetails: 'View Details',
    products: [
      ['mdf', 'MDF Boards', 'Smooth surface, easy to cut and ideal for furniture, doors and interior applications.'],
      ['particleboard', 'Particleboard', 'Cost-effective and versatile solution for furniture and interior projects.'],
      ['melamine', 'Melamine Boards', 'Decorative surface with various colors and textures for modern designs.'],
      ['flooring', 'Laminate Flooring', 'Durable, stylish and easy to install flooring solutions for every space.'],
      ['osb', 'OSB Boards', 'Strong and stable boards for construction, roofing and structural use.'],
    ],
    aboutEyebrow: 'About Us',
    aboutTitle: 'Your Bridge Between Türkiye and West Africa',
    aboutText: 'We are a Türkiye-based sourcing and export partner dedicated to connecting high-quality wood panel products with businesses in West Africa. With strong relationships with leading manufacturers, we help you source the right products with the best terms, reliable logistics and full documentation support.',
    aboutStats: [
      ['Trusted Partners', 'Top Turkish Manufacturers'],
      ['Export Experience', 'Shipping to multiple West African countries'],
      ['Quality Products', 'International Quality Standards'],
      ['Support You Can Trust', 'From inquiry to after-sales support'],
    ],
    howEyebrow: 'How It Works',
    steps: [
      ['Send Inquiry', 'Tell us what you need and your target quantity.'],
      ['Get Quotation', 'We source the best options and send you a quote.'],
      ['Confirm & Pay', 'You confirm the order and make payment.'],
      ['We Handle Shipping', 'We take care of production, export and shipping.'],
      ['Receive & Grow', 'Receive your products and grow your business.'],
    ],
    markets: ['Mali', 'Senegal', "Côte d'Ivoire", 'Burkina Faso', 'Guinea', 'Ghana'],
    ctaTitle: 'Ready to Source Premium Wood Panels?',
    ctaText: "Let's build strong business together.",
    footerFocus: 'Türkiye-based. West Africa focused.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    footerNote: 'We export to all West African countries.',
    rights: 'All rights reserved.',
  },
  fr: {
    title: 'Sahel Sourcing | Panneaux de bois premium de Türkiye',
    logoTagline: 'Panneaux bois. Qualité globale. Confiance locale.',
    nav: ['Accueil', 'Produits', 'Pourquoi nous', 'Processus', 'Marchés', 'À propos', 'Contact'],
    quote: 'Demander un devis',
    heroTitle: ["Connecter l'Afrique de l'Ouest", 'aux panneaux de bois premium', 'depuis', 'Türkiye'],
    heroText: 'Votre partenaire fiable pour le sourcing de MDF, panneaux de particules, sols stratifiés et plus encore.',
    whatsapp: 'Discuter sur WhatsApp',
    requestQuote: 'Demander un devis',
    trust: [
      ['Fabricants fiables', 'Nous travaillons avec de grands fabricants turcs comme Kronospan.'],
      ["Export vers l'Afrique de l'Ouest", 'Expédition rapide et fiable vers le Mali et les pays voisins.'],
      ['Qualité garantie', 'Des standards internationaux sur lesquels vous pouvez compter.'],
    ],
    audienceTitle: 'Fourniture de matériaux de qualité pour',
    audience: ['Fabricants de meubles', 'Designers d’intérieur', 'Entreprises de construction', 'Distributeurs & détaillants', 'Menuiserie & agencement'],
    productsEyebrow: 'Nos Produits',
    productsTitle: 'Solutions de panneaux de bois haute qualité',
    viewDetails: 'Voir détails',
    products: [
      ['mdf', 'Panneaux MDF', 'Surface lisse, facile à couper, idéale pour meubles, portes et aménagement intérieur.'],
      ['particleboard', 'Panneaux de particules', 'Solution économique et polyvalente pour mobilier et projets intérieurs.'],
      ['melamine', 'Panneaux mélaminés', 'Surface décorative avec plusieurs couleurs et textures pour designs modernes.'],
      ['flooring', 'Sol stratifié', 'Revêtements durables, élégants et faciles à installer pour chaque espace.'],
      ['osb', 'Panneaux OSB', 'Panneaux solides et stables pour construction, toiture et usages structurels.'],
    ],
    aboutEyebrow: 'À propos',
    aboutTitle: "Votre pont entre Türkiye et l'Afrique de l'Ouest",
    aboutText: "Basés en Türkiye, nous sommes un partenaire de sourcing et d'export dédié à connecter des panneaux de bois de qualité aux entreprises d'Afrique de l'Ouest. Grâce à des relations solides avec des fabricants reconnus, nous vous aidons à sourcer les bons produits avec de bonnes conditions, une logistique fiable et un support documentaire complet.",
    aboutStats: [
      ['Partenaires fiables', 'Fabricants turcs reconnus'],
      ['Expérience export', "Expédition vers plusieurs pays d'Afrique de l'Ouest"],
      ['Produits de qualité', 'Standards internationaux'],
      ['Support fiable', "De la demande jusqu'à l'après-vente"],
    ],
    howEyebrow: 'Processus',
    steps: [
      ['Envoyer la demande', 'Indiquez vos besoins et quantités cibles.'],
      ['Recevoir le devis', 'Nous trouvons les meilleures options et envoyons une offre.'],
      ['Confirmer & payer', 'Vous confirmez la commande et effectuez le paiement.'],
      ['Nous gérons le transport', "Nous suivons la production, l'export et l'expédition."],
      ['Recevoir & grandir', 'Recevez vos produits et développez votre activité.'],
    ],
    markets: ['Mali', 'Sénégal', "Côte d'Ivoire", 'Burkina Faso', 'Guinée', 'Ghana'],
    ctaTitle: 'Prêt à sourcer des panneaux de bois premium ?',
    ctaText: 'Construisons ensemble une activité solide.',
    footerFocus: "Basé en Türkiye. Orienté Afrique de l'Ouest.",
    quickLinks: 'Liens rapides',
    contactUs: 'Contact',
    footerNote: "Nous exportons vers tous les pays d'Afrique de l'Ouest.",
    rights: 'Tous droits réservés.',
  },
  tr: {
    title: 'Sahel Sourcing | Türkiye’den Premium Ahşap Paneller',
    logoTagline: 'Ahşap Paneller. Global Kalite. Yerel Güven.',
    nav: ['Ana Sayfa', 'Ürünler', 'Neden Biz', 'Nasıl Çalışır', 'Pazarlar', 'Hakkımızda', 'İletişim'],
    quote: 'Teklif Al',
    heroTitle: ['Batı Afrika’yı', 'Premium Ahşap Panellerle', 'buluşturuyoruz:', 'Türkiye'],
    heroText: 'MDF, yonga levha, laminat parke ve daha fazlası için güvenilir tedarik ortağınız.',
    whatsapp: 'WhatsApp ile yazın',
    requestQuote: 'Teklif İste',
    trust: [
      ['Güvenilir Üreticiler', 'Kronospan gibi önde gelen Türk üreticilerle çalışıyoruz.'],
      ['Batı Afrika’ya İhracat', 'Mali ve komşu ülkelere hızlı, güvenilir sevkiyat.'],
      ['Kalite Garantisi', 'Güvenebileceğiniz uluslararası kalite standartları.'],
    ],
    audienceTitle: 'Kaliteli malzemeler tedarik ettiğimiz sektörler',
    audience: ['Mobilya Üreticileri', 'İç Mimarlar', 'İnşaat Firmaları', 'Distribütörler & Perakendeciler', 'Doğrama & Marangozluk'],
    productsEyebrow: 'Ürünlerimiz',
    productsTitle: 'Yüksek Kaliteli Ahşap Panel Çözümleri',
    viewDetails: 'Detayları Gör',
    products: [
      ['mdf', 'MDF Levhalar', 'Pürüzsüz yüzeyli, kolay kesilen; mobilya, kapı ve iç mekan için ideal.'],
      ['particleboard', 'Yonga Levha', 'Mobilya ve iç mekan projeleri için ekonomik ve çok yönlü çözüm.'],
      ['melamine', 'Melamin Kaplı Levhalar', 'Modern tasarımlar için farklı renk ve dokularda dekoratif yüzey.'],
      ['flooring', 'Laminat Parke', 'Her alan için dayanıklı, şık ve kolay uygulanabilir zemin çözümleri.'],
      ['osb', 'OSB Levhalar', 'İnşaat, çatı ve yapısal kullanım için güçlü ve stabil levhalar.'],
    ],
    aboutEyebrow: 'Hakkımızda',
    aboutTitle: 'Türkiye ile Batı Afrika Arasında Köprünüz',
    aboutText: 'Türkiye merkezli bir tedarik ve ihracat ortağı olarak, yüksek kaliteli ahşap panel ürünlerini Batı Afrika’daki işletmelerle buluşturuyoruz. Güçlü üretici ilişkilerimiz sayesinde doğru ürünleri iyi şartlarla, güvenilir lojistik ve eksiksiz dokümantasyon desteğiyle tedarik etmenize yardımcı oluyoruz.',
    aboutStats: [
      ['Güvenilir Ortaklar', 'Önde gelen Türk üreticiler'],
      ['İhracat Deneyimi', 'Birçok Batı Afrika ülkesine sevkiyat'],
      ['Kaliteli Ürünler', 'Uluslararası kalite standartları'],
      ['Güvenilir Destek', 'Talep aşamasından satış sonrasına kadar'],
    ],
    howEyebrow: 'Nasıl Çalışır',
    steps: [
      ['Talep Gönderin', 'İhtiyacınızı ve hedef miktarı paylaşın.'],
      ['Teklif Alın', 'En iyi seçenekleri bulup size teklif göndeririz.'],
      ['Onay & Ödeme', 'Siparişi onaylar ve ödemeyi yaparsınız.'],
      ['Sevkiyatı Yönetiriz', 'Üretim, ihracat ve nakliyeyi takip ederiz.'],
      ['Teslim Alın & Büyüyün', 'Ürünleri teslim alın ve işinizi büyütün.'],
    ],
    markets: ['Mali', 'Senegal', 'Fildişi Sahili', 'Burkina Faso', 'Gine', 'Gana'],
    ctaTitle: 'Premium Ahşap Panel Tedarikine Hazır mısınız?',
    ctaText: 'Birlikte güçlü bir ticaret kuralım.',
    footerFocus: 'Türkiye merkezli. Batı Afrika odaklı.',
    quickLinks: 'Hızlı Linkler',
    contactUs: 'İletişim',
    footerNote: 'Tüm Batı Afrika ülkelerine ihracat yapıyoruz.',
    rights: 'Tüm hakları saklıdır.',
  },
};

const navHrefs = ['#top', '#products', '#why-us', '#how-it-works', '#markets', '#about', '#contact'];
const audienceIcons = [Armchair, Lamp, Building2, Store, Ruler];
const trustIcons = [ShieldCheck, Globe2, BadgeCheck];
const aboutIcons = [CheckCircle2, Ship, BadgeCheck, Headphones];
const stepIcons = [Send, MessageCircle, ClipboardCheck, Factory, PackageCheck];

function getWhatsAppUrl(lang) {
  const messages = {
    en: 'Hello Sahel Sourcing, I would like a quotation for wood panels from Türkiye.',
    fr: 'Bonjour Sahel Sourcing, je souhaite recevoir un devis pour des panneaux de bois depuis Türkiye.',
    tr: 'Merhaba Sahel Sourcing, Türkiye’den ahşap panel ürünleri için teklif almak istiyorum.',
  };

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[lang])}`;
}

function Logo({ t, light = false }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Sahel Sourcing home">
      <span className="grid h-12 w-12 place-items-center rounded-md bg-timber text-white shadow-sm">
        <Trees className="h-7 w-7" />
      </span>
      <span>
        <span className={`block font-display text-2xl font-extrabold uppercase leading-none tracking-tight ${light ? 'text-white' : 'text-forest'}`}>
          Sahel Sourcing
        </span>
        <span className={`mt-1 block text-[11px] font-bold ${light ? 'text-white/70' : 'text-charcoal/70'}`}>
          {t.logoTagline}
        </span>
      </span>
    </a>
  );
}

function Navbar({ t, lang, setLang, whatsappUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-charcoal/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo t={t} />
        <div className="hidden items-center gap-7 lg:flex">
          {t.nav.map((label, index) => (
            <a key={label} href={navHrefs[index]} className="text-sm font-extrabold text-charcoal transition hover:text-timber">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-charcoal/10 bg-linen p-1">
            {languages.map(([code, label]) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1.5 text-xs font-extrabold transition ${lang === code ? 'bg-forest text-white' : 'text-charcoal/60 hover:text-forest'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <a href={whatsappUrl} className="rounded-md bg-forest px-6 py-3 text-sm font-extrabold text-white transition hover:bg-moss">
            {t.quote}
          </a>
          <a href={whatsappUrl} className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white" aria-label={t.whatsapp}>
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-charcoal/10 text-charcoal lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Open navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-charcoal/10 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {t.nav.map((label, index) => (
              <a
                key={label}
                href={navHrefs[index]}
                onClick={() => setIsOpen(false)}
                className="rounded px-2 py-3 text-sm font-bold text-charcoal/75 hover:bg-linen hover:text-forest"
              >
                {label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              {languages.map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`flex-1 rounded border px-3 py-2 text-xs font-extrabold ${lang === code ? 'border-forest bg-forest text-white' : 'border-charcoal/10 text-charcoal/70'}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a href={whatsappUrl} className="mt-2 rounded-md bg-forest px-5 py-3 text-center text-sm font-bold text-white">
              {t.quote}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ t, whatsappUrl }) {
  return (
    <section id="top" className="relative min-h-[570px] overflow-hidden bg-forest pt-20 text-white">
      <img src="/assets/hero-panels.png" alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-95" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,54,37,0.96)_0%,rgba(9,54,37,0.82)_38%,rgba(9,54,37,0.2)_74%,rgba(9,54,37,0.05)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            {t.heroTitle[0]}
            <br />
            {t.heroTitle[1]}
            <br />
            {t.heroTitle[2]} <span className="text-timber">{t.heroTitle[3]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-white/90">{t.heroText}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappUrl} className="inline-flex items-center justify-center gap-3 rounded-md bg-timber px-7 py-4 font-extrabold text-white transition hover:bg-bark">
              <MessageCircle className="h-5 w-5" />
              {t.whatsapp}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-timber px-7 py-4 font-extrabold text-white transition hover:bg-white/10">
              {t.requestQuote}
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.trust.map(([title, text], index) => {
            const Icon = trustIcons[index];
            return (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 h-8 w-8 shrink-0 text-timber" />
                <div>
                  <h3 className="text-sm font-extrabold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/78">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Audience({ t }) {
  return (
    <section className="border-b border-charcoal/10 bg-linen px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-forest">{t.audienceTitle}</p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.audience.map((item, index) => {
            const Icon = audienceIcons[index];
            return (
              <div key={item} className="flex items-center justify-center gap-3 text-sm font-extrabold text-charcoal">
                <Icon className="h-6 w-6 text-timber" />
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Products({ t }) {
  return (
    <section id="products" className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-forest">{t.productsEyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-charcoal">{t.productsTitle}</h2>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-5">
          {t.products.map(([key, name, description]) => (
            <article key={key} className="overflow-hidden rounded-md border border-charcoal/10 bg-white shadow-[0_10px_34px_rgba(32,35,33,0.08)] transition hover:-translate-y-1 hover:shadow-soft">
              <img src={productImages[key]} alt={name} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-lg font-extrabold text-charcoal">{name}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-charcoal/72">{description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-forest">
                  {t.viewDetails} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="bg-linen px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <img src="/assets/factory.png" alt="Wood panel manufacturing facility" className="h-full min-h-[320px] w-full rounded-lg object-cover shadow-soft" />
        <div id="why-us">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-forest">{t.aboutEyebrow}</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-charcoal">{t.aboutTitle}</h2>
          <p className="mt-5 text-base leading-7 text-charcoal/75">{t.aboutText}</p>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.aboutStats.map(([title, text], index) => {
              const Icon = aboutIcons[index];
              return (
                <div key={title} className="text-center">
                  <Icon className="mx-auto h-8 w-8 text-timber" />
                  <h3 className="mt-3 text-sm font-extrabold text-charcoal">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-charcoal/65">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ t }) {
  return (
    <section id="how-it-works" className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-forest">{t.howEyebrow}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-5">
          {t.steps.map(([title, text], index) => {
            const Icon = stepIcons[index];
            return (
              <div key={title} className="relative">
                {index < t.steps.length - 1 && <ArrowRight className="absolute right-[-22px] top-10 hidden h-6 w-6 text-forest/60 md:block" />}
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-linen">
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-forest text-xs font-extrabold text-white">{index + 1}</span>
                  <Icon className="h-9 w-9 text-charcoal" />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-charcoal">{title}</h3>
                <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-charcoal/68">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ t, whatsappUrl }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest px-5 py-9 text-white lg:px-8">
      <div className="absolute -right-8 bottom-[-80px] hidden text-[220px] font-extrabold leading-none text-white/10 lg:block">AF</div>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <span className="grid h-20 w-20 place-items-center rounded-full border-4 border-white/60">
            <MessageCircle className="h-11 w-11" />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold">{t.ctaTitle}</h2>
            <p className="mt-1 text-white/80">{t.ctaText}</p>
          </div>
        </div>
        <a href={whatsappUrl} className="inline-flex items-center justify-center gap-3 rounded-md bg-timber px-8 py-4 font-extrabold text-white transition hover:bg-bark">
          <MessageCircle className="h-5 w-5" />
          {t.whatsapp}
        </a>
      </div>
    </section>
  );
}

function MarketsFooter({ t }) {
  return (
    <footer id="markets" className="bg-charcoal px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo t={t} light />
          <p className="mt-6 max-w-xs text-sm text-white/65">{t.footerFocus}</p>
        </div>
        <div>
          <h3 className="font-extrabold">{t.quickLinks}</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            {t.nav.slice(0, 5).map((item, index) => (
              <a key={item} href={navHrefs[index]} className="hover:text-white">{item}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">{t.nav[1]}</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            {t.products.slice(0, 5).map(([, name]) => <span key={name}>{name}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">{t.nav[4]}</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            {t.markets.map((market) => <span key={market}>{market}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">{t.contactUs}</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/68">
            <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-timber" />+90 555 123 45 67</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-timber" />info@sahelsourcing.com</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-timber" />Istanbul, Türkiye</span>
            <span>{t.footerNote}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Sahel Sourcing. {t.rights}
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ t, whatsappUrl }) {
  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      aria-label={t.whatsapp}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const t = copy[lang];
  const whatsappUrl = getWhatsAppUrl(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.title;
  }, [lang, t.title]);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} whatsappUrl={whatsappUrl} />
      <main>
        <Hero t={t} whatsappUrl={whatsappUrl} />
        <Audience t={t} />
        <Products t={t} />
        <About t={t} />
        <HowItWorks t={t} />
        <CTA t={t} whatsappUrl={whatsappUrl} />
      </main>
      <MarketsFooter t={t} />
      <FloatingWhatsApp t={t} whatsappUrl={whatsappUrl} />
    </>
  );
}
