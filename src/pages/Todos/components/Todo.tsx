import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {Todo as TodoType} from "../../../generated/graphql";
import {useUpdateToDoMutation} from "../../../generated/graphql";
import {memo, useState, useEffect} from "react";
import Link from "next/link";
import {makeStyles} from "@material-ui/styles";
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/core/styles";

interface TodoProps {
  todo: Pick<TodoType, "title" | "id" | "complete">;
}

const useStyles = makeStyles({
  link: {
    cursor: 'pointer'
  },

  todoWrapper: {
    display: "flex",
    justifyContent: "space-Between"
  }
});

/**
 * Display an individual todo in the list.
 */
export const Todo = memo(({
  todo
}: TodoProps) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(todo.complete ? true : false);

  const handleChange = (event) => {
    setChecked(!checked);
  };

  const [updateToDoMutation, { data, loading, error }] = useUpdateToDoMutation({
   variables: {
     id: todo.id,
     todo: {
       complete: checked
     }
   }
  });


  useEffect(() => {
    updateToDoMutation();
  }, [checked]);




  return (
    <Grid item key={todo.id}>
        <Paper elevation={1} className={classes.link}>
          <Box p={2} className={classes.todoWrapper}>
          <Link href={`/todo/${todo.id}`}>
            <Typography variant="h5">{todo.title}</Typography>
          </Link>
          <Checkbox
            checked={checked}
            disabled={loading}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          </Box>
        </Paper>
    </Grid>
  )
});