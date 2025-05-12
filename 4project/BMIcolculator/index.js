const form=document.querySelector('form');
   
form.addEventListener('submit', function(li){
    li.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`plz inter num ${height}`;
    } else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`plz inter num ${weight}`;
    }

    else {
        const bmi=(weight/((height*height)/100)).toFixed(2);

    results.innerHTML=`<span>${bmi}</span`
    }
    
});