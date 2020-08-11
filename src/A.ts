export interface AInterface {
    method(): void;
}

export default class A implements AInterface {
    method() {
        console.log('this is a method!');
    }
}
