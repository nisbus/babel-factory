'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Babel Factory
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">How It Works</a>
              <a href="#technology" className="text-gray-700 hover:text-primary-600 transition">Technology</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition">FAQ</a>
            </div>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Launch Your SaaS in{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                7 Days
              </span>
              <br />
              Not 7 Months
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered rapid development with battle-tested architecture.
              <br />
              Multi-tenancy, authentication, and billing included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </a>
              <a
                href="#how-it-works"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition"
              >
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-primary-600">5-7 Days</div>
                <div className="text-gray-600 mt-2">Average Time to Launch</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-primary-600">99.9%</div>
                <div className="text-gray-600 mt-2">Uptime Guarantee</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600 mt-2">API Endpoints Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built on Proven Success</h2>
            <p className="text-xl text-gray-600">Our battle-tested architecture powers real production applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BabelStats */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-primary-600 text-4xl font-bold mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BabelStats</h3>
              <p className="text-gray-600 mb-4">
                Time-series data analysis platform processing millions of data points daily from ECB, OECD, World Bank, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Multi-tenant architecture</li>
                <li>✓ Real-time data processing</li>
                <li>✓ Auth0 + Stripe integrated</li>
                <li>✓ Advanced analytics engine</li>
              </ul>
            </div>

            {/* SignalX */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-secondary-600 text-4xl font-bold mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SignalX</h3>
              <p className="text-gray-600 mb-4">
                Algorithmic trading signals platform with WebSocket streaming, delivering real-time trading signals to subscribers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Real-time WebSocket streaming</li>
                <li>✓ Subscription management</li>
                <li>✓ Complex event processing</li>
                <li>✓ Custom signal algorithms</li>
              </ul>
            </div>

            {/* BabelLogic */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-primary-600 text-4xl font-bold mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BabelLogic</h3>
              <p className="text-gray-600 mb-4">
                AI reasoning server using Prolog on Erlang, providing logical inference capabilities to AI models via MCP protocol.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Mathematical reasoning</li>
                <li>✓ Temporal logic verification</li>
                <li>✓ Knowledge synthesis</li>
                <li>✓ Plugin architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">From idea to production in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">1-hour call to understand your vision, requirements, and business goals</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blueprint</h3>
              <p className="text-gray-600">Detailed spec, timeline, and pricing delivered within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-600">AI-assisted development sprint with daily updates and demos</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Deployed, live, with full documentation and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built on Rock-Solid Technology</h2>
            <p className="text-xl text-primary-100">The same tech powering WhatsApp, Discord, and RabbitMQ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Erlang/OTP Backend</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-primary-300 mr-3 text-2xl">⚡</span>
                  <div>
                    <strong>Fault Tolerant:</strong> Self-healing systems that never go down
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-3 text-2xl">🚀</span>
                  <div>
                    <strong>Massively Concurrent:</strong> Handle millions of concurrent connections
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-3 text-2xl">📈</span>
                  <div>
                    <strong>Infinitely Scalable:</strong> From MVP to enterprise without rewriting
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-3 text-2xl">🔄</span>
                  <div>
                    <strong>Hot Code Reloading:</strong> Zero-downtime deployments
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Modern Frontend</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 text-2xl">⚛️</span>
                  <div>
                    <strong>Next.js + React:</strong> Fast, SEO-friendly, modern UI
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 text-2xl">🎨</span>
                  <div>
                    <strong>Tailwind CSS:</strong> Beautiful, responsive design
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 text-2xl">📱</span>
                  <div>
                    <strong>Mobile First:</strong> Works perfectly on all devices
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 text-2xl">🔒</span>
                  <div>
                    <strong>TypeScript:</strong> Type-safe, maintainable code
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What&apos;s Included Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need, Included</h2>
            <p className="text-xl text-gray-600">Complete SaaS infrastructure out of the box</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👥', title: 'Multi-Tenant Architecture', desc: 'Serve unlimited customers from one deployment' },
              { icon: '🔐', title: 'Auth0 Authentication', desc: 'Enterprise-grade auth with RBAC and SSO' },
              { icon: '💳', title: 'Stripe Billing', desc: 'Subscription management and payment processing' },
              { icon: '🗄️', title: 'PostgreSQL Database', desc: 'Reliable, scalable relational database' },
              { icon: '🔌', title: 'REST + WebSocket API', desc: 'Modern APIs for any client' },
              { icon: '⚛️', title: 'React Frontend', desc: 'Responsive, modern user interface' },
              { icon: '🚀', title: 'Auto Deployment', desc: 'CI/CD with Render or Vercel' },
              { icon: '🔒', title: 'SSL Certificates', desc: 'Automatic HTTPS encryption' },
              { icon: '📚', title: 'Documentation', desc: 'Complete API docs and guides' },
              { icon: '🛟', title: 'Post-Launch Support', desc: '2 weeks to 3 months included' },
              { icon: '📊', title: 'Admin Dashboard', desc: 'Manage users, billing, and metrics' },
              { icon: '✅', title: 'Automated Testing', desc: 'Unit, integration, and E2E tests' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* MVP Sprint */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MVP Sprint</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">$7.5K</div>
                <p className="text-gray-600">Perfect for startups</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">5-day development sprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">5 core features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Multi-tenant + Auth + Billing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Basic React frontend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Deployed on Render</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">2 weeks support</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                Get Started
              </a>
            </div>

            {/* Production Launch */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-2xl shadow-2xl transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-bold">
                POPULAR
              </div>
              <div className="text-center mb-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Production Launch</h3>
                <div className="text-5xl font-bold mb-2">$15K</div>
                <p className="text-primary-100">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>10-day development sprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>10-15 core features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Advanced RBAC & permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Custom UI/UX design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>API documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>1 month support + training</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Build */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Build</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">$35K+</div>
                <p className="text-gray-600">For complex systems</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Custom timeline (2-4 weeks)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Unlimited features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Load testing & optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">3 months premium support</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How is this different from no-code tools like Bubble or Webflow?',
                a: 'No-code tools are great for simple websites but struggle with complex business logic, scalability, and custom integrations. We write actual code using production-grade technologies (Erlang/OTP, React), giving you unlimited flexibility and the ability to scale to millions of users. You own the code and can modify it however you want.'
              },
              {
                q: 'What types of SaaS can you build?',
                a: 'We can build virtually any SaaS application: B2B platforms, marketplaces, analytics dashboards, workflow automation tools, data processing systems, API services, and more. Our specialty is multi-tenant applications with complex business logic, real-time features, and high performance requirements.'
              },
              {
                q: 'Do I own the code?',
                a: 'Absolutely! You own 100% of the code we write. We deliver the complete source code, documentation, and deployment scripts. You can modify it, hire your own developers to maintain it, or even resell it - it\'s yours.'
              },
              {
                q: 'What if I need changes or new features later?',
                a: 'We offer ongoing support and enhancement packages. You can hire us for additional features at our standard hourly rate, or set up a monthly retainer for continuous development and support. Many clients choose a maintenance retainer (10% of build cost/month) for ongoing support and minor updates.'
              },
              {
                q: 'Why Erlang/OTP? Why not Node.js or Python?',
                a: 'Erlang/OTP is battle-tested for building fault-tolerant, scalable systems. It powers WhatsApp (handling billions of messages), Discord (millions of concurrent users), and financial trading systems. While Node.js and Python are popular, Erlang excels at high-concurrency, real-time systems with built-in fault tolerance. You get enterprise-grade reliability from day one.'
              },
              {
                q: 'How do you build so fast?',
                a: 'We combine AI-assisted development (Claude Code), proven architecture templates, reusable components from our existing products, and 15+ years of Erlang/OTP expertise. We\'re not writing everything from scratch - we\'re assembling and customizing battle-tested building blocks.'
              },
              {
                q: 'What happens after launch?',
                a: 'All packages include post-launch support (2 weeks to 3 months depending on tier). We monitor the deployment, fix any issues, and provide documentation and training. After the support period ends, you can continue with a maintenance retainer or manage it yourself.'
              },
              {
                q: 'Can you integrate with my existing systems?',
                a: 'Yes! We specialize in integrations with payment processors (Stripe, PayPal), auth providers (Auth0, Firebase), databases (PostgreSQL, MongoDB), APIs (REST, GraphQL, WebSocket), and third-party services. Custom integrations are included in the Production Launch and Enterprise Build tiers.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your SaaS?</h2>
            <p className="text-xl text-primary-100">Book a free consultation and let&apos;s discuss your idea</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">Company (Optional)</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                placeholder="Acme Inc."
              />
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">Tell us about your idea</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                placeholder="I want to build a SaaS that..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Babel Factory</h3>
              <p className="text-gray-400">Building the future of SaaS, one project at a time.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">BabelStats</a></li>
                <li><a href="#" className="hover:text-white transition">SignalX</a></li>
                <li><a href="#" className="hover:text-white transition">BabelLogic</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="hover:text-white transition">Get in Touch</a></li>
                <li><a href="mailto:hello@babelfactory.io" className="hover:text-white transition">hello@babelfactory.io</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Babel Factory. Built with Erlang/OTP, React, and AI.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
