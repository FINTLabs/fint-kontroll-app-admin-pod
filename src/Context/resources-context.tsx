import React, {createContext, ReactNode, useEffect, useState,} from "react";
import {
    contextDefaultValues,
    IResource,
    ResourceContextState,
    IResourcePage
} from "./types";
import ResourceRepository from "../repositories/ResourceRepository";

export const ResourceContext = createContext<ResourceContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const ResourceProvider = ({children}: Props) => {
    const [basePath, setBasePath] = useState<string>(contextDefaultValues.basePath);
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




    useEffect(() => {
        const getBasePath = async () => {
            setIsLoading(true)
            ResourceRepository.getBaseUrl()
                .then(response => response.json()
                    .then(data => {
                        setBasePath(data.basePath)
                    })
                )
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setIsLoading(false))
        }
        getBasePath()
    }, [])

    useEffect(() => {
        const getResources = () => {
            if (basePath) {
                setIsLoading(true)
                ResourceRepository.getResources(basePath)
                    .then(response => response.json())
                    .then(data => setResources(data))
                    .catch((err) => console.error(err))
                    .finally(() => setIsLoading(false))
            }
        }
        getResources()
    }, [basePath]);

    useEffect(() => {
        const getResourcePage = () => {
            if (basePath) {
                setIsLoading(true)
                ResourceRepository.getResourcePage(basePath, currentPage, itemsPerPage, resourceType, selected, searchString, isAggregate)
                    .then(response => response.json())
                    .then(data => setResourcePage(data))
                    .catch((err) => console.error(err))
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
            .then((response: any) => response.json())
            .then((data: IResource) => {setResourceDetails(data)})
            .catch((err) => {
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
                basePath,
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