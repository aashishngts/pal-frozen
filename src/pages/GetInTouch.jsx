import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KnowMoreAboutUs from "../components/get-in-touch/KnowMoreAboutUs";
import Hero from "../components/Hero";
import VisitOtherSites from "../components/get-in-touch/VisitOtherSites";
import ContactPersons from "../components/get-in-touch/ContactPersons";
import DownloadBrochure from "../components/get-in-touch/DownloadBrochure";
import SocialMediaPresence from "../components/get-in-touch/SocialMediaPresence";
import FAQSection from "../components/get-in-touch/FAQSection";
import BecomeDistributor from "../components/get-in-touch/BecomeDistributor";
import ContactFooterSection from "../components/get-in-touch/ContactFooterSection";
import GallerySection from "../components/get-in-touch/GallerySection";
import PrivacyPolicy from "../components/get-in-touch/PrivacyPolicy";

export default function GetInTouch() {
  return (
    <>
      <Navbar />
      <Hero/> 

      <KnowMoreAboutUs />
      <VisitOtherSites/>
      <ContactPersons/>
      <DownloadBrochure/>
      <SocialMediaPresence/>

      <FAQSection/>

      <BecomeDistributor/>
      <ContactFooterSection/>

      <GallerySection/>

      <PrivacyPolicy/>

    </>
  );
}
