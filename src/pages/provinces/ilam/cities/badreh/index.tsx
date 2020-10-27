import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-06"].cities["IR-0604"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        gardening: "باغداری",
        agriculture: "زراعت",
        birds: "طیور",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        fisheries: "شیلات",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان بدره با 630کیلومتر مربع مساحت و بیش از 18 هزار نفر جمعیت به
            فاصله 85 کیلومتری در جنوب شرقی مرکز استان ایلام واقع‌شده که از جنوب
            با شهرستان آبدانان و دهلران، از شمال با شهرستان سیروان وکوهدشت، از
            غرب با شهرستان ملکشاهی و ایلام و از شرق با شهرستان دره‌شهر همسایه
            است. شکل زیر موقعیت شهرستان بدره را نشان می‌دهد.
          </p>
          <p>
            این شهرستان دارای طبیعتی کوهستانی است و 80 درصد شهرستان را جنگل‌های
            بلوط پوشانده‌است. ميزان نزولات جوي دراين شهرستان بين 400 تا500
            ميليمتر متغير بوده وتعداد ماه‌هاي خشك منطقه از نيمه دوم ارديبهشت ماه
            لغايت نيمه دوم مهرماه است. شهرستان بدره درسال1392 از شهرستان دره‌شهر
            جداشد وتاسیس گردید. این شهرستان دارای 2 بخش، 4 دهستان و 27 روستا
            است.
          </p>
          <p>
            وجود کبیرکوه و روخانه سیمره باعث خلق جاذبه های طبیعی بسیار زیبایی در
            شهرستان بدره در جنوب استان ایلام شده، شهرستانی که حالا به واسطه بعضی
            از جاذبه های طبیعی مورد استقبال گردشگران خارجی هم قرار می گیرد.در
            فصل تابستان این شهرستان با داشتن جاذبه هایی مثل روستای هدف گردشگری
            «کلم»، آبشارهای دربند، تنگه کافرین و...مورد استقبال بسیاری از
            گردشگران بومی و سایر مناطق کشور نیز قرار می گیرد.
          </p>
          <p>
            کسب و کار اصلی مردم شهرستان بدره کشاورزی و دامداری است. در خصوص
            وضعیت آبی شهرستان می‌توان گفت که شهرستان بدره شهرستان پرآبی است و
            منابع آبی آن شامل رودخانه سیمره، سد سیمره، رودخانه‌های فصلی،چشمه‌ها
            و چاه‌ها است.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان بر مبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها
            به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار هم‌پوشاني
            اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح می‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان
            سپیدان ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان‌طوري‌كه در قسمت قبل اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری از مشاغل اصلی مردم شهرستان بدره محسوب می‌شود. دامداری صنعتی
            سهم بیشتری را در این حرفه به خود اختصاص داده است؛ اما دامداری صنعتی
            بزرگ در شهرستان وجود ندارد. درصدی از دامداری هم به صورت نیمه صنعتی
            انجام می‌شود. دام هایی که پرورش داده می شود شامل دام سبک و سنگین است
            که دام سبک به میزان بیشتری وجود دارد. تولید شیر و گوشت از اهداف
            دامداری شهرستان است و شهرستان در این زمینه خودکفا است.
          </p>
          <p>
            بیشتر نژادهای دامی شهرستان بدره محلی هستند و علاوه بر آن گاوهای
            هلشتاین هم وجود دارد. در خصوص دام های سبک اصلاح نژاد شده باید گفت بز
            سانن در این شهرستان خیلی خوب جواب می‌دهد. اما متاسفانه این نژاد برای
            شهرستان در دسترس نیست. به این معنا که در نزدیکی شهرستان بدره مکانی
            برای پرورش بز سانن وجود ندارد و دامدار برای خرید این نوع از دام باید
            به شهرهایی مانند تهران برود که فاصله زیادی با شهرستان بدره دارند.
          </p>
          <p>
            در خصوص زنبورداری نیز می‌توان گفت که این شغل در شهرستان بدره انجام
            می‌شود و رونق خوبی داشته و قابلیت توسعه دارد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            همانطورکه گفته‌شد کشاورزی شغل اصلی مردم شهرستان بدره است که بیشتر به
            صورت مکانیزه انجام می شود. باغداری و زراعت جایگاه خوبی در کشاورزی
            شهرستان بدره دارند که البته باغداری مزیت برتری در شهرستان دارد و
            بسیار خوب جواب می‌دهد. لازم به ذکراست که درصورت راه‌اندازی سد سیمره
            می‌توان در زمینه گسترش باغداری فعالیت کرد.
          </p>
          <p>
            انگور و انجیر عمده محصولات باغی شهرستان را تشکیل می دهند. در صورت
            وجود آب، کشت انگور و انجیر بسیار عالی جواب می‌دهد. گردو، انار، پسته،
            آلو، هلو، طالبی، خیار و زرشک نیز محصولاتی هستند که در اولویت بعد از
            انگور و انجیر قرار می‌گیرند و گسترش کشت آنها در شهرستان نتیجه خوبی
            خواهد داشت.
          </p>
          <p>
            یک گلخانه خیلی بزرگ در خصوص کشت صیفی جات در حال ساخت است و به صورت
            کلی به نظر می‌رسد وجود گلخانه صیفی جات در شهرستان حتما جواب خواهد
            داد.
          </p>
          <p>
            محصولاتی مانند سبزیجات، گوجه، لیموشیرین، لیموترش، زردآلو، زیتون و
            بادام نیز قابلیت کشت گسترده‌تر را دارند اما نسبت به محصولاتی که در
            بالا ذکرشد مزیت کمتری دارند.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            گندم و جو عمده محصولات زراعی را تشکیل می دهند و بعد از آن‌ها حبوباتی
            مانند عدس و نخود نیز به مقدار زیاد کشت می‌شوند. زعفران نیز از
            محصولات قابل توسعه در شهرستان بوده که خوب جواب می‌دهد.
          </p>
          <p>
            برنج، سیر و لوبیا نیز محصولاتی هستند که توسط مردم کشت می‌شوند. البته
            کشت برنج به صورت محلی و در مکان‌هایی که وضعیت آبی خوب است رونق دارد.
            کشت سیر نیز به اندازه مصرف خود شهرستان انجام می‌شود که قابلیت توسعه
            و تولید بیشتر تمامی این محصولات وجود دارد.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            بیشترین تعداد طیور شهرستان را مرغ گوشتی به خود اختصاص داده است. حدود
            20تا 25مرغداری صنعتی در شهرستان بدره وجود دارد که از این میان تنها
            یک مرغداری، پرورش مرغ تخم‌گذار را انجام می دهد. طبق بررسی‌های
            انجام‌شده، شهرستان شرایط مناسبی برای پرورش مرغ گوشتی دارد و امکان
            سرمایه‌گذاری در این زمینه وجود دارد. پرورش طیوری همچون بوقلمون و
            بلدرچین نیز در شهرستان جواب می‌دهد و احداث واحدهای پرورش چنین طیوری
            درآمدزایی خوبی خواهد داشت.
          </p>
          <p>
            پرورش شترمرغ و مرغ تخم‌گذار هم قابلیت گسترش دارند هرچند که نسبت به
            طیور گفته شده مزیت پایین تری دارند.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            صنایع تبدیلی و تکمیلی خاصی در شهرستان در خصوص تولیدات کشاورزی و دامی
            وجود ندارد در نتیجه صنایع تبدیلی گزینه شغلی خوبی برای شهرستان محسوب
            می‌شود.
          </p>
          <p>
            احداث کشتارگاه صنعتی دام وکشتارگاه مخصوص مرغ از نیازهای شهرستان است.
            با وجود دامداری زیاد، فرآوری پوست دام به منظور ایجاد صنعت تولید چرم
            از پوست گاو و تولید نخ از پوست گوسفند و بز می تواند سودآوری خوبی
            داشته باشد.البته وجود صنعت بسته‌بندی برای گوشت نیز می تواند در بین
            مردم شهرستان یا خارج از شهرستان بازار فروش خوبی پیدا‌کند. همچنین
            وجود سردخانه برای محصولات باغی از ملزومات شهرستان است.(شهرستان در
            حال حاضر سردخانه ندارد). توجه به یک نکته ضروری است که احداث واحد
            تولید چرم و نخ نیازمند بررسی بازار فروش، تأمین مواد اولیه و کیفیت
            محصولات تولیدی است.
          </p>
          <p>
            با توجه به کشت خوب حبوبات، بسته بندی حبوبات برای فروش می‌تواند گزینه
            شغلی خوبی باشد. زنبورداری در شهرستان رونق خوبی دارد و درحال حاضر
            کسب‌و کارهایی مانند تهیه موم و کندوی زنبور عسل و بسته‌بندی عسل انجام
            نمی‌شود؛ بنابراین راه اندازی چنین کسب و کارهایی سودده و موفق خواهد
            بود. پرورش زنبورعسل در شهرستان می تواند پیشرفت خوبی را در زمینه سایر
            صنایع تبدیلی و تکمیلی مربوط به آن، مانند تولید زهر از زنبور عسل و ژل
            رویال رقم بزند. البته این موارد در اولویت‌های آخر مزیت‌های شغلی این
            حوزه قرار می‌گیرند.
          </p>
          <p>
            پرورش مرغ گوشتی به میزان قابل قبول و مناسب، شرایط را برای ایجاد صنعت
            بسته بندی گوشت مرغ فراهم کرده است. لازم به ذکر است درصورت افزایش
            واحدهای پرورش بوقلمون ، بلدرچین، شترمرغ و همچنین افزايش واحدهای
            پرورش ماهی و واردات در این خصوص، زمینه ایجاد واحدهایی برای بسته‌بندی
            گوشت بلدرچین، بوقلمون، شترمرغ، ماهی و بسته‌بندی تخم بلدرچین و تخم
            شترمرغ نیز فراهم می شود. البته امکان راه‌اندازی کسب‌وکارهای دیگری
            مانند فرآوری پر و پوست شترمرغ و تولید روغن شترمرغ نیز در صورت افزایش
            واحدهای فرآوری آن وجود دارد. پرشترمرغ کیفیت بی نظیری دارد و برای
            تزئین لباس و ساخت وسایلی مانند گردگیر و تمیزکننده سطوح استفاده
            می‌شود. از پوست شترمرغ نیز چرمی خارق‌العاده به دست می‌آید که می‌توان
            آن را با پوست تمساح در یک تراز قرار داد. خواص دارویی روغن شترمرغ نیز
            برای کسی پوشیده نیست.
          </p>
          <p>
            مواردی که اخیرا گفته شد در اولویت پایین تری نسبت به بسته بندی گوشت
            مرغ قرار می‌گیرند. در زمینه صنعت بسته‌بندی، بسته بندی غلات نیز با
            وجود مقدار زیاد گندم و جو پیشنهاد می‌شود.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            با توجه به رونق کشاورزی در شهرستان و تولیدات زراعی و باغی خوبی که
            انجام می‌شود؛ وجود صنایع غذایی، لازم و ضروری است. این صنایع
            می‌توانند از فروش فله‌ای تولیدات کشاورزی جلوگیری و نقش دلالان را در
            این بین کمرنگ کنند.
          </p>
          <p>
            با توجه به این که انگور تقریبا میزان تولید زیادی در شهرستان دارد و
            فراوری خاصی روی آن صورت نمی‌گیرد ایجاد واحدی برای فراوری انگور به
            منظور تولید شیره انگور، سرکه انگور و کشمش سودآوری و بازار خوبی خواهد
            داشت. همچنین تولید عمده گندم و جو زمینه را برای تولید آرد، نان،
            شیرینی و رشته آشی و پلویی فراهم کرده‌است.
          </p>
          <p>
            در زمینه صنایع غذایی مربوط به دامداری می توان تولید سوسیس و کالباس و
            تولید لبنیات را به دلیل وجود گوشت و شیر زیاد در شهرستان دارای مزیت
            دانست.لازم به ذکر است کسب‌وکارهای گفته شده دارای مزیتی یکسان هستند.
          </p>
          <p>
            باوجود تنوع در تولید میوه‌ها، احداث واحدهایی برای تولید میوه خشک،
            آبمیوه و چیپس میوه نیز قابل سرمایه‌گذاری خواهد بود. به نظر می‌رسد
            مقدار انار موجود در شهرستان به اندازه‌ای هست که بتوان از طریق تولید
            رب انار درآمدزایی داشت. همچنین وجود مقدار مناسب زرشک، خیار و زعفران
            شرایط را برای ایجاد واحدهای فرآوری زرشک، تولید خیارشور و فرآوری
            زعفران ایجاد کرده است. با توجه به مقدار قابل ملاحظه کشت نخود در
            شهرستان بدره فرآوری نخود مانند تولید لپه و نخودچی پیشنهاد می شود.
            همانطورکه در بالا به محصولات باغی مانند پسته، گردو وبادام اشاره شد
            تولید خشکبار مانند آجیل و بسته بندی آن مورد استقبال واقع خواهد شد
            چراکه شرایط انجام آن فراهم بوده و درآمدزایی خوبی هم دارد.
          </p>
          <p>
            سایر تولیدات باغی در صورتی که به صورت گسترده‌تری کشت شوند می‌توانند
            موقعیت‌های شغلی خوبی برای منطقه رقم بزنند. مشاغلی مانند تولید
            آبلیمو، ترشیجات و شوریجات،کمپوت، تولید سبزی خشک و بسته‌بندی آن
            ،تولید رب گوجه فرنگی، مربا، کنسانتره، شهد و روغن زیتون و ترشی آن از
            این دست هستند. البته این مشاغل نسبت به مشاغل قبل اولویت پایین‌تری را
            به خود اختصاص می‌دهند.
          </p>
          <p>
            در خصوص دیگر فرآورده های دام و طیور نیز می توان تولید شیرخشک، ژلاتین
            و ناگت گوشت و مرغ را پیشنهاد داد که برای راه‌اندازی آن‌ها باید به
            پارامترهایی مانند بازار فروش، میزان فاصله از شهرهای بزرگ و تأمین
            مواداولیه توجه کرد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی یکی از مشاغل رایج شهرستان بدره است که رونق خوبی دارد و می
            توان آن را گسترش داد. پرورش ماهیان گرمابی و سردابی در شهرستان بدره
            جوابگو است. در این شهرستان، پرورش ماهی به شیوه‌های پرورش ماهی در قفس
            و پرورش ماهی در استخرهای مصنوعی انجام می‌شود. البته با در نظرگرفتن
            شرایط آب‌و‌هوایی در شش ماه اول سال، پرورش ماهی کپور و در شش ماه دوم
            سال، پرورش ماهی شردآبی (قزل‌آلا) انجام می‌شود.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            مردم شهر بدره به مشاغل خدماتی مانند مغازه‌داری نیز اشتغال دارند؛ اما
            ظاهرا بومگردی علی‌رغم وجود جاذبه‌های تاریخی و طبیعی بسیار در شهرستان
            و وجود گردشگران فراوان، جایگاه ویژه‌ای پیدا نکرده است. با این وجود
            سرمایه‌گذاری در این حوزه می‌تواند باعث ایجاد کسب‌وکارهای سودآور شود.
            در رابطه با بومگردی لازم است به این نکته اشاره شود که فعالیت‌هایی در
            این حوزه صورت گرفته‌است وحتی اقامتگاه‌های بومگردی نیز در شهرستان
            وجود دارد اما باتوجه به ظرفیت بالای شهرستان در خصوص گردشگری باز هم
            قابلیت توسعه در این زمینه وجود دارد.
          </p>
          <p>
            شهرستان بدره سینما و شهربازی ندارد اما احداث چنین مکان‌هایی خصوصا
            شهربازی با استقبال خوب مردم روبه‌رو خواهدشد و درآمدزایی خوبی
            خواهدداشت.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            قالی از جمله تولیدات صنایع‌دستی شهرستان است که دارای برند بوده و به
            میزان گسترده‌تری نسبت به سایر صنایع‌دستی تولید می‌شود. به‌بافی یک
            نوع قالی است که به صورت خانگی در شهرستان تولید می شود. البته در کنار
            افزایش تولید قالی به بازاریابی در خصوص فروش آن نیز باید توجه ویژه‌ای
            داشت. گلیم‌بافی و جاجیم‌بافی نیز جایگاه خوبی در شهرستان بدره دارند و
            می توان در این زمینه فعالیت کرد. البته قابلیت پیشرفت در انجام آن‌ها
            همانند قالی‌بافی نیست.
          </p>
          <p>
            حصیربافی، چیت‌بافی، معرق‌کاری ، ساخت آینه‌های سنتی و نمدمالی نیز در
            شهرستان انجام می‌شود. حصیر‌بافی، چیت‌بافی و نمدمالی با فرهنگ‌سازی
            صورت گرفته، دوباره در حال جا افتادن است. البته معرق‌کاری و ساخت
            آینه‌های سنتی نیز از جمله کسب‌وکارهای مورد استقبال مردم خواهد بود.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            بررسی های انجام شده نشان می‌دهد صنعت جایگاه قابل توجهی میان مشاغل
            مردم ندارد. وجود تعداد کم کارخانه‌ها و کارگاه‌ها تاییدی بر این مطلب
            است. اما تولید آجر با توجه به قابلیت خاک شهرستان قابلیت سرمایه‌گذاری
            دارد. ایجاد کارگاه‌های بلوک‌زنی نیز با توجه به وجود معادن شن و ماسه
            قابلیت سرمایه‌گذاری دارند؛ هرچند که تعداد کمی کارگاه بلوک‌زنی در
            شهرستان وجود دارد. در صورت وجود سرمایه ایجاد واحد یا واحدهایی برای
            تولید پوشاک نیز مقرون به صرفه به نظر می‌رسد. وجود صنعت کارتن سازی و
            سبدسازی نیز با توجه به رونق کشاورزی در شهرستان و تولید محصولات متنوع
            می‌تواند واردات را در این زمینه کمرنگ کند.
          </p>
          <p>
            کارخانه شن و ماسه، کارخانه خوراک دام(کار آسیاب و تولید کنسانتره را
            انجام می‌دهد)، کارخانه تولید بتن آماده و یک یا دو کارگاه تیرچه و
            بلوک صنایع فعال شهرستان بدره هستند.
          </p>
          <p>
            در ادامه تحليل، مشاغل در 10 رسته ذيل سه حوزه كشاورزي، صنعت و خدماتي
            دسته‌بندي شده‌است. در هريک از اين رسته‌ها عناوين شغلي، بر اساس مزيت
            راه‌اندازي، از شماره 1 تا 3 اولويت‌بندي شده‌اند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
