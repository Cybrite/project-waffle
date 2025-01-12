import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { MobileNavbar, MobileNavbarWrapper, NavbarLink, MobileNavbarContainer } from './styles';

function MobileNav({ isOpen, navLinks }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <MobileNavbar
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <MobileNavbarWrapper>
            {navLinks.map((link) => (
              <NavbarLink key={link.text} href={link.href}>
                {link.text}
              </NavbarLink>
            ))}
          </MobileNavbarWrapper>
        </MobileNavbar>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;