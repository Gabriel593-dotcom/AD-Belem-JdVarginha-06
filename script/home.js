let btnhomepage = document.getElementById("home");
let btnGrupos = document.getElementById("grupos");
let btnNossaHistoria = document.getElementById("nossa_historia");

btnhomepage.addEventListener("click", function(){
    addContentOnSection("homepage.html", "homepage-iframe");
});

btnGrupos.addEventListener("click", function(){
    addContentOnSection("grupos.html", "grupos-iframe");
});

btnNossaHistoria.addEventListener("click", function(){
    addContentOnSection("nossa_historia.html", "nossa-historia-iframe");
});

function addContentOnSection(name, idName) {
    let section = document.getElementById("section")
    if(section.hasChildNodes) {
        for(child of section.children){
            child.remove();
        }
    }
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", name);
    iframe.setAttribute("scrolling", "no");
    //Ajuste de altura do iframe para a homepagepage
    if(idName == "homepage-iframe"){
        console.log("caiu aqui")
        iframe.setAttribute("height", localStorage["iframeHomePageSize"]);
    }
    document.getElementById("section").appendChild(iframe); 
}
