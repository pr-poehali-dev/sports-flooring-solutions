import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Projects = () => {
  const projects = [
    {
      title: 'Спортивный комплекс "Олимп"',
      location: 'Москва',
      area: '500 м²',
      type: 'Борцовские ковры + татами',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      description: 'Оснащение зала для подготовки сборной по дзюдо. Установлено 4 татами 10×10 м и 2 борцовских ковра.',
      year: '2024'
    },
    {
      title: 'Фитнес-клуб "ProSport"',
      location: 'Санкт-Петербург',
      area: '350 м²',
      type: 'Модульное покрытие',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      description: 'Комплексное оснащение трех залов для функциональных тренировок и кроссфита.',
      year: '2024'
    },
    {
      title: 'Детская спортивная школа №7',
      location: 'Казань',
      area: '250 м²',
      type: 'Будо-маты EVA',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
      description: 'Безопасное покрытие для детских секций дзюдо, самбо и айкидо. Яркие цвета и повышенная амортизация.',
      year: '2023'
    },
    {
      title: 'Университет физкультуры',
      location: 'Екатеринбург',
      area: '800 м²',
      type: 'Комплексное решение',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      description: 'Оснащение 5 залов: татами, борцовские ковры, гимнастические маты, стеновые протектора.',
      year: '2023'
    },
    {
      title: 'Боксерский клуб "Ударник"',
      location: 'Новосибирск',
      area: '200 м²',
      type: 'Специализированное покрытие',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      description: 'Покрытие для бокса с усиленной амортизацией и рулонное покрытие для зоны тренажеров.',
      year: '2023'
    },
    {
      title: 'Центр единоборств "Самурай"',
      location: 'Краснодар',
      area: '400 м²',
      type: 'Татами + ролл маты',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      description: 'Три зала для разных видов единоборств с индивидуальным подбором покрытия под каждую дисциплину.',
      year: '2022'
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Наши работы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реализованные проекты по оснащению спортивных залов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-primary">
                  {project.year}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="MapPin" size={16} />
                  <span>{project.location}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Площадь:</span>
                    <span className="font-semibold">{project.area}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Покрытие:</span>
                    <span className="font-semibold text-right">{project.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Хотите увидеть больше наших работ или обсудить ваш проект?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Связаться с нами
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
