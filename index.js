$("h1").css("color", "red");
$("h1").addClass("big-font");

//event listener
$("button").click(
    function() {
        $("h1").css("color", "blue");
    }
);

//keypress event listener -> Show the keycode of the key that was pressed
$("body").keypress(
    function(event) {
        //console.log(event.key);
        $("h1").text(event.key);
    }
);

//other event listener
$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
})

// for (var i = 0; i < 4; i++) {
//     document.querySelectorAll("button")[i].onclick = function() {
//         document.querySelector("h1").style.color = "green";
//     }
// }

// for (var i = 0; i < 4; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "red";
//     })
// }