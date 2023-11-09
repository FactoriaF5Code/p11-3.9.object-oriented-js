

export default class Coder {
    constructor(completeName,
        completedExercises,
        age
    ) {
        this.firstName = completeName.split(" ")[0];
        this.lastName = completeName.split(" ")[1];
        this.completedExercises = completedExercises;
        this.age = age;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    hasCompletedExercises() {
        const EXERCISE_THRESHOLD = 30;
        return this.completedExercises > EXERCISE_THRESHOLD;
    }

    isLessThan30YearsOld() {
        return this.age < 30;
    }
}