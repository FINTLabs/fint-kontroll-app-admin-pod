import {Button} from "@navikt/ds-react";
import styled from "styled-components";
import {ResourcesSearchComponent} from "./resources-search.component";

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
            <div className="flex">
                <div>
                    <ResourcesSearchComponent />
                </div>
                <div>
                    <Button>Velg enhet</Button>
                </div>
            </div>
        </ResourcesInfoWrapper>
    )
}