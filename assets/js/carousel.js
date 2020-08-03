export class Carousel {
    constructor(indicadores, proximo, anterior, produtos) {
        this.navegacao = document.querySelector(indicadores)
        this.listaProdutos = document.querySelector(produtos)
        this.proximo = document.querySelector(proximo)
        this.anterior = document.querySelector(anterior)

        this.indicadores = this.getListaIndicadores()
        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()
        this.slideAtual = this.getSlideAtual()

        this.indiceDoSlideAtual = 0

        this.proximo.addEventListener('click', this.proximoSlide.bind(this))
        this.anterior.addEventListener('click', this.voltaSlide.bind(this))

        this.preparaSlides()
    }

    getListaIndicadores() {
        return Array.from(this.navegacao.children)
    }

    getListaSlides() {
        return Array.from(this.listaProdutos.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if(proximaPosicao > this.slides.length - 1) {
            proximaPosicao = proximaPosicao % this.slides.length
        }
        this.vaParaSlide(proximaPosicao)
    }

    voltaSlide() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if(posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }
        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao) {
        this.indiceDoSlideAtual = posicao
        const proximoSlide = this.getSlideAtual()

        this.scrollParaSlide(proximoSlide)
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutos.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}
