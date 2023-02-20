/// app-browser-name --disable-web-security --allow-file-access-from-files (run browser without security)

var base_url = window.location.origin;
var host     = window.location.host;


var pathArray = window.location.pathname.split("/");
pathArray.unshift(base_url);
pathArray.pop();
let url = "";
console.log(host);


for (pathName of pathArray) {
    url += pathName + "/";
}


function parseURLParams() {
    const queryString = window.location.search;
    const urlParams   = new URLSearchParams(queryString);

    return urlParams;
}

const paramsUrl = parseURLParams();

///=========================== Load another file HTML ===========================/// 
function loadHTML(file, section) {

    const menuHalaman = parseURLParams().get("menu");

    //============ AJAX with xhr ============//
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status == 200) {
            section.innerHTML = xhr.responseText;
            addClass("#" + menuHalaman, "navigation-active");
        }
        else {
            console.warn("Failure status code not 200");
        }
    }
    xhr.open('get', file, true);
    xhr.send();

}

const sidebarSection = document.getElementById("sidebar");
loadHTML(url + 'templates/sidebar.html', sidebarSection);

///=========================== End Load another file HTML ===========================/// 







// ============= Add & Remove Class ambil dari variabel dari setiap elemen pada object queryselectorAll =============//
function removeClass(selector, propertyVal) {
    const selectorObject = document.querySelectorAll(selector);
    const typeVar = typeof (selectorObject);
    const objSize = Object.keys(selectorObject).length;
    console.log(selectorObject);
    if (typeVar != "object" || objSize < 1) {
        selectorObject.classList.remove(propertyVal);
    }
    else {
        selectorObject.forEach(function (item) {
            item.classList.remove(propertyVal);
        });
    }

}

function addClass(selector, propertyVal) {
    const selectorObject = document.querySelectorAll(selector);
    const typeVar        = typeof (selectorObject);
    const objSize        = Object.keys(selectorObject).length;

    if (typeVar != "object" || objSize < 1) {
        selectorObject.classList.add(propertyVal);
    }
    else {
        selectorObject.forEach(function (item) {
            item.classList.add(propertyVal);
        });
    }
}
// ============= End Add & Remove Class ambil dari variabel dari setiap elemen pada object queryselectorAll =============//



let sw = window.width;

if(sw < 1920)
{
    document.body.style.zoom = "80%";
}