import React, { useState, useEffect } from 'react'
import {useUpdateToDoMutation} from "../../../generated/graphql";

export default function Description({ todo }) {
    const [input, setInput] = useState("")
    const [description, setDescription] = useState(todo.description);

    const [updateToDoMutation, { data, loading, error }] = useUpdateToDoMutation({
        variables: {
          id: todo.id,
          todo: {
            description: input
          }
        }
      });
    
    const onSubmit = () => {
       updateToDoMutation();
       
       setInput("")

       window.location.reload();
    }

    useEffect(() => {
      setDescription(todo.description)
    }, [todo.description])

    return (
        <div>
          Description:
          <br />
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={onSubmit}>Submit</button>
          <br />
          {description}
        </div>
    )
}
