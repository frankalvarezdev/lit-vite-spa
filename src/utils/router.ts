import { AppElement, html, customElement, property } from "./element";
import * as UrlPattern from "url-pattern";
import routes from "./../app/routes";

@customElement('main-app')
class App extends AppElement {
    @property({ type: Array }) routes: Array<any> = routes;
    @property({type: String}) currentPath: String = this.getPath();

    getPath(): string {
        return window.location.pathname;
    }

    router(path: string) {

        addEventListener('location-change', () => {
            this.currentPath = this.getPath();
        });
        addEventListener('popstate', () => {
            this.currentPath = this.getPath();
        });

        for (const route of this.routes) {

            // si no se paso el componente marca como error 404
            if (!('component' in route)) return html`<h1>ERROR 404</h1>`;

            let content = null;

            // comprueba las rutas
            if ('match' in route) {
                var pattern = new UrlPattern(route.match);
                pattern.match(path);
                // console.log(pattern.match(window.location.pathname));
            } else if ('path' in route) {
                if (route.path === path) {
                    content = route.component;
                }
            }

            if (content) return content;
            else return html`ERROR 404 :(`;
        }
    }

    render() {
        return html`
            <h1>Hola mundo 2</h1>
        `;
    }
}