const testimonials  = [-        
    {
        name: "Amina",
        message: "They are great  web developers."
    },

    {
    name: "Hawa",
    message:"They are dedicated and eager to improve."

    }

];
for (let testimonial of testimonials ) {
    const container = document.getElementById("testimonial-container");
    const testimonialElement =document.createElement("div");
    testimonialElement.innerHTML = `<h3>  ${testimonial.name}</h3>`;
    testimonialElement.innerHTML += `<p>${testimonial.message}</p>`;
    container.appendChild(testimonialElement);

}
const projects = [

    {
        title: "Rialuxe Abaya Website",
        description: "A simple website created to showcase abayas and fashion products.",
        technologies: "HTML, CSS"
    
    },

    {
        title: "Fire Island Travel Blog",
        description: "A travel blog website about Fire Island and its beautiful beaches.",
        technologies: "HTML, CSS"
    }
    ];


const projectContainer =document.getElementById("project-container");


for (let project of projects) {
    const projectElement = document.createElement("div")
    projectElement.innerHTML =`<h3>${project.title}</h3>`;
    projectElement.innerHTML += `<p>${project.description}</p>`;
    projectElement.innerHTML += `<p>Technologies: ${project.technologies}</p>`;
    projectContainer.appendChild(projectElement);




}
