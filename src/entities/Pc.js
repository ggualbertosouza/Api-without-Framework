import {generateUUID} from '../utils/uuid.js'

class Pc{
    constructor({data}){
        this.id = generateUUID();
        this.brand = data.brand;
        this.model = data.model;
        this.processor = data.processor;
        this.ram = data.ram;
        this.storage = data.storage;
        this.gpu = data.gpu;
        this.price = data.price;
        this.release_year = data.release_year;
    }

    isValid(){ 
        const propertyNames = Object.getOwnPropertyNames(this);
        const amountInvalid = propertyNames
            .map(prop => (!!this[prop]) ? null : `${prop} is missing!`)
            .filter(item => !!item);

        return {
            valid: amountInvalid.length === 0,
            error: amountInvalid
        }
    }
}

export default Pc;

const teste = new Pc({data: {"id": 3, "brand": "asus", "model": "vivobook", "processor": "9400f", "ram": "16gb", "storage": 120, "gpu": "2050ti", "price": 4000}})

console.log(teste.isValid())