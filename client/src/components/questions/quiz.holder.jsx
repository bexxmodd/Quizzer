import React from 'react'

import {
    makeStyles,
    Paper,
    FormControl,
    Grid,
    TextField
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2, 4)
    }
}))


const QuizHolder = props => {
    const classes = useStyle()

    return (
        <div>
            <Paper className={classes.paper} variant="outlined">
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth >
                                    <TextField
                                        label="Question"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField 
                                    label="options"
                                    />

                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField 
                                    label="options"
                                    />

                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField 
                                    label="options"
                                    />

                                </FormControl>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>
            </Paper>

        </div>
    )
}


export default QuizHolder