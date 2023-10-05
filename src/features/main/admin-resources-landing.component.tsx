import {ResourcesTableComponent} from "../resources/resources-table.component";
import React, {useEffect, useState} from "react";
import {Resource} from "@utils/types";
import {ResourcesInfoComponent} from "../resources/resource-info-component";
import {ResourcesHeaderComponent} from "../resources/information-header.component";

export const AdminResourcesLandingComponent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [resources, setResources] = useState<Resource[]>([])

    useEffect(() => {
        getResources()
        setIsLoading(false)
    }, []);

    const getResources = () => {
        fetch('api/resources')
            .then(res => res.json())
            .then((data) => setResources(data.resources))
            .catch(e => console.log(e)) // TODO: Implement error handling
    }

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <ResourcesHeaderComponent />
            <ResourcesTableComponent resources={resources} />
        </div>
    )
}