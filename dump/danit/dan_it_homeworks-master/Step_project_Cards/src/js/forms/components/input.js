import Component from "./component.js";

class Input extends Component {
  render() {
    const { tag, label, handler, options = "", ...attr } = this.props;

    let input = this.createElement(tag, attr);
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        input.append(this.createElement("option", { value: value }, value));
      }
    }
    this.input = input;
    if (label) {
      const lab = this.createElement("label", {}, label);
      lab.append(input)
      return lab
    }
   
    return input;
  }
  handler() {
    const { handler } = this.props;
    this.input.addEventListener(`${handler.event}`, handler.func);
  }
}

export default Input;
