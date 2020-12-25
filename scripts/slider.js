let dots = document.querySelector('.items__button');

dots.addEventListener('click', function(e){
    if(e.target.tagName === 'UL'){
        return ;
    } else if( e.target.closest('li').tagName === 'LI'){
        let prevActiveDot = putActiveDot();
        let nextActiveDot = '';
        let difference = 0;
        let activeItem = document.querySelector('.dot__active');
        let nextActive = e.target.closest('li');
        activeItem.classList.remove('dot__active');
        nextActive.classList.add('dot__active');
        nextActiveDot = putActiveDot();

        if(prevActiveDot !== nextActiveDot){
            difference = Number(nextActiveDot) - Number(prevActiveDot);
            //console.log('prev:' ,prevActiveDot, 'curr:', nextActiveDot   , difference);
            //console.log(putActiveSlide(3));
            putActiveSlide(nextActiveDot);
        }
        
        ///
        centerActiveSlide();
    } 
})

function moveSlide(indexItem = 0, triggerBlock, widthItem = 0){
    document.querySelector(triggerBlock).style.transform = `translate3d(${/* (-920*indexItem) - 430 */ widthItem-(930*indexItem)}px, 0px, 0px)`
}

function putActiveDot(){
    let indexActive = 0;
    let items = document.querySelectorAll('.items__button li');
    items.forEach(function(item, index){
        if(item.classList.contains('dot__active') ){
            indexActive = index;
        }
    })
    return indexActive +1;
}

function putActiveSlide(nextActive){
    let indexActive = 0;
    let container = document.querySelectorAll('.all__items .item__photo');
    container.forEach(function(item, index){
        if(item.classList.contains('active__item')){
            //indexActive = index;
            item.classList.remove('active__item');
        }
        if(item.classList.contains('prev__item') ){
            item.classList.remove('prev__item');
        }
        if(item.classList.contains('next__item') ){
            item.classList.remove('next__item');
        }
    })
    container[nextActive-1].classList.add('prev__item');
    container[nextActive].classList.add('active__item');
    container[nextActive+1].classList.add('next__item');
   // container
    console.log(nextActive);
    return indexActive;
}

function centerActiveSlide(){
    let allWidth = document.body.clientWidth;
    let countItems = allWidth / 930;
    let [int, dec] = String(countItems).split('.');
    let result = 0;
    let indexItem = putActiveDot();

    if(dec >= 30){
        result = (allWidth - (930*int)) / 2;
    }

    moveSlide(indexItem, '.all__items', result);
}

window.addEventListener('resize', centerActiveSlide);

centerActiveSlide();