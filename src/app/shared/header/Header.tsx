import React from "react";
import { Input } from "../input/Input";
import { InputTypes } from "../input/Input.types";

export const Header = () => {
  return (
    <div>
      <h2>join.tsh.io</h2>
      <Input
        name="search"
        showIcon
        type={InputTypes.text}
        placeholder="Search"
      />
    </div>
  );
};
