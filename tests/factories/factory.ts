import { BaseEntity } from 'typeorm';
import faker from 'faker';

export class Factory<T extends BaseEntity> {

    public _faker: Faker.FakerStatic;
    public _factories: {};
    public _times: number;
    private _model: any;
    private _name: string;

    constructor(model: new () => T) {
        this._faker = faker;
        this._factories = {};
        this._times = null;
        this._model = model;
        this._name = this.model.name;
    }

    get model() {
        return this._model;
    }

    public define(callback: (faker?: Faker.FakerStatic) => Partial<T>) {
        this._factories[this._name] = callback;

        return this;
    }

    public makeMany(times: number, overrides: Partial<T> = {}) {
        if (times < 1) {
            throw new Error('Number of models can not be less than one');
        }

        if (!this._factories.hasOwnProperty(this._name)) {
            throw new Error(`Model '${this._name}' not defined`);
        }

        const callback = this._factories[this._name];

        return [...new Array(times)].map(() => {
            return this._makeOnce(callback, overrides);
        });

    }

    public make(overrides: Partial<T> = {}) {
        if (!this._factories.hasOwnProperty(this._name)) {
            throw new Error(`Model '${this._name}' not defined`);
        }

        let callback = this._factories[this._name];

        return this._makeOnce(callback, overrides);
    }

    private _makeOnce(callback: (faker?: Faker.FakerStatic) => Partial<T>, overrides): T {
        const obj = callback(this._faker);

        const data = {
            ...obj,
            ...overrides,
        };

        return this.model.create(data);
    }
}
