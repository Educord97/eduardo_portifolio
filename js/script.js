// Add smooth scroll
$("a").on('click', function(event) {
  if (this.hash !== "") {
  event.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
  scrollTop: $(hash).offset().top
  }, 800, function(){
  window.location.hash = hash;
  });
  } 
  });
  //Skills selector add / remove class active_link 
  $("#skills_jq_btn_skill").click(function () {
  $(".box_skills_jq_education, .box_skills_jq_experience").css("display", "none");
  $(".box_skills_jq_skills").css("display", "block");
  $("#skills_jq_btn_education").removeClass("active_link");
  $("#skills_jq_btn_experience").removeClass("active_link");
  $("#skills_jq_btn_skill").addClass("active_link");
  });
  $("#skills_jq_btn_experience").click(function () {
  $(".box_skills_jq_skills, .box_skills_jq_education").css("display", "none");
  $(".box_skills_jq_experience").css("display", "block");
  $("#skills_jq_btn_skill").removeClass("active_link");
  $("#skills_jq_btn_education").removeClass("active_link");
  $("#skills_jq_btn_experience").addClass("active_link");
  });
  $("#skills_jq_btn_education").click(function () {
  $(".box_skills_jq_experience, .box_skills_jq_skills").css("display", "none");
  $(".box_skills_jq_education").css("display", "block");
  $("#skills_jq_btn_skill").removeClass("active_link");
  $("#skills_jq_btn_experience").removeClass("active_link");
  $("#skills_jq_btn_education").addClass("active_link");
  });
  //Portifólio hide / show selected HTML / CSS...
  $("#list_all_just").click(function () {
  $("#img_jq_box, #img_jq_box_2, #img_jq_box_3, #img_jq_box_4, #img_jq_box_5, #img_jq_box_6")
  .fadeIn();
  })
  $("#list_html_just").click(function () {
  $("#img_jq_box, #img_jq_box_2, #img_jq_box_3, #img_jq_box_4, #img_jq_box_5, #img_jq_box_6")
  .fadeIn();
  $("#img_jq_box, #img_jq_box_5, #img_jq_box_6").fadeOut();
  })
  $("#list_bootstrap_just").click(function () {
  $("#img_jq_box, #img_jq_box_2, #img_jq_box_3, #img_jq_box_4, #img_jq_box_5, #img_jq_box_6")
  .fadeIn();
  $("#img_jq_box_2, #img_jq_box_3, #img_jq_box_4").fadeOut()
  });
  $("#list_js_jq_just").click(function () {
  $("#img_jq_box, #img_jq_box_2, #img_jq_box_3, #img_jq_box_4, #img_jq_box_5, #img_jq_box_6")
  .fadeIn();
  $("#img_jq_box_2, #img_jq_box_3, #img_jq_box_4, #img_jq_box_6").fadeOut()
  });
  //Portifólio hide / show selected Wordpress
  $("#list_elemementor_just").click(function () {
  $("#img_jq_box_w1, #img_jq_box_w2, #img_jq_box_w3, #img_jq_box_w4, #img_jq_box_w5, #img_jq_box_w6")
  .fadeIn();
  });
  $("#list_woocommerce_just").click(function () {
  $("#img_jq_box_w1, #img_jq_box_w2, #img_jq_box_w3, #img_jq_box_w4, #img_jq_box_w5, #img_jq_box_w6")
  .fadeIn();
  $("#img_jq_box_w1, #img_jq_box_w3,  #img_jq_box_w4, #img_jq_box_w5").fadeOut();
  })
  $("#list_ocean_just").click(function () {
  $("#img_jq_box_w1, #img_jq_box_w2, #img_jq_box_w3, #img_jq_box_w4, #img_jq_box_w5, #img_jq_box_w6")
  .fadeIn();
  $("#img_jq_box_w1, #img_jq_box_w3,  #img_jq_box_w4, #img_jq_box_w5").fadeOut();
  });
  $("#list_themes_just").click(function () {
  $("#img_jq_box_w1, #img_jq_box_w2, #img_jq_box_w3, #img_jq_box_w4, #img_jq_box_w5, #img_jq_box_w6")
  .fadeIn();
  })
  $("#img_jq_box").on({
  mouseenter: function () {
  $(".overlay_img_1").show(450);
  },
  mouseleave: function () {
  $(".overlay_img_1").hide(450);
  },
  })
  $("#img_jq_box_2").mouseenter(function () {
  $(".overlay_img_2").show(450)
  })
  $("#img_jq_box_2").mouseleave(function () {
  $(".overlay_img_2").hide(450);
  })
  $("#img_jq_box_3").mouseenter(function () {
  $(".overlay_img_3").show(450)
  })
  $("#img_jq_box_3").mouseleave(function () {
  $(".overlay_img_3").hide(450);
  })
  $("#img_jq_box_4").mouseenter(function () {
  $(".overlay_img_4").show(450)
  })
  $("#img_jq_box_4").mouseleave(function () {
  $(".overlay_img_4").hide(450);
  })
  $("#img_jq_box_5").mouseenter(function () {
  $(".overlay_img_5").show(450)
  })
  $("#img_jq_box_5").mouseleave(function () {
  $(".overlay_img_5").hide(450);
  })
  $("#img_jq_box_6").mouseenter(function () {
  $(".overlay_img_6").show(450)
  })
  $("#img_jq_box_6").mouseleave(function () {
  $(".overlay_img_6").hide(450);
  })
  //Box Wordpress
  $("#img_jq_box_w1").mouseenter(function () {
  $(".img_w_1").show(450)
  })
  $("#img_jq_box_w1").mouseleave(function () {
  $(".img_w_1").hide(450);
  })
  $("#img_jq_box_w2").mouseenter(function () {
  $(".img_w_2").show(450)
  })
  $("#img_jq_box_w2").mouseleave(function () {
  $(".img_w_2").hide(450);
  })
  $("#img_jq_box_w3").mouseenter(function () {
  $(".img_w_3").show(450)
  })
  $("#img_jq_box_w3").mouseleave(function () {
  $(".img_w_3").hide(450);
  })
  $("#img_jq_box_w4").mouseenter(function () {
  $(".img_w_4").show(450)
  })
  $("#img_jq_box_w4").mouseleave(function () {
  $(".img_w_4").hide(450);
  })
  $("#img_jq_box_w5").mouseenter(function () {
  $(".img_w_5").show(450)
  })
  $("#img_jq_box_w5").mouseleave(function () {
  $(".img_w_5").hide(450);
  })
  $("#img_jq_box_w6").mouseenter(function () {
  $(".img_w_6").show(450)
  })
  $("#img_jq_box_w6").mouseleave(function () {
  $(".img_w_6").hide(450);
  })
  //Portifólio hide / show selected React JS
  $("#list_simples_just").click(function () {
  $("#img_jq_box_r1, #img_jq_box_r2, #img_jq_box_r3, #img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeIn();
  $("#img_jq_box_r1, #img_jq_box_r2, #img_jq_box_r3, #img_jq_box_r4")
  .fadeOut();
  });
  $("#list_hooks_just").click(function () {
  $("#img_jq_box_r1, #img_jq_box_r2, #img_jq_box_r3, #img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeIn();
  $("#img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeOut();
  });
  $("#list_firebase_just").click(function () {
  $("#img_jq_box_r1, #img_jq_box_r2, #img_jq_box_r3, #img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeIn();
  $("#img_jq_box_r1, #img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeOut();
  });
  $("#list_cloud_just").click(function () {
  $("#img_jq_box_r1, #img_jq_box_r2, #img_jq_box_r3, #img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeIn();
  $("#img_jq_box_r1,#img_jq_box_r2, #img_jq_box_r4, #img_jq_box_r5, #img_jq_box_r6")
  .fadeOut();
  });
  //Box React
  $("#img_jq_box_r1").mouseenter(function () {
  $(".img_r_1").show(450)
  })
  $("#img_jq_box_r1").mouseleave(function () {
  $(".img_r_1").hide(450);
  })
  $("#img_jq_box_r2").mouseenter(function () {
  $(".img_r_2").show(450)
  })
  $("#img_jq_box_r2").mouseleave(function () {
  $(".img_r_2").hide(450);
  })
  $("#img_jq_box_r3").mouseenter(function () {
  $(".img_r_3").show(450)
  })
  $("#img_jq_box_r3").mouseleave(function () {
  $(".img_r_3").hide(450);
  })
  $("#img_jq_box_r4").mouseenter(function () {
  $(".img_r_4").show(450)
  })
  $("#img_jq_box_r4").mouseleave(function () {
  $(".img_r_4").hide(450);
  })
  $("#img_jq_box_r5").mouseenter(function () {
  $(".img_r_5").show(450)
  })
  $("#img_jq_box_r5").mouseleave(function () {
  $(".img_r_5").hide(450);
  })
  $("#img_jq_box_r6").mouseenter(function () {
  $(".img_r_6").show(450)
  })
  $("#img_jq_box_r6").mouseleave(function () {
  $(".img_r_6").hide(450);
  })