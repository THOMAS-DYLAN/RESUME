$(function () {
    $(".section-title").on("mouseover", function () {
        let r = Math.floor(Math.random() * 255 + 50);
        let g = Math.floor(Math.random() * 255 + 50);
        let b = Math.floor(Math.random() * 255 + 50);
        $(".section-title").css("color", `rgb(${r}, ${g}, ${b})`);
        $(".progress-bar").css("background", `rgb(${r}, ${g}, ${b})`);
    });
})