import { Button, Loader, Pagination, Select, Table } from "@navikt/ds-react";
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
			width: 400px;
		}

		th:nth-child(2 + n) {
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
`;

const LoaderStyled = styled(Loader)`
	display: flex;
	margin: auto;
`;

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 1rem;
`;

export const AdminResourcesTable = () => {
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

	const navigate = useNavigate();

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
						<Table.HeaderCell scope="col"></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{isLoading && !resourcesPage ? (
						<Table.Row key={1} className="loading-table">
							<Table.DataCell colSpan={5}>
								<LoaderStyled
									size="3xlarge"
									title="Laster"
									className="loader"
								/>
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
									<Table.DataCell>
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
				{resourcesPage !== null && !isLoading && (
					<Pagination
						id="pagination"
						page={currentPage}
						onPageChange={updateCurrentPage}
						count={Math.ceil(
							resourcesPage?.totalItems / itemsPerPage,
						)}
						size="small"
					/>
				)}
			</PaginationWrapper>
		</>
	);
};