import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, Navigations } from './style'
import { imageUrl } from '../../../../shared/utility'
import { FlexBox } from '../../../../shared/flexBox'
import { rootPath } from "../../../../logic/paths";


export const Navbar = () => {
    return (
        <HeaderContainer>
            <FlexBox>
                <LogoContainer>
                    <img src={imageUrl} alt="" />
                </LogoContainer>

                <Navigations>
                    <Link to={rootPath}>Dashboard</Link>
                    <Link to={rootPath}>About</Link>
                    <Link to={rootPath}>Blog</Link>
                    <Link to={rootPath}>Contact Us</Link>
                </Navigations>
            </FlexBox>
        </HeaderContainer>
    );
}
