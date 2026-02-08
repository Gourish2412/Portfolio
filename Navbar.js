export const navItems=["Home","About me","Projects","Contact me"]
let activeNav="Home"

export function renderNavbar(){
        const navBar1= document.querySelector(".navbar1")
        navBar1.innerHTML=""

        navItems.forEach(item=>{
            const h5=document.createElement("h5")
            h5.textContent=item
            h5.classList.add("nav1")

            if (item === activeNav) {
            h5.classList.add("active");
            }

            h5.addEventListener("click", ()=> {
                activeNav=item
                renderNavbar() 
        })
            navBar1.appendChild(h5)

    })
    
}
