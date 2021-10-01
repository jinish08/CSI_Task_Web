import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useDispatch } from "react-redux";
import { addId } from "../actions/index";

function Card(props) {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();
    event.target.style.color = "white";
    dispatch(addId(props.id));
  }

  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <StarIcon />
        </button>
      </div>
    </>
  );
}

export default Card;
