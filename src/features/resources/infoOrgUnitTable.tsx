import {Table} from "@navikt/ds-react";
import {IResourceItem} from "../../Context/types";

interface ResourceInfoOrgUnitTableComponentProps {
    validForOrgUnits: IResourceItem[]
}
export const ResourceInfoOrgUnitTable = ({validForOrgUnits}: ResourceInfoOrgUnitTableComponentProps) => {
    return (
        <Table id="org-unit-table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Enhetsnavn</Table.HeaderCell>
                    <Table.HeaderCell align="right">EnhetsId</Table.HeaderCell>
                    <Table.HeaderCell align="right">Ressursgrense</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {validForOrgUnits.map((unit, i) => {
                    return (
                        <Table.Row key={i}>
                            <Table.DataCell>{unit.orgUnitName}</Table.DataCell>
                            <Table.DataCell align="right">{unit.orgunitId}</Table.DataCell>
                            <Table.DataCell align="right">{unit.resourceLimit}</Table.DataCell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}