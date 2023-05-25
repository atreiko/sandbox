import { Component } from "./index.js";

class Element extends Component {
    render() {
        const { tag, content, handler, ...attr } = this.props;

        const element = this.createElement(tag, attr, content);
        this.element = element
        return element;
    }
    handler() {
        const { handler } = this.props;
        this.element.addEventListener(`${handler.event}`, handler.func)

    }
}

export default Element;