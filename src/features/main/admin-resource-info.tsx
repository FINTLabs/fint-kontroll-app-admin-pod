import { ResourcesInfo } from "../resources/info";
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ResourceContext} from "../../Context/resources-context";
import {ResourceInfoOrgUnitTable} from "../resources/info-org-unit-table";
import styled from "styled-components";

const ResourceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AdminResourceInfo = () => {
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
            <ResourcesInfo resourceDetails={resourceDetails} />
            <ResourceInfoOrgUnitTable validForOrgUnits={resourceDetails.validForOrgUnits} />
        </ResourceInfoContainer>
    )
}