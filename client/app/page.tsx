"use client";

import { useState } from "react";

export default function Home() {
  const [industry, setIndustry] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [stage, setStage] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              INDUSTRIA
            </h1>
            <p className="text-xs text-slate-400">
              Industrial Compliance Intelligence
            </p>
          </div>

          <div className="text-sm text-slate-400">
            Maharashtra Industrial Ecosystem
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Project Intelligence
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Set up your industrial project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Tell us about your project and we'll build a personalized
            approval, compliance and support roadmap.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          <div className="mb-8">
            <h3 className="text-xl font-semibold">
              Project Information
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Provide the basic details of your proposed industrial project.
            </p>
          </div>

          <div className="space-y-6">

            {/* Project / Company name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Project / Company Name
              </label>

              <input
                type="text"
                placeholder="e.g. ABC Manufacturing Pvt Ltd"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Industry + Business Type */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Industry
                </label>

                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="food">Food Processing</option>
                  <option value="textile">Textiles</option>
                  <option value="automotive">Automotive</option>
                  <option value="electronics">Electronics</option>
                  <option value="pharmaceutical">Pharmaceuticals</option>
                  <option value="chemical">Chemicals</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Business Type
                </label>

                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select business type</option>
                  <option value="msme">MSME</option>
                  <option value="large">Large Enterprise</option>
                  <option value="startup">Startup</option>
                </select>
              </div>

            </div>

            {/* Location + Investment */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Location / District
                </label>

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select district</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="nashik">Nashik</option>
                  <option value="nagpur">Nagpur</option>
                  <option value="aurangabad">Chhatrapati Sambhajinagar</option>
                  <option value="thane">Thane</option>
                  <option value="kolhapur">Kolhapur</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Investment
                </label>

                <div className="flex">
                  <span className="flex items-center rounded-l-lg border border-r-0 border-slate-700 bg-slate-800 px-4 text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    placeholder="25"
                    className="w-full rounded-r-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                  />

                  <span className="ml-2 flex items-center text-sm text-slate-500">
                    Crore
                  </span>
                </div>
              </div>

            </div>

            {/* Stage + Capacity */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Stage
                </label>

                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select project stage</option>
                  <option value="pre-establishment">
                    Pre-Establishment
                  </option>
                  <option value="construction">
                    Under Construction
                  </option>
                  <option value="operational">
                    Operational
                  </option>
                  <option value="expansion">
                    Expansion
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Production / Capacity
                </label>

                <input
                  type="text"
                  placeholder="e.g. 50,000 units/year"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-slate-800 pt-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Ready to analyze?
                  </p>

                  <p className="text-xs text-slate-500">
                    We'll identify applicable approvals, dependencies and
                    support schemes.
                  </p>
                </div>

                <button
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                >
                  Analyze Project →
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Regulatory recommendations are based on the project's provided
          information and versioned regulatory knowledge.
        </p>
      </section>
    </main>
  );
}