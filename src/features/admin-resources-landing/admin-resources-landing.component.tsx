import {ResourcesTableComponent} from "../resources/resources-table.component";
import React, {useEffect, useState} from "react";
import {Resource} from "@utils/types";

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
            <ResourcesTableComponent resources={resources} />
        </div>
    )
}