let
    dropMenuItems = document.querySelectorAll('.dropdown-menu-item');
    listItems = document.querySelectorAll('li');
    illustrationBox = document.querySelector('.card-illustration .box');

    for (let i = 0; i < dropMenuItems.length; i++)
    {
        dropMenuItems[i].addEventListener( 'click' , function (){
            if (dropMenuItems[i].parentElement.classList.contains('active')){
                dropMenuItems[i].parentElement.classList.remove('active');
            } else {
                for (let i = 0; i < listItems.length; i++)
                {
                    if( listItems[i].classList.contains('active')){
                        listItems[i].classList.remove('active');
                    }
                } 
                dropMenuItems[i].parentElement.classList.add('active');
            }
        });
        dropMenuItems[i].addEventListener( 'mouseenter' , function (){
            illustrationBox.classList.add('active');
        });
        dropMenuItems[i].addEventListener( 'mouseleave' , function (){
            if (illustrationBox.classList.contains('active')){
                illustrationBox.classList.remove('active');
            } 
        });
    }