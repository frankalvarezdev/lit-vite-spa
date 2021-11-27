import { html, TemplateResult } from 'lit';

const routes: Array<Route> = [
    {
        path: '/',
        title: 'Home',
        component: html`<home-page></home-page>`
    },
    {
        path: '/hello/:name',
        title: 'Hello world',
        component: html`<hello-name></hello-name>`
    }
];

interface Route {
    path: string,
    component: TemplateResult,
    title: string
}

export { Route, routes };