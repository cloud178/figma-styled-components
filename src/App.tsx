import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from "./components/Card.styled";
import {Main} from "./components/Main.styled";
import {Image} from "./components/Image.styled";
import image from './images/desert.jpeg';
import {TitleStyled} from "./components/Title.styled";
import {TextStyled} from "./components/Text.Styled";
import {BtnDiv, StyledBtn} from "./components/Button.styled";
import {Link} from "./components/LInk.styled";
import {myTheme} from "./styles/Theme.styled";


function App() {
    return (
        <div className="App">
            <Main>
                <Card>
                    <Image src={image}/>
                    <TitleStyled>Headline</TitleStyled>
                    <TextStyled>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</TextStyled>
                    <BtnDiv>
                        <StyledBtn as={Link} href={"#"} color={myTheme.colors.primaty} hoverColor={myTheme.colors.hover}
                                   btnType={"primary"}>See
                            more</StyledBtn>
                        <StyledBtn color={myTheme.colors.primaty} hoverColor={myTheme.colors.hover}
                                   btnType={"outlined"}>Save</StyledBtn>
                    </BtnDiv>
                </Card>
                {/*<Card>*/}
                {/*    2*/}
                {/*</Card>*/}
            </Main>
        </div>
    );
}

export default App;
