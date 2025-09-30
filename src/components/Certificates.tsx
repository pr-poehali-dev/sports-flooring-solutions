import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      title: 'ГОСТ Р 52024-2003',
      description: 'Сертификат соответствия на спортивное оборудование',
      icon: 'Award',
      color: 'bg-primary/10'
    },
    {
      title: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
      icon: 'BadgeCheck',
      color: 'bg-blue-500/10'
    },
    {
      title: 'Пожарная безопасность',
      description: 'Сертификат пожарной безопасности материалов',
      icon: 'Shield',
      color: 'bg-red-500/10'
    },
    {
      title: 'Экологический сертификат',
      description: 'Соответствие экологическим нормам',
      icon: 'Leaf',
      color: 'bg-green-500/10'
    },
  ];

  const standards = [
    {
      name: 'Европейский стандарт EN 12503',
      description: 'Требования к татами для дзюдо'
    },
    {
      name: 'ГОСТ 34382-2018',
      description: 'Покрытия спортивных залов. Общие технические условия'
    },
    {
      name: 'СанПиН 2.4.3648-20',
      description: 'Санитарно-эпидемиологические требования к спортивным объектам'
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Сертификаты и стандарты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Вся наша продукция имеет необходимые сертификаты качества и соответствует российским и международным стандартам
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="text-center border-border/50 hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon name={cert.icon as any} className="text-primary" size={40} />
                </div>
                <h3 className="font-bold text-lg mb-3">{cert.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-6 text-center">Соответствие стандартам</h3>
              <div className="space-y-6">
                {standards.map((standard, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 pb-6 border-b last:border-0 last:pb-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{standard.name}</h4>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 bg-primary/5 rounded-xl p-8 text-center animate-fade-in">
            <Icon name="Download" className="text-primary mx-auto mb-4" size={48} />
            <h3 className="font-bold text-xl mb-3">Скачать документы</h3>
            <p className="text-muted-foreground mb-6">
              Копии всех сертификатов и деклараций о соответствии доступны для скачивания
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:border-primary transition-colors font-medium text-sm"
              >
                <Icon name="FileText" size={18} />
                Сертификаты ГОСТ
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:border-primary transition-colors font-medium text-sm"
              >
                <Icon name="FileText" size={18} />
                Декларации соответствия
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:border-primary transition-colors font-medium text-sm"
              >
                <Icon name="FileText" size={18} />
                Протоколы испытаний
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
