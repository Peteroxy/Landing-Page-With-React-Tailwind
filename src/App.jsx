import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections"
import Nav from "./components/Nav";
import { ParallaxProvider } from 'react-scroll-parallax';



const App = () => {

  return (
    <ParallaxProvider  >
    <main className="relative dark:text-white">
        <Nav />
    {/* <section className="xl:padding-l wide:padding-r padding-b dark:bg-black">
      <Hero/>
    </section> */}
    <section className={`xl:padding-l wide:padding-r padding-b `}>
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue padding dark:bg-black dark:text-white">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32  py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
  </ParallaxProvider>
  )
}
export default App