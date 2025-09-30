import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Будо-маты
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed">
                Будо-маты — это специализированные спортивные маты, разработанные для тренировок и соревнований по восточным единоборствам. 
                Они обеспечивают надежную защиту спортсменов при падениях и бросках, а также создают комфортные условия для занятий.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Особенности будо-матов:</h2>
              <ul className="space-y-3 list-disc pl-6">
                <li className="text-base"><strong>Высокая плотность материала</strong> — обеспечивает надежную амортизацию</li>
                <li className="text-base"><strong>Антискользящее покрытие</strong> — предотвращает травмы</li>
                <li className="text-base"><strong>Простота сборки</strong> — маты легко соединяются без зазоров</li>
                <li className="text-base"><strong>Долговечность</strong> — устойчивы к интенсивным нагрузкам</li>
                <li className="text-base"><strong>Гигиеничность</strong> — легко чистятся и не впитывают влагу</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Применение:</h2>
              <p className="text-base leading-relaxed">
                Будо-маты широко используются в залах для дзюдо, самбо, айкидо, джиу-джитсу и других видов борьбы. 
                Они подходят как для профессиональных тренировок, так и для любительских занятий.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-base font-semibold">
                Заказать расчет
                <Icon name="Calculator" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold">
                Скачать каталог
                <Icon name="Download" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://v3.fal.media/files/kangaroo/XENHWCB0Pvl5BI9yIXEcJ_output.png" 
                alt="Будо-маты" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">от 920₽</div>
                <div className="text-sm text-muted-foreground">за квадратный метр</div>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">качество ГОСТ</div>
              </div>
            </div>
            
            <div className="bg-muted rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Truck" className="text-primary" size={24} />
                <span className="text-sm font-medium">Доставка по всей России</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Award" className="text-primary" size={24} />
                <span className="text-sm font-medium">Сертифицированная продукция</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={24} />
                <span className="text-sm font-medium">Производство 5-7 дней</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;