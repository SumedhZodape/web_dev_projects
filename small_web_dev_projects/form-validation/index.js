
let data=[

    // name feilds
    {
        emptyError:"Name is Mandatory",
        patternError:"Name Should not have numbers or special charcaters",
        displayID:"name_err",
        elementID:"name",
        exp:"[A-Za-z\\s]+$",
        value:null,
        isValidated:false,
    },
    // Email feilds
    {
        emptyError:"Email is Mandatory",
        patternError:"characters followed by an @ sign, followed by more characters, and then a .",
        displayID:"email_err",
        elementID:"email",
        exp:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
        value:null,
        isValidated:false,
    },
    // password feild
    {
        emptyError:"Password is Mandatory",
        patternError:"password must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter",
        displayID:"password_err",
        elementID:"password",
        exp:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        value:null,
        isValidated:false,
    }

];








//function for display msg
function displayMessages(event){

    let value=event.target.value;
    let fieldID=event.target.id;
  
    
    if(fieldID==='name')
    {
        // fetching first object 
          data[0].value=value;
          checkStatus(data[0]);
    }
    else if(fieldID==="email")
    {
        data[1].value=value;
        checkStatus(data[1]);
      
    }
    else if(fieldID==="password")
    {
        data[2].value=value;
        checkStatus(data[2]);
    }

    
    let tempData=data.filter((ele,index)=>{
        return ele.isValidated===true;
    })


    if(tempData.length===data.length)
    {
        document.getElementById("btn").disabled=false;
    }
    else {
        document.getElementById("btn").disabled=true;
    }


}







//function for set normal color grey

function makeNormal(event)
{
    let id=event.target.id;

    let fieldInfo=data.find((ele,index)=>{
        return ele.elementID===id
    });

    if(fieldInfo.isValidated===true)
    {
        document.getElementById(id).style.border="1px solid gray";
    }
    
}






//function for after submitting the data
function submitData()
{
    // window.location="https://www.google.com";
    // window.open("https://www.google.com","_blank");
    // window.location.reload();
}





//function for ckeck status of it is valid or not valid
function checkStatus(fieldData)
{
        let status=validateField(fieldData.value,fieldData.exp);
       
        if(status!==true)
        {
            let message=null;
            if(status===1)
            {
                message=fieldData.emptyError;
            }
            else if(status===2)
            {
                message=fieldData.patternError;
            }

            document.getElementById(fieldData.displayID).style.display="flex"
            document.getElementById(fieldData.displayID).innerText=message;
            document.getElementById(fieldData.elementID).style.border="1px solid red";
            fieldData.isValidated=false;

        }
        else{
            document.getElementById(fieldData.displayID).style.display="none";
            document.getElementById(fieldData.elementID).style.border="1px solid green";
            fieldData.isValidated=true;
        }

}




//cheking pattern and which value is coming 

function validateField(value,exp){

    const pattern=new RegExp(exp);

    if(value==="")
    {
        return 1;
    }  
    else 
    {
       if(pattern.test(value)!=true) 
       {
            
            return 2;
         
       }
    } 
    return true;

}







