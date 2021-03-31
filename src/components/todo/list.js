import React from 'react';
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

export default function toDoList(props) {

  const styles = {
    pill: {
      cursor: "pointer",
    },
  };

  return (
    <>
      {props.list.map((item) => (
        <Toast key={item._id} onClose={() => props.handleDelete(item._id)}>
          <Toast.Header>
            <Badge
              pill
              style={styles.pill}
              variant={item.complete ? "danger" : "success"}
              onClick={() => props.handleComplete(item._id)}
            >
              {!item.complete ? "Pending" : "Complete"}
            </Badge>
            <strong className="mr-auto">{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body>
            {item.text}
                difficulty:{item.difficulty}
          </Toast.Body>
        </Toast>
      ))}
    </>
  )
}
