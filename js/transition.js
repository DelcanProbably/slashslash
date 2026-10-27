
  jQuery(document).ready(function() {


    jQuery('a').on('click', function(event){
      if (this.getAttribute('target') != "_blank") {

        var goToPage = this.getAttribute('href');
        if (goToPage.includes('#')) {
          return; // Skip animating if just going to an anchor.
        }

        event.preventDefault();

        jQuery('.content, .landing').addClass("doblur");

        jQuery('.content, .landing').animate({
          opacity: 0
        }, 200, function(){
          window.location = goToPage;
        })

      }
    })

  })
