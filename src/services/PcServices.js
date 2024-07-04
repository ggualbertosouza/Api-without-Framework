class PcServices{
    constructor({repository}){
        this.repository = repository;
    }

    async find(id){
        return this.repository.find(id);
    }

    async create(data){
        return this.repository.create(data);
    }
}

export default PcServices;