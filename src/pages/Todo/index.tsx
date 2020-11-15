import {memo} from "react";
import {Title} from "../../common/components/Title";
import {useSingleToDoQuery} from "../../generated/graphql";
import {useRouter} from "next/router";

const Todo = memo(() => {
  const {query: {id}} = useRouter();
  const {} = useSingleToDoQuery({
    variables: {
      id,
    }
  });

  return (
    <Title>A ToDo</Title>
  );
});

export default Todo;