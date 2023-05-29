    //   Next button
      let ml = -181;
        let slideCount = 0;

        document.getElementById("next").onclick = function () {

            ml = ml - 90.5

            if (slideCount <= 1) {

                // // console.log(slideCount, ml);

                document.getElementById("carouselSlider").style.marginLeft = ml + "%"
                document.getElementById("carouselSlider").style.transition = ".5s"

                if (slideCount === 1) {

                    setTimeout(function () {
                        document.getElementById("carouselSlider").style.marginLeft = "-181%"
                        document.getElementById("carouselSlider").style.transition = "0s"
                        slideCount = 0;
                        ml = -181;
                    }, 500)

                }


                slideCount = slideCount + 1

            }


        }



        // Prev Button   

        document.getElementById("prev").onclick = function () {
            ml = ml + 90.5

            if (slideCount >= -1) {
                document.getElementById("carouselSlider").style.marginLeft = ml + "%"
                document.getElementById("carouselSlider").style.transition = ".5s"

                if (slideCount === -1) {
                    setTimeout(function () {
                        document.getElementById("carouselSlider").style.marginLeft = "-181%"
                        document.getElementById("carouselSlider").style.transition = "0s"
                        slideCount = 0;
                        ml = -181;
                    }, 500)
                }

                slideCount = slideCount - 1
            }

        }
