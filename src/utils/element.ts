import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

class AppElement extends LitElement {
    createRenderRoot = () => this;
}

export { AppElement, html, customElement, property };