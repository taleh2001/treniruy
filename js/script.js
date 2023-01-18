let info = document.querySelector('.search__info')
let img = document.querySelector('.search__img')
let number = document.querySelector('.search__number')
let text = document.querySelector('.search__text')

//let numberInfo = text.value.length
let i = number.innerHTML
parseInt(i)


document.addEventListener('click', textInfo)

function textInfo(event) {
    if (event.target.closest('.search__img')) {
        img.classList.toggle('_active')
        info.classList.toggle('_active')

    }
    if (!event.target.closest('.search__img') && !event.target.closest('.search__info')) {
        img.classList.remove('_active')
        info.classList.remove('_active')
    }
}



text.addEventListener('keyup', key)
text.addEventListener('keydown', key)

function key(){
    let result = i - text.value.length
    number.innerHTML = result
    
}


