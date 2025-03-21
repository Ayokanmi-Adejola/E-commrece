
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg relative z-10">
              <img 
                src="https://i0.wp.com/startuptipsdaily.com/wp-content/uploads/2016/07/fanmilk.jpg?resize=768%2C513&ssl=1" 
                alt="Fanice Ice Cream making process" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-mint rounded-lg -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-softPink rounded-full -z-0 opacity-60"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-6">Our Story</span>
            <h2 className="subheadline mb-6">Nationwide Ice cream distribution with a focus on customer satisfaction</h2>
            
            <div className="space-y-4 text-charcoal/80">
              <p>
              Adejola & Sons Distribution Company is your trusted partner for nationwide ice cream distribution. 
              We specialize in the efficient and reliable delivery of Fanice and a curated selection of premium ice cream brands,
               ensuring quality and freshness every time.
              </p>
              <p>
              In line with Danone’s One Planet, One Health vision which reflects a strong belief that the health of people and the health of the planet are interconnected,
               we aim at delivering quality ice cream for healthy enjoyment. ​
              </p>
              <p>
              We are dedicated to providing our customers with products they can enjoy, 
               while maintaining the highest standards of freshness and taste.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-cream/50">
                <span className="block text-primary text-2xl font-bold mb-1">100%</span>
                <span className="text-sm text-charcoal/70">Reliable Distribution</span>
              </div>
              <div className="text-center p-4 rounded-lg bg-cream/50">
                <span className="block text-primary text-2xl font-bold mb-1">30+</span>
                <span className="text-sm text-charcoal/70">Unique Flavors</span>
              </div>
              <div className="text-center p-4 rounded-lg bg-cream/50">
                <span className="block text-primary text-2xl font-bold mb-1">5+</span>
                <span className="text-sm text-charcoal/70">Award Winning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
