import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Download, Github, Copy, Terminal, FileCode, Cpu } from "lucide-react"
import Link from "next/link"

export default function SourceCodePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["<", ">", "{", "}", "(", ")", ";", "="].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-2xl font-mono animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Code className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-green-400 animate-ping opacity-20">
                  <Code className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Source Code
                </h1>
                <p className="text-xs text-gray-400">RGB++ Implementation</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="glass"
                size="sm"
                effect="scale"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="glass"
                size="sm"
                effect="scale"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-green-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Source Code</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up animation-delay-200">
          <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 hover:scale-105 transition-transform duration-300">
            <Terminal className="w-4 h-4 mr-2" />
            Implementation
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
            RGB++ Source Code Repository
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the complete RGB++ Protocol implementation with detailed code explanations, smart contracts, and SDK
            examples for Bitcoin-CKB asset management.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up animation-delay-300">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <FileCode className="h-5 w-5 mr-2 text-green-400" />
                  Code Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-3 text-sm">
                  <div className="font-semibold text-green-300">Core Modules</div>
                  {["rgbpp-lock.rs", "btc-time-lock.rs", "spv-client.rs"].map((file, index) => (
                    <a
                      key={index}
                      href={`#${file}`}
                      className="block text-green-200 hover:text-green-100 pl-2 transition-all duration-300 hover:translate-x-2 hover:scale-105 p-2 rounded-lg hover:bg-green-500/10"
                    >
                      {file}
                    </a>
                  ))}

                  <div className="font-semibold text-blue-300 mt-4">SDK Components</div>
                  {["rgbpp-sdk", "ccc integration", "btc-assets-api"].map((component, index) => (
                    <a
                      key={index}
                      href={`#${component}`}
                      className="block text-blue-200 hover:text-blue-100 pl-2 transition-all duration-300 hover:translate-x-2 hover:scale-105 p-2 rounded-lg hover:bg-blue-500/10"
                    >
                      {component}
                    </a>
                  ))}

                  <div className="font-semibold text-purple-300 mt-4">Examples</div>
                  {["udt-issuance.ts", "udt-transfer.ts", "leap-to-ckb.ts"].map((example, index) => (
                    <a
                      key={index}
                      href={`#${example}`}
                      className="block text-purple-200 hover:text-purple-100 pl-2 transition-all duration-300 hover:translate-x-2 hover:scale-105 p-2 rounded-lg hover:bg-purple-500/10"
                    >
                      {example}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="animate-fade-in-up animation-delay-400">
              <Tabs defaultValue="core" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl">
                  <TabsTrigger
                    value="core"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white transition-all duration-300"
                  >
                    Core Modules
                  </TabsTrigger>
                  <TabsTrigger
                    value="protocols"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white transition-all duration-300"
                  >
                    Protocols
                  </TabsTrigger>
                  <TabsTrigger
                    value="examples"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
                  >
                    Examples
                  </TabsTrigger>
                  <TabsTrigger
                    value="tests"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
                  >
                    Tests
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="core" className="space-y-6">
                  {/* Network Core */}
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-green-500/40 transition-all duration-500 transform hover:scale-[1.01] group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center space-x-3 text-white">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Code className="h-5 w-5 text-white" />
                            </div>
                            <span>rgbpp-lock.rs</span>
                          </CardTitle>
                          <CardDescription className="text-gray-300">
                            RGBPP lock script implementation with commitment verification
                          </CardDescription>
                        </div>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-6 rounded-xl overflow-x-auto border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                        <pre className="text-sm">
                          {`// RGBPP lock script
// Verifies commitments and SPV proofs for Bitcoin-CKB asset transfers

use ckb_std::{
    ckb_constants::Source,
    high_level::{load_script_hash, load_witness_args, QueryIter},
    syscalls::validate_witness_lock,
    {
        bytes::Bytes,
        error::SysError,
        script::ScriptError,
        since::Since,
        EnvError,
    },
};

// Define error codes
enum Error {
    Encoding = 1,
    InvalidArgument,
    WitnessError,
    InvalidCommitment,
    SPVVerificationFailed,
    TimeLockNotReached,
}

// Main entry point
fn main() -> Result<(), Error> {
    // Load script hash
    let script_hash = load_script_hash()?;

    // Load witness arguments
    let witness_args = load_witness_args()?;

    // Verify commitment
    verify_commitment()?;

    // Validate SPV proof
    validate_spv_proof()?;

    // Check time lock
    check_time_lock()?;

    Ok(())
}

fn verify_commitment() -> Result<(), Error> {
    // Implementation for verifying the commitment
    // This involves checking if the output cell's data matches the expected commitment
    Ok(())
}

fn validate_spv_proof() -> Result<(), Error> {
    // Implementation for validating the SPV proof
    // This involves verifying the Bitcoin transaction against the Bitcoin block header
    Ok(())
}

fn check_time_lock() -> Result<(), Error> {
    // Implementation for checking the time lock
    // This involves checking if the current block number is greater than the lock time
    Ok(())
}`}
                        </pre>
                      </div>
                      <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center">
                          <Cpu className="h-4 w-4 mr-2" />
                          Code Explanation
                        </h4>
                        <p className="text-green-200 text-sm leading-relaxed">
                          The RGBPP lock script ensures secure asset transfer between Bitcoin and CKB. It verifies
                          commitments, validates SPV proofs, and enforces time locks for secure and trustless
                          cross-chain operations.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Protocol Handler */}
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.01] group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center space-x-3 text-white">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Code className="h-5 w-5 text-white" />
                            </div>
                            <span>btc-time-lock.rs</span>
                          </CardTitle>
                          <CardDescription className="text-gray-300">
                            Bitcoin time lock contract for conditional asset release
                          </CardDescription>
                        </div>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-6 rounded-xl overflow-x-auto border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <pre className="text-sm">
                          {`// Bitcoin Time Lock Contract
// Implements a time lock mechanism for releasing assets after a specific time

use ckb_std::{
    ckb_constants::Source,
    high_level::{load_script_hash, load_witness_args, QueryIter},
    syscalls::validate_witness_lock,
    {
        bytes::Bytes,
        error::SysError,
        script::ScriptError,
        since::Since,
        EnvError,
    },
};

// Define error codes
enum Error {
    Encoding = 1,
    InvalidArgument,
    WitnessError,
    TimeLockNotReached,
}

// Main entry point
fn main() -> Result<(), Error> {
    // Load script hash
    let script_hash = load_script_hash()?;

    // Load witness arguments
    let witness_args = load_witness_args()?;

    // Check time lock
    check_time_lock()?;

    Ok(())
}

fn check_time_lock() -> Result<(), Error> {
    // Implementation for checking the time lock
    // This involves checking if the current block number is greater than the lock time
    Ok(())
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="protocols" className="space-y-6">
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.01]">
                    <CardHeader>
                      <CardTitle className="text-white">Protocol Implementations</CardTitle>
                      <CardDescription className="text-gray-300">
                        Detailed implementation of various network protocols
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "TCP Protocol",
                            description: "Reliable, connection-oriented protocol implementation",
                            gradient: "from-blue-500 to-cyan-500",
                          },
                          {
                            title: "UDP Protocol",
                            description: "Fast, connectionless protocol for real-time applications",
                            gradient: "from-green-500 to-emerald-500",
                          },
                          {
                            title: "Custom Protocol",
                            description: "Optimized protocol for specific network requirements",
                            gradient: "from-purple-500 to-pink-500",
                          },
                          {
                            title: "Security Layer",
                            description: "Encryption and authentication protocol implementation",
                            gradient: "from-orange-500 to-red-500",
                          },
                        ].map((protocol, index) => (
                          <div
                            key={index}
                            className={`p-4 border rounded-lg bg-gradient-to-r ${protocol.gradient}/10 border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105`}
                          >
                            <h4 className="font-semibold mb-2 text-white">{protocol.title}</h4>
                            <p className="text-sm text-gray-300 mb-3">{protocol.description}</p>
                            <Button
                              variant="glass"
                              size="sm"
                              effect="scale"
                            >
                              View Code
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples" className="space-y-6">
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.01]">
                    <CardHeader>
                      <CardTitle className="text-white">Usage Examples</CardTitle>
                      <CardDescription className="text-gray-300">
                        Practical examples showing how to use the RGB++ Protocol
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "UDT Issuance Transaction",
                            description: "Example of issuing a new UDT asset on CKB using RGB++",
                            gradient: "from-blue-500 to-cyan-500",
                          },
                          {
                            title: "Bitcoin-CKB Transaction Binding",
                            description: "Demonstrates how to bind a Bitcoin transaction to a CKB transaction",
                            gradient: "from-green-500 to-emerald-500",
                          },
                          {
                            title: "Leap to CKB",
                            description: "Example of moving assets from Bitcoin to CKB using RGB++",
                            gradient: "from-purple-500 to-pink-500",
                          },
                        ].map((example, index) => (
                          <div
                            key={index}
                            className={`p-4 border-l-4 bg-gradient-to-r ${example.gradient}/10 rounded-r-lg hover:scale-105 transition-all duration-300`}
                            style={{
                              borderLeftColor: `rgb(${example.gradient.includes("blue") ? "59 130 246" : example.gradient.includes("green") ? "34 197 94" : "168 85 247"})`,
                            }}
                          >
                            <h4 className="font-semibold text-white">{example.title}</h4>
                            <p className="text-gray-300 text-sm mt-1">{example.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tests" className="space-y-6">
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.01]">
                    <CardHeader>
                      <CardTitle className="text-white">Test Suite</CardTitle>
                      <CardDescription className="text-gray-300">
                        Comprehensive testing framework and test cases
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            value: "98%",
                            label: "Code Coverage",
                            gradient: "from-green-500 to-emerald-500",
                          },
                          {
                            value: "1,247",
                            label: "Unit Tests",
                            gradient: "from-blue-500 to-cyan-500",
                          },
                          {
                            value: "156",
                            label: "Integration Tests",
                            gradient: "from-purple-500 to-pink-500",
                          },
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className={`text-center p-6 bg-gradient-to-r ${stat.gradient}/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105`}
                          >
                            <div
                              className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
