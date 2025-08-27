import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Download, 
  ExternalLink, 
  Search, 
  Filter,
  BookOpen,
  FileText,
  Users,
  Scale,
  Gavel,
  FileCheck
} from 'lucide-react'

const CatalogoManuais = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const manuais = [
    {
      id: 1,
      title: 'Manual do PJe - Segunda Instância',
      description: 'Guia completo para uso do sistema PJe no segundo grau de jurisdição, incluindo procedimentos de cadastro, movimentação processual e emissão de documentos.',
      category: 'Sistema',
      downloads: 1250,
      size: '2.5 MB',
      lastUpdate: '15/07/2025',
      icon: Scale,
      tags: ['PJe', 'Segunda Instância', 'Sistema'],
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Manual da Secretaria',
      description: 'Procedimentos e rotinas da secretaria judicial, incluindo protocolo, distribuição, autuação e arquivamento de processos.',
      category: 'Procedimentos',
      downloads: 890,
      size: '1.8 MB',
      lastUpdate: '10/07/2025',
      icon: FileText,
      tags: ['Secretaria', 'Protocolo', 'Distribuição'],
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Manual do Gabinete',
      description: 'Gestão e organização de gabinetes judiciais, incluindo fluxo de trabalho, organização de processos e gestão de prazos.',
      category: 'Gestão',
      downloads: 756,
      size: '2.1 MB',
      lastUpdate: '08/07/2025',
      icon: Users,
      tags: ['Gabinete', 'Gestão', 'Organização'],
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Manual do Magistrado em Sessão',
      description: 'Orientações para magistrados durante as sessões de julgamento, incluindo condução de sessões e procedimentos específicos.',
      category: 'Magistratura',
      downloads: 634,
      size: '1.9 MB',
      lastUpdate: '05/07/2025',
      icon: Gavel,
      tags: ['Magistrado', 'Sessão', 'Julgamento'],
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Guia de Certidão de Objeto e Pé',
      description: 'Como emitir e processar certidões de objeto e pé, incluindo modelos e procedimentos específicos para diferentes tipos de processo.',
      category: 'Certidões',
      downloads: 523,
      size: '1.2 MB',
      lastUpdate: '02/07/2025',
      icon: FileCheck,
      tags: ['Certidão', 'Objeto e Pé', 'Documentos'],
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Guia de Pedido de Sustentação Oral',
      description: 'Procedimentos para pedido e realização de sustentação oral, incluindo prazos, requisitos e modalidades disponíveis.',
      category: 'Procedimentos',
      downloads: 445,
      size: '1.5 MB',
      lastUpdate: '28/06/2025',
      icon: BookOpen,
      tags: ['Sustentação Oral', 'Procedimentos', 'Prazos'],
      downloadUrl: '#'
    }
  ]

  const categories = ['Todos', 'Sistema', 'Procedimentos', 'Gestão', 'Magistratura', 'Certidões']

  const filteredManuais = manuais.filter(manual => {
    const matchesSearch = manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manual.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manual.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'Todos' || manual.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category) => {
    const colors = {
      'Sistema': 'bg-blue-100 text-blue-800',
      'Procedimentos': 'bg-green-100 text-green-800',
      'Gestão': 'bg-purple-100 text-purple-800',
      'Magistratura': 'bg-red-100 text-red-800',
      'Certidões': 'bg-yellow-100 text-yellow-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="catalogo-manuais" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <BookOpen className="inline-block mr-3 h-8 w-8 text-blue-600" />
            Catálogo de Manuais
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Materiais técnicos e guias especializados para apoio às atividades judiciais
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar manuais..."
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

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">{manuais.length}</div>
              <div className="text-sm text-gray-600">Manuais Disponíveis</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {manuais.reduce((sum, manual) => sum + manual.downloads, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total de Downloads</div>
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
                {Math.max(...manuais.map(m => new Date(m.lastUpdate.split('/').reverse().join('-')).getTime())) && 
                 new Date().toLocaleDateString('pt-BR')}
              </div>
              <div className="text-sm text-gray-600">Última Atualização</div>
            </CardContent>
          </Card>
        </div>

        {/* Manuais Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredManuais.map((manual) => {
            const IconComponent = manual.icon
            return (
              <Card key={manual.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className={getCategoryColor(manual.category)}>
                      {manual.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{manual.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {manual.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {manual.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Info */}
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{manual.downloads} downloads</span>
                      <span>{manual.size}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Atualizado em {manual.lastUpdate}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-1" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No results */}
        {filteredManuais.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum manual encontrado</h3>
            <p className="text-gray-600">Tente ajustar os filtros ou termo de busca.</p>
          </div>
        )}

        {/* Load More */}
        {filteredManuais.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Carregar Mais Manuais
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CatalogoManuais

