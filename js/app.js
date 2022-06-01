const menu = {
    init : function(){

        const buttonMenu = document.querySelector('.header__btn--menu-close');
        buttonMenu.addEventListener("click", menu.changeButton);

        const elementMenu = document.querySelectorAll('li');
        for(element of elementMenu){
        element.addEventListener("click", menu.handleElement);
        }


    },

    changeButton: function(){
        console.log('click');
        const changeEtat = document.querySelector('.header__btn div');
        console.log(changeEtat.classList.value);

        if(changeEtat.classList.value=== "header__btn--menu-close"){

            const barre1 = document.querySelector('.header__btn--menu-close1');
            barre1.classList.remove('header__btn--menu-close1');
            barre1.classList.add('header__btn--menu-open1');

            const barre2 = document.querySelector('.header__btn--menu-close2');
            barre2.classList.remove('header__btn--menu-close2');
            barre2.classList.add('header__btn--menu-open2');

            const barre3 = document.querySelector('.header__btn--menu-close3');
            barre3.classList.remove('header__btn--menu-close3');
            barre3.classList.add('header__btn--menu-open3')

            changeEtat.classList.remove('header__btn--menu-close');
            changeEtat.classList.add("header__btn--menu-open")

            const nav = document.querySelector('.container__flex--displayMenuNone');
            nav.classList.remove('container__flex--displayMenuNone');
            nav.classList.add('container__flex--displayMenu');

            const navElement = document.querySelector('.nav__close');
            navElement.classList.remove('nav__close');
            navElement.classList.add('nav__open');

        }

        else {

            const barre1 = document.querySelector('.header__btn--menu-open1');
            barre1.classList.remove('header__btn--menu-open1');
            barre1.classList.add('header__btn--menu-close1');

            const barre2 = document.querySelector('.header__btn--menu-open2');
            barre2.classList.remove('header__btn--menu-open2');
            barre2.classList.add('header__btn--menu-close2');

            const barre3 = document.querySelector('.header__btn--menu-open3');
            barre3.classList.remove('header__btn--menu-open3');
            barre3.classList.add('header__btn--menu-close3')

            changeEtat.classList.remove('header__btn--menu-open');
            changeEtat.classList.add("header__btn--menu-close")

            const nav = document.querySelector('.container__flex--displayMenu');
            nav.classList.remove('container__flex--displayMenu');
            nav.classList.add('container__flex--displayMenuNone');

            const navElement = document.querySelector('.nav__open');
            navElement.classList.remove('nav__open');
            navElement.classList.add('nav__close');
        }

    },

    handleElement:function(event){
        const block = event.currentTarget.value;
        console.log(block);

        const elt1 = document.querySelector('#elt1');
        const elt2 = document.querySelector('#elt2');
        const elt3 = document.querySelector('#elt3');
        const elt4 = document.querySelector('#elt4');
        const elt5 = document.querySelector('#elt5');

        const elt = document.querySelector('.main__elt');
        console.log(elt.classList.value);

            if(block === 1){ 
                elt1.classList.add('main__elt'); 
                elt1.classList.remove('main__elt-none');

                if(elt2.classList.value === 'main__elt' ){
                    elt2.classList.remove('main__elt');
                }

                if(elt3.classList.value === 'main__elt' ){
                    elt3.classList.remove('main__elt');
                }

                if(elt4.classList.value === 'main__elt' ){
                    elt4.classList.remove('main__elt');
                }

                if(elt5.classList.value === 'main__elt' ){
                    elt5.classList.remove('main__elt');
                } 
                
                elt2.classList.add('main__elt-none'); 
                elt3.classList.add('main__elt-none');  
                elt4.classList.add('main__elt-none'); 
                elt5.classList.add('main__elt-none'); 
      
                
            }  
            
            if (block === 2){ 
                elt2.classList.add('main__elt');  
                elt2.classList.remove('main__elt-none');

                

                if(elt1.classList.value === 'main__elt' ){
                    elt1.classList.remove('main__elt');
                }

                if(elt3.classList.value === 'main__elt' ){
                    elt3.classList.remove('main__elt');
                }

                if(elt4.classList.value === 'main__elt' ){
                    elt4.classList.remove('main__elt');
                }

                if(elt5.classList.value === 'main__elt' ){
                    elt5.classList.remove('main__elt');
                }
                
                elt1.classList.add('main__elt-none'); 
                elt3.classList.add('main__elt-none');  
                elt4.classList.add('main__elt-none'); 
                elt5.classList.add('main__elt-none'); 




            }

            if (block === 3){
                elt3.classList.add('main__elt');  
                elt3.classList.remove('main__elt-none');

                if(elt1.classList.value === 'main__elt' ){
                    elt1.classList.remove('main__elt');
                }

                if(elt2.classList.value === 'main__elt' ){
                    elt2.classList.remove('main__elt');
                }

                if(elt4.classList.value === 'main__elt' ){
                    elt4.classList.remove('main__elt');
                }

                if(elt5.classList.value === 'main__elt' ){
                    elt5.classList.remove('main__elt');
                }
                
                elt1.classList.add('main__elt-none'); 
                elt2.classList.add('main__elt-none');  
                elt4.classList.add('main__elt-none'); 
                elt5.classList.add('main__elt-none'); 
            }

            if (block === 4){
                elt4.classList.add('main__elt');  
                elt4.classList.remove('main__elt-none');

                if(elt1.classList.value === 'main__elt' ){
                    elt1.classList.remove('main__elt');
                }

                if(elt2.classList.value === 'main__elt' ){
                    elt2.classList.remove('main__elt');
                }

                if(elt3.classList.value === 'main__elt' ){
                    elt3.classList.remove('main__elt');
                }

                if(elt5.classList.value === 'main__elt' ){
                    elt5.classList.remove('main__elt');
                }
                
                elt1.classList.add('main__elt-none'); 
                elt2.classList.add('main__elt-none');  
                elt3.classList.add('main__elt-none'); 
                elt5.classList.add('main__elt-none'); 
            }

            if (block === 5) {
                elt5.classList.add('main__elt');  
                elt5.classList.remove('main__elt-none');

                

                if(elt1.classList.value === 'main__elt' ){
                    elt1.classList.remove('main__elt');
                }

                if(elt2.classList.value === 'main__elt' ){
                    elt2.classList.remove('main__elt');
                }

                if(elt3.classList.value === 'main__elt' ){
                    elt3.classList.remove('main__elt');
                }

                if(elt4.classList.value === 'main__elt' ){
                    elt4.classList.remove('main__elt');
                }
                
                elt1.classList.add('main__elt-none'); 
                elt2.classList.add('main__elt-none');  
                elt3.classList.add('main__elt-none'); 
                elt4.classList.add('main__elt-none'); 
            }
        

    }    
}

document.addEventListener('DOMContentLoaded', menu.init);