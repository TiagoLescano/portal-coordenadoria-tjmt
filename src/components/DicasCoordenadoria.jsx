import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Lightbulb, 
  Calendar, 
  Clock, 
  Search, 
  ChevronRight,
  TrendingUp,
  Users,
  FileText,
  Settings,
  Target,
  BookOpen,
  Star
} from 'lucide-react'

const DicasCoordenadoria = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  const dicas = [
    {
      id: 1,
      title: 'Como otimizar o fluxo de processos no PJe',
      description: 'Estratégias práticas para acelerar a tramitação processual e reduzir gargalos no sistema PJe, incluindo uso de filtros avançados e automações.',
      category: 'Produtividade',
      date: '15 Jul 2025',
      readTime: '5 min',
      views: 1250,
      likes: 89,
      icon: TrendingUp,
      featured: true,
      tags: ['PJe', 'Produtividade', 'Automação'],
      content: 'Dica completa sobre otimização...'
    },
    {
      id: 2,
      title: 'Melhores práticas para organização de gabinetes',
      description: 'Guia completo para estruturar e organizar o trabalho em gabinetes judiciais, incluindo gestão de prazos e distribuição de tarefas.',
      category: 'Gestão',
      date: '10 Jul 2025',
      readTime: '7 min',
      views: 980,
      likes: 67,
      icon: Users,
      featured: true,
      tags: ['Gabinete', 'Organização', 'Gestão'],
      content: 'Dica completa sobre organização...'
    },
    {
      id: 3,
      title: 'Checklist para preparação de sessões',
      description: 'Lista completa de verificações necessárias antes das sessões de julgamento para garantir eficiência e evitar problemas.',
      category: 'Procedimentos',
      date: '05 Jul 2025',
      readTime: '4 min',
      views: 756,
      likes: 45,
      icon: FileText,
      featured: false,
      tags: ['Sessões', 'Checklist', 'Preparação'],
      content: 'Dica completa sobre preparação...'
    },
    {
      id: 4,
      title: 'Configurações essenciais do sistema PJe',
      description: 'Como configurar adequadamente o PJe para maximizar produtividade, incluindo personalização de telas e atalhos.',
      category: 'Tecnologia',
      date: '28 Jun 2025',
      readTime: '6 min',
      views: 634,
      likes: 38,
      icon: Settings,
      featured: false,
      tags: ['PJe', 'Configuração', 'Personalização'],
      content: 'Dica completa sobre configurações...'
    },
    {
      id: 5,
      title: 'Estratégias para cumprimento de metas CNJ',
      description: 'Técnicas e metodologias para alcançar e superar as metas estabelecidas pelo Conselho Nacional de Justiça.',
      category: 'Gestão',
      date: '25 Jun 2025',
      readTime: '8 min',
      views: 892,
      likes: 72,
      icon: Target,
      featured: false,
      tags: ['CNJ', 'Metas', 'Planejamento'],
      content: 'Dica completa sobre metas...'
    },
    {
      id: 6,
      title: 'Guia rápido para novos servidores',
      description: 'Orientações essenciais para servidores recém-chegados à Coordenadoria Judiciária, incluindo principais sistemas e procedimentos.',
      category: 'Orientação',
      date: '20 Jun 2025',
      readTime: '10 min',
      views: 445,
      likes: 29,
      icon: BookOpen,
      featured: false,
      tags: ['Novos Servidores', 'Orientação', 'Procedimentos'],
      content: 'Dica completa para novos servidores...'
    }
  ]

  const categories = ['Todas', 'Produtividade', 'Gestão', 'Procedimentos', 'Tecnologia', 'Orientação']

  const filteredDicas = dicas.filter(dica => {
    const matchesSearch = dica.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dica.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dica.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'Todas' || dica.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredDicas = dicas.filter(dica => dica.featured)

  const getCategoryColor = (category) => {
    const colors = {
      'Produtividade': 'bg-green-100 text-green-800',
      'Gestão': 'bg-blue-100 text-blue-800',
      'Procedimentos': 'bg-purple-100 text-purple-800',
      'Tecnologia': 'bg-orange-100 text-orange-800',
      'Orientação': 'bg-pink-100 text-pink-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="dicas-coordenadoria" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <Lightbulb className="inline-block mr-3 h-8 w-8 text-yellow-500" />
            Dicas da Coordenadoria
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orientações práticas e melhores práticas para otimizar o trabalho judicial
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar dicas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Dicas */}
        {selectedCategory === 'Todas' && searchTerm === '' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              Dicas em Destaque
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredDicas.map((dica) => {
                const IconComponent = dica.icon
                return (
                  <Card key={dica.id} className="hover:shadow-lg transition-shadow cursor-pointer group border-l-4 border-l-yellow-500">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          <IconComponent className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(dica.category)}>
                            {dica.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            Destaque
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{dica.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {dica.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {dica.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Meta info */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {dica.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {dica.readTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>{dica.views} visualizações</span>
                            <span>•</span>
                            <span>{dica.likes} curtidas</span>
                          </div>
                        </div>
                        
                        {/* Action */}
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                          Ler dica completa
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* All Dicas */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'Todas' ? 'Todas as Dicas' : `Dicas de ${selectedCategory}`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDicas.map((dica) => {
              const IconComponent = dica.icon
              return (
                <Card key={dica.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <Badge className={getCategoryColor(dica.category)}>
                        {dica.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{dica.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {dica.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* Meta info */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {dica.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {dica.readTime}
                        </span>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{dica.views} visualizações</span>
                        <span>{dica.likes} curtidas</span>
                      </div>
                      
                      {/* Action */}
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                        Ler mais
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* No results */}
        {filteredDicas.length === 0 && (
          <div className="text-center py-12">
            <Lightbulb className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma dica encontrada</h3>
            <p className="text-gray-600">Tente ajustar os filtros ou termo de busca.</p>
          </div>
        )}

        {/* Load More */}
        {filteredDicas.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Ver Todas as Dicas
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">{dicas.length}</div>
              <div className="text-sm text-gray-600">Dicas Publicadas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {dicas.reduce((sum, dica) => sum + dica.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total de Visualizações</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categorias</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600">
                {Math.round(dicas.reduce((sum, dica) => sum + parseInt(dica.readTime), 0) / dicas.length)}
              </div>
              <div className="text-sm text-gray-600">Tempo Médio de Leitura (min)</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DicasCoordenadoria

