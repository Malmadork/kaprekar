
$(() => {

  var theme = localStorage.getItem("kaprekar-theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

  if(!theme) {
    
    if(systemSettingDark.matches) {
      $(".moon").attr("data-active", "true");
      $(".sun").attr("data-active", "false");

      $("[data-theme!='']").attr("data-theme", "dark");
    }
    else if(systemSettingLight.matches) {
      $(".sun").attr("data-active", "true");
      $(".moon").attr("data-active", "false");

      $("[data-theme!='']").attr("data-theme", "light");
    }
  }
  else {
    if(theme == "dark") {
      $(".moon").attr("data-active", "true");
      $(".sun").attr("data-active", "false");

      $("[data-theme!='']").attr("data-theme", "dark");
    }
    else if(theme == "light") {
      $(".sun").attr("data-active", "true");
      $(".moon").attr("data-active", "false");

      $("[data-theme!='']").attr("data-theme", "light");
    }
  }


  
  $(".light-dark-switch").on("click", ".icon[data-active='false']", (e) => {


    if($(e.currentTarget).hasClass("sun")) {
      $(".sun").attr("data-active", "true");
      $(".moon").attr("data-active", "false");

      $("[data-theme!='']").attr("data-theme", "light");
      localStorage.setItem("kaprekar-theme", "light");
    }
    else if($(e.currentTarget).hasClass("moon")) {
      $(".moon").attr("data-active", "true");
      $(".sun").attr("data-active", "false");

      $("[data-theme!='']").attr("data-theme", "dark");
      localStorage.setItem("kaprekar-theme", "dark");
    }
  });

  var goToSimulations = () => {
    window.location = "./"
  }

});
