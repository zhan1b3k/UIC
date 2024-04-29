const login = document.querySelector('.loginform')
const acc = document.querySelector('.acc')
const reg = document.querySelector('.loginform1')
const acc1 = document.querySelector('.acc1')

acc.addEventListener('click',(event) =>{
    event.preventDefault();
    login.style.display = 'none';
    reg.style.display = 'block'
})
acc1.addEventListener('click',(event) =>{
    event.preventDefault();
    reg.style.display = 'none';
    login.style.display = 'block'
})


function validation(form){
    let result = true
    
    function removeInput(input){
        const parent = input.parentNode
        if (parent.classList.contains('error')){
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input,text){
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('errorLabel')
        parent.querySelectorAll('.errorLabel').forEach(label => label.remove());
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }

    form.querySelectorAll('input').forEach(input => {
        

        if(input.dataset.minLength ){
            if(input.value.length > input.dataset.minLength){
                removeInput(input)
                createError(input,`Минимальное кол во символов:${input.dataset.maxLength}`)
                result = false
            }
        }

        if(input.dataset.required == 'true'){
            if(input.value==''){
                createError(input,'Поле не заполнено')
                result = false
            }
        }
    });

    return result
}

document.getElementById('add-form').addEventListener('submit',function(event){
    event.preventDefault()
    const isValid = validation(this);
    if (isValid) {
        alert('Вы вошли');
    }
})
