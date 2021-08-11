import { AttackScan } from '../../models/radarModel';

export type Predicate = (scan: AttackScan) => Boolean;

export interface IProtocol { };

export interface IProtocolFilter extends IProtocol {
    getPredicate(): Predicate;
};

export interface IProtocolSelector extends IProtocol {
    selectOne(scans: AttackScan[]): AttackScan;
};

export interface IProtocolFactory {
    getProtocol(protocolName: string): IProtocol;
};