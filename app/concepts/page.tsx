import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Cpu, Network, Shield, Zap, Layers, Globe, Bitcoin, Lock } from "lucide-react"
import Link from "next/link"

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Cpu className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-purple-400 animate-ping opacity-20">
                  <Cpu className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Core Concepts
                </h1>
                <p className="text-xs text-gray-400">RGB++ Fundamentals</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 inline mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-purple-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Core Concepts</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up animation-delay-200">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 hover:scale-105 transition-transform duration-300">
            <Bitcoin className="w-4 h-4 mr-2 animate-spin-slow" />
            Fundamentals
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            RGB++ Core Concepts & Design Patterns
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Master the fundamental concepts of RGB++ Protocol including single-use seals, isomorphic binding, and
            cross-chain asset management that form the backbone of Bitcoin-CKB integration.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Tabs defaultValue="fundamentals" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl">
              <TabsTrigger
                value="fundamentals"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                Fundamentals
              </TabsTrigger>
              <TabsTrigger
                value="algorithms"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Algorithms
              </TabsTrigger>
              <TabsTrigger
                value="patterns"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                Design Patterns
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-orange-600 data-[state=active]:text-white transition-all duration-300"
              >
                Optimization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fundamentals" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Single-Use Seals */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Network className="h-5 w-5 text-white" />
                      </div>
                      <span>Single-Use Seals</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Bitcoin UTXOs as cryptographic commitments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                        <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                          <Bitcoin className="h-4 w-4 mr-2" />
                          Bitcoin UTXOs
                        </h4>
                        <p className="text-blue-200 text-sm leading-relaxed">
                          Bitcoin UTXOs serve as cryptographic commitments that can only be used once, ensuring asset
                          uniqueness and preventing double-spending through the power of single-use seals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Isomorphic Binding */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-green-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Layers className="h-5 w-5 text-white" />
                      </div>
                      <span>Isomorphic Binding</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      One-to-one mapping between Bitcoin UTXOs and CKB Cells
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border-l-4 border-orange-500 hover:scale-105 transition-all duration-300">
                        <div>
                          <div className="font-semibold text-orange-300 flex items-center">
                            <Bitcoin className="h-4 w-4 mr-2" />
                            Bitcoin UTXO
                          </div>
                          <div className="text-orange-200 text-sm">Asset Representation</div>
                        </div>
                        <div className="text-orange-400 text-sm font-mono">Bitcoin</div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-green-500"></div>
                        <div className="mx-2 text-white">↔</div>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-orange-500"></div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border-l-4 border-green-500 hover:scale-105 transition-all duration-300">
                        <div>
                          <div className="font-semibold text-green-300 flex items-center">
                            <Network className="h-4 w-4 mr-2" />
                            CKB Cell
                          </div>
                          <div className="text-green-200 text-sm">State and Logic</div>
                        </div>
                        <div className="text-green-400 text-sm font-mono">CKB</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* UTXO Management */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-yellow-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span>UTXO Management</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Asset ownership through Bitcoin UTXO properties
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
                        <h4 className="font-semibold text-yellow-300 mb-3 flex items-center">
                          <Lock className="h-4 w-4 mr-2" />
                          Ownership Model
                        </h4>
                        <p className="text-yellow-200 text-sm mb-4 leading-relaxed">
                          Bitcoin UTXO properties enable secure asset ownership and control within the RGB++ protocol
                          ecosystem.
                        </p>
                        <div className="bg-gray-800/50 p-3 rounded-lg text-xs font-mono text-yellow-300 border border-yellow-500/20">
                          UTXO → Owner → Asset Control
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CKB Cell Model */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-400">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <span>CKB Cell Model</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">Storing RGB++ asset state and logic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 hover:scale-105 transition-all duration-300">
                          <div className="text-2xl font-bold text-green-400 mb-2">State</div>
                          <div className="text-green-300 text-sm">Asset balance, metadata, properties</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 hover:scale-105 transition-all duration-300">
                          <div className="text-2xl font-bold text-blue-400 mb-2">Logic</div>
                          <div className="text-blue-300 text-sm">Contract code, validation rules</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="algorithms" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Commitment Calculation",
                    description: "hash(CKB_TX | btc_utxo#1 | btc_utxo#2)",
                    content:
                      "Commitment calculation ensures the integrity of the cross-chain transaction by hashing the CKB transaction and relevant Bitcoin UTXOs.",
                    algorithm: "SHA256",
                    gradient: "from-blue-500 to-cyan-500",
                    delay: "animation-delay-100",
                  },
                  {
                    title: "SPV Verification",
                    description: "Merkle proof verification for Bitcoin transactions",
                    content:
                      "SPV verification uses Merkle proofs to validate the inclusion of Bitcoin transactions in a block without requiring the full Bitcoin blockchain.",
                    algorithm: "Merkle Tree",
                    gradient: "from-green-500 to-emerald-500",
                    delay: "animation-delay-200",
                  },
                  {
                    title: "MMR (Merkle Mountain Range)",
                    description: "Efficient Bitcoin header verification",
                    content:
                      "MMR enables efficient verification of Bitcoin headers, allowing light clients to stay synchronized with the Bitcoin blockchain with minimal storage and computation.",
                    algorithm: "MMR Structure",
                    gradient: "from-purple-500 to-pink-500",
                    delay: "animation-delay-300",
                  },
                  {
                    title: "Transaction Validation",
                    description: "Cross-chain transaction atomicity",
                    content:
                      "Cross-chain transaction validation ensures atomicity, meaning that either both the Bitcoin and CKB transactions succeed, or both fail, preventing loss of assets.",
                    algorithm: "Atomic Swaps",
                    gradient: "from-orange-500 to-red-500",
                    delay: "animation-delay-400",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up ${item.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-gray-300">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-white/10">
                          <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                          <p className="text-gray-300 text-sm mb-3">{item.content}</p>
                          <div
                            className={`bg-gradient-to-r ${item.gradient} p-2 rounded text-xs font-mono text-white text-center`}
                          >
                            {item.algorithm}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="patterns" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "RGB++ Lock Pattern",
                    description: "Asset ownership through Bitcoin UTXO control",
                    content:
                      "The RGB++ lock pattern enforces asset ownership by requiring control of the Bitcoin UTXO associated with the asset.",
                    feature: "UTXO Control",
                    gradient: "from-blue-500 to-cyan-500",
                    delay: "animation-delay-100",
                  },
                  {
                    title: "Time Lock Pattern",
                    description: "BTC_TIME_lock for secure cross-chain transfers",
                    content:
                      "The time lock pattern uses BTC_TIME_lock to ensure secure cross-chain transfers by setting a time limit for the transaction to be completed.",
                    feature: "BTC_TIME_lock",
                    gradient: "from-green-500 to-emerald-500",
                    delay: "animation-delay-200",
                  },
                  {
                    title: "Witness Pattern",
                    description: "SPV proofs as transaction witnesses",
                    content:
                      "The witness pattern uses SPV proofs as transaction witnesses to validate the inclusion of Bitcoin transactions in a block.",
                    feature: "SPV Proofs",
                    gradient: "from-purple-500 to-pink-500",
                    delay: "animation-delay-300",
                  },
                  {
                    title: "Config Cell Pattern",
                    description: "Flexible contract configuration management",
                    content:
                      "The config cell pattern provides flexible contract configuration management by storing contract parameters in a dedicated CKB cell.",
                    feature: "Contract Configuration",
                    gradient: "from-orange-500 to-red-500",
                    delay: "animation-delay-400",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up ${item.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-gray-300">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className={`p-4 bg-gradient-to-r ${item.gradient}/10 rounded-lg border border-white/10`}>
                          <h4 className="font-semibold text-white mb-2">{item.feature}</h4>
                          <p className="text-gray-300 text-sm">{item.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Bitcoin Security Model",
                    description: "Leveraging Bitcoin's proof-of-work security",
                    content:
                      "RGB++ leverages Bitcoin's proof-of-work security model to ensure the integrity and security of cross-chain transactions.",
                    icon: Shield,
                    gradient: "from-red-500 to-pink-500",
                    delay: "animation-delay-100",
                  },
                  {
                    title: "Single-Use Seal Security",
                    description: "Preventing double-spending through UTXO consumption",
                    content:
                      "Single-use seals prevent double-spending by ensuring that each Bitcoin UTXO can only be consumed once in a cross-chain transaction.",
                    icon: Lock,
                    gradient: "from-orange-500 to-red-500",
                    delay: "animation-delay-200",
                  },
                  {
                    title: "SPV Security",
                    description: "Light client verification without full node requirements",
                    content:
                      "SPV security enables light client verification without requiring a full Bitcoin node, reducing the trust assumptions and improving scalability.",
                    icon: Network,
                    gradient: "from-yellow-500 to-orange-500",
                    delay: "animation-delay-300",
                  },
                  {
                    title: "Cross-Chain Security",
                    description: "Time locks and confirmation requirements",
                    content:
                      "Time locks and confirmation requirements enhance cross-chain security by ensuring that transactions are only finalized after a certain period and a sufficient number of confirmations.",
                    icon: Globe,
                    gradient: "from-green-500 to-blue-500",
                    delay: "animation-delay-400",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up ${item.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient} shadow-lg`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <span>{item.title}</span>
                      </CardTitle>
                      <CardDescription className="text-gray-300">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className={`p-4 border-l-4 bg-gradient-to-r ${item.gradient}/10 rounded-r-lg`}
                          style={{
                            borderLeftColor: `rgb(${item.gradient.includes("red") ? "239 68 68" : item.gradient.includes("orange") ? "249 115 22" : item.gradient.includes("yellow") ? "234 179 8" : "34 197 94"})`,
                          }}
                        >
                          <h4 className="font-semibold text-white mb-2">Security Features</h4>
                          <p className="text-gray-300 text-sm">{item.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <CardTitle className="text-white">Performance Optimization</CardTitle>
                    <CardDescription className="text-gray-300">
                      Techniques for improving network performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Caching Strategies",
                          description: "Reduce latency by storing frequently accessed data closer to users",
                          tech: "CDN, Redis, In-memory caching",
                          gradient: "from-green-500 to-emerald-500",
                        },
                        {
                          title: "Connection Pooling",
                          description: "Reuse existing connections to reduce overhead",
                          tech: "Database pools, HTTP keep-alive",
                          gradient: "from-blue-500 to-cyan-500",
                        },
                        {
                          title: "Compression",
                          description: "Reduce bandwidth usage through data compression",
                          tech: "GZIP, Brotli, Protocol buffers",
                          gradient: "from-purple-500 to-pink-500",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`p-4 bg-gradient-to-r ${item.gradient}/10 rounded-lg border border-white/10 hover:scale-105 transition-all duration-300`}
                        >
                          <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                          <div className="text-xs text-gray-400">{item.tech}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <CardTitle className="text-white">Scalability Patterns</CardTitle>
                    <CardDescription className="text-gray-300">Approaches for handling increased load</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Horizontal Scaling",
                          description: "Add more servers to distribute load across multiple instances",
                        },
                        {
                          title: "Vertical Scaling",
                          description: "Increase server capacity by adding more CPU, RAM, or storage",
                        },
                        {
                          title: "Auto-scaling",
                          description: "Automatically adjust resources based on demand patterns",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="p-4 border rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-800">
          <Link href="/introduction">
            <Button
              variant="glass"
              effect="scale"
              className="group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Previous: Introduction
            </Button>
          </Link>

          <Link href="/examples">
            <Button
              variant="gradient"
              effect="glow"
              className="group"
            >
              Next: Standard Examples
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
