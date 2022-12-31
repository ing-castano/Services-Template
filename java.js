function loader(){
    let id;
    id = setTimeout(ShowPage,2000);
}

function ShowPage(){
    document.querySelector('.loader').style.visibility = "hidden";
    document.querySelector('.not-loader').style.visibility = "visible";
    let anchorname = window.location.hash.substr(1);
    document.getElementById(anchorname).scrollIntoView();
}