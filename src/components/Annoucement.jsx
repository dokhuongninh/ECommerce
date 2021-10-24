import styled from 'styled-components'

const Contaner = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Annoucement = () => {
    return (
        <Contaner>
            Super Deal!!! Free Shipping on Orders Over $50
        </Contaner>
    )
}

export default Annoucement
