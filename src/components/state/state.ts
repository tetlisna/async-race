const storageKey = 'exampleSpaApp';

export default class State {
    fields: Map<string, string>;
  /* eslint-disable class-methods-use-this */

    constructor() {
        this.fields = this.loadState();

        window.addEventListener('beforeunload', this.saveState.bind(this));
    }

    setField(name: string, value: string) {
        this.fields.set(name, value);
    }

    getField(name: string) {
        if (this.fields.has(name)) {
            return this.fields.get(name);
        }
        return '';
    }

    saveState() {
        const fiedlsObject = Object.fromEntries(this.fields.entries());
        localStorage.setItem(storageKey, JSON.stringify(fiedlsObject));
    }

    loadState() {
        const storageItem = localStorage.getItem(storageKey);
        if (storageItem) {
            const fieldObject = JSON.parse(storageItem);
            return new Map(Object.entries(fieldObject));
        }
        return new Map();
    }
}