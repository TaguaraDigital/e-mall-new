import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import { RequireAuth } from './context/RequireAuth';

import { Sidebar } from './components/sidebar';

import { Landing } from './pages/landing';
import { Login } from './pages/login';
import { Home } from './components/Home';
// import { About } from './components/About'
// import { Navbar } from './components/Navbar';
import { Header as Navbar } from './components/header';
import { Footer } from './components/footer';
import { OrderSummary } from './components/OrderSummary';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Products } from './components/Products';
import { NoMatch } from './components/NoMatch';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
// import { Login } from './components/Login';
import { Profile } from './components/Profile';

const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="products" element={<Products />}>
              <Route index element={<FeaturedProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<UserDetails />} />
              <Route path="admin" element={<Admin />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Sidebar>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
