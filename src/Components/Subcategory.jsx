import React from 'react';
import '../css/style.css'
import Subcat from './Subcat';
export default function SubCategory(props){
    return (
        
          <div className="scroll">{props.data.map((val) =>{
              console.log(val);
                return(
                    <div>
                    <Subcat 
                    key = { val.subid }
                    recipename = { val.recipename}
                    imgfile = { val.imgfile }
                    link={val.link}
                    recipieServe={val.recipeServings}
                    preTime={val.preTime}
                    totalTime={val.totalTime}
                    cookTime={val.cookTime}
                    info = { val.info }

                    /> </div >
                );
            })
        }
        </div>
    )

}
