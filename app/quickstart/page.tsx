import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Zap, Download, CheckCircle, Terminal, Package, Settings, Rocket } from "lucide-react"
import Link from "next/link"

export default function QuickStartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating quick start icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Zap, Terminal, Package, Settings, Rocket].map((Icon, i) => (
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
                <Zap className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-yellow-400 animate-ping opacity-20">
                  <Zap className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Quick Start
                </h1>
                <p className="text-xs text-gray-400">Getting Started Guide</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 group"
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
          <Link href="/" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Quick Start</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up animation-delay-200">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 hover:scale-105 transition-transform duration-300">
            <Rocket className="w-4 h-4 mr-2" />
            Getting Started
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
            RGB++ Protocol Quick Start Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get up and running with RGB++ Protocol in minutes. Follow our step-by-step guide to set up your development
            environment and deploy your first RGB++ UDT token.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Tabs defaultValue="installation" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl">
              <TabsTrigger
                value="installation"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-orange-600 data-[state=active]:text-white transition-all duration-300"
              >
                Installation
              </TabsTrigger>
              <TabsTrigger
                value="configuration"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Configuration
              </TabsTrigger>
              <TabsTrigger
                value="first-udt"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                First UDT
              </TabsTrigger>
              <TabsTrigger
                value="deployment"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                Deployment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* System Requirements */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5 text-blue-600" />
                      <span>System Requirements</span>
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Minimum system requirements for installation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50/10 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-2">Operating System</h4>
                        <ul className="text-blue-300 text-sm space-y-1">
                          <li>• Linux (Ubuntu 20.04+, CentOS 8+)</li>
                          <li>• macOS 11.0+ (Big Sur)</li>
                          <li>• Windows 10/11 (with WSL2)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50/10 rounded-lg">
                        <h4 className="font-semibold text-green-400 mb-2">Hardware</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-green-300">
                          <div>CPU: 4+ cores</div>
                          <div>RAM: 8GB minimum</div>
                          <div>Storage: 10GB free</div>
                          <div>Network: 1Gbps+</div>
                        </div>
                      </div>

                      <div className="p-4 bg-purple-50/10 rounded-lg">
                        <h4 className="font-semibold text-purple-400 mb-2">Dependencies</h4>
                        <ul className="text-purple-300 text-sm space-y-1">
                          <li>• Node.js 18+</li>
                          <li>• Bitcoin Core/Electrum</li>
                          <li>• CKB node access</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-yellow-50/10 rounded-lg">
                        <h4 className="font-semibold text-yellow-400 mb-2">RGB++ Specific</h4>
                        <ul className="text-yellow-300 text-sm space-y-1">
                          <li>• RGB++ SDK</li>
                          <li>• CCC (CKB SDK)</li>
                          <li>• btc-assets-api access</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-orange-50/10 rounded-lg">
                        <h4 className="font-semibold text-orange-400 mb-2">Network Access</h4>
                        <ul className="text-orange-300 text-sm space-y-1">
                          <li>• Bitcoin testnet/mainnet</li>
                          <li>• CKB testnet/mainnet</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Installation Steps */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Download className="h-5 w-5 text-green-600" />
                      <span>Installation Steps</span>
                    </CardTitle>
                    <CardDescription className="text-gray-400">Step-by-step installation process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-white">Install Node.js</h4>
                          <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono mb-2">
                            nvm install 18
                          </div>
                          <p className="text-gray-400 text-sm">Install Node.js version 18 or higher using nvm.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-white">Install RGB++ SDK</h4>
                          <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono mb-2">
                            npm install rgbpp-sdk
                          </div>
                          <p className="text-gray-400 text-sm">Install the RGB++ SDK using npm.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-white">Install CCC (CKB SDK)</h4>
                          <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono mb-2">
                            npm install @nervosnetwork/ckb-sdk-core
                          </div>
                          <p className="text-gray-400 text-sm">Install the CCC (CKB SDK) using npm.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Package Managers */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Package Manager Installation</CardTitle>
                    <CardDescription className="text-gray-400">
                      Install using your preferred package manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-50/10 rounded-lg">
                        <h4 className="font-semibold text-orange-400 mb-2">npm</h4>
                        <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono">
                          npm install rgbpp-sdk @nervosnetwork/ckb-sdk-core
                        </div>
                      </div>

                      <div className="p-4 bg-red-50/10 rounded-lg">
                        <h4 className="font-semibold text-red-400 mb-2">yarn</h4>
                        <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono">
                          yarn add rgbpp-sdk @nervosnetwork/ckb-sdk-core
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Docker Installation */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Docker Installation</CardTitle>
                    <CardDescription className="text-gray-400">
                      Run RGB++ in a containerized environment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg">
                        <pre className="text-sm">
                          {`# Pull the official Node.js image
docker pull node:18

# Create a Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "index.js" ]`}
                        </pre>
                      </div>

                      <div className="p-4 bg-blue-50/10 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-2">Docker Compose</h4>
                        <p className="text-blue-300 text-sm">
                          Use Docker Compose for multi-container deployments with databases, and other dependencies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="configuration" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">btc-assets-api Token Configuration</CardTitle>
                    <CardDescription className="text-gray-400">Configure your btc-assets-api token</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`{
  "btc_assets_api_token": "YOUR_BTC_ASSETS_API_TOKEN"
}`}
                        </pre>
                      </div>

                      <div className="p-4 bg-yellow-50/10 rounded-lg">
                        <h4 className="font-semibold text-yellow-400 mb-2">Configuration File</h4>
                        <p className="text-yellow-300 text-sm">
                          Save this configuration as <code className="bg-yellow-200/20 px-1 rounded">config.json</code>
                          in your project directory.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Bitcoin Wallet Setup</CardTitle>
                    <CardDescription className="text-gray-400">
                      Configure your Bitcoin wallet for testnet/mainnet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg">
                        <pre className="text-sm">
                          {`// Example using Bitcoin Core
bitcoin-cli getnewaddress "rgbpp" bech32
`}
                        </pre>
                      </div>

                      <div className="p-4 bg-green-50/10 rounded-lg">
                        <h4 className="font-semibold text-green-400 mb-2">Wallet Configuration</h4>
                        <p className="text-green-300 text-sm">
                          Ensure your wallet is properly configured for the desired network (testnet/mainnet).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">CKB Wallet Configuration</CardTitle>
                    <CardDescription className="text-gray-400">Configure your CKB wallet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`// Example using ckb-cli
ckb-cli wallet new --type secp256k1
`}
                        </pre>
                      </div>

                      <div className="p-4 bg-purple-50/10 rounded-lg">
                        <h4 className="font-semibold text-purple-400 mb-2">Wallet Setup</h4>
                        <p className="text-purple-300 text-sm">
                          Set up your CKB wallet and ensure it's connected to the correct network.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Network Endpoint Configuration</CardTitle>
                    <CardDescription className="text-gray-400">
                      Configure network endpoints for Bitcoin and CKB
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg">
                        <pre className="text-sm">
                          {`{
  "bitcoin": {
    "rpc_url": "YOUR_BITCOIN_RPC_URL",
    "network": "testnet" // or "mainnet"
  },
  "ckb": {
    "rpc_url": "YOUR_CKB_RPC_URL",
    "indexer_url": "YOUR_CKB_INDEXER_URL"
  }
}`}
                        </pre>
                      </div>

                      <div className="flex items-center space-x-2 p-3 bg-green-50/10 rounded">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-green-300 text-sm">
                          Ensure your network endpoints are correctly configured for seamless operation.
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="first-udt" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Terminal className="h-5 w-5 text-green-600" />
                      <span>UDT Issuance</span>
                    </CardTitle>
                    <CardDescription className="text-gray-400">Issue your first RGB++ token</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`// Example code for issuing RGB++ tokens
async function issueToken() {
  // Implementation details here
  console.log("Issuing RGB++ token...");
}

issueToken();
`}
                        </pre>
                      </div>

                      <div className="p-4 bg-green-50/10 rounded-lg">
                        <h4 className="font-semibold text-green-400 mb-2">Run Issuance</h4>
                        <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono">node issue.js</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">UDT Transfer</CardTitle>
                    <CardDescription className="text-gray-400">Transfer RGB++ assets on Bitcoin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`// Example code for transferring RGB++ assets
async function transferToken() {
  // Implementation details here
  console.log("Transferring RGB++ token...");
}

transferToken();
`}
                        </pre>
                      </div>

                      <div className="p-4 bg-blue-50/10 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-2">Run Transfer</h4>
                        <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono">
                          node transfer.js
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Leap to CKB</CardTitle>
                    <CardDescription className="text-gray-400">Moving assets from Bitcoin to CKB</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`// Example code for moving assets from Bitcoin to CKB
async function leapToCKB() {
  // Implementation details here
  console.log("Moving assets from Bitcoin to CKB...");
}

leapToCKB();
`}
                        </pre>
                      </div>

                      <div className="p-4 bg-purple-50/10 rounded-lg">
                        <h4 className="font-semibold text-purple-400 mb-2">Run Leap</h4>
                        <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono">node leap.js</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Time Lock Unlock</CardTitle>
                    <CardDescription className="text-gray-400">Unlocking assets on CKB</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`// Example code for unlocking assets on CKB
async function unlockAssets() {
  // Implementation details here
  console.log("Unlocking assets on CKB...");
}

unlockAssets();
`}
                        </pre>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-white">Run Unlock</h4>
                          <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono mb-2">
                            node unlock.js
                          </div>
                          <p className="text-gray-400 text-sm">Run the unlock script to unlock assets on CKB.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deployment" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Production Deployment</CardTitle>
                    <CardDescription className="text-gray-400">
                      Deploy your RGB++ application to production
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50/10 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-2">Considerations</h4>
                        <ul className="text-blue-300 text-sm space-y-1">
                          <li>• Secure API key management</li>
                          <li>• Reliable network endpoints</li>
                          <li>• Scalable infrastructure</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50/10 rounded-lg">
                        <h4 className="font-semibold text-green-400 mb-2">Best Practices</h4>
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• Use environment variables for configuration</li>
                          <li>• Implement robust error handling</li>
                          <li>• Monitor transaction status</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Monitoring RGB++ Transactions</CardTitle>
                    <CardDescription className="text-gray-400">Monitor your RGB++ transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          {`// Example code for monitoring RGB++ transactions
async function monitorTransactions() {
  // Implementation details here
  console.log("Monitoring RGB++ transactions...");
}

monitorTransactions();
`}
                        </pre>
                      </div>

                      <div className="p-4 bg-purple-50/10 rounded-lg">
                        <h4 className="font-semibold text-purple-400 mb-2">Run Monitor</h4>
                        <div className="bg-gray-900/50 text-gray-300 p-2 rounded text-xs font-mono">
                          node monitor.js
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Error Handling & Recovery</CardTitle>
                    <CardDescription className="text-gray-400">Handle errors and recover from failures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50/10 rounded-lg">
                        <h4 className="font-semibold text-yellow-400 mb-2">Error Handling</h4>
                        <ul className="text-yellow-300 text-sm space-y-1">
                          <li>• Implement try-catch blocks</li>
                          <li>• Log errors for debugging</li>
                          <li>• Provide user-friendly error messages</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-orange-50/10 rounded-lg">
                        <h4 className="font-semibold text-orange-400 mb-2">Recovery Strategies</h4>
                        <ul className="text-orange-300 text-sm space-y-1">
                          <li>• Implement retry mechanisms</li>
                          <li>• Use transaction rollbacks</li>
                          <li>• Monitor and alert on failures</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">RGB++ Development Best Practices</CardTitle>
                    <CardDescription className="text-gray-400">
                      Follow best practices for RGB++ development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50/10 rounded-lg">
                        <h4 className="font-semibold text-red-400 mb-2">Security</h4>
                        <ul className="text-red-300 text-sm space-y-1">
                          <li>• Secure API key management</li>
                          <li>• Validate user inputs</li>
                          <li>• Protect against replay attacks</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gray-50/10 rounded-lg">
                        <h4 className="font-semibold text-gray-400 mb-2">Performance</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Optimize transaction sizes</li>
                          <li>• Use efficient data structures</li>
                          <li>• Cache frequently accessed data</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Next Steps */}
        <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-600">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Congratulations!</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                You've successfully set up and deployed your first RGB++ application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50/10 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-400 mb-2">Explore Examples</h4>
                  <p className="text-blue-300 text-sm mb-3">Check out more advanced examples and use cases</p>
                  <Link href="/examples">
                    <Button
                      variant="glass"
                      size="sm"
                      effect="scale"
                    >
                      View Examples
                    </Button>
                  </Link>
                </div>

                <div className="p-4 bg-green-50/10 rounded-lg text-center">
                  <h4 className="font-semibold text-green-400 mb-2">Read Documentation</h4>
                  <p className="text-green-300 text-sm mb-3">Dive deeper into core concepts and components</p>
                  <Link href="/concepts">
                    <Button
                      variant="glass"
                      size="sm"
                      effect="scale"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="p-4 bg-purple-50/10 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-400 mb-2">Join Community</h4>
                  <p className="text-purple-300 text-sm mb-3">Get help and share your experiences</p>
                  <Link href="/discord">
                    <Button
                      variant="glass"
                      size="sm"
                      effect="scale"
                    >
                      Join Discord
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 animate-fade-in-up animation-delay-700">
          <Link href="/components">
            <Button
              variant="glass"
              effect="scale"
              className="group"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Core Components
            </Button>
          </Link>

          <Link href="/">
            <Button
              variant="warning"
              effect="glow"
              className="group"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
