import { useEffect, useState, type FormEvent } from 'react';
import { Calendar, Check, Video, X } from 'lucide-react';
import { CHICHIKAN_LOTS } from '../data/cotosData';

interface VideoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLotId: string;
}

const TIME_SLOTS = ['10:00 hrs', '12:30 hrs', '16:00 hrs', '18:30 hrs'];

export function VideoCallModal({
  isOpen,
  onClose,
  selectedLotId,
}: VideoCallModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [lotId, setLotId] = useState(selectedLotId);
  const [date, setDate] = useState('2026-12-03');
  const [slot, setSlot] = useState(TIME_SLOTS[0]);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLotId(selectedLotId);
    }
  }, [isOpen, selectedLotId]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedContact = contact.trim();

    if (trimmedName.length < 2) {
      setError('Ingresa tu nombre completo para confirmar la cita.');
      return;
    }
    const looksLikeEmailOrPhone =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact) ||
      trimmedContact.replace(/\D/g, '').length >= 8;
    if (!looksLikeEmailOrPhone) {
      setError('Ingresa un correo electrónico o número de WhatsApp válido.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="videocall-modal-title"
    >
      <div className="w-full max-w-lg bg-canvas text-ink border border-hairline rounded-sm p-6 sm:p-8 flex flex-col gap-6 relative">
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 p-2 text-ink-muted hover:text-ink transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {!submitted ? (
          <>
            <div className="flex flex-col gap-2 pr-8">
              <span className="font-mono-art text-xs uppercase tracking-widest text-cenote">
                Asesoría privada · Valladolid
              </span>
              <h3 id="videocall-modal-title" className="font-serif-art text-3xl text-ink">
                Agendar videollamada
              </h3>
              <p className="text-sm text-ink-muted">
                Revisamos el plano, disponibilidad y condiciones de financiamiento en tiempo real.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="vc-name" className="text-xs uppercase tracking-wider text-ink-muted">
                  Nombre completo
                </label>
                <input
                  id="vc-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Ana Sofía Morales"
                  className="w-full px-3.5 py-2.5 bg-canvas-warm/60 border border-hairline rounded-sm text-sm text-ink focus:outline-none focus:border-cenote"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="vc-contact" className="text-xs uppercase tracking-wider text-ink-muted">
                  Correo electrónico o WhatsApp
                </label>
                <input
                  id="vc-contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="nombre@correo.com o +52 999 000 0000"
                  className="w-full px-3.5 py-2.5 bg-canvas-warm/60 border border-hairline rounded-sm text-sm text-ink focus:outline-none focus:border-cenote"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="vc-lot" className="text-xs uppercase tracking-wider text-ink-muted">
                    Lote de interés
                  </label>
                  <select
                    id="vc-lot"
                    value={lotId}
                    onChange={(e) => setLotId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-canvas-warm/60 border border-hairline rounded-sm text-sm font-mono-art text-ink focus:outline-none focus:border-cenote"
                  >
                    {CHICHIKAN_LOTS.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.id} · {l.area.toFixed(2)} m²
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="vc-date" className="text-xs uppercase tracking-wider text-ink-muted">
                    Fecha preferida
                  </label>
                  <input
                    id="vc-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-canvas-warm/60 border border-hairline rounded-sm text-sm font-mono-art text-ink focus:outline-none focus:border-cenote"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-ink-muted">
                  Horario (Hora centro de México)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSlot(option)}
                      className={`py-2 px-2 text-xs font-mono-art rounded-sm border transition-colors cursor-pointer whitespace-nowrap ${
                        slot === option
                          ? 'bg-cenote text-on-cenote border-cenote'
                          : 'bg-canvas border-hairline text-ink-muted hover:text-ink'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-xs text-terracotta font-medium" role="alert">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 text-sm text-ink-muted hover:text-ink transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cenote text-on-cenote text-sm font-medium hover:bg-terracotta transition-colors cursor-pointer"
                >
                  <Video className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Confirmar cita</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center gap-5 py-4">
            <div className="w-12 h-12 rounded-full bg-cenote/10 text-cenote flex items-center justify-center">
              <Check className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif-art text-3xl text-ink">Solicitud registrada</h3>
              <p className="text-sm text-ink-muted max-w-sm">
                Gracias, <span className="text-ink font-medium">{name}</span>. Prepararemos la ficha del lote{' '}
                <span className="font-mono-art text-cenote">{lotId}</span> para nuestra sesión.
              </p>
            </div>
            <div className="w-full border-y border-hairline py-4 flex items-center justify-center gap-6 text-xs font-mono-art text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cenote" aria-hidden="true" />
                {date}
              </span>
              <span>·</span>
              <span>{slot}</span>
            </div>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-7 py-3 rounded-full bg-cenote text-on-cenote text-sm font-medium hover:bg-terracotta transition-colors cursor-pointer"
            >
              Volver al sitio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
