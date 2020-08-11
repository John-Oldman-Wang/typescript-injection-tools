import 'reflect-metadata';
import { Inject } from 'injection-js';
import { AInterface } from './A';

export default class B {
    constructor(@Inject('A') public a: AInterface) {}
    method() {
        this.a.method();
    }
}
