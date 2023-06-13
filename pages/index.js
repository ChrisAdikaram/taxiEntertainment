import BookNow from "@/components/section/home/BookNow";
import Description from "@/components/section/home/Description";
import Gallery from "@/components/section/home/Gallery";
import HeroSlider from "@/components/section/home/HeroSlider";
import Layout from "@/layouts/layout";

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <Description  />
      <Gallery />
      <BookNow />
    </Layout>
  );
}
