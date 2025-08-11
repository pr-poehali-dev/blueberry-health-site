import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        performDiagnosis();
      };
      reader.readAsDataURL(file);
    }
  };

  const performDiagnosis = () => {
    setIsAnalyzing(true);
    // Симуляция анализа
    setTimeout(() => {
      setDiagnosisResult({
        disease: 'Антракноз голубики',
        confidence: 87,
        severity: 'Средняя',
        treatment: 'Обработка фунгицидом',
        description: 'Грибковое заболевание, поражающее листья и ягоды'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const diseases = [
    {
      id: 1,
      name: 'Антракноз',
      type: 'Грибковое',
      severity: 'Высокая',
      image: '/img/6603adcd-674a-4f7d-a83c-7a5368739fd1.jpg',
      symptoms: ['Коричневые пятна на листьях', 'Опадание ягод', 'Деформация плодов']
    },
    {
      id: 2,
      name: 'Мучнистая роса',
      type: 'Грибковое',
      severity: 'Средняя',
      image: '/img/1134a526-7d35-4601-bfc2-e33008f51107.jpg',
      symptoms: ['Белый налет на листьях', 'Скручивание листьев', 'Замедленный рост']
    },
    {
      id: 3,
      name: 'Корневая гниль',
      type: 'Грибковое',
      severity: 'Критическая',
      image: '/img/6603adcd-674a-4f7d-a83c-7a5368739fd1.jpg',
      symptoms: ['Увядание растения', 'Почернение корней', 'Остановка роста']
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Дефицит азота у голубики: признаки и лечение',
      excerpt: 'Как определить недостаток азота и правильно подкормить растения',
      date: '15 августа 2024',
      image: '/img/1134a526-7d35-4601-bfc2-e33008f51107.jpg'
    },
    {
      id: 2,
      title: 'Календарь обработок голубики на сезон',
      excerpt: 'Полный график профилактических и лечебных мероприятий',
      date: '10 августа 2024', 
      image: '/img/fb9ddaef-1826-498e-914b-254e9057e322.jpg'
    },
    {
      id: 3,
      title: 'Органические методы защиты от вредителей',
      excerpt: 'Экологически безопасные способы борьбы с болезнями',
      date: '5 августа 2024',
      image: '/img/6603adcd-674a-4f7d-a83c-7a5368739fd1.jpg'
    }
  ];

  const detailedTreatmentSchedule = [
    {
      month: 'Март',
      period: 'Ранняя весна',
      temperature: '-5°C до +5°C',
      treatments: [
        {
          type: 'Фунгицид',
          name: 'Бордосская жидкость 3%',
          target: 'Профилактика грибковых заболеваний',
          timing: 'До распускания почек',
          priority: 'high'
        },
        {
          type: 'Инсектицид',
          name: 'Препарат 30 Плюс',
          target: 'Зимующие стадии вредителей',
          timing: 'При температуре выше 0°C',
          priority: 'medium'
        }
      ]
    },
    {
      month: 'Апрель',
      period: 'Набухание почек',
      temperature: '+5°C до +15°C',
      treatments: [
        {
          type: 'Фунгицид',
          name: 'Хорус + Актара',
          target: 'Монилиоз, серая гниль',
          timing: 'Зеленый конус',
          priority: 'high'
        },
        {
          type: 'Инсектицид',
          name: 'Калипсо',
          target: 'Тля, трипсы',
          timing: 'При обнаружении вредителей',
          priority: 'medium'
        }
      ]
    },
    {
      month: 'Май',
      period: 'Цветение',
      temperature: '+15°C до +20°C',
      treatments: [
        {
          type: 'Фунгицид',
          name: 'Скор',
          target: 'Антракноз, пятнистости',
          timing: 'Перед цветением',
          priority: 'high'
        },
        {
          type: 'Биопрепарат',
          name: 'Фитоверм',
          target: 'Паутинный клещ',
          timing: 'Во время цветения (безопасно для пчел)',
          priority: 'medium'
        }
      ]
    },
    {
      month: 'Июнь',
      period: 'Завязывание плодов',
      temperature: '+18°C до +25°C',
      treatments: [
        {
          type: 'Фунгицид',
          name: 'Строби + Топаз',
          target: 'Мучнистая роса, альтернариоз',
          timing: 'После цветения',
          priority: 'high'
        },
        {
          type: 'Инсектицид',
          name: 'Конфидор Экстра',
          target: 'Дрозофила, листовертка',
          timing: 'При превышении ЭПВ',
          priority: 'medium'
        }
      ]
    },
    {
      month: 'Июль',
      period: 'Созревание ягод',
      temperature: '+20°C до +28°C',
      treatments: [
        {
          type: 'Биофунгицид',
          name: 'Алирин-Б',
          target: 'Серая гниль плодов',
          timing: 'Каждые 10-14 дней',
          priority: 'high'
        },
        {
          type: 'Инсектицид',
          name: 'Актеллик (до сбора за 20 дней)',
          target: 'Вишневая муха',
          timing: 'При массовом лете',
          priority: 'high'
        }
      ]
    },
    {
      month: 'Август',
      period: 'Сбор урожая',
      temperature: '+18°C до +30°C',
      treatments: [
        {
          type: 'Биопрепарат',
          name: 'Триходермин',
          target: 'Корневые гнили',
          timing: 'После сбора урожая',
          priority: 'medium'
        },
        {
          type: 'Инсектицид',
          name: 'Только биопрепараты',
          target: 'Безопасность продукции',
          timing: 'Весь период сбора',
          priority: 'high'
        }
      ]
    },
    {
      month: 'Сентябрь',
      period: 'Подготовка к зиме',
      temperature: '+10°C до +20°C',
      treatments: [
        {
          type: 'Фунгицид',
          name: 'Абига-Пик',
          target: 'Профилактика болезней хранения',
          timing: 'После окончания вегетации',
          priority: 'medium'
        },
        {
          type: 'Инсектицид',
          name: 'Профилактин МКЭ',
          target: 'Подготовка к зимовке вредителей',
          timing: 'Перед листопадом',
          priority: 'low'
        }
      ]
    }
  ];

  const fungicideRotation = [
    {
      group: 'Контактные',
      activeSubstance: 'Медь сернокислая',
      drugs: ['Бордосская жидкость', 'ХОМ', 'Абига-Пик'],
      resistance: 'Низкий риск',
      frequency: 'До 4 раз за сезон'
    },
    {
      group: 'Триазолы',
      activeSubstance: 'Дифеноконазол',
      drugs: ['Скор', 'Раёк', 'Плантенол'],
      resistance: 'Высокий риск',
      frequency: 'Не более 2 раз подряд'
    },
    {
      group: 'Стробилурины', 
      activeSubstance: 'Азоксистробин',
      drugs: ['Строби', 'Квадрис', 'Амистар'],
      resistance: 'Высокий риск',
      frequency: 'Не более 1 раза за сезон'
    },
    {
      group: 'Биопрепараты',
      activeSubstance: 'Bacillus subtilis',
      drugs: ['Алирин-Б', 'Гамаир', 'Фитоспорин'],
      resistance: 'Отсутствует',
      frequency: 'Без ограничений'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Icon name="Grape" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">BlueberryMed</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#diagnosis" className="text-gray-600 hover:text-primary font-medium">Диагностика</a>
              <a href="#database" className="text-gray-600 hover:text-primary font-medium">База болезней</a>
              <a href="#blog" className="text-gray-600 hover:text-primary font-medium">Блог</a>
              <a href="#schedule" className="text-gray-600 hover:text-primary font-medium">График обработок</a>
            </nav>
            <Button className="bg-primary text-white hover:bg-primary/90">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Диагностика болезней голубики
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                ИИ-система для определения заболеваний по фотографии. 
                Получите точный диагноз и план лечения за минуты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Camera" size={20} className="mr-2" />
                  Загрузить фото
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Изучить базу
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1134a526-7d35-4601-bfc2-e33008f51107.jpg" 
                alt="Здоровые кусты голубики"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900">87% точность</div>
                    <div className="text-sm text-gray-600">диагностики ИИ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="diagnosis" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="diagnosis">Диагностика</TabsTrigger>
            <TabsTrigger value="database">База болезней</TabsTrigger>
            <TabsTrigger value="blog">Блог</TabsTrigger>
            <TabsTrigger value="schedule">График обработок</TabsTrigger>
          </TabsList>

          {/* Diagnosis Tab */}
          <TabsContent value="diagnosis" id="diagnosis">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Upload" size={24} className="text-primary" />
                    <span>Загрузка фотографии</span>
                  </CardTitle>
                  <CardDescription>
                    Сфотографируйте пораженные листья или ягоды для анализа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      {selectedImage ? (
                        <img src={selectedImage} alt="Загруженное фото" className="max-w-full h-48 object-cover mx-auto rounded" />
                      ) : (
                        <>
                          <Icon name="ImagePlus" size={48} className="mx-auto text-gray-400 mb-4" />
                          <p className="text-gray-500">Перетащите фото или нажмите для выбора</p>
                        </>
                      )}
                    </div>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      className="w-full"
                    />
                    <Button className="w-full" disabled={!selectedImage || isAnalyzing}>
                      {isAnalyzing ? (
                        <>
                          <Icon name="Loader" size={16} className="mr-2 animate-spin" />
                          Анализирую...
                        </>
                      ) : (
                        <>
                          <Icon name="Search" size={16} className="mr-2" />
                          Начать диагностику
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Activity" size={24} className="text-green-500" />
                    <span>Результат анализа</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isAnalyzing ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Brain" size={16} className="text-primary" />
                        <span className="text-sm">Анализирую изображение...</span>
                      </div>
                      <Progress value={65} className="w-full" />
                      <p className="text-sm text-gray-500">Сравниваю с базой из 1,247 заболеваний</p>
                    </div>
                  ) : diagnosisResult ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-red-900">{diagnosisResult.disease}</h3>
                            <p className="text-sm text-red-700">{diagnosisResult.description}</p>
                          </div>
                          <Badge variant="outline" className="border-red-300 text-red-700">
                            {diagnosisResult.confidence}% точность
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <Icon name="AlertTriangle" size={20} className="mx-auto text-orange-500 mb-1" />
                          <div className="text-sm font-medium">Серьезность</div>
                          <div className="text-orange-700">{diagnosisResult.severity}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <Icon name="Pill" size={20} className="mx-auto text-green-500 mb-1" />
                          <div className="text-sm font-medium">Лечение</div>
                          <div className="text-green-700">{diagnosisResult.treatment}</div>
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать план лечения
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Icon name="Microscope" size={48} className="mx-auto mb-4 text-gray-300" />
                      <p>Загрузите фотографию для начала диагностики</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Database Tab */}
          <TabsContent value="database" id="database">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">База данных заболеваний</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Полная коллекция болезней голубики с фотографиями, симптомами и методами лечения
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Все (247)</Badge>
                <Badge variant="outline">Грибковые (156)</Badge>
                <Badge variant="outline">Бактериальные (43)</Badge>
                <Badge variant="outline">Вирусные (31)</Badge>
                <Badge variant="outline">Дефициты питания (17)</Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diseases.map((disease) => (
                  <Card key={disease.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="relative h-48 mb-3">
                        <img 
                          src={disease.image} 
                          alt={disease.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                        <Badge 
                          className={`absolute top-2 right-2 ${
                            disease.severity === 'Критическая' ? 'bg-red-500' :
                            disease.severity === 'Высокая' ? 'bg-orange-500' : 'bg-yellow-500'
                          } text-white`}
                        >
                          {disease.severity}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{disease.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mr-2">{disease.type}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Основные симптомы:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {disease.symptoms.map((symptom, index) => (
                              <li key={index} className="flex items-center">
                                <Icon name="Dot" size={12} className="mr-1" />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="outline" className="w-full">
                          <Icon name="BookOpen" size={16} className="mr-2" />
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" id="blog">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Экспертный блог</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Статьи от агрономов и специалистов по выращиванию голубики
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Button variant="ghost" size="sm">
                          Читать далее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Загрузить еще статьи
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Treatment Schedule Tab */}
          <TabsContent value="schedule" id="schedule">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Детальный график обработок</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Профессиональный календарь фунгицидных и инсектицидных обработок с учетом фенофаз растений
                </p>
              </div>

              {/* Detailed Schedule */}
              <div className="space-y-6">
                {detailedTreatmentSchedule.map((monthData, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-xl">{monthData.month}</CardTitle>
                          <CardDescription className="text-base">{monthData.period} • {monthData.temperature}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {monthData.treatments.length} обработки
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {monthData.treatments.map((treatment, treatIndex) => (
                          <div key={treatIndex} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge className={
                                treatment.type === 'Фунгицид' ? 'bg-blue-500' :
                                treatment.type === 'Инсектицид' ? 'bg-green-500' :
                                'bg-purple-500'
                              }>
                                {treatment.type}
                              </Badge>
                              <Badge variant={treatment.priority === 'high' ? 'destructive' : 'outline'}>
                                {treatment.priority === 'high' ? 'Критично' : 
                                 treatment.priority === 'medium' ? 'Важно' : 'Рекомендуется'}
                              </Badge>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900">{treatment.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{treatment.target}</p>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-500">
                              <Icon name="Clock" size={14} className="mr-1" />
                              {treatment.timing}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Resistance Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Shield" size={24} className="text-orange-500" />
                    <span>Антирезистентная стратегия</span>
                  </CardTitle>
                  <CardDescription>
                    Ротация препаратов для предотвращения развития резистентности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {fungicideRotation.map((group, index) => (
                      <div key={index} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">{group.group}</h4>
                          <Badge variant={group.resistance === 'Отсутствует' ? 'default' : 
                                        group.resistance === 'Низкий риск' ? 'secondary' : 'destructive'}>
                            {group.resistance}
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-gray-600">
                          <p><span className="font-medium">Действующее вещество:</span> {group.activeSubstance}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-1">Препараты:</p>
                          <div className="flex flex-wrap gap-1">
                            {group.drugs.map((drug, drugIndex) => (
                              <Badge key={drugIndex} variant="outline" className="text-xs">
                                {drug}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-sm">
                          <Icon name="AlertCircle" size={14} className="inline mr-1" />
                          <span className="font-medium">Ограничения:</span> {group.frequency}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Conditions */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Thermometer" size={20} className="text-blue-500" />
                      <span>Погодные условия</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Температура</span>
                      <span className="font-medium">+15°C до +25°C</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Влажность</span>
                      <span className="font-medium">60-80%</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Ветер</span>
                      <span className="font-medium">Не более 3 м/с</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Время суток</span>
                      <span className="font-medium">6-10 или 18-22</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Droplets" size={20} className="text-green-500" />
                      <span>Нормы расхода</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Молодые кусты</span>
                      <span className="font-medium">200-300 л/га</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Взрослые кусты</span>
                      <span className="font-medium">400-600 л/га</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Размер капли</span>
                      <span className="font-medium">150-250 мкм</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>pH раствора</span>
                      <span className="font-medium">6.0-7.0</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Calendar" size={20} className="text-orange-500" />
                      <span>Сроки ожидания</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="font-medium text-red-900">Контактные</h4>
                      <p className="text-sm text-red-700">3-7 дней до сбора</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <h4 className="font-medium text-yellow-900">Системные</h4>
                      <p className="text-sm text-yellow-700">14-21 день до сбора</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Биопрепараты</h4>
                      <p className="text-sm text-green-700">1-3 дня до сбора</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Grape" size={24} className="text-primary" />
                <h3 className="text-lg font-bold">BlueberryMed</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная система диагностики заболеваний голубики 
                с использованием искусственного интеллекта.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Сервисы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Диагностика ИИ</a></li>
                <li><a href="#" className="hover:text-white">База заболеваний</a></li>
                <li><a href="#" className="hover:text-white">Экспертные консультации</a></li>
                <li><a href="#" className="hover:text-white">Мобильное приложение</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Справочники</a></li>
                <li><a href="#" className="hover:text-white">Календарь работ</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@blueberrymed.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-0123</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 BlueberryMed. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;