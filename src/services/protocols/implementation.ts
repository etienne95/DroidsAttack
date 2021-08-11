import { AttackScan } from "../../models/radarModel";
import { IProtocolFilter, IProtocolSelector, Predicate } from "./interface";
import * as _ from 'lodash';

export class AssistAlliesFilter implements IProtocolFilter {
    getPredicate(): Predicate {
        return scan => scan.allies > 0;
    }
}

export class AvoidCrossfireFilter implements IProtocolFilter {
    getPredicate(): Predicate {
        return scan => scan.allies == 0;
    }
}

export class PrioritizeMechFilter implements IProtocolFilter {
    getPredicate(): Predicate {
        return scan => scan.enemies.type == "mech" && scan.enemies.number > 0;
    }
}

export class AvoidMechFilter implements IProtocolFilter {
    getPredicate(): Predicate {
        return scan => scan.enemies.type != "mech" || scan.enemies.number == 0;
    }
}

export class DefaultProtocolFilter implements IProtocolFilter {
    getPredicate(): Predicate {
        return scan => scan.coordinates.distance <= 100;
    }
}

export class ClosestEnemiesSelector implements IProtocolSelector {
    selectOne(scans: AttackScan[]): AttackScan {
        return _.orderBy(scans, s => s.coordinates.distance, 'asc')[0];
    }
}

export class FurthestEnemiesSelector implements IProtocolSelector {
    selectOne(scans: AttackScan[]): AttackScan {
        return _.orderBy(scans, s => s.coordinates.distance, 'desc')[0];
    }
}

export class DefaultProtocolSelector implements IProtocolSelector {
    selectOne(scans: AttackScan[]): AttackScan {
        return scans[0];
    }
}