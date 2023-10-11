import React, {createContext, ReactNode, useEffect, useState,} from "react";
import {
    contextDefaultValues,
    IResource,
    ResourceContextState
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
    const [resources, setResources] = useState<IResource[] | null>(contextDefaultValues.resources);
    const [resourceDetails, setResourceDetails] = useState<IResource | null>(contextDefaultValues.resourceDetails);

    useEffect(() => {
        const getBasePath = async () => {
            ResourceRepository.getBaseUrl()
                .then(response => response.json()
                    .then(data => {
                        setBasePath(data.basePath)
                    })
                )
                .catch((err) => {
                    console.log(err);
                })
        }
        getBasePath()
    }, [])

    useEffect(() => {
        const getResources = () => {
            if (basePath) {
                ResourceRepository.getResources(basePath)
                    .then(response => response.json())
                    .then(data => setResources(data))
                    .catch((err) => console.error(err))
            }
        }
        getResources()
    }, [basePath]);

    const getResourceById = (uri: string) => {
        ResourceRepository.getResourceById(uri)
            .then(response => response.json())
            .then(data => {setResourceDetails(data)})
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <ResourceContext.Provider
            value={{
                basePath,
                resources,
                resourceDetails,
                getResourceById
            }}
        >
            {children}
        </ResourceContext.Provider>
    );
};
export default ResourceProvider;