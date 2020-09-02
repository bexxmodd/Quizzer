import React from 'react'
import Quiz from '../components/questions/quiz.holder'

import {
    Container
} from '@material-ui/core'

const CreateQuiz = props => {

    return (
        <div>
            <Container>
                {[1, 2, 3].map(el => (
                    <div key={el} style={{ marginBottom: '20px' }}>
                        <Quiz />
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default CreateQuiz