class Worksheet {
    constructor(questions = []) {
        this.questions = questions
    }

    addQuestion() {
        this.questions.push([])
    }
}