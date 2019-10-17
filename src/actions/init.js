import {productsFromWarehouse} from '../utils/productsFromWarehouse'

export const INIT_STATE = 'INIT_STATE';

export const initState = () => {
    return {
        type: INIT_STATE,
        payload: productsFromWarehouse()
    }
};