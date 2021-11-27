import { AppElement, html, customElement, property } from "utils/element";
import { store } from "utils/store";

@customElement('home-page')
class Home extends AppElement {

    @property() name: string = 'World';

    render() {
        const name = store.get('page').query.name; 
        this.name = typeof name !== 'undefined' ? name : this.name;

        return html`<h1>Hello ${this.name}</h1>`;
    }
}