import { useEffect } from "react";
import styled from "styled-components"


const childRoot = 'childRoot';
const basePath= 'app1';

export function FirstChildApp() {
    useEffect(() => {
        //@ts-ignore
        import('app1/injectApp').then((injector) => injector.default(childRoot, basePath));
    }, []);
    return(
        <ChildContainer>
            <div id={childRoot}></div>
        </ChildContainer>
    )
}

const ChildContainer = styled.div`
    border: solid 2px red;
    width: calc(100vw - 250px);
    height: calc(100vh - 250px);
    text-align: center;
`;