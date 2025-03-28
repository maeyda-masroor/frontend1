import React from 'react';
import styled from 'styled-components';
import {FaAlignLeft, FaCaretDown, FaHome, FaUserCircle} from 'react-icons/fa';
import Logo from './Logo';
// Styled components
const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`
// Navbar component
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn'onClick={()=>{
          console.log('toggle Sidebar')
        }}
        >
          <FaAlignLeft/>
        </button>
        <div>
        <h3 className='logo-text'>Dashboard</h3>
      </div>
      <div className='btn-container'>
      <button type='button' className='btn' onClick={()=>{
          console.log('ccc')
      }}>
      <FaUserCircle/>
      <FaCaretDown/>
      </button>
      <div className='dropdown show-dropdown'>
          <button type='button' className='dropdown-btn' onClick={()=>{
            console.log('logout')
      }}>
  
      </button>
      </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
