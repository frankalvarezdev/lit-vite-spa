import { AppElement, html, customElement, property } from "utils/element";
import { Page } from "utils/page";

@customElement('home-page')
class Home extends AppElement {

    @property() name: string = Page.getQuery('name', 'World');

    render() {
        return html`<h1>Hello ${this.name}</h1>`;
    }
}