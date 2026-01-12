 const menuBtn = document.getElementById("menuBtn");
        const links = document.querySelector(".nav-links");
        const slides = document.querySelectorAll(".bg");
        const slidesCarousel = document.getElementById("slides");
        const totalSlides = slidesCarousel.children.length;
        let index = 0;

        menuBtn.addEventListener("click", openMenu);

        function openMenu() {
            links.classList.toggle("open");
        }

        function showSlide() {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
            index = (index + 1) % slides.length;
        }

          // First load
            showSlide();

          // Change every 5 seconds
          setInterval(showSlide, 5000);

        //carousel for ongoing projects images;
    function displaySlide() {
      slidesCarousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % totalSlides;
      displaySlide();
    }

    function prevSlide() {
      index = (index - 1 + totalSlides) % totalSlides;
      displaySlide();
    }

    // Auto-slide every 4 seconds (optional)
    setInterval(nextSlide, 4000);

         function sendMail() {
        let  params = {
         name:  document.getElementById("name").value,
         email: document.getElementById("email").value,
         meassage: document.getElementById("message").value,
        }

        emailjs.send("service_39wekap","template_tjmpmjx",params).then(alert("Your Email has been sent succesfully!"));
         }