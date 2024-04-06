let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 +'px';
    treeLeft.style.marginLeft = value * -1.5 + 'px';
    treeRight.style.marginLeft = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 +'px';
    gateRight.style.left = value * -0.5 +'px';
});
const heroes = document.querySelectorAll(".hero");

heroes.forEach((hero) => {
  hero.addEventListener("click", () => {
    removeActiveClasses();
    hero.classList.add("active");
  });
});

function removeActiveClasses() {
  heroes.forEach((hero) => {
    hero.classList.remove("active");
  });
}
