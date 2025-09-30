import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Specifications = () => {
  const specifications = [
    { param: 'Материал', value: 'Вспененный полиэтилен EVA' },
    { param: 'Плотность', value: '100-240 кг/м³' },
    { param: 'Жесткость', value: '20-45 Shore C' },
    { param: 'Толщина', value: '20, 30, 40 мм' },
    { param: 'Цвет', value: 'Синий, красный, желтый, зеленый, черный' },
    { param: 'Покрытие', value: 'Текстурированная поверхность (татами)' },
    { param: 'Соединение', value: 'Система «ласточкин хвост»' },
    { param: 'Температура эксплуатации', value: 'от -20°C до +60°C' },
  ];

  const sizes = [
    { size: '1000×1000 мм', thickness: '20 мм', price: '920' },
    { size: '1000×1000 мм', thickness: '30 мм', price: '1 350' },
    { size: '1000×1000 мм', thickness: '40 мм', price: '1 780' },
    { size: '1000×2000 мм', thickness: '20 мм', price: '1 840' },
    { size: '1000×2000 мм', thickness: '30 мм', price: '2 700' },
    { size: '1000×2000 мм', thickness: '40 мм', price: '3 560' },
  ];

  const advantages = [
    {
      title: 'Высокая амортизация',
      description: 'Защищает спортсменов при падениях и бросках благодаря высокой плотности материала'
    },
    {
      title: 'Долговечность',
      description: 'Срок службы более 10 лет при интенсивном использовании в профессиональных залах'
    },
    {
      title: 'Простой монтаж',
      description: 'Быстрая укладка без специального инструмента. Маты надежно соединяются без зазоров'
    },
    {
      title: 'Гигиеничность',
      description: 'Не впитывают влагу, легко моются. Антибактериальная обработка препятствует размножению микробов'
    },
    {
      title: 'Безопасность',
      description: 'Антискользящая поверхность предотвращает травмы. Соответствуют требованиям ГОСТ'
    },
    {
      title: 'Универсальность',
      description: 'Подходят для дзюдо, самбо, айкидо, джиу-джитсу и других видов единоборств'
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="sizes">Размеры и цены</TabsTrigger>
            <TabsTrigger value="advantages">Преимущества</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="animate-fade-in">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Параметр</TableHead>
                      <TableHead>Значение</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{spec.param}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sizes" className="animate-fade-in">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Размер</TableHead>
                      <TableHead>Толщина</TableHead>
                      <TableHead className="text-right">Цена за шт.</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sizes.map((size, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{size.size}</TableCell>
                        <TableCell>{size.thickness}</TableCell>
                        <TableCell className="text-right">
                          <span className="font-bold text-primary">{size.price} ₽</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Цены указаны за 1 шт. При заказе от 100 м² — специальные условия
            </p>
          </TabsContent>

          <TabsContent value="advantages" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Specifications;
