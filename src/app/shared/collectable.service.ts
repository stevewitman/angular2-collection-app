import {Collectable} from './collectable.model'

export class CollectableService {
    private collectables: Collectable[] = [
        { description: 'Skis', type: 'Ski gear'},
        { description: 'Boots', type: 'Ski gear'},
        { description: 'Poles', type: 'Ski gear'},
        { description: 'Hat', type: 'Ski gear'}
    ];

    getCollecables() {
        return this.collectables;
    }
}