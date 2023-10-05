import {Loader, Table} from "@navikt/ds-react";
import React, {useEffect, useState} from "react";
import { InformationSquareIcon } from '@navikt/aksel-icons';
import {Resource} from "@utils/types";
import styled from "styled-components";

const TableDatacellStyled = styled(Table.DataCell)`
    width: 100%;
  
    position: absolute;
    display: flex;
    justify-content: center;
`

export const ResourcesTableComponent = () =>  {
    const [isLoading, setIsLoading] = useState(true)
    const [resources, setResources] = useState<Resource[]>([])

    useEffect(() => {
        getResources()

    }, []);
    const getResources = () => {
        fetch('api/resources')
            .then(res => res.json())
            .then((data) => setResources(data.resources))
            .catch(e => console.log(e)) // TODO: Implement error handling
            .finally(() => setIsLoading(false))
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
            {isLoading
                ?
                    <Table.Row key={1}>
                        <TableDatacellStyled colSpan={5} >
                            <Loader size="3xlarge" title="Laster" className="loader" />
                        </TableDatacellStyled>
                    </Table.Row>
                :

                    resources.map((resource: Resource, i) => {
                        return (
                            <Table.Row key={i}>
                            <Table.DataCell>{resource.resourceName}</Table.DataCell>
                            <Table.DataCell>{resource.resourceType}</Table.DataCell>
                            <Table.DataCell>{resource.resourceLimit}</Table.DataCell>
                            <Table.DataCell>{resource.resourceLimit}</Table.DataCell>
                            <Table.DataCell>
                                <a href={`/info/${resource.id}`} className="flex-center-vertically">
                                    Se detaljer <InformationSquareIcon className="margin-left-1-x" />
                                </a>
                            </Table.DataCell>
                        </Table.Row>
                        )
                    })
            }
            </Table.Body>
        </Table>
    )
}
