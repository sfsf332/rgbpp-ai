import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Book, Network, Layers, Zap, Bitcoin, Shield } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Network className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-blue-400 animate-ping opacity-20">
                  <Network className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RGB++ Protocol
                </h1>
                <p className="text-xs text-gray-400">Technical Introduction</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 group"
              >
                <ArrowLeft className="h-4 w-4 inline mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Technical Introduction</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up animation-delay-200">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 hover:scale-105 transition-transform duration-300">
            <Bitcoin className="w-4 h-4 mr-2 animate-spin-slow" />
            Technical Overview
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            RGB++ Protocol Introduction
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Welcome to the comprehensive technical introduction to the RGB++ Protocol. Discover the revolutionary
            technology that bridges Bitcoin's security with CKB's programmability through isomorphic binding.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up animation-delay-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Book className="h-5 w-5 text-white" />
                  </div>
                  <span>Technology Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-300">
                <p className="leading-relaxed mb-6">
                  RGB++ Protocol represents a paradigm shift in blockchain interoperability, establishing a
                  revolutionary binding between Bitcoin UTXOs and Turing-complete CKB Scripts. This innovative approach
                  leverages Bitcoin's unparalleled security while unlocking programmable capabilities previously
                  impossible on the Bitcoin network.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                  Key Innovations
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Single-use seal cryptographic commitments",
                    "Isomorphic UTXO-Cell binding",
                    "Cross-chain asset management",
                    "SPV-based verification",
                    "Turing-complete programmability",
                  ].map((innovation, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-200">{innovation}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-400" />
                  Technical Specifications
                </h3>
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10">
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3">
                      {[
                        { label: "Protocol Version", value: "RGB++ v1.0" },
                        { label: "Supported Networks", value: "Bitcoin + CKB" },
                        { label: "Security Model", value: "Bitcoin UTXO seals" },
                        { label: "Programmability", value: "CKB Scripts (RISC-V)" },
                      ].map((spec, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400">{spec.label}:</span>
                          <span className="text-blue-300 font-mono">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Verification", value: "SPV light client" },
                        { label: "Asset Types", value: "xUDT tokens" },
                        { label: "Cross-chain", value: "Bitcoin ↔ CKB" },
                        { label: "Time Locks", value: "BTC_TIME_lock" },
                      ].map((spec, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400">{spec.label}:</span>
                          <span className="text-purple-300 font-mono">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Architecture Section */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up animation-delay-400">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <span>System Architecture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  The RGB++ architecture consists of four interconnected layers, each serving a specific purpose in the
                  cross-chain ecosystem:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Bitcoin Layer",
                      description: "UTXO management and single-use seals",
                      color: "border-orange-500 bg-orange-500/10",
                      icon: Bitcoin,
                    },
                    {
                      title: "CKB Layer",
                      description: "Programmable scripts and asset state management",
                      color: "border-green-500 bg-green-500/10",
                      icon: Network,
                    },
                    {
                      title: "SPV Service",
                      description: "Bitcoin light client verification on CKB",
                      color: "border-blue-500 bg-blue-500/10",
                      icon: Shield,
                    },
                    {
                      title: "RGB++ Scripts",
                      description: "RGBPP_lock and BTC_TIME_lock contracts",
                      color: "border-purple-500 bg-purple-500/10",
                      icon: Zap,
                    },
                  ].map((layer, index) => (
                    <div
                      key={index}
                      className={`border-l-4 pl-6 py-4 rounded-r-lg ${layer.color} hover:scale-105 transition-all duration-300 group`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <layer.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-semibold text-white">{layer.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{layer.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up animation-delay-500 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-white">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-3">
                  {["Technology Overview", "System Architecture", "Performance Metrics", "Security Model"].map(
                    (item, index) => (
                      <a
                        key={index}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="block text-blue-300 hover:text-blue-200 text-sm transition-all duration-300 hover:translate-x-2 hover:scale-105 p-2 rounded-lg hover:bg-blue-500/10"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </nav>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up animation-delay-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { href: "/concepts", icon: Book, label: "Core Concepts" },
                  { href: "/source-code", icon: Network, label: "Source Code" },
                  { href: "/quickstart", icon: Zap, label: "Quick Start" },
                ].map((link, index) => (
                  <Link key={index} href={link.href}>
                    <Button
                      variant="glass"
                      effect="scale"
                      className="w-full justify-start group"
                    >
                      <link.icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 animate-fade-in-up animation-delay-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">
                  Ready to dive deeper? Continue with the core concepts to understand single-use seals and isomorphic
                  binding.
                </p>
                <Button
                  variant="gradient"
                  effect="glow"
                  className="w-full"
                >
                  Continue to Core Concepts
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
