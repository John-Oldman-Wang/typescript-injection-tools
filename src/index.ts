import 'reflect-metadata';
import { ReflectiveInjector } from 'injection-js';
import A from './A';
import B from './B';

const injector = ReflectiveInjector.resolveAndCreate([
    {
        provide: 'A',
        useClass: A,
    },
    B,
]);

const b: B = injector.get(B);

b.method();
