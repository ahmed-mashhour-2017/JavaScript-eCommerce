    const form=document.querySelector('#form');
    const username=document.querySelector('#username');
    const email=document.querySelector('#email');
    const password=document.querySelector('#password');
    const password2=document.querySelector('#password2');

    var patt=/^([a-zA-Z0-9_-]+)@(yahoo|gmail)\.(com)$/;

    form.addEventListener('submit',(e)=>{
        if(checkInputs()==false)
        {    
               e.preventDefault();
        }
        });
        /************************************************** */
        function checkInputs()
        {
        let checked=true;
        const usernamevalue=  username.value.trim();
        const passwordvalue =  password.value.trim();
        const password2value= password2.value.trim();
        
        if(usernamevalue==null||!email.value.match(patt)||passwordvalue==''||password2value==''||password.value!==password2.value){
             checked=false;
        }  
        return checked;
    }


 