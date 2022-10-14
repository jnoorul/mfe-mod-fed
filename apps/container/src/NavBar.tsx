
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export function NavBar() {
    return(
        <NavBarContainer>
            <Link to="app1">
                <h4>Child App 1</h4>
            </Link>
            <Link to="app2">
                <h4>Child App 2</h4>
            </Link>
        </NavBarContainer>
    )
}

const NavBarContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem;
`;

