import logMessage from './logger.js';

class CaloriesTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;

        if (this.currentCalories > this.maxCalories) {
            logMessage('Calories count exceeded!!!');
        }
    }
}

const caloriesTracker = new CaloriesTracker(2000);

caloriesTracker.trackCalories(444);
caloriesTracker.trackCalories(444);
caloriesTracker.trackCalories(444);
caloriesTracker.trackCalories(444);
caloriesTracker.trackCalories(444);