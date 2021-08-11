import { AttackScan, Point, Radar } from "../models/radarModel";
import * as _ from 'lodash';
import { RadarBuilder } from "./radarBuilder";
import { ProtocolFactory } from "./protocols/factory";
import { IProtocolFilter, IProtocolSelector } from "./protocols/interface";
import { RadarType } from "../routes/radarSchema";

export class ScanService {
    getTargetPoint(radar: Radar): Point {
        const radarBuilder = new RadarBuilder();
        const protocolFactory = new ProtocolFactory();
        const { protocols, scan } = radar;

        const newRadar = radarBuilder
            .setProtocols(protocols)
            .setScans(scan)
            .getRadar();

        let selector = protocolFactory.getDefaultSelector();
        const defaultFilter = protocolFactory.getDefaultFilter();

        _.forEach(newRadar.protocols, protocolName => {
            const protocol = protocolFactory.getProtocol(protocolName);
            if ('getPredicate' in protocol) {
                _.remove(newRadar.scan, s => !(protocol as IProtocolFilter).getPredicate()(s));
            }
            else {
                selector = (protocol as IProtocolSelector);
            }
        });

        return selector.selectOne(newRadar.scan.filter(defaultFilter.getPredicate())).coordinates;
    }
}