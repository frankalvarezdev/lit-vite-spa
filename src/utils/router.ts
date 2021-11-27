import { AppElement, html, customElement, property } from "./element";
import { routes, Route } from "app/routes";
import { pathToRegexp, match } from "path-to-regexp";
import { store } from "./store";

@customElement('main-app')
class App extends AppElement {
    @property({ type: Array }) routes: Array<Route> = routes;
    @property({ type: String }) currentPath: string = this.getPath();

    /**
     * @returns {string} path 
     */
    getPath(): string {
        return window.location.pathname;
    }

    setPageTitle(title: Function) {
        if (title() instanceof Promise) {
            title().then((r: string) => document.title = r); //* obtiene el titulo de una funcion asincrona
        } else {
            document.title = title();
        }
    }

    router(path: string) {

        addEventListener('location-change', () => {
            this.currentPath = this.getPath();
        });

        addEventListener('popstate', () => {
            this.currentPath = this.getPath();
        });

        let content = null;

        for (const route of this.routes) {

            //! si no tinene un componente designado, se marca como error
            if (!('component' in route)) {
                return console.error(`El path: ${route.path} no tiene un componente definido`);
            }

            const parser = match(route.path);

            if (pathToRegexp(route.path).test(path)) {

                // obtiene los parametros 'query' de la url 
                const searchParams: any = new URLSearchParams(window.location.search);

                let query: any = {};
                for (let p of searchParams) query[p[0]] = p[1]; // convierte a un objeto 'nombre => valor'

                let data: any = parser(path);
                data.query = query; // agrega los parametros 'query' al objeto data

                // agrega datos de la pagina a la store
                store.set('page', data);

                content = route.component;

                if (typeof route.title === 'function') {
                    this.setPageTitle(route.title);
                } else {
                    //* cambio el titulo de la pagina
                    document.title = route.title;
                }
            }
        }

        if (content) return content; //* retorna el componente si se definio
        else return html`<error-404></error-404>`; //! page not found
    }

    render() {
        return this.router(this.currentPath);
    }
}