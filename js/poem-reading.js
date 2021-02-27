
var idPoemShowed=5;
var totalItems;
var currentIndex;
var down_index;


$(document).ready(function() {
    showPoem(idPoemShowed);
});


function showPoem(id) {
    var x = document.getElementById("poem"+id);
    var y;

    for (let i = 1; i <= 5; i++) {
        if (id === i) {
            x.style.display = "block"
            getCurrentItems(id);

        }else {
            y = document.getElementById("poem"+i)
            y.style.display = "none";

        }
    }

}

function previousPart(id) {
    down_index = down_index - 1;
    if (down_index >= 1) {
        document.getElementById('lblPoem' + id).innerHTML = '' + down_index + '/' + totalItems + '';
    }
}

function nextPart(id) {
    getCurrentItems(id);
    currentIndex_active = $('#poem' + id + ' .carousel-item.active').index() + 2;
    if (totalItems >= currentIndex_active) {
        down_index = $('#poem' + id + '  .carousel-item.active').index() + 2;
        document.getElementById('lblPoem' + id).innerHTML = '' + currentIndex_active + '/' + totalItems + '';
    }

}

function getCurrentItems(id){
    totalItems = $('#poem' + id + ' .carousel-item').length;
    currentIndex = $('#poem' + id + ' .carousel-item.active').index() + 1;
    document.getElementById('lblPoem' + id).innerHTML = '' + currentIndex + '/' + totalItems + '';

}



