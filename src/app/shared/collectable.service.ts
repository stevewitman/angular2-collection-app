import {Collectable} from './collectable.model'

export class CollectableService {
    private collectables: Collectable[] = [
        { description: 'Skis', type: 'Ski gear'},
        { description: 'Boots', type: 'Ski gear'},
        { description: 'Poles', type: 'Ski gear'},
        { description: 'Hat', type: 'Ski gear'}
    ];

    private collection: Collectable[] = [];

    getCollectables() {
        return this.collectables;
    }

    getCollection() {
        return this.collection;
    }

    addToCollection(item: Collectable) {
        if (this.collection.indexOf(item) !== -1) {
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}