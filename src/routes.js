import generateInstance from './factories/PcFactories.js'

const pcService = generateInstance();

// Routes
const routes = {
    default: (req, res) => {
        res.write('Hello!');
        res.end();
    },

    "/pc:get": async (req, res) => {
        const {id} = req.queryString;
        const pc = await pcService.find(id);

        res.write(JSON.stringify({results: pc}))
        return res.end(); 
    }
}

export default routes;