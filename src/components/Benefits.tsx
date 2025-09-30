import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: 'Factory',
      title: 'Собственное производство',
      description: 'Изготавливаем покрытия на современном оборудовании. Контроль качества на каждом этапе.'
    },
    {
      icon: 'Truck',
      title: 'Доставка по России',
      description: 'Отправляем транспортными компаниями в любой регион. Помогаем с расчетом доставки.'
    },
    {
      icon: 'BadgeCheck',
      title: 'Сертификаты ГОСТ',
      description: 'Вся продукция сертифицирована. Соответствует требованиям безопасности и качества.'
    },
    {
      icon: 'Clock',
      title: 'Быстрое производство',
      description: 'Изготовим ваш заказ за 5-7 рабочих дней. Срочные заказы — за 2-3 дня.'
    },
    {
      icon: 'Calculator',
      title: 'Бесплатный расчет',
      description: 'Поможем подобрать покрытие под ваш зал. Рассчитаем количество и стоимость.'
    },
    {
      icon: 'Headset',
      title: 'Консультация экспертов',
      description: 'Наши специалисты помогут выбрать оптимальный вариант для вашего вида спорта.'
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 10 лет производим качественные спортивные покрытия для залов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
