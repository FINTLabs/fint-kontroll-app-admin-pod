export interface IResource {
    id: number;
    resourceName: string;
}

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