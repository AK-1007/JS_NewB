let buttons=document.querySelectorAll('.colorButton')
const body=document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click', function(e){
        body.style.backgroundColor =e.target.id
        
    })
})