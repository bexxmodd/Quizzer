import { useState } from 'react'

import Questions from '../components/questions/quiz.holder'

import {
    Container,
    Grid
} from '@material-ui/core'


const Create = props => {

    const [worksheet, setWorksheet] = useState([{ question: 'What is your name', options: ['Souvik', 'Shounk'], ans: '' }, { question: '', options: [], ans: '' }])

    const [check, setCheck] = useState([{ name: 'Souvik' }, { name: 'Shounak' }])

    const handleChange = (e, index) => {
        let value = e.target.value
        check[index].name = value
        let x = []
        check.forEach((el, i) => {
            if (i === index) {
                let s = { name: value }
                x.push(s)
            } else {
                let m = { ...el }
                x.push(m)
            }

        })
        setCheck(x)
    }

    return <>
        <Container>
            <Grid container spacing={4}>
                {worksheet.map(el => <Grid item ><Questions data={el} /></Grid>)}


            </Grid>

            {check.map((el, index) => <><input type="text" name="" id="" onChange={e => { handleChange(e, index) }} value={el.name} /></>)}

            <button onClick={() => console.log(check)}>Press</button>
        </Container>
    </>
}

export default Create