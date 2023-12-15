import { Heading } from "@navikt/ds-react";
import { AdminResourcesTable } from "./adminResourcesTable";
import styled from "styled-components";

const AdminResourceContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;
export const AdminResourceInfo = () => {
	return (
		<AdminResourceContainer>
			<Heading size={"large"} level={"2"}>
				Applikasjonsadministrasjon
			</Heading>
			<AdminResourcesTable />
		</AdminResourceContainer>
	);
};
