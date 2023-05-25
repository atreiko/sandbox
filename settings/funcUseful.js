//* Отправить POST или GET запрос
//* -----------------------------
//? send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(response => {
        console.log(response)
        processData(response) //! processData прокидывали данные для токена и перенаправляли на HomePage
    })
}

//* -----------------------------