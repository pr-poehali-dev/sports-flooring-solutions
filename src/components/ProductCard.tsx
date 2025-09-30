import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  icon: string;
  isNew?: boolean;
}

const ProductCard = ({ title, category, price, image, icon, isNew }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-primary">
            Новинка
          </Badge>
        )}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
          <Icon name={icon as any} className="text-primary" size={24} />
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{category}</div>
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground">₽</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Подробнее
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
