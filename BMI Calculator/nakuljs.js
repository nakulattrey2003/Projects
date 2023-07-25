const form = document.querySelector('#forms');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);  // inout me value string me hoti hai usko integer me convert karne ke lie ye laga rahe hai
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)) // agar input number hi nahi hai to recommended technique hai NaN
    {
        results.innerHTML = `Please give a valid Height (${height})`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) // agar input number hi nahi hai to recommended technique hai NaN
    {
        results.innerHTML = `Please give a valid Height (${weight})`;
    }
    else
    {
        const bmi  = (weight / ((height*height)/10000)).toFixed(2)   // matlab 2 decima places tak hi ae value
        // showing result
        if(bmi < 18.60)
        {
            results.innerHTML = `<span>${bmi}</span> : Under Weight`;
        }
        else if(bmi > 18.60 && bmi < 24.90)
        {
            results.innerHTML = `<span>${bmi}</span> : Normal Range`;
        }
        if(bmi > 24.90)
        {
            results.innerHTML = `<span>${bmi}</span> : Overweight`;
        }
    }
});