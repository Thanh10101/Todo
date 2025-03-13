"use strict"
export interface IUser {
    first_name: string;
    last_name: string;
    email?: string;
    id: number;
};

export interface IValue {
    data: IUser[];
    isLoading: boolean;
    error: string | null;
}
export type DataAction =
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: IUser[] }
    | { type: "FETCH_ERROR"; payload: string | null }

