import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export default interface IDispatch{
    dispatch?: Dispatch<AnyAction> | undefined;
}