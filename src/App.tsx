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
} from "lucide-react"

function App() {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const ColorSwatch = ({
    color,
    name,
    hex,
    description,
    usage,
  }: { color: string; name: string; hex: string; description: string; usage?: string }) => (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div
          className="w-full h-24 rounded-xl mb-4 shadow-sm relative overflow-hidden cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => navigator.clipboard.writeText(hex)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute bottom-2 right-2 bg-black/20 text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Clique para copiar
          </div>
        </div>
        <h4 className="font-semibold text-lg text-neutral-900 mb-1">{name}</h4>
        <p className="text-sm font-mono text-neutral-600 mb-2 tracking-wide">{hex}</p>
        <p className="text-neutral-700 text-sm leading-relaxed mb-3">{description}</p>
        {usage && (
          <div className="bg-neutral-50 rounded-lg p-3">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Uso Recomendado</span>
            <p className="text-xs text-neutral-700 mt-1">{usage}</p>
          </div>
        )}
      </div>
    </div>
  )

  const TypographyExample = ({
    title,
    fontSize,
    fontWeight,
    lineHeight,
    description,
    example,
    category,
  }: {
    title: string
    fontSize: string
    fontWeight: string
    lineHeight: string
    description: string
    example: string
    category?: string
  }) => (
    <div className="group bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-lg text-neutral-900">{title}</h4>
          {category && (
            <span className="bg-[#FF8C42] text-white px-2 py-1 rounded-full text-xs font-medium">{category}</span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-3 text-sm text-neutral-600">
          <div className="bg-neutral-50 p-3 rounded-lg">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wide">Tamanho</span>
            <p className="font-medium text-sm">{fontSize}</p>
          </div>
          <div className="bg-neutral-50 p-3 rounded-lg">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wide">Peso</span>
            <p className="font-medium text-sm">{fontWeight}</p>
          </div>
          <div className="bg-neutral-50 p-3 rounded-lg">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wide">Altura</span>
            <p className="font-medium text-sm">{lineHeight}</p>
          </div>
        </div>
      </div>
      <p className="text-neutral-700 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="border-t border-neutral-200 pt-4">
        <div
          className="text-neutral-900 group-hover:gradient-text transition-all duration-300"
          style={{
            /* Reduzindo tamanhos das fontes para serem mais delicadas */
            fontSize:
              fontSize === "4rem"
                ? "1.8rem"
                : fontSize === "2.5rem"
                  ? "1.4rem"
                  : fontSize === "1.75rem"
                    ? "1.2rem"
                    : fontSize,
            fontWeight,
            lineHeight,
          }}
        >
          {example}
        </div>
      </div>
    </div>
  )

  const ComponentExample = ({
    title,
    description,
    children,
    category,
  }: { title: string; description: string; children: React.ReactNode; category?: string }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-xl text-neutral-900">{title}</h4>
          {category && (
            <span className="bg-[#1E3A5F] text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
          )}
        </div>
        <p className="text-base text-neutral-700 leading-relaxed">{description}</p>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  )

  const Button = ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    icon,
  }: {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "glass"
    size?: "sm" | "md" | "lg" | "xl"
    children: React.ReactNode
    className?: string
    icon?: React.ReactNode
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95 relative overflow-hidden"

    const variantClasses = {
      /* Usando cores sólidas originais, removendo gradientes brilhosos */
      primary: "bg-[#FF8C42] text-white hover:bg-[#e67a3a] focus:ring-orange-300 shadow-md hover:shadow-lg",
      secondary: "bg-[#1E3A5F] text-white hover:bg-[#2a4a70] focus:ring-blue-300 shadow-md hover:shadow-lg",
      outline: "border-2 border-[#FF8C42] text-[#FF8C42] hover:bg-[#FF8C42] hover:text-white focus:ring-orange-300",
      ghost: "text-[#1E3A5F] hover:bg-orange-50 focus:ring-blue-300",
      gradient: "bg-gradient-to-r from-[#FF8C42] to-[#1E3A5F] text-white hover:shadow-lg focus:ring-orange-300",
      glass: "glass-effect text-[#1E3A5F] hover:bg-white/20 focus:ring-orange-300 backdrop-blur-xl",
    }

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-base",
      xl: "px-10 py-5 text-lg",
    }

    return (
      <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  }

  const ProgressBar = ({
    value,
    max = 100,
    label,
    color = "orange",
  }: { value: number; max?: number; label?: string; color?: "orange" | "blue" | "cyan" | "green" }) => {
    const percentage = (value / max) * 100
    const colorClasses = {
      orange: "bg-gradient-to-r from-orange-400 to-orange-600",
      blue: "bg-gradient-to-r from-blue-400 to-blue-600",
      cyan: "bg-gradient-to-r from-cyan-400 to-cyan-600",
      green: "bg-gradient-to-r from-green-400 to-green-600",
    }

    return (
      <div className="space-y-2">
        {label && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-neutral-700">{label}</span>
            <span className="text-sm font-mono text-neutral-600">
              {value}/{max}
            </span>
          </div>
        )}
        <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${colorClasses[color]} transition-all duration-500 ease-out rounded-full relative`}
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </div>
      </div>
    )
  }

  const Toggle = ({
    checked,
    onChange,
    label,
    size = "md",
  }: { checked: boolean; onChange: (checked: boolean) => void; label?: string; size?: "sm" | "md" | "lg" }) => {
    const sizeClasses = {
      sm: "w-10 h-6",
      md: "w-12 h-7",
      lg: "w-14 h-8",
    }

    const thumbSizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    }

    return (
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(!checked)}
          className={`${sizeClasses[size]} rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 ${
            checked
              ? "bg-gradient-to-r from-orange-400 to-orange-600 shadow-glow-orange"
              : "bg-neutral-300 hover:bg-neutral-400"
          }`}
        >
          <div
            className={`${thumbSizeClasses[size]} bg-white rounded-full shadow-lg transition-all duration-300 transform ${
              checked ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </button>
        {label && <span className="text-sm font-medium text-neutral-700">{label}</span>}
      </div>
    )
  }

  const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => (
    <div className="group relative inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-neutral-900"></div>
      </div>
    </div>
  )

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
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
            {icon}
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${trendColors[trend]}`}>{change}</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-1">{value}</h3>
        <p className="text-neutral-600">{title}</p>
      </div>
    )
  }

  const navigation = [
    { id: "overview", label: "Visão Geral", icon: Layout },
    { id: "brand", label: "Marca", icon: Target },
    { id: "colors", label: "Cores", icon: Palette },
    { id: "typography", label: "Tipografia", icon: Type },
    { id: "components", label: "Componentes", icon: Layout },
    { id: "patterns", label: "Padrões", icon: Layers },
    { id: "tokens", label: "Tokens", icon: Zap },
  ]

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-100/10 to-transparent rounded-full animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-100/10 to-transparent rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <header className="relative bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/capit-store-logo-primary.png" alt="Capit Store Logo" className="h-10 w-auto" />
              </div>
              <div className="hidden md:block">
                <h1 className="font-semibold text-lg gradient-text">Design System</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-sm text-neutral-600">
                <Star size={14} className="text-[#FF8C42]" />
                <span>Capit Store</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-2">
              {navigation.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 transform hover:scale-102 ${
                      activeTab === item.id
                        ? "bg-[#FF8C42] text-white shadow-md"
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

          <main className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-16">
                <section className="text-center py-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="mb-8 animate-slide-up">
                      <img
                        src="/capit-store-logo-primary.png"
                        alt="Capit Store Logo"
                        className="h-16 mx-auto mb-6 animate-float"
                      />
                    </div>
                    <h1
                      className="font-bold text-4xl gradient-text mb-6 animate-slide-up"
                      style={{ animationDelay: "200ms" }}
                    >
                      Design System
                    </h1>
                    <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "400ms" }}>
                      <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                        Sistema de design da <span className="font-semibold text-[#FF8C42]">Capit Store</span>,
                        estabelecendo padrões visuais consistentes para experiências digitais excepcionais.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button
                          size="lg"
                          className="group"
                          icon={<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                        >
                          <span>Explorar Componentes</span>
                        </Button>
                        <Button variant="outline" size="lg" icon={<Eye size={18} />}>
                          <span>Ver Exemplos</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Palette,
                      title: "Design Harmonioso",
                      description: "Elementos visuais consistentes que criam experiências memoráveis e profissionais",
                      color: "from-[#FF8C42] to-orange-600",
                    },
                    {
                      icon: Zap,
                      title: "Performance Otimizada",
                      description: "Componentes eficientes que combinam beleza visual com velocidade excepcional",
                      color: "from-[#1E3A5F] to-blue-700",
                    },
                    {
                      icon: Heart,
                      title: "Experiência Cuidadosa",
                      description: "Design que conecta com usuários através de interações delicadas e intuitivas",
                      color: "from-[#00D4C4] to-cyan-600",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                      style={{ animationDelay: `${600 + index * 200}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <feature.icon size={28} className="text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-3 text-center">{feature.title}</h3>
                        <p className="text-neutral-600 text-center leading-relaxed text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 shadow-lg border border-neutral-100">
                  <h3 className="font-semibold text-2xl text-neutral-900 mb-6 text-center">Sobre a Capit Store</h3>
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      A <span className="font-semibold text-[#FF8C42]">Capit Store</span> nasceu da união dos nomes das
                      filhas do proprietário:
                      <span className="font-semibold text-[#1E3A5F]"> Catarina</span> e{" "}
                      <span className="font-semibold text-[#1E3A5F]">Pietra</span>.
                    </p>
                    <p className="text-neutral-700 leading-relaxed">
                      Um e-commerce de produtos variados que carrega o amor familiar em sua essência, oferecendo
                      qualidade e confiança em cada transação.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "brand" && (
              <div className="space-y-12">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl gradient-text mb-4">Identidade da Marca</h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                      Uma marca que transcende o comum, criando conexões emocionais através de design excepcional
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                    <div className="text-center mb-8">
                      <h3 className="font-semibold text-xl text-neutral-900 mb-3">Variações do Logo</h3>
                      <p className="text-base text-neutral-600">
                        Adaptações versáteis para diferentes contextos e aplicações
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          src: "/capit-store-logo-primary.png",
                          title: "Logo Principal",
                          description: "Versão colorida para uso geral",
                          bg: "bg-neutral-50",
                        },
                        {
                          src: "/capit-store-logo-dark.jpg",
                          title: "Logo para Fundo Escuro",
                          description: "Versão otimizada para fundos escuros",
                          bg: "bg-[#1E3A5F]", // Usando a cor exata da marca
                          textColor: "text-white",
                        },
                        {
                          src: "/capit-store-logo-simple.png",
                          title: "Logo Simplificado",
                          description: "Versão sem ícone interno",
                          bg: "bg-neutral-50",
                        },
                        {
                          src: "/capit-store-logo-black.png",
                          title: "Logo Monocromático",
                          description: "Versão em preto para impressão",
                          bg: "bg-neutral-100",
                        },
                      ].map((logo, index) => (
                        <div
                          key={index}
                          className={`group text-center p-6 ${logo.bg} rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-1`}
                        >
                          <img
                            src={logo.src || "/placeholder.svg"}
                            alt={logo.title}
                            className="h-16 mx-auto mb-4 group-hover:scale-105 transition-transform duration-200"
                          />
                          <h4 className={`font-medium text-base mb-2 ${logo.textColor || "text-neutral-900"}`}>
                            {logo.title}
                          </h4>
                          <p className={`text-sm ${logo.textColor ? "text-neutral-300" : "text-neutral-600"}`}>
                            {logo.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "colors" && (
              <div className="space-y-12">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl gradient-text mb-4">Paleta de Cores</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                      Cores cuidadosamente selecionadas para criar experiências visuais harmoniosas e transmitir a
                      personalidade única da marca
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <ColorSwatch
                      color="#FF8C42"
                      name="Primary Orange"
                      hex="#FF8C42"
                      description="Cor principal vibrante que transmite energia, confiança e inovação"
                      usage="Botões primários, CTAs, destaques importantes"
                    />
                    <ColorSwatch
                      color="#1E3A5F"
                      name="Deep Blue"
                      hex="#1E3A5F"
                      description="Azul profundo que representa estabilidade, profissionalismo e confiança"
                      usage="Títulos, navegação, elementos estruturais"
                    />
                    <ColorSwatch
                      color="#00D4C4"
                      name="Cyan Accent"
                      hex="#00D4C4"
                      description="Ciano vibrante para destaques especiais e elementos interativos"
                      usage="Links, badges, elementos de destaque secundário"
                    />
                    <ColorSwatch
                      color="#10B981"
                      name="Success Green"
                      hex="#10B981"
                      description="Verde para confirmações, sucessos e estados positivos"
                      usage="Mensagens de sucesso, confirmações, indicadores positivos"
                    />
                    <ColorSwatch
                      color="#F59E0B"
                      name="Warning Amber"
                      hex="#F59E0B"
                      description="Âmbar para avisos e estados que requerem atenção"
                      usage="Alertas, avisos, estados de atenção"
                    />
                    <ColorSwatch
                      color="#EF4444"
                      name="Error Red"
                      hex="#EF4444"
                      description="Vermelho para erros e ações que requerem cuidado"
                      usage="Mensagens de erro, validações, ações destrutivas"
                    />
                  </div>
                </section>
              </div>
            )}

            {activeTab === "typography" && (
              <div className="space-y-12">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl gradient-text mb-4">Tipografia</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                      Sistema tipográfico que combina elegância e legibilidade, criando hierarquia visual clara e
                      personalidade marcante
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    <TypographyExample
                      title="Display Heading"
                      fontSize="2.5rem"
                      fontWeight="700"
                      lineHeight="1.2"
                      description="Para títulos principais que precisam causar impacto visual"
                      example="Título Principal"
                      category="Hero"
                    />
                    <TypographyExample
                      title="Large Heading"
                      fontSize="1.75rem"
                      fontWeight="600"
                      lineHeight="1.3"
                      description="Subtítulos importantes e seções principais"
                      example="Subtítulo Elegante"
                      category="Section"
                    />
                    <TypographyExample
                      title="Medium Heading"
                      fontSize="1.25rem"
                      fontWeight="600"
                      lineHeight="1.4"
                      description="Títulos de seções e componentes"
                      example="Título de Seção"
                      category="Component"
                    />
                    <TypographyExample
                      title="Body Text"
                      fontSize="1rem"
                      fontWeight="400"
                      lineHeight="1.6"
                      description="Texto principal para conteúdo geral"
                      example="Texto principal usado no conteúdo da aplicação"
                      category="Content"
                    />
                  </div>
                </section>
              </div>
            )}

            {activeTab === "components" && (
              <div className="space-y-12">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl gradient-text mb-4">Componentes</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                      Biblioteca de componentes elegantes projetados para criar experiências digitais memoráveis
                    </p>
                  </div>

                  <div className="space-y-8">
                    <ComponentExample
                      title="Botões"
                      description="Componentes de ação com design limpo e estados visuais claros"
                      category="Interação"
                    >
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-4">
                          <Button variant="primary" icon={<ShoppingBag size={18} />}>
                            Comprar Agora
                          </Button>
                          <Button variant="secondary" icon={<Heart size={18} />}>
                            Favoritos
                          </Button>
                          <Button variant="outline" icon={<Star size={18} />}>
                            Avaliar
                          </Button>
                          <Button variant="ghost" icon={<Info size={18} />}>
                            Informações
                          </Button>
                        </div>
                      </div>
                    </ComponentExample>

                    <ComponentExample
                      title="Cards de Produtos"
                      description="Apresentação elegante de produtos com imagens e informações essenciais"
                      category="E-commerce"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            name: "Energético Premium",
                            price: "R$ 8,90",
                            image: "/bebida-energetico.jpg",
                            description: "Bebida energética com sabor natural",
                          },
                          {
                            name: "Suco Natural",
                            price: "R$ 6,50",
                            image: "/bebida-suco.jpg",
                            description: "Suco 100% natural de frutas selecionadas",
                          },
                          {
                            name: "Água Premium",
                            price: "R$ 4,90",
                            image: "/bebida-agua.jpg",
                            description: "Água mineral premium com pH balanceado",
                          },
                        ].map((product, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-200 hover:-translate-y-1"
                          >
                            <div className="w-full h-32 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg mb-4 flex items-center justify-center">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="h-24 w-auto object-contain"
                              />
                            </div>
                            <h3 className="font-semibold text-base text-neutral-900 mb-2">{product.name}</h3>
                            <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-lg text-[#FF8C42]">{product.price}</span>
                              <Button variant="primary" size="sm">
                                Comprar
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ComponentExample>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "patterns" && (
              <div className="space-y-12">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl gradient-text mb-4">Padrões de Design</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                      Padrões reutilizáveis que garantem consistência e qualidade em toda a experiência
                    </p>
                  </div>

                  <div className="space-y-8">
                    <ComponentExample
                      title="Layout Hero"
                      description="Seção principal elegante para páginas de destino"
                      category="Layout"
                    >
                      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 text-center">
                        <h1 className="font-bold text-3xl gradient-text mb-4">Transforme Sua Experiência Digital</h1>
                        <p className="text-base text-neutral-600 mb-6 max-w-xl mx-auto">
                          Descubra produtos incríveis com a qualidade e confiança que você merece
                        </p>
                        <div className="flex justify-center gap-3">
                          <Button variant="primary" size="md" icon={<ArrowRight size={18} />}>
                            Começar Agora
                          </Button>
                          <Button variant="outline" size="md" icon={<Eye size={18} />}>
                            Ver Demonstração
                          </Button>
                        </div>
                      </div>
                    </ComponentExample>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "tokens" && (
              <div className="space-y-12">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl gradient-text mb-4">Design Tokens</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                      Valores fundamentais que definem a identidade visual e garantem consistência
                    </p>
                  </div>

                  <div className="space-y-8">
                    <ComponentExample
                      title="Espaçamento"
                      description="Sistema de espaçamento baseado em múltiplos de 4px para consistência visual"
                      category="Layout"
                    >
                      <div className="space-y-3">
                        {[
                          { name: "xs", value: "4px", class: "w-1" },
                          { name: "sm", value: "8px", class: "w-2" },
                          { name: "md", value: "16px", class: "w-4" },
                          { name: "lg", value: "24px", class: "w-6" },
                          { name: "xl", value: "32px", class: "w-8" },
                          { name: "2xl", value: "48px", class: "w-12" },
                        ].map((space) => (
                          <div key={space.name} className="flex items-center gap-4">
                            <div className={`${space.class} h-3 bg-[#FF8C42] rounded`}></div>
                            <span className="font-mono text-sm text-neutral-600 w-12">{space.name}</span>
                            <span className="font-mono text-sm text-neutral-800">{space.value}</span>
                          </div>
                        ))}
                      </div>
                    </ComponentExample>
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
