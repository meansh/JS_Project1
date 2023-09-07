var rect = document.querySelector("#center")

rect.addEventListener("mousemove", function(details) {
    var rectanglelocation = rect.getBoundingClientRect();
    
    var insiderectval = details.clientX - rectanglelocation.left

    if(insiderectval < rectanglelocation.width/2) {
        var redcolor = 
        gsap.utils.mapRange(
            0, 
            rectanglelocation.width/2, 
            255, 
            0, 
            insiderectval
            )
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        })    

    }
    else{
        console.log("right");
    }
    console.log(insiderectval);
})