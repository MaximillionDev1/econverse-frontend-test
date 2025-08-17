import { useState } from "react";
import styles from "./Categories.module.scss";
import tech from "../../assets/icons/tech.png";
import market from "../../assets/icons/market.png";
import drinks from "../../assets/icons/drinks.png";
import tools from "../../assets/icons/tools.png";
import health from "../../assets/icons/health.png";
import fitness from "../../assets/icons/fitness.png";
import fashion from "../../assets/icons/fashion.png";



const categories = [
  { id: 1, name: "Tecnologia", icon:`${tech}` },
  { id: 2, name: "Supermercado",icon:`${market}`  },
  { id: 3, name: "Bebidas", icon:`${drinks}`  },
  { id: 4, name: "Ferramentas", icon:`${tools}`  },
  { id: 5, name: "Saúde", icon:`${health}` },
  { id: 6, name: "Esportes e Fitness", icon:`${fitness}`  },
  { id: 7, name: "Moda", icon:`${fashion}`  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className={styles.categories}>
      <div className={styles.wrapper}>
        {categories.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              activeCategory === item.id ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(item.id)}
          >
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
