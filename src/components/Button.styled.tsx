import styled, {css} from "styled-components";
import React from "react";


export const BtnDiv = styled.div`
    display: flex;
    gap: 12px;
    margin: 20px 0 0 10px;
    font-size: 10px;
    

    button {
        cursor: pointer;
    }
`

type StyledBtnPropsType = {
    color?: string,
    hoverColor?: string,
    btnType?: "primary" | "outlined",
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-weight: 600;
    text-align: center;
    font-size: 10px;
    border: 2px solid;
    
    &:hover {
        background-color: ${props => props.hoverColor || "#5b4178"};
        border: ${props => props.hoverColor || "#5b4178"}; 
    }
    
    //primary
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        color: white;
        background-color: ${props => props.color || "#9769c8"};
        border: ${props => props.color || "#9769c8"};
    `}
    
    //outlined
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        color: ${props => props.color || "#9769c8"};
        background-color: transparent;
        border: 2px solid ${props => props.color || "#9769c8"};
        font-family: inherit;

        &:hover {
            background-color: transparent;
            border: 2px solid ${props => props.hoverColor || "#9769c8"};
            color: ${props => props.hoverColor || "#9769c8"};
        }
    `}
`
