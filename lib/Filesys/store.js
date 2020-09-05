const fs = require('fs')
const path = require('path')


const writeWorkSheet = worksheet => {

    fs.writeFileSync(path.resolve(__dirname, 'worksheets.json'), JSON.stringify(worksheet))
}

const readWorkSheet = () => {
    let data = fs.readFileSync(path.resolve(__dirname, 'worksheet.json'))

    return JSON.parse(data)
}

export { writeWorkSheet, readWorkSheet }