import { useState, type KeyboardEvent } from 'react';
import { COTOS } from '../data/cotosData';

type PlanMode = 'landscape' | 'technical';

interface MasterPlanSectionProps {
  selectedCotoCode: string;
  onSelectCoto: (code: string) => void;
}

export function MasterPlanSection({
  selectedCotoCode,
  onSelectCoto,
}: MasterPlanSectionProps) {
  const [mode, setMode] = useState<PlanMode>('landscape');

  const activeCoto = COTOS.find((c) => c.code === selectedCotoCode) || COTOS[0];

  const handleKeyDown = (e: KeyboardEvent<SVGGElement>, code: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCoto(code);
    }
  };

  return (
    <section id="plano" className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div>
          <h2 className="font-serif-art text-4xl lg:text-5xl font-normal text-ink text-balance">
            Vista general
          </h2>
          <p className="text-sm text-ink-muted mt-2">
            Geometría de referencia · Toca un coto para consultar su etapa.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm" role="tablist" aria-label="Modo del plano">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'landscape'}
            onClick={() => setMode('landscape')}
            className={`whitespace-nowrap shrink-0 min-h-[40px] px-1 transition-colors cursor-pointer ${
              mode === 'landscape'
                ? 'text-ink underline underline-offset-4 font-medium'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Paisaje
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'technical'}
            onClick={() => setMode('technical')}
            className={`whitespace-nowrap shrink-0 min-h-[40px] px-1 transition-colors cursor-pointer ${
              mode === 'technical'
                ? 'text-ink underline underline-offset-4 font-medium'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Técnico
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <svg
            viewBox="0 0 820 520"
            className={`w-full h-auto rounded-sm ${
              mode === 'technical' ? 'border border-hairline' : ''
            }`}
            role="img"
            aria-label="Plano de los siete cotos"
          >
            <rect
              x="0"
              y="0"
              width="820"
              height="520"
              fill={mode === 'landscape' ? '#F1ECE2' : '#FFFFFF'}
            />

            {mode === 'technical' && (
              <g aria-hidden="true" stroke="#DDD6C7" strokeWidth="0.6" opacity="0.65">
                {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                  <line key={`vx-${x}`} x1={x} y1={0} x2={x} y2={520} />
                ))}
                {[100, 200, 300, 400].map((y) => (
                  <line key={`hy-${y}`} x1={0} y1={y} x2={820} y2={y} />
                ))}
                <text
                  x="28"
                  y="36"
                  fill="#575650"
                  stroke="none"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                >
                  ESCALA GRÁFICA · POLÍGONO GENERAL
                </text>
                <text
                  x="764"
                  y="36"
                  fill="#575650"
                  stroke="none"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                >
                  N ↑
                </text>
              </g>
            )}

            <polygon
              points="120,110 380,35 740,195 660,395 495,465 340,340 120,220"
              fill={mode === 'landscape' ? '#FAF8F5' : 'none'}
              stroke="#575650"
              strokeWidth={mode === 'technical' ? '1.4' : '1.2'}
              strokeDasharray={mode === 'technical' ? '5 4' : undefined}
            />

            <line
              x1="175"
              y1="165"
              x2="625"
              y2="335"
              stroke="#DDD6C7"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {mode === 'technical' && (
              <line
                x1="175"
                y1="165"
                x2="625"
                y2="335"
                stroke="#575650"
                strokeWidth="0.9"
                strokeDasharray="6 4"
              />
            )}

            {COTOS.map((coto) => {
              const isSelected = coto.code === activeCoto.code;
              const isFirstStage = coto.code === '01';

              let fillColor = '#FAF8F5';
              let strokeColor = '#575650';
              let textColor = '#161817';
              let strokeWidth = '1.2';

              if (isSelected) {
                fillColor = isFirstStage ? '#0F292E' : '#8C5319';
                strokeColor = fillColor;
                textColor = '#FAF8F5';
                strokeWidth = '1.6';
              } else if (isFirstStage) {
                fillColor = '#0F292E';
                strokeColor = '#0F292E';
                textColor = '#FAF8F5';
                strokeWidth = '1.5';
              }

              return (
                <g
                  key={coto.code}
                  className="cursor-pointer focus:outline-none"
                  role="button"
                  tabIndex={0}
                  aria-label={`Coto ${coto.code} ${coto.name}`}
                  aria-pressed={isSelected}
                  onClick={() => onSelectCoto(coto.code)}
                  onKeyDown={(e) => handleKeyDown(e, coto.code)}
                >
                  <polygon
                    points={coto.points}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    className="transition-colors duration-200"
                  />
                  <text
                    x={coto.labelX}
                    y={coto.labelY}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize={isFirstStage || isSelected ? '14' : '13'}
                    fontFamily="Cormorant Garamond, serif"
                    fontStyle={isFirstStage ? 'italic' : 'normal'}
                  >
                    {coto.title}
                  </text>
                  {isFirstStage && (
                    <text
                      x={coto.labelX}
                      y={coto.labelY + 18}
                      textAnchor="middle"
                      fill="#DDD6C7"
                      fontSize="10"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      $4,950/m²
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4 lg:pl-10 lg:border-l border-hairline">
          <h3 className="font-serif-art text-3xl text-ink">{activeCoto.title}</h3>
          <span
            className={`font-mono-art text-xs ${
              activeCoto.status === 'En venta' ? 'text-cenote' : 'text-terracotta'
            }`}
          >
            {activeCoto.badge}
          </span>
          <p className="text-sm text-ink-muted leading-relaxed">{activeCoto.desc}</p>
          {activeCoto.code === '01' ? (
            <a
              href="#primera-etapa"
              className="text-sm text-ink underline underline-offset-4 mt-2 hover:text-cenote transition-colors"
            >
              Ir al cotizador de lotes →
            </a>
          ) : (
            <a
              href="#contacto"
              className="text-sm text-ink underline underline-offset-4 mt-2 hover:text-terracotta transition-colors"
            >
              Solicitar aviso de apertura →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
