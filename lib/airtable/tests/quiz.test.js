const { getAllQuizzes } = require('../quiz')
require('dotenv').config()

test('checking quizzes are fetching or not', async () => {
    let data = await getAllQuizzes()
    console.log(data)
    expect(data).toBeTruthy()
})