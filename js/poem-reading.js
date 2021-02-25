function showPoem() {
    var x = document.getElementById("poem10");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).ready(function() {


    var totalItems = $('.carousel-item').length;
    var currentIndex = $('div.carousel-item.active').index() + 1;

    var down_index;
    $('#lblPoemPart').html('' + currentIndex + '/' + totalItems + '');

    $(".carousel-control-next").click(function () {
        currentIndex_active = $('div.carousel-item.active').index() + 2;
        if (totalItems >= currentIndex_active) {
            down_index = $('div.carousel-item.active').index() + 2;
            $('#lblPoemPart').html('' + currentIndex_active + '/' + totalItems + '');
        }
        console.log(totalItems);

    });

    $(".carousel-control-prev").click(function () {
        down_index = down_index - 1;
        if (down_index >= 1) {
            $('#lblPoemPart').html('' + down_index + '/' + totalItems + '');
        }
        console.log(totalItems);

    });

});