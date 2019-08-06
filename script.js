function initializeObjects() {


  //LOGO ANIMATION
  document.getElementById("whiteLogoWrapper").addEventListener("mouseover",
    function () {
      document.getElementById("redLogo").setAttribute("style", "transition: 0.5s; transform: translate(-0.3%, 1.5%); transition-timing-function: cubic-bezier(.33,1.48,.4, 3);");
      document.getElementById("whiteLogo").setAttribute("style", "transition: 0.4s; transform: translate(0.15%, -0.25%); transition-timing-function: cubic-bezier(.33,1.48,.4, 3);");
    });

  document.getElementById("whiteLogoWrapper").addEventListener("click", function () {
    anime({
      targets: '#whiteLogoWrapper',
      translateX: 10,
      translateY: -3,
      direction: "alternate",
      easing: 'easeInOutBack',
    })
    anime({
      targets: '#redLogoWrapper',
      translateX: 10,
      translateY: -10,
      direction: "alternate",
      easing: 'easeInOutBack',
    })
  });

  document.getElementById("whiteLogoWrapper").addEventListener("mouseout",
    function () {
      document.getElementById("redLogo").setAttribute("style", "transition: 0.3s; transform: translate(0px); transition-timing-function: cubic-bezier(.58,1.87,.28,1);");
      document.getElementById("whiteLogo").setAttribute("style", "transition: 0.3s; transform: translate(0px); transition-timing-function: cubic-bezier(.58,1.87,.28,1);");
    });

  //ICON ANIMATION
  const icons = document.getElementsByTagName("li");
  //add event listener for social navbar icons
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", function () {
      icons[i].setAttribute("style", "transition: 0.3s; transform: translate(0px, -10px)")
    })
    icons[i].addEventListener("mouseout", function () {
      icons[i].setAttribute("style", "transition: 0.5s; transform: translate(0px, 0px);");
    })
  };

  //ADD EVENT LISTENERS FOR 'CONTACT' ICON
  document.getElementById('contact').addEventListener("click", function () {
    document.getElementById('overlay').addEventListener('click', function () {
      document.getElementById('overlay').style.display = 'none';
    })
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('overlayExitButton').style.display = 'inline-block';
  })
  document.getElementById('contact').addEventListener("mouseover", function () {
    document.getElementById('contact').setAttribute("style", "cursor: pointer; transition: 0.3s; transform: translate(0px, -10px)");

  })


  anime({
    targets: '.fab',
    translateY: -300,
    easing: 'easeInOutBack',
    delay: anime.stagger(500),
    direction: 'reverse'
  })

  anime({
    targets: '.far',
    translateX: 450,
    easing: 'easeInOutBack',
    direction: 'reverse',
    endDelay: 3000,
  })
}




