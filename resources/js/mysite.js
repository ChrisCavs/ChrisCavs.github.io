function openPage(evt, contentName) {

    // hide all "tabcontent" sections
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // remove "active" class from tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openPagePlus(target, evt, contentName) {
    openPage(evt, contentName);

    //add "active" class to top-nav based on target
    document.getElementById(target).classList.add("active");
}