import {ResourcesTableComponent} from "../resources/resources-table.component";
import React from "react";
import {ResourcesHeaderComponent} from "../resources/information-header.component";

export const AdminResourcesLandingComponent = () => {
    return (
        <div>
            <ResourcesHeaderComponent />
            <ResourcesTableComponent />
        </div>
    )
}