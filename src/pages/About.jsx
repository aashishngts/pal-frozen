import Hero from "../components/Hero";

import SeedsChosen from "../components/about/SeedsChosen";
import PalGroupIntro from "../components/about/PalGroupIntro";
import BusinessVerticals from "../components/about/BusinessVerticals";
import VisionSection from "../components/about/VisionSection";
import OwnerSection from "../components/about/OwnerSection";
import QuoteStrip from "../components/about/QuoteStrip";
import FarmsBanner from "../components/about/FarmsBanner";
import PalFreshGlobal from "../components/about/PalFreshGlobal";
import GlobalReach from "../components/about/GlobalReach";
import ContactInfo from "../components/about/ContactInfo";
import GlobalBanner from "../components/about/GlobalBanner";
import PalFarmsIntro from "../components/about/PalFarmsIntro";
import PalFarmsFamily from "../components/about/PalFarmsFamily";
import GrowingSeason from "../components/about/GrowingSeason";
import Harvesting from "../components/about/Harvesting";
import Farmers from "../components/about/Farmers";
import FieldDoesSeventy from "../components/about/FieldDoesSeventy";
import ThisIsPalFarm from "../components/about/ThisIsPalFarm";
import WideRangeFrozenProducts from "../components/about/WideRangeFrozenProducts";
import GlobalPresence from "../components/about/GlobalPresence";
import FrozenProductsRange from "../components/about/FrozenProductsRange";
import GlobalTrustIndicators from "../components/about/GlobalTrustIndicators";

export default function About() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Rooted in Values. Growing with Purpose."
      />

      <PalGroupIntro/>
      <BusinessVerticals/>
      <VisionSection/>
      <PalFreshGlobal/>
      <GlobalBanner/>
      <GlobalReach/>
      <ContactInfo/>
      <OwnerSection/>
      <QuoteStrip/>
      <PalFarmsIntro/>
      <FarmsBanner/>
      <PalFarmsFamily/>
      <GrowingSeason/>
      <Harvesting/>
      <Farmers/>
      <FieldDoesSeventy/>
      <ThisIsPalFarm/>
      <WideRangeFrozenProducts/>

      <GlobalPresence/>
      <FrozenProductsRange/>
      <GlobalTrustIndicators/>
    </>
  );
}
