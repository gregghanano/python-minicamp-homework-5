console.log("Hello world");

document.getElementById('change-color').addEventListener('click', function(){
  console.log('you clicked me');
});

function validateForm(){
  var name = document.getElementById('name-input').value;
  var species = document.getElementById('species-input').value;
  var age = document.getElementById('age-input').value;

  console.log(name, species, age);
  //check name
  if(!name.length || !species.length || !age.length){
    alert('input field must not be blank');
    return false;
  }
  age = parseInt(age);
  if(isNaN(age) || typeof age != "number"){
    alert('age must be a number')
    return false;
  }
  return true;
}
