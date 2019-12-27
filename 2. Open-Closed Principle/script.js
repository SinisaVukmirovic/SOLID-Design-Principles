class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index}. ${option}`);
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Answer: _______________');
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Minimum: ________');
        console.log('Maximum: ________');
    }
}

function printQuiz(questions) {
    questions.forEach(question => {

        console.log(`%c${question.description}`, 'color: lime');

        question.printQuestionChoices();

        console.log('- - - - - - - - - - - - - - - - - - - -');
    });
}

const questions = [
    new BooleanQuestion('This Repo is useful.'),

    new MultipleChoiceQuestion('What is your favourite JS "framework"?',
                                ['Svelte', 'React', 'Vue', 'Angular']),

    new TextQuestion('Your favourite JS feature?'),

    new RangeQuestion('What is the speed limit in your city?')
];

printQuiz(questions);