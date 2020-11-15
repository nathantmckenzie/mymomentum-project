import {memo} from "react";
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
        <title>A ToDo</title>
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>A ToDo</Title>
        </Grid>
      </Grid>
    </>
  );
});

export default Todo;