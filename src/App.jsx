import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  PanelTop,
  Phone,
  Quote,
  Send,
  Ship,
  ShieldCheck,
  Trees,
  Truck,
  Warehouse,
} from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '905551234567';
const whatsappMessage = encodeURIComponent(
  'Hello Sahel Sourcing, I would like a quotation for wood panels from Türkiye.',
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navItems = [
  ['Products', '#products'],
  ['Why Us', '#why-us'],
  ['How It Works', '#how-it-works'],
  ['Markets', '#markets'],
  ['Contact', '#contact'],
];

const products = [
  {
    name: 'MDF Boards',
    description: 'Smooth, consistent panels for furniture, cabinetry, wall systems, and interior fit-outs.',
    icon: Layers3,
  },
  {
    name: 'Particleboard',
    description: 'Cost-efficient raw and faced boards for high-volume furniture and joinery production.',
    icon: PanelTop,
  },
  {
    name: 'Melamine Boards',
    description: 'Decorative surfaces in commercial finishes, wood grains, solids, and project-ready colors.',
    icon: Warehouse,
  },
  {
    name: 'Laminate Flooring',
    description: 'Durable flooring collections for residential, retail, office, and hospitality interiors.',
    icon: Building2,
  },
  {
    name: 'OSB Boards',
    description: 'Structural panels for roofing, sheathing, packaging, construction, and industrial use.',
    icon: PackageCheck,
  },
];

const steps = [
  ['Send Inquiry', 'Share dimensions, thicknesses, finishes, quantity, and destination.', Send],
  ['Get Quotation', 'Receive factory-backed pricing, specs, lead times, and loading details.', Quote],
  ['Confirm Order', 'Approve the offer, payment terms, documents, and production schedule.', ClipboardCheck],
  ['Shipping', 'We coordinate export documents, container planning, and port logistics.', Ship],
  ['Receive Products', 'Your panels arrive ready for distribution, fabrication, or project delivery.', Truck],
];

const markets = ['Mali', 'Senegal', "Côte d'Ivoire", 'Burkina Faso', 'Guinea', 'Ghana'];

function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Sahel Sourcing home">
      <span className="grid h-11 w-11 place-items-center rounded bg-forest text-linen shadow-soft">
        <Trees className="h-6 w-6" />
      </span>
      <span>
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            light ? 'text-linen' : 'text-charcoal'
          }`}
        >
          Sahel Sourcing
        </span>
        <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-timber">
          Wood Panels
        </span>
      </span>
    </a>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-charcoal/10 bg-linen/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-charcoal/75 transition hover:text-forest"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={whatsappUrl}
          className="hidden rounded bg-forest px-5 py-3 text-sm font-bold text-linen shadow-soft transition hover:bg-moss md:inline-flex"
        >
          Request Quote
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded border border-charcoal/10 text-charcoal lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-charcoal/10 bg-linen px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded px-2 py-3 text-sm font-bold text-charcoal/75 transition hover:bg-sand/45 hover:text-forest"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              className="mt-2 rounded bg-forest px-5 py-3 text-center text-sm font-bold text-linen shadow-soft transition hover:bg-moss"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-charcoal pt-28 text-linen">
      <div className="absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[linear-gradient(105deg,rgba(23,53,43,0.95)_0%,rgba(32,35,33,0.8)_42%,rgba(155,103,61,0.62)_100%)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-linen to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sand/30 bg-linen/10 px-4 py-2 text-sm font-semibold text-sand">
            <Globe2 className="h-4 w-4" />
            Türkiye export network for West African buyers
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl">
            Connecting West Africa to Premium Wood Panels from Türkiye
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-linen/78">
            Sahel Sourcing helps importers, furniture makers, construction suppliers, and
            interior designers access reliable Turkish panel manufacturers with clear
            specifications, competitive quotations, and container-ready logistics.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              className="inline-flex items-center justify-center gap-2 rounded bg-sand px-6 py-4 font-bold text-charcoal transition hover:bg-linen"
            >
              Start WhatsApp Inquiry
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded border border-linen/25 px-6 py-4 font-bold text-linen transition hover:bg-linen/10"
            >
              View Product Range
            </a>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-linen/15 bg-sand/10 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,218,195,0.32),transparent_34%),linear-gradient(145deg,rgba(155,103,61,0.48),rgba(23,53,43,0.88))]" />
          <div className="absolute inset-x-8 top-8 grid gap-4">
            {['MDF', 'Melamine', 'OSB', 'Flooring'].map((label, index) => (
              <div
                key={label}
                className="flex items-center justify-between rounded border border-linen/20 bg-linen/12 px-5 py-4 backdrop-blur"
                style={{ transform: `translateX(${index * 18}px)` }}
              >
                <span className="font-display text-2xl font-extrabold">{label}</span>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-sand">
                  Ready to ship
                </span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-8 left-8 right-8 rounded bg-linen p-6 text-charcoal">
            <div className="mb-4 flex items-center gap-3">
              <Factory className="h-7 w-7 text-timber" />
              <p className="font-display text-xl font-extrabold">Factory-direct sourcing</p>
            </div>
            <p className="text-sm leading-6 text-charcoal/70">
              Coordinated specifications, export paperwork, container loading, and destination
              planning for Mali and wider West Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-linen px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-timber">Products</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-charcoal md:text-5xl">
            Core panel categories for trade and projects
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {products.map(({ name, description, icon: Icon }) => (
            <article
              key={name}
              className="rounded-lg border border-charcoal/10 bg-white p-6 shadow-[0_12px_38px_rgba(32,35,33,0.06)] transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded bg-forest text-linen">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-charcoal">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/68">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const points = [
    'Turkish manufacturer network for panel products and flooring',
    'Clear technical specs, commercial terms, and shipment documentation',
    'Built for repeat B2B orders, not one-off guesswork',
  ];

  return (
    <section id="why-us" className="bg-sand px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-bark">Why Us</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-charcoal">
            A practical sourcing partner between Türkiye and the Sahel
          </h2>
        </div>
        <div className="rounded-lg bg-linen p-8 shadow-soft">
          <ShieldCheck className="h-12 w-12 text-forest" />
          <p className="mt-6 text-lg leading-8 text-charcoal/75">
            We bridge commercial expectations, technical product details, and export logistics so
            West African buyers can source confidently from Turkish suppliers.
          </p>
          <div className="mt-8 grid gap-4">
            {points.map((point) => (
              <div key={point} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-forest" />
                <p className="font-semibold text-charcoal/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-charcoal px-5 py-20 text-linen lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sand">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              From inquiry to container arrival
            </h2>
          </div>
          <p className="max-w-md text-linen/65">
            A structured process designed for importers who need clarity before money moves.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map(([title, text, Icon], index) => (
            <article key={title} className="rounded-lg border border-linen/12 bg-linen/7 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-sand">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon className="h-6 w-6 text-sand" />
              </div>
              <h3 className="font-display text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-linen/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section id="markets" className="bg-linen px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-timber">Markets</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-charcoal">
            Focused on Mali and wider West Africa
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/68">
            We support buyers who need dependable supply for trading, furniture manufacturing,
            construction supply chains, and interior projects across regional markets.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {markets.map((market) => (
            <div
              key={market}
              className="flex items-center gap-4 rounded-lg border border-charcoal/10 bg-white p-5 shadow-[0_12px_38px_rgba(32,35,33,0.06)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded bg-sand text-bark">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-extrabold text-charcoal">{market}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-forest px-5 py-20 text-linen lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sand">Contact</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Ready to source wood panels from Türkiye?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-linen/72">
          Send your product list, target port, and order volume. We will prepare a clear quotation
          and guide the next steps.
        </p>
        <a
          href={whatsappUrl}
          className="mt-9 inline-flex items-center justify-center gap-3 rounded bg-sand px-7 py-4 font-bold text-charcoal shadow-soft transition hover:bg-linen"
        >
          <Phone className="h-5 w-5" />
          WhatsApp Sahel Sourcing
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-10 text-linen lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo light />
        <div className="flex flex-col gap-3 text-sm text-linen/65 sm:flex-row sm:items-center sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            contact@sahelsourcing.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            WhatsApp: +90 555 123 45 67
          </span>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-linen/10 pt-6 text-sm text-linen/45">
        © {new Date().getFullYear()} Sahel Sourcing. Premium wood panel sourcing from Türkiye to
        West Africa.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      aria-label="Contact Sahel Sourcing on WhatsApp"
    >
      <Phone className="h-7 w-7" />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Trust />
        <HowItWorks />
        <Markets />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
