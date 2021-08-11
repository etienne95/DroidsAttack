import { AssistAlliesFilter, AvoidCrossfireFilter, AvoidMechFilter, ClosestEnemiesSelector, DefaultProtocolFilter, DefaultProtocolSelector, FurthestEnemiesSelector, PrioritizeMechFilter } from "./implementation";
import { IProtocol, IProtocolFilter, IProtocolSelector } from "./interface";

interface IProtocolFactory {
    getProtocol(protocolName: string): IProtocol;
    getDefaultFilter(): IProtocolFilter;
    getDefaultSelector(): IProtocolSelector;
};

export class ProtocolFactory implements IProtocolFactory {
    private _protocols: { [name: string]: IProtocol } = {
        'assist-allies': new AssistAlliesFilter(),
        'avoid-crossfire': new AvoidCrossfireFilter(),
        'prioritize-mech': new PrioritizeMechFilter(),
        'avoid-mech': new AvoidMechFilter(),
        'filter-default': new DefaultProtocolFilter(),
        'closest-enemies': new ClosestEnemiesSelector(),
        'furthest-enemies': new FurthestEnemiesSelector(),
        'selector-default': new DefaultProtocolSelector(),
    };

    getProtocol(protocolName: string): IProtocol {
        return this._protocols[protocolName];
    }

    getDefaultFilter(): IProtocolFilter {
        return this._protocols['filter-default'] as IProtocolFilter;
    }
    getDefaultSelector(): IProtocolSelector {
        return this._protocols['selector-default'] as IProtocolSelector;
    }
}