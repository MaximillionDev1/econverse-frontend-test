import Banner from "../components/Banner/Banner";
import { BrandsNavigation } from "../components/BrandNavigation.scss/BrandNavigations";
import Categories from "../components/Categories/Categories";
import { PartnersSection } from "../components/PartnerSection/PartnerSection";
import ProductShowcase from "../components/ProductsShowcase/ProductShowcase";
import Footer from "../Footer/Footer";


 const Home = () => {
  
  return (
    <div >
     <Banner/>
     <Categories/>
     <ProductShowcase showAllCategories={true} />
     <PartnersSection/>
     <ProductShowcase />
     <PartnersSection />
     <BrandsNavigation />
     <ProductShowcase />
     <Footer />
    </div>
  );
};

export default Home;