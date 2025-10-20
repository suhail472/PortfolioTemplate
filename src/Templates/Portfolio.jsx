import Header from "../Components/Header";
import TemplateMainData from "./PortfolioMainContent";
import Footer from "../Components/Footer";
import Scroll from "../Components/ScrollTopBottom/Scroll";
function Template() {
  return (
    
    <>
      <div className="cursor-target WebsiteMainContainer bg-slate-900 text-white">
        <Header />
        <TemplateMainData />
        <Scroll/>
        <Footer />
      </div>
    </>
  );
}
export default Template;
