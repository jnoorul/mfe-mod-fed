
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export function NavBar({basePath} : {basePath: string}) {
    return(
        <NavBarContainer>
            <Link to={`/${basePath}/tab1`}><h4>Tab 1</h4></Link>
            <Link to={`/${basePath}/tab2`}><h4>Tab 2</h4></Link>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 2rem;
    border-top: solid 1px gray;
`;