import { ResourceDetails } from "./resourceDetails";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResourceContext } from "../../Context/resourcesContext";
import { ResourceInfoOrgUnitTable } from "./infoOrgUnitTable";
import styled from "styled-components";
import { useGeneral } from "../../Context";
import { LoaderStyled } from "../../atoms/LoaderCentered";

const ResourceInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const ResourceInfo = () => {
	const { basePath } = useGeneral();
	const { getResourceById, resourceDetails, isLoading } =
		useContext(ResourceContext);
	const { id } = useParams<string>();

	useEffect(() => {
		if (id) {
			getResourceById(basePath, id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [basePath, id]);

	if (!resourceDetails) {
		return null;
	}

	if (isLoading) {
		return <LoaderStyled size={"3xlarge"} />;
	}

	return (
		<ResourceInfoContainer>
			<ResourceDetails resourceDetails={resourceDetails} />
			<ResourceInfoOrgUnitTable
				validForOrgUnits={resourceDetails.validForOrgUnits}
			/>
		</ResourceInfoContainer>
	);
};
