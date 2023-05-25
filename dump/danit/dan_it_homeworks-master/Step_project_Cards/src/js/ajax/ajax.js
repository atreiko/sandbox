import Request from "./request.js";

async function login() {
    const form = document.querySelector(".enter-window__form");
    const email = form.querySelector('[type="email"]').value;
    const password = form.querySelector('[type="password"]').value;

    const data = await new Request("http://cards.danit.com.ua").post("/login", {
        email,
        password,
    });
    if (data.data.message === "Login or password are incorrect")
        alert(data.data.message);
    else {
        const token = data.data.token;
        sessionStorage.setItem("token", token);
    }

}

//------------------запрос на создание карточки-------

const baseUrl = new Request("http://cards.danit.com.ua", {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
});

async function saveVisitOnBase(visit) {
    const data = await baseUrl.post("/cards", visit);


  
    return data.data;
}

// --------------- удаление карточки----------------------

async function deleteCard(id) {
    
    const response = await baseUrl.delete(`/cards/${id}`);
    return response;
}

//-----------------получение всех карточек -------------------
async function getAllCards() {

    const response = await baseUrl.get("/cards");
    return response;
}

async function getCard(id) {
    const response = await baseUrl.get(`/cards/${+id}`, );
    return response;
}

async function editVisitOnBase(id, data) {
    const response = await baseUrl.put(`/cards/${id}`, data);
    return response;
}
export { login, saveVisitOnBase, getAllCards, getCard, deleteCard, editVisitOnBase };