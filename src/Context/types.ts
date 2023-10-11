export interface IResourcesPage {
    totalItems: number;
    totalPages: number | any;
    currentPage: number;
}

export type ResourcesContextState = {
    basePath: string;
    page: IResourcesPage | null;
    currentPage: number;
    size: number;
    setSize: (size: number) => void;
    selected: string[];
    setSelected: (selected: string[]) => void;
    searchString: string;
    searchValue: (searchString: string) => void;
    updateCurrentPage: (currentPage: number) => void;
    resources: IResource[];
    getResourceById: (id: string) => void;

};

export interface IResource {
    accessType: string;
    applicationAccessRole: string;
    applicationAccessType: string;
    id: number;
    "platform": [],
    resourceId: string;
    resourceLimit: number;
    resourceName: string;
    "resourceOwnerOrgUnitId": string,
    "resourceOwnerOrgUnitName": string,
    resourceType: string;
    validForOrgUnits: IResourceItem[];
    validForRoles: string[];
}

export interface IResourceItem {
    id: number;
    resourceId: string;
    orgunitId: string;
    orgUnitName: string;
    resourceLimit: number;

}

export interface IResourcePage {
    totalPages: number | any;
    currentPage: number;
    resources: IResource[];
}

export type ResourceContextState = {
    basePath: string;
    resources: IResource[] | null;
    resourceDetails: IResource | null;
    getResourceById: (id: string) => void;
};

export const contextDefaultValues: ResourceContextState = {
        basePath: "/",
        resources: [],
        resourceDetails: null,
        getResourceById(): void {}
    }
;