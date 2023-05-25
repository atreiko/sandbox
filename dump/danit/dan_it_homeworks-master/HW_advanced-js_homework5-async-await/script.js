const btn = document.querySelector('#find__btn');
const find = document.querySelector('.find');
const ul = document.createElement('ul');
ul.classList.add('find__list')

btn.addEventListener('click', async() => {
    const urlId = 'https://api.ipify.org/?format=json'
    const responseIdInfo = await axios.get(urlId);
    const { data } = responseIdInfo;
    const ip = data.ip;
    const urlAddres = `http://ip-api.com/json/${ip}`;
    const responseAddresInfo = await axios.get(urlAddres);
    const { timezone, country, region, city, zip } = responseAddresInfo.data;

    ul.insertAdjacentHTML('beforeend', `<li> Continent: ${timezone}</li>
    <li> Country: ${country}</li>
    <li> Region: ${region}</li>
    <li> City: ${city}</li>
    <li> District: ${zip}</li>`)

    find.append(ul);
})