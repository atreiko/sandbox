'use strict';

const tabsList = document.querySelector('.services-list-tabs');

tabsList.addEventListener('click', showTabsContent);

function showTabsContent(event) {
    const data = event.target.dataset.type;
    const services = document.querySelector('.active-text');
    services.classList.remove('active-text');
    document.querySelector(`[data-li = ${data}]`).classList.add('active-text');
    const servicesContent = document.querySelector('.active-tab');
    servicesContent.classList.remove('active-tab');
    event.target.classList.add('active-tab');
}