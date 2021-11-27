import { html, TemplateResult } from 'lit';

const routes: Array<Route> = [
    {
        path: '/',
        component: html`<h1>Hola mundo</h1>`
    }
];

interface Route {
    path: string,
    component: TemplateResult
}

export { Route, routes };