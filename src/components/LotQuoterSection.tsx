import { useState } from 'react';
import { Check, Link2, MessageCircle } from 'lucide-react';
import { CHICHIKAN_LOTS, PRICE_PER_M2, formatMXN, type LotItem } from '../data/cotosData';

type LotFilter = 'all' | 'disponible' | 'apartado';

interface LotQuoterSectionProps {
  selectedLotId: string;
  onSelectLot: (lotId: string) => void;
}

export function LotQuoterSection({ selectedLotId, onSelectLot }: LotQuoterSectionProps) {
  const [filter, setFilter] = useState<LotFilter>('all');
  const [copied, setCopied] = useState(false);

  const filteredLots = CHICHIKAN_LOTS.filter((lot) => {
    if (filter === 'disponible') return lot.status === 'Disponible';
    if (filter === 'apartado') return lot.status === 'Apartado';
    return true;
  });

  const selectedLot: LotItem =
    CHICHIKAN_LOTS.find((l) => l.id === selectedLotId) || CHICHIKAN_LOTS[0];
  const selectedTotal = selectedLot.area * PRICE_PER_M2;

  const availableCount = CHICHIKAN_LOTS.filter((l) => l.status === 'Disponible').length;
  const reservedCount = CHICHIKAN_LOTS.filter((l) => l.status === 'Apartado').length;

  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}?lote=${encodeURIComponent(selectedLot.id)}#primera-etapa`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      }
      window.history.replaceState(null, '', `?lote=${encodeURIComponent(selectedLot.id)}#primera-etapa`);
    } catch {
      // Clipboard might be restricted in embedded iframes; still update URL hash
      window.history.replaceState(null, '', `?lote=${encodeURIComponent(selectedLot.id)}#primera-etapa`);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="primera-etapa" className="bg-canvas-warm border-y border-hairline py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif-art text-4xl lg:text-5xl font-normal text-ink text-balance">
              Coto 01 · <em className="italic text-cenote">Chichikán</em>
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Elige un lote para calcular su valor exacto a $4,950 MXN/m².
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm" role="tablist" aria-label="Filtrar lotes">
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={`whitespace-nowrap shrink-0 min-h-[40px] px-1 transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'text-ink underline underline-offset-4 font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Todos ({CHICHIKAN_LOTS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'disponible'}
              onClick={() => setFilter('disponible')}
              className={`whitespace-nowrap shrink-0 min-h-[40px] px-1 transition-colors cursor-pointer ${
                filter === 'disponible'
                  ? 'text-ink underline underline-offset-4 font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Disponibles ({availableCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'apartado'}
              onClick={() => setFilter('apartado')}
              className={`whitespace-nowrap shrink-0 min-h-[40px] px-1 transition-colors cursor-pointer ${
                filter === 'apartado'
                  ? 'text-ink underline underline-offset-4 font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Apartados ({reservedCount})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 pb-3 border-b border-hairline text-xs uppercase tracking-wider text-ink-muted">
              <span className="col-span-3">Lote</span>
              <span className="col-span-3">Superficie</span>
              <span className="col-span-3 text-right">Total MXN</span>
              <span className="col-span-3 text-right">Estatus</span>
            </div>
            <div className="divide-y divide-hairline">
              {filteredLots.map((lot) => {
                const isSelected = lot.id === selectedLot.id;
                const total = lot.area * PRICE_PER_M2;
                const isAvail = lot.status === 'Disponible';

                return (
                  <button
                    key={lot.id}
                    type="button"
                    onClick={() => onSelectLot(lot.id)}
                    aria-pressed={isSelected}
                    className={`w-full grid grid-cols-12 items-center py-4 px-3 text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cenote ${
                      isSelected ? 'bg-canvas' : 'hover:bg-canvas/60'
                    }`}
                  >
                    <span className="col-span-3 font-mono-art text-sm text-ink font-medium">
                      {lot.id}
                    </span>
                    <span className="col-span-3 font-mono-art text-sm text-ink-muted tabular-nums">
                      {lot.area.toFixed(2)} m²
                    </span>
                    <span className="col-span-3 text-right font-mono-art text-sm text-ink tabular-nums">
                      {formatMXN(total)}
                    </span>
                    <span
                      className={`col-span-3 text-right text-xs font-medium ${
                        isAvail ? 'text-cenote' : 'text-terracotta'
                      }`}
                    >
                      {lot.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside
            aria-label="Especificación del lote"
            className="lg:col-span-5 lg:pl-10 lg:border-l border-hairline lg:sticky lg:top-24 flex flex-col gap-6"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif-art text-3xl text-ink">Lote {selectedLot.id}</h3>
              <span
                className={`font-mono-art text-xs ${
                  selectedLot.status === 'Disponible' ? 'text-cenote' : 'text-terracotta'
                }`}
              >
                {selectedLot.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 py-5 border-y border-hairline">
              <div>
                <span className="block text-xs text-ink-muted">Superficie</span>
                <span className="font-mono-art text-xl text-ink tabular-nums">
                  {selectedLot.area.toFixed(2)} m²
                </span>
              </div>
              <div>
                <span className="block text-xs text-ink-muted">Tarifa vigente</span>
                <span className="font-mono-art text-xl text-ink tabular-nums">$4,950/m²</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-sm text-ink-muted">Valor total</span>
              <span className="font-serif-art text-4xl text-terracotta tabular-nums">
                {formatMXN(selectedTotal)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contacto"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-on-terracotta text-sm font-medium hover:bg-ink transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Cotizar este lote</span>
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-hairline text-ink text-sm hover:bg-canvas transition-colors whitespace-nowrap cursor-pointer"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-cenote shrink-0" aria-hidden="true" />
                ) : (
                  <Link2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                )}
                <span>{copied ? 'Copiado' : 'Enlace'}</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
