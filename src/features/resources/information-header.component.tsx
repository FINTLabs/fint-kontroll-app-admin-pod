import {Button, Search} from "@navikt/ds-react";
import styled from "styled-components";

const ResourcesInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ResourcesHeaderComponent = () => {
    return (
        <ResourcesInfoWrapper>
            <h2>Ressursadmin</h2>
            <div>
                <Search label="Søk her" />
            </div>
            <div>
                <Button>Velg enhet</Button>
            </div>
        </ResourcesInfoWrapper>
    )
}