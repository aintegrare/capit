import React from 'react';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Badge from '../Badge/Badge';

export interface HeaderProps {
  cartItemCount?: number;
  onMenuClick?: () => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onWishlistClick?: () => void;
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  cartItemCount = 0,
  onMenuClick,
  onCartClick,
  onProfileClick,
  onWishlistClick,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <Menu size={20} />
          </button>
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-orange-600 rounded-lg flex items-center justify-center">
              <ShoppingCart size={20} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-brand-secondary">Capit</h1>
              <p className="text-xs text-brand-primary font-medium tracking-wider">STORE</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-lg mx-8">
            <Input
              type="search"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search size={16} />}
              fullWidth
            />
          </form>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search */}
            <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors">
              <Search size={20} />
            </button>
            
            {/* Wishlist */}
            <button
              onClick={onWishlistClick}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors relative"
            >
              <Heart size={20} />
            </button>
            
            {/* Cart */}
            <button
              onClick={onCartClick}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <div className="absolute -top-1 -right-1">
                  <Badge variant="error" size="sm">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </Badge>
                </div>
              )}
            </button>
            
            {/* Profile */}
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<User size={16} />}
              onClick={onProfileClick}
              className="hidden sm:inline-flex"
            >
              Conta
            </Button>
            
            <button
              onClick={onProfileClick}
              className="sm:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <User size={20} />
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearchSubmit}>
            <Input
              type="search"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search size={16} />}
              fullWidth
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
