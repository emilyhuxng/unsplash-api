import React, { useContext } from "react";
import ColourIcon from "./ColourIcon";
import classes from "./Filter.module.css";
import { BsSquareHalf, BsSquare } from "react-icons/bs";
import QueryContext from "../store/query-context";

const Filter = () => {
    const queryCtx = useContext(QueryContext);

  const clickHandler = (color) => {
    console.log("clicked");
    queryCtx.onUpdateColor(color);
  };

  return (
    <div className={classes.filter}>
      <button className={classes.button} onClick={() => clickHandler("black_and_white")}>
        <BsSquareHalf />
      </button>
      <button className={classes.button} onClick={() => clickHandler("red")}>
        <ColourIcon color="red" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("orange")}>
        <ColourIcon color="orange" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("yellow")}>
        <ColourIcon color="yellow" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("green")}>
        <ColourIcon color="green" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("teal")}>
        <ColourIcon color="teal" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("blue")}>
        <ColourIcon color="blue" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("purple")}>
        <ColourIcon color="purple" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("magenta")}>
        <ColourIcon color="magenta" />
      </button>
      <button className={classes.button} onClick={() => clickHandler("white")}>
        <BsSquare style={{ marginLeft: "5px" }} />
      </button>
      <button className={classes.button} onClick={() => clickHandler("black")}>
        <ColourIcon color="black" />
      </button>
    </div>
  );
};

export default Filter;
