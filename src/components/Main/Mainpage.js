import React from 'react'
import UpperMain from "./UpperMain";
import LowerMain from "./LowerMain";


function Mainpage(props) {
  return (
    <div className="pt-6 px-2">
      <UpperMain />
      <LowerMain />
    </div>
  )
}

export default Mainpage