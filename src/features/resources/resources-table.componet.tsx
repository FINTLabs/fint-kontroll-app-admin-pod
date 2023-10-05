import {Table} from "@navikt/ds-react";
import React, {useEffect, useState} from "react";
import { InformationSquareIcon } from '@navikt/aksel-icons';

interface Resource {
    id: number,
    resourceId: string,
    resourceName: string,
    resourceType: string,
    resourceLimit: number
}
export const ResourcesTableComponent = () =>  {
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
            .catch(e => console.log(e))
    }

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell scope="col">Ressurs</Table.HeaderCell>
                    <Table.HeaderCell scope="col">Type</Table.HeaderCell>
                    <Table.HeaderCell scope="col">Antall totalt</Table.HeaderCell>
                    <Table.HeaderCell scope="col">Antall i bruk</Table.HeaderCell>
                    <Table.HeaderCell scope="col"></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {resources.map((resource: Resource, i) => {
                    return (
                        <Table.Row key={i}>
                            <Table.DataCell>{resource.resourceName}</Table.DataCell>
                            <Table.DataCell>{resource.resourceType}</Table.DataCell>
                            <Table.DataCell>{resource.resourceLimit}</Table.DataCell>
                            <Table.DataCell>{resource.resourceLimit}</Table.DataCell>
                            <Table.DataCell>
                                <a href={`/ressurs/${resource.id}`}>
                                    Se detaljer <InformationSquareIcon  />
                                </a>
                            </Table.DataCell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}
