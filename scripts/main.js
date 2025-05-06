// Easter egg 1: Click on the trigger to change background
document.addEventListener('DOMContentLoaded', function() {
    const easterEggTrigger = document.getElementById('easter-egg-trigger');
    
    if (easterEggTrigger) {
        easterEggTrigger.addEventListener('click', function() {
            document.body.classList.toggle('easter-egg-bg');
            
            // Show modal for first easter egg
            const modal = document.getElementById('easter-egg-modal');
            if (modal) {
                modal.style.display = 'flex';
                
                // Close modal when clicking on X
                const closeBtn = modal.querySelector('.close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', function() {
                        modal.style.display = 'none';
                    });
                }
                
                // Close modal when clicking outside
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }
        });
    }
    
    // Close portfolio modals when clicking on X
    const portfolioCloseBtns = document.querySelectorAll('.modal .close');
    portfolioCloseBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Easter egg 2: Keyboard sequence detection
    const konamiCode = ['1', '2', '3', '4'];
    let konamiCodePosition = 0;
    
    document.addEventListener('keydown', function(e) {
        const requiredKey = konamiCode[konamiCodePosition];
        
        if (e.key === requiredKey) {
            konamiCodePosition++;
            
            if (konamiCodePosition === konamiCode.length) {
                // Code completed - show easter egg
                showKeyboardEasterEgg();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });
    
    function showKeyboardEasterEgg() {
        // Create modal
        const modal = document.createElement('div');
        modal.id = 'keyboard-easter-egg';
        modal.className = 'modal';
        modal.style.display = 'flex';
        
        // Modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeBtn = document.createElement('a');
        closeBtn.href = '#';
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'none';
        });
        
            const title = document.createElement('h2');
            
            // Append elements to modal content
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(title);
                modal.appendChild(modalContent);
        
                // Append modal to body
                document.body.appendChild(modal);
            }
        });