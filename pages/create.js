import { useState } from 'react'

import Questions from '../components/questions/quiz.holder'

import {
    Container,
    Grid
} from '@material-ui/core'


const Create = props => {

    const [worksheet, setWorksheet] = useState([{ question: 'What is your name', options: ['Souvik', 'Shounk'], ans: '' }, { question: '', options: [], ans: '' }])

    return <>
        <Container>
            <Grid container spacing={4}>
                {worksheet.map(el => <Grid item ><Questions data={el} /></Grid>)}
            </Grid>
        </Container>
    </>
}

export default Create