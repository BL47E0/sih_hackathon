"use client";

import Link from "next/link";

const approvals = [
  {
    name: "Factory License",
    authority: "Directorate of Industrial Safety & Health",
    status: "Completed",
    color: "emerald",
  },
  {
    name: "MPCB Consent to Establish",
    authority: "Maharashtra Pollution Control Board",
    status: "Pending",
    color: "amber",
  },
  {
    name: "Fire NOC",
    authority: "Local Fire Authority",
    status: "Blocked",
    color: "red",
  },
  {
    name: "Building Plan Approval",
    authority: "Local Planning Authority",
    status: "Pending",
    color: "amber",
  },
];

const schemes = [
  {
    name: "Maharashtra Industrial Incentive Scheme",
    match: "92%",
    reason: "Matches your industry, location and investment profile.",
  },
  {
    name: "MSME Capital Subsidy",
    match: "84%",
    reason: "Eligible based on your MSME classification and project stage.",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-cyan-400">
              INDUSTRIA
            </div>
            <div className="text-xs text-slate-500">
              Industrial Compliance Intelligence
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">Project Intelligence</p>
              <p className="text-xs text-slate-500">
                Maharashtra Industrial Ecosystem
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-8 py-8">
        {/* Project heading */}
        <section className="mb-8">
          <Link
            href="/"
            className="mb-4 inline-block text-xs font-medium text-slate-500 transition hover:text-cyan-400"
          >
            ← Project Setup
          </Link>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                PROJECT INTELLIGENCE
              </p>

              <h1 className="text-3xl font-semibold tracking-tight">
                Acme Manufacturing Plant
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Automotive Components · Pune · MSME · ₹25 Cr Investment
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3">
              <p className="text-xs text-slate-500">Project Stage</p>
              <p className="mt-1 text-sm font-medium text-white">
                Pre-Establishment
              </p>
            </div>
          </div>
        </section>

        {/* Summary cards */}
        <section className="grid gap-4 md:grid-cols-4">
          <SummaryCard
            label="Applicable Approvals"
            value="12"
            sub="identified for this project"
          />

          <SummaryCard
            label="Completed"
            value="4"
            sub="33% of approval roadmap"
          />

          <SummaryCard
            label="At Risk"
            value="2"
            sub="requires attention"
            alert
          />

          <SummaryCard
            label="Compliance Risk"
            value="Medium"
            sub="based on current project state"
            warning
          />
        </section>

        {/* Main grid */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Approval roadmap */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">Approval Roadmap</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Dependency-aware view of your regulatory approvals
                  </p>
                </div>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  4 / 12 complete
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-1/3 rounded-full bg-cyan-400" />
              </div>
            </div>

            <div className="divide-y divide-slate-800">
              {approvals.map((approval, index) => (
                <ApprovalRow
                  key={approval.name}
                  number={index + 1}
                  {...approval}
                />
              ))}
            </div>

            <div className="border-t border-slate-800 px-6 py-4">
                <Link
                    href="/dashboard/roadmap"
                    className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                    View full approval roadmap →
                </Link>
            </div>
          </div>

          {/* Next best action */}
          <div className="rounded-xl border border-cyan-900/60 bg-cyan-950/20">
            <div className="border-b border-cyan-900/50 px-6 py-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan-400">
                INTELLIGENCE
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Next Best Action
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Based on your project profile and approval dependencies.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                →
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Recommended next step
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                Complete MPCB Consent to Establish
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                This approval is currently available to proceed and is a
                prerequisite for downstream environmental compliance steps.
              </p>

              <div className="mt-5 rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-medium text-slate-500">
                  WHY THIS ACTION?
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>• No unresolved prerequisite detected</li>
                  <li>• Required for 2 downstream approvals</li>
                  <li>• Currently on the project critical path</li>
                </ul>
              </div>

              <button className="mt-5 w-full rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                View Requirements →
              </button>
            </div>
          </div>
        </section>

        {/* Lower section */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Risk */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold">Compliance Risk Radar</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Issues that may affect project progress
                </p>
              </div>

              <span className="rounded-full border border-amber-900/50 bg-amber-950/30 px-3 py-1 text-xs font-medium text-amber-400">
                MEDIUM RISK
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <RiskItem
                title="Fire NOC is blocked"
                description="Building Plan Approval must be completed first."
                severity="High"
              />

              <RiskItem
                title="2 documents approaching expiry"
                description="Renewal should be initiated before submission."
                severity="Medium"
              />

              <RiskItem
                title="Environmental approval pending"
                description="May affect downstream project milestones."
                severity="Medium"
              />
            </div>
          </div>

          {/* Schemes */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold">Recommended Support</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Government schemes matched to your project
                </p>
              </div>

              <button className="text-xs font-medium text-cyan-400">
                View all
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {schemes.map((scheme) => (
                <div
                  key={scheme.name}
                  className="rounded-lg border border-slate-800 bg-slate-950/50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-medium">{scheme.name}</h3>

                    <span className="shrink-0 text-xs font-semibold text-emerald-400">
                      {scheme.match} match
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {scheme.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SummaryCard({
  label,
  value,
  sub,
  alert,
  warning,
}: {
  label: string;
  value: string;
  sub: string;
  alert?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p
        className={`mt-3 text-3xl font-semibold ${
          alert
            ? "text-red-400"
            : warning
              ? "text-amber-400"
              : "text-white"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </div>
  );
}

function ApprovalRow({
  number,
  name,
  authority,
  status,
  color,
}: {
  number: number;
  name: string;
  authority: string;
  status: string;
  color: string;
}) {
  const statusClasses: Record<string, string> = {
    emerald: "bg-emerald-950/40 text-emerald-400 border-emerald-900/50",
    amber: "bg-amber-950/40 text-amber-400 border-amber-900/50",
    red: "bg-red-950/40 text-red-400 border-red-900/50",
  };

  return (
    <div className="flex items-center gap-4 px-6 py-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-400">
        {number}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="mt-1 truncate text-xs text-slate-500">{authority}</p>
      </div>

      <span
        className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[color]}`}
      >
        {status}
      </span>
    </div>
  );
}

function RiskItem({
  title,
  description,
  severity,
}: {
  title: string;
  description: string;
  severity: string;
}) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-800 bg-slate-950/40 p-4">
      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />

      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium">{title}</p>

          <span className="text-xs text-slate-600">{severity}</span>
        </div>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}