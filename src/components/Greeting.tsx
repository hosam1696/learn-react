import React from "react";
import styles from './Greeting.module.css'

const  Greet = (props: {name: string}) =>  <h1 className={styles.success}>{props.name}</h1>

export default Greet;
