const services=[
    {icon:"images/coding.png",
     title:"Web Developer",
     desc:"I'm a professional web developer who helps buisnesses to increase their profit"
    },
    {icon:"images/java.png",
     title:"Java Developer",
     desc:"I'm a professional web developer who helps buisnesses to increase their profit"
    },
    {icon:"images/design.png",
     title:"UI/UX Designer",
     desc:"I'm a professional web developer who helps buisnesses to increase their profit"
    }
        
]

export function renderAbout(){
    const about= document.querySelector(".about-section")
    about.innerHTML=""

    services.forEach(({icon,title,desc}) => {
        const card=document.createElement("div")
        card.classList.add("about-card")
        card.innerHTML=
        `<img src=${icon} alt=${title} class="icon1">
        <h5 class="mt-3">${title}</h5>
        <h6 class="mt-2">${desc}</h6>`
    
    about.appendChild(card)
})
}