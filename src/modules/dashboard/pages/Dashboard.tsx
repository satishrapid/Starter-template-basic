import { Link } from "react-router-dom"
import styled from "styled-components"
import { homePath } from "../../../logic/paths"

const DashboardWrap = styled.div<any>`
    display: grid;
    height: 100vh;
    place-items: center;
    color: white;

    span {
        margin: 10px 0;
        display: inline-block;
        width: 100%;
        text-align: center;
    }
`

const StyledLink = styled<any>(Link)`
    padding: 20px;
    background: white;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Dashboard: React.FC = () => {
    return <DashboardWrap>
        <div>
            <span>Example Navigation</span>
            <StyledLink to={homePath}>Home</StyledLink>
        </div>
    </DashboardWrap>
}