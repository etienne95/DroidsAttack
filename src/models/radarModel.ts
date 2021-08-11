export class Point {
    x: number;
    y: number;

    private _distance: number;
    get distance() {
        return this._distance;
    }

    constructor(x: number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
        this._distance = Math.sqrt(Math.pow(Math.abs(0 - this.x), 2) + Math.pow(Math.abs(0 - this.y), 2));
    }
}

export class Enemy {
    type: string;
    number: number;

    constructor(type?: string, number?: number) {
        this.type = type || '';
        this.number = number || 0;
    }
}

export class AttackScan {
    coordinates: Point;
    enemies: Enemy;
    allies: number;

    constructor(coordinates: Point, enemies?: Enemy, allies?: number) {
        this.coordinates = coordinates;
        this.enemies = enemies || new Enemy();
        this.allies = allies || 0;
    }
}

export class Radar {
    protocols: string[];
    scan: AttackScan[];

    constructor(protocols?: string[], scan?: AttackScan[]) {
        this.protocols = protocols || [];
        this.scan = scan || [];
    }
}