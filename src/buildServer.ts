import { fastify } from 'fastify';
import radarRoutes from './routes/radarRoute';
import fastifySwagger from 'fastify-swagger'

export function buildFastify() {
    const server = fastify({
        logger: true
    });
    server.register(fastifySwagger, {
        routePrefix: "/documentation",
        exposeRoute: true,
        swagger: {
            info: {
                title: "Radar API",
                description: "API with meetups managment",
                version: "TBD"
            },
            externalDocs: {
                url: "https://gitlab.com/etienne_sanchez/meetups-api",
                description: "Find more info here"
            },
            host: "localhost:8888",
            schemes: ["http"],
            consumes: ["application/json"],
            produces: ["application/json"]
        }
    });
    server.register(radarRoutes);
    return server;
}