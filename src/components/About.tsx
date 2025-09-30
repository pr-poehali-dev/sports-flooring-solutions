import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { number: '10+', label: 'Лет на рынке' },
    { number: '500+', label: 'Выполненных проектов' },
    { number: '200+', label: 'Постоянных клиентов' },
    { number: '50+', label: 'Городов России' },
  ];

  const values = [
    {
      icon: 'Target',
      title: 'Качество',
      description: 'Используем только сертифицированные материалы от проверенных поставщиков'
    },
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому проекту, учитываем все требования заказчика'
    },
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Постоянно совершенствуем технологии производства и разрабатываем новые продукты'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Гарантируем соблюдение сроков и качество выполнения всех обязательств'
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">О компании SportFloor</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Мы специализируемся на производстве и поставке профессиональных спортивных покрытий 
            для единоборств, фитнеса и спортивных залов любого уровня
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Наша история</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Компания SportFloor основана в 2014 году группой энтузиастов, которые сами занимались 
                единоборствами и понимали важность качественного покрытия для безопасных тренировок.
              </p>
              <p>
                Начав с небольшого производства татами и будо-матов для местных спортивных школ, 
                мы постепенно расширили ассортимент и географию поставок. Сегодня наша продукция 
                используется в спортивных залах, фитнес-центрах и школах более чем в 50 городах России.
              </p>
              <p>
                За годы работы мы оснастили покрытиями сотни спортивных объектов, включая залы для 
                подготовки олимпийских сборных команд. Наш опыт и экспертиза позволяют предлагать 
                оптимальные решения для любых задач.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold">Наша миссия</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Мы стремимся сделать занятия спортом безопасными и комфортными для каждого спортсмена, 
                независимо от уровня подготовки. Наша цель — предоставить доступные и качественные 
                спортивные покрытия, которые служат долгие годы.
              </p>
              <p>
                Мы верим, что правильно подобранное покрытие не только защищает от травм, но и 
                повышает эффективность тренировок, создавая комфортные условия для развития и 
                достижения спортивных результатов.
              </p>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">Наши принципы</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Честная цена без скрытых наценок</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Соблюдение сроков производства и доставки</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Гарантия качества на всю продукцию</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Бесплатные консультации и техподдержка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Наши ценности</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} className="text-primary" size={32} />
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
