import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="about-us">
        <div className="about-us-heading">
          <h1>ABOUT US</h1>
        </div>
        <div className="about-para">
          Welcome to Forever Green, your premier online destination for the
          latest mobile phones, tablets, laptops, and accessories. Whether
          you’re upgrading your device, searching for essential accessories, or
          finding a reliable gadget for work or play, we have everything you
          need right at your fingertips.
        </div>
        <div className="who-we-are">
          <h2>Who we are</h2>
          <p>
            At Forever Green, we are a passionate team of tech enthusiasts
            dedicated to offering high-quality electronics at unbeatable prices.
            We understand that choosing the right tech product can be
            overwhelming, which is why we’ve made it our mission to simplify the
            process for you. With a carefully curated selection of smartphones,
            tablets, laptops, and accessories from top brands, we make it easy
            to find exactly what you're looking for – all from the comfort of
            your home.
          </p>
        </div>
        <div className="goal">
          <h2>Our Goal</h2>
          <p>
            At Forever Green, our goal is simple: to make cutting-edge
            technology affordable and accessible to everyone. We carefully
            select the best products from top brands to ensure that you get the
            most value for your money. From the newest smartphones to
            high-performance laptops, we aim to offer a broad range of options
            for different needs and budgets.
          </p>
        </div>
        <p className="thank-you">
          Thank you for choosing Forever Green. We’re excited to be your go-to
          destination for all tech products!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
