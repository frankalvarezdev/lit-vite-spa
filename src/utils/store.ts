class Store {
    static store: any = {};
    /** 
     * @returns Retorna el resultado
     */
    static get(name: string): any {
        if (name in this.store) {
            return this.store[name];
        } else {
            return false;
        }
    }
    /**
     * Agrega un nuevo valor
     */
    static set(name: string, value: any) {
        this.store[name] = value;
    }
    /**
     * Imprime la store
     */
    static print(json = false) {
        console.log(json ? JSON.stringify(this.store) : this.store);
    }
}

export { Store as store };
export default Store;