const stats = [
  { label: "Inventory precision", value: "100%" },
  { label: "Barcode-ready items", value: "Every piece" },
  { label: "Daily sales clarity", value: "Instant" },
  { label: "Future branches", value: "Multi-store" },
];

const coreConcepts = [
  {
    title: "Item-level inventory",
    description:
      "Every jewelry piece is tracked as a unique item with its own barcode — no quantity-based stock counts.",
  },
  {
    title: "Smart barcode logic",
    description:
      "Prefixes auto-detect the category (RNG, BRL, NKL, EAR, FSET) and validate each entry.",
  },
  {
    title: "Full Set structure (FSET)",
    description:
      "Sets contain necklace, bracelet, earrings, and ring sub-items that can be sold together or separately.",
  },
];

const roles = [
  {
    title: "Admin",
    description: "Full control over users, inventory edits, reports, and backups.",
  },
  {
    title: "Staff",
    description: "Add items, mark sales, and view inventory with no delete access.",
  },
  {
    title: "Viewer",
    description: "Read-only access for dashboards, inventory, and reports.",
  },
];

const inventoryFeatures = [
  "Barcode validation & auto category detection",
  "Item details: weight, material, stone type, cost, price",
  "Status control: Available, Sold, Reserved",
  "Linked Full Set support with smart validation",
  "Fast search, filters, sorting, and pagination",
];

const salesFeatures = [
  "Scan barcode to sell with timestamp and payment method",
  "Optional invoice number and customer name",
  "Auto-update FSET status to partially sold or sold",
  "Daily reconciliation with revenue and category totals",
];

const analytics = [
  {
    title: "Main dashboard",
    points: [
      "Total inventory count",
      "Available vs sold items",
      "Total inventory value",
      "Today & month sales",
    ],
  },
  {
    title: "Advanced analytics",
    points: [
      "Best-selling categories",
      "Average selling price",
      "Inventory aging insights",
      "High-value unsold items",
    ],
  },
];

const reporting = [
  "Inventory snapshots in CSV / Excel",
  "Sales reports with FSET breakdown",
  "Backup scheduling and one-click restore",
  "Audit log for item and user actions",
];

const systemSettings = [
  "Manage barcode prefixes",
  "Enable/disable FSET logic",
  "Set default currency",
  "Configure VAT (future-ready)",
  "Manage payment methods",
];

const roadmap = [
  "Multi-branch support with cloud sync",
  "Mobile barcode scanning",
  "Customer database and repair tracking",
  "Supplier management and diamond certificates",
  "Weight-based price automation",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <header className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-2xl">
                💎
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                  Jewelry Inventory Platform
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-white">
                  MUD Inventory & Sales Management
                </h1>
              </div>
            </div>
            <span className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 md:inline">
              Optimized for gold & diamond businesses
            </span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Piece-level control for every barcode, every sale, every set.
              </h2>
              <p className="text-lg text-white/70">
                Replace traditional POS systems with a jewelry-first platform that tracks
                individual pieces, understands full sets, and provides real-time insight
                into inventory, sales, and profitability.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  Item-level tracking
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  Smart FSET handling
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  Audit-ready accuracy
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  Multi-branch ready
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6">
              <h3 className="text-lg font-semibold">Today&apos;s snapshot</h3>
              <div className="mt-6 grid gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <span className="text-sm text-white/70">{stat.label}</span>
                    <span className="text-lg font-semibold text-amber-300">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/60">
                Designed to help small and medium jewelry stores scale with confidence.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {coreConcepts.map((concept) => (
            <div
              key={concept.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{concept.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {concept.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                Roles & permissions
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Access that matches the showroom.</h2>
            </div>
            <p className="max-w-xl text-sm text-white/60">
              Protect sensitive operations while keeping staff workflows fast and clear.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                <p className="mt-3 text-sm text-white/70">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Inventory management</h2>
            <p className="mt-3 text-sm text-white/70">
              Add, validate, and search every piece with confidence. The system prevents
              duplicates, protects FSET integrity, and keeps the floor team in sync.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {inventoryFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Sales management</h2>
            <p className="mt-3 text-sm text-white/70">
              Close sales in seconds while keeping full sets aligned with your inventory.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {salesFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-black/80 via-black/40 to-black/80 p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {analytics.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <ul className="mt-4 grid gap-3 text-sm text-white/70">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Reporting & backup</h2>
            <p className="mt-3 text-sm text-white/70">
              Export, audit, and restore in one place so you can answer any question in
              seconds.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {reporting.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Audit & security</h2>
            <p className="mt-3 text-sm text-white/70">
              Every action is logged with timestamps and user references, and every flow
              is validated to prevent errors.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Audit log</p>
                <p className="mt-2">
                  Track item creation, edits, sales, and user activity for full
                  accountability.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Role-based security</p>
                <p className="mt-2">
                  Login authentication with permissions ensures sensitive actions are
                  protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">System settings</h2>
            <p className="mt-3 text-sm text-white/70">
              Configure barcode rules, payment methods, and compliance preferences.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {systemSettings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Future-ready enhancements</h2>
            <p className="mt-3 text-sm text-white/70">
              Expand when you are ready with modular features built for the jewelry
              industry.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {roadmap.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-16 rounded-3xl border border-white/10 bg-black/60 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Business-grade inventory clarity.</h2>
              <p className="mt-2 text-sm text-white/70">
                Built to deliver auditability, accuracy, and real-time visibility for every
                jewelry store.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/20 px-4 py-2">
                Real-time inventory
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Smart FSET logic
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Export-ready reporting
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
