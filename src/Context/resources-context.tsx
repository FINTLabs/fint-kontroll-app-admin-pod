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

    useEffect(() => {
        const getBasePath = async () => {
            ResourceRepository.getBaseUrl()
                .then(response => response.json()
                    .then(data => {
                        setBasePath(data.basePath)
                        console.log("basePath i context", data.basePath)
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

    return (
        <ResourceContext.Provider
            value={{
                basePath,
                resources
            }}
        >
            {children}
        </ResourceContext.Provider>
    );
};
export default ResourceProvider;