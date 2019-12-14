// 引入redux
import { createStore, applyMiddleware } from 'redux'
// 引入thunk
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers.js'
// 暴露
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
