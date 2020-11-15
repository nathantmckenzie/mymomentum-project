import Head from "next/head";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {Title} from "../../common/components/Title";
import {useToDoListSubscription} from "../../generated/graphql";
import {useState} from "react";
import {TodoForm} from "./components/TodoForm";
import {Todo} from "./components/Todo";

/**
 * List the todos.
 * @constructor
 */
const ToDos = () => {
  const limit = 5;
  const [offset, setOffset] = useState(0);

  const {data} = useToDoListSubscription({
    variables: {
      limit,
      offset,
    }
  });

  return (
    <>
      <Head>
        <title>ToDos</title>
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>ToDo</Title>
        </Grid>
        <Grid item>
          <TodoForm />
        </Grid>
        {data?.todo.map(todo => (
          <Todo todo={todo} />
        ))}
        <Grid item>
          <hr/>
          Pagination? Autoload more?
        </Grid>
      </Grid>
    </>
  )
}

export default ToDos;
