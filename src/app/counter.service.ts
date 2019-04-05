export class CounterService {

    totalActiveToInActive: number = 0;
    totalInActiveToActive: number = 0;

    counter(type: string = 'active to inactive') {
        if (type === 'active to inactive') {
            this.totalActiveToInActive++;
            console.log(`Total active --> inactive: ${this.totalActiveToInActive}`);
        } else {
            this.totalInActiveToActive++;
            console.log(`Total inactive --> active: ${this.totalInActiveToActive}`);
        }
    }

}