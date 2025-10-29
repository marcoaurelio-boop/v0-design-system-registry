import { CatlifeButton } from "@/components/ui/catlife-button"
import { PillContainer } from "@/components/ui/pill-container"
import { CatlifeCard } from "@/components/ui/catlife-card"
import { Carousel } from "@/components/ui/carousel"

export default function Page() {
  return (
    <div className="min-h-screen bg-catlife-background p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-catlife-text-primary">Catlife Design System</h1>
          <p className="text-lg text-catlife-text-secondary">Sistema de cores para o plano de saúde pet</p>
        </div>

        {/* Pricing Carousel */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Pricing Carousel</h2>
          <p className="text-catlife-text-secondary">
            Interactive carousel showing 3 pricing cards at once. Center card is emphasized and larger, side cards are
            smaller and disabled. Click side cards or dots to navigate.
          </p>

          <div className="space-y-4">
            <h3 className="text-center text-2xl font-bold text-catlife-text-primary">
              Se o seu gato tivesse cartão de crédito,
              <br />
              já teria escolhido um desses
            </h3>

            <Carousel defaultIndex={1}>
              <CatlifeCard className="w-80">
                <h3 className="text-lg font-bold text-catlife-text-muted">Básico</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-catlife-text-primary">R$39</span>
                  <span className="text-catlife-text-secondary">/mês</span>
                </div>
                <p className="text-sm text-catlife-text-secondary">Cuidados de rotina com mais economia</p>
                <CatlifeButton variant="primary" className="mt-6 w-full">
                  Simular
                </CatlifeButton>
              </CatlifeCard>

              <CatlifeCard variant="orange" className="w-80">
                <h3 className="text-lg font-bold text-catlife-text-inverse">Médio</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-catlife-text-inverse">R$79</span>
                  <span className="text-catlife-text-inverse/90">/mês</span>
                </div>
                <p className="text-sm text-catlife-text-inverse/90">Cuidados de rotina com mais economia</p>
                <CatlifeButton variant="primary" className="mt-6 w-full">
                  Simular
                </CatlifeButton>
              </CatlifeCard>

              <CatlifeCard className="w-80">
                <h3 className="text-lg font-bold text-catlife-text-muted">Top</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-catlife-text-primary">R$139</span>
                  <span className="text-catlife-text-secondary">/mês</span>
                </div>
                <p className="text-sm text-catlife-text-secondary">Cuidados de rotina com mais economia</p>
                <CatlifeButton variant="primary" className="mt-6 w-full">
                  Simular
                </CatlifeButton>
              </CatlifeCard>
            </Carousel>

            <div className="flex justify-center">
              <CatlifeButton variant="cta" size="lg">
                Ver tabela de cobertura
              </CatlifeButton>
            </div>
          </div>
        </section>

        {/* Pill Container */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Pill Container</h2>
          <p className="text-catlife-text-secondary">
            A flexible container with cream background, pill shape, and frosted glass effect. Can be used for
            navigation, forms, cards, and more.
          </p>

          {/* Navigation example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Navigation Header</h3>
            <div className="rounded-2xl bg-gradient-to-r from-catlife-primary via-catlife-primary-hover to-catlife-primary-active p-8">
              <PillContainer>
                <div className="flex items-center gap-6">
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-catlife-primary-lightest">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <span className="text-2xl font-bold text-catlife-text-primary">Catlife</span>
                  <div className="hidden gap-6 md:flex">
                    <a href="#" className="text-catlife-text-primary hover:text-catlife-primary">
                      Planos
                    </a>
                    <a href="#" className="text-catlife-text-primary hover:text-catlife-primary">
                      Como funciona
                    </a>
                    <a href="#" className="text-catlife-text-primary hover:text-catlife-primary">
                      Rede credenciada
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CatlifeButton variant="primary" size="sm">
                    Entrar
                  </CatlifeButton>
                  <CatlifeButton variant="cta" size="sm">
                    Simular plano
                  </CatlifeButton>
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-catlife-primary">
                    <div className="flex h-full w-full items-center justify-center text-catlife-text-inverse">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </PillContainer>
            </div>
          </div>

          {/* Form card example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Form Card (From Figma)</h3>
            <div className="rounded-2xl bg-gradient-to-br from-catlife-primary via-catlife-primary-hover to-catlife-primary-light p-8">
              <PillContainer className="flex-col items-start gap-6 py-8">
                <h2 className="text-2xl font-bold text-catlife-text-primary">Encontre a opção ideal</h2>
                <input
                  type="text"
                  placeholder="Nome do seu pet"
                  className="w-full rounded-full border-2 border-catlife-surface bg-transparent px-6 py-4 text-catlife-text-secondary placeholder:text-catlife-text-muted focus:border-catlife-primary focus:outline-none"
                />
                <CatlifeButton variant="dark" size="lg" className="w-full">
                  Vamos lá
                </CatlifeButton>
              </PillContainer>
            </div>
          </div>

          {/* Simple navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Simple Navigation</h3>
            <div className="rounded-2xl bg-gradient-to-r from-catlife-primary-light via-catlife-primary to-catlife-primary-hover p-8">
              <PillContainer>
                <span className="text-xl font-bold text-catlife-text-primary">Catlife</span>
                <div className="flex gap-6">
                  <a href="#" className="text-catlife-text-primary hover:text-catlife-primary">
                    Home
                  </a>
                  <a href="#" className="text-catlife-text-primary hover:text-catlife-primary">
                    About
                  </a>
                  <a href="#" className="text-catlife-text-primary hover:text-catlife-primary">
                    Contact
                  </a>
                </div>
              </PillContainer>
            </div>
          </div>

          {/* Custom styled */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Custom Styled (Orange Background)</h3>
            <PillContainer className="bg-catlife-primary">
              <span className="text-xl font-bold text-catlife-text-inverse">Catlife</span>
              <CatlifeButton variant="dark" size="sm">
                Get Started
              </CatlifeButton>
            </PillContainer>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Buttons</h2>

          {/* All variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <CatlifeButton variant="primary">Entrar</CatlifeButton>
              <CatlifeButton variant="cta">Simular plano</CatlifeButton>
              <CatlifeButton variant="dark">Vamos lá</CatlifeButton>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <CatlifeButton variant="cta" size="sm">
                Small
              </CatlifeButton>
              <CatlifeButton variant="cta" size="default">
                Default
              </CatlifeButton>
              <CatlifeButton variant="cta" size="lg">
                Large
              </CatlifeButton>
            </div>
          </div>

          {/* States */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">States</h3>
            <div className="flex flex-wrap gap-4">
              <CatlifeButton variant="primary">Normal</CatlifeButton>
              <CatlifeButton variant="primary" disabled>
                Disabled
              </CatlifeButton>
            </div>
          </div>

          {/* Real examples */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Real Examples from Design</h3>
            <div className="flex flex-wrap gap-4">
              <CatlifeButton variant="dark" size="lg">
                Vamos lá
              </CatlifeButton>
              <CatlifeButton variant="primary">Entrar</CatlifeButton>
              <CatlifeButton variant="cta">Simular plano</CatlifeButton>
              <CatlifeButton variant="cta">Simular o plano ideal</CatlifeButton>
              <CatlifeButton variant="primary">Ver tabela de cobertura</CatlifeButton>
            </div>
          </div>
        </section>

        {/* Primary Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Primary Colors - Orange Family</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <ColorCard
              color="bg-catlife-primary"
              name="Primary"
              hex="#F49834"
              token="--catlife-primary"
              description="Main brand orange"
            />
            <ColorCard
              color="bg-catlife-primary-hover"
              name="Primary Hover"
              hex="#F99830"
              token="--catlife-primary-hover"
              description="Hover state"
            />
            <ColorCard
              color="bg-catlife-primary-active"
              name="Primary Active"
              hex="#F27100"
              token="--catlife-primary-active"
              description="Active/pressed state"
            />
            <ColorCard
              color="bg-catlife-primary-light"
              name="Primary Light"
              hex="#FFD094"
              token="--catlife-primary-light"
              description="Light accent"
            />
            <ColorCard
              color="bg-catlife-primary-lightest"
              name="Primary Lightest"
              hex="#FFEED6"
              token="--catlife-primary-lightest"
              description="Lightest accent"
            />
          </div>
        </section>

        {/* Background Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Background Colors</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <ColorCard
              color="bg-catlife-background"
              name="Background"
              hex="#FFFAF4"
              token="--catlife-background"
              description="Main page background"
            />
            <ColorCard
              color="bg-catlife-background-alt"
              name="Background Alt"
              hex="#FFFAF3"
              token="--catlife-background-alt"
              description="Alternative background"
            />
            <ColorCard
              color="bg-catlife-surface"
              name="Surface"
              hex="#FFFFFF"
              token="--catlife-surface"
              description="Cards, buttons"
            />
          </div>
        </section>

        {/* Text Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Text Colors</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <ColorCard
              color="bg-catlife-text-primary"
              name="Text Primary"
              hex="#161616"
              token="--catlife-text-primary"
              description="Main headings"
              textColor="text-catlife-text-inverse"
            />
            <ColorCard
              color="bg-catlife-text-secondary"
              name="Text Secondary"
              hex="#1C1B1F"
              token="--catlife-text-secondary"
              description="Body text"
              textColor="text-catlife-text-inverse"
            />
            <ColorCard
              color="bg-catlife-text-muted"
              name="Text Muted"
              hex="#292625"
              token="--catlife-text-muted"
              description="Subtle text"
              textColor="text-catlife-text-inverse"
            />
            <ColorCard
              color="bg-catlife-text-inverse"
              name="Text Inverse"
              hex="#FFFFFF"
              token="--catlife-text-inverse"
              description="Text on dark backgrounds"
            />
          </div>

          {/* Additional text variants */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Additional Text Variants</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <ColorCard
                color="bg-catlife-text-variant-1"
                name="Text Variant 1"
                hex="#151515"
                token="--catlife-text-variant-1"
                description="Alternative dark"
                textColor="text-catlife-text-inverse"
              />
              <ColorCard
                color="bg-catlife-text-variant-2"
                name="Text Variant 2"
                hex="#161617"
                token="--catlife-text-variant-2"
                description="Alternative dark"
                textColor="text-catlife-text-inverse"
              />
            </div>
          </div>
        </section>

        {/* Accent Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Accent Colors</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <ColorCard
              color="bg-catlife-accent-success"
              name="Success"
              hex="#10B981"
              token="--catlife-accent-success"
              description="Checkmarks, success states"
            />
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Usage Examples</h2>

          {/* Text on different backgrounds */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Text on Backgrounds</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border-[3px] border-catlife-border bg-catlife-background p-6">
                <p className="mb-2 font-bold text-catlife-text-primary">Primary text on cream</p>
                <p className="mb-2 text-catlife-text-secondary">Secondary text on cream</p>
                <p className="text-catlife-text-muted">Muted text on cream</p>
              </div>
              <div className="rounded-lg border-[3px] border-catlife-border bg-catlife-primary p-6">
                <p className="mb-2 font-bold text-catlife-text-inverse">Inverse text on orange</p>
                <p className="mb-2 text-catlife-text-inverse/90">With opacity</p>
                <p className="text-catlife-text-inverse/70">More subtle</p>
              </div>
            </div>
          </div>

          {/* Button examples */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Button Examples</h3>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full border-[3px] border-catlife-border bg-catlife-surface px-8 py-3 font-bold text-catlife-text-primary transition-colors hover:bg-catlife-background">
                Primary Button
              </button>
              <button className="rounded-full border-[3px] border-catlife-border bg-catlife-primary px-8 py-3 font-bold text-catlife-text-inverse transition-colors hover:bg-catlife-primary-hover">
                CTA Button
              </button>
              <button className="rounded-full border-[3px] border-catlife-border bg-catlife-accent-success px-8 py-3 font-bold text-catlife-text-inverse transition-opacity hover:opacity-90">
                Success Button
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">Cards</h2>
          <p className="text-catlife-text-secondary">
            Flexible card containers with rounded corners and black borders. Supports disabled state and multiple
            variants.
          </p>

          {/* Basic cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Basic Cards</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <CatlifeCard>
                <h3 className="text-xl font-bold text-catlife-text-primary">Default Card</h3>
                <p className="text-catlife-text-secondary">
                  This is a default card with cream background and black border.
                </p>
              </CatlifeCard>

              <CatlifeCard variant="orange">
                <h3 className="text-xl font-bold text-catlife-text-inverse">Orange Card</h3>
                <p className="text-catlife-text-inverse/90">This is an orange variant card with white text.</p>
              </CatlifeCard>
            </div>
          </div>

          {/* Disabled state */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">Disabled State</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <CatlifeCard>
                <h3 className="text-lg font-bold text-catlife-text-primary">Active Card</h3>
                <p className="text-sm text-catlife-text-secondary">This card is interactive</p>
              </CatlifeCard>

              <CatlifeCard disabled>
                <h3 className="text-lg font-bold text-catlife-text-primary">Disabled Card</h3>
                <p className="text-sm text-catlife-text-secondary">This card is disabled</p>
              </CatlifeCard>

              <CatlifeCard variant="orange" disabled>
                <h3 className="text-lg font-bold text-catlife-text-inverse">Disabled Orange</h3>
                <p className="text-sm text-catlife-text-inverse/90">This card is disabled</p>
              </CatlifeCard>
            </div>
          </div>

          {/* Figma examples */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">From Figma - Carousel Cards</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <CatlifeCard variant="orange" className="min-h-[300px]">
                <h3 className="text-xl font-bold text-catlife-text-inverse">Veja como é simples usar a Catlife</h3>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-catlife-primary-light" />
                </div>
              </CatlifeCard>

              <CatlifeCard className="min-h-[300px]">
                <h3 className="text-xl font-bold text-catlife-text-primary">Escolha a cobertura</h3>
                <p className="text-sm text-catlife-text-secondary">
                  Selecione o plano de saúde que combina com o seu pet e com a sua rotina.
                </p>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-catlife-primary" />
                </div>
              </CatlifeCard>

              <CatlifeCard variant="orange" className="min-h-[300px]">
                <h3 className="text-xl font-bold text-catlife-text-inverse">Aguarde a carência</h3>
                <p className="text-sm text-catlife-text-inverse/90">
                  Cada procedimento tem um prazo para ficar disponível. Você pode acompanhar pela Área do Tutor.
                </p>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-catlife-primary-light" />
                </div>
              </CatlifeCard>

              <CatlifeCard className="min-h-[300px]">
                <h3 className="text-xl font-bold text-catlife-text-primary">Use quando estiver liberado</h3>
                <p className="text-sm text-catlife-text-secondary">
                  Assim que a carência acabar, agende os procedimentos direto com os credenciados. Não precisa de
                  aprovação prévia.
                </p>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-catlife-primary" />
                </div>
              </CatlifeCard>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-catlife-text-primary">From Figma - Pricing Cards</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <CatlifeCard>
                <h3 className="text-lg font-bold text-catlife-text-muted">Básico</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-catlife-text-primary">R$39</span>
                  <span className="text-catlife-text-secondary">/mês</span>
                </div>
                <p className="text-sm text-catlife-text-secondary">Cuidados de rotina com mais economia</p>
                <CatlifeButton variant="primary" className="mt-4 w-full">
                  Simular
                </CatlifeButton>
              </CatlifeCard>

              <CatlifeCard variant="orange">
                <h3 className="text-lg font-bold text-catlife-text-inverse">Médio</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-catlife-text-inverse">R$79</span>
                  <span className="text-catlife-text-inverse/90">/mês</span>
                </div>
                <p className="text-sm text-catlife-text-inverse/90">Cuidados de rotina com mais economia</p>
                <CatlifeButton variant="primary" className="mt-4 w-full">
                  Simular
                </CatlifeButton>
              </CatlifeCard>

              <CatlifeCard>
                <h3 className="text-lg font-bold text-catlife-text-muted">Top</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-catlife-text-primary">R$139</span>
                  <span className="text-catlife-text-secondary">/mês</span>
                </div>
                <p className="text-sm text-catlife-text-secondary">Cuidados de rotina com mais economia</p>
                <CatlifeButton variant="primary" className="mt-4 w-full">
                  Simular
                </CatlifeButton>
              </CatlifeCard>
            </div>
          </div>
        </section>

        {/* CSS Variables Reference */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-catlife-text-primary">CSS Variables Reference</h2>
          <div className="rounded-lg border-[3px] border-catlife-border bg-catlife-text-primary p-6">
            <pre className="overflow-x-auto text-sm text-catlife-text-inverse">
              <code>{`/* Primary Colors */
--catlife-primary: #f49834
--catlife-primary-hover: #f99830
--catlife-primary-active: #f27100
--catlife-primary-light: #ffd094
--catlife-primary-lightest: #ffeed6

/* Backgrounds */
--catlife-background: #fffaf4
--catlife-background-alt: #fffaf3
--catlife-surface: #ffffff

/* Text Colors */
--catlife-text-primary: #161616
--catlife-text-secondary: #1c1b1f
--catlife-text-muted: #292625
--catlife-text-inverse: #ffffff
--catlife-text-variant-1: #151515
--catlife-text-variant-2: #161617

/* Accents */
--catlife-accent-success: #10b981

/* Usage in Tailwind */
bg-catlife-primary
text-catlife-text-primary
text-catlife-text-inverse
border-catlife-border`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

function ColorCard({
  color,
  name,
  hex,
  token,
  description,
  textColor = "text-catlife-text-primary",
}: {
  color: string
  name: string
  hex: string
  token: string
  description: string
  textColor?: string
}) {
  return (
    <div className="space-y-3">
      <div className={`h-32 rounded-lg border-[3px] border-catlife-border ${color}`} />
      <div className="space-y-1">
        <p className={`font-bold ${textColor}`}>{name}</p>
        <p className="font-mono text-xs text-catlife-text-secondary">{hex}</p>
        <p className="font-mono text-xs text-catlife-text-muted">{token}</p>
        <p className="text-sm text-catlife-text-secondary">{description}</p>
      </div>
    </div>
  )
}
