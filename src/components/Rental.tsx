import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Rental = () => {
  const rentalOptions = [
    {
      title: 'Будо-маты в аренду',
      price: '150',
      unit: 'м²/день',
      minPeriod: 'от 3 дней',
      deposit: '30% от стоимости',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      features: ['Доставка включена', 'Монтаж бесплатно', 'Любая площадь'],
      popular: true
    },
    {
      title: 'Татами для соревнований',
      price: '200',
      unit: 'м²/день',
      minPeriod: 'от 1 дня',
      deposit: '30% от стоимости',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      features: ['Сертифицированные', 'Быстрая доставка', 'Установка за 2 часа'],
      popular: false
    },
    {
      title: 'Борцовский ковер',
      price: '5000',
      unit: 'шт/день',
      minPeriod: 'от 1 дня',
      deposit: '40% от стоимости',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      features: ['Размер 12×12 м', 'Соответствие FILA', 'Транспортировка'],
      popular: false
    },
    {
      title: 'Гимнастические маты',
      price: '120',
      unit: 'м²/день',
      minPeriod: 'от 5 дней',
      deposit: '20% от стоимости',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      features: ['Для спортивных школ', 'Яркие цвета', 'Легкий монтаж'],
      popular: false
    },
  ];

  const occasions = [
    {
      icon: 'Trophy',
      title: 'Спортивные соревнования',
      description: 'Аренда покрытий для турниров по дзюдо, самбо, борьбе на 1-3 дня'
    },
    {
      icon: 'School',
      title: 'Временные секции',
      description: 'Открываете новую секцию? Арендуйте покрытие на месяц для тестирования'
    },
    {
      icon: 'Calendar',
      title: 'Сезонные мероприятия',
      description: 'Спортивные лагеря, сборы, летние площадки — короткая аренда от 1 недели'
    },
    {
      icon: 'Building',
      title: 'Корпоративные события',
      description: 'Тимбилдинги, корпоративы со спортивной программой'
    },
  ];

  const benefits = [
    'Экономия бюджета — не нужно покупать дорогое оборудование',
    'Быстрая доставка по Москве и МО — от 24 часов',
    'Профессиональный монтаж и демонтаж включены',
    'Актуально для разовых мероприятий и турниров',
    'Возможность аренды с последующим выкупом',
    'Гибкие условия для постоянных клиентов'
  ];

  const priceFactors = [
    { factor: 'Площадь покрытия', impact: 'Чем больше площадь, тем ниже цена за м²' },
    { factor: 'Срок аренды', impact: 'От 7 дней скидка 10%, от 30 дней — 20%' },
    { factor: 'Удаленность объекта', impact: 'Москва и МО — бесплатно, регионы — по тарифу' },
    { factor: 'Дополнительные услуги', impact: 'Срочная доставка +30%, монтаж выходного дня +20%' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary">Аренда</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Аренда спортивных покрытий в Москве
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Профессиональная аренда будо-матов, татами и борцовских ковров для соревнований, 
            тренировок и спортивных мероприятий. Доставка за 24 часа, монтаж включен.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rentalOptions.map((option, index) => (
            <Card 
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in ${
                option.popular ? 'border-primary border-2' : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {option.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Популярное
                </div>
              )}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">{option.title}</h3>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-primary">{option.price}</span>
                    <span className="text-sm text-muted-foreground">₽/{option.unit}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Минимальный срок: {option.minPeriod}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Залог: {option.deposit}
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-primary" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={option.popular ? 'default' : 'outline'}>
                  Арендовать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Когда нужна аренда?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={occasion.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{occasion.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {occasion.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Преимущества аренды</h2>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-6">От чего зависит стоимость?</h2>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {priceFactors.map((item, index) => (
                    <div key={index} className="pb-6 border-b last:border-0 last:pb-0">
                      <h4 className="font-semibold mb-2">{item.factor}</h4>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center animate-fade-in">
          <Icon name="Calculator" className="text-primary mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-4">Рассчитать стоимость аренды</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут, 
            рассчитает точную стоимость с учетом всех параметров вашего мероприятия
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-base">
              Оставить заявку
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>
        </div>

        <div className="mt-16 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-6">Аренда спортивных покрытий: полное руководство</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Почему аренда выгоднее покупки?</h3>
              <p className="leading-relaxed mb-4">
                Аренда спортивных матов и покрытий — оптимальное решение для разовых мероприятий, 
                турниров и временных секций. Вы платите только за период использования, 
                не тратите средства на хранение и обслуживание.
              </p>
              <p className="leading-relaxed">
                Особенно актуально для начинающих спортивных клубов, организаторов соревнований 
                и образовательных учреждений с сезонными спортивными программами.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Как проходит аренда?</h3>
              <ol className="space-y-2 list-decimal pl-6 leading-relaxed">
                <li>Вы оставляете заявку с указанием площади, срока и типа покрытия</li>
                <li>Менеджер рассчитывает стоимость и согласовывает детали</li>
                <li>Вы вносите залог (20-40% от стоимости аренды)</li>
                <li>Доставляем и монтируем покрытие в согласованное время</li>
                <li>После мероприятия демонтируем и забираем оборудование</li>
                <li>Возвращаем залог в течение 3 дней при отсутствии повреждений</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Условия аренды покрытий</h3>
              <p className="leading-relaxed mb-4">
                Минимальный срок аренды зависит от типа покрытия: для матов — от 3 дней, 
                для соревновательных татами — от 1 дня. Доставка по Москве и МО включена в стоимость.
              </p>
              <p className="leading-relaxed">
                Монтаж и демонтаж выполняют наши специалисты бесплатно. При аренде на срок 
                более 7 дней действует скидка 10%, более 30 дней — 20%.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Аренда с выкупом</h3>
              <p className="leading-relaxed">
                Если после аренды вы решите приобрести покрытие, зачтем 50% арендной платы 
                в счет покупки. Это удобно для тех, кто хочет протестировать материал перед 
                принятием окончательного решения о покупке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rental;
