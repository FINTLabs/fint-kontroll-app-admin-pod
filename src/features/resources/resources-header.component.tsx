import styled from "styled-components";

const ResourcesInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .flex {
        display: flex;
        gap: 1rem;
        align-items: flex-end;
    }
`

export const ResourcesHeaderComponent = () => {
    return (
        <ResourcesInfoWrapper>
            <h2>Ressursadmin</h2>
        </ResourcesInfoWrapper>
    )
}