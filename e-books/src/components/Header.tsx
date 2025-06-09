import logo from "../assets/header/logo.svg"
import jom from "../assets/header/jom.svg"
import share from "../assets/header/share.svg"
import sqr from "../assets/header/square.svg"
import aIcon from "../assets/header/A.svg"
import arrow from "../assets/header/arrow.svg"

import { Button, Select } from "antd"
import React from "react"
const {Option} = Select;
export const Header = () => {
  return (
    <React.Fragment><div className='header'>
      <div className="logo">
        <img src={logo} alt="" />
        <div className="sub-part">
          <h4 className="h4-sub">By</h4>
          <img src={jom} alt="" />
        </div>
      </div>
      <div className="left">
        <Button className="btn-share"><img src={share}/> Share Book</Button>
        <img src={sqr} alt="" />
        <img src={aIcon} alt="" />
        <Select value={"1"} className="sel" suffixIcon={<img src={arrow} />}>
            <Option value="1">August</Option>
        </Select>
      </div>
    </div>
    <hr className="hr-tag" /></React.Fragment>
  )
}
