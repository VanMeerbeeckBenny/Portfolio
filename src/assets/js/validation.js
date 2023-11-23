var isSubmit = false;

export function setValidClass(id){
    let input = document.getElementById(id)
    input.classList.remove('is-invalid')
    input.classList.add('is-valid') 
}

export function setInvalidClass(id){
    let input = document.getElementById(id)        
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
}

export function createUIErrorFeedback(id,errorMessage){    
    setInvalidClass(id)
    let errorBox = document.getElementById(`${id}-feedback`) 
    errorBox.innerHTML = errorMessage 
}

export function isEmpty(value){    
    if(value.trim() === '' || typeof(value) === 'undefined')return true
    else return false
}

export function isValidEmail(value) {  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(value))return false  
    else return true        
 
}

function validate(id,value){
    let isValid = true  
    let errorMessage = ''
    if(isEmpty(value)) {
        errorMessage = `${id} can not be empty.`         
        createUIErrorFeedback(id,errorMessage)
        isValid = false
    }        
    else if(!isValidEmail(value) && id === 'email'){            
        errorMessage = `Please provide a valid ${id}.`
        createUIErrorFeedback(id,errorMessage) 
        isValid = false
    } 
    else setValidClass(id) 
    return isValid;
}
export function realTimeValidation(e){      
    if(isSubmit) validate(e.target.id,e.target.value)        
}

/**
 * make sure the object formdata has objects inside with an id equel to your input element id
 * like this:
 * 
 * ```javascript
 * const formData = reactive({
 *  name: { value:"",id:"name"},
 *  email: { value:"",id:"email"},
 *  message: { value:"",id:"message"},
 *})
 <input type="text" name="name"  class="form-control" id="name"/> 
  ```
  *For email use email as id as it wil be checked on that id for valid email
*/
export function validateOnSubmit(formData){
    let isValid = true
    isSubmit = true;   
    for(let key in formData ){        
        isValid = validate(formData[key].id,formData[key].value)   
    }    
    return isValid
}