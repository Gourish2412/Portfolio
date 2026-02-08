const projects=[
    {image:"images/product.png",
     title:"Product Card",
     desc:"A product card that i created to check my understanding of objects"
    },
    {image:"images/product.png",
     title:"Product Card",
     desc:"A product card that i created to check my understanding of objects"
    },
    {image:"images/product.png",
     title:"Product Card",
     desc:"A product card that i created to check my understanding of objects"
    }
]

export function renderProjects(){
const container=document.querySelector(".project-card")

    projects.forEach(({image,title,desc})=>{
        const project=document.createElement("div")
        project.classList.add("projects-card")
        project.innerHTML=
        `<img src=${image} alt=${title} class="image-1">
         <h5 class="mt-4 title">${title}</h5>
         <h6>${desc}</h5>`
         container.appendChild(project)
        
    })
}