import React from "react";

export default function EmergentFree() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Emergent.sh — Everything Free</h1>
        <nav className="flex gap-6 text-gray-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How It Works</a>
          <a href="#get" className="hover:text-white">Get Started</a>
        </nav>
      </header>

      <section className="text-center py-24 px-4">
        <h2 className="text-5xl font-bold mb-6">Build Apps from Words — 100% Free</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Describe your idea in plain English, and Emergent.sh will instantly build a full-stack web app — frontend, backend, database, auth, and hosting. All features unlocked. All free.
        </p>
        <a href="#get" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition">
          Start Building Now
        </a>
      </section>

      <section id="features" className="px-8 py-20 bg-gray-800 border-t border-gray-700">
        <h3 className="text-3xl font-bold mb-10 text-center">Everything You Need — No Paywalls</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Natural Language to Code", desc: "Describe your app idea — we build it instantly with full-stack logic." },
            { title: "Full Deployment Included", desc: "Every app is deployed live to production instantly, no setup needed." },
            { title: "Database + Auth Ready", desc: "Built-in database schema, authentication, and secure APIs by default." },
            { title: "Zero Cost, Zero Limits", desc: "Unlimited projects, no hidden tiers or message caps." },
            { title: "AI Refactoring & Updates", desc: "Emergent keeps your code clean and up to date automatically." },
            { title: "SaaS Integrations Ready", desc: "Stripe, Mailgun, Twilio, and more — just type what you need." },
          ].map((f, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">{f.title}</h4>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">How It Works</h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Just type what you want — “a travel planner with maps and weather forecasts” — and Emergent.sh generates a deployable app with code, hosting, and integrations instantly.
        </p>
        <ol className="text-left max-w-2xl mx-auto space-y-6 text-lg text-gray-200">
          <li>1️⃣ Describe your app idea in one sentence.</li>
          <li>2️⃣ Watch the AI generate the code, UI, and backend instantly.</li>
          <li>3️⃣ Customize, preview, and deploy — no coding required.</li>
        </ol>
      </section>

      <section id="get" className="px-8 py-24 bg-blue-700 text-center">
        <h3 className="text-3xl font-bold mb-6">Try Emergent.sh — Free Forever</h3>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands building real apps from simple ideas. No credit card. No limits.
        </p>
        <a href="#" className="bg-white text-blue-700 hover:bg-blue-100 px-10 py-4 rounded-2xl font-semibold text-lg">
          Launch Emergent Now
        </a>
      </section>

      <footer className="text-center py-10 text-gray-400 border-t border-gray-700">
        <p>© 2025 Emergent.sh — Built for everyone, with everything free.</p>
      </footer>
    </div>
  );
}
