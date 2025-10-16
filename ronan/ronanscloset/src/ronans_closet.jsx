import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function ClothingResale() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample clothing items - replace with actual data
  const items = [
    { id: 1, name: 'Vintage Denim Jacket', category: 'jackets', price: 45, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop' },
    { id: 2, name: 'Black Leather Boots', category: 'shoes', price: 80, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=500&fit=crop' },
    { id: 3, name: 'Cotton T-Shirt', category: 'tops', price: 15, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop' },
    { id: 4, name: 'High-Waist Jeans', category: 'pants', price: 35, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop' },
    { id: 5, name: 'Wool Sweater', category: 'tops', price: 30, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop' },
    { id: 6, name: 'Summer Dress', category: 'dresses', price: 40, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop' },
    { id: 7, name: 'Blazer', category: 'jackets', price: 55, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop' },
    { id: 8, name: 'Sneakers', category: 'shoes', price: 60, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=500&fit=crop' },
  ];

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'tops', label: 'Tops' },
    { id: 'pants', label: 'Pants' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'jackets', label: 'Jackets' },
    { id: 'shoes', label: 'Shoes' },
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#fafaf8', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e5e5', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '600', margin: '0 0 10px 0', color: '#1a1a1a' }}>
            Ronan's Closet
          </h1>
          <p style={{ color: '#666', margin: 0 }}>Pre-loved fashion finds</p>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Search and Filter Section */}
        <div style={{ marginBottom: '40px' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} size={20} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 44px',
                fontSize: '16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: 'white',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Filter size={20} style={{ color: '#666' }} />
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  fontSize: '14px',
                  border: selectedCategory === cat.id ? '2px solid #1a1a1a' : '1px solid #ddd',
                  borderRadius: '20px',
                  backgroundColor: selectedCategory === cat.id ? '#1a1a1a' : 'white',
                  color: selectedCategory === cat.id ? 'white' : '#333',
                  cursor: 'pointer',
                  fontWeight: selectedCategory === cat.id ? '600' : '400',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginBottom: '40px'
        }}>
          {filteredItems.map(item => (
            <div key={item.id} style={{ cursor: 'pointer' }}>
              {/* Frame Container */}
              <div style={{
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '8px solid #d4af87',
                borderImageSlice: 1,
                borderImageSource: 'linear-gradient(135deg, #d4af87, #c9a87c)',
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '2px'
                  }}
                />
              </div>
              {/* Item Details */}
              <div style={{ marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0', color: '#1a1a1a' }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: '20px', fontWeight: '700', color: '#2d6a4f', margin: 0 }}>
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
            <p style={{ fontSize: '18px' }}>No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}