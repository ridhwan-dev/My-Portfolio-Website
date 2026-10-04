const testimonials  = [
    {
        name: "Amina",
        message: "Ridhwan is a great web developer."
    },

    {
    name: "Hawa",
    message:"Ridhwan is dedicated and eager to improve."

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
        title: "My Portfolio"
        




    }






]
