function CheckPP () {
    if (document.getElementById("pp").value == 'private') {
        document.getElementById('password').style.display = "inline";
        document.getElementById('password').required = true;
        document.getElementById('passwordLabel').style.display = "inline"
    } else {
        document.getElementById('password').style.display = "none";
        document.getElementById('password').required = false;
        document.getElementById('passwordLabel').style.display = "none"
    }
}