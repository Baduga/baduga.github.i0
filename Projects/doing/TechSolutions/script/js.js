window.addEventListener("scroll", function(paallax){
        document.querySelector('.block1').style.backgroundSize = (this.scrollY/25 +100)+"%";
        if (this.scrollY<300) {
                document.querySelector('.bright-wrap').style.width = (this.scrollY/10 +100)+"%";

        }

})