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
              <li><a href="#catalog" className="hover:text-primary transition-colors">Будо-маты</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Татами</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Борцовские ковры</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Гимнастические маты</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Модульное покрытие</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Аренда покрытий</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Наши работы</a></li>
              <li><a href="#certificates" className="hover:text-primary transition-colors">Сертификаты</a></li>
              <li><a href="#how-to-choose" className="hover:text-primary transition-colors">Как выбрать?</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Частые вопросы</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@sportfloor.ru" className="hover:text-primary transition-colors">info@sportfloor.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                <span>Москва, ул. Спортивная, 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-sm text-secondary-foreground/60">
              © 2024 SportFloor. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              <a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a>
            </div>
          </div>
          <div className="text-xs text-secondary-foreground/50 text-center">
            Профессиональные спортивные покрытия для единоборств, фитнес-залов и спортивных комплексов. 
            Будо-маты, татами, борцовские ковры, гимнастические маты, модульное покрытие от производителя.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;