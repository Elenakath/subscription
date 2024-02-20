var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType= document.querySelector("basic");
var subDuration = Number("1");

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    console.log();
})