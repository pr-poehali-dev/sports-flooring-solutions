import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Grid3x3" className="text-primary-foreground" size={24} />
              </div>
              <span>SportFloor</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-6">
              Профессиональные спортивные покрытия для единоборств и фитнес-залов с 2014 года.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Phone" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Покрытия для единоборств</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Универсальные покрытия</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Решения для залов</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Аренда покрытий</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Клиентам</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Как выбрать?</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Наши работы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Новости и акции</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Подпишитесь на рассылку, чтобы узнавать о новинках первыми
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email" 
                className="bg-background/10 border-secondary-foreground/20"
              />
              <Button variant="default">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <div>© 2024 SportFloor. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
