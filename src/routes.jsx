import { lazy } from 'react'

const Dashboard = lazy(() => import('./pages/Home/Home'))
const Products = lazy(() => import('./pages/Products/Products'))
const Favorites = lazy(() => import('./pages/Favorites/Favorites'))
const Inbox = lazy(() => import('./pages/Inbox/Inbox'))
const OrderLists = lazy(() => import('./pages/OrderLists/OrderLists'))
const ProductStock = lazy(() => import('./pages/ProductStock/ProductStock'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const Calendar = lazy(() => import('./pages/Calendar/Calendar'))
const Todo = lazy(() => import('./pages/Todo/Todo'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Settings = lazy(() => import('./pages/Settings/Settings'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const UsersList = lazy(() => import('./pages/UsersList/UsersList'))

let routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/products', element: <Products /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/inbox', element: <Inbox /> },
  { path: '/order-lists', element: <OrderLists /> },
  { path: '/product-stock', element: <ProductStock /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/calendar', element: <Calendar /> },
  { path: '/todo', element: <Todo /> },
  { path: '/contact', element: <Contact /> },
  { path: '/settings', element: <Settings /> },
  { path: '/users', element: <UsersList /> },
  { path: '*', element: <NotFound /> },
]

export default routes
