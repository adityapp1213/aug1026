
// counter
const countEle = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countEle.textContent = count;
    document.title = `Count: ${count}`;
});

// form
const textin =  document.getElementById("textin");
const textout = document.getElementById("textout");

textin.addEventListener("input", () => {
    output.textContent = textin.value;
});

// toggle
const dynaimg = document.getElementById("dynaimg");
const tooglebtn = document.getElementById("tooglebtn");
const plholder1 = "https://via.placeholder.com/150/0000FF/808080?Text=Image1";
const plholder2 = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Image2";

tooglebtn.addEventListener("click", () => {
    dynaimg.src = dynaimg.src === plholder1 ? plholder2 : plholder1;
});

// scroll section
const scrbtn = document.getElementById("scrbtn");
const anisection = document.getElementById("anisection");

scrbtn.addEventListener("click", () => {
    anisection.scrollIntoView({ behavior: "smooth" });
});

// element visible 

const visibleBox = document.getElementById("visibleBox");

const observer = new IntersectionObserver((entries) => {
    ([entry]) => {
        visibleBox.textContent = entry.isIntersecting ? "Visible" : "Not Visible";

        visibleBox.style.backgroundColor = entry.isIntersecting ? "green" : "red";
    }, 
    {
        threshold: 0.1
    }
});
observer.observe(visibleBox);

