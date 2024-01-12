let lightMode = localStorage.getItem("LightMode")
let stateHome = false;
let statePrato = false;

if(lightMode == 'true' || lightMode == 'false'){
    localStorage.setItem("LightMode", 'fals')
}

function homeLight() {
      let backState = localStorage.getItem("LightMode");

      if(backState == 'tru'){
        lightModeHome()
      }
}

function pratosLight() {
    let backState = localStorage.getItem("LightMode")

    if(backState == 'tru'){
        lightModePratos()
      }
}

function lightModePratos() {
    let sun = "Source/img/sun.png"
    let moon = "Source/img/moon.png"

    const aLink = document.getElementsByTagName("a");
    let count = 0;

    if(statePrato == true){
        document.getElementById('themeImg').src = moon
        document.body.style.backgroundColor = '#28282b'
        document.getElementById('divValores').style.color = "white"
        document.getElementById('divValores').style.borderColor = "white"
        document.getElementById('navFood').style.backgroundColor = "#111111"
        document.getElementById('recepiSummary').style.color = "white"
        document.getElementById('summary').style.color = "white"
        document.getElementById('ulTypes').style.color = "white"
        document.getElementById('ulTypes').style.borderColor = "white"
        document.getElementById('recepiTittle').style.color = "white"
        document.getElementById('aNavPerparacao').style.borderColor = "white"
        document.getElementById('aNavIngredientes').style.borderColor = "white"
        document.getElementById('ingerdienteValoresNutricionais').style.borderColor = "white"

        setTimeout(function(){
            for(let elem of aLink){

                if(count >= 5 && count < (aLink.length-4)){
                    elem.style.color = "white"
                }
                count++
            }
        }, 1000)

        statePrato = false
        localStorage.setItem("LightMode", 'fals')

    }
    else{
        document.getElementById('themeImg').src = sun
        document.body.style.backgroundColor = '#F2F2F2'
        document.getElementById('divValores').style.color = "black"
        document.getElementById('divValores').style.borderColor = "black"
        document.getElementById('navFood').style.backgroundColor = "#E0DEDE"
        document.getElementById('recepiSummary').style.color = "black"
        document.getElementById('summary').style.color = "black"
        document.getElementById('ulTypes').style.color = "black"
        document.getElementById('ulTypes').style.borderColor = "black"
        document.getElementById('recepiTittle').style.color = "black"
        document.getElementById('aNavPerparacao').style.borderColor = "black"
        document.getElementById('aNavIngredientes').style.borderColor = "black"
        document.getElementById('ingerdienteValoresNutricionais').style.borderColor = "black"

        setTimeout(function(){
            for(let elem of aLink){

                if(count >= 5 && count < (aLink.length-4)){
                    elem.style.color = "black"
                }
                count++
            }
        }, 1000)

        statePrato = true
        localStorage.setItem("LightMode", 'tru')
    }
}

function lightModeHome(){
    let sun = "Source/img/sun.png"
    let moon = "Source/img/moon.png"

    if(stateHome == true){
      document.getElementById('themeImg').src = moon
      document.body.style.backgroundColor = '#28282b'
      stateHome = false
      localStorage.setItem("LightMode", 'fals')
    }
    else{
      document.getElementById('themeImg').src = sun
      document.body.style.backgroundColor = 'white'
      stateHome = true
      localStorage.setItem("LightMode", 'tru')
    }
  }