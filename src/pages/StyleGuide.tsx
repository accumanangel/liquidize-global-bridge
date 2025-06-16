import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Shield, Zap, Globe } from "lucide-react";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Liquitize Style Guide</h1>
          <p className="text-xl text-gray-300">Design system documentation for the Liquitize brand</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Brand Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Brand Colors</h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-2"></div>
                <p className="font-medium">Primary Gradient</p>
                <p className="text-sm text-gray-600">from-orange-500 to-red-500</p>
                <p className="text-xs text-gray-500">#f97316 → #dc2626</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-orange-500 rounded-lg mb-2"></div>
                <p className="font-medium">Orange 500</p>
                <p className="text-sm text-gray-600">orange-500</p>
                <p className="text-xs text-gray-500">#f97316</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-red-500 rounded-lg mb-2"></div>
                <p className="font-medium">Red 500</p>
                <p className="text-sm text-gray-600">red-500</p>
                <p className="text-xs text-gray-500">#dc2626</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg mb-2"></div>
                <p className="font-medium">Primary Hover</p>
                <p className="text-sm text-gray-600">from-orange-600 to-red-600</p>
                <p className="text-xs text-gray-500">#ea580c → #b91c1c</p>
              </div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Secondary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-2"></div>
                <p className="font-medium">Blue Gradient</p>
                <p className="text-sm text-gray-600">from-blue-500 to-cyan-500</p>
                <p className="text-xs text-gray-500">#3b82f6 → #06b6d4</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-2"></div>
                <p className="font-medium">Purple Gradient</p>
                <p className="text-sm text-gray-600">from-purple-500 to-pink-500</p>
                <p className="text-xs text-gray-500">#8b5cf6 → #ec4899</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-2"></div>
                <p className="font-medium">Green Gradient</p>
                <p className="text-sm text-gray-600">from-green-500 to-emerald-500</p>
                <p className="text-xs text-gray-500">#22c55e → #10b981</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-2"></div>
                <p className="font-medium">Yellow Gradient</p>
                <p className="text-sm text-gray-600">from-yellow-500 to-orange-500</p>
                <p className="text-xs text-gray-500">#eab308 → #f97316</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg mb-2"></div>
                <p className="font-medium">Indigo Gradient</p>
                <p className="text-sm text-gray-600">from-indigo-500 to-blue-500</p>
                <p className="text-xs text-gray-500">#6366f1 → #3b82f6</p>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Neutral Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-white border-2 border-gray-200 rounded-lg mb-2"></div>
                <p className="font-medium">White</p>
                <p className="text-sm text-gray-600">white</p>
                <p className="text-xs text-gray-500">#ffffff</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gray-50 rounded-lg mb-2"></div>
                <p className="font-medium">Gray 50</p>
                <p className="text-sm text-gray-600">gray-50</p>
                <p className="text-xs text-gray-500">#f9fafb</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gray-100 rounded-lg mb-2"></div>
                <p className="font-medium">Gray 100</p>
                <p className="text-sm text-gray-600">gray-100</p>
                <p className="text-xs text-gray-500">#f3f4f6</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gray-600 rounded-lg mb-2"></div>
                <p className="font-medium">Gray 600</p>
                <p className="text-sm text-gray-600">gray-600</p>
                <p className="text-xs text-gray-500">#4b5563</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gray-800 rounded-lg mb-2"></div>
                <p className="font-medium">Gray 800</p>
                <p className="text-sm text-gray-600">gray-800</p>
                <p className="text-xs text-gray-500">#1f2937</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gray-900 rounded-lg mb-2"></div>
                <p className="font-medium">Gray 900</p>
                <p className="text-sm text-gray-600">gray-900</p>
                <p className="text-xs text-gray-500">#111827</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Typography</h2>
          
          {/* Font Family */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Font Family</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-2">Primary Font: <strong>Inter</strong></p>
              <p className="text-gray-600">font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;</p>
            </div>
          </div>

          {/* Headings */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Headings</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">Heading 1</h1>
                <p className="text-sm text-gray-600 mt-1">text-5xl (48px) md:text-7xl (72px) font-bold (Hero Headlines)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Heading 2</h2>
                <p className="text-sm text-gray-600 mt-1">text-4xl (36px) md:text-5xl (48px) font-bold (Section Headers)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-900">Heading 3</h3>
                <p className="text-sm text-gray-600 mt-1">text-2xl (24px) font-bold (Card Titles)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-xl font-bold text-gray-900">Heading 4</h4>
                <p className="text-sm text-gray-600 mt-1">text-xl (20px) font-bold (Subsection Headers)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="text-lg font-semibold text-gray-900">Heading 5</h5>
                <p className="text-sm text-gray-600 mt-1">text-lg (18px) font-semibold (Small Headers)</p>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Body Text</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-xl text-gray-600">Large Body Text - text-xl (20px) text-gray-600</p>
                <p className="text-sm text-gray-500 mt-1">Used for hero subtitles and important descriptions</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-lg text-gray-600">Medium Body Text - text-lg (18px) text-gray-600</p>
                <p className="text-sm text-gray-500 mt-1">Used for card descriptions and feature text</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-base text-gray-600">Regular Body Text - text-base (16px) text-gray-600</p>
                <p className="text-sm text-gray-500 mt-1">Standard paragraph text</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600">Small Body Text - text-sm (14px) text-gray-600</p>
                <p className="text-xs text-gray-500 mt-1">Used for captions and secondary information</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-xs text-gray-600">Extra Small Text - text-xs (12px) text-gray-600</p>
                <p className="text-xs text-gray-500 mt-1">Used for fine print and metadata</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Text Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Primary Text</p>
                <p className="text-gray-900">text-gray-900</p>
                <p className="text-sm text-gray-500">#111827</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold mb-2">Secondary Text</p>
                <p className="text-gray-600">text-gray-600</p>
                <p className="text-sm text-gray-500">#4b5563</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 font-semibold mb-2">Muted Text</p>
                <p className="text-gray-500">text-gray-500</p>
                <p className="text-sm text-gray-500">#6b7280</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Gradients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Background Gradients */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Background Gradients</h3>
              <div className="space-y-4">
                <div className="h-20 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">from-gray-50 to-white</span>
                </div>
                <div className="h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-white">from-gray-900 to-gray-800</span>
                </div>
                <div className="h-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">from-gray-50 to-gray-100</span>
                </div>
              </div>
            </div>

            {/* Text Gradients */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Text Gradients</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Primary Text Gradient
                  </p>
                  <p className="text-sm text-gray-600 mt-1">from-orange-500 to-red-500</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Secondary Text Gradient
                  </p>
                  <p className="text-sm text-gray-600 mt-1">from-blue-500 to-cyan-500</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Neutral Text Gradient
                  </p>
                  <p className="text-sm text-gray-600 mt-1">from-gray-900 to-gray-700</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Buttons</h2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-medium rounded-full">
                  Primary Large
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-medium">
                  Primary Medium
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full font-medium">
                  Primary Small
                </Button>
              </div>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Button Specifications:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Large Button:</p>
                    <p>Height: 48px (py-4 = 16px top/bottom + text height)</p>
                    <p>Padding: 32px horizontal (px-8)</p>
                    <p>Font: 18px (text-lg) font-medium</p>
                  </div>
                  <div>
                    <p className="font-medium">Medium Button:</p>
                    <p>Height: 40px (py-2 = 8px top/bottom + text height)</p>
                    <p>Padding: 24px horizontal (px-6)</p>
                    <p>Font: 16px (text-base) font-medium</p>
                  </div>
                  <div>
                    <p className="font-medium">Small Button:</p>
                    <p>Height: 36px (default small size)</p>
                    <p>Padding: 12px horizontal (px-3)</p>
                    <p>Font: 14px (text-sm) font-medium</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">Classes: bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full</p>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-full">
                  Secondary Large
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-full font-medium">
                  Secondary Medium
                </Button>
                <Button variant="outline" size="sm" className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-full font-medium">
                  Secondary Small
                </Button>
              </div>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Secondary Button Specifications:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Large Button:</p>
                    <p>Height: 48px (py-4 = 16px top/bottom + text height)</p>
                    <p>Padding: 32px horizontal (px-8)</p>
                    <p>Border: 2px solid #d1d5db</p>
                  </div>
                  <div>
                    <p className="font-medium">Medium Button:</p>
                    <p>Height: 40px (py-2 = 8px top/bottom + text height)</p>
                    <p>Padding: 24px horizontal (px-6)</p>
                    <p>Border: 2px solid #d1d5db</p>
                  </div>
                  <div>
                    <p className="font-medium">Small Button:</p>
                    <p>Height: 36px (default small size)</p>
                    <p>Padding: 12px horizontal (px-3)</p>
                    <p>Border: 2px solid #d1d5db</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">Classes: border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-full</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Feature Card</h3>
              <p className="text-gray-600 leading-relaxed">
                Standard feature card with icon, title, and description. Used throughout the site for showcasing benefits and features.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Classes: bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg</p>
                <p>Padding: 32px (p-8), Border Radius: 24px (rounded-3xl)</p>
              </div>
            </div>

            {/* Gradient Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Gradient Card</h3>
              <p className="text-gray-600 leading-relaxed">
                Subtle gradient background card for visual variety while maintaining clean aesthetics.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Classes: bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200</p>
                <p>Padding: 32px (p-8), Border Radius: 24px (rounded-3xl)</p>
              </div>
            </div>

            {/* Dark Card */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-3xl text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dark Card</h3>
              <p className="text-gray-300 leading-relaxed">
                Dark themed card for contrast and emphasis. Used for call-to-action sections and important information.
              </p>
              <div className="mt-4 text-sm text-gray-400">
                <p>Classes: bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-3xl text-white</p>
                <p>Padding: 32px (p-8), Border Radius: 24px (rounded-3xl)</p>
              </div>
            </div>

            {/* Glass Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Glass Card</h3>
              <p className="text-gray-600 leading-relaxed">
                Semi-transparent glass effect card with backdrop blur for modern, layered designs.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Classes: bg-white/60 backdrop-blur-sm border border-gray-200 p-8 rounded-3xl</p>
                <p>Padding: 32px (p-8), Border Radius: 24px (rounded-3xl)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Borders & Shadows */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Borders & Shadows</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Borders */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Borders</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-medium">Standard Border</p>
                  <p className="text-sm text-gray-600">border border-gray-200 (1px solid #e5e7eb)</p>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-lg">
                  <p className="font-medium">Thick Border</p>
                  <p className="text-sm text-gray-600">border-2 border-gray-300 (2px solid #d1d5db)</p>
                </div>
                <div className="p-4 border-l-4 border-orange-500 bg-gray-50 rounded-lg">
                  <p className="font-medium">Accent Left Border</p>
                  <p className="text-sm text-gray-600">border-l-4 border-orange-500 (4px left #f97316)</p>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Shadows</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-200">
                  <p className="font-medium">Small Shadow</p>
                  <p className="text-sm text-gray-600">shadow-sm (0 1px 2px rgba(0,0,0,0.05))</p>
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <p className="font-medium">Large Shadow</p>
                  <p className="text-sm text-gray-600">shadow-lg (0 10px 15px rgba(0,0,0,0.1))</p>
                </div>
                <div className="p-4 bg-white shadow-xl rounded-lg">
                  <p className="font-medium">Extra Large Shadow</p>
                  <p className="text-sm text-gray-600">shadow-xl (0 20px 25px rgba(0,0,0,0.1))</p>
                </div>
                <div className="p-4 bg-white shadow-2xl rounded-lg">
                  <p className="font-medium">2XL Shadow</p>
                  <p className="text-sm text-gray-600">shadow-2xl (0 25px 50px rgba(0,0,0,0.25))</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Border Radius</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-full h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-2"></div>
              <p className="font-medium">Standard</p>
              <p className="text-sm text-gray-600">rounded-lg (8px)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-2"></div>
              <p className="font-medium">Large</p>
              <p className="text-sm text-gray-600">rounded-2xl (16px)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mb-2"></div>
              <p className="font-medium">Extra Large</p>
              <p className="text-sm text-gray-600">rounded-3xl (24px)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-2"></div>
              <p className="font-medium">Full</p>
              <p className="text-sm text-gray-600">rounded-full (9999px)</p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Form Elements</h2>
          
          <div className="max-w-md space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Standard Input</label>
              <Input 
                placeholder="Enter your email"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-0"
              />
              <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <p className="font-medium">Specifications:</p>
                <p>Height: 48px (h-12)</p>
                <p>Padding: 16px horizontal (px-4)</p>
                <p>Border: 2px solid #e5e7eb</p>
                <p>Focus: 2px solid #f97316</p>
                <p>Classes: h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-orange-500</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rounded Input</label>
              <Input 
                placeholder="Enter your email"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:ring-0"
              />
              <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <p className="font-medium">Specifications:</p>
                <p>Height: 48px (h-12)</p>
                <p>Padding: 16px horizontal (px-4)</p>
                <p>Border: 2px solid #e5e7eb</p>
                <p>Border Radius: Full (rounded-full)</p>
                <p>Classes: h-12 px-4 border-2 border-gray-200 rounded-full focus:border-orange-500</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Spacing System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Padding */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Padding</h3>
              <div className="space-y-2">
                <div className="bg-orange-100 p-2 rounded border-2 border-orange-300">
                  <div className="bg-white p-2 rounded text-center">p-2 (8px)</div>
                </div>
                <div className="bg-orange-100 p-4 rounded border-2 border-orange-300">
                  <div className="bg-white p-2 rounded text-center">p-4 (16px)</div>
                </div>
                <div className="bg-orange-100 p-6 rounded border-2 border-orange-300">
                  <div className="bg-white p-2 rounded text-center">p-6 (24px)</div>
                </div>
                <div className="bg-orange-100 p-8 rounded border-2 border-orange-300">
                  <div className="bg-white p-2 rounded text-center">p-8 (32px)</div>
                </div>
              </div>
            </div>

            {/* Margins */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Margins</h3>
              <div className="space-y-2">
                <div className="bg-blue-100 rounded border-2 border-blue-300">
                  <div className="bg-white m-2 p-2 rounded text-center">m-2 (8px)</div>
                </div>
                <div className="bg-blue-100 rounded border-2 border-blue-300">
                  <div className="bg-white m-4 p-2 rounded text-center">m-4 (16px)</div>
                </div>
                <div className="bg-blue-100 rounded border-2 border-blue-300">
                  <div className="bg-white m-6 p-2 rounded text-center">m-6 (24px)</div>
                </div>
                <div className="bg-blue-100 rounded border-2 border-blue-300">
                  <div className="bg-white m-8 p-2 rounded text-center">m-8 (32px)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Variations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Logo Variations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Logo */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-xl transform rotate-12 opacity-90"></div>
                  <div className="absolute -top-1 -right-1 w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-xl transform -rotate-12"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Liquitize
                </span>
              </div>
              <p className="text-sm text-gray-600">Primary Logo (Light Background)</p>
              <p className="text-xs text-gray-500 mt-1">Icon: 40px × 40px, Text: 24px font-bold</p>
            </div>

            {/* Dark Background Logo */}
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-xl transform rotate-12 opacity-90"></div>
                  <div className="absolute -top-1 -right-1 w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-xl transform -rotate-12"></div>
                </div>
                <span className="text-2xl font-bold text-white">
                  Liquitize
                </span>
              </div>
              <p className="text-sm text-gray-300">Logo on Dark Background</p>
              <p className="text-xs text-gray-400 mt-1">Icon: 40px × 40px, Text: 24px font-bold white</p>
            </div>

            {/* Icon Only */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-xl transform rotate-12 opacity-90"></div>
                  <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-xl transform -rotate-12"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Icon Only</p>
              <p className="text-xs text-gray-500 mt-1">Size: 48px × 48px</p>
            </div>
          </div>
        </section>

        {/* Animation & Transitions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Animation & Transitions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Hover Effects</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <p className="font-medium">Shadow on Hover</p>
                  <p className="text-sm text-gray-600">hover:shadow-lg transition-all duration-300</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <p className="font-medium">Scale on Hover</p>
                  <p className="text-sm text-gray-600">hover:scale-105 transition-transform duration-300</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Transition Durations</h3>
              <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">Fast: duration-200 (200ms)</p>
                  <p className="text-sm text-gray-600">For quick interactions like button hovers</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">Standard: duration-300 (300ms)</p>
                  <p className="text-sm text-gray-600">Default for most animations</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">Slow: duration-500 (500ms)</p>
                  <p className="text-sm text-gray-600">For complex state changes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StyleGuide;