import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = {
    catalog: {
      title: 'Каталог',
      sections: [
        {
          title: 'Покрытия для единоборств',
          items: ['Будо маты', 'Татами', 'Борцовский ковер', 'Ролл маты']
        },
        {
          title: 'Универсальные покрытия',
          items: ['Гимнастические маты', 'Спортивные маты', 'Модульное покрытие']
        },
        {
          title: 'Решения для залов',
          items: ['Рулонное покрытие', 'Стеновые протектора']
        }
      ]
    },
    services: {
      title: 'Услуги',
      items: ['Аренда покрытий']
    },
    clients: {
      title: 'Клиентам',
      items: ['Как выбрать?', 'Наши работы', 'Сертификаты', 'FAQ']
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Grid3x3" className="text-primary-foreground" size={24} />
            </div>
            <span>SportFloor</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </a>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{menuItems.catalog.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-3">
                      {menuItems.catalog.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold mb-3 text-sm">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href="#"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    {item}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>{menuItems.services.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      {menuItems.services.items.map((item, i) => (
                        <NavigationMenuLink key={i} asChild>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>{menuItems.clients.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      {menuItems.clients.items.map((item, i) => (
                        <NavigationMenuLink key={i} asChild>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              О компании
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="hidden lg:flex">
            <Icon name="Search" size={20} />
          </Button>
          <Button className="hidden lg:flex">
            Получить консультацию
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Главная
                </a>
                <div>
                  <h3 className="font-semibold mb-2">{menuItems.catalog.title}</h3>
                  {menuItems.catalog.sections.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">{section.title}</h4>
                      <div className="space-y-1 pl-4">
                        {section.items.map((item, i) => (
                          <a key={i} href="#" className="block text-sm hover:text-primary transition-colors">
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{menuItems.services.title}</h3>
                  <div className="space-y-1 pl-4">
                    {menuItems.services.items.map((item, i) => (
                      <a key={i} href="#" className="block text-sm hover:text-primary transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{menuItems.clients.title}</h3>
                  <div className="space-y-1 pl-4">
                    {menuItems.clients.items.map((item, i) => (
                      <a key={i} href="#" className="block text-sm hover:text-primary transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors">
                  О компании
                </a>
                <a href="#" className="text-lg font-medium hover:text-primary transition-colors">
                  Контакты
                </a>
                <Button className="mt-4">Получить консультацию</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
