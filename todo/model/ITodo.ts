import IDispatch from "./IDispatch";


export interface IFilter extends IDispatch {
        search?: string;
        status?: string;
        priority?:  string[];
   
}

export interface ITodolist  {
    id?: number;
    name?: string;
    isCompleted?: boolean;
    priority?: string;
}

