function responsiveTopNav() {
    let x = document.getElementById("myTopnav")
      if (x.classList.contains('section')){
    x.classList.replace('section', 'responsive');}
      else {
        x.classList.replace('responsive', 'section')
    }
  }

 