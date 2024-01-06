//Form validation
function check(form){
	
    if (form.name.value==""){
    	alert("Name cannot be empty!")
		return false;
	}

    if (form.phoneNo.value==""){
    	alert("Mobile Number cannot be empty!")
    	return false;
    }

    if (form.emailID.value==""){
    	alert("Email cannot be empty!")
		return false;
	}
    else if (form.emailID.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)==null){ 
		//validate the format of the email address entered
         alert("Invalid Email Address entered!")
		return false;
    }
}
