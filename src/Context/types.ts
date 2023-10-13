export type ResourcesContextState = {
    basePath: string;
    page: IResourcePage | null;
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
    totalItems: number | any;
    currentPage: number;
    resources: IResource[];
}

export type ResourceContextState = {
    basePath: string;
    currentPage: number;
    getResourceById: (id: string) => void,
    isAggregate: boolean,
    isLoading: boolean,
    itemsPerPage: number,
    setIsLoading: (isLoading: boolean) => void,
    organisationUnitId: number,
    resources: IResource[] | null;
    resourceDetails: IResource | null;
    resourcePage: IResourcePage | null;
    resourceType: string,
    setIsAggregate: (isAggregate: boolean) => void;
    selected: number[];
    setItemsPerPage: (paginationSize: number) => void,
    setSelected: (selected: number[]) => void;
    updateCurrentPage: (currentPage: number) => void;
};

export const contextDefaultValues: ResourceContextState = {
    basePath: "/",
    currentPage: 1,
    getResourceById(): void {},
    isAggregate: false,
    isLoading: true,
    itemsPerPage: 1,
    setIsLoading(isLoading: boolean): void {},
    setIsAggregate(isAggregate: boolean): void {},
    organisationUnitId: 0,
    resources: [],
    resourceDetails: null,
    resourcePage: null,
    resourceType: "",
    selected: [],
    setItemsPerPage: (paginationSize: number) => void{},
    setSelected(selected: number[]): void {
    },
    updateCurrentPage(): void {}
};