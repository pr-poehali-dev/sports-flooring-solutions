import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-stripes opacity-10" />
      
      <div className="container relative py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
              <Icon name="Award" size={16} className="text-primary" />
              <span>Профессиональные спортивные покрытия</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Покрытия для<br />
              <span className="text-primary">единоборств</span> и<br />
              спортивных залов
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Поставляем качественные маты, татами и модульные покрытия для профессиональных залов. 
              Более 10 лет на рынке спортивного оборудования.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                Выбрать покрытие
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Аренда покрытий
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Качество продукции</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] animate-scale-in">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://v3.fal.media/files/kangaroo/XENHWCB0Pvl5BI9yIXEcJ_output.png" 
                  alt="Спортивные покрытия" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle2" className="text-primary-foreground" size={32} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Сертифицировано</div>
                    <div className="text-sm text-muted-foreground">Соответствует ГОСТ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
