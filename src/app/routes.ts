import { html, TemplateResult } from 'lit';

const routes: Array<Route> = [
    {
        path: '/',
        component: html`<home-page></home-page>`
    }
];

interface Route {
    path: string,
    component: TemplateResult
}

export { Route, routes };