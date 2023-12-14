import {ResourcesTable} from "../resources/table";
import React from "react";
import {ResourcesHeader} from "../resources/header";

export const AdminResourcesLanding = () => {
    return (
        <div>
            <ResourcesHeader />
            <ResourcesTable />
        </div>
    )
}