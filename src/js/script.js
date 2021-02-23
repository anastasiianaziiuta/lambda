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

        new WOW().init();
    }); 
