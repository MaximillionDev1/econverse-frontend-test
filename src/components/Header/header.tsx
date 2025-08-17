import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import box from '../../assets/icons/Box.png';
import heart from '../../assets/icons/Heart.png';
import magnifier from '../../assets/icons/MagnifyingGlass.png';
import cart from '../../assets/icons/ShoppingCart.png';
import userCircle from '../../assets/icons/UserCircle.png';



export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <span>🛡 Compra <strong>100% segura</strong></span>
          <span>🚚 <strong>Frete grátis</strong> acima de R$ 200</span>
          <span>💳 <strong>Parcele</strong> suas compras</span>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.container}>
          <a href="/" className={styles.logo} aria-label="Página inicial eConverse">
            <img src={logo} alt="eConverse" />
          </a>

          <div className={styles.searchBox}>
            <input type="text" placeholder="O que você está buscando?" />
            <button aria-label="Buscar"><img src={magnifier} alt='magnifier'/></button>
          </div>

          <div className={styles.actions}>
            <button aria-label="Minhas compras"><img src={box} alt='box'/></button>
            <button aria-label="Favoritos"><img src={heart} alt='heart'/></button>
            <button aria-label="Minha conta"><img src={cart} alt='shopping-cart'/></button>
            <button aria-label="Carrinho"><img src={userCircle} alt='user-circle'/></button>
          </div>
        </div>
      </div>

      <nav className={styles.navBar}>
        <div className={styles.container}>
          <a href="#">TODAS CATEGORIAS</a>
          <a href="#">SUPERMERCADO</a>
          <a href="#">LIVROS</a>
          <a href="#">MODA</a>
          <a href="#">LANÇAMENTOS</a>
          <a href="#" className={styles.highlight}>OFERTAS DO DIA</a>
          <a href="#">ASSINATURA</a>
        </div>
      </nav>
    </header>
  );
}