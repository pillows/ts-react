import { CompareArrows } from "@material-ui/icons";
import React from "react";
import Logo from "../../../assets/images/logo.png";
// import Icon from '../../../assets/images/icon.png';
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

function CompanyTitle() {
  return (
    <div className="companyTitle">
      <img src={Logo} />
      {/* <IconButton size="small" aria-label="delete">
        <CloseIcon />
      </IconButton> */}
    </div>
  );
}

export default CompanyTitle;
