import { useCallback, useState } from "react";
import IntroSplash from "./components/IntroSplash.jsx";
import PetalField from "./components/PetalField.jsx";
import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import Verse from "./components/Verse.jsx";
import Story from "./components/Story.jsx";
import WeddingDay from "./components/WeddingDay.jsx";
import Schedule from "./components/Schedule.jsx";
import Venue from "./components/Venue.jsx";
import People from "./components/People.jsx";
import GoodToKnow from "./components/GoodToKnow.jsx";
import Rsvp from "./components/Rsvp.jsx";
import Footer from "./components/Footer.jsx";
import Lightbox from "./components/Lightbox.jsx";
import { CeremonyArt, ReceptionArt, ART_RATIO } from "./components/InviteArt.jsx";

export default function App() {
  const [started, setStarted] = useState(false);     // doors begin to part: site mounts underneath
  const [splashGone, setSplashGone] = useState(false); // doors fully open: splash removed
  const [zoom, setZoom] = useState(null);             // "ceremony" | "reception" | null

  const closeZoom = useCallback(() => setZoom(null), []);

  return (
    <>
      {!splashGone && (
        <IntroSplash onStart={() => setStarted(true)} onDone={() => setSplashGone(true)} />
      )}

      {started && (
        <>
          <PetalField />
          <div className="site-wrap">
            <main className="site">
              <Hero />
              <Countdown />
              <Verse />
              <Story />
              <WeddingDay onZoom={setZoom} />
              <Schedule />
              <Venue />
              <People />
              <GoodToKnow />
              <Rsvp />
            </main>
            <Footer />
          </div>
          <Lightbox
            open={zoom !== null}
            onClose={closeZoom}
            ratio={zoom ? ART_RATIO[zoom] : 0.7}
            label={zoom === "reception" ? "Reception invitation" : "Ceremony invitation"}
          >
            {zoom === "ceremony" && <CeremonyArt />}
            {zoom === "reception" && <ReceptionArt />}
          </Lightbox>
        </>
      )}
    </>
  );
}
