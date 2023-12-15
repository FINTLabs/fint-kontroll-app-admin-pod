import { Button, Pagination, Select, Table } from "@navikt/ds-react";
import React, { useContext, useEffect } from "react";
import { InformationSquareIcon } from "@navikt/aksel-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ResourceContext } from "../../Context/resourcesContext";
import { IResource } from "../../Context/types";
import { useGeneral } from "../../Context";

const TableStyled = styled(Table)`
	thead {
		th:nth-child(-n + 2) {
			width: 33%;
		}

		th:nth-child(2 + n) {
			width: 10%;
		}

		th:last-child {
			width: 14%;
		}
	}
`;

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 1rem;
`;

export const AdminResourcesTable = () => {
	const navigate = useNavigate();

	const { basePath } = useGeneral();

	const {
		currentPage,
		getResourcePage,
		isLoading,
		isAggregate,
		itemsPerPage,
		organisationUnitId,
		setItemsPerPage,
		resourceType,
		resourcesPage,
		selected,
		searchString,
		updateCurrentPage,
	} = useContext(ResourceContext);

	useEffect(() => {
		if (searchString.length >= 3 || searchString.length === 0) {
			getResourcePage();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		basePath,
		currentPage,
		itemsPerPage,
		resourceType,
		organisationUnitId,
		searchString,
		selected,
		isAggregate,
	]);

	let paginatedData = resourcesPage ? resourcesPage.resources : null;

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLSelectElement | HTMLOptionElement>,
	) => {
		setItemsPerPage(parseInt(event.target.value, 10));
		updateCurrentPage(1);
	};

	return (
		<>
			<TableStyled id="resource-table">
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell scope="col">Ressurs</Table.HeaderCell>
						<Table.HeaderCell scope="col">Type</Table.HeaderCell>
						<Table.HeaderCell scope="col" align="right">
							Antall totalt
						</Table.HeaderCell>
						<Table.HeaderCell scope="col" align="right">
							Antall i bruk
						</Table.HeaderCell>
						<Table.HeaderCell scope="col" align={"center"}>
							Se detaljer
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{!isLoading && !resourcesPage ? (
						<Table.Row>
							<Table.DataCell colSpan={5}>
								{paginatedData?.length === 0
									? "Tabellen ser ut til å være tom."
									: "Tabellen kunne ikke laste."}
							</Table.DataCell>
						</Table.Row>
					) : (
						paginatedData?.map((resource: IResource, i) => {
							return (
								<Table.Row key={i}>
									<Table.DataCell>
										{resource.resourceName}
									</Table.DataCell>
									<Table.DataCell>
										{resource.resourceType}
									</Table.DataCell>
									<Table.DataCell align="right">
										{resource.resourceLimit}
									</Table.DataCell>
									<Table.DataCell align="right">
										{resource.resourceLimit}
									</Table.DataCell>
									<Table.DataCell align={"center"}>
										<Button
											icon={
												<InformationSquareIcon
													title="Informasjonsikon"
													fontSize="1.5rem"
												/>
											}
											iconPosition={"right"}
											onClick={() =>
												navigate(`info/${resource.id}`)
											}
											id={`resource-${i}`}
											variant={"secondary"}
											role="link"
										>
											Detaljer
										</Button>
									</Table.DataCell>
								</Table.Row>
							);
						})
					)}
				</Table.Body>
			</TableStyled>

			{resourcesPage !== null && !isLoading && (
				<PaginationWrapper>
					<Select
						label="Rader per side"
						size="small"
						onChange={handleChangeRowsPerPage}
						defaultValue={itemsPerPage}
					>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={25}>25</option>
						<option value={50}>50</option>
					</Select>
					<Pagination
						id="pagination"
						page={currentPage}
						onPageChange={updateCurrentPage}
						count={Math.ceil(
							resourcesPage?.totalItems / itemsPerPage,
						)}
						size="small"
					/>
				</PaginationWrapper>
			)}
		</>
	);
};
