import { AppElement, html, customElement, property } from "utils/element";
import { Page } from "utils/page";

@customElement('hello-name')
class TestId extends AppElement {
    @property({ type: String }) name: string = Page.getParam('name');

    render() {
        return html`hello ${this.name}`;
    }
}