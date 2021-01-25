import {combineReducers} from 'redux'
import { authReducer } from './auth.reducer'
import {productReducer} from './product.reducer'
import orderReducer from './order.reducer'
import {categoryReducer} from './category.reducer'
import {pageReducer } from './page.reducer'
import { userReducer } from './user.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    order: orderReducer,
    product: productReducer,
    page: pageReducer
})

export default rootReducer