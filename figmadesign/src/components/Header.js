import React from 'react';

function Header() {
  return (
    <header className="bg-white p-6" style={{ background: '#fffbec' }}>
      <div className="container text-brownText mx-auto flex justify-between items-end">
        <h1 className="text-2xl font-bold">Collers</h1>
        <nav>
          <ul className="flex space-x-4 font-medium justify-end">
            <li><a href="#products" >Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing"  >Pricing</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#login"    >Log in</a></li>
            <li><a href="#signup" class="border border-brownText font-medium px-4 py-2 rounded-md hover:bg-transparent hover:border-brownText"> Sign Up Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
