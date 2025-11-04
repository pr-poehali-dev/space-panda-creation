import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Luxury Timepiece',
    price: '₽125 000',
    category: 'Часы',
    image: 'https://cdn.poehali.dev/projects/0ccbd722-b7ba-46fe-962d-bcd7d84b41ef/files/5b513e2d-3af9-4901-a4d8-5a44682530da.jpg'
  },
  {
    id: 2,
    name: 'Designer Handbag',
    price: '₽89 000',
    category: 'Аксессуары',
    image: 'https://cdn.poehali.dev/projects/0ccbd722-b7ba-46fe-962d-bcd7d84b41ef/files/4c412673-7bf0-4ccc-bd6b-4aadde70e589.jpg'
  },
  {
    id: 3,
    name: 'Premium Fragrance',
    price: '₽45 000',
    category: 'Парфюмерия',
    image: 'https://cdn.poehali.dev/projects/0ccbd722-b7ba-46fe-962d-bcd7d84b41ef/files/7b2faef2-69ef-46ed-8071-b2b1c80da7bd.jpg'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'about'>('home');
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">ÉLÉGANCE</h1>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              О нас
            </button>
          </div>

          <button className="relative">
            <Icon name="ShoppingBag" size={22} className="text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center animate-fade-in">
              <Badge variant="outline" className="mb-6 px-4 py-1 text-xs uppercase tracking-wider">
                Новая коллекция
              </Badge>
              <h2 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
                Изысканная<br />элегантность
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Откройте для себя коллекцию премиальных товаров, созданных для тех, кто ценит безупречное качество и утончённый стиль
              </p>
              <Button size="lg" className="px-8 py-6 text-base">
                Исследовать коллекцию
              </Button>
            </div>
          </section>

          <section className="py-20 px-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-light mb-4">Избранные товары</h3>
                <p className="text-muted-foreground">Тщательно отобранные предметы роскоши</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-500 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {product.category}
                      </Badge>
                      <h4 className="text-xl font-medium mb-2">{product.name}</h4>
                      <p className="text-2xl font-light mb-4">{product.price}</p>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={addToCart}
                      >
                        Добавить в корзину
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Icon name="Award" size={48} className="mx-auto mb-6 text-primary" />
              <h3 className="text-3xl font-light mb-6">Наши преимущества</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <Icon name="Truck" size={32} className="mx-auto text-primary" />
                  <h4 className="text-lg font-medium">Доставка по миру</h4>
                  <p className="text-sm text-muted-foreground">Бесплатная доставка от ₽50 000</p>
                </div>
                <div className="space-y-3">
                  <Icon name="ShieldCheck" size={32} className="mx-auto text-primary" />
                  <h4 className="text-lg font-medium">Гарантия качества</h4>
                  <p className="text-sm text-muted-foreground">100% оригинальные товары</p>
                </div>
                <div className="space-y-3">
                  <Icon name="Clock" size={32} className="mx-auto text-primary" />
                  <h4 className="text-lg font-medium">Поддержка 24/7</h4>
                  <p className="text-sm text-muted-foreground">Всегда на связи с вами</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'about' && (
        <section className="pt-32 pb-20 px-6 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-8 text-center">О нас</h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p className="text-center text-xl">
                ÉLÉGANCE — это воплощение роскоши и безупречного вкуса
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-4">Наша философия</h3>
                  <p>
                    Мы верим, что истинная роскошь заключается не просто в стоимости предмета, 
                    а в его способности вдохновлять и преображать жизнь своего обладателя. 
                    Каждый товар в нашей коллекции тщательно отобран с учётом высочайших 
                    стандартов качества и эстетики.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-4">Наша миссия</h3>
                  <p>
                    Мы стремимся предоставить нашим клиентам доступ к самым изысканным 
                    предметам роскоши со всего мира. Наша команда экспертов постоянно 
                    исследует рынок в поисках уникальных произведений искусства, дизайна 
                    и ремесла.
                  </p>
                </div>
              </div>

              <div className="mt-16 p-8 bg-muted/30 rounded-lg">
                <h3 className="text-2xl font-medium text-foreground mb-4 text-center">Почему выбирают нас</h3>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Эксклюзивные коллекции от ведущих мировых брендов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Персональный сервис и индивидуальный подход</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Сертификаты подлинности на каждый товар</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>VIP-обслуживание и эксклюзивные предложения</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">ÉLÉGANCE</h2>
          <p className="text-sm opacity-80 mb-6">Роскошь, доступная избранным</p>
          <div className="flex items-center justify-center gap-6">
            <Icon name="Instagram" size={20} className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
            <Icon name="Facebook" size={20} className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
            <Icon name="Twitter" size={20} className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
          <p className="text-xs opacity-60 mt-8">© 2024 ÉLÉGANCE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
