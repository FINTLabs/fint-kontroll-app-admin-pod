import { ResourcesInfoComponent } from "../resources/resource-info-component";
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ResourceContext} from "../../Context/resources-context";
import {ResourceInfoOrgUnitTableComponent} from "../resources/resource-info-org-unit-table.component";
import styled from "styled-components";

const ResourceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AdminResourceInfoComponent = () => {
    const {basePath, getResourceById, resourceDetails} = useContext(ResourceContext)
    const {id} = useParams<string>()



    useEffect(() => {
        if(id && !resourceDetails) {
            getResourceById(`${basePath === '/' ? '' : basePath}/api/resources/${id}`)
        }
    }, [basePath, getResourceById, id, resourceDetails])

    if(!resourceDetails) {
        return null
    }

    return (
        <ResourceInfoContainer>
            <ResourcesInfoComponent resourceDetails={resourceDetails} />
            <ResourceInfoOrgUnitTableComponent validForOrgUnits={resourceDetails.validForOrgUnits} />
        </ResourceInfoContainer>
    )
}