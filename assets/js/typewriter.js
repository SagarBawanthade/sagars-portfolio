// Ultra-smooth typewriter effect for hero title
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  
  if (!heroTitle) return;
  
  const originalText = heroTitle.textContent;
  const typingSpeed = 50; // faster, smoother typing
  const pauseAfterComplete = 2000;
  const showCursor = true;
  
  // Clear the original text
  heroTitle.textContent = '';
  
  // Add smooth cursor styling
  if (showCursor) {
    heroTitle.style.position = 'relative';
    
    // Add enhanced cursor CSS
    const style = document.createElement('style');
    style.textContent = `
      .hero-title {
        overflow: hidden;
      }
      
      .hero-title::after {
        content: '|';
        color: inherit;
        animation: smoothBlink 1.2s ease-in-out infinite;
        margin-left: 3px;
        font-weight: 300;
        opacity: 0.8;
      }
      
      .hero-title.typing-complete::after {
        animation: fadeOut 0.5s ease-out forwards;
      }
      
      .typing-char {
        display: inline-block;
        animation: charAppear 0.3s ease-out forwards;
        opacity: 0;
        transform: translateY(10px);
      }
      
      @keyframes smoothBlink {
        0%, 45% { 
          opacity: 1; 
          transform: scaleY(1);
        }
        50%, 95% { 
          opacity: 0.2; 
          transform: scaleY(0.8);
        }
        100% { 
          opacity: 1; 
          transform: scaleY(1);
        }
      }
      
      @keyframes charAppear {
        0% {
          opacity: 0;
          transform: translateY(15px) scale(0.8);
        }
        50% {
          opacity: 0.7;
          transform: translateY(5px) scale(1.05);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes fadeOut {
        0% { 
          opacity: 0.8; 
          transform: scaleY(1);
        }
        100% { 
          opacity: 0; 
          transform: scaleY(0);
        }
      }
      
      /* Add smooth text shadow effect */
      .hero-title.typing-active {
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: text-shadow 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }
  
  let currentIndex = 0;
  let isTyping = false;
  
  function smoothTypeWriter() {
    if (isTyping) return;
    
    isTyping = true;
    heroTitle.classList.remove('typing-complete');
    heroTitle.classList.add('typing-active');
    heroTitle.innerHTML = '';
    currentIndex = 0;
    
    function addNextCharacter() {
      if (currentIndex < originalText.length) {
        const char = originalText.charAt(currentIndex);
        
        // Create span for each character with smooth animation
        const charSpan = document.createElement('span');
        charSpan.className = 'typing-char';
        charSpan.textContent = char === ' ' ? '\u00A0' : char; // Non-breaking space
        
        heroTitle.appendChild(charSpan);
        
        // Trigger animation
        setTimeout(() => {
          charSpan.style.opacity = '1';
          charSpan.style.transform = 'translateY(0) scale(1)';
        }, 10);
        
        currentIndex++;
        
        // Variable speed for natural typing rhythm
        const randomSpeed = typingSpeed + (Math.random() * 30 - 15);
        setTimeout(addNextCharacter, Math.max(30, randomSpeed));
      } else {
        // Typing complete
        isTyping = false;
        heroTitle.classList.remove('typing-active');
        
        // Smooth completion effect
        setTimeout(() => {
          if (showCursor) {
            heroTitle.classList.add('typing-complete');
          }
          
          // Add final glow effect
          heroTitle.style.textShadow = '0 0 20px rgba(0, 0, 0, 0.1)';
          setTimeout(() => {
            heroTitle.style.textShadow = '';
          }, 1000);
        }, 200);
      }
    }
    
    addNextCharacter();
  }
  
  // Start with smooth fade-in
  heroTitle.style.opacity = '0';
  heroTitle.style.transform = 'translateY(20px)';
  heroTitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  
  setTimeout(() => {
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
    
    setTimeout(smoothTypeWriter, 300);
  }, 200);
  
  // Smooth restart on click
  heroTitle.addEventListener('click', () => {
    if (!isTyping) {
      heroTitle.style.transform = 'scale(0.98)';
      setTimeout(() => {
        heroTitle.style.transform = 'scale(1)';
        smoothTypeWriter();
      }, 100);
    }
  });
  
  // Add hover effect
  heroTitle.addEventListener('mouseenter', () => {
    if (!isTyping) {
      heroTitle.style.transform = 'scale(1.02)';
      heroTitle.style.textShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
  });
  
  heroTitle.addEventListener('mouseleave', () => {
    if (!isTyping) {
      heroTitle.style.transform = 'scale(1)';
      heroTitle.style.textShadow = '';
    }
  });
});