import { store } from './store';

interface Page {
    index: number,
    path: string,
    params: any,
    query: any,
    hasParam: Function,
    hasQuery: Function
}

class Page {
    constructor() {
        // page object 
        const data: Page = {
            ...store.get('page'), //* datos de la pagina
            //? functiones utiles
            hasParam: (name: string): boolean => name in data.params, // si tiene el parametro
            hasQuery: (name: string): boolean => name in data.query // si tiene la query
        };
        return data;
    }

    /**
     * @param name value name
     * @param def default value
     * @returns value
     */
    static getQuery(name: string, def: string): string {
        const data = store.get('page');
        console.log(data);
        return name in data.query ? data.query[name] : def;
    }
    
    /**
     * @param name value name
     * @param def default value
     * @returns value
     */
    static getParam(name: string, def: string = 'default'): string {
        const data = store.get('page');
        return name in data.params ? data.params[name] : def;
    }
}

export { Page };