import { lazy } from 'react'

const Dashboard = lazy(() => import('./pages/Home/Home'))
const Products = lazy(() => import('./pages/Products/Products'))
const Favorites = lazy(() => import('./pages/Favorites/Favorites'))
const Inbox = lazy(() => import('./pages/Inbox/Inbox'))
const OrderLists = lazy(() => import('./pages/OrderLists/OrderLists'))
const ProductStock = lazy(() => import('./pages/ProductStock/ProductStock'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const CalendarLayout = lazy(() => import('./pages/Calendar/CalendarLayout'))
const Todo = lazy(() => import('./pages/Todo/Todo'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Settings = lazy(() => import('./pages/Settings/Settings'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const UsersList = lazy(() => import('./pages/UsersList/UsersList'))
const User = lazy(() => import('./pages/User/User'))
const ProductDetails = lazy(() => import('./pages/Products/ProductDetails'))

import InboxData from './pages/Inbox/InboxData'
import Starred from './pages/Inbox/Starred'
import Sent from './pages/Inbox/Sent'
import Spam from './pages/Inbox/Spam'
import Bin from './pages/Inbox/Bin'
import Draft from './pages/Inbox/Draft'
import EmailDetail from './pages/Inbox/EmailDetail'

let routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/products', element: <Products /> },
  { path: '/favorites', element: <Favorites /> },
  {
    path: '/inbox',
    element: (
      <Inbox>
        <InboxData />
      </Inbox>
    ),
    children: [
      { index: true, element: <InboxData /> },
      { path: 'inboxs', element: <InboxData /> },
      { path: '/inbox/inboxs/:emailName', element: <EmailDetail /> },
      { path: 'starred', element: <Starred /> },
      { path: 'sent', element: <Sent /> },
      { path: 'spam', element: <Spam /> },
      { path: 'bin', element: <Bin /> },
      { path: 'draft', element: <Draft /> },
    ],
  },
  { path: '/order-lists', element: <OrderLists /> },
  { path: '/product-stock', element: <ProductStock /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/calendar', element: <CalendarLayout /> },
  { path: '/todo', element: <Todo /> },
  { path: '/contact', element: <Contact /> },
  { path: '/settings', element: <Settings /> },
  { path: '/users', element: <UsersList /> },
  { path: '/user/:userID', element: <User /> },
  { path: '/product/:productID', element: <ProductDetails /> },
  { path: '*', element: <NotFound /> },
]

export default routes
