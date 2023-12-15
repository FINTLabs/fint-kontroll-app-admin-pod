import React, { createContext, ReactNode, useState } from "react";
import {
	contextDefaultValues,
	IResource,
	ResourceContextState,
	IResourcePage,
} from "./types";
import ResourceRepository from "../repositories/ResourceRepository";
import { ErrorResponse } from "react-router-dom";
import { useGeneral } from "./index";
import { toast } from "react-toastify";

export const ResourceContext =
	createContext<ResourceContextState>(contextDefaultValues);

type Props = {
	children: ReactNode[] | ReactNode;
	basePath: string;
};

const ResourceProvider = ({ children }: Props) => {
	const [currentPage, setCurrentPage] = useState<number>(
		contextDefaultValues.currentPage,
	);
	const [isAggregate, setIsAggregate] = useState<boolean>(
		contextDefaultValues.isAggregate,
	);
	const [isLoading, setIsLoading] = useState(true);
	const [organisationUnitId] = useState<number>(
		contextDefaultValues.organisationUnitId,
	);
	const [resourceDetails, setResourceDetails] = useState<IResource | null>(
		contextDefaultValues.resourceDetails,
	);
	const [resourcesPage, setResourcesPage] = useState<IResourcePage | null>(
		contextDefaultValues.resourcesPage,
	);
	const [searchString] = useState<string>("");
	const [selected, setSelected] = useState<number[]>(
		contextDefaultValues.selected,
	);
	const [itemsPerPage, setItemsPerPage] = useState<number>(
		contextDefaultValues.itemsPerPage,
	);
	const [resourceType] = useState<string>(contextDefaultValues.resourceType);
	const { basePath } = useGeneral();

	const getResourcePage = () => {
		if (basePath) {
			setIsLoading(true);
			ResourceRepository.getResourcePage(
				basePath,
				currentPage,
				itemsPerPage,
				resourceType,
				selected,
				searchString,
				isAggregate,
			)
				.then((response) => setResourcesPage(response.data))
				.catch((err: ErrorResponse) => {
					console.error(err);
					toast.error("Klarte ikke hente ressurslisten.", {
						role: "alert",
					});
				})
				.finally(() => setIsLoading(false));
		}
	};

	const getResourceById = (basePath: string, id: string) => {
		setIsLoading(true);
		ResourceRepository.getResourceById(basePath, id)
			.then((response) => {
				setResourceDetails(response.data);
			})
			.catch((err: ErrorResponse) => {
				console.error(err);
				toast.error("Klarte ikke hente ressursinformasjon.", {
					role: "alert",
				});
			})
			.finally(() => setIsLoading(false));
	};

	const updateCurrentPage = (currentPage: number) => {
		setCurrentPage(currentPage);
	};

	return (
		<ResourceContext.Provider
			value={{
				currentPage,
				getResourceById,
				getResourcePage,
				isAggregate,
				isLoading,
				itemsPerPage,
				setIsLoading,
				organisationUnitId,
				resourceDetails,
				resourcesPage,
				resourceType,
				searchString,
				selected,
				setItemsPerPage,
				setSelected,
				setIsAggregate,
				updateCurrentPage,
			}}
		>
			{children}
		</ResourceContext.Provider>
	);
};
export default ResourceProvider;
