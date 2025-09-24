"use client"
import React from "react"
import {
  Palette,
  Type,
  Layout,
  Zap,
  Target,
  Info,
  ArrowRight,
  Star,
  Heart,
  ShoppingBag,
  Eye,
  Layers,
  Menu,
  X,
  Shield,
  Smartphone,
} from "lucide-react"

function App() {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const ColorSwatch = ({ color, name }: { color: string; name: string }) => {
    return (
      <div className="group cursor-pointer">
        <div
          className="w-full h-16 md:h-20 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 border border-neutral-200 mb-2 md:mb-3"
          style={{ backgroundColor: color }}
        ></div>
        <div className="text-center">
          <p className="font-medium text-xs md:text-sm text-neutral-900">{name}</p>
          <p className="text-xs text-neutral-500 font-mono">{color}</p>
        </div>
      </div>
    )
  }

  const TypographyExample = ({ text, size, weight }: { text: string; size: string; weight: string }) => {
    return (
      <div className="p-3 md:p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-all duration-300">
        <p className={`${size} ${weight} text-neutral-900 mb-2`}>{text}</p>
        <p className="text-xs text-neutral-500 font-mono">{size} {weight}</p>
      </div>
    )
  }

  const ComponentExample = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300">
        <h3 className="font-semibold text-base md:text-lg text-neutral-900 mb-3 md:mb-4">{title}</h3>
        <div className="space-y-3 md:space-y-4">{children}</div>
      </div>
    )
  }

  const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon,
    className = "",
  }: {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
    className?: string
  }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-[#CC5500] to-[#B8460E] text-white shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-105",
      secondary: "bg-gradient-to-r from-[#1E3A5F] to-[#2A4A6B] text-white shadow-md hover:shadow-lg hover:scale-105",
      outline: "border-2 border-[#CC5500] text-[#CC5500] hover:bg-[#CC5500] hover:text-white hover:scale-105"
    }
    
    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm md:text-base",
      lg: "px-6 py-3 text-base md:text-lg"
    }

    return (
      <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
        {icon}
        {children}
      </button>
    )
  }

  const StatCard = ({
    title,
    value,
    change,
    icon,
    trend = "up",
  }: {
    title: string
    value: string
    change: string
    icon: React.ReactNode
    trend?: "up" | "down" | "neutral"
  }) => {
    const trendColors = {
      up: "text-green-600 bg-green-50",
      down: "text-red-600 bg-red-50",
      neutral: "text-neutral-600 bg-neutral-50",
    }

    return (
      <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 min-h-[120px] md:min-h-[140px] flex flex-col hover:border-brand-light-blue">
        <div className="flex items-start justify-between mb-2 md:mb-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#CC5500] to-[#B8460E] rounded-md flex items-center justify-center text-white flex-shrink-0">
            <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <span className={`px-2 py-1 rounded-md text-xs font-semibold ${trendColors[trend]} flex-shrink-0 whitespace-nowrap`}>{change}</span>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <h3 className="text-lg md:text-xl font-serif font-bold text-neutral-900 mb-1 leading-tight">{value}</h3>
          <p className="text-neutral-600 text-xs md:text-sm leading-tight">{title}</p>
        </div>
      </div>
    )
  }

  const navigation = [
    { id: "overview", label: "Visão Geral", icon: Layout },
    { id: "brand", label: "Marca", icon: Target },
    { id: "colors", label: "Cores", icon: Palette },
    { id: "typography", label: "Tipografia", icon: Type },
    { id: "tokens", label: "Tokens", icon: Layers },
    { id: "patterns", label: "Padrões", icon: Info },
    { id: "components", label: "Componentes", icon: Layout },
    { id: "ecommerce", label: "E-commerce", icon: ShoppingBag },
  ]

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/10 to-transparent rounded-full animate-float"></div>
                <div
                  className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#1E3A5F]/10 to-transparent rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
      </div>

      <header className="relative bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/capit-store-logo-primary.png" alt="Capit Store Logo" className="h-8 md:h-10 w-auto" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold text-base md:text-lg gradient-text">Design System</h1>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-sm text-neutral-600">
                <Star size={14} className="text-[#CC5500]" />
                <span>Capit Store</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-14 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
              {navigation.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-[#CC5500] text-white shadow-md"
                        : "text-neutral-700 hover:bg-orange-50"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex gap-4 md:gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-2">
              {navigation.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-200 transform hover:scale-102 ${
                      activeTab === item.id
                        ? "bg-[#CC5500] text-white shadow-md"
                        : "text-neutral-700 hover:bg-orange-50 hover:shadow-sm"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            {activeTab === "overview" && (
              <div className="space-y-8 md:space-y-16">
                <section className="text-center space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold gradient-text">Capit Design System</h2>
                  <p className="text-sm md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                    Um sistema de design moderno e flexível construído com React, TypeScript e Tailwind CSS.
                    Componentes reutilizáveis para criar interfaces consistentes e elegantes.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="glass-card p-4 md:p-6 rounded-lg text-center space-y-3 md:space-y-4 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6B] rounded-lg flex items-center justify-center mx-auto">
                      <Palette className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg">Cores Consistentes</h3>
                    <p className="text-xs md:text-sm text-neutral-600">Paleta de cores cuidadosamente selecionada</p>
                  </div>

                  <div className="glass-card p-4 md:p-6 rounded-lg text-center space-y-3 md:space-y-4 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1E3A5F] to-[#49679f] rounded-lg flex items-center justify-center mx-auto">
                      <Type className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg">Tipografia</h3>
                    <p className="text-xs md:text-sm text-neutral-600">Sistema tipográfico hierárquico e legível</p>
                  </div>

                  <div className="glass-card p-4 md:p-6 rounded-lg text-center space-y-3 md:space-y-4 hover:shadow-lg transition-all duration-300 md:col-span-1 lg:col-span-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2A4A6B] to-[#1E3A5F] rounded-lg flex items-center justify-center mx-auto">
                      <Layers className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg">Componentes</h3>
                    <p className="text-xs md:text-sm text-neutral-600">Biblioteca completa de componentes reutilizáveis</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <StatCard
                    icon={<Zap size={18} />}
                    value="50+"
                    title="Componentes"
                    change="+12%"
                    trend="up"
                  />
                  <StatCard
                    icon={<Shield size={18} />}
                    value="100%"
                    title="TypeScript"
                    change="Completo"
                    trend="neutral"
                  />
                  <StatCard
                    icon={<Smartphone size={18} />}
                    value="Mobile"
                    title="Responsivo"
                    change="Otimizado"
                    trend="up"
                  />
                  <StatCard
                    icon={<Star size={18} />}
                    value="A11y"
                    title="Acessível"
                    change="WCAG 2.1"
                    trend="up"
                  />
                </div>
              </div>
            )}

            {activeTab === "brand" && (
              <div className="space-y-6 md:space-y-8">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold gradient-text">Identidade da Marca</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Elementos visuais e diretrizes que definem a identidade única da Capit Store
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {/* Logo Section */}
                  <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-4 md:mb-6">Logotipo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      <div className="text-center space-y-3">
                        <div className="bg-white p-4 rounded-xl border-2 border-neutral-100 hover:border-orange-200 transition-colors">
                          <img src="/capit-store-logo-primary.png" alt="Logo Principal" className="h-12 mx-auto" />
                        </div>
                        <p className="text-xs text-neutral-600">Logo Principal</p>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="bg-neutral-900 p-4 rounded-xl hover:bg-neutral-800 transition-colors">
                          <img src="/capit-store-logo-simple.png" alt="Logo Simples" className="h-12 mx-auto" />
                        </div>
                        <p className="text-xs text-neutral-600">Logo Simples</p>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="bg-white p-4 rounded-xl border-2 border-neutral-100 hover:border-orange-200 transition-colors">
                          <img src="/capit-store-logo-black.png" alt="Logo Preto" className="h-12 mx-auto" />
                        </div>
                        <p className="text-xs text-neutral-600">Logo Preto</p>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6B] p-4 rounded-xl">
                          <img src="/capit-store-logo-simple.png" alt="Logo Branco" className="h-12 mx-auto brightness-0 invert" />
                        </div>
                        <p className="text-xs text-neutral-600">Logo Branco</p>
                      </div>
                    </div>
                  </div>

                  {/* Brand Colors */}
                  <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-4 md:mb-6">Cores da Marca</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#00D4C4] rounded-2xl mx-auto shadow-lg"></div>
                        <div>
                          <p className="font-medium text-sm">Teal Primary</p>
                          <p className="text-xs text-neutral-500">#00D4C4</p>
                        </div>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#1E3A5F] rounded-2xl mx-auto shadow-lg"></div>
                        <div>
                          <p className="font-medium text-sm">Navy Blue</p>
                          <p className="text-xs text-neutral-500">#1E3A5F</p>
                        </div>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#2A4A6B] rounded-2xl mx-auto shadow-lg"></div>
                        <div>
                          <p className="font-medium text-sm">Steel Blue</p>
                          <p className="text-xs text-neutral-500">#2A4A6B</p>
                        </div>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#49679f] rounded-2xl mx-auto shadow-lg"></div>
                        <div>
                          <p className="font-medium text-sm">Slate Blue</p>
                          <p className="text-xs text-neutral-500">#49679f</p>
                          <span className="inline-block px-2 py-1 bg-[#CC5500] text-white text-xs rounded-full mt-1">Accent</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-4 md:mb-6">Tipografia da Marca</h3>
                    <div className="space-y-4 md:space-y-6">
                      <div className="border-l-4 border-[#1E3A5F] pl-4">
                        <h4 className="text-2xl md:text-3xl font-bold text-neutral-900">Capit Store</h4>
                        <p className="text-sm text-neutral-600">Fonte principal - Outfit Bold</p>
                      </div>
                      <div className="border-l-4 border-[#2A4A6B] pl-4">
                        <h4 className="text-lg md:text-xl font-semibold text-neutral-700">Subtítulos e Navegação</h4>
                        <p className="text-sm text-neutral-600">Fonte secundária - Outfit Semibold</p>
                      </div>
                      <div className="border-l-4 border-neutral-300 pl-4">
                        <p className="text-base text-neutral-600">Texto corrido e descrições utilizando Inter Regular para máxima legibilidade e consistência visual.</p>
                        <p className="text-sm text-neutral-600">Fonte de corpo - Inter Regular</p>
                      </div>
                    </div>
                  </div>

                  {/* Brand Guidelines */}
                  <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-4 md:mb-6">Diretrizes de Uso</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium text-green-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Permitido
                        </h4>
                        <ul className="text-sm text-neutral-600 space-y-2">
                          <li>• Usar as cores exatas especificadas</li>
                          <li>• Manter proporções do logotipo</li>
                          <li>• Aplicar em fundos contrastantes</li>
                          <li>• Usar versões monocromáticas quando necessário</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-red-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Não Permitido
                        </h4>
                        <ul className="text-sm text-neutral-600 space-y-2">
                          <li>• Alterar cores ou proporções</li>
                          <li>• Aplicar efeitos ou distorções</li>
                          <li>• Usar em fundos com baixo contraste</li>
                          <li>• Combinar com outras marcas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "colors" && (
              <div className="space-y-6 md:space-y-8">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold gradient-text">Paleta de Cores</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Sistema de cores consistente e acessível para todas as interfaces
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-3 md:mb-4">Cores Primárias</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      <ColorSwatch color="#00D4C4" name="Teal Primary" />
                      <ColorSwatch color="#1E3A5F" name="Navy Blue" />
                      <ColorSwatch color="#2A4A6B" name="Steel Blue" />
                      <ColorSwatch color="#49679f" name="Slate Blue" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-3 md:mb-4">Cores Neutras</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                      <ColorSwatch color="#FFFFFF" name="White" />
                      <ColorSwatch color="#F8F9FA" name="Gray 50" />
                      <ColorSwatch color="#E9ECEF" name="Gray 200" />
                      <ColorSwatch color="#6C757D" name="Gray 500" />
                      <ColorSwatch color="#343A40" name="Gray 800" />
                      <ColorSwatch color="#000000" name="Black" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-3 md:mb-4">Cores Semânticas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      <ColorSwatch color="#10B981" name="Success" />
                      <ColorSwatch color="#EF4444" name="Error" />
                      <ColorSwatch color="#F59E0B" name="Warning" />
                      <ColorSwatch color="#3B82F6" name="Info" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "typography" && (
              <div className="space-y-6 md:space-y-8">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold gradient-text">Sistema Tipográfico</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Hierarquia tipográfica clara e legível para todas as plataformas
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-3 md:mb-4">Títulos</h3>
                    <div className="space-y-3 md:space-y-4">
                      <TypographyExample text="Heading 1" size="text-2xl md:text-4xl" weight="font-bold" />
                      <TypographyExample text="Heading 2" size="text-xl md:text-3xl" weight="font-bold" />
                      <TypographyExample text="Heading 3" size="text-lg md:text-2xl" weight="font-semibold" />
                      <TypographyExample text="Heading 4" size="text-base md:text-xl" weight="font-semibold" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-3 md:mb-4">Corpo de Texto</h3>
                    <div className="space-y-3 md:space-y-4">
                      <TypographyExample text="Texto grande - Para introduções e destaques importantes" size="text-base md:text-lg" weight="font-normal" />
                      <TypographyExample text="Texto padrão - Para conteúdo principal e parágrafos" size="text-sm md:text-base" weight="font-normal" />
                      <TypographyExample text="Texto pequeno - Para legendas e informações secundárias" size="text-xs md:text-sm" weight="font-normal" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "components" && (
              <div className="space-y-6 md:space-y-8">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold gradient-text">Componentes</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Biblioteca de componentes reutilizáveis e responsivos
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <ComponentExample title="Botões">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <Button size="sm">Pequeno</Button>
                      <Button size="md">Médio</Button>
                      <Button size="lg">Grande</Button>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <Button variant="primary">Primário</Button>
                      <Button variant="secondary">Secundário</Button>
                      <Button variant="outline">Outline</Button>
                    </div>
                  </ComponentExample>

                  <ComponentExample title="Cards Estatísticos">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <StatCard
                        icon={<Heart className="text-red-500" size={16} />}
                        value="1.2k"
                        title="Curtidas"
                        change="+5.2%"
                        trend="up"
                      />
                      <StatCard
                        icon={<Eye className="text-blue-500" size={16} />}
                        value="3.4k"
                        title="Visualizações"
                        change="+12%"
                        trend="up"
                      />
                    </div>
                  </ComponentExample>
                </div>
              </div>
            )}

            {activeTab === "tokens" && (
              <div className="space-y-8 md:space-y-12">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold gradient-text">Design Tokens</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Tokens de design que definem os valores fundamentais do sistema: cores, tipografia, espaçamentos e sombras.
                  </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {/* Color Tokens */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Tokens de Cores</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-base font-medium text-neutral-700 mb-3">Cores da Marca</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#FF8C42' }}></div>
                            <p className="font-medium text-xs md:text-sm">Primary</p>
                            <p className="text-xs text-neutral-500 font-mono">#FF8C42</p>
                          </div>
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#1E3A5F' }}></div>
                            <p className="font-medium text-xs md:text-sm">Secondary</p>
                            <p className="text-xs text-neutral-500 font-mono">#1E3A5F</p>
                          </div>
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#00D4C4' }}></div>
                            <p className="font-medium text-xs md:text-sm">Accent</p>
                            <p className="text-xs text-neutral-500 font-mono">#00D4C4</p>
                          </div>
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#49679f' }}></div>
                            <p className="font-medium text-xs md:text-sm">Tertiary</p>
                            <p className="text-xs text-neutral-500 font-mono">#49679f</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base font-medium text-neutral-700 mb-3">Cores Semânticas</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#10B981' }}></div>
                            <p className="font-medium text-xs md:text-sm">Success</p>
                            <p className="text-xs text-neutral-500 font-mono">#10B981</p>
                          </div>
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#F59E0B' }}></div>
                            <p className="font-medium text-xs md:text-sm">Warning</p>
                            <p className="text-xs text-neutral-500 font-mono">#F59E0B</p>
                          </div>
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#EF4444' }}></div>
                            <p className="font-medium text-xs md:text-sm">Error</p>
                            <p className="text-xs text-neutral-500 font-mono">#EF4444</p>
                          </div>
                          <div className="text-center">
                            <div className="w-full h-16 md:h-20 rounded-xl shadow-md mb-2" style={{ backgroundColor: '#3B82F6' }}></div>
                            <p className="font-medium text-xs md:text-sm">Info</p>
                            <p className="text-xs text-neutral-500 font-mono">#3B82F6</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Tokens */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Tokens de Tipografia</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                        <h4 className="text-base font-medium text-neutral-700 mb-4">Tamanhos de Fonte</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs">XS - 12px</span>
                            <span className="text-xs font-mono text-neutral-500">0.75rem</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">SM - 14px</span>
                            <span className="text-xs font-mono text-neutral-500">0.875rem</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-base">BASE - 16px</span>
                            <span className="text-xs font-mono text-neutral-500">1rem</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg">LG - 18px</span>
                            <span className="text-xs font-mono text-neutral-500">1.125rem</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xl">XL - 20px</span>
                            <span className="text-xs font-mono text-neutral-500">1.25rem</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacing Tokens */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Tokens de Espaçamento</h3>
                    <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="w-4 h-4 bg-[#FF8C42] rounded mx-auto mb-2"></div>
                          <p className="text-xs font-medium">4 - 1rem</p>
                          <p className="text-xs text-neutral-500">16px</p>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-[#FF8C42] rounded mx-auto mb-2"></div>
                          <p className="text-xs font-medium">6 - 1.5rem</p>
                          <p className="text-xs text-neutral-500">24px</p>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-[#FF8C42] rounded mx-auto mb-2"></div>
                          <p className="text-xs font-medium">8 - 2rem</p>
                          <p className="text-xs text-neutral-500">32px</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-[#FF8C42] rounded mx-auto mb-2"></div>
                          <p className="text-xs font-medium">12 - 3rem</p>
                          <p className="text-xs text-neutral-500">48px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "patterns" && (
              <div className="space-y-8 md:space-y-12">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold gradient-text">Padrões de Design</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Padrões e diretrizes de design que garantem consistência e usabilidade em toda a aplicação.
                  </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {/* Layout Patterns */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Padrões de Layout</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                        <h4 className="font-medium text-neutral-900 mb-3">Grid System</h4>
                        <div className="space-y-2">
                          <div className="grid grid-cols-12 gap-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <div key={i} className="h-6 bg-[#FF8C42]/20 rounded"></div>
                            ))}
                          </div>
                          <p className="text-xs text-neutral-500">Sistema de grid de 12 colunas responsivo</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                        <h4 className="font-medium text-neutral-900 mb-3">Breakpoints</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>XS</span>
                            <span>0px+</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>SM</span>
                            <span>640px+</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>MD</span>
                            <span>768px+</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>LG</span>
                            <span>1024px+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Component Patterns */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Padrões de Componentes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                        <h4 className="font-medium text-neutral-900 mb-3">Estados de Interação</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                            <span className="text-sm">Default</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-[#FF8C42]/50 rounded"></div>
                            <span className="text-sm">Hover</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-[#FF8C42] rounded"></div>
                            <span className="text-sm">Active</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-neutral-200 rounded"></div>
                            <span className="text-sm">Disabled</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                        <h4 className="font-medium text-neutral-900 mb-3">Hierarquia Visual</h4>
                        <div className="space-y-3">
                          <div className="text-lg font-bold text-neutral-900">Título Principal</div>
                          <div className="text-base font-semibold text-neutral-700">Subtítulo</div>
                          <div className="text-sm text-neutral-600">Texto corpo</div>
                          <div className="text-xs text-neutral-500">Texto auxiliar</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accessibility Patterns */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Padrões de Acessibilidade</h3>
                    <div className="bg-white rounded-xl p-4 md:p-6 border border-neutral-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-green-600 font-bold">AA</span>
                          </div>
                          <p className="text-sm font-medium">Contraste WCAG AA</p>
                          <p className="text-xs text-neutral-500">Ratio mínimo 4.5:1</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-blue-600 font-bold">⌨</span>
                          </div>
                          <p className="text-sm font-medium">Navegação por Teclado</p>
                          <p className="text-xs text-neutral-500">Focus visível</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-purple-600 font-bold">📱</span>
                          </div>
                          <p className="text-sm font-medium">Touch Targets</p>
                          <p className="text-xs text-neutral-500">Mínimo 44px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ecommerce" && (
              <div className="space-y-8 md:space-y-12">
                <div className="text-center space-y-3 md:space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold gradient-text">E-commerce</h2>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                    Componentes e mocks específicos para aplicações de e-commerce, incluindo produtos, carrinho e checkout.
                  </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {/* Product Cards */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Cards de Produtos</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {/* Energético Premium */}
                      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group hover:border-[#00D4C4]/50 h-[450px] flex flex-col">
                        <div className="relative mb-4">
                          <img 
                            src="/bebida-energetico.jpg" 
                            alt="Energético Premium" 
                            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                              <Heart size={16} className="text-neutral-400 hover:text-red-500" />
                            </button>
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className="bg-[#CC5500] text-white text-xs font-medium px-2 py-1 rounded-full border-2 border-white">31% OFF</span>
                          </div>
                        </div>
                        <div className="space-y-3 flex-1 flex flex-col">
                          <div className="flex-1">
                            <h4 className="font-semibold text-neutral-900">Energético Premium</h4>
                            <p className="text-sm text-neutral-600 line-clamp-2">Bebida energética natural com guaraná orgânico, vitaminas e minerais essenciais para energia duradoura</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={12} className={i < 4 ? "text-yellow-400 fill-current" : "text-neutral-300"} />
                              ))}
                            </div>
                            <span className="text-xs text-neutral-500">(24 avaliações)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-neutral-900">R$ 8,90</span>
                              <span className="text-sm text-neutral-500 line-through">R$ 12,90</span>
                            </div>
                          </div>
                          <button className="w-full bg-gradient-to-r from-[#00D4C4] to-[#1E3A5F] text-white py-2.5 rounded-md font-medium hover:shadow-glow-blue hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-[#CC5500]/30 hover:border-[#CC5500]/60">
                            <ShoppingBag size={16} />
                            Adicionar ao Carrinho
                          </button>
                        </div>
                      </div>

                      {/* Vodka Premium */}
                      <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group hover:border-[#00D4C4]/50 h-[450px] flex flex-col">
                        <div className="relative mb-4">
                          <img 
                            src="/bebida-vodka.svg" 
                            alt="Vodka Premium" 
                            className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                              <Heart size={16} className="text-red-500 fill-current" />
                            </button>
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className="bg-[#CC5500] text-white text-xs font-medium px-2 py-1 rounded-full border-2 border-white">Premium</span>
                          </div>
                        </div>
                        <div className="space-y-3 flex-1 flex flex-col">
                          <div className="flex-1">
                            <h4 className="font-semibold text-neutral-900">Vodka Premium</h4>
                            <p className="text-sm text-neutral-600 line-clamp-2">Vodka importada premium 750ml, destilada cinco vezes para pureza máxima e sabor suave</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={12} className={i < 5 ? "text-yellow-400 fill-current" : "text-neutral-300"} />
                              ))}
                            </div>
                            <span className="text-xs text-neutral-500">(18 avaliações)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-neutral-900">R$ 45,90</span>
                            </div>
                          </div>
                          <button className="w-full bg-gradient-to-r from-[#00D4C4] to-[#1E3A5F] text-white py-2.5 rounded-md font-medium hover:shadow-glow-blue hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-[#CC5500]/30 hover:border-[#CC5500]/60">
                            <ShoppingBag size={16} />
                            Adicionar ao Carrinho
                          </button>
                        </div>
                      </div>

                      {/* Água Premium */}
                      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group hover:border-[#00D4C4]/50 h-[450px] flex flex-col">
                        <div className="relative mb-4">
                          <img 
                            src="/bebida-agua.jpg" 
                            alt="Água Premium" 
                            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                              <Heart size={16} className="text-neutral-400 hover:text-red-500" />
                            </button>
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className="bg-[#CC5500] text-white text-xs font-medium px-2 py-1 rounded-full border-2 border-white">Natural</span>
                          </div>
                        </div>
                        <div className="space-y-3 flex-1 flex flex-col">
                          <div className="flex-1">
                            <h4 className="font-semibold text-neutral-900">Água Premium</h4>
                            <p className="text-sm text-neutral-600 line-clamp-2">Água mineral natural premium, extraída de fontes cristalinas com minerais essenciais para hidratação</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={12} className={i < 4 ? "text-yellow-400 fill-current" : "text-neutral-300"} />
                              ))}
                            </div>
                            <span className="text-xs text-neutral-500">(12 avaliações)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-neutral-900">R$ 3,90</span>
                            </div>
                          </div>
                          <button className="w-full bg-gradient-to-r from-[#00D4C4] to-[#1E3A5F] text-white py-2.5 rounded-md font-medium hover:shadow-glow-blue hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-[#CC5500]/30 hover:border-[#CC5500]/60">
                            <ShoppingBag size={16} />
                            Adicionar ao Carrinho
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shopping Cart Mock */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Carrinho de Compras</h3>
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-neutral-100">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-neutral-900">Meu Carrinho</h4>
                          <span className="text-sm text-neutral-500">3 itens</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                            <img src="/bebida-energetico.jpg" alt="Energético" className="w-12 h-12 object-cover rounded-lg" />
                            <div className="flex-1">
                              <p className="font-medium text-sm">Energético Premium</p>
                              <p className="text-xs text-neutral-500">Quantidade: 2</p>
                            </div>
                            <span className="font-semibold text-sm">R$ 17,80</span>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-md hover:bg-brand-light-orange/10 transition-colors">
                            <img src="/bebida-vodka.svg" alt="Vodka" className="w-12 h-12 object-cover rounded-md" />
                            <div className="flex-1">
                              <p className="font-medium text-sm">Vodka Premium</p>
                              <p className="text-xs text-neutral-500">Quantidade: 1</p>
                            </div>
                            <span className="font-semibold text-sm">R$ 45,90</span>
                          </div>
                        </div>
                        
                        <div className="border-t pt-3">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold">Total:</span>
                            <span className="font-bold text-lg text-[#00D4C4]">R$ 63,70</span>
                          </div>
                          <button className="w-full bg-gradient-to-r from-[#00D4C4] to-[#1E3A5F] text-white py-3 rounded-md font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 border border-[#CC5500]/30 hover:border-[#CC5500]/60">
                            Finalizar Compra
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
