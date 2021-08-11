import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { Radar } from '../models/radarModel';
import { ScanService } from '../services/scanService';
import { PointSchema, PointType, RadarSchema, RadarType } from './radarSchema';

const RadarRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.post<{ Body: RadarType; Reply: PointType }>('/radar', {
        schema: {
            body: RadarSchema,
            response: {
                200: PointSchema
            },
        },
    }, async (request, reply) => {
        try {
            const scanService = new ScanService();
            const { x, y } = scanService.getTargetPoint(request.body as Radar);
            return reply.code(200).send({ x, y });
        } catch (error) {
            request.log.error(error);
            return reply.code(500);
        }
    });
};

export default fp(RadarRoute);