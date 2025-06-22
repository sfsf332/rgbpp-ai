import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Book, Code, Cpu, FileText, Zap, Network, Bitcoin, Layers, Shield, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating particles */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div> */}

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Network className="h-10 w-10 text-blue-400 animate-pulse" />
                <div className="absolute inset-0 h-10 w-10 text-blue-400 animate-ping opacity-20">
                  <Network className="h-10 w-10" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RGB++ Protocol
                </h1>
                <p className="text-xs text-gray-400">Advanced Network Manual</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {["Introduction", "Concepts", "Examples", "Components", "Quick Start"].map((item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105">
              <Bitcoin className="w-4 h-4 mr-2 animate-spin-slow" />
              RGB++ Protocol
            </Badge>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
              Bitcoin Meets
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Programmability
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Master the RGB++ Protocol with comprehensive technical documentation covering Bitcoin UTXO binding, CKB
              Scripts, and revolutionary cross-chain asset management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              variant="gradient"
              effect="glow"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              effect="scale"
            >
              <Code className="mr-2 h-5 w-5" />
              View Source Code
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">Explore RGB++ Components</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Dive deep into the revolutionary technology that bridges Bitcoin and CKB
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Technical Introduction",
                description: "Comprehensive overview of RGB++ Protocol fundamentals and Bitcoin-CKB binding",
                href: "/introduction",
                gradient: "from-blue-500 to-cyan-500",
                delay: "animation-delay-100",
              },
              {
                icon: Code,
                title: "Source Code",
                description: "Complete RGB++ implementation with detailed code explanations and examples",
                href: "/source-code",
                gradient: "from-green-500 to-emerald-500",
                delay: "animation-delay-200",
              },
              {
                icon: Cpu,
                title: "Core Concepts",
                description: "Essential concepts including single-use seals, isomorphic binding, and UTXO management",
                href: "/concepts",
                gradient: "from-purple-500 to-pink-500",
                delay: "animation-delay-300",
              },
              {
                icon: FileText,
                title: "Standard Examples",
                description: "Real-world RGB++ implementation examples including UDT operations and transfers",
                href: "/examples",
                gradient: "from-orange-500 to-red-500",
                delay: "animation-delay-400",
              },
              {
                icon: Network,
                title: "Core Components",
                description: "Detailed breakdown of RGB++ Scripts, SPV Service, SDK, and btc-assets-api",
                href: "/components",
                gradient: "from-red-500 to-pink-500",
                delay: "animation-delay-500",
              },
              {
                icon: Zap,
                title: "Quick Start",
                description: "Get up and running with RGB++ UDT issuance, transfers, and CKB integration",
                href: "/quickstart",
                gradient: "from-yellow-500 to-orange-500",
                delay: "animation-delay-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 animate-fade-in-up ${item.delay}`}
              >
                <CardHeader className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500`}
                  ></div>
                  <div className="flex items-center space-x-3 relative z-10">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={item.href}>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 text-slate-600"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Technology</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience the power of Bitcoin-CKB integration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bitcoin,
                title: "Bitcoin Security",
                description: "Leverage Bitcoin's proof-of-work security for asset protection",
                metric: "99.99%",
                metricLabel: "Uptime",
              },
              {
                icon: Layers,
                title: "Isomorphic Binding",
                description: "One-to-one mapping between Bitcoin UTXOs and CKB Cells",
                metric: "1:1",
                metricLabel: "UTXO Binding",
              },
              {
                icon: Shield,
                title: "Single-Use Seals",
                description: "Cryptographic commitments preventing double-spending",
                metric: "100%",
                metricLabel: "Security",
              },
              {
                icon: Globe,
                title: "Cross-Chain",
                description: "Seamless asset transfers between Bitcoin and CKB",
                metric: "<1s",
                metricLabel: "Confirmation",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.metric}</h3>
                <p className="text-blue-400 text-sm mb-4 font-medium">{item.metricLabel}</p>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm leading-relaxed text-slate-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Start your journey with RGB++ Protocol and become proficient in revolutionary Bitcoin-CKB asset
                management.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  variant="gradient"
                  effect="glow"
                  className="px-8 py-4 text-lg"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="glass"
                  effect="scale"
                  className="px-8 py-4 text-lg"
                >
                  <Book className="mr-2 h-5 w-5" />
                  Download Manual
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 text-white py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <Network className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RGB++ Protocol
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your comprehensive guide to revolutionary Bitcoin-CKB asset protocol implementation.
              </p>
            </div>

            {[
              {
                title: "Documentation",
                links: ["Introduction", "Core Concepts", "Examples", "Components"],
              },
              {
                title: "Resources",
                links: ["Source Code", "Quick Start", "API Reference", "Tutorials"],
              },
              {
                title: "Support",
                links: ["Help Center", "Community", "Contact", "Updates"],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <h3 className="font-semibold mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 animate-fade-in-up animation-delay-800">
            <p>&copy; {new Date().getFullYear()} RGB++ Protocol Manual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
