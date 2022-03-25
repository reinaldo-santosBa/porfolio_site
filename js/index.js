function abrirMenu(){
    var menuToogle = document.querySelector(".menu .menuToogle");
    var span = document.querySelectorAll(".menu .menuToogle span");

    var menu = document.querySelector(".menu");

    if( menu.style.width == '200px' ){
        menu.style.width = '75px';
        menuToogle.style.paddingRight = '0px';
        for(let i = 0; i < span.length; i++){
            switch(i){
                case 0:
                    span[i].style.opacity = 1;
                break;
                case 1:
                    span[i].style.transform = 'rotate(0deg)';
                    span[i].style.position = 'relative';            
                break;
                case 2:
                    span[i].style.transform = 'rotate(0deg)';
                    span[i].style.position = 'relative';            
                break;
            }
        }
        menuToogle.style.alignItems = 'center';

    }else{
        menu.style.width = '200px';
        menuToogle.style.alignItems = 'flex-end';
        menuToogle.style.paddingRight = '20px';
        for(let i = 0; i < span.length; i++){
            switch(i){
                case 0:
                    span[i].style.opacity = 0;
                break;
                case 1:
                    span[i].style.transform = 'rotate(45deg)';
                    span[i].style.position = 'absolute';            
                break;
                case 2:
                    span[i].style.transform = 'rotate(-45deg)';
                    span[i].style.position = 'absolute';
                break;
            }
        }
    }

}