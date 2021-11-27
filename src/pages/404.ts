import { AppElement, html, customElement } from "utils/element";

@customElement('error-404')
class Error404 extends AppElement {
    render() {
        return html`<h1>Error 404</h1>`;
    }
}