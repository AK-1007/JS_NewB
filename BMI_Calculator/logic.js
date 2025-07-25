// this will get empty value as page load
// const height=parseInt(document.getElementById('height').value);
// const weight=parseInt(document.getElementById('weight').value);
// const BMIResult=document.querySelector('#resultBox')
const button=document.querySelector('.calButton')

button.addEventListener('click', function(e){
        // body.style.backgroundColor =e.target.id
    e.preventDefault();
    const BMIResult=document.querySelector('#resultBox')
    const height=parseFloat(document.getElementById('height').value);
    const weight=parseFloat(document.getElementById('weight').value);
    if(height === '' || height<0 || isNaN(height)){
        BMIResult.textContent="please give a valid height!"
    }else if(weight === '' || weight<0 || isNaN(weight)){
        BMIResult.textContent="please give a valid weight!"
    }else{
        let calculatedValue=(weight/((height*height)/10000)).toFixed(2)
        let category=''
        switch (true) {
            case (calculatedValue<18.5):
                category="Underweight"
                break;
            case (calculatedValue >= 18.5 && calculatedValue < 24.9):
                category="Normal Weight"
                break;
            case (calculatedValue >= 25.0):
                category="Overweight"
                break;
        
            default:
                category="Invalid BMI"
                break;
        }
        
        BMIResult.textContent=`Your BMI is ${calculatedValue} and you are ${category}`
    }
    
    
    
        
})

