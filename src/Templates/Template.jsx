import Header from "../Components/Header";
import TemplateMainData from "./TemplateMainContent";
import Footer from "../Components/Footer";

function Template() {
  return (
    <>
      <div className="WebsiteMainContainer bg-slate-900 text-white">
        <Header />
        <TemplateMainData />
        <Footer />
      </div>
    </>
  );
}
export default Template;
