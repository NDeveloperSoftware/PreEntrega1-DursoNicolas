import '../NavBar.css';
import CartWidget from './CartWidget';
import Logo from './Logo';

function NavBar() {
  return (
    <section>
      <div className="nav-container">
        <h1 className="logo"><Logo/></h1>
        <ul className="nav-list">
          <li><a href="#remeras">Remeras</a></li>
          <li><a href="#zapatillas">Zapatillas</a></li>
          <li><a href="#shorts">Shorts</a></li>
          <li><a href="#buzos">Buzos</a></li>
        </ul>
        <div className="widget-comprar">
          <CartWidget/>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
