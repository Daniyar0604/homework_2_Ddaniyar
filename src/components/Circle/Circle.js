import React from "react";
import styles from './Circle.module.css'

const Circle = (props) => {


    const {numberl} = props

    return (
        <div className={styles.Circle}>
            <p>{numberl}</p>
  
        </div>
    )
}

export default Circle