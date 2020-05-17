import styled from 'styled-components';


export const HeaderArea = styled.div`
    height: 210px;
    background-color: #283747;
    border-bottom: 1px solid #CCC;

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
}
ul {
    text-decoration: none;
    list-style: none;
}
.logo {
    flex: 1;
    display: flex;
    align-items: center;
    width: 80px;
    height: 100px;    
    
}
.logotipo {
    position: absolute;
    width: 300px;
    height: 240px;
    bottom:83%;
    left: 37%;
}
.selectText {
    position: absolute;   
    bottom: 86%; 
    left: 40%;
    color: azure;

}
.firelogo {    
    width: 80px;
    height: 80px;
    position: absolute;    
    left: 41%;
    bottom: 79%;
    border: 1px solid white;
}
.firelogo:hover {
    background-color: #C70039;
    padding: 7px;
}
.waterlogo {    
    width: 80px;
    height: 80px;
    position: absolute;
    left: 45%;
    bottom: 79%;
    border: 1px solid white;
}
.waterlogo:hover {
    background-color: #08B6D1;
    padding: 7px;
`
