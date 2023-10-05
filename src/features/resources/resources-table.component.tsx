import {Table} from "@navikt/ds-react";
import React from "react";
import { InformationSquareIcon } from '@navikt/aksel-icons';
import {Resource} from "@utils/types";

interface ResourcesTableComponentProps {
    resources: Resource[]
}
export const ResourcesTableComponent = (props: ResourcesTableComponentProps) =>  {
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
                {props.resources.map((resource: Resource, i) => {
                    return (
                        <Table.Row key={i}>
                            <Table.DataCell>{resource.resourceName}</Table.DataCell>
                            <Table.DataCell>{resource.resourceType}</Table.DataCell>
                            <Table.DataCell>{resource.resourceLimit}</Table.DataCell>
                            <Table.DataCell>{resource.resourceLimit}</Table.DataCell>
                            <Table.DataCell>
                                <a href={`/${resource.id}`} className="flex-center-vertically">
                                    Se detaljer <InformationSquareIcon className="margin-left-1-x" />
                                </a>
                            </Table.DataCell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}
