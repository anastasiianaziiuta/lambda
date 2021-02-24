    window.addEventListener('DOMContentLoaded', function (){
        //PageUp

        let pageUp = document.querySelector('.js-pageup');

        window.addEventListener('scroll', showPageUp);
        
            function showPageUp(){
                let scrolled = window.pageYOffset,
                    coords = document.documentElement.clientHeight;
                
                    if (scrolled > coords) {
                        pageUp.style.display = 'block';
                    }
                    if (scrolled < coords) {
                        pageUp.style.display = '';
                    }
            }
        showPageUp();

        //Mobile menu

        let mobileMenu = document.querySelector('#js-navigation'),
        openMenu = document.querySelector('#js-menu'),
        closeMenu = document.querySelector('.js-close');

        openMenu.addEventListener('click', () =>{
            if ( window.innerWidth <=769 ) {
                mobileMenu.classList.add('header__menu-items--active');
                openMenu.style.display = 'none';
                closeMenu.style.display = 'block';
            }

        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('header__menu-items--active');
            closeMenu.style.display = 'none';
            openMenu.style.display = 'block';
            
        });
    
        //Service min

        let acc = document.getElementsByClassName('js-title');
        

            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    } else {
                        for (el of acc){
                            el.classList.remove('active');
                        }
                        this.classList.add('active');
                    }
               });
            }

        new WOW().init();
    }); 
