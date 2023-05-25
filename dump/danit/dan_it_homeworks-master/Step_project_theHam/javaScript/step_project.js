'use strict';


// section services
const tabsList = document.querySelector('.services-list-tabs');

tabsList.addEventListener('click', showTabsContent);

function showTabsContent(event) {
    const data = event.target.dataset.type;
    document.querySelector('.active-text').classList.remove('active-text');
    document.querySelector(`[data-li = ${data}]`).classList.add('active-text');
    document.querySelector('.active-tab').classList.remove('active-tab');
    event.target.classList.add('active-tab');
}



// section work
const amazingWorkList = [{
    img: "./img/section_work/graphic_design/graphic-design1.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design2.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design3.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design4.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design5.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design6.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design7.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design8.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design9.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design10.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design11.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/graphic_design/graphic-design12.jpg",
    cat: "graphic design",
}, {
    img: "./img/section_work/web_design/web-design1.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design2.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design3.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design4.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design5.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design6.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design7.jpg",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design8.png",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design9.png",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design10.png",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design11.png",
    cat: "web design",
}, {
    img: "./img/section_work/web_design/web-design12.png",
    cat: "web design",
}, {
    img: "./img/section_work/landing_pages/landing-page1.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page2.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page3.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page4.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page5.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page6.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page7.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page8.jpg",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page9.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page10.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page11.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/landing_pages/landing-page12.png",
    cat: "landing pages",
}, {
    img: "./img/section_work/wordpress/wordpress1.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress2.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress3.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress4.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress5.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress6.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress7.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress8.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress9.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress10.jpg",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress11.png",
    cat: "wordpress",
}, {
    img: "./img/section_work/wordpress/wordpress12.png",
    cat: "wordpress",
}, ];


let count = 12;
const workContent = document.querySelector('.work-content-list');
showMore(amazingWorkList, count);



const workList = document.querySelector('.work-list');

workList.addEventListener('click', showCategories)

function showCategories(event) {
    document.querySelector('.green').classList.remove('green');
    event.target.classList.add('green');
    workContent.innerHTML = '';
    if (event.target.innerHTML === 'all') {
        const arr1 = [...amazingWorkList];
        arr1.length = count;
        renderElements(arr1)
        console.log('all');

    } else {
        const category = amazingWorkList.filter((item) => item.cat === event.target.innerHTML);
        category.map(item => {
            workContent.insertAdjacentHTML('afterbegin', `<li class="work-content-item">
            <div class="work-card">
                <div class="work-card-front">
                    <img src="${item.img}" alt="amazing work" class="work-photo" width="285" height="211">
                </div>
                <div class="work-card-back">
                    <img src="./img/work_form1.png" alt="" class="card-back-form-more">
                    <img src="./img/work_form2.png" alt="" class="card-back-form-search">
                    <p class="card-back-title">creative design<span class="card-back-subtitle">${item.cat}</span></p>
                </div>
            </div>
        </li>`)
        });
    }
}

function renderElements(arr) {
    console.log(arr);
    arr.map(item => {
        workContent.insertAdjacentHTML('beforeend', `<li class="work-content-item">
        <div class="work-card">
            <div class="work-card-front">
                <img src="${item.img}" alt="amazing work" class="work-photo" width="285" height="211">
            </div>
            <div class="work-card-back">
                <img src="./img/work_form1.png" alt="" class="card-back-form-more">
                <img src="./img/work_form2.png" alt="" class="card-back-form-search">
                <p class="card-back-title">creative design<span class="card-back-subtitle">${item.cat}</span></p>
            </div>
        </div>
    </li>`)
    });

}

const btnLoad = document.querySelector('.show-more');
btnLoad.addEventListener('click', function() {
    showMore(amazingWorkList, count)
});


function showMore(arr, length) {
    console.log(length);
    const array = [...arr];
    if (length === 12) {
        array.length = length;
        console.log(array);
        renderElements(array);
        count = 24;
    } else if (length === 24) {
        array.length = length;
        count = 36;
    } else if (length === 36) {
        array.length = length;
        console.log(array);
        count = 48;
        btnLoad.remove();
    } else if (length === 48) {
        array.length = length;
        count = false;
    }
}



// section client-feedback
const btnPrew = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

const img = document.querySelectorAll('.clients-photo');

const clientsList = document.querySelector('.clients-gallery-list');

clientsList.addEventListener('click', showImg);

function showImg(event) {
    const data = event.target.dataset.type;
    console.log(data)
    document.querySelector('.active-client').classList.remove('active-client');
    document.querySelector(`[data-li = ${data}]`).classList.add('active-client');
    document.querySelector('.shown').classList.remove('shown');
    event.target.classList.add('shown');
}




const clientItem = document.querySelectorAll('.clients-gallery-item');
// console.log(clientItem);
let currentItem = 0;

btnPrew.addEventListener('click', previousItem);
btnNext.addEventListener('click', nextItem);

function nextItem() {
    goToItem(currentItem + 1);
}

function previousItem() {
    goToItem(currentItem - 1);

}

function goToItem(n) {
    clientItem[currentItem].className = 'clients-gallery-item';
    currentItem = (n + clientItem.length) % clientItem.length;
    clientItem[currentItem].className = 'clients-gallery-item shown';
}
// btnPrew.onclick = function() {
//     previousItem();
// }
// btnNext.onclick = function() {
//     nextItem();
// }



// function nextItem() {
//     clientItem[currentItem].className = 'clients-gallery-item';
//     currentItem = (currentItem + 1) % clientItem.length;
//     clientItem[currentItem].className = 'clients-gallery-item shown';
// }

// function previousItem() {
//     clientItem[currentItem].className = 'clients-gallery-item';
//     currentItem = (currentItem - 1) % clientItem.length;
//     clientItem[currentItem].className = 'clients-gallery-item shown';
// }