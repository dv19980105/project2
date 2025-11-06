import React from "react";
import classes from "./Modal.module.css";
import {useState,useEffect} from 'react';

function Modal({ children,onClose }) {
    

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>{children} </dialog>
    </>
  );
}

export default Modal;
