const btn = document.querySelector('.btn');
btn.onmousemove = function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}

function showSection(section){
    var sections = document.getElementsByClassName("section");

    for(var i = 0; i < sections.length; i++){
        sections[i].style.display = "none"
    }
    document.getElementById("section" + section).style.display = "flex";
}