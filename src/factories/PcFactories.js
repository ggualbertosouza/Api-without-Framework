// Repositories
import PcRepository from '../repository/PcRepository.js';

// Services
import PcServices from '../services/PcServices.js';

// Libs
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

// Normalizar pasta
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const fileName = join(__dirname, "../../database", "database.json")

const generateInstance = () => {
    const repository = new PcRepository({
        file: fileName
    });

    const service = new PcServices({
        repository
    });

    return service;
}

export default generateInstance;
