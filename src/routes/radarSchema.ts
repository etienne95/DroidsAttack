import { Static, Type } from '@sinclair/typebox'

export const ResponseSchema = Type.Object({
    x: Type.Optional(Type.Number()),
    y: Type.Optional(Type.Number()),
    errorCode: Type.Optional(Type.Number())
});

export const PointSchema = Type.Object({
    x: Type.Number(),
    y: Type.Number()
});

const EnemySchema = Type.Object({
    type: Type.String(),
    number: Type.Number()
});

const AttackScanSchema = Type.Object({
    coordinates: PointSchema,
    enemies: Type.Optional(EnemySchema),
    allies: Type.Optional(Type.Number())
});

export const RadarSchema = Type.Object({
    protocols: Type.Array(Type.String()),
    scan: Type.Array(AttackScanSchema)
});

export type RadarType = Static<typeof RadarSchema>;
export type PointType = Static<typeof PointSchema>;