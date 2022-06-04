import { ContactSection } from '../../components/ContactSection';
import { SlideShow } from '../../components/SlideShow';
import { SliderData } from '../../components/SlideShow/SliderData';

export const Landing = () => {
  return (
    <>
      <SlideShow id="home" slides={SliderData} />
      <ContactSection />
    </>
  );
};
