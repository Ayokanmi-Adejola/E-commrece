
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="product-card h-full flex flex-col"
    >
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative pb-[100%] overflow-hidden bg-secondary/30">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          {product.featured && (
            <span className="absolute top-3 left-3 bg-primary text-white text-xs uppercase tracking-wide px-2 py-1 rounded">
              Premium
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-serif text-xl font-semibold mb-2 text-softBlack">
            {product.name}
          </h3>
          <p className="text-charcoal/70 text-sm line-clamp-2 mb-3">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="font-semibold text-softBlack">
            ${product.price.toFixed(2)}
          </span>
          
          <button 
            onClick={() => addToCart(product, 1)}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary/70 hover:bg-primary transition-colors duration-300"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4 text-softBlack group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
