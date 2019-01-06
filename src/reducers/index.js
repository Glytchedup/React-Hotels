import { combineReducers } from 'redux'
import hotels from './hotels'
import visibilityFilter from './visibilityFilter'

const hotelApp = combineReducers({
  hotels,
  visibilityFilter
})

export default hotelApp
