let dots = document.querySelector('.items__button');
const sliderList = document.querySelector('.slider__list');
const sliderTrack = document.querySelector('.all__items');
const slider = document.querySelector('.items__slider');
let allowSwipe = true;
let transition = true;
let nextTrf = 0;
let prevTrf = 0;
let slideIndex = 0;
let posInit = 0;
let posY1 = 0;
let posX1 = 0;

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


// touch

sliderList.classList.add('grab');

function swipeStart(){
    let evt = getEvent();

    //console.log(evt);

    if(allowSwipe){
        transition = true;

        slideIndex = putActiveDot();

        nextTrf = (slideIndex + 1) * -930;
        prevTrf = (slideIndex - 1) * -930;

        posInit = posX1 = evt.clientX;
        posY1 = evt.clientY;

        sliderTrack.style.transition = '';

        /* console.log('slideIndex:', slideIndex, 'nextTrf:', nextTrf, 'prevTrf:', prevTrf, 'posInit:', posInit, 
        'posY1:', posY1 ); */

       /*  document.addEventListener('touchmove', swipeAction);
        document.addEventListener('mousemove', swipeAction);
        document.addEventListener('touchend', swipeEnd);
        document.addEventListener('mouseup', swipeEnd); */

    }

    sliderList.classList.remove('grab');
    sliderList.classList.add('grabbing');
}

getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
},

slider.addEventListener('mousedown', swipeStart);

