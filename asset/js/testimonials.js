let testimonials =[
    {
        author:"syahri",
        rating:2,
        caption:"mantap sekali",
        image:"gambar.jpg",
    },
    {
        author:"joko",
        rating:2,
        caption:"mantap sekali,tapi....",
        image:"gambar.jpg",
    },
    {
        author:"sri",
        rating:4,
        caption:"nice....",
        image:"coding.jpg",
    },
    {
        author:"budii",
        rating : 5,
        caption:"mantap sekali",
        image:"coding.jpg",
    },
    {
        author:"ayah budi",
        rating:5,
        caption:"mantap sekali",
        image:"coding.jpg",
    }
]

const testimonialsContainer = document.getElementById("testimonialsContainer")

const testimonialsHTML= (daftarTestimonial)=>{
    return daftarTestimonial.map(
        (testimonial)=>`
        <article>
            <img src="/img/${testimonial.image}" alt="">
            <p class="testimonial-item" >${testimonial.caption}</p>
            <p style="text-align: right;">${testimonial.author}</p>
            <p style="text-align: right;font-weight: bold;">${testimonial.rating}</p>
        </article>`
    ).join("");
};

function showAllTestimonials(){
    testimonialsContainer.innerHTML= testimonialsHTML(testimonials)
}

showAllTestimonials();

function filterTestimonialsByStar(rating){
    const filteredTestimonials= testimonials.filter(
        (testimonial)=> (testimonial.rating === rating)
    );

    console.log(filteredTestimonials);
    if(filteredTestimonials.length===0){
        return(testimonialsContainer.innerHTML =`<p>No Testimonial....<p>`);
    }

    testimonialsContainer.innerHTML= testimonialsHTML(filteredTestimonials)
}


