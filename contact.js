const detailsState={
    name:"",
    email:"",
    message:""
}


export function renderContact(){

    const name=document.querySelector(".contact-name")
    const email=document.querySelector(".contact-email")
    const message=document.querySelector(".contact-message")

    name.addEventListener("input", e => {
        detailsState.name=e.target.value
    })

    email.addEventListener("input", e => {
        detailsState.email=e.target.value
    })

    message.addEventListener("input", e => {
        detailsState.message=e.target.value
    })


function check(){
    if(!detailsState.name.trim()){
        return "Enter a valid name"
    }
    if(!detailsState.email.includes("@")){
        return "Entere a valid email"
    }
    if(detailsState.message.length < 10){
        return "Message should be above 10 char"
    }
}


    document.querySelector(".contact-form").
    addEventListener("submit", e=>{
        e.preventDefault()

        const error=check()
        const errorMsg=document.querySelector(".error-msg")
        
        if(error){
            errorMsg.textContent=error
            return;
        }

        errorMsg.textContent="Sent Sucessfully"
        console.log(detailsState)

         detailsState.name=""
         detailsState.email=""
         detailsState.message=""

         
    })

}