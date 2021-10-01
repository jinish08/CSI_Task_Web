import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { delId } from "../actions/index";

let count = 0;
function FavCard(props) {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();
    count++;
    dispatch(delId(props.id));
  }

  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
}

export default FavCard;
export { count };
