import {memo, useCallback, useState} from "react";
import {CircularProgress, TextField} from "@material-ui/core";
import {useCreateToDoMutation} from "../../../generated/graphql";

/**
 * A form which allows the user to submit a new todo.
 */
export const TodoForm = memo(() => {
  const [title, setTitle] = useState('');

  const [create, {loading}] = useCreateToDoMutation({
    variables: {
      todo: {
        title,
      }
    }
  });

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await create();
      setTitle('');
    }
    catch (e) {
      console.log(e);
    }
  }, [create])

  if (loading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="What do you need to do?"
        value={title}
        onChange={e => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
      />
    </form>
  );
});