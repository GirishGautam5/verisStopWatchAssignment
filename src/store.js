import { configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { dataReducer } from './reducers/timerReducer';


const reducer = combineReducers({
    dataList : dataReducer
})

const store = configureStore({
    reducer
})

export default store;