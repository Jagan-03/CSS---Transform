let handleHover = (name) => {
    setTimeout(() => {
        if(name === "none"){
            document.getElementById("main").style.backgroundImage = `url(img/default.jpg)`;
        } else {
            document.getElementById("main").style.backgroundImage = `url(img/${name}.jpg)`;
        }
    }, 100);
}