import { html, TemplateResult } from 'lit';
import { Page } from 'utils/page';

const routes: Array<Route> = [
    {
        path: '/',
        title: 'Home',
        component: html`<home-page></home-page>`
    },
    {
        path: '/hello/:name',
        title: async () => `Hello 2 ${Page.getParam('name')}`,
        component: html`<hello-name></hello-name>`
    }
];

interface Route {
    path: string,
    component: TemplateResult,
    title: string | Function
}

export { Route, routes };