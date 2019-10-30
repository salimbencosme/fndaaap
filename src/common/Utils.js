export function closeMenuAfterCliked() {
    console.log("ENTRO");
    let menuOption = document.querySelector('.navbar-toggle');
    if (menuOption != undefined && menuOption != null) {
      menuOption.click();
    }
  }