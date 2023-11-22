var isSubmit = false;

export function setValidClass(id){
    let input = document.getElementById(id)
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
    input.classList.remove('placeholder-error')
    input.placeholder = ``  
}

export function setInvalidClass(id){
    let input = document.getElementById(id)      
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    input.classList.add('placeholder-error')
    input.placeholder = `Please provide a ${id}`
}

export function isEmpty(value){    
    if(value === '')return true
    else return false
}

export function isValidEmail(value) {  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(value))return false  
    else return true        
 
}

export function realTimeValidation(e){      
    if(isSubmit){
        if(isEmpty(e.target.value) || !isValidEmail(e.target.value) && e.target.id === 'email')setInvalidClass(e.target.id)
        else setValidClass(e.target.id)        
    }    
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
 <input type="text" name="name"  class="form-control" id="formData.name.id"/>
 * ```
*/
export function validateOnSubmit(formData){
    let isValid = true
    isSubmit = true;
    for(let key in formData ){        
        if(isEmpty(formData[key].value)) {
            setInvalidClass(formData[key].id)
            isValid = false
        }
        else setValidClass(formData[key].id)
        if(!isValidEmail(formData[key].value) && formData[key].id === 'email'){
            isValid = false
            setInvalidClass(formData[key].id)   
        }     
    }
    
    return isValid
}