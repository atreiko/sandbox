import RegisterForm from './components/registerForm.js'
import Input from "./components/input.js"
import { Element } from "../forms/components/index.js";


class TherapistForm extends RegisterForm {
    dateProps = {
        tag: "input",
        type: "date",
        name: "date-visit",
        label: "Дата визита",
        required: true,
    }
    ageProps = {
        tag: "input",
        name: "age",
        placeholder: "Введите возраст",
        label: "Возраст пациента",
        required: true,
    };
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Создать визит",
        class: "modal-window__btn",
    };
    render() {
        const form = super.render()
        const { submitProps, dateProps, ageProps } = this
        form.append(new Input(dateProps).render(),
            new Input(ageProps).render(),
            new Element(submitProps).render()
        )
        form.setAttribute('id', 'therapist')
        return form
    }


}
export default TherapistForm