$(() => {
  var theme = localStorage.getItem("kaprekar-theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

  if(!theme) {
    
    if(systemSettingDark.matches) {
      $(".moon").attr("data-active", "true");
      $(".sun").attr("data-active", "false");

      createPlot("white", "#bbe", ".5");

      $("[data-theme!='']").attr("data-theme", "dark");
    }
    else if(systemSettingLight.matches) {
      $(".sun").attr("data-active", "true");
      $(".moon").attr("data-active", "false");

      createPlot("black", "#339", ".7");

      $("[data-theme!='']").attr("data-theme", "light");
    }
  }
  else {
    if(theme == "dark") {
      $(".moon").attr("data-active", "true");
      $(".sun").attr("data-active", "false");

      createPlot("white", "#bbe", ".5");

      $("[data-theme!='']").attr("data-theme", "dark");
    }
    else if(theme == "light") {
      $(".sun").attr("data-active", "true");
      $(".moon").attr("data-active", "false");

      createPlot("black", "#339", ".7");

      $("[data-theme!='']").attr("data-theme", "light");
    }
    
  }


  
  $(".light-dark-switch").on("click", ".icon[data-active='false']", (e) => {

    if($(e.currentTarget).hasClass("sun")) {
      $(".sun").attr("data-active", "true");
      $(".moon").attr("data-active", "false");

      createPlot("black", "#339", ".7");

      $("[data-theme!='']").attr("data-theme", "light");
      localStorage.setItem("kaprekar-theme", "light");
    }
    else if($(e.currentTarget).hasClass("moon")) {
      $(".moon").attr("data-active", "true");
      $(".sun").attr("data-active", "false");

      createPlot("white", "#bbe", ".5");

      $("[data-theme!='']").attr("data-theme", "dark");
      localStorage.setItem("kaprekar-theme", "dark");
    }
  });

  // $(".simulationInput").on("input", (e) => {
  //   var value = e.currentTarget.value;
  //   //"\[0-9]{4}\"
  //   var pattern = /(?!0000)(?!1111)(?!2222)(?!3333)(?!4444)(?!5555)(?!6666)(?!7777)(?!8888)(?!9999)^[0-9]{4}$/g;

  //   if(pattern.test(value)) {
      
  //     var output = kaprekar.routine(parseInt(value));
      
  //     console.log(output);
  //     $(".simulationsOutput").html("");
  //     var outText = "";
  //     output.steps.forEach(iteration => {
  //       outText += iteration + '\n';
  //     });
  //     outText += "Kaprekar's Routine finished in " + output.iterations + " iterations.";
  //     $(".simulationsOutput").html(outText);

  //     $(".simulationsOutput")[0].style.height = $(".simulationsOutput")[0].scrollHeight + 3 + "px";

  //   }
  //   else {
      
  //     $(".simulationsOutput").innerHTML = "Output will be sent here.";
      
  //   }
  // });

  


});

function createPlot(color, marker, opacity) {

  if( !$("#kaprekarData")[0]) {
    console.log("ok");
    return;
  }

  var x = ["1 Iteration", "2 Iterations", 
    "3 Iterations", "4 Iterations", "5 Iterations",
    "6 Iterations", "7 Iterations"]
    var y = [384, 576, 2400, 1272, 1518, 1656, 2184]
    //"1":384,"2":576,"3":2400,"4":1272,"5":1518,"6":1656,"7":2184

    var data = [
    {
      histfunc: "sum",
      y: y,
      x: x,
      type: "histogram",
      name: "sum",
      opacity: opacity,
      marker: {
        color: marker
      }
    }
  ]

  Plotly.newPlot('kaprekarData', data, {
    paper_bgcolor: "rgba(0,0,0,0", //background color of the chart container space
    plot_bgcolor: "rgba(0,0,0,0)", //background color of plot area
    xaxis: {
      color: color,
      fixedrange: true
    },
    yaxis: {
      color: color,
      fixedrange: true
    },
    autosize: true,
    margin: {
      l: 70,
      r: 70,
      b: 45,
      t: 45
    },
  }, {
    scrollZoom: false,
    editable: false,
    displayModeBar: false,
    responsive: true,
    dragmode: false
  });
}
