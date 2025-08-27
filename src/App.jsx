import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import CatalogoManuais from './components/CatalogoManuais.jsx'
import DicasCoordenadoria from './components/DicasCoordenadoria.jsx'
import { 
  Scale, 
  FileText, 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  Download, 
  ExternalLink,
  BookOpen,
  Lightbulb,
  Clock,
  MapPin,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Manuais', href: '#manuais' },
    { name: 'Dicas', href: '#dicas' },
    { name: 'Notícias', href: '#noticias' },
    { name: 'Contato', href: '#contato' }
  ]

  const quickAccessItems = [
    {
      title: 'Consulta de Sessões',
      description: 'Consulte as sessões de julgamento',
      icon: Calendar,
      href: '#sessoes'
    },
    {
      title: 'Acesso ao PJe',
      description: 'Sistema de Processo Judicial Eletrônico',
      icon: Scale,
      href: '#pje'
    },
    {
      title: 'Plantão Judiciário',
      description: 'Informações sobre plantão judicial',
      icon: Clock,
      href: '#plantao'
    },
    {
      title: 'Catálogo de Manuais',
      description: 'Acesse todos os manuais disponíveis',
      icon: BookOpen,
      href: '#manuais'
    }
  ]

  const featuredServices = [
    {
      title: 'Na Rota da Inspeção',
      description: 'Acompanhe as inspeções judiciais',
      icon: MapPin,
      color: 'bg-blue-500'
    },
    {
      title: 'Manual de Gestão de Gabinetes',
      description: 'Guia completo para gestão de gabinetes - 2° Grau',
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: 'Atendimento à Pessoa Surda',
      description: 'Recursos de acessibilidade e atendimento especializado',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Calendário das Sessões',
      description: 'Cronograma completo das sessões de julgamento',
      icon: Calendar,
      color: 'bg-orange-500'
    }
  ]

  const noticias = [
    {
      title: 'TJMT lança manual para uniformizar procedimentos durante os plantões judiciais',
      date: '10/07/2025 às 19:30',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'TJMT cumpre 100% das metas do CNJ antes do prazo e reforça excelência nos serviços à população',
      date: '10/07/2025 às 15:41',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Projeto Integra promove interação entre Secretarias das Câmaras e Departamento do 2° Grau no TJMT',
      date: '02/07/2025 às 18:00',
      image: '/api/placeholder/400/200'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Scale className="h-8 w-8 text-blue-600" />
                <div className="ml-3">
                  <div className="text-sm font-semibold text-gray-900">TJMT</div>
                  <div className="text-xs text-gray-600">Coordenadoria Judiciária</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Área Administrativa */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Área Administrativa
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="outline" size="sm" className="mx-3 mt-4">
                  Área Administrativa
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Coordenadoria Judiciária
                <span className="block text-2xl md:text-3xl font-normal text-blue-200 mt-2">
                  Tribunal de Justiça de Mato Grosso
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Apoio técnico e estratégico para o pleno funcionamento da Justiça. 
                Eficiência, inovação e compromisso com a excelência judicial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Acessar Serviços
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
                  Catálogo de Manuais
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-3"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-2xl">
                  <Scale className="h-16 w-16 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Portal Integrado</h3>
                  <p className="text-gray-600">Acesso centralizado a todos os recursos e serviços da Coordenadoria Judiciária.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acesso Rápido</h2>
            <p className="text-lg text-gray-600">Principais serviços e recursos em um clique</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços em Destaque</h2>
            <p className="text-lg text-gray-600">Principais recursos disponibilizados pela Coordenadoria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                    Clique aqui
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de Manuais */}
      <CatalogoManuais />

      {/* Dicas da Coordenadoria */}
      <DicasCoordenadoria />

      {/* Notícias */}
      <section id="noticias" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notícias</h2>
            <p className="text-lg text-gray-600">Últimas atualizações e informações</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{noticia.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {noticia.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Todas as Notícias
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>coordenadoria.judiciaria@tjmt.jus.br</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>(65) 3617-3091</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                  <div>
                    <div>Atendimento: Segunda a Sexta</div>
                    <div className="text-gray-300">08h às 18h</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Diário da Justiça Eletrônico</h3>
              <p className="text-gray-300 mb-4">DJE: 65 3617-3198</p>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-gray-900">
                  Acessar DJE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Scale className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-sm">© 2025 - TJMT - Tribunal de Justiça de Mato Grosso</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Aviso de Privacidade</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Acessibilidade</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Mapa do Site</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

