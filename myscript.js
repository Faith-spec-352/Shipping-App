let package = [11111, 22222, 33333];



function searchpackage() {
    let getSearchbtn = document.getElementById("checkpackage").value;
    for (let i = 0; i < package.length; i++) {
        if (package[i] == getSearchbtn) {
            location.href = "confirmcheck.html";
        } else {
            location.href = "checkinvalid.html";

        }
    }

}

function searchpackage() {
    let getSearchbtn = document.getElementById("checkpackage").value;
    for (let i = 0; i < package.length; i++) {
        if (package[i] == getSearchbtn || getSearchbtn == 11111 || getSearchbtn == 22222 || getSearchbtn === 33333) {
            location.href = "confirmcheck.html";
        } else {
            location.href = "checkinvalid.html";

        }
    }

}