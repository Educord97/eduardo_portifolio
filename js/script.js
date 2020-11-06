       
     /*  
       // Add smooth scrolling to all links
          $("a").on('click', function(event) {
        
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
        
              // Store hash
              var hash = this.hash;
        
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });

  */

//Portifólio

  $("#img_jq_box").on({

    mouseenter: function(){
      $(".overlay_img_1").show(450);

    },

    mouseleave: function(){
      $(".overlay_img_1").hide(450);

    },  
  })

  $("#img_jq_box_2").mouseenter(function(){
    $(".overlay_img_2").show(450)
  })
  $("#img_jq_box_2").mouseleave(function(){
      $(".overlay_img_2").hide(450);
  })

  $("#img_jq_box_3").mouseenter(function(){
    $(".overlay_img_3").show(450)
  })
  $("#img_jq_box_3").mouseleave(function(){
      $(".overlay_img_3").hide(450);
  })

  $("#img_jq_box_4").mouseenter(function(){
    $(".overlay_img_4").show(450)
  })
  $("#img_jq_box_4").mouseleave(function(){
      $(".overlay_img_4").hide(450);
  })

  $("#img_jq_box_5").mouseenter(function(){
    $(".overlay_img_5").show(450)
  })
  $("#img_jq_box_5").mouseleave(function(){
      $(".overlay_img_5").hide(450);
  })

  $("#img_jq_box_6").mouseenter(function(){
    $(".overlay_img_6").show(450)
  })
  $("#img_jq_box_6").mouseleave(function(){
      $(".overlay_img_6").hide(450);
  })



