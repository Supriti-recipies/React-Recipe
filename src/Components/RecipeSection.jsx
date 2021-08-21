import React from 'react';
import '../css/style.css';
export default function RecipeSection(props) {

    
  console.log(props);
    return (
        <div>

            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
            <center><h1>{props.title}</h1></center>
            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-light btn-lg" onclick="window.print()"><i className="fa fa-print" aria-hidden="true"></i>Print</button>
            </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div className="container-fluid">
                            <img alt={props.title} className="img-responsive2 navLogo imgStyle" src={props.imgsrc}/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>


                    <div className="col-md-6">
                        <p>
                            {props.desc}
                        </p>
                        <div className="card-body">
           
                        <div>
                            <i  className="fa fa-cutlery fa-lg marginRight"> Recipe Servings:{props.recipeServings}</i>
                            <i  className="fa fa-clock-o fa-lg marginTop">Pre Time:{props.preTime}</i>
                        </div>
                        <br/>
                        <div>
                            <i className="fa fa-clock-o fa-lg marginRight"> Cook Time:{props.cookTime}</i>
                            <i className="fa fa-clock-o fa-lg marginTop" style="margin-top: 6px;">Total Time:{props.totalTime}</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <br/><br/>
           <div className="row"> 
              <div className="col-md-4 part1">         
                <h4>
                  Ingredients Of {props.title}</h4>
                  <br/>
                  <h5>
                  <tr >
                    <li>{props.in1}</li>
                    <li>{props.in2}</li>
                    <li>{props.in3}</li>
                    <li>{props.in4}</li>
                    <li>{props.in5}</li>
                    <li>{props.in6}</li>
                    <li>{props.in7}</li>
                    <li>{props.in8}</li>
                    <li>{props.in9}</li>
                    <li>{props.in10}</li>
                    <li>{props.in11}</li>
                    <li>{props.in12}</li>
                    <li>{props.in13}</li>
                    <li>{props.in14}</li>
                    <li>{props.in15}</li>
                    
                  </tr>
                </h5>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-6 part2">
                <h3>How to Make {props.title}</h3>
                <br/>
                <p>{props.st1}</p>
                <p>{props.st2}</p>
                <p>{props.st3}</p>
                <p>{props.st4}</p>
                <p>{props.st5}</p>
                <p>{props.st6}</p>
                <p>{props.st7}</p>               
                <p>{props.st8}</p>               
                <p>{props.st9}</p>               
                <p>{props.st10}</p>               
                <p>{props.st11}</p>               
                <p>{props.st12}</p>               
                <p>{props.st13}</p>               
                <p>{props.st14}</p>               
                <p>{props.st15}</p>               
                
              </div>            
           </div>  
            <br/><br/>
        </div>      
       
   );
  }


