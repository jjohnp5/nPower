imageIndex = 1;
showImages(imageIndex);

function mainImage(y){
    showImages(imageIndex += 1);
}

function clickThumb(x) {
    var i;
    var c = document.getElementsByClassName("thumbs");
    var j = document.getElementsByClassName("slides");
    for (i = 0; i < j.length; i++) {
        j[i].style.display = "none";
        c[i].style.opacity = ".6";
    }
    j[x].style.display = "block";
    c[x].style.opacity = "1";
   
    
    }

function showImages(x) {
    var i;
    var j = document.getElementsByClassName("slides");
    if (x > j.length) { 
        imageIndex = 1;
    }
    if (x < imageIndex) {
        imageIndex = j.length;
    }
    for (i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }
    j[imageIndex - 1].style.display = "block";
}