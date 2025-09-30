import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HowToChoose = () => {
  const sports = [
    {
      name: 'Дзюдо и Самбо',
      coverage: 'Татами или будо-маты EVA',
      thickness: '40 мм',
      density: '200-240 кг/м³',
      features: ['Высокая амортизация', 'Соединение без зазоров', 'Антискользящая поверхность'],
      area: 'Стандарт: 8×8 м или 10×10 м'
    },
    {
      name: 'Айкидо и Джиу-джитсу',
      coverage: 'Татами классические',
      thickness: '30-40 мм',
      density: '180-220 кг/м³',
      features: ['Текстурированная поверхность', 'Средняя жесткость', 'Долговечность'],
      area: 'От 6×6 м в зависимости от зала'
    },
    {
      name: 'Бокс и Кикбоксинг',
      coverage: 'Специализированное покрытие',
      thickness: '20-30 мм',
      density: '150-180 кг/м³',
      features: ['Упругая поверхность', 'Легкий вес', 'Простой монтаж'],
      area: 'Ринг 6×6 м + зона тренировок'
    },
    {
      name: 'Детские секции',
      coverage: 'Будо-маты EVA мягкие',
      thickness: '30-40 мм',
      density: '100-150 кг/м³',
      features: ['Повышенная мягкость', 'Яркие цвета', 'Безопасность'],
      area: 'От 4×4 м'
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Определите вид спорта',
      description: 'Для каждой дисциплины требуется свой тип покрытия с определенными характеристиками'
    },
    {
      number: '2',
      title: 'Измерьте площадь зала',
      description: 'Точные размеры помогут рассчитать количество материала и стоимость'
    },
    {
      number: '3',
      title: 'Выберите толщину',
      description: 'От толщины зависит степень амортизации и защита при падениях'
    },
    {
      number: '4',
      title: 'Подберите цвет',
      description: 'Доступны стандартные и нестандартные цвета под дизайн вашего зала'
    },
  ];

  const tips = [
    'Для профессиональных залов выбирайте покрытие плотностью от 200 кг/м³',
    'Учитывайте интенсивность использования: для ежедневных тренировок нужна повышенная износостойкость',
    'Проверьте, соответствует ли покрытие требованиям федерации вашего вида спорта',
    'При ограниченном бюджете можно начать с меньшей площади и расширять постепенно',
    'Заказывайте с запасом 5-10% на случай замены отдельных матов',
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Как выбрать покрытие?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Подробное руководство по выбору оптимального покрытия для вашего спортивного зала
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Tabs defaultValue="guide" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="guide">По виду спорта</TabsTrigger>
              <TabsTrigger value="steps">Пошаговая инструкция</TabsTrigger>
            </TabsList>

            <TabsContent value="guide" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {sports.map((sport, index) => (
                  <Card 
                    key={index}
                    className="border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Icon name="Activity" className="text-primary" size={24} />
                        {sport.name}
                      </h3>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Рекомендуемое покрытие:</div>
                          <div className="font-semibold">{sport.coverage}</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">Толщина:</div>
                            <div className="font-semibold">{sport.thickness}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">Плотность:</div>
                            <div className="font-semibold">{sport.density}</div>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Особенности:</div>
                          <ul className="space-y-1">
                            {sport.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <Icon name="Check" className="text-primary" size={16} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Рекомендуемая площадь:</div>
                          <div className="font-semibold text-sm">{sport.area}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="steps" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                    Полезные советы
                  </h3>
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-sm">
          <h3 className="font-bold text-2xl mb-4">Не знаете, что выбрать?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Наши эксперты помогут подобрать оптимальное покрытие под ваши задачи. 
            Бесплатная консультация и расчет в течение 15 минут.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Получить консультацию
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToChoose;
