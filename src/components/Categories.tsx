import ProductCard from './ProductCard';

const Categories = () => {
  const products = [
    {
      title: 'Будо маты EVA',
      category: 'Покрытия для единоборств',
      price: '920',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      icon: 'Grid3x3',
      isNew: true
    },
    {
      title: 'Татами классические',
      category: 'Покрытия для единоборств',
      price: '1 150',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      icon: 'Grid2x2',
    },
    {
      title: 'Борцовский ковер 12×12 м',
      category: 'Покрытия для единоборств',
      price: '2 800',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      icon: 'Layers',
    },
    {
      title: 'Ролл маты для дзюдо',
      category: 'Покрытия для единоборств',
      price: '1 680',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      icon: 'Circle',
      isNew: true
    },
    {
      title: 'Гимнастические маты складные',
      category: 'Универсальные покрытия',
      price: '3 200',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      icon: 'Square',
    },
    {
      title: 'Спортивные маты для залов',
      category: 'Универсальные покрытия',
      price: '2 400',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      icon: 'Rectangle',
    },
    {
      title: 'Модульное покрытие ПВХ',
      category: 'Универсальные покрытия',
      price: '1 850',
      image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&q=80',
      icon: 'Grid3x3',
      isNew: true
    },
    {
      title: 'Рулонное покрытие 1.5 м',
      category: 'Решения для залов',
      price: '1 200',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
      icon: 'LayoutGrid',
    },
    {
      title: 'Стеновые протектора 2м',
      category: 'Решения для залов',
      price: '4 500',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      icon: 'PanelTop',
    },
    {
      title: 'Маты для кроссфита',
      category: 'Универсальные покрытия',
      price: '2 900',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      icon: 'Dumbbell',
      isNew: true
    },
    {
      title: 'Покрытие для бокса',
      category: 'Покрытия для единоборств',
      price: '1 950',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      icon: 'Target',
    },
    {
      title: 'Мягкое покрытие для детей',
      category: 'Универсальные покрытия',
      price: '1 400',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      icon: 'Baby',
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container">
        <div className="mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold mb-3">Каталог продукции</h2>
          <p className="text-muted-foreground">
            Полный ассортимент покрытий для единоборств и спортивных залов
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Покрытия для единоборств</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.filter(p => p.category === 'Покрытия для единоборств').map((product, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Универсальные покрытия</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.filter(p => p.category === 'Универсальные покрытия').map((product, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Решения для залов</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.filter(p => p.category === 'Решения для залов').map((product, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;