import React, { useState, useEffect } from 'react'
import {useUpdateToDoMutation} from "../../../generated/graphql";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Description({ todo }) {
    const [input, setInput] = useState("");
    const [description, setDescription] = useState(todo.description);

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        descriptionContainer: {
          display: "flex",
          marginTop: "20px"
        },
        submitButton: {
          marginLeft: "30px"
        },
        description: {
          marginTop: "30px"
        }
      }));

    const classes = useStyles();

    const [updateToDoMutation, { data, loading, error }] = useUpdateToDoMutation({
        variables: {
          id: todo.id,
          todo: {
            description: input
          }
        }
      });
    
    const onClick = () => {
       updateToDoMutation();
       
       setInput("")

       window.location.reload();
    }

    useEffect(() => {
      setDescription(todo.description)
    }, [todo.description])

    return (
        <div>
          <div className={classes.descriptionContainer} >
            <TextField value={input} onChange={(e) => setInput(e.target.value)} label="Add Description" />
            <Button className={classes.submitButton} variant="contained" onClick={onClick}>Submit</Button>
          </div>
          <br />
          <div className={classes.description}>
          Description: {description}
          </div>
        </div>
    )
}
