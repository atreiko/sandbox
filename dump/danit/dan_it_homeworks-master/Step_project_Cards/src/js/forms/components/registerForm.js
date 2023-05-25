import Input from "./input.js";

class RegisterForm extends Input {
    nameProps = {
        tag: "input",
        name: "name",
        placeholder: "Введите имя, фамилию, отчество",
        label: "ФИО пациента",
        required: true,
    };

    timeProps = {
        tag: "select",
        class: "time-list",
        name: "time",
        placeholder: "Ds,",
        label: "Срочность визита",

        options: {
            normal: "Обычная",
            priority: "Приоритетная",
            high: "Неотложная",
        },
    };
    descriptionProps = {
        tag: "textarea",
        name: "description",
        placeholder: "Краткое описание",
        label: "Краткое описание",
        required: true,
    };
    purposeProps = {
        tag: "textarea",
        name: "purpose",
        placeholder: "Цель визита",
        label: "Цель визита",
        required: true,
    };

    render() {
        const form = this.createElement("form", {});
        const {
            nameProps,

            timeProps,
            descriptionProps,
            purposeProps,
        } = this;

        form.append(
            new Input(nameProps).render(),

            new Input(timeProps).render(),
            new Input(descriptionProps).render(),
            new Input(purposeProps).render()
        );

        return form;
    }
}

export default RegisterForm;