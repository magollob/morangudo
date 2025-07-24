"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Star, TrendingUp, Download, Shield, Headphones, Gift, Clock } from "lucide-react"
import Image from "next/image"

const names = [
  "Ana Silva",
  "Maria Santos",
  "João Oliveira",
  "Carla Mendes",
  "Pedro Costa",
  "Juliana Lima",
  "Rafael Souza",
  "Fernanda Alves",
  "Lucas Pereira",
  "Camila Rodrigues",
  "Bruno Ferreira",
  "Letícia Martins",
  "Diego Barbosa",
  "Patrícia Gomes",
  "Thiago Ribeiro",
  "Vanessa Cardoso",
  "Marcos Araújo",
  "Gabriela Nascimento",
  "Felipe Moreira",
  "Renata Castro",
  "André Dias",
  "Bianca Lopes",
  "Gustavo Ramos",
  "Priscila Teixeira",
  "Rodrigo Cunha",
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60) // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 2 * 60 * 60 // Reset to 2 hours
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
      <Clock className="w-4 h-4" />
      <span>
        {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  )
}

function FAQItem({ icon, question, answer }: { icon: string; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-0">
        <button
          className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50/50 transition-colors rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-200">{icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                {question}
              </h3>
            </div>
          </div>
          <div
            className={`transform transition-all duration-300 ml-4 ${isOpen ? "rotate-180 text-red-500" : "text-gray-400"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-6">
            <div className="pl-12">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MorangoDoAmorSales() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false)
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % names.length)
        setShowNotification(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getRandomTime = () => {
    return Math.floor(Math.random() * 16) + 1 // 1 to 17 minutes
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50">
      {/* Purchase Notification */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${showNotification ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">{names[currentNotification]}</p>
              <p className="text-xs text-gray-600">Comprou há {getRandomTime()} minutos</p>
            </div>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </CardContent>
        </Card>
      </div>

      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-3">
        <p className="text-black font-bold text-sm md:text-base">
          ⚠️ ATENÇÃO! Essa sobremesa está conquistando o Brasil! Não fique de fora!
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Aprenda a Nova Receita do Momento:
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Morango do Amor Perfeito 🍓❤️</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubra o segredo por trás do doce que conquistou as redes sociais – receita exclusiva, fácil e lucrativa!
          </p>
        </div>

        {/* Centralized Value Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <Badge className="bg-red-500 text-white px-4 py-2 text-lg mb-4">🍓 OFERTA ESPECIAL 🍓</Badge>
                <p className="text-gray-600 mb-4">Últimas vagas disponíveis com desconto exclusivo!</p>
              </div>

              <div className="text-center mb-6">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-red-600 font-bold mb-2">⚠️ VALOR SUBIU DE R$ 9,90 PARA R$ 14,90!</p>
                  <p className="text-xs text-gray-600 mb-3">O preço subirá novamente em:</p>
                  <CountdownTimer />
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-500 line-through">De R$ 47,90</span>
                  <span className="text-4xl md:text-5xl font-bold text-yellow-500">R$ 14,90</span>
                </div>
                <Badge className="bg-red-600 text-white px-3 py-1">69% de desconto</Badge>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open("https://pay.kiwify.com.br/CI9Z3I6", "_blank")}
              >
                🏆 QUERO APRENDER AGORA! 🏆
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                ⏰ Oferta válida apenas hoje! Restam apenas 23 vagas.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <Download className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Acesso imediato após o pagamento</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Garantia de 7 dias ou seu dinheiro de volta</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <Headphones className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Suporte prioritário por WhatsApp</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <Gift className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Um super brinde surpresa </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW: Mini Course Preview Section - Now as separate section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que você vai aprender no Mini Curso Morango do Amor 📚
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja o passo a passo completo do processo que transformará você em uma especialista no doce mais desejado
              do momento!
            </p>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative max-w-6xl mx-auto">
            <div
              className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex-shrink-0 w-[80vw] md:w-72">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="relative w-full aspect-[4/5] mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-14-54-06-4.jpg-gZRnxX8z8KBmmVrsdk3VP9BxWXyDfM.jpeg"
                        alt="Técnica da calda perfeita - Morango sendo mergulhado na calda vermelha brilhante"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-auto text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Técnica da Calda Perfeita</h3>
                      <p className="text-gray-600">
                        Segredo do ponto ideal que deixa a cobertura brilhante e irresistível
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex-shrink-0 w-[80vw] md:w-72">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="relative w-full aspect-[4/5] mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-14-54-06-5.jpg-EDOGAL9XjYkNNEpkoPEbDDFVoCMoEL.jpeg"
                        alt="Produção em escala - Bandejas com morangos do amor dourados"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-auto text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Produção em Escala</h3>
                      <p className="text-gray-600">Como fazer grandes quantidades de forma organizada e eficiente</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex-shrink-0 w-[80vw] md:w-72">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="relative w-full aspect-[4/5] mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-14-54-06-2.jpg-IBB3MKToUmDqBw7QB8z7FEpxsjLhVl.jpeg"
                        alt="Finalização profissional - Morangos do amor com cobertura dourada e morangos vermelhos"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-auto text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Finalização Profissional</h3>
                      <p className="text-gray-600">Apresentação impecável que conquista clientes e aumenta o valor</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex-shrink-0 w-[80vw] md:w-72">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="relative w-full aspect-[4/5] mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-14-54-06-3.jpg-5aLkCKCiJ2O48giiGvDhFUbcJPQx3K.jpeg"
                        alt="Embalagem perfeita - Morangos do amor em potinhos individuais"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-auto text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Embalagem Perfeita</h3>
                      <p className="text-gray-600">Acondicionamento profissional pronto para venda e entrega</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">← Deslize para ver todo o processo →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - MOVED UP */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Produção Simples e Rápida: Qualquer Um Consegue! ⚡
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Com o nosso e-book, a produção é tão simples que você terá mais tempo para lucrar e aproveitar! Veja como
              fica o resultado:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Processo%20completo.png-i9dNrFg6c2P8WDa973SA1QYo75OylP.jpeg"
                    alt="Depoimento Carla M. - Processo Completo"
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Processo Completo</h3>
                <p className="text-gray-600">Técnicas profissionais reveladas</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/producao%20profisional.png-AQXrvJ6vUIRgZGGba6skkMZhViVuEd.jpeg"
                    alt="Produção em Escala - Bandejas de Morangos do Amor"
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Produção Profissional</h3>
                <p className="text-gray-600">Escale seu negócio facilmente</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resultado%20final.png-g3ikcquw5BgqhNHuX7OsbkrL2muYBS.jpeg"
                    alt="Depoimento Fernanda R. - Resultado Final"
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Resultado Final</h3>
                <p className="text-gray-600">Doces irresistíveis que vendem sozinhos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Section - MOVED DOWN */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que você vai aprender? 📚</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um curso completo com tudo que você precisa para dominar essa receita e começar a lucrar com o doce que
              todos querem experimentar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Receita exclusiva do Morango do Amor Perfeito</h3>
                <p className="text-gray-600">Fórmula secreta que viralizou nas redes sociais</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Técnica do ponto ideal da calda</h3>
                <p className="text-gray-600">Aprenda o segredo para uma cobertura perfeita e brilhante</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Como rechear com perfeição</h3>
                <p className="text-gray-600">Técnicas profissionais para um recheio cremoso e saboroso</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Embalagens que encantam</h3>
                <p className="text-gray-600">Apresentação profissional que conquista clientes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transforme Sua Paixão por Doces em Uma Renda Incrível! 💰
            </h2>
            <p className="text-lg text-gray-600">
              O Morango do Amor não é apenas uma receita, é a sua porta de entrada para um negócio lucrativo e
              descomplicado! Por isso que vou te dar um <span className="text-red-600 font-bold">PRESENTÃO</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">O passo a passo completo</h4>
                <p className="text-sm text-gray-600">Receita detalhada do início ao fim</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Arquivo em PDF</h4>
                <p className="text-sm text-gray-600">Material para consulta offline</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Segredos para uma calda perfeita</h4>
                <p className="text-sm text-gray-600">Técnicas que ninguém te revela</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Preço super especial</h4>
                <p className="text-sm text-gray-600">De R$ 47,00 por apenas R$ 14,90</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Posts Reais das Redes Sociais! 📱</h2>
            <p className="text-lg text-gray-600">Veja o que estão falando sobre o Morango do Amor nas redes sociais</p>
          </div>

          {/* Primeira linha - Stories horizontais */}
          <div className="mb-8">
            <div className="relative">
              <div
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex-shrink-0">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stories%203-O5cy81M36rX5taSrHFVmza2x1ehNqu.jpeg"
                        alt="Depoimento @miriamcruz0508 - Arrasou demais, podem comprar sem medo"
                        width={300}
                        height={600}
                        className="rounded-lg object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stories%201-sWoDlK0QwzJp0OSaOQyL6lOWFf5gpG.jpeg"
                        alt="Depoimento @marcelladelflormes - Desbloqueando novo vício"
                        width={300}
                        height={600}
                        className="rounded-lg object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stories%202-q1iKbTndNQnv7Ju5RS1l4L6nPDxbGC.jpeg"
                        alt="Depoimento @dessasl_20 - Affz, chocoliciasdafabi"
                        width={300}
                        height={600}
                        className="rounded-lg object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stories-2zdzq7aNj97hU4y1z5rkZCaRWsmVhO.jpeg"
                        alt="Depoimento @vitoria_abeatriz - Vendas com comprovante"
                        width={300}
                        height={600}
                        className="rounded-lg object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">← Deslize para ver mais stories →</p>
              </div>
            </div>
          </div>

          {/* Segunda linha - 3 depoimentos */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed%20back8-Cn9e1CYh0V7xGVoameKaXU2dI4JVJz.png"
                  alt="Depoimento Mariana G."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback-wUrCJSKkpSuMSIZepZPiAqLCR99w86.png"
                  alt="Depoimento Juliana P."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback2-PT0V4GzMMR4OCrSxjU6VjoXorq6rC6.png"
                  alt="Depoimento Beatriz L."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Terceira linha - 3 depoimentos */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback3-4iN2VefHBGd40ZvIreYlEWLNKHYZUQ.png"
                  alt="Depoimento Carla M."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback253-ADU7jaiiprgyiOnsFPHsmM9UsaAWFd.png"
                  alt="Depoimento Ana Paula S."
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comentários das Nossas Alunas! 💬</h2>
            <p className="text-lg text-gray-600">
              Veja o que as confeiteiras estão falando nas redes sociais sobre o sucesso do Morango do Amor
            </p>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative">
            <div
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex-shrink-0">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-15-21-52-2.jpg-a7t396sYyggAJq99rf7IiV1W1pFpx4.jpeg"
                      alt="Depoimento confeitaria.dv - Morango do Amor esgotado"
                      width={300}
                      height={600}
                      className="rounded-lg object-contain"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="flex-shrink-0">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-15-21-52-5.jpg-UYAp58Lelj722tnjXEZ4b5CtxJ7vIr.jpeg"
                      alt="Depoimento _brunadoces2 - Todo mundo quer comprar"
                      width={300}
                      height={600}
                      className="rounded-lg object-contain"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="flex-shrink-0">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-12-15-21-52-4.jpg-UEtXCh68eH5nTWdB2iDSA1QIE6xq11.jpeg"
                      alt="Depoimento adrianabonfimmacarons - Esgotados"
                      width={300}
                      height={600}
                      className="rounded-lg object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">← Deslize para ver mais depoimentos →</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Exclusive Bonus Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎁 BÔNUS EXCLUSIVO: Mini Curso Brigadeiro Gourmet Perfeito!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Como um presente especial, você terá acesso ao nosso mini curso completo de Brigadeiro Gourmet, para
              diversificar seus produtos e aumentar ainda mais seus lucros!
            </p>
          </div>
          <div className="max-w-md mx-auto mb-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4">
                <Image
                  src="/images/brigadeiro-gourmet.png"
                  alt="Mini Curso Brigadeiro Gourmet Perfeito"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
          <Button
            className="w-full max-w-xs bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open("https://pay.kiwify.com.br/CI9Z3I6", "_blank")} // Replace with actual bonus link if different
          >
            🎉 QUERO MEU BÔNUS AGORA! 🎉
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Este bônus é liberado automaticamente após a compra do Morango do Amor.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">🔒 100% Seguro & Garantido</h2>
              <p className="text-lg text-gray-600 mb-8">
                Se você não ficar satisfeita com o curso em até 7 dias, devolvemos 100% do seu dinheiro. Sem perguntas,
                sem complicações.
              </p>

              <div className="mb-8">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-red-600 font-bold mb-2">⚠️ VALOR SUBIU DE R$ 9,90 PARA R$ 14,90!</p>
                  <p className="text-xs text-gray-600 mb-3">O preço subirá novamente em:</p>
                  <CountdownTimer />
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-500 line-through">De R$ 47,90</span>
                  <span className="text-4xl md:text-5xl font-bold text-yellow-500">R$ 14,90</span>
                </div>
                <Badge className="bg-red-600 text-white px-3 py-1 text-lg">69% de desconto</Badge>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-6 text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 mb-4"
                onClick={() => window.open("https://pay.kiwify.com.br/CI9Z3I6", "_blank")}
              >
                🏆 QUERO APRENDER AGORA! 🏆
              </Button>

              <p className="text-sm text-gray-500">⏰ Oferta válida apenas hoje! Restam apenas 23 vagas.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section - Now as last section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-100 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-50 rounded-full opacity-30 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Esclarecemos as principais dúvidas sobre o tutorial do Morango do Amor para que você possa tomar a melhor
              decisão
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* FAQ Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <FAQItem
                  icon="🍓"
                  question="É realmente fácil de fazer?"
                  answer="Sim! O tutorial foi desenvolvido especialmente para iniciantes. Com ingredientes simples que você encontra em qualquer supermercado e um passo a passo detalhado com fotos, qualquer pessoa consegue fazer em casa, mesmo sem experiência na cozinha. Nossas alunas conseguem fazer na primeira tentativa!"
                />

                <FAQItem
                  icon="💰"
                  question="Quanto posso ganhar vendendo?"
                  answer="O lucro varia conforme sua dedicação e região. Nossas alunas relatam ganhos de R$ 400 a R$ 3.000 por mês. Cada morango do amor pode ser vendido entre R$ 3,00 a R$ 8,00, com custo de produção muito baixo (cerca de R$ 0,80 por unidade). Com dedicação, é possível ter uma renda extra significativa!"
                />

                <FAQItem
                  icon="📱"
                  question="Como recebo o material?"
                  answer="Após a confirmação do pagamento, você recebe automaticamente por email o link para download do e-book em PDF de alta qualidade. O material fica disponível para sempre em sua conta e você pode baixar quantas vezes quiser. Acesso imediato, sem espera!"
                />

                <FAQItem
                  icon="🛒"
                  question="Onde encontro os ingredientes?"
                  answer="Todos os ingredientes são facilmente encontrados em supermercados comuns como Extra, Carrefour, Pão de Açúcar. Não precisa de nada especial ou importado. Incluímos uma lista completa de fornecedores e onde encontrar cada item pelo melhor preço no e-book."
                />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <FAQItem
                  icon="⏰"
                  question="Quanto tempo para dominar a receita?"
                  answer="A maioria das nossas alunas consegue fazer perfeitamente já na primeira tentativa! O processo todo leva cerca de 30 minutos. Com a prática, você consegue fazer em 15 minutos. É uma receita simples, mas com resultado profissional."
                />

                <FAQItem
                  icon="🔄"
                  question="E se eu não gostar do produto?"
                  answer="Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu investimento, sem perguntas ou burocracias. Basta enviar um email e processamos o reembolso em até 24 horas. Risco zero para você!"
                />

                <FAQItem
                  icon="📞"
                  question="Terei suporte se precisar de ajuda?"
                  answer="Sim! Oferecemos suporte prioritário via WhatsApp para todas as nossas alunas. Nossa equipe especializada está pronta para tirar suas dúvidas sobre a receita, técnicas e até dicas de vendas. Você nunca estará sozinha nessa jornada!"
                />

                <FAQItem
                  icon="🎁"
                  question="Tem algum bônus incluso?"
                  answer="Sim! Além do tutorial completo, você ganha um super brinde surpresa: um guia exclusivo com 10 variações da receita (morango com chocolate branco, com coco, com amendoim e muito mais) que vai multiplicar suas opções de venda!"
                />
              </div>
            </div>

            {/* CTA at bottom of FAQ */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ainda tem dúvidas?</h3>
                <p className="text-gray-600 mb-6">Nossa equipe está pronta para ajudar você!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                  >
                    💬 Falar no WhatsApp
                  </Button>
                  <span className="text-gray-500 text-sm">ou</span>
                  <Button
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://pay.kiwify.com.br/CI9Z3I6", "_blank")}
                  >
                    🍓 Comprar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Morango do Amor Perfeito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
