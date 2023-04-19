    //TROCA COR DO BACKGROUND
    // Seleciona o elemento de menu
    const menu = document.querySelector(".menu");
    

    // Adiciona um listener para o evento "scroll"
    window.addEventListener("scroll", function() {
      // Se a posição da página for maior que 100, adiciona a classe "menu-scroll"
      if (window.pageYOffset > 100) {
        menu.classList.add("menu-scroll");
        menu.classList.add("menu-logo2");
        trocaTitulo.style.color = "fff";
            
      } else {
        menu.classList.remove("menu-scroll");
        menu.classList.remove("menu-logo2");
      }
    });

    //TROCA O COR DAS LETRAS DO TITULO
    const navTitle = document.querySelector(".titulo_logo");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navTitle.style.color = "#fff";
      } else {
        navTitle.style.color = "#000";
      }
    });