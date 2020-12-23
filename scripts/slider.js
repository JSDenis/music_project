let container = document.querySelector('.all__items');
let dots = document.querySelector('.items__button');

dots.addEventListener('click', function(e){
    if(e.target.tagName === 'UL'){
        return ;
    } else if( e.target.closest('li').tagName === 'LI'){
        let activeItem = document.querySelector('.dot__active');
        let nextActive = e.target.closest('li');
        let indexItem = 0;
        activeItem.classList.remove('dot__active');
        nextActive.classList.add('dot__active');
        ///
        
        indexItem = putActiveDot();
        moveSlide(indexItem, '.all__items', 0);
    } 
})

function moveSlide(indexItem = 0, triggerBlock, widthItem = 0){
    document.querySelector(triggerBlock).style.transform = `translate3d(${(-920*indexItem) - 430}px, 0px, 0px)`
}

function putActiveDot(){
    let indexActive = 0;
    let items = document.querySelectorAll('.items__button li');
    items.forEach(function(item, index){
        if(item.classList.contains('dot__active') ){
            indexActive = index;
        }
    })
    return indexActive;
}