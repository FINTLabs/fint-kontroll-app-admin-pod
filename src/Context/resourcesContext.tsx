import React, {createContext, ReactNode, useEffect, useState,} from "react";
import {
    contextDefaultValues,
    IResource,
    ResourceContextState,
    IResourcePage
} from "./types";
import ResourceRepository from "../repositories/ResourceRepository";
import {ErrorResponse} from "react-router-dom";
import {useGeneral} from "./index";

export const ResourceContext = createContext<ResourceContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
    basePath: string
};

const ResourceProvider = ({children}: Props) => {
    // const [basePath, setBasePath] = useState<string>(contextDefaultValues.basePath);
    const [currentPage, setCurrentPage] = useState<number>(contextDefaultValues.currentPage);
    const [isAggregate, setIsAggregate] = useState<boolean>(contextDefaultValues.isAggregate);
    const [isLoading, setIsLoading] = useState(true)
    const [organisationUnitId] = useState<number>(contextDefaultValues.organisationUnitId);
    const [resources, setResources] = useState<IResource[] | null>(contextDefaultValues.resources);
    const [resourceDetails, setResourceDetails] = useState<IResource | null>(contextDefaultValues.resourceDetails);
    const [resourcePage, setResourcePage] = useState<IResourcePage | null>(contextDefaultValues.resourcePage);
    const [searchString] = useState<string>("");
    const [selected, setSelected] = useState<number[]>(contextDefaultValues.selected);
    const [itemsPerPage, setItemsPerPage] = useState<number>(contextDefaultValues.itemsPerPage);
    const [resourceType] = useState<string>(contextDefaultValues.resourceType);

    const {basePath} = useGeneral()

    useEffect(() => {
        const getResources = async () => {
            if (basePath) {
                setIsLoading(true)
                ResourceRepository.getResources(basePath).then(
                    (response) => {setResources(response.data)}
                )
                    .catch((err) => console.error(err))
                    .finally(() => setIsLoading(false))
            }
        }
        getResources().catch(err => console.error(err))
    }, [basePath]);

    useEffect(() => {
        const getResourcePage = () => {
            if (basePath) {
                setIsLoading(true)
                ResourceRepository.getResourcePage(basePath, currentPage, itemsPerPage, resourceType, selected, searchString, isAggregate)
                    .then((response) => setResourcePage(response.data))
                    .catch((err: ErrorResponse) => console.error(err))
                    .finally(() => setIsLoading(false))
            }
        }

        if (searchString.length >= 3 || searchString.length === 0) {
            getResourcePage();
        }
    }, [basePath, currentPage, itemsPerPage, resourceType, organisationUnitId, searchString, selected, isAggregate]);

    const getResourceById = (uri: string) => {
        setIsLoading(true)
        ResourceRepository.getResourceById(uri)
            .then((response) => {setResourceDetails(response.data)})
            .catch((err: ErrorResponse) => {
                console.error(err);
            })
            .finally(() => setIsLoading(false))
    }

    const updateCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage)
    }

    return (
        <ResourceContext.Provider
            value={{
                currentPage,
                getResourceById,
                isAggregate,
                isLoading,
                itemsPerPage,
                setIsLoading,
                organisationUnitId,
                resources,
                resourceDetails,
                resourcePage,
                resourceType,
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