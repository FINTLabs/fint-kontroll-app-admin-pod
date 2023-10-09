import {Loader, Table} from "@navikt/ds-react";
import React, {useEffect, useState} from "react";
import { InformationSquareIcon } from '@navikt/aksel-icons';
import { Resource } from "@utils/types";
import styled from "styled-components";

const TableStyled = styled(Table)`
    thead {
        th:nth-child(-n+2) {
            width: 400px;
        }
        th:nth-child(2+n) {
            width: 75px;
        }
        th:last-child {
            width: 125px;
        }
    }
    
    .loading-table {
        td {
            border-bottom: none;
        }
    }
`

const LoaderStyled = styled(Loader)`
    display: flex;
    margin: auto;
`

export const ResourcesTableComponent = () =>  {
    const [isLoading, setIsLoading] = useState(true)
    const [resources, setResources] = useState<Resource[]>([])

    useEffect(() => {
        getResources()

    }, []);
    const getResources = () => {
        fetch('api/users')
            .then(res => res.json())
            .then((data) => setResources(data.resources))
            .catch(e => console.log(e)) // TODO: Implement error handling
            .finally(() => setIsLoading(false))
    }

    return (
        <TableStyled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell scope="col">Ressurs</Table.HeaderCell>
                    <Table.HeaderCell scope="col">Type</Table.HeaderCell>
                    <Table.HeaderCell scope="col" align="right">Antall totalt</Table.HeaderCell>
                    <Table.HeaderCell scope="col" align="right">Antall i bruk</Table.HeaderCell>
                    <Table.HeaderCell scope="col"></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {isLoading
                    ?
                        <Table.Row key={1} className="loading-table">
                            <Table.DataCell colSpan={5}>
                                <LoaderStyled size="3xlarge" title="Laster" className="loader" />
                            </Table.DataCell>
                        </Table.Row>
                    :

                        resources.map((resource: Resource, i) => {
                            return (
                                <Table.Row key={i}>
                                <Table.DataCell>1</Table.DataCell>
                                <Table.DataCell>2</Table.DataCell>
                                <Table.DataCell align="right">3</Table.DataCell>
                                <Table.DataCell align="right">4</Table.DataCell>
                                <Table.DataCell>
                                    <a href={`/app-admin/info/${resource.id}`} className="flex-center-vertically">
                                        Se detaljer <InformationSquareIcon className="margin-left-1-x" />
                                    </a>
                                </Table.DataCell>
                            </Table.Row>
                            )
                        })
                }
            </Table.Body>
        </TableStyled>
    )
}
