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
};

export interface IResource {
    id: number;
    resourceId: string;
    resourceName: string;
    resourceType: string;
    resourceLimit: number;
    applicationAccessType: string;
    applicationAccessRole: string;
    accessType: string;
    "platform": [],
    "resourceOwnerOrgUnitId": string,
    "resourceOwnerOrgUnitName": string,
    validForOrgUnits: IResourceItem[];
    validForRoles: string;
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
};

export const contextDefaultValues: ResourceContextState = {
        basePath: "/",
        resources: [],
    }
;