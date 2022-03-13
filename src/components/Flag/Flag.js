import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Flag.scss";

const Flag = ({ code }) => {
  return (
    <img
      className="flag"
      src={`https://countryflagsapi.com/png/${code.toLowerCase()}`}
    />
  );
};

export default Flag;
