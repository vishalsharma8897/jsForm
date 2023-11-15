const form  = document.querySelector('form');
let error = false;

const displayError=(element,message)=>{
    error = true;
    const id = `${element.id}-error`;
    const errorSpan  = document.getElementById(id);
    errorSpan.textContent=message;
}

const clearErrorMessages=()=>{
    const errorSpans  = document.querySelectorAll('.error-message');
    errorSpans.forEach((span)=>{
        span.textContent='';
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    error = false;
    const username = document.getElementById('name');
    const email= document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    clearErrorMessages();
    
    if(!username.value)
    {   
        displayError(username,'Username is Required');
    }
    else if(username.value && username.value.length<5)
    {
        displayError(username,'Username must be atleast 5 characters')
    }


    if(!email.value)
    {
        displayError(email,'Invalid Email');
    }

    if (!password.value) {
        displayError(password, 'Password is required.');
    }
    else if(password.value && password.value.length<5)
    {
        displayError(password,'Password must be atleast 5 characters')
    }

    if (!confirmPassword.value) {
        displayError(password, 'Confirm Password is required.');
    }

    if(password.value != confirmPassword.value)
    {
        displayError(confirmPassword,'Password do not match');
    }

    if(!error)
    {    
        clearErrorMessages();
        alert("Form submitted successfully");
    }
})

