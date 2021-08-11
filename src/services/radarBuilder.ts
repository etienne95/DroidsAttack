import { AttackScan, Enemy, Point, Radar } from "../models/radarModel";
import * as _ from 'lodash';

export class RadarBuilder {
    private radar: Radar;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.radar = new Radar();
    }

    public setProtocols(protocols: string[]): RadarBuilder {
        this.radar.protocols = protocols;
        return this;
    }

    public setScans(scans:AttackScan[]): RadarBuilder {
        _.forEach(scans, scan => {
            this.radar.scan.push(new AttackScan(
                new Point(scan.coordinates.x, scan.coordinates.y),
                new Enemy(scan.enemies.type, scan.enemies.number),
                scan.allies));
        });
        return this;
    }

    public getRadar(): Radar {
        const result = this.radar;
        this.reset();
        return result;
    }
}