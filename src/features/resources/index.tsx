import { ResourceDetails } from "./resourceDetails";
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ResourceContext} from "../../Context/resourcesContext";
import {ResourceInfoOrgUnitTable} from "./infoOrgUnitTable";
import styled from "styled-components";
import {useGeneral} from "../../Context";

const ResourceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ResourceInfo = () => {
    const {basePath} = useGeneral()
    const {getResourceById, resourceDetails} = useContext(ResourceContext)
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
            <ResourceDetails resourceDetails={resourceDetails} />
            <ResourceInfoOrgUnitTable validForOrgUnits={resourceDetails.validForOrgUnits} />
        </ResourceInfoContainer>
    )
}