window.addEventListener('DOMContentLoaded', (event) =>{
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });
});

// const formContent = document.querySelector('.formContent'),
//       form =formContent.querySelectorAll('.form'),
//       submitInput = form[0].querySelector('input[type ="submit"]');

// function getDataForm(e){
//     e.preventDefault();
//     var formData = new FormData(form[0]);
//     alert(formData.get('name')+' '+formData.get('profile')+' '+formData.get('profile')+formData.get('gender'));

// }

// document.addEventListener('DOMContentLoaded',function(){
//     submitInput.addEventListener('click',getDataForm,false);
// },false);