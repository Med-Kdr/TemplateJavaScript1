// #################################### Start Page Loader
window.addEventListener("load",_ => {
    document.querySelector(".loaderPage").style = "top : 50%;left:50%;width : 0;height:0";
    document.querySelector(".loaderPage > .spiner").style = "top : 50%;left:50%;border:none;width : 0;height:0;";
});
// #################################### End Page Loader
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Scroll Page
let scrollPage = document.querySelector(".scrollPage");
window.addEventListener("scroll",_ => {
    let heightPrincipal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollPage.style.width = `${(window.scrollY / heightPrincipal) * 100}%`;
    console.log("document  : "+ document.documentElement.scrollTop);
    console.log("window  : "+ window.scrollY);
    console.log("################################################");
});
// #################################### End Scroll Page
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Btn Up
let btnUp = document.querySelector(".btnUp");
window.addEventListener("scroll",_ => {
    if(scrollY >= 650) {
        btnUp.style.right = "35px";
    }
    else btnUp.style.right = "-55px";
});
btnUp.addEventListener("click",_ => {
    //window.scrollTo(0,0); 
    // Or also we can do 
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    });
});
// #################################### End Btn Up
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Icon 
let icon = document.querySelector(".header > .icon-header");
let iconSpans = document.querySelectorAll(".header > .icon-header > span");
let iconSpans1 = document.querySelector(".header > .icon-header > span:nth-child(1)");
let iconSpans2 = document.querySelector(".header > .icon-header > span:nth-child(2)");
let iconSpans3 = document.querySelector(".header > .icon-header > span:nth-child(3)");
let HeaderLinks = document.querySelector(".header > .container > ul.links");
icon.onclick = function() {
    if(icon.classList[1] == "no") {
        iconSpans1.style = "top : 10px;transform: rotate(225deg);background-color : var(--main-color);";
        iconSpans2.style = "opacity: 0";
        iconSpans3.style = "top : 10px;transform: rotate(-225deg);background-color : var(--main-color);";
        icon.classList.add("yes");
        icon.classList.remove("no");
        HeaderLinks.style.display = "flex";
    }
    else {
        iconSpans1.style = "top : 0;transform: rotate(0);";
        iconSpans2.style = "opacity: 1";
        iconSpans3.style = "top : 20px;transform: rotate(0);";
        icon.classList.add("no");
        icon.classList.remove("yes");
        HeaderLinks.removeAttribute("style");
    }   
}
// #################################### End Icon 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Navigation
let navigation = document.querySelector(".nav");
let navSpin = document.querySelector(".nav > .spin");
let iconSpin = document.querySelector(".nav > .spin > i");
navSpin.onclick = _ => {
    if(getComputedStyle(navigation).left === "-225px") navigation.style.left = "0";
    else navigation.style.left = "-225px";
    iconSpin.classList.toggle("fa-spin");
}
// #################################### End Navigation
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Change Colors for Document
function hexToRgba(hex, alpha = 1) {
    // Supprimer le caractère '#' s'il est présent
    hex = hex.replace(/^#/, '');

    // Extraire les valeurs hexadécimales des composants R, G, B
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Retourner la couleur RGBA
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ======================= Start for LocalStorage
if(window.localStorage.getItem("pageColor")) {
    document.documentElement.style.setProperty("--main-color",window.localStorage.getItem("pageColor"));
        document.documentElement.style.setProperty("--main-color-alpha",hexToRgba(window.localStorage.getItem("pageColor"),0.5));
        document.querySelectorAll(".nav > .color > .colors > span").forEach(elm => {
            elm.classList.remove("active");
            if(elm.dataset.color == window.localStorage.getItem("pageColor")) elm.classList.add("active");
        });
}
// ======================= End for LocalStorage

document.querySelector(".nav > .color > .colors").addEventListener("click", e => {
    if(e.target.dataset.color != undefined) {
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        document.documentElement.style.setProperty("--main-color-alpha",hexToRgba(e.target.dataset.color,0.5));
        document.querySelectorAll(".nav > .color > .colors > span").forEach(elm => {
            elm.classList.remove("active");
            if(elm.dataset.color == e.target.dataset.color) elm.classList.add("active");
        });
        // ======================= Start for LocalStorage
        window.localStorage.setItem("pageColor",e.target.dataset.color);
        // ======================= End for LocalStorage
    }
});


// #################################### End Change Colors for Document
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Stat Change Background Images
let arraysImage = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
let backgroundImgRandomFunction = function() {
    let randomNumber = Math.floor(Math.random() * arraysImage.length);
    document.querySelector(".landing").style = `background-image: url(../imgs/${arraysImage[randomNumber]});`;
};
// let intervalBackgroundImg = setInterval(backgroundImgRandomFunction,500);

// #################################### End Change Background Images
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Eanble random background
let setRandomBackground = setInterval(backgroundImgRandomFunction,3500);
let randomBackground =  document.querySelectorAll(".nav > .random > .randomm > span");

// ======================= Start for LocalStorage
if(window.localStorage.getItem("enableRandomBackground")) {
    randomBackground.forEach(e => {
        e.classList.remove("active");
    });
    if(window.localStorage.getItem("enableRandomBackground") == "yes") {
        if(setRandomBackground == undefined) {
            setRandomBackground = setInterval(backgroundImgRandomFunction,3500);
        }
        randomBackground[0].classList.add("active");
    }
    else {
        if(setRandomBackground != undefined) {
            clearInterval(setRandomBackground);
            setRandomBackground = undefined;
        }
        randomBackground[1].classList.add("active");
    }   
}
// ======================= End for LocalStorage

document.querySelector(".nav > .random > .randomm").addEventListener("click", e => {
    if((e.target.dataset.random == "no") && (e.target.className != "active") || (e.target.dataset.random == "yes") && (e.target.className != "active")) {
        randomBackground.forEach(e => {
            e.classList.remove("active");
        });
        e.target.classList.add("active");
    }
    // ======================= Start for LocalStorage
    if(e.target.dataset.random != undefined) {
        window.localStorage.setItem("enableRandomBackground",e.target.dataset.random);
    }
    // ======================= End for LocalStorage
    if(randomBackground[0].className == "active") {
        if(setRandomBackground == undefined) {
            setRandomBackground = setInterval(backgroundImgRandomFunction,3500);
        }
    }
    else {
        if(setRandomBackground != undefined) {
            clearInterval(setRandomBackground);
            setRandomBackground = undefined;
        }
    }
});
// #################################### End Enable random background
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Reset Options
let btnReset = document.querySelector(".nav > .reset > button");
let PrincipalColor = document.querySelector(".nav > .color > .colors > span");
btnReset.onclick = _ => {
    if(setRandomBackground != undefined) {
        clearInterval(setRandomBackground);
        setRandomBackground = undefined;
    }
    document.querySelector(".landing").style = `background-image: url(../imgs/1.jpg);`;
    document.documentElement.style.setProperty("--main-color",PrincipalColor.dataset.color);
    randomBackground.forEach(e => {
        e.classList.remove("active");
    })
    randomBackground[0].classList.add("active");

    document.documentElement.style.setProperty("--main-color",PrincipalColor.dataset.color);
    document.documentElement.style.setProperty("--main-color-alpha",hexToRgba(PrincipalColor.dataset.color,0.5));
    document.querySelectorAll(".nav > .color > .colors > span").forEach(elm => {
        elm.classList.remove("active");
        if(elm.dataset.color == PrincipalColor.dataset.color) elm.classList.add("active");
    });
    // ======================= Start for LocalStorage
    window.localStorage.setItem("pageColor",PrincipalColor.dataset.color);
    window.localStorage.setItem("enableRandomBackground",randomBackground[0].dataset.random);
    // ======================= End for LocalStorage
}
// #################################### End Reset Options
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Our Skills
let tableSkill = document.querySelectorAll(".skills > .container > .skill > .size > span");
tableSkill.forEach(e => {
    //e.style.width = `${e.dataset.progress}%`;
    window.addEventListener("scroll",_ => {
    if(scrollY >= 370) e.style.width = `${e.dataset.progress}%`;
    else e.style.width = "0";
});
});

// #################################### End Our Skills
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #################################### Start Our Gallery
let gallery = document.querySelectorAll(".gallery > .container > .img");
gallery.forEach(e => {
    let backBlack = document.createElement("div");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let btnClose = document.createElement("div");
    let txtBtnClose = document.createTextNode("X");
    e.addEventListener("click",elm => {
        backBlack.style = "position: fixed;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);z-index: 101;left: 0;top: 0;";
        img.src = elm.target.src;
        img.style.width = "100%";
        div.append(img);
        div.style = "width: 700px;position: fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);background-color: #eee;padding: 20px;border-radius: 10px;z-index: 102;transition: .5s;";

        btnClose.appendChild(txtBtnClose);
        btnClose.style = "position: absolute;right: -20px;top: -20px;width: 40px;height: 40px;background-color: var(--main-color);border-radius: 50%;display: flex;align-items: center;justify-content: center;font-size: 22px;font-weight: 900;cursor:pointer;";
        div.appendChild(btnClose);

        document.body.appendChild(div);
        document.body.appendChild(backBlack);
        
    });
    window.addEventListener("click",_ => {
        if(document.documentElement.clientWidth <= 767) {
            div.style.width = "350px";
        }
        else {
            div.style.width = "700px";
        }
    });
    btnClose.addEventListener("click",_ => {
        div.remove();
        backBlack.remove();
    });
});
// #################################### End Our Gallery
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++