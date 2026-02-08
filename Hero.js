const intro={
            cont:"Gouri Shankar",
            role:"Web Developer",
            desc:"I'm a frontend developer based in India,i'll help you build websites your users will love"
        }

export function renderHero(){   
         document.querySelector(".hook").textContent=`HELLO,I AM`
        document.querySelector(".context").textContent=intro.cont;
        document.querySelector(".title").textContent=`I AM ${intro.role}`
        document.querySelector(".desc").textContent=intro.desc
}