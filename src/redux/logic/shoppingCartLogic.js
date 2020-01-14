import {INIT_STATE, INIT_STATE_SUCCESSFUL, INIT_STATE_FAILURE} from "../actions/init";

import { createLogic } from 'redux-logic';
import axios from 'axios';

const getShoppingCartLogic = createLogic({
    type: INIT_STATE,
    latest: true,

    processOptions: {
        dispatchReturn: true,

        successType: INIT_STATE_SUCCESSFUL,
        failType: INIT_STATE_FAILURE
    },

    process() {
        return axios('http://localhost:4000/productsFromWarehouse')
            .then(response => response.data);
    }
});

export default [
    getShoppingCartLogic
];
