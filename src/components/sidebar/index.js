import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FaBars, FaSearch } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import SidebarMenu from './SidebarMenu';
import ShipmentSidebar from './ShipmentSidebar';
import './sidebar.scss';
import { routes } from './dataRouteSidebar';

export const Sidebar = ({ children }) => {
  const location = useLocation().pathname;
  let sidebarTitle = 'Shipment';
  let routersPage = routes.home;

  switch (location) {
    case '/shipment':
      sidebarTitle = 'Shipment Search';
      routersPage = routes.home;
      break;

    case '/dashboard':
      sidebarTitle = 'Dashboard';
      routersPage = routes.others;
      break;
    default:
      sidebarTitle = 'Documentation';
      break;
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen
              ? 'var(--sidebar-width-open'
              : 'var(--sidebar-width-close',

            transition: {
              duration: 0.5,
              type: 'spring',
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {sidebarTitle}
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          {sidebarTitle === 'Shipment Search' ? (
            isOpen && <ShipmentSidebar />
          ) : (
            <>
              <div className="search">
                <div className="search_icon">
                  <FaSearch />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.input
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={inputAnimation}
                      type="text"
                      placeholder="Search"
                    />
                  )}
                </AnimatePresence>
              </div>

              <section className="routes">
                {routersPage.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );
                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}
              </section>
            </>
          )}
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};
