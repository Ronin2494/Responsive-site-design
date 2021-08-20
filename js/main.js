let slideIndex = 0;

//About Us image slider function

const showSlides = () => {
    const slides = document.getElementsByClassName("myslides"); //getting the element by class name "myslides" and putting it into a const slides.


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  //setting the display of images to be shown initially to not display.
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";  //setting the dsplay of all images one by one to block.


    setTimeout(showSlides, 2000); // setting the time interval of each slide to 2seconds.

};

// using the API  on homepage by using frame widget

(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://www.scorebat.com/embed/embed.js?v=mto'; // source of the embedded js file.
        fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'scorebat-jssdk')
);

//showlsides function call


showSlides();