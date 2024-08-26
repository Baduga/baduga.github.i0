const sliders = document.querySelectorAll('.slider');

//const body = document.querySelector('.')
for(const slider of sliders){
    slider.addEventListener('click',()=>{
        clearActiveClasses()
        slider.classList.add('active')


    })
}
function clearActiveClasses(){
    for(const slider of sliders){
        slider.classList.remove('active')
    }
}