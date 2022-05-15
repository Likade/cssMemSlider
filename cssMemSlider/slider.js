window.onload=function(){
    const buttonsWrapper = document.querySelector(".nav");
    const slides = document.querySelector(".inner");

    buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") 
    {
        Array.from(buttonsWrapper.children).forEach(item =>
        item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) 
        {
        slides.style.transform = "translateX(-0%)";
        e.target.classList.add("active");
        } 
        else if (e.target.classList.contains("second")) 
        {
        slides.style.transform = "translateX(-25.2%)";
        e.target.classList.add("active");
        } 
        else if (e.target.classList.contains('third'))
        {
        slides.style.transform = 'translatex(-50.2%)';
        e.target.classList.add('active');
        }
        else if (e.target.classList.contains('fourth'))
        {
            slides.style.transform = 'translatex(-75.2%)';
            e.target.classList.add('active');
        }
    }
    });
}