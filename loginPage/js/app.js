function login() {
    document.getElementById('login-content').style.transform = 'rotateY(180deg)';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    var labels = document.getElementsByClassName('labels');
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.display = "none";
    }
    setTimeout(leftGrow, 800);
}

function leftGrow() {
    document.getElementById('right-half').style.display = 'none';
    document.getElementById('left-half').style.width = "100%";
}