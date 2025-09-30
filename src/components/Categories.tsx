import ProductCard from './ProductCard';

const Categories = () => {
  const products = [
    {
      title: 'Будо маты',
      category: 'Покрытия для единоборств',
      price: '3 900',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      icon: 'Grid3x3',
      isNew: true
    },
    {
      title: 'Татами',
      category: 'Покрытия для единоборств',
      price: '2 500',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      icon: 'Grid2x2',
    },
    {
      title: 'Борцовский ковер',
      category: 'Покрытия для единоборств',
      price: '15 000',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      icon: 'Layers',
    },
    {
      title: 'Гимнастические маты',
      category: 'Универсальные покрытия',
      price: '4 200',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      icon: 'Square',
    },
    {
      title: 'Модульное покрытие',
      category: 'Универсальные покрытия',
      price: '1 800',
      image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&q=80',
      icon: 'Grid3x3',
      isNew: true
    },
    {
      title: 'Рулонное покрытие',
      category: 'Решения для залов',
      price: '8 500',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
      icon: 'LayoutGrid',
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент профессиональных покрытий для различных видов спорта и фитнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Посмотреть весь каталог
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
