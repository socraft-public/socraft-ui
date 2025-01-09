import React, { FC } from "react";
import { PopupProps } from "./Popup.types";
import { Dialog } from "primereact/dialog";
import "./Popup.css";

const Popup: FC<PopupProps> = ({ ...props }) => {
  return (
    <Dialog
      {...props}
      closeIcon={undefined}
      style={{ width: props.width ?? "70%" }}
      className={props.darkMode ? "socraft-card dark" : "socraft-card"}
      header={props.title}
    >
      {props.subTitle && (
        <div className="p-card-subtitle">{props.subTitle}</div>
      )}
      <div className="p-card-content">{props.children}</div>
    </Dialog>
  );
};

export default Popup;
