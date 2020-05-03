import { combineReducers } from 'redux';
import notify from './notify';
import user from './user';
import shipper from './shipper';

const appReducers = combineReducers({
    notify,
    user,
    shipper
});

export default appReducers;