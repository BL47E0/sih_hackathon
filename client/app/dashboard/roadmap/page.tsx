"use client";

import Link from "next/link";

const roadmap = [
  {
    id: 1,
    name: "Project Registration",
    authority: "MAITRI / Investment Facilitation",
    status: "completed",
    description: "Initial registration and project profile submission.",
  },
  {
    id: 2,
    name: "Land / Building Approval",
    authority: "Local Planning Authority",
    status: "completed",
    description: "Approval of proposed industrial premises and building plan.",
  },
  {
    id: 3,
    name: "MPCB Consent to Establish",
    authority: "Maharashtra Pollution Control Board",
    status: "available",
    description: "Environmental consent required before establishing the facility.",
    critical: true,
  },
  {
    id: 4,
    name: "Fire NOC",
    authority: "Local Fire Authority",
    status: "blocked",
    description: "Fire safety clearance for the proposed industrial facility.",
    blockedBy: "Land / Building Approval",
  },
  {
    id: 5,
    name: "Factory License",
    authority: "Directorate of Industrial Safety & Health",
    status: "blocked",
    description: "License required before commencing regulated factory operations.",
    blockedBy: "MPCB Consent to Establish",
  },
  {
    id: 6,
    name: "Consent to Operate",
    authority: "Maharashtra Pollution Control Board",
    status: "blocked",
    description: "Operational environmental consent after establishment.",
    blockedBy: "MPCB Consent to Establish",
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-cyan-400">
              INDUSTRIA
            </div>
            <div className="text-xs text-slate-500">
              Industrial Compliance Intelligence
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium">Approval Intelligence</p>
            <p className="text-xs text-slate-500">
              Maharashtra Industrial Ecosystem
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-8 py-8">
        {/* Breadcrumb */}
        <Link
          href="/dashboard"
          className="text-xs font-medium text-slate-500 transition hover:text-cyan-400"
        >
          ← Back to Dashboard
        </Link>

        {/* Heading */}
        <section className="mt-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
            DEPENDENCY INTELLIGENCE
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Approval Roadmap
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                A dependency-aware view of the approvals required for your
                project, including prerequisites, blocked steps and the
                current critical path.
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900 px-5 py-3">
              <p className="text-xs text-slate-500">Roadmap Progress</p>
              <p className="mt-1 text-lg font-semibold">2 / 6</p>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="mt-8 flex flex-wrap gap-3">
          <LegendDot color="bg-emerald-400" label="Completed" />
          <LegendDot color="bg-cyan-400" label="Ready to proceed" />
          <LegendDot color="bg-red-400" label="Blocked" />
          <LegendDot color="bg-amber-400" label="Critical path" />
        </section>

        {/* Roadmap */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <div className="mx-auto max-w-4xl">
            {roadmap.map((approval, index) => (
              <div key={approval.id}>
                <RoadmapNode approval={approval} />

                {index < roadmap.length - 1 && (
                  <div className="ml-6 h-10 border-l border-dashed border-slate-700" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence explanation */}
        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Why is this blocked?"
            text="Blocked approvals are linked to unresolved prerequisites instead of being treated as independent checklist items."
          />

          <InfoCard
            title="What's on the critical path?"
            text="Critical-path approvals can delay multiple downstream activities and therefore receive higher priority."
          />

          <InfoCard
            title="What's next?"
            text="The system identifies approvals that are currently actionable and recommends the highest-value next step."
          />
        </section>
      </div>
    </main>
  );
}

function RoadmapNode({
  approval,
}: {
  approval: {
    id: number;
    name: string;
    authority: string;
    status: string;
    description: string;
    critical?: boolean;
    blockedBy?: string;
  };
}) {
  const statusConfig: Record<
    string,
    {
      label: string;
      dot: string;
      border: string;
      background: string;
      text: string;
    }
  > = {
    completed: {
      label: "Completed",
      dot: "bg-emerald-400",
      border: "border-emerald-900/60",
      background: "bg-emerald-950/20",
      text: "text-emerald-400",
    },
    available: {
      label: "Ready to proceed",
      dot: "bg-cyan-400",
      border: "border-cyan-900/60",
      background: "bg-cyan-950/20",
      text: "text-cyan-400",
    },
    blocked: {
      label: "Blocked",
      dot: "bg-red-400",
      border: "border-red-900/50",
      background: "bg-red-950/10",
      text: "text-red-400",
    },
  };

  const config = statusConfig[approval.status];

  return (
    <div
      className={`relative rounded-xl border p-5 ${config.border} ${config.background}`}
    >
      <div className="flex gap-4">
        {/* Node */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950`}
        >
          <div className={`h-3 w-3 rounded-full ${config.dot}`} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold">{approval.name}</h2>

                {approval.critical && (
                  <span className="rounded-full border border-amber-900/50 bg-amber-950/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                    Critical Path
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {approval.authority}
              </p>
            </div>

            <span
              className={`w-fit rounded-full border border-slate-700 px-3 py-1 text-xs font-medium ${config.text}`}
            >
              {config.label}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            {approval.description}
          </p>

          {approval.blockedBy && (
            <div className="mt-4 rounded-lg border border-red-900/40 bg-red-950/20 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-400">
                BLOCKED BY
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {approval.blockedBy}
              </p>
            </div>
          )}

          {approval.status === "available" && (
            <button className="mt-4 rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300">
              View Requirements →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function LegendDot({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-2">
      <div className={`h-2 w-2 rounded-full ${color}`} />
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
      <h3 className="text-sm font-semibold">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
    </div>
  );
}