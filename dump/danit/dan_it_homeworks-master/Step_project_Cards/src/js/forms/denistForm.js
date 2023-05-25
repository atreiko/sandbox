import RegisterForm from './components/registerForm.js'
import Input from "./components/input.js"
import { Element } from "../forms/components/index.js";


class DentistForm extends RegisterForm {
    dateProps = {
        tag: "input",
        type: "date",
        name: "date-visit",
        label: "Дата визита",
    }
    lastDateProps = {
        tag: "input",
        type: "date",
        name: "last-visit",
        label: "Дата последнего визита"
    }
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Создать визит",
        class: "modal-window__btn",
    };
    render() {
        const form = super.render()
        const { submitProps, dateProps, lastDateProps } = this
        form.append(
            new Input(dateProps).render(),
            new Input(lastDateProps).render(),
            new Element(submitProps).render())
        form.setAttribute('id', 'dentist')
        return form
    }


}
export default DentistForm