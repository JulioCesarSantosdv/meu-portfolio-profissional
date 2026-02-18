/**
 * carousel.js
 * Funcionalidade de carrossel para a seção de projetos
 */

document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
});

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track || !slides.length || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Event listener para botão próximo
    nextBtn.addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta ao primeiro slide
        }
        updateCarousel();
    });
    
    // Event listener para botão anterior
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1; // Vai para o último slide
        }
        updateCarousel();
    });
    
    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Atualizar carrossel quando a janela for redimensionada
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCarousel();
        }, 250);
    });
    
    // Inicializar carrossel
    updateCarousel();
    
    // Suporte a teclado (setas esquerda/direita)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
    
    // Suporte a swipe em dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe esquerda -> próximo
                nextBtn.click();
            } else {
                // Swipe direita -> anterior
                prevBtn.click();
            }
        }
    }
}