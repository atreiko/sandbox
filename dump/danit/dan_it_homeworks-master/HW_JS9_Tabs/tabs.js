'use strict';

const tabsList = document.querySelector('.nav-tabs');

tabsList.addEventListener('click', showTabsContent);

function showTabsContent(event) {
    const data = event.target.dataset.type;
    document.querySelector('.active-text').classList.remove('active-text');
    document.querySelector(`[data-li = ${data}]`).classList.add('active-text');
    document.querySelector('.active-tab').classList.remove('active-tab');
    event.target.classList.add('active-tab');
}