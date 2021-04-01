import React, { useContext } from 'react';
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

import { SettingsContext } from '../../context/settings/context.js';
import { PaginatedList } from 'react-paginated-list';

export default function ToDoList(props) {

  const settings = useContext(SettingsContext);
  //console.log(settings);
  const maxItemsInList = settings.maxVisible;

  const styles = {
    pill: {
      cursor: "pointer",
    },
  };

  const sortedList = props.list.sort((a, b) => a.difficulty - b.difficulty);
  const filteredList = sortedList.filter((item) => !item.complete);

  return (

    <PaginatedList
      list={filteredList}
      itemsPerPage={maxItemsInList}
      renderList={ (list) => (
        <>
          {list.map((item) => (
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
      )}
    />
  );
}
