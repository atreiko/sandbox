'use strict';
const amazingWorkList = [{
    img: "./img/section_work/landing_pages/landing-page5.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design10.png",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design3.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/landing_pages/landing-page10.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/wordpress/wordpress1.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/landing_pages/landing-page1.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design1.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/landing_pages/landing-page11.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page3.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/wordpress/wordpress2.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/web_design/web-design3.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/landing_pages/landing-page2.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design2.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design2.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress3.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress4.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/landing_pages/landing-page4.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design4.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design4.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress5.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/web_design/web-design5.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design5.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress6.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/landing_pages/landing-page6.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design6.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design6.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress7.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/graphic_design/graphic-design1.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/landing_pages/landing-page7.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design7.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design7.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress8.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/landing_pages/landing-page8.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design8.png",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design8.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress9.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/landing_pages/landing-page9.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design9.png",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design9.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress10.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/graphic_design/graphic-design10.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress11.png",
    cat: "wordpress",
}, {
    img: "./img/section_work/web_design/web-design11.png",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design11.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/wordpress/wordpress12.png",
    cat: "wordpress",
}, {
    img: "./img/section_work/landing_pages/landing-page12.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/web_design/web-design12.png",
    cat: "web design",
}, {
    img: "./img/section_work/graphic_design/graphic-design12.jpg",
    cat: "graphic design",
}, ];

let count = 12;
const workContent = document.querySelector('.work-content-list');
const workList = document.querySelector('.work-list');
const btnLoad = document.querySelector('.show-more');
const preloadList = document.querySelector('.preload-list');

const render = (arr) => {
    arr.map(item => {
        workContent.insertAdjacentHTML('beforeend', `<li>
        <div class="js-work-card">
            <div class="js-work-card-front">
                <img src="${item.img}" alt="amazing work" class="js-work-photo" width="285" height="211">
            </div>
            <div class="js-work-card-back">
                <a href="#void">
                    <span class="fas fa-link js-card-back-more"></span>
                </a>
                <a href="#void">
                    <span class="fas fa-search js-card-back-search"></span>
                </a>
                <p class="js-card-back-title">creative design<span class="js-card-back-subtitle">${item.cat}</span></p>
            </div>
        </div>
    </li>`)
    })
};

const workFilter = (arr, length) => {
    const renderArr = [...arr];
    if (count === 36) {
        btnLoad.classList.add('js-btn-hide');
    }
    const actualArr = renderArr.slice(count, count + 12);
    render(actualArr);
    count += 12;
}

function showCategories(event) {
    const className = 'js-green-item';
    const elem = event.target.closest('.work-item');
    document.querySelector('.js-green-item').classList.remove('js-green-item');
    elem.classList.add('js-green-item');
    workContent.innerHTML = '';
    if (event.target.innerHTML === 'all') {
        if (document.querySelector('.js-btn-hide')) {
            if (count === 48) {
                btnLoad.classList.add('js-btn-hide');
            } else {
                document.querySelector(".js-btn-hide").classList.remove("js-btn-hide");
            }
        }
        const arrToRender = [...amazingWorkList];
        arrToRender.length = count;
        render(arrToRender);
    } else {
        btnLoad.classList.add("js-btn-hide");
        const category = amazingWorkList.filter((item) => item.cat === event.target.innerHTML);
        render(category);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const arrToRender = [...amazingWorkList];
    arrToRender.length = count;
    render(arrToRender);
})

for (const item of workList.children) {
    item.addEventListener('click', showCategories)
}

btnLoad.addEventListener('click', () => {
    preloadList.classList.add('preload-active');
    setTimeout(() => {
        preloadList.classList.remove('preload-active');
        workFilter(amazingWorkList, count);
    }, 2000);
});