// Mengaktifkan Menu Pictures
const buttonP = document.querySelectorAll("main .picture-page ul li");
const ciremaiP = document.querySelector("main .picture-page .photo-card .Gn-Ciremai");
const arjunoP = document.querySelector("main .picture-page .photo-card .Gn-Arjuno");
const slametP = document.querySelector("main .picture-page .photo-card .Gn-Slamet");
const prauP = document.querySelector("main .picture-page .photo-card .Gn-Prau");

// events
buttonP[0].addEventListener("click", function () {
    if (arjunoP.style.display == "block") {
        arjunoP.style.display = "none";
    } else if (slametP.style.display == "block") {
        slametP.style.display = "none";
    } else if (prauP.style.display == "block") {
        prauP.style.display = "none";
    }
    ciremaiP.style.display = "block";
});
buttonP[1].addEventListener("click", function () {
    if (ciremaiP.style.display == "block") {
        ciremaiP.style.display = "none";
    } else if (slametP.style.display == "block") {
        slametP.style.display = "none";
    } else if (prauP.style.display == "block") {
        prauP.style.display = "none";
    }
    arjunoP.style.display = "block";
});
buttonP[2].addEventListener("click", function () {
    if (arjunoP.style.display == "block") {
        arjunoP.style.display = "none";
    } else if (ciremaiP.style.display == "block") {
        ciremaiP.style.display = "none";
    } else if (prauP.style.display == "block") {
        prauP.style.display = "none";
    }
    slametP.style.display = "block";
});
buttonP[3].addEventListener("click", function () {
    if (arjunoP.style.display == "block") {
        arjunoP.style.display = "none";
    } else if (slametP.style.display == "block") {
        slametP.style.display = "none";
    } else if (ciremaiP.style.display == "block") {
        ciremaiP.style.display = "none";
    }
    prauP.style.display = "block";
});

// Mengaktifkan menu history
const buttonH = document.querySelectorAll("main .history-page ul li");
const ciremaiH = document.querySelector("main .history-page .history-card .Gn-Ciremai");
const arjunoH = document.querySelector("main .history-page .history-card .Gn-Arjuno");
const slametH = document.querySelector("main .history-page .history-card .Gn-Slamet");
const prauH = document.querySelector("main .history-page .history-card .Gn-Prau");

// events
buttonH[0].addEventListener("click", function () {
    if (arjunoH.style.display == "block") {
        arjunoH.style.display = "none";
    } else if (slametH.style.display == "block") {
        slametH.style.display = "none";
    } else if (prauH.style.display == "block") {
        prauH.style.display = "none";
    }
    ciremaiH.style.display = "block";
});
buttonH[1].addEventListener("click", function () {
    if (ciremaiH.style.display == "block") {
        ciremaiH.style.display = "none";
    } else if (slametH.style.display == "block") {
        slametH.style.display = "none";
    } else if (prauH.style.display == "block") {
        prauH.style.display = "none";
    }
    arjunoH.style.display = "block";
});
buttonH[2].addEventListener("click", function () {
    if (arjunoH.style.display == "block") {
        arjunoH.style.display = "none";
    } else if (ciremaiH.style.display == "block") {
        ciremaiH.style.display = "none";
    } else if (prauH.style.display == "block") {
        prauH.style.display = "none";
    }
    slametH.style.display = "block";
});
buttonH[3].addEventListener("click", function () {
    if (arjunoH.style.display == "block") {
        arjunoH.style.display = "none";
    } else if (slametH.style.display == "block") {
        slametH.style.display = "none";
    } else if (ciremaiH.style.display == "block") {
        ciremaiH.style.display = "none";
    }
    prauH.style.display = "block";
});

// Hamburger menu
const tombolM = document.querySelector("header .navbar .hamburger-menu img");
const navBar = document.querySelector("header .navbar .navbar-nav");
tombolM.addEventListener("click", function () {
    navBar.classList.toggle("active");
});
