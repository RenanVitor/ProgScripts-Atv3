import styled from "styled-components"

function NumerosSorteados({ numeros }: any) {
    return (
        
        <UlStyle>
            {numeros ? numeros.map((numero: any) => {
                return <LiStyle>{numero}</LiStyle>
            }) : ""}
        </UlStyle>
        
    )
}

export default NumerosSorteados
const UlStyle = styled.ul`
    margin-left: 150px;
    margin-top: 50px;
`

const LiStyle = styled.li`
    color: ${props =>props.theme.bolafonte};
    background-color: ${props =>props.theme.bola};
    display: inline-block;
    font-weight: 100;
    font-size: 1.25rem;
    padding: 9px 0px;
    height: 1.7rem;
    width: 3rem;
    border-radius: 100%;
    margin-right: 20px;
    text-align: center;
    line-height: 1.5em;
    font-weight: bold;
`