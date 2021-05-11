const Navbar = ({ setOpenCart = null }) => {
  return (
    <header className="absolute top-0 w-full py-4">
      <nav className="flex max-w-screen-xl px-2 items-center mx-auto justify-between">
        <div className="w-24 h-auto">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul className="flex items-center space-x-4">
          <li className="font-main font-bold text-xl">Home</li>
          <li className="font-main font-bold text-xl">Menu</li>
          <button
            className="focus:outline-none relative"
            onClick={() => setOpenCart(true)}
          >
            <img
              src="/images/icons/cart.svg"
              className="w-8 h-auto"
              alt="cart"
            />
            <span className="absolute -right-2 text-sm -top-2 rounded-full w-5 h-5 bg-secondary text-center block">
              2
            </span>
          </button>
          <button className="transition-all hover:shadow-btn px-4 py-1 font-bold rounded border border-primary text-primary font-main uppercase">
            Log in
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
