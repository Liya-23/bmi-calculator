function bmicalculate() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    let bmi = (weight/(height*height)*703)
    document.getElementById('heading').innerHTML = "Your BMI is: "
    document.getElementById('BMI-output').innerHTML = bmi.toFixed(1)

    if (weight.trim() === '' && height.trim() === '') {
        alert('Please enter a value.');
    } 
    else if(bmi<=24){
        document.getElementById('message').innerHTML = "Under Weight"
    } else if( bmi >= 25 && bmi <= 29.9){
        document.getElementById('message').innerHTML = "Healthy Weight"
    }else{
        document.getElementById('message').innerHTML = "Over Weight"
    }
}

function reload() {
    let inputfieldss = document.querySelectorAll('input')
    inputfieldss.forEach(function(input){
        input.value = ''
    })
}
// function clearInputFields() {
//   var inputFields = document.querySelectorAll('input');
//   inputFields.forEach(function(input) {
//     input.value = '';
//   });
// }