import dior from "../assets/images/p1.jpg";
import jean from "../assets/images/p2.jpg";
import spice from "../assets/images/p3.jpg";

function Product() {
  return (
    <div className="main_section_container">
      <div className="Box">
        <img src={dior} alt="ll" />
        <p>DIOR Sauvage, bold and free woman experimenting with her freedom extremely.</p>
      </div>

      <div className="Box">
        <img src={jean} alt="lo" />
        <p>Jean Paul Perfume for men. Looking for a perfume perfect for your style.</p>
      </div>

      <div className="Box">
        <img src={spice} alt="mm" />
        <p>Spice Bomb, Long-Lasting, Fresh & Powerful Fragrance. Savour a soothing experience.</p>
      </div>
    </div>
  );
}

export default Product;