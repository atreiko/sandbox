import RegisterForm from "./components/registerForm.js";
import Input from "./components/input.js";
import { Element } from "../forms/components/index.js";

class CardioForm extends RegisterForm {
    dateProps = {
        tag: "input",
        type: "date",
        name: "date-visit",
        label: "Дата визита",
        required: true,
    };

    psessureProps = {
        tag: "input",
        type: "text",
        name: "pressure",
        label: "Обычное давление",
        required: true,
    };
    massindexProps = {
        tag: "input",
        type: "text",
        name: "mass-index",
        label: "Индекс массы тела",
        required: true,
    };
    diseasesProps = {
        tag: "textarea",
        name: "diseases",
        label: "Заболевания сердечно-сосудистой системы",
        required: true,
    };
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Создать визит",
        class: "modal-window__btn",
    };
    ageProps = {
        tag: "input",
        name: "age",
        placeholder: "Введите возраст",
        label: "Возраст пациента",
        required: true,
    };

    render() {
        const form = super.render();
        const {
            ageProps,
            dateProps,
            submitProps,
            psessureProps,
            massindexProps,
            diseasesProps,
        } = this;
        form.append(
            new Input(ageProps).render(),
            new Input(psessureProps).render(),
            new Input(massindexProps).render(),
            new Input(diseasesProps).render(),
            new Input(dateProps).render(),

            new Element(submitProps).render()
        );

        form.setAttribute("id", "cardio");

        return form;
    }
}
export default CardioForm;