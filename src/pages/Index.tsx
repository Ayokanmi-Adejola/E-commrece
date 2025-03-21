
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Adejola & Sons premium ice cream</title>
        <meta name="description" content="Indulge in premium artisanal ice cream crafted with passion and the finest ingredients." />
      </Helmet>
      
      <main>
        <Hero />
        <FeaturedProducts />
        
        {/* Testimonial Section */}
        <section className="section bg-softPink/30">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-6">
                Our Customers Love Us
              </span>
              <h2 className="subheadline mb-12">What People Are Saying About Us</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-soft"
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-gold" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-charcoal/80 mb-4 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-softBlack">{testimonial.name}</h4>
                      <p className="text-xs text-charcoal/60">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <About />
      </main>
      
      <Footer />
    </>
  );
};

// Sample testimonial data
const testimonials = [
  {
    name: "Supermarket",
    location: "Ogun state, Nigeria",
    text: "Their distribution team is amazing. They are very reliable, and always deliver on time. They have helped my business grow",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOWnmfBMfmxFf3n1_nX8hhbhFq3-DxgtA8w&s",
  },
  {
    name: "Supermarket",
    location: "Ogun state, Nigeria",
    text: "Their customer service is exceptional. Any questions or concerns are addressed promptly and professionally.",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOWnmfBMfmxFf3n1_nX8hhbhFq3-DxgtA8w&s",
  },
  {
    name: "Supermarket",
    location: "Ogun state, Nigeria",
    text: "They consistently deliver the full range of products I order. This helps me avoid running out of stock.",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOWnmfBMfmxFf3n1_nX8hhbhFq3-DxgtA8w&s",
  },
];

export default Index;
