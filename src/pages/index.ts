import { AppElement, html, customElement } from "utils/element";

@customElement('home-page')
class Home extends AppElement {
    render() {
        return html`<h1>Hello world</h1>`;
    }
}