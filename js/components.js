const searchButton = document.querySelector("#searchButton");
const closeButton = document.querySelector(".closeSearch");
const viewSearch = document.querySelector(".dropSearchWrap");

searchButton.addEventListener("click", function () {
    viewSearch.style.display = "flex";
});
closeButton.addEventListener("click", function () {
    viewSearch.style.display = "none";
});


function openPanel(event, panelNumber) {
    const panel = document.getElementsByClassName("panelContent");
    for (let i = 0; i < panel.length; i++) {
        panel[i].className = panel[i].className.replace(" activePanel", "");
    };
    const tab = document.getElementsByClassName("tab");
    for (let i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" activeTab", "");
    };
    document.getElementById(panelNumber).className += " activePanel";
    event.currentTarget.className += " activeTab";
}
