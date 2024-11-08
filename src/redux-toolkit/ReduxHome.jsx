import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux'

const ReduxHome = () => {
  return (
    <Provider store={store}>
      <div>
        Redux Home
        <Link to='/redux/htredux'>
          <button className='p-2 border-2'>
            HtRedux
          </button>
        </Link>
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default ReduxHome
