
import styled from 'styled-components';

export function NavBar() {
    return(
        <NavBarContainer>
                <h6>Child App 1</h6>
                <h6>Child App 2</h6>
        </NavBarContainer>
    )
}

const NavBarContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem;
`;