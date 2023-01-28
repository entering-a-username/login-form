(function() {
    const sign_up = document.getElementById("btnID1");
    const sign_in = document.getElementById("btnID2");
    const first = document.getElementById("first_step");
    const second = document.getElementById("second_step");
    const arrow = document.getElementById("arrow_back");


    sign_up.addEventListener("click", function() {
        first.classList.add("hidden");
        second.classList.remove("hidden");
    });

    arrow.addEventListener("click", function() {
        second.classList.add("hidden");
        first.classList.remove("hidden");
    })



})();