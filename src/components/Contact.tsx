import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@sportfloor.ru',
      link: 'mailto:info@sportfloor.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Спортивная, 1',
      link: '#'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: '#'
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку и наш менеджер свяжется с вами для расчета стоимости и консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                    <Input
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Опишите ваш проект: площадь зала, вид спорта, требуемая толщина покрытия..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={contact.icon as any} className="text-primary" size={24} />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{contact.title}</div>
                    {contact.link !== '#' ? (
                      <a
                        href={contact.link}
                        className="font-semibold hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="font-semibold">{contact.value}</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Бесплатная консультация</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Не знаете, какое покрытие выбрать? Наши эксперты помогут подобрать оптимальный вариант
                  для вашего зала, рассчитают количество материала и стоимость с доставкой.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Расчет за 15 минут</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Образцы материалов бесплатно</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Выезд замерщика по Москве</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
