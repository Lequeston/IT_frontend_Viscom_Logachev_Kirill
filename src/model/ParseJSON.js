import Persons from '../assets/persons.json';

export default class ParseJSON {

    static getArray() {
        return Persons;
    }

    static getProcessedArray(...property) {
        let newArray = [];
        this.getArray().map(elem => {
            let newElem = ParseJSON.getProcessObject(elem, ...property);
            newArray.push(newElem);
        })
        return newArray;
    }

    static getProcessObject(obj, ...property){
        let newElem = {};
        for (let prop in obj) {
            let flag = property.reduce((total, elem) => (total || elem === prop), false);
            if (flag){
                newElem[prop] = obj[prop];
            }
        }
        return newElem;
    }

    static getObjectById(id){
        return this.getArray().find((elem) => elem.id == id);
    }

    static getIndexById(id){
        return this.getArray().findIndex((elem) => elem.id == id);
    }

    static getNextId(id){
        let index = this.getIndexById(id);
        return Persons[(index + 1) % Persons.length].id;
    }

    static getPreviousId(id){
        let index = this.getIndexById(id);
        return Persons[(index - 1 === -1) ? Persons.length - 1 : index - 1].id;
    }
}