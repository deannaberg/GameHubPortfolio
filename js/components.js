

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
