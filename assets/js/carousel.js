export class Carousel {
    constructor(indicadores, proximo, anterior, produtos) {
        this.navegacao = document.querySelector(indicadores)
        this.listaProdutos = document.querySelector(produtos)
        this.proximo = document.querySelector(proximo)
        this.anterior = document.querySelector(anterior)

        this.indicadores = this.getListaIndicadores()
        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

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

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}
