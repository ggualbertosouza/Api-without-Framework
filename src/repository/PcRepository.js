import {readFile, writeFile} from 'fs/promises';

class PcRepository{
    constructor({file}){
        this.file = file;
    }

    async _currentFileContent(){
        return JSON.parse(await readFile(this.file))
    }

    async find(id){
        const all = await this._currentFileContent();
        if(!id) return all;
        
        return all.find((item) =>  item.id === id);
    }

    async create(data){
        const all = await this._currentFileContent();
        all.push(data);

        await writeFile(this.file, JSON.stringify(all));
        return data.id;
    }
}

export default PcRepository;