import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  discount?: number;
  isNew?: boolean;
  isFavorite?: boolean;
  onAddToCart?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  discount,
  isNew,
  isFavorite = false,
  onAddToCart,
  onToggleFavorite,
  className = '',
}) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <Card variant="outlined" padding="none" hover className={`group ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge variant="success" size="sm">Novo</Badge>}
          {discount && (
            <Badge variant="error" size="sm">
              -{discount}%
            </Badge>
          )}
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite?.(id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-neutral-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-neutral-300'}
                />
              ))}
            </div>
            <span className="text-xs text-text-tertiary">
              ({reviewCount || 0})
            </span>
          </div>
        )}
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-brand-primary">
            {formatPrice(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-text-tertiary line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button
          variant="primary"
          size="sm"
          fullWidth
          leftIcon={<ShoppingCart size={16} />}
          onClick={() => onAddToCart?.(id)}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
