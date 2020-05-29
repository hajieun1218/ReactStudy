import React from "react";

export default function RecipeDetail(props) {
    
    return (
        <h1 className={"text-center"}>레시피 상세보기:{props.match.params.no}</h1>
    )
}