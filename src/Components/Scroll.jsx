import React from 'react';

import Cards from '../Components/Cards';
import '../css/style.css'
export default function Scroll(props){
    return (
        
          <div className="scroll">{props.data.map((val) =>{
              console.log(val);
                return(
                    <div>
                    <Cards
                    key = { val.id }
                    imgscr={val.imgsrc}
                    name = { val.name }
                    link= {val.link}
                    title = { val.name }
                    info = { val.info }
                    /> </div >
                );
            })
        }
        </div>
    )

}
