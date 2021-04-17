import {memo, useState} from "react";
import {Title} from "../../common/components/Title";
import {
  useCreateCommentMutation,
  useMarkTodoMutation,
  useSingleToDoQuery,
  useTodoCommentsSubscription
} from "../../generated/graphql";
import {useRouter} from "next/router";
import Head from "next/head";
import {Grid} from "@material-ui/core";
import Description from '../Todos/components/Description';


/**
 * Display and interact with a single Todo.
 */
const Todo = memo(() => {
  const {query: {id}} = useRouter();

  const {data: todoResponse, refetch} = useSingleToDoQuery({
    variables: {id}
  });
  const todo = todoResponse?.todo_by_pk;

  const {data: commentsResponse} = useTodoCommentsSubscription({
    variables: {todoId: id}
  });
  const comments = commentsResponse?.comments;

  const [createComment] = useCreateCommentMutation();
  const [markTodo] = useMarkTodoMutation();

  return (
    <>
      <Head>
        <title>A Todo</title>
        {console.log("12:35", todo)}
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>{todo ? todo.title : null}</Title>
          {todo ? <Description todo={todo} /> : null }
        </Grid>
      </Grid>
    </>
  );
});

export default Todo;