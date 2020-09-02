const Airtable = require('airtable')

const Base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.QUIZZER_BASE)

const getAllQuizzes = async () => {
    let data = await Base('quizzes').select({ view: "Grid view" }).firstPage().then(result => {

        return result.map(el => el.fields)
    }).catch(err => {
        throw err
    })

    return data
}

module.exports = {
    getAllQuizzes
}