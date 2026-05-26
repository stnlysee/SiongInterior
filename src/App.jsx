import React from 'react';
import { motion } from 'framer-motion';
import {
  Hammer,
  Factory,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Layers,
  Ruler,
  Building2,
} from 'lucide-react';

const LOGO_SRC = '/siong-logo.png';
const PHONE_DISPLAY = '6366 1046';
const PHONE_LINK = 'tel:63661046';

export default function App() {
  const services = [
    {
      icon: <Building2 className="h-7 w-7" />,
      title: 'Exhibition Carpentry',
      text: 'Custom exhibition booths, display structures, counters, backdrops and event build-ups fabricated to suit project requirements.',
    },
    {
      icon: <Layers className="h-7 w-7" />,
      title: 'Interior Carpentry',
      text: 'Built-in cabinets, feature walls, counters, wardrobes and interior fit-out carpentry for commercial and residential spaces.',
    },
    {
      icon: <Factory className="h-7 w-7" />,
      title: 'In-House Fabrication',
      text: 'Factory-supported production in Singapore and Malaysia for better control over quality, speed and custom fabrication work.',
    },
  ];

  const strengths = [
    'Exhibition and interior carpentry specialist',
    'In-house factory support in Singapore and Malaysia',
    'Machine-supported carpentry and edge-banding capability',
    'Custom fabrication for booths, displays and interiors',
    'Practical build knowledge from design to installation',
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Siong Interior & Builder home">
            <img src={LOGO_SRC} alt="Siong Interior & Builder Pte Ltd logo" className="h-12 w-auto object-contain" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-700 md:flex" aria-label="Main navigation">
            <a href="#services" className="hover:text-amber-700">Services</a>
            <a href="#about" className="hover:text-amber-700">About</a>
            <a href="#contact" className="hover:text-amber-700">Contact</a>
          </nav>

          <a href={PHONE_LINK} className="hidden items-center gap-2 rounded-full bg-neutral-950 px-5 py-2 text-sm font-bold text-white transition hover:bg-neutral-800 md:inline-flex">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,126,62,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(20,20,20,0.08),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-amber-700">CARPENTRY • FABRICATION • FIT-OUT</p>
            <h1 className="mb-6 text-4xl font-black leading-tight text-neutral-950 md:text-6xl">
              Exhibition & Interior Carpentry Specialist in Singapore.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-neutral-600">
              Siong Interior & Builder Pte Ltd provides exhibition carpentry, interior carpentry, custom fabrication and fit-out support with in-house factory capability in Singapore and Malaysia.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-amber-700">
                Call for Project Enquiry <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-4 font-bold text-neutral-950 transition hover:bg-neutral-100">
                View Carpentry Services
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-2xl">
            <img src={LOGO_SRC} alt="Siong Interior & Builder exhibition fabrication specialist logo" className="mx-auto w-full max-w-xl object-contain" />
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-stone-100 p-4">
                <p className="text-3xl font-black text-amber-700">SG</p>
                <p className="text-neutral-600">Singapore Factory Support</p>
              </div>
              <div className="rounded-2xl bg-stone-100 p-4">
                <p className="text-3xl font-black text-amber-700">MY</p>
                <p className="text-neutral-600">Malaysia Factory Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-amber-700">WHAT WE DO</p>
          <h2 className="mb-5 text-3xl font-black md:text-5xl">Carpentry solutions for exhibitions and interiors.</h2>
          <p className="leading-8 text-neutral-600">
            From exhibition booth fabrication to interior carpentry fixtures, we support projects with practical fabrication experience, machine-assisted production and hands-on carpentry workmanship.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">{service.icon}</div>
              <h3 className="mb-3 text-xl font-black">{service.title}</h3>
              <p className="leading-7 text-neutral-600">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-amber-700">WHY CHOOSE US</p>
            <h2 className="mb-6 text-3xl font-black md:text-5xl">Built for speed, quality and custom work.</h2>
            <p className="mb-8 leading-8 text-neutral-600">
              With in-house factory capability and machine-supported carpentry, Siong Interior & Builder can handle custom carpentry and exhibition fabrication work efficiently while maintaining control over production quality.
            </p>
            <div className="space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
                  <p className="font-medium text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-neutral-950 p-8 text-white shadow-2xl md:p-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-neutral-950">
                <Hammer className="h-8 w-8" />
              </div>
              <div>
                <p className="text-2xl font-black">Carpenter Style</p>
                <p className="text-stone-300">Practical, solid and reliable workmanship.</p>
              </div>
            </div>
            <div className="grid gap-4">
              <InfoRow icon={<Ruler className="h-5 w-5" />} title="Custom Measurement" text="Made according to site and project requirements." />
              <InfoRow icon={<Factory className="h-5 w-5" />} title="Factory Production" text="Supported by in-house fabrication workflow." />
              <InfoRow icon={<Building2 className="h-5 w-5" />} title="Exhibition Ready" text="Suitable for displays, booths and event structures." />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 rounded-[2.5rem] border border-amber-200 bg-amber-100 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-amber-800">CONTACT US</p>
            <h2 className="mb-5 text-3xl font-black md:text-5xl">Speak to us about your next fabrication project.</h2>
            <p className="leading-8 text-neutral-700">
              Send your project requirements, drawings, measurements or booth concept and our team can advise on carpentry and fabrication support.
            </p>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
              <div>
                <p className="font-black">Address</p>
                <p className="leading-7 text-neutral-600">71 Woodlands Industrial Park E9,<br />#05-08A/B Wave 9,<br />Singapore 757048</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
              <div>
                <p className="font-black">Phone</p>
                <a href={PHONE_LINK} className="font-semibold text-neutral-600 hover:text-amber-700">{PHONE_DISPLAY}</a>
              </div>
            </div>
            <a href={PHONE_LINK} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800">
              Call Siong Interior & Builder <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 px-6 py-10 text-stone-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p className="font-bold text-white">Siong Interior & Builder Pte Ltd</p>
          <p>Interior Carpentry | Exhibition Fabrication Specialist</p>
        </div>
      </footer>
    </main>
  );
}

function InfoRow({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-white/10 p-5">
      <div className="mt-1 text-amber-300">{icon}</div>
      <div>
        <p className="font-black">{title}</p>
        <p className="text-sm leading-6 text-stone-300">{text}</p>
      </div>
    </div>
  );
}
