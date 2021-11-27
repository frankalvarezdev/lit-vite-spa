import { AppElement, html, component } from "utils/element";

@component('home-page')
class Home extends AppElement {
    render() {
       return html`<h1>Hola mundo</h1>`; 
    }
}