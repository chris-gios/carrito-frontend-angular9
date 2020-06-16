import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'groupby'
})

export class GroupPipe implements PipeTransform {

    transform(objects: object[], id: string): any {

        const countedObjects: object[] = [];

        for (const object of objects) {
            const countObject: any = countedObjects.find(obj => obj[id] === object[id]);
            if (countObject) {
                countObject.count++;
            } else {
                countedObjects.push({ ...object, count: 1 });
            }
        }

        return countedObjects;
    }
}