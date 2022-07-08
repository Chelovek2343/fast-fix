// slider
var swiper = new Swiper('.swiper');

// burger menu
const burgerCtr = document.querySelector('#burger-menu');
const menuCtr = document.querySelector('#mobile-menu');
burgerCtr.addEventListener('click', function () {
    this.classList.toggle('active');
    menuCtr.classList.toggle('show_mobile_menu');
});

// accordeon
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}

// tabs
document.querySelectorAll('.tabs-wrapper').forEach((e) => {
    let tabTabs = e.querySelectorAll('.tabs .tab');
    let tabItems = e.querySelectorAll('.tabs-items .item');
    for (let i = 0; i < tabTabs.length; i++) {
        tabTabs[0].click();
        tabTabs[i].onclick = () => {
            tabTabs.forEach((e) => {
                e.classList.remove('on');
            });
            tabItems.forEach((e) => {
                e.classList.remove('on');
            });
            tabTabs[i].classList.add('on');
            tabItems[i].classList.add('on');
        };
    }
});
