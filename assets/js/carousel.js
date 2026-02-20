/**
 * carousel.js
 * Carrossel horizontal para projetos com navegação por setas e scroll
 */

document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
});

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const viewport = document.querySelector('.carousel-viewport');
    
    if (!track || !slides.length || !nextBtn || !prevBtn) return;
    
    let currentIndex = 0;
    
    // Função para calcular quantos slides são visíveis por vez
    function getSlidesPerView() {
        if (window.innerWidth >= 1200) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateIndicators();
    }
    
    // Criar indicadores (bolinhas)
    function createIndicators() {
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        const slidesPerView = getSlidesPerView();
        const indicatorCount = Math.max(1, slides.length - slidesPerView + 1);
        
        for (let i = 0; i < indicatorCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('indicator');
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
            
            indicatorsContainer.appendChild(dot);
        }
    }
    
    // Atualizar indicadores ativos
    function updateIndicators() {
        const dots = document.querySelectorAll('.indicator');
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Event listener para botão próximo
    nextBtn.addEventListener('click', () => {
        const slidesPerView = getSlidesPerView();
        const maxIndex = Math.max(0, slides.length - slidesPerView);
        
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        } else {
            // Opcional: voltar ao início (loop)
            currentIndex = 0;
            updateCarousel();
        }
    });
    
    // Event listener para botão anterior
    prevBtn.addEventListener('click', () => {
        const slidesPerView = getSlidesPerView();
        const maxIndex = Math.max(0, slides.length - slidesPerView);
        
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            // Opcional: ir para o final (loop)
            currentIndex = maxIndex;
            updateCarousel();
        }
    });
    
    // Suporte a scroll horizontal
    if (viewport) {
        viewport.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                
                const slidesPerView = getSlidesPerView();
                const maxIndex = Math.max(0, slides.length - slidesPerView);
                
                if (e.deltaX > 0 && currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                } else if (e.deltaX < 0 && currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            }
        }, { passive: false });
    }
    
    // Recriar indicadores ao redimensionar
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const slidesPerView = getSlidesPerView();
            const maxIndex = Math.max(0, slides.length - slidesPerView);
            
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            
            createIndicators();
            updateCarousel();
        }, 150);
    });
    
    // Inicializar
    createIndicators();
    updateCarousel();
}