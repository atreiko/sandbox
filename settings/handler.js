

//? <==========>     Универсальный Handler для форм в onChange
// ! Инпуты должны иметь атрибут "name"

import { useState } from 'react'
const [form, setForm] = useState({
    name: '',
    password: '',
})
const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
}

//? </============>
