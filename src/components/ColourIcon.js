import React from 'react'
import classes from "./ColourIcon.module.css"

import { BsFillSquareFill } from "react-icons/bs";

const ColourIcon = ({color}) => {
  return (
    <BsFillSquareFill className={classes["colour-icon"]} color={color} />
  )
}

export default ColourIcon