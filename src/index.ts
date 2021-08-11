import * as config from './utils/config';
import { buildFastify } from './buildServer';

const port = config.PORT || 7000;
const server = buildFastify();

const start = async () => {
    try {
        await server.listen(port);
        console.log(`Server started successfully in port: ${config.PORT}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();