import React from 'react';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Scroll from './Components/Scroll';
import { Data } from './Data/descrip';
import RecipeSection from './Components/RecipeSection';
import Subcat from './Components/Subcat';
import SubCategory from './Components/Subcategory';

export default function Main(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"   render={(props) => <Scroll {...props} data={Data} />}/>
            <Route exact path={'/healthyrecipies'} render={(props) => <SubCategory  {...props} data={Data[0].recipies}/> }  /> 
            {/* <Route exact path={'/snacksrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  /> 
            <Route exact path={'/healthyrecipies'} render={(props) => <Subcat  {...props}/> }  />  */}
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 
            <Route exact path={'/recipe'} render={(props) => <RecipeSection  {...props}/> }  /> 

        </Switch>
        </BrowserRouter>
    )
}