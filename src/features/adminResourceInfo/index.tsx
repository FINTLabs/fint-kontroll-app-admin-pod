import { Heading } from "@navikt/ds-react";
import { AdminResourcesTable } from "./adminResourcesTable";

export const AdminResourceInfo = () => {
	return (
		<div>
			<Heading size={"large"} level={"2"}>
				Applikasjonsadministrasjon
			</Heading>
			<AdminResourcesTable />
		</div>
	);
};
