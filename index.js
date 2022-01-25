const nav = document.querySelector (".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

// when some one click the menu
navToggle.addEventListener ("click", () => {
    //if the menu is closed , open it
    const visibility = nav.getAttribute("data-visible")

    if (visibility === "false"){
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else {
        //if the menu is opne , close it
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }

})