import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Network, Cpu, Database, Shield, Zap, Settings, Lock } from "lucide-react"
import Link from "next/link"

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating component icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Network, Cpu, Database, Shield, Zap, Settings].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-white/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Icon className="h-6 w-6" />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Network className="h-8 w-8 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-red-400 animate-ping opacity-20">
                  <Network className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Core Components
                </h1>
                <p className="text-xs text-gray-400">System Architecture</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 group"
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
          <Link href="/" className="hover:text-red-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Core Components</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up animation-delay-200">
          <Badge className="mb-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-500/30 hover:scale-105 transition-transform duration-300">
            <Cpu className="w-4 h-4 mr-2" />
            System Architecture
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-200 to-pink-200 bg-clip-text text-transparent">
            RGB++ Core Components & Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Detailed breakdown of RGB++ Protocol components including RGB++ Scripts, SPV Service, SDK, and
            btc-assets-api. Understanding these components is crucial for RGB++ integration.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="rgbpp_scripts"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                RGB++ Scripts
              </TabsTrigger>
              <TabsTrigger
                value="spv_service"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                SPV Service
              </TabsTrigger>
              <TabsTrigger
                value="rgbpp_security"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
              >
                RGB++ Security
              </TabsTrigger>
              <TabsTrigger
                value="management"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                Management
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* System Architecture */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Cpu className="h-5 w-5 text-white" />
                      </div>
                      <span>System Architecture</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      High-level overview of component relationships
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Bitcoin Layer",
                          description: "UTXO management and OP_RETURN commitments",
                          components: "UTXO, OP_RETURN",
                          gradient: "from-orange-500 to-red-500",
                        },
                        {
                          title: "CKB Layer",
                          description: "RGB++ Scripts and asset state management",
                          components: "RGBPP_lock, BTC_TIME_lock, Config Cells",
                          gradient: "from-green-500 to-emerald-500",
                        },
                        {
                          title: "SPV Layer",
                          description: "Bitcoin light client and proof verification",
                          components: "SPV Client Cells, SPV Info Cells, MMR Verification",
                          gradient: "from-purple-500 to-pink-500",
                        },
                        {
                          title: "API Layer",
                          description: "btc-assets-api and transaction processing",
                          components: "btc-assets-api, Transaction Processor",
                          gradient: "from-blue-500 to-cyan-500",
                        },
                      ].map((layer, index) => (
                        <div
                          key={index}
                          className={`p-4 bg-gradient-to-r ${layer.gradient}/10 rounded-lg border-l-4 hover:scale-105 transition-all duration-300`}
                          style={{
                            borderLeftColor: `rgb(${layer.gradient.includes("orange") ? "249 115 22" : layer.gradient.includes("green") ? "34 197 94" : layer.gradient.includes("purple") ? "168 85 247" : "59 130 246"})`,
                          }}
                        >
                          <h4 className="font-semibold text-white mb-2">{layer.title}</h4>
                          <p className="text-gray-300 text-sm mb-2">{layer.description}</p>
                          <div className="text-xs text-gray-400">Components: {layer.components}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Component Dependencies */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-green-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <CardTitle className="text-white">Component Dependencies</CardTitle>
                    <CardDescription className="text-gray-300">
                      Dependency graph and interaction patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10">
                        <div className="space-y-4">
                          <div className="text-sm font-mono text-orange-300 p-2 bg-orange-500/10 rounded border border-orange-500/20">
                            Bitcoin Layer
                          </div>
                          <div className="text-xs text-gray-400">↓</div>
                          <div className="text-sm font-mono text-green-300 p-2 bg-green-500/10 rounded border border-green-500/20">
                            CKB Layer
                          </div>
                          <div className="text-xs text-gray-400">↓</div>
                          <div className="text-sm font-mono text-purple-300 p-2 bg-purple-500/10 rounded border border-purple-500/20">
                            SPV Layer
                          </div>
                          <div className="text-xs text-gray-400">↓</div>
                          <div className="text-sm font-mono text-blue-300 p-2 bg-blue-500/10 rounded border border-blue-500/20">
                            API Layer
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                        <h4 className="font-semibold text-yellow-300 mb-2">Key Principles</h4>
                        <ul className="text-yellow-200 text-sm space-y-1">
                          <li>• Layered Architecture</li>
                          <li>• Cross-Chain Compatibility</li>
                          <li>• Security First</li>
                          <li>• Modular Design</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-yellow-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span>Performance Metrics</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Component-level performance characteristics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          value: "< 1ms",
                          label: "Transaction Confirmation",
                          gradient: "from-green-500 to-emerald-500",
                        },
                        {
                          value: "10K+",
                          label: "Assets Supported",
                          gradient: "from-blue-500 to-cyan-500",
                        },
                        {
                          value: "99.99%",
                          label: "Availability",
                          gradient: "from-purple-500 to-pink-500",
                        },
                        {
                          value: "< 5%",
                          label: "Network Overhead",
                          gradient: "from-orange-500 to-red-500",
                        },
                      ].map((metric, index) => (
                        <div
                          key={index}
                          className={`text-center p-4 bg-gradient-to-r ${metric.gradient}/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105`}
                        >
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}
                          >
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-300 mt-2">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Configuration */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-400">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Settings className="h-5 w-5 text-white" />
                      </div>
                      <span>Configuration Management</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Component configuration and customization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Runtime Configuration",
                          description: "Dynamic configuration changes without restart",
                        },
                        {
                          title: "Environment Variables",
                          description: "Environment-specific settings and overrides",
                        },
                        {
                          title: "Configuration Files",
                          description: "JSON, YAML, and TOML configuration support",
                        },
                      ].map((config, index) => (
                        <div
                          key={index}
                          className="p-3 border rounded bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <h4 className="font-semibold text-sm mb-1 text-white">{config.title}</h4>
                          <p className="text-gray-300 text-xs">{config.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="rgbpp_scripts" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "RGBPP_lock",
                    description: "Asset ownership and unlocking mechanism",
                    features: ["Asset ownership control", "Unlock conditions management", "Secure asset transfer"],
                    gradient: "from-blue-500 to-cyan-500",
                    icon: Lock,
                    delay: "animation-delay-100",
                  },
                  {
                    title: "BTC_TIME_lock",
                    description: "Time-based security for cross-chain transfers",
                    features: ["Time-delayed asset release", "Cross-chain transfer protection", "Secure asset escrow"],
                    gradient: "from-green-500 to-emerald-500",
                    icon: Zap,
                    delay: "animation-delay-200",
                  },
                  {
                    title: "Config Cells",
                    description: "Flexible contract configuration",
                    features: ["Parameter Storage", "Contract Settings", "Dynamic Configuration"],
                    gradient: "from-purple-500 to-pink-500",
                    icon: Settings,
                    delay: "animation-delay-300",
                  },
                  {
                    title: "Script Arguments",
                    description: "UTXO binding and verification",
                    features: ["UTXO Binding", "Data Verification", "Secure Arguments"],
                    gradient: "from-orange-500 to-red-500",
                    icon: Shield,
                    delay: "animation-delay-400",
                  },
                ].map((script, index) => (
                  <Card
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up ${script.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${script.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <script.icon className="h-5 w-5 text-white" />
                        </div>
                        <span>{script.title}</span>
                      </CardTitle>
                      <CardDescription className="text-gray-300">{script.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className={`p-4 bg-gradient-to-r ${script.gradient}/10 rounded-lg border border-white/10`}>
                          <h4 className="font-semibold text-white mb-2">Features</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {script.features.map((feature, idx) => (
                              <li key={idx}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="spv_service" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "SPV Client Cells",
                    description: "Bitcoin header synchronization",
                    content:
                      "Manages Bitcoin header synchronization and maintains the current state of the Bitcoin blockchain for verification purposes.",
                    gradient: "from-red-500 to-pink-500",
                    delay: "animation-delay-100",
                  },
                  {
                    title: "SPV Info Cells",
                    description: "Current state management",
                    content:
                      "Stores and manages the current state information for SPV verification, including block heights and merkle roots.",
                    gradient: "from-green-500 to-emerald-500",
                    delay: "animation-delay-200",
                  },
                  {
                    title: "MMR Verification",
                    description: "Efficient header chain verification",
                    content:
                      "Implements Merkle Mountain Range for efficient Bitcoin header chain verification with minimal storage requirements.",
                    gradient: "from-blue-500 to-cyan-500",
                    delay: "animation-delay-300",
                  },
                  {
                    title: "Merkle Proofs",
                    description: "Transaction inclusion verification",
                    content:
                      "Validates Bitcoin transaction inclusion in blocks using merkle proofs without requiring full blockchain data.",
                    gradient: "from-orange-500 to-red-500",
                    delay: "animation-delay-400",
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up ${service.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className={`p-4 bg-gradient-to-r ${service.gradient}/10 rounded-lg border border-white/10`}
                        >
                          <h4 className="font-semibold text-white mb-2">Implementation</h4>
                          <p className="text-gray-300 text-sm">{service.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rgbpp_security" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Single-Use Seal Security",
                    description: "UTXO-based asset protection",
                    content:
                      "Ensures each Bitcoin UTXO can only be consumed once, preventing double-spending and maintaining asset integrity.",
                    icon: Shield,
                    gradient: "from-red-500 to-pink-500",
                    delay: "animation-delay-100",
                  },
                  {
                    title: "SPV Security",
                    description: "Light client verification mechanisms",
                    content:
                      "Provides secure verification without full node requirements, reducing trust assumptions while maintaining security.",
                    icon: Network,
                    gradient: "from-blue-500 to-cyan-500",
                    delay: "animation-delay-200",
                  },
                  {
                    title: "Time Lock Security",
                    description: "Cross-chain transfer protection",
                    content:
                      "Implements time-based security mechanisms to ensure safe cross-chain transfers with proper confirmation periods.",
                    icon: Zap,
                    gradient: "from-green-500 to-emerald-500",
                    delay: "animation-delay-300",
                  },
                  {
                    title: "Commitment Security",
                    description: "OP_RETURN integrity verification",
                    content:
                      "Verifies the integrity of OP_RETURN commitments to ensure data consistency across Bitcoin and CKB layers.",
                    icon: Lock,
                    gradient: "from-orange-500 to-red-500",
                    delay: "animation-delay-400",
                  },
                ].map((security, index) => (
                  <Card
                    key={index}
                    className={`bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up ${security.delay}`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${security.gradient} shadow-lg`}>
                          <security.icon className="h-5 w-5 text-white" />
                        </div>
                        <span>{security.title}</span>
                      </CardTitle>
                      <CardDescription className="text-gray-300">{security.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className={`p-4 border-l-4 bg-gradient-to-r ${security.gradient}/10 rounded-r-lg`}
                          style={{
                            borderLeftColor: `rgb(${security.gradient.includes("red") ? "239 68 68" : security.gradient.includes("blue") ? "59 130 246" : security.gradient.includes("green") ? "34 197 94" : "249 115 22"})`,
                          }}
                        >
                          <h4 className="font-semibold text-white mb-2">Security Features</h4>
                          <p className="text-gray-300 text-sm">{security.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="management" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-green-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                      <span>Resource Manager</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      System resource allocation and monitoring
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded border border-green-500/20">
                          <div className="text-lg font-bold text-green-400">85%</div>
                          <div className="text-green-300 text-sm">CPU Usage</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded border border-blue-500/20">
                          <div className="text-lg font-bold text-blue-400">12GB</div>
                          <div className="text-blue-300 text-sm">Memory Usage</div>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                        <h4 className="font-semibold text-yellow-300 mb-2">Management Features</h4>
                        <ul className="text-yellow-200 text-sm space-y-1">
                          <li>• Real-time resource monitoring</li>
                          <li>• Automatic resource scaling</li>
                          <li>• Resource quota management</li>
                          <li>• Performance optimization</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <CardTitle className="text-white">Monitoring & Logging</CardTitle>
                    <CardDescription className="text-gray-300">
                      Comprehensive system monitoring and log management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                        <h4 className="font-semibold text-purple-300 mb-2">Monitoring Metrics</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-purple-200">• Network throughput</div>
                          <div className="text-purple-200">• Connection count</div>
                          <div className="text-purple-200">• Error rates</div>
                          <div className="text-purple-200">• Response times</div>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-white/10">
                        <h4 className="font-semibold text-white mb-2">Log Levels</h4>
                        <div className="space-y-1 text-sm">
                          {[
                            { level: "DEBUG", badge: "Development", color: "gray" },
                            { level: "INFO", badge: "Production", color: "blue" },
                            { level: "WARN", badge: "Production", color: "yellow" },
                            { level: "ERROR", badge: "Critical", color: "red" },
                          ].map((log, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-gray-300">{log.level}</span>
                              <Badge
                                variant="outline"
                                className={`text-xs text-${log.color}-300 border-${log.color}-500/30`}
                              >
                                {log.badge}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-800">
          <Link href="/examples">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Previous: Standard Examples
            </Button>
          </Link>

          <Link href="/quickstart">
            <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300 group">
              Next: Quick Start
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
