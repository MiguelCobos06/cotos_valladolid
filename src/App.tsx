import { useEffect, useState } from 'react';
import { ArrowDown, MessageCircle, Video } from 'lucide-react';
import { ArchEmblem } from './components/ArchEmblem';
import { LotQuoterSection } from './components/LotQuoterSection';
import { MasterPlanSection } from './components/MasterPlanSection';
import { ResilientImage } from './components/ResilientImage';
import { VideoCallModal } from './components/VideoCallModal';
import {
  CHICHIKAN_LOTS,
  COTOS,
  HERO_IMAGE_URL,
  MOODBOARD_ITEMS,
  VALLADOLID_SCENES,
  type MoodCategory,
} from './data/cotosData';

const MOOD_FILTERS: { id: MoodCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'arquitectura', label: 'Arquitectura' },
  { id: 'materiales', label: 'Materiales' },
  { id: 'paisaje', label: 'Paisaje' },
];

export default function App() {
  const [selectedLotId, setSelectedLotId] = useState<string>('C1-04');
  const [moodFilter, setMoodFilter] = useState<MoodCategory>('all');
  const [selectedCotoCode, setSelectedCotoCode] = useState<string>('01');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lotParam = params.get('lote');
    if (lotParam && CHICHIKAN_LOTS.some((l) => l.id === lotParam)) {
      setSelectedLotId(lotParam);
    }
  }, []);

  const visibleMoodItems = MOODBOARD_ITEMS.filter(
    (item) => moodFilter === 'all' || item.category === moodFilter
  );

  const featuredCoto = COTOS.find((c) => c.isFeatured) || COTOS[0];
  const secondaryCotos = COTOS.filter((c) => !c.isFeatured);

  const waMessage = `Hola, me interesa el lote ${selectedLotId} del coto Chichikán, en Valladolid. ¿Podemos revisar disponibilidad y condiciones?`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(waMessage)}`;

  const handleSelectSecondaryCoto = (code: string) => {
    setSelectedCotoCode(code);
    const planEl = document.getElementById('plano');
    if (planEl) {
      planEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-canvas text-ink font-sans-art antialiased min-h-screen flex flex-col">
      {/* Whisper-quiet Editorial Header */}
      <header className="sticky top-0 z-40 bg-canvas border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a
            href="#inicio"
            className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 group"
            aria-label="Siete Cotos · Valladolid"
          >
            <ArchEmblem />
            <span className="font-serif-art text-xl sm:text-2xl tracking-wider uppercase text-ink">
              Siete Cotos
            </span>
          </a>

          <nav
            aria-label="Navegación"
            className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm tracking-wide text-ink-muted"
          >
            <a
              href="#valladolid"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              El lugar
            </a>
            <a
              href="#moodboard"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Materia
            </a>
            <a
              href="#cotos"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Siete cotos
            </a>
            <a
              href="#primera-etapa"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Chichikán
            </a>
            <a
              href="#plano"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Plano
            </a>
            <a
              href="#contacto"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          <a
            href="#primera-etapa"
            className="font-mono-art text-xs tracking-wider text-cenote hover:underline whitespace-nowrap shrink-0"
          >
            01 · $4,950/m²
          </a>
        </div>
      </header>

      <main className="flex-1 pb-20 lg:pb-0">
        {/* 01 · PORTADA CINEMATOGRÁFICA */}
        <section
          id="inicio"
          className="relative min-h-[680px] lg:min-h-[780px] flex items-end overflow-hidden bg-ink"
        >
          <ResilientImage
            src={HERO_IMAGE_URL}
            alt="Arcos de piedra caliza, palmas reales y espejo de agua al atardecer en Yucatán"
            fallbackTitle="Siete Cotos · Valladolid, Yucatán"
            darkFallback
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/20"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-14 lg:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl flex flex-col gap-4">
              <span className="font-mono-art text-xs tracking-widest text-canvas uppercase">
                Cotos Residenciales · Valladolid, Yucatán
              </span>
              <h1 className="font-serif-art text-5xl sm:text-6xl lg:text-7xl leading-none font-normal text-canvas text-balance">
                Valladolid se descubre <em className="italic">con los sentidos</em>. Un terreno se elige con claridad.
              </h1>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
              <div className="lg:text-right">
                <span className="block text-xs tracking-wider uppercase text-canvas-warm">
                  Primera etapa · Chichikán
                </span>
                <span className="font-mono-art text-2xl text-canvas tabular-nums">
                  $4,950 MXN/m²
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#primera-etapa"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-canvas text-ink text-sm font-medium hover:bg-canvas-warm transition-colors whitespace-nowrap"
                >
                  <span>Conoce la primera etapa</span>
                  <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href="#plano"
                  className="text-sm text-canvas underline underline-offset-4 hover:text-canvas-warm whitespace-nowrap"
                >
                  Plano
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 02 · VALLADOLID EN IMÁGENES (SALA DE EXPOSICIÓN) */}
        <section
          id="valladolid"
          className="max-w-7xl mx-auto px-6 py-16 lg:py-24 border-t border-hairline flex flex-col gap-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="font-serif-art text-4xl lg:text-5xl font-normal text-ink text-balance">
              Valladolid <em className="italic text-ink-muted">en tres escenas</em>
            </h2>
            <a
              href="https://www.webcamsdemexico.com/webcams/en/valladolid-yucatan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cenote hover:underline whitespace-nowrap shrink-0"
            >
              <Video className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Mira Valladolid ahora</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {VALLADOLID_SCENES.map((scene) => (
              <figure
                key={scene.id}
                className={`${scene.colSpanClass} ${scene.offsetClass || ''} flex flex-col gap-3`}
              >
                <ResilientImage
                  src={scene.imageUrl}
                  alt={scene.alt}
                  fallbackTitle={`${scene.roman} · ${scene.title}`}
                  className={`w-full ${scene.heightClass} object-cover rounded-sm`}
                />
                <figcaption className="flex items-baseline justify-between pt-2 border-t border-hairline">
                  <span className="font-serif-art text-2xl text-ink">
                    {scene.roman} · {scene.title}
                  </span>
                  <span className="text-sm text-ink-muted">{scene.subtitle}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <blockquote className="max-w-3xl mx-auto text-center py-8">
            <p className="font-serif-art italic text-3xl lg:text-4xl leading-snug text-ink text-pretty">
              «Valladolid se descubre despacio: en la luz de sus patios, en la piedra que guarda el día y en el agua que aparece entre la tierra».
            </p>
          </blockquote>
        </section>

        {/* 03 · MOODBOARD & MATERIA (COLLAGE EDITORIAL) */}
        <section
          id="moodboard"
          className="bg-canvas-warm border-y border-hairline py-16 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="font-serif-art text-4xl lg:text-5xl font-normal text-ink text-balance">
                  Materia <em className="italic text-terracotta">e inspiración</em>
                </h2>
                <p className="text-sm text-ink-muted mt-2">
                  Arquitectura yucateca contemporánea como horizonte · La oferta actual es terreno.
                </p>
              </div>

              <div
                className="flex flex-wrap items-center gap-6 text-sm"
                role="tablist"
                aria-label="Filtrar materia e inspiración"
              >
                {MOOD_FILTERS.map((f) => {
                  const active = moodFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setMoodFilter(f.id)}
                      className={`whitespace-nowrap shrink-0 min-h-[40px] px-1 transition-colors cursor-pointer ${
                        active
                          ? 'text-ink underline underline-offset-4 font-medium'
                          : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {visibleMoodItems.map((item) => (
                <figure
                  key={item.id}
                  className={`${
                    moodFilter === 'all' ? item.colSpanClass : 'md:col-span-6'
                  } ${moodFilter === 'all' ? item.offsetClass || '' : ''} flex flex-col gap-3`}
                >
                  <ResilientImage
                    src={item.imageUrl}
                    alt={item.alt}
                    fallbackTitle={item.title}
                    className={`w-full ${item.heightClass} object-cover rounded-sm`}
                  />
                  <figcaption className="flex items-baseline justify-between text-sm">
                    <span className="font-serif-art text-xl text-ink">{item.title}</span>
                    <span className="text-ink-muted">{item.subtitle}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 04 · LOS SIETE COTOS (GALERÍA DE CENOTES) */}
        <section id="cotos" className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-hairline pb-4">
            <div>
              <h2 className="font-serif-art text-4xl lg:text-5xl font-normal text-ink text-balance">
                Siete cotos, <em className="italic text-ink-muted">siete cenotes</em>
              </h2>
              <p className="text-sm text-ink-muted mt-1">
                Identidad editorial inspirada en cenotes de la región · Apertura por etapas.
              </p>
            </div>
            <span className="font-mono-art text-xs text-ink-muted whitespace-nowrap tabular-nums">
              $4,950 → $8,000 MXN/m²
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <a
              href="#primera-etapa"
              onClick={() => setSelectedCotoCode('01')}
              className="lg:col-span-5 group flex flex-col gap-4"
            >
              <div className="relative overflow-hidden rounded-sm">
                <ResilientImage
                  src={featuredCoto.imageUrl}
                  alt={`Cenote ${featuredCoto.name} en Yucatán`}
                  fallbackTitle={featuredCoto.title}
                  className="w-full h-96 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-sm bg-cenote/95 text-on-cenote font-mono-art text-xs tracking-wider">
                  01 · Primera etapa
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t border-hairline">
                <span className="font-serif-art italic text-4xl text-cenote group-hover:text-terracotta transition-colors">
                  {featuredCoto.name}
                </span>
                <span className="font-mono-art text-base text-ink tabular-nums">
                  $4,950 MXN/m² · Explorar →
                </span>
              </div>
            </a>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
              {secondaryCotos.map((coto) => (
                <button
                  key={coto.code}
                  type="button"
                  onClick={() => handleSelectSecondaryCoto(coto.code)}
                  className="group flex flex-col gap-2 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cenote"
                >
                  <div className="w-full overflow-hidden rounded-sm">
                    <ResilientImage
                      src={coto.imageUrl}
                      alt={`Cenote ${coto.name}`}
                      fallbackTitle={coto.title}
                      className="w-full h-48 object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-full flex items-baseline justify-between pt-1.5 border-t border-hairline">
                    <span className="font-serif-art text-xl text-ink group-hover:text-terracotta transition-colors">
                      {coto.title}
                    </span>
                    <span className="text-xs text-ink-muted">{coto.badge}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 05 · COTO 01 CHICHIKÁN (COTIZADOR DE GALERÍA) */}
        <LotQuoterSection
          selectedLotId={selectedLotId}
          onSelectLot={setSelectedLotId}
        />

        {/* 06 · VISTA GENERAL (PLANO TIPOGRÁFICO) */}
        <MasterPlanSection
          selectedCotoCode={selectedCotoCode}
          onSelectCoto={setSelectedCotoCode}
        />

        {/* 07 · CONTACTO / CIERRE */}
        <section id="contacto" className="bg-cenote text-on-cenote py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
            <h2 className="font-serif-art text-4xl sm:text-5xl lg:text-6xl font-normal text-on-cenote text-balance">
              Ya conoces el lugar. <em className="italic">Conozcamos</em> tu próximo espacio.
            </h2>
            <p className="text-base text-canvas-warm max-w-xl">
              Acompañamos tu elección por videollamada o WhatsApp, desde México o el extranjero.
            </p>

            <p className="font-mono-art text-xs text-on-cenote border-y border-hairline/30 py-4 leading-relaxed">
              «{waMessage}»
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-terracotta text-on-terracotta text-sm font-medium hover:bg-ink transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Escribir por WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-on-cenote/40 text-on-cenote text-sm hover:bg-ink/20 transition-colors whitespace-nowrap cursor-pointer"
              >
                <Video className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Agendar videollamada</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-canvas border-t border-hairline py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <div className="inline-flex items-center gap-2.5">
            <ArchEmblem className="w-5 h-5 text-cenote shrink-0" />
            <span className="tracking-wide uppercase text-ink">Siete Cotos · Valladolid</span>
          </div>
          <span className="font-mono-art tabular-nums">Primera etapa · $4,950 MXN/m²</span>
        </div>
      </footer>

      {/* Mobile Quick-Exit Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-canvas border-t border-hairline px-6 py-3 flex items-center gap-3">
        <a
          href="#primera-etapa"
          className="flex-1 text-center py-2.5 rounded-full bg-cenote text-on-cenote text-sm font-medium whitespace-nowrap"
        >
          Ver lotes
        </a>
        <a
          href="#contacto"
          className="flex-1 text-center py-2.5 rounded-full border border-hairline text-ink text-sm whitespace-nowrap"
        >
          Asesor
        </a>
      </div>

      <VideoCallModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        selectedLotId={selectedLotId}
      />
    </div>
  );
}
