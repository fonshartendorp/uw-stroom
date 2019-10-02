$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, .hero-text a, .slideanim a, footer a[href='#uwstroom']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });


    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    if ($(window).width() > 1024) {
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "10px 10px";
                document.getElementById("Logo").style.height = "50px";
                document.getElementById("Logo").style.margin = "10px 0px 10px";
                document.getElementById("buttons").style.margin = "10px 0px 0px";
                document.getElementById("buttons").style.fontSize = "16px";
            } else {
                document.getElementById("navbar").style.padding = "25px 10px";
                document.getElementById("Logo").style.height = "100px";
                document.getElementById("Logo").style.margin = "9px 0px 9px";
                document.getElementById("buttons").style.margin = "35px 0px 0px";
                document.getElementById("buttons").style.fontSize = "20px";
            }
        }
    } else {
        // If the screensize is <1024, resize logo and hero text.
        document.getElementById("Logo").style.height = "40px";
        document.getElementById("hero-text").style.paddingTop = "30px";
        document.getElementById("hero-text").style.fontSize = "30px";
    }

    // Slideanimations for widgets
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})
