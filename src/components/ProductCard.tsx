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
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-primary text-xs">
            Хит
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <div className="text-sm text-muted-foreground mb-4">{category}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold">от {price}</span>
            <span className="text-sm text-muted-foreground">₽/м²</span>
          </div>
          <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
            <Icon name="ArrowRight" size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;