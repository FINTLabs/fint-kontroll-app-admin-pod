import {Heading} from "@navikt/ds-react";
import {AdminResourcesTable} from "./adminResourcesTable";

export const AdminResourceInfo = () => {
    return (
        <div>
            <Heading size={"medium"} level={"2"}>Applikasjonsadministrasjon</Heading>
            <AdminResourcesTable />
        </div>
    )
}