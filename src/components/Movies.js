import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <Link to={`/detail/1`}>
                        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail/2`}>
                        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg' alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail/3`}>
                        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg' alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail/4`}>
                        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg' alt=""/>
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`

    border-radius:10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`