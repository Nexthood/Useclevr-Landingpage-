export default function Home() { return ( <main className="min-h-screen overflow-hidden bg-[#070812] text-white"> <section className="relative min-h-screen px-6 py-8 sm:px-10 lg:px-16"> <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" /> <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-3xl" />

<nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_35px_rgba(34,211,238,0.35)]">
          <div className="absolute -right-1 top-1 h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
        </div>
        <span className="text-xl font-semibold tracking-tight">UseClevr</span>
      </div>

      <a
        href="mailto:start@useclevr.com?subject=UseClevr%20Founders%20Beta%20Access"
        className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
      >
        Request Access
      </a>
    </nav>

    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:pt-28">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
          Private Beta Opening Soon
        </div>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Turn messy spreadsheets into clear business decisions.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
          UseClevr transforms CSV and Excel files into verified KPIs, charts, trends and AI executive insights in seconds.
        </p>

        <form
          action="https://formsubmit.co/start@useclevr.com"
          method="POST"
          className="mt-9 max-w-xl rounded-3xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur"
        >
          <input type="hidden" name="_subject" value="New UseClevr Founders Beta request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-black/25 px-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/50"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 text-sm font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
            >
              Join Founders’ Beta
            </button>
          </div>

          <p className="mt-3 px-2 text-xs text-white/42">
            Private beta access. No spam — only launch updates and early invites.
          </p>
        </form>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="#how-it-works"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See how it works
          </a>
          <a
            href="mailto:start@useclevr.com?subject=UseClevr%20Founders%20Beta%20Access"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white/70 backdrop-blur transition hover:bg-white/10"
          >
            Contact directly
          </a>
        </div>

        <p className="mt-7 text-sm text-white/45">
          Verified calculations first. AI insights second.
        </p>
      </div>

      <div id="how-it-works" className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-blue-500/20 blur-2xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_0.58fr_1fr]">
            <div className="animate-float rounded-3xl border border-white/10 bg-black/30 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">sales_data.csv</p>
                  <p className="text-xs text-white/40">Raw business data</p>
                </div>
                <span className="rounded-full bg-red-400/10 px-3 py-1 text-xs text-red-200">messy</span>
              </div>

              <div className="space-y-2 text-xs text-white/65">
                <div className="grid grid-cols-4 gap-2 rounded-xl bg-white/[0.04] p-2 text-white/40">
                  <span>Date</span>
                  <span>Region</span>
                  <span>Rev€</span>
                  <span>Cost</span>
                </div>
                {[
                  ['03/01', 'DE', '4,200', '1,900'],
                  ['03/02', 'FR', '3,800', '2,100'],
                  ['03/03', 'UK', '6,100', '2,900'],
                  ['03/04', 'DE', '5,600', '2,300'],
                ].map((row) => (
                  <div key={row.join('-')} className="grid grid-cols-4 gap-2 rounded-xl bg-white/[0.03] p-2">
                    {row.map((cell) => (
                      <span key={cell}>{cell}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center py-2 lg:py-0">
              <div className="relative flex h-full min-h-48 w-full items-center justify-center">
                <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300/0 lg:block" />
                <div className="absolute h-24 w-24 animate-ping rounded-full bg-cyan-300/10" />
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-center shadow-[0_0_45px_rgba(34,211,238,0.25)] backdrop-blur">
                  <span className="text-sm font-semibold text-cyan-100">UseClevr</span>
                  <span className="mt-1 text-xs text-cyan-100/55">AI</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
              <div className="mb-4">
                <p className="text-sm font-semibold text-white">Executive clarity</p>
                <p className="text-xs text-white/40">Verified KPI output</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <KpiCard label="Revenue" value="€128.4K" delay="animation-delay-0" />
                <KpiCard label="Gross Margin" value="42.8%" delay="animation-delay-200" />
                <KpiCard label="Top Region" value="Germany" delay="animation-delay-400" />
                <KpiCard label="Risk" value="Margin pressure" delay="animation-delay-600" />
              </div>

              <div className="mt-4 animate-reveal rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">AI Insight</p>
                <p className="text-sm leading-6 text-white/72">
                  Revenue is growing, but margin is under pressure in two regions. Focus on product mix and cost control before scaling further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto mt-16 grid max-w-7xl gap-4 pb-10 sm:grid-cols-3">
      <Feature title="Upload CSV/Excel" text="Bring messy business files without building a BI stack first." />
      <Feature title="Verified KPIs" text="Revenue, profit, margin and growth calculated before AI explains anything." />
      <Feature title="Executive Insights" text="Clear summaries, risks and next actions for founders and business teams." />
    </div>
  </section>
</main>

) }

function KpiCard({ label, value, delay }: { label: string; value: string; delay: string }) { return ( <div className={animate-rise rounded-2xl border border-white/10 bg-white/[0.06] p-3 ${delay}}> <p className="text-xs text-white/40">{label}</p> <p className="mt-1 text-lg font-semibold text-white">{value}</p> </div> ) }

function Feature({ title, text }: { title: string; text: string }) { return ( <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur"> <h3 className="font-semibold text-white">{title}</h3> <p className="mt-2 text-sm leading-6 text-white/55">{text}</p> </div> ) }
