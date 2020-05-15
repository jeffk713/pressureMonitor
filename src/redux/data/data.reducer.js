import { DataActionTypes } from './data.types';

import { addItemToData } from './data.utils';


const INITIAL_VALUE = {
  data: []
};

const dataReducer = (state=INITIAL_VALUE, action) => {
  switch(action.type) {
    case DataActionTypes.ADD_ITEM:
      return {
        ...state,
        data: addItemToData(state.data, action.payload)
      }
    default:
      return state;
  }
};

export default dataReducer;