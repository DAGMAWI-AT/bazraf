import React from 'react'
import "./contacts.css"
import { MdPlace} from 'react-icons/md'
import styled from 'styled-components';
// import PText from './PText';



export default function ContactInfoItem({

icon = <MdPlace />,
text = 'I need text ',

}) {
 
  
return (
  <div className="ItemStyles">
    <div className="icon" >{icon}</div>
    <div className="info">
      <p>{text}</p>
    </div>
  </div>
);
}