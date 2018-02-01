/**
 * Created by ivannedelkovski on 12/15/17.
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

$(document).ready( function () {

    var sources = ["img/1.png", "img/1.png", "img/2.png", "img/2.png", "img/3.png", "img/3.png",
        "img/4.png", "img/4.png", "img/5.png", "img/5.png", "img/6.png", "img/6.png",
        "img/7.png", "img/7.png", "img/8.jpg", "img/8.jpg"];


    var images = document.getElementsByClassName("imgs");

    var temp = shuffle(sources);
    for(var i = 0; i < temp.length; ++i){

        $(images[i]).attr("src", temp[i]);
        $(images[i]).attr("width", "120px");
        $(images[i]).attr("height", "125px");
    }

    $("#reset").click(function () {

        location.reload();
    });

    var img1;
    var parent1;
    var img2;
    var parent2;
    var cancel;
    var cancelParent;
    var counter = 0;

    $("td").click(function () {

        if($(this).prop("disabled") == true){
            console.log("DISABLED");
            return;
        }
        if( this == parent1 || this == parent2 || this == cancelParent){
            console.log("ALREADY SELECTED");
            return;
        }


        if(img1 == undefined){

            img1 = this.firstChild;
            parent1 = this;
            $(img1).css("display", "inline-block");

        } else {

            if(cancel != undefined){

                $(cancel).css("display", "none");
            }
            img2 = this.firstChild;
            parent2 = this;
            $(img2).css("display", "inline-block");

            //check if same image
            if( img1 != undefined && img2 != undefined &&  $(img1).attr("src") == $(img2).attr("src") ){

                $(parent1).prop("disabled", true);
                $(parent2).prop("disabled", true);
                img1 = undefined;
                img2 = undefined;
                cancel = undefined;
                cancelParent = undefined;
                counter++;
            } else {

                cancel = img1;
                cancelParent = parent1;
                img1 = img2;
                parent1 = parent2;

            }

        }
        if(counter == 8){

            $("body").css("background", "url(img/celebrate.gif)");
            $("#victory").css("display", "block");
        }
        console.log("img1 = " + $(img1).attr("src"));
        console.log("img2 = " + $(img2).attr("src"));

    });

});