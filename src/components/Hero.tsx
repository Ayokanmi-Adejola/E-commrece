
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-mint/20 to-cream/30"></div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-softPink/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-mint/20 rounded-tr-full"></div>
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-6">Premium Quality Ice Cream</span>
          <h1 className="headline mb-6"> Reliable <span className="text-primary"> Ice-cream </span> Delivery for your Retail Outlets </h1>
          <p className="text-lg text-charcoal/80 mb-8 max-w-xl">
          We understand the importance of reliable ice cream supply in Nigeria. 
          Our dedicated team and refrigerated vehicles guarantee timely and temperature controlled icecream deliveries and ensure your freezers are always stocked with fresh Fanice products. Partner with us for Seamless supply and exceptional service.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="button-primary">
              Explore Flavors
            </Link>
            <a href="#about" className="button-secondary">
              Our Story
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-full rounded-full bg-gradient-to-b from-mint/40 to-cream/20 blur-md"
            />
            <img 
              src="delivery.png" 
              alt="Artisanal ice cream" 
              className="w-full h-full object-contain relative z-10"
              loading="eager"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-softPink/30 blur-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
