
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";

// Sample data for featured products
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Cookies & Cream",
    description: "Rich and creamy vanilla ice cream infused with premium Madagascar vanilla beans for an authentic flavor experience.",
    price: 0,
    image: "cookies.png",
    category: "Classic",
    featured: true,
  },
  {
    id: 2,
    name: "Peanut Butter",
    description: "Decadent dark chocolate ice cream made with high-quality cocoa and a hint of sea salt to enhance the richness.",
    price: 0,
    image: "peanut.png",
    category: "Classic",
    featured: true,
  },
  {
    id: 3,
    name: "Tiramisu Chocolate",
    description: "Fresh strawberry ice cream with chunks of real strawberries for a refreshing summer treat.",
    price: 0,
    image: "tiramisu.png",
    category: "Fruit",
    featured: true,
  },
  {
    id: 4,
    name: "Vanilla & coconut",
    description: "Smooth pistachio ice cream with premium roasted pistachios for a distinctive nutty flavor and subtle sweetness.",
    price: 0,
    image: "vanilla.png",
    category: "Nuts",
    featured: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-cream/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-4">Our Selection</span>
            <h2 className="subheadline max-w-lg">Premium Ice cream</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/products" 
              className="group inline-flex items-center text-primary font-medium mt-4 md:mt-0 hover:underline"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
