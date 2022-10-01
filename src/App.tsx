import React from 'react'
import { Counter } from './Counter'
import svg from './react.svg'
import { Provider } from 'react-redux'
import styles from "./style.module.scss";
import { CakeView } from './features/cake/CakeView';
import { BrowserRouter} from 'react-router-dom'
import store from './app/store'

export const App = () => {
  return (
    <>
      <h1 className={styles.h1}>
        Hi React TypedScript Webpack Starter Template - {' '}
        {process.env.NODE_ENV}
      </h1>
      <img src={svg} alt="this is svg" width="500" height="200" />
      <Counter />
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
              <CakeView/>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </>
  )
}
