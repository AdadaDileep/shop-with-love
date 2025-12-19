import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | LUXE</title>
        <meta name="description" content="Learn about LUXE - our story, mission, and commitment to sustainable luxury fashion." />
        <meta name="keywords" content="about luxe, luxury fashion story, sustainable fashion, brand mission" />
        <link rel="canonical" href="https://luxe.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  About LUXE
                </h1>
                <p className="text-lg text-muted-foreground">
                  Redefining luxury fashion with sustainability and timeless elegance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2020, LUXE emerged from a vision to create fashion that transcends trends and stands the test of time. We believe that true luxury lies in quality, craftsmanship, and sustainability.
                  </p>
                  <p className="text-muted-foreground">
                    Our journey began with a simple question: What if fashion could be both beautiful and responsible? This question guides everything we do, from selecting materials to designing pieces that you'll cherish for years to come.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-4">
                    To create exceptional fashion pieces that empower individuals while respecting our planet. We're committed to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sustainable sourcing and ethical production
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Timeless design that transcends seasonal trends
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Exceptional quality and craftsmanship
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Creating a community of conscious consumers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-8 mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold mb-2">Sustainability</h3>
                    <p className="text-sm text-muted-foreground">
                      Every choice we make is guided by our commitment to environmental responsibility.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold mb-2">Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      We never compromise on quality, ensuring each piece meets the highest standards.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold mb-2">Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Constantly pushing boundaries to create fashion that's both beautiful and responsible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
                <p className="text-muted-foreground mb-6">
                  Be part of a movement that's changing the face of luxury fashion.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
