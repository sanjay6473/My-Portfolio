var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphics Designer','Movie Lover','Game Enthusiast'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true,
  });

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-content");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
  }
