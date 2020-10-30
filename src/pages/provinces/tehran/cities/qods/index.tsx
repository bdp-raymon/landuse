import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-08"].cities["IR-0812"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        industry: "صنعت",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        gardening: "باغداری",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        livestock: "دامداری",
        agriculture: "زراعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان قدس یکی از شهرستانهای استان تهران است و در غرب شهر تهران و
            همسایگی استان البرز قرار دارد. وجود کارخانه ها، صنایع و معادن متعدد
            باعث شد در سال های اخیر مهاجرت های بسیاری با هدف اشتغال و کسب درآمد
            از شهرهای سراسر کشور به این منطقه صورت گیرد. در واقع شهرستان قدس به
            دلیل برخورداری از موقعیت های خاص و قرار گرفتن در مسیر ارتباطی تهران
            – کرج و همجواری با مناطق 18، 22 شهرداری تهران مورد توجه ویژه بوده و
            همین امر موجب رونق و شهرت بیشتر آن شده است.شهرستان قدس دارای اقلیم
            آب و هوایی معتدل و اقلیم جغرافیایی کویری است. جمعیت این شهرستان طبق
            سرشماری سال 1395، 316 هزار 636 نفر بوده است. شکل زیر موقعیت شهرستان
            قدس را نشان می دهد.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها
            به عنوان ورودي به نرم‌افزار داده‌شده و خروجي نرم‌افزار هم‌پوشاني اين
            دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين اولويت‌بندي‌ها
            توسط كارشناسان و افرادخبره هر شهرستان بازبيني و اصلاح مي‌شوند. يكي
            از منابع تحليل همين ليست مزيت‌سنجي اصلاح‌شده‌است. يكي ديگر از منابع
            تحليل، مصاحبه با كارشناسان و متخصصين حوزه اشتغال هر شهرستان است. در
            هر شهرستان با حداقل 3 نفر از اين افراد مصاحبه انجام مي‌شود. اين
            مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در صورت وجود تناقض و ابهام
            بين اين 3 مصاحبه و ليست مزيت‌سنجي، مصاحبه‌هاي تكميلي و حتي مصاحبه
            بيشتر هم صورت مي‌گيرد تا تيم تحليل به نتيجه نهايي مطلوب دست‌يابد.
            بنابراين خروجي هر شهرستان از تجميع مصاحبه‌ها و ليست مزيت‌سنجي حاصل
            مي‌شود. در ادامه تحليل شهرستان قدس ارائه‌شده‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همانطوريكه در قسمت مقدمه اشاره‌شده مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به
            ترتيب اولويت مشخص شده‌است. در تحليل به مشاغل موجود، مشاغل قابل توسعه
            و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد آن‌ها در
            شهرستان وجوددارد، اشاره شده‌است. مزيت‌هاي شغلي به ترتيب اولويت در
            ادامه آورده شده‌است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است و ظرفیت های
            بسیار خوبی برای احداث صنایع مختلف در مناطق گوناگون کشور وجود دارد که
            می توان از آن ها بهره گرفت و تاثیر بسزایی در رشد اقتصادی کشور داشت.
            شهرستان قدس، شهرستانی صنعتی است که صنایع بسیاری را در خود جای داده
            است اما بررسی های انجام شده نشان می دهد همچنان قابلیت احداث واحدهای
            جدید صنعتی نیز وجود دارد.{" "}
          </p>
          <p>
            احداث واحد صنعتی تولید کفش از جمله ظرفیت های شغلی در این شهرستان
            است. در کشور ما کفش های موجود در بازار به صورت وارداتی و یا عمدتا به
            صورت تولیدات کارگاهی می باشد. در روش تولید کارگاهی به دلیل استفاده
            از نیروی انسانی بیشتر و انجام کارها به صورت دستی هم قیمت تمام شده
            کفش افزایش می یابد و از طرفی هم به دلیل خطاهای انسانی، کیفیت و
            زیبایی کفش به صورت یکنواخت نیست و یک مدل کفش با کیفیت های مختلفی
            تولید می شود. در صورتی که اگر خط تولید کفش به صورت صنعتی باشد ضمن
            بالا بردن سرعت تولید، بسیاری از هزینه ها کاهش یافته و از طرفی به
            دلیل استفاده از دستگاه های پیشرفته و اتوماتیک، کیفیت بالا و یکسانی
            در همه کفش ها ایجاد می شود.
          </p>
          <p>
            سرمایه گذاری در زمینه تولید انواع صنایع چوبی از جمله فعالیت های
            سوددهی است که قابلیت انجام آن در شهرستان قدس وجود دارد. در این خصوص
            می توان کالاهایی همچون مبلمان، میز و صندلی، MDF، کابینت و درب و
            پنجره تولید کرد. البته در حال حاضر نیز واحدهای تولید صنایع چوبی
            مانند مبل، MDF و کابینت وجود دارند.{" "}
          </p>
          <p>
            در شهرستان قدس معادنی همچون معادن سیمان، گچ و شن و ماسه وجود دارند و
            واحدهای فرآوری مواد استخراج شده از این معادن جهت تولید مصالح
            ساختمانی نیز موجود است؛ اما بررسی های انجام شده نشان می دهد می توان
            فعالیت بیشتری در زمینه تولید مصالح ساختمانی مانند گچ، سیمان، بلوک و
            بتن داشت.{" "}
          </p>
          <p>
            تولید پوشاک از دیگر کسب و کارهایی است که در حال حاضر به میزان زیادی
            انجام می شود و همچنان ظرفیت برای توسعه آن وجود دارد. نزدیک بودن به
            شهرستان های بزرگی مانند تهران و وجود سفارشات زیاد برای تولید پوشاک
            از سوی مناطق مختلف، امکان گسترش فعالیت در این زمینه این را فراهم
            کرده است.{" "}
          </p>
          <p>
            صنایع فعال این شهرستان عبارتند از: واحدهای تولید دارو، شن و ماسه،
            قطعات خودرو، پوشاک، MDF، کابینت، مبل، روغن و گریس، ملات، سیمان،
            آجرنسوز، گچ، بتن، تجهیزات پزشکی، شیشه، پلاستیک مخصوص گلخانه، لوازم
            گرمایشی و سرمایشی گلخانه، تجهیزات دندانپزشکی، لوازم بهداشتی ساختمان
            (کارخانه پارس طلوع)، خودرو آتش نشانی و پمپ شناور (صنایع پمپ حریق
            ایران)، پلت پلاستیکی صنعتی (کارخانه پلاسکو ایران)، ادوات کشاورزی،
            کود و سوم شیمیایی، کارتن، سبد، نخ، رنگرزی، نساجی، خودروسازی، سنگ
            شکن، پالایشگاه نفت، پلاستیک سازی و تزریقات پلاستیک (کارخانه تکنیک
            تهران)، چوب بری، چاپ فلزات، چاپ لباس های بچگانه، کارخانه پیشران
            تمکار (درخصوص آنت و سیستم های امنیتی) و شرکت هوا صنعت (تولید محصولات
            صنعتی و ابزارآلات مربوط به کشاورزی).{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. در شهرستان قدس نیز انواع مشاغل خدماتی انجام
            می شود و پتانسیل خوبی برای توسعه انجام این مشاغل وجود دارد.
          </p>
          <p>
            با توجه به اینکه در شهرستان قدس، ساخت و ساز زیاد صورت می گیرد و
            بازار فروش خوبی برای مصالح ساختمانی وجود دارد؛ احداث شرکتی جهت تهیه
            و توزیع مصالح ساختمانی مقرون به صرفه بوده و پیشنهاد می گردد.{" "}
          </p>
          <p>
            همچنین احداث شرکتی جهت ارائه خدمات منزل و یا خدمات پرستاری گزینه
            شغلی مناسبی در این شهرستان است که سودآوری خوبی به همراه دارد.
          </p>
          <p>
            خدمات خودرو، خدمات ساختمانی، خدمات چاپ، تعمیر لوازم منزل و خیاطی از
            دیگر مشاغل خدماتی هستند که از صرفه اقتصادی خوبی برخوردار هستند و می
            توان نسبت به انجام آن ها اقدام کرد.
          </p>
          <p>
            احداث شهربازی از دیگر ظرفیت های شغلی این شهرستان است؛ در حال حاضر
            شهربازی بزرگ و مجهزی در این شهرستان وجود ندارد و فعالیت در این زمینه
            سودده خواهد بود.{" "}
          </p>
          <p>
            آرایشگری، فیلم برداری، عکاسی و راه اندازی سوپرمارکت از دیگر مشاغل
            خدماتی هستند که قابلیت انجام در شهرستان قدس را دارند.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنايع دستي به آن گروه از صنايعي گفته مي شود كه مهارت، ذوق و بينش
            انسان در آن نقش اساسي دارد و يا اينكه تمام يا بخش اعظم مراحل ساخت
            فراورده هاي آن با دست انجام گرفته و در چارچوب فرهنگ و بينش هر منطقه
            و با ديدگاه هاي قومي ساخته و پرداخته مي شود. صنايع دستي بازتابي از
            تاريخ تمدن هر ملت و قومي است و مي تواند انتشار مؤثري براي فرهنگ و
            سنن مناطق مختلف باشد.{" "}
          </p>
          <p>
            در شهرستان قدس انواعی از صنایع دستی تولید می شوند که در صورت
            بازاریابی صحیح ظرفیت های بسیار خوبی برای توسعه آن ها وجود دارد.
          </p>
          <p>
            بافت فرش و تابلو فرش از جمله فعالیت هایی است که در حوزه صنایع دستی
            این شهرستان انجام می شود و ظرفیت بسیار خوبی برای توسعه آن ها وجود
            دارد. فرش بافی از مشاغل خانگی پردرآمدی است که تسهیلات خوبی به آن
            تعلق می گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب
            می دانند چون در کنار کارهای روزمره می توانند به این کار بپردازند و
            درآمد خوبی کسب کنند. از آن جایی که فرش انواع مختلفی دارد می توان با
            آموختن دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و
            به بازار عرضه کرد. همچنین با تولید فرش با کیفیت می توان به صادرات در
            این زمینه فکر کرد. این کسب و کار را می توان در فضای کوچک و با سرمایه
            اولیه کم راه انداخت و با فروش محصول و افزایش مشتری، این کار را گسترش
            داد و زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            {" "}
            گلیم بافی از دیگر صنایع دستی شهرستان قدس است که در صورت تامین
            بازارفروش جای کار بسیار دارد؛ بررسی های انجام شده نشان می دهد افراد
            زیادی در زمینه بافت گلیم مهارت دارند.{" "}
          </p>
          <p>
            جوراب بافی از دیگر فعالیت هایی است که در این شهرستان انجام می شود و
            می توان در رابطه با انجام آن در سطح وسیع تر سرمایه گذاری و کسب درآمد
            کرد.
          </p>
          <p>
            عروسک سازی، گل سازی، چرم دوزی و معرق کاری از دیگر صنایع دستی شهرستان
            هستند که اگر با بازاریابی خوبی همراه باشند، توسعه آن ها صرفه اقتصادی
            بالایی دارد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی از جمله کسب و کارهایی است که در شهرستان قدس از رونق خوبی
            برخوردار است و امکان سرمایه گذاری گسترده تر در رابطه با توسعه آن
            وجود دارد. ماهی های پرورشی در این شهرستان از نوع قزل آلا و زینتی
            هستند. با اینکه ظرفیت لازم در زمینه پرورش ماهیان نام برده شده وجود
            دارد اما با درنظر گرفتن بازارفروش موجود برای هر دو نوع ماهی، پرورش
            ماهی قزل آلا از مزیت بالاتری برخوردار است.
          </p>
          <p>
            ماهیان سردآبی در محدوده دمایی 18-12 درجه سانتیگراد بهترین رشد را
            دارند. ماهی قزل آلا یکی از معروف ترین گونه های ماهیان سردآبی است.
            قزل آلا یکی از منابع خوب آهن است، آهن در خونسازی و همچنین در حفظ
            مقاومت بدن در برابر میکروبها نقش مهمی به عهده دارد. علاوه بر آن، آهن
            موجود در قزل آلا، جذب آهن منابع گیاهی را هم افزایش می دهد؛ بنابراین
            نقش مهمی در پیشگیری از کم خونی ناشی از فقر آهن به عهده دارد. نتایج
            مطالعات نشان می دهند امگا ۳ ماهی قزل آلا می تواند فشار خون و ضربان
            قلب را در بیماران صرع تنظیم کرده و از تعداد تشنج های آن به طور قابل
            توجهی بکاهد؛ بنابراین این نوع ماهی با توجه به قیمت و طعم مناسب
            طرفداران زیادی در بین مردم دارد؛ لذا راه اندازی پرورش آن، علاوه بر
            ایجاد اشتغال پایدار، سوددهی خوبی را خواهد داشت.
          </p>
          <p>
            شاید سال‌ها قبل نگهداری ماهیان زینتی، موضوع چندان شایعی نبود و تنها
            عده‌ی معدودی در خانه‌های خود، آكواريوم و ماهی زینتی نگهداری
            می‌کردند؛ اما در سال‌های اخیر، با توجه به رواج آپارتمان‌نشینی و دور
            افتادن انسان از طبیعت، شرایط به‌گونه‌ای رقم خورده است که بازار
            ماهیان زینتی رونق گرفته و زمینه‌ساز ایجاد مشاغل مختلف شده است.
            به‌طوری‌که امروزه شاهد آن هستیم در بسیاری از شهرها، چندین مغازه به
            خرید و فروش این آبزیان مشغول هستند. پرورش ماهیان زینتی نیاز به آب
            کمی دارد و می‌توان از آب‌های شهری برای تولید آنها استفاده کرد.
          </p>
          <p>
            لازم به ذکر است این شهرستان با توجه به موقعیت جغرافیایی و وجود معادن
            متعدد ظرفیت توسعه استخرهای دومنظوره پرورش ماهی را داراست.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغدرای یکی از حوزه های شغلی در شهرستان قدس است که به دلیل بافت شهری
            اکثر مناطق موجود در این شهرستان، رونق زیادی ندارد اما بررسی های
            انجام شده نشان می دهد می توان در زمینه احداث گلخانه فعالیت های بسیار
            خوبی داشت؛ همچنین قابلیت توسعه محصولات باغی تولیدی نیز در صورت وجود
            زمین کافی وجود دارد.
          </p>
          <p>
            در حال حاضر گلخانه هایی در زمینه تولید محصولاتی همچون میوه جات
            (مانند آلو و زردآلو)، صیفی جات (مانند خیار، گوجه و توت فرنگی، و
            گیاهان و نهال های زینتی وجود دارد که می توان نسبت به توسعه آن ها و
            تولید محصولات دیگری مانند سبزیجات به صورت گلخانه ای اقدام کرد.{" "}
          </p>
          <p>
            لازم به ذکر است محصولاتی همچون گوجه، خیار و سبزیجات در فضای آزاد نیز
            کاشته می شوند اما به نظر می رسد مزیتی برای توسعه تولید آن ها در فضای
            آزاد وجود نداشته باشد.{" "}
          </p>
          <p>
            گياهان براي داشتن رشد مطلوب نياز به شرايط خاصي از نظر شدت نور، دماي
            روزانه، دماي‌شبانه، ميزان رطوبت نسبي هوا و رطوبت خاک دارند. براي
            توليد و پرورش تجاري گياهان با کيفيت بالا و در تمام طول سال بايد
            شرايط محيطي مطلوب مهیا شده و عوامل خسارت زا نظير آفات و بیماری ها،
            باد، طوفان هاي ويرانگر، سرما و يخبندان و ...کنترل شوند. گلخانه محیطی
            است که به راحتی می توان در داخل آن شرایط محیطی را تحت کنترل درآورد و
            به سمت رشد مطلوب گیاه سوق داد. گلخانه‌ها که از نظر اندازه متغیرند
            گیاهان را از سرمای بیش از حد زمستان یا گرمای بیش از حد تابستان حفظ
            می‌کنند. کشاورزی در گلخانه ها نسبت به کشاورزی در فضای آزاد و در زمین
            های کشاورزی دارای دردسر و مشکلات کمتری است، به علاوه بازه ی زمانی
            برای به ثمر نشستن و برداشت محصولات نیز نسبت به کشاورزی سنتی، کوتاه
            تر است. اما با این وجود پرورش گلخانه ای محصولات نیز نیاز به مراقبت
            های خاص خود را دارد.
          </p>
          <p>
            پرورش قارچ از جمله کسب و کارهایی است که در حال حاضر انجام نمی شود
            اما قابلیت انجام آن وجود دارد و می توان در حد رفع نیاز شهرستان
            فعالیت کرد. میزان مصرف قارچ در سال های اخیر رشد خوبی داشته و سرانه
            مصرف بالا رفته است. مشتری داشتن این محصول از یک سو و غنی از پروتئین
            و ویتامین بودن آن از سوی دیگر، باعث شده که جایگزین مناسبی برای گوشت
            باشد. پرورش قارچ از شغل هایی است که می توان با سرمایه اولیه کم و
            محیط کوچک شروع کرد. یک دوره کامل پرورش قارچ 60 روز طول می کشد که
            قابلیت کاهش به 35 روز را دارد.
          </p>
          <p>
            سیب، آلو، گیلاس و آلبالو از جمله محصولات باغی این شهرستان هستند که
            همانطور در ابتدا اشاره شد، در صورت وجود فضای کافی می توان نسبت به
            توسعه باغات نام برده شده اقدام کرد.
          </p>
          <p> </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و کاهش وابستگی به درآمد های نفتی و عاملی مهم در توسعه
            پایدار امنیت غذایی محسوب می‌شود. ایجاد صنایع غذایی، علاوه بر
            اشتغالزایی، باعث ارتقای سطح درآمد ارزی می‌شود که کاهش هدررفت محصولات
            کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان ممکن می‌کند.
          </p>
          <p>
            در شهرستان قدس محصولات کشاورزی و دامی قابل توجهی تولید نمی شود اما
            با توجه به صنعتی بودن این شهرستان و وجود فضای کافی برای ایجاد صنایع
            مختلف و همچنین نزدیک بودن به بازارفروش های بزرگ مانند تهران و کرج،
            امکان احداث صنایع غذایی مختلف در صورت واردات مواداولیه از سایر
            شهرستان ها، وجود دارد.
          </p>
          <p>
            احداث واحد صنعتی تولید لبنیات از جمله ظرفیت های شغلی این شهرستان
            است؛ البته در حال حاضر نیز کارخانه تولید لبنیات در این شهرستان وجود
            دارد و شرط موفقیت راه اندازی واحد جدید، توانایی رقابت با این کارخانه
            و نشان های تجاری معروف در بازار است. شیر و فرآورده هاي آن از مهمترین
            اجزاي تشکیل دهنده جیره غذایی انسان است که از لحاظ ارزش غذایی از
            کلسیم، فسفر، ویتامین هاي مورد نیاز و پروتئین، غنی می‌باشد و همیشه
            استقبال بسیار خوبی از این نوع محصولات می شود.
          </p>
          <p>
            تولید کیک، کلوچه و بیسکوییت (در سطح خانگی و صنعتی)، شیرینی پزی، تهیه
            نان (سنتی، صنعتی و فانتزی) و تولید رشته آشی و پلویی (در سطح خانگی و
            سنتی) از دیگر فعالیت هایی هستند که قابلیت سرمایه گذاری دارند. البته
            تولید رشته آشی و پلویی در اولویت های بعدی مزیت های شغلی این حوزه
            قرار می گیرد. پخت شیرینی در ابعاد وسیع و کارگاهی و حتی در محیطی کوچک
            (در خانه) امکان پذیر است. شیرینی محصولی است که در انواع متفاوت و با
            طعم های متنوعی تهیه می شود. به علاوه این که با تغییر در مواد تشکیل
            دهنده آن می توان برای افراد رژیمی هم شیرینی تهیه کرده و این افراد را
            نیز به بازار هدف خود اضافه کرد. این کسب و کار را می توان با تجهیزات
            کم و سرمایه پایینی شروع کرد و در زمان کوتاه با فروش محصول به سود
            بالایی رسید. پخت شیرینی یکی از مشاغل زودبازده و یک فرصت شغلی مناسب
            مخصوصا برای زنان خانه دار محسوب می شود. یافتن بازار فروش محصول یکی
            از ضروریات این حرفه می‌باشد که با تبلیغات مناسب مخصوصا در فضای مجازی
            می توان به آن دست یافت . توجه به این نکته ضروری است که یکی از لازمه
            های موفقیت در این شغل گذراندن دوره های آموزشی مرتبط با پخت شیرینی
            است.
          </p>
          <p>
            امروزه شغل نانوایی یکی از مشاغل پایه‌ای و پر رونق است که در طول سال
            همیشه درآمدزا می باشد. نان محصولی است که با توجه به سلیقه یا نوع
            غذای مصرفی خانواده ها، همواره بر سر سفره ها قرار دارد. نان‌ها فقط به
            صورت نان های ساده و معمول مانند لواش، سنگک و … نیستند بلکه نان های
            فانتزی نیز تولید می شوند که مشتریان خاص خود را دارند. امروزه راه
            اندازی کسب و کار تولید نان فانتزی بازاری رو به رشد دارد. این کسب و
            کار با تولید نان هایی با اندازه و طعم های متفاوت با استقبال مردم
            مواجه شده‌است. باتوجه به شرایط شهرستان، فعالیت در این زمینه مزیت
            دارد.
          </p>
          <p>
            تولید رب گوجه فرنگی از دیگر مشاغلی است که می توان به صورت صنعتی و
            سنتی به آن پرداخت. صنعت تولید رب گوجه فرنگی دارای کاربردهای فروانی
            از قبیل چاشنی و بهبود دهنده رنگ و طعم انواع غذا و ماده اولیه سس‌ها و
            کنسروها است.
          </p>
          <p>
            تولید و بسته بندی خشکبار از جمله کسب و کارهایی است که صرفه اقتصادی
            خوبی خواهد داشت و پیشنهاد می شود. آجیل و خشکبار از موارد مصرفی است
            که سالها مورد استفاده عموم قرار گرفته و گاهی حتی در بازار جهانی و
            صادرات جایگاه خاصی دارد. تولید و بسته بندی خشکبار به سرمایه زیادی
            نیاز ندارد و در صورتی که بسته بندی و پخت خشکبار با دقت انجام شود جهت
            فروش آن، هیچ مانعی وجود نخواهد داشت. بازار این محصول فروشگاههای
            زنجیره ای ، شرکتها و سازمانهای دولتی و خصوصی ، فروشگاههای بزرگ ،
            بنکدارها وشرکتهای پخش خشکبار است
          </p>
          <p>
            ایجاد واحدهای فرآوری میوه از دیگر مشاغل مزیت دار شهرستان قدس است.
            تولید محصولاتی همچون کنسانتره، آبمیوه و کمپوت در سطح صنعتی و
            محصولاتی همچون چیپس میوه، میوه خشک، لواشک و مربا در سطح سنتی و صنعتی
            از جمله فعالیت هایی هستند که می توان در این زمینه داشت. لازم به ذکر
            است در حال حاضر نیز واحدهای میوه خشک کنی موجود هستند؛ با این حال
            قابلیت توسعه و سرمایه گذاری وجود دارد؛ همچنین بررسی های انجام شده
            نشان می دهد تولید چیپس میوه و میوه خشک از مزیت بالاتری برخوردار است.
          </p>
          <p>
            {" "}
            خشک کردن میوه‌جات، یکی از روش‌هاي جلوگیري از فساد میکروبی آن‌ها است.
            در این روش، در اثر کاهش میزان رطوبت، امکان فساد میکروبی بسیار کم شده
            و سرعت دیگر واکنش‌هاي مضر نیز، به مقدار قابل توجهی کاهش می‌یابد. خشک
            کردن، ضمن اینکه روي محصول اثر حفاظتی دارد، وزن و حجم آن را نیز به
            میزان چشمگیری کاهش می‌دهد، در نتیجه از هزینه‌های حمل و نقل و
            ذخیره‌سازي نیز می‌کاهد. با توجه به اینکه بخشی از بازار میوه خشک
            ایران، سهم محصولات وارداتی است، با تولید مشابه داخلی این میوه‌ها (از
            نظر نوع و کیفیت)، می‌توان مانع واردات و خروج میلیون‌ها دلار ارز از
            کشور شد. همچنین نیاز بیش از حد برخی از کشورها به این گونه محصولات
            (به دلیل شرایط ویژه اقلیمی آن‌ها، هزینه بالای حمل و نقل سبزیجات و
            میوه‌های تازه و محدود بودن زمان نگه‌داری آن‌ها)، فرصت مناسبی برای
            رونق تولید و صادرات چیپس میوه فراهم آورده است.
          </p>
          <p>
            در رابطه با مزیت تولید کمپوت میوه نیز باید گفت امروزه با توجه به
            تولید انواع میوه بیش از مقدار مصرفی، باید با روش های مختلفی مانند
            تولید کمپوت، از مازاد میوه مصرفی نگهداری کرد تا علاوه بر کاهش ضایعات
            در تمام فصول مورد استفاده قرار بگیرند. تهیه کمپوت یکی از روش های
            نگهداری طولانی میوه با استفاده از حرارت است که طی آن آنزیم ها
            غیرفعال و اغلب میکروارگانیسم ها نابود می شوند. بسته بندی میوه های
            کمپوت شده به گونه ای است که از آلودگی مجدد آن ها جلوگیری می کند.
            انتخاب مواد اولیه مناسب و سالم در کیفیت محصول نهایی و رضایت مصرف
            کننده نقش مهمی دارد.
          </p>
          <p>
            فرآوری وبسته بندی گیاهان دارویی از دیگر مزیت های شغلی این شهرستان
            است که قابلیت انجام دارد. فرآوری گياهان دارويي، علاوه بر ارزش
            افزوده، نياز به سرمايه‌گذاري زيادي نداشته و مي‌تواند نقش مهمي در
            کارآفرینی داشته باشد. یکی از فرآوری‌های گیاهان دارویی تولید عرقیات
            است. تولید عرقیات دارای تکنولوژی و دانش فنی پیچیده ای نمی باشد و می
            توان با سرمایه‌ای اندک به این کسب و کار مشغول شد. خشک کردن و
            بسته‌بندی نیز از دیگر فرآوری‌های گیاهان دارویی است که می‌توان با
            فعالیت در آن‌ها به سود رسید.
          </p>
          <p>
            تولید فرآورده های گوشتی مانند سوسیس و کالباس از جمله کسب و کارهایی
            است که می توان نسبت به انجام آن در این شهرستان اقدام کرد. تولید
            محصولات مشتقی از گوشت‌های فرآوری شده، در هر زمانی سوددهی دارد و از
            شغل‌های آزاد پردرآمد محسوب می‌شود. در بین فراورده های عمل آوری شده
            از گوشت، سوسیس و کالباس به دلیل آماده سازی سریع و همچنین طعم و مزه
            مطلوب، مصرف بیشتری دارد. سوسیس و کالباس حاوی پروتئین های حیوانی
            کافی، چربی، کربوهیدرات و ویتامین است و می توان آن‌ها را از جمله
            غذاهای آماده در سفره خانواده ها نام برد. برای حفظ این جایگاه و
            افزایش تقاضای این محصولات، علاوه بر انتخاب روش های مناسب تولید و
            فراوری، باید به نوع و شکل بسته بندی آنها نیز توجه نمود. باتوجه به
            رونق دامداری در این شهرستان، راه‌اندازی این کسب‌وکار مزیت دارد.
          </p>
          <p>
            سرمایه گذاری در زمینه تولید ترشیجات و شوریجات (به صورت سنتی و صنعتی)
            از جمله پیشنهادات شغلی در این حوزه است که صرفه اقتصادی خوبی دارد؛
            البته در حال حاضر نیز کارگاه تولید ترشیجات و شوریجات وجود دارد. ترشی
            و شور، بیشتر به‌عنوان یک چاشنی در کنار غذا مصرف می شود و به دلیل
            خاصیت اسیدی که دارد، باعث افزایش اشتها و میل به غذا خوردن در افراد
            می‌شود. این محصول یکی از فرآیندهای نگهداری طولانی‌ مدت صیفی‌ و
            سبزیجات است. در جوامع امروزی به دلیل افزایش مشغله افراد و شاغل بودن
            بسیاری از زنان، فرصت کافی برای تهیه آن در منزل و توسط خود افراد وجود
            ندارد و اکثر خانواده‌ها تمایل دارند ترشی و شور موردنیاز خود را
            به‌صورت آماده تهیه نمایند. بنابراین راه اندازی کسب‌ وکار تهیه ترشی و
            شور می‌تواند راهی برای پاسخ به این نیاز افراد جامعه و کسب درآمد
            باشد.
          </p>
          <p>
            کارخانه های تولید آرد، جوش شیرین صنعتی و ماکارونی از جمله صنایع
            غذایی این شهرستان هستند.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی، بررسی‌ها نشان می‌دهد که سالانه
            مقداری از آن در مراحل کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند.
            از سوی دیگر برداشت و یا تولید بسیاری از محصولات کشاورزی در یک بازه
            زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال صورت می‌پذیرد. لذا
            صنایع تبدیلی می‌تواند زمان استفاده را افزایش دهد و از میزان ضایعات
            آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و
            جلوگیری از اتلاف و ضایع شدن محصولات می‌گردد.
          </p>
          <p>
            در شهرستان قدس فعالیت هایی در زمینه ایجاد صنایع تبدیلی مختلف انجام
            شده است و همچنان ظرفیت لازم برای احداث واحدهای صنعتی جدید در این
            حوزه وجود دارد.{" "}
          </p>
          <p>
            سورتینگ و بسته بندی محصولات کشاورزی از جمله فعالیت هایی است که در
            حال حاضر انجام می شود و قابلیت توسعه دارد.{" "}
          </p>
          <p>
            سورتینگ و بسته بندی از فرآیند هایی است که بر میزان صادارت تاثیر
            دارد. هدف از سورتینگ، دسته بندی و درجه بندی انواع محصول بر اساس سایز
            و کیفیت است. به طوری که بتوان محصول نهایی را به صورت یک دست و یک
            اندازه در بسته بندی های مختلف در بازار ارائه نمود و مشتری نهایی در
            طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن باشد. بسته بندی
            نهایی محصولات پس از عملیات سورتینگ به منظور جابجایی آسان و همچنین
            حفاظت از محصول نهایی سورتینگ شده صورت می گیرد. از ویژگی های بسته
            بندی مناسب میوه می‌توان به عدم استفاده از مواد مضر و شیمیایی در
            ساختار بسته بندی، سهولت فریز کردن و نگهداری در سردخانه، قابلیت حمل و
            نقل مناسب، پاسخگویی به نیازهای نهایی بازار به طوری که در وزن ها و
            بسته های مختلف که همه سلیقه ها را در بر بگیرد، اشاره کرد.{" "}
          </p>
          <p>
            بسته بندی عسل با توجه به تولید عسل به میزان زیاد در شهرستان های
            اطراف، گزینه شغلی خوبی در این منطقه خواهد بود. ویژگی مهم عسل آن است
            که این ماده طبیعی به دلیل نداشتن آب، به شرط دوری از رطوبت، در مدت
            طولانی فاسد نمی‌شود. این ماده فقط در صورتی ارزش غذایی خود را از دست
            می‌دهد که بیش از ۶۰ درجه، حرارت ببیند. البته برای حفظ قدرت ضد
            میکروبی عسل باید آن را در مکانی تاریک و یا در ظرف شیشه ای مات یا
            تیره خارج از یخچال نگه داشت. نگهداری عسل در ظروف فلزی برای مدت
            طولانی مناسب نیست. بدین منظور امروزه بسته بندی عسل به شکل های جذاب،
            خلاقانه و مناسب جهت نگهداری رو به افزایش است. بسته‌بندی های شکیل،
            باعث جذب بیشتر مشتری و همچنن تسهیل در حمل و نقل عسل می‌شود.
          </p>
          <p>
            سرمایه گذاری در زمینه بسته بندی محصولاتی همچون حبوبات نیز در این
            شهرستان از مزیت اقتصادی برخوردار است و می توان در این رابطه فعالیت
            کرد. بسته بندی عبارت است از هنر و علم آماده سازی مواد غذایی برای
            انبار کردن و در نهایت فروش. بسته بندی باید تا حد امکان ساده و ارزان
            باشد، ضمن اینکه اهداف اولیه بسته بندی یعنی خاصیت حفاظتی و جذابیت را
            نیز دارا باشد.
          </p>
          <p>
            احداث کشتارگاه دام از دیگر ظرفیت های شغلی شهرستان در این حوزه است که
            قابلیت سرمایه گذاری دارد. کشتارگاه‌های صنعتی نقش مهمی در حفظ محیط
            زیست دارند؛ به دلیل اینکه ضایعات حاصل از کشتار دام نظیر خون و اجزای
            گوشتی غیر قابل مصرف، در محل تبدیل ضایعات به پودرگوشت که خوراک دام
            است، تبدیل می شود و علاوه بر قرار گرفتن مجدد در چرخه اقتصادی، از
            آلودگی محیط زیست نیز جلوگیری می‌کند. فاضلاب حاصل از کشتار در تصفیه
            خانه های مجهز تصفیه شده و پساب حاصله به مصرف کشاورزی می رسد. البته
            در کشتارگاه ها باید فضای مناسب برای کشتار دام سبک و سنگین به صورت
            همزمان وجود داشته باشد و همچنین باید آب مورد نیاز در زمان کشتار نیز
            تامین شده و تجهیزات و امکانات لازم برای رعایت مسائل بهداشتی و زیست
            محیطی فراهم شود.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز جامعه به
            منابع غذایی، از اهمیت بالایی برخوردار است و سود سرشاری دارد.
          </p>
          <p>
            در شهرستان قدس فعالیت چندانی در زمینه پرورش طیور نشده است؛ اما می
            توان در صورت وجود فضای کافی برای احداث واحدهای سنتی یا صنعتی پرورش
            طیور، به این کسب و کار پرداخت.
          </p>
          <p>
            در حال حاضر پرورش مرغ گوشتی به صورت صنعتی انجام می شود و قابلیت
            توسعه آن نیز وجود دارد. گوشت مرغ به سبب مزیت‌های فراوانی که دارد به
            عنوان منابع تامین پروتئین می تواند مطرح و نیاز عمومی منطقه و کشور را
            در این زمینه مرتفع نماید. ارزش غذایی بالای گوشت طیور، کم بودن افت پس
            از کشتار، سالم وبهداشتی بودن گوشت طیور، قابلیت هضم و جذب بالا، سرعت
            رشد سریع، صرفه جویی در جایگاه و زمین و برگشت سریع سرمایه از فواید
            پرورش مرغ گوشتی است.
          </p>
          <p>
            بررسی های انجام شده نشان می دهد پرورش پرندگانی همچون بوقلمون و
            شترمرغ نیز با شرایط شهرستان سازگار است و می توان نسبت به انجام آن ها
            سرمایه گذاری کرد. در گذشته فعالیت هایی در زمینه پرورش این طیور انجام
            شده که به دلایلی همچون هزینه بالای نگهداری جمع آوری شده است؛ اما در
            صورت بازاریابی مناسب و سنجیدن هزینه های تولید و سود حاصل شده، می
            توان نسبت به این فعالیت ها اقدام کرد.
          </p>
          <p>
            {" "}
            گوشت بوقلمون دارای خواص غذائي ويژه ای است و محدوديت مصرف خاصي نيز
            ندارد؛ بنابراین مي تواند جايگزين مناسبی براي گوشت قرمز علی الخصوص در
            بيمارانی که مصرف گوشت قرمز برای آنها با محدوديت هایی همراه است، مطرح
            گردد. از ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز
            در يک لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد وزن يک لاشه 8
            کيلوئي را تشکيل مي دهد. تولید بوقلمون گوشتی به دلیل به صرفه بودن
            تولید، در دسترس بودن نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز
            امکان انجام صادرات به کشورهای منطقه حائز اهمیت است.
          </p>
          <p>
            شترمرغ در گروه پرندگان طبقه بندی شده و گوشت آن جزء گوشت‌های قرمز
            محسوب می‌شود که نسبت به دیگر گوشت‌های قرمز کم چرب‌تر و سالم‌تر است
            به طوری که ۹۰ درصد آن قابلیت هضم داشته و بعد از گوشت ماهی در رتبه
            دوم قرار دارد. پوست این پرنده از بهترین نوع چرم بوده، مقاومتش3 برابر
            چرم گاو است، ظرافت خاصی دارد و در تولید کیف و کفش با قیمت بالا به
            کار می رود. علاوه بر آن، از پر و تخم شترمرغ، ناخن و قرنیه چشم آن
            برای مصارف صنعتی، دارویی، زینتی و نیز تولید نخ بخیه استفاده می شود.
            همچنین با استفاده از پوکه تخم این پرنده در زمینه صنایع دستی و خلق
            آثار هنری، می توان اشتغال زایی کرد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری از جمله حرفه هایی است که در سطح کمی در این شهرستان انجام می
            شود و همانند طیور، در صورت وجود فضای کافی برای این حرفه می توان نسبت
            به توسعه آن اقدام کرد و نژادهای سازگار با این شهرستان را شناسایی
            کرد. در حال حاضر دام های سبک مانند گوسفند پرورش داده می شود و با
            درنظر گرفتن شرایط گفته شده، قابلیت توسعه پرورش گوسفند و همچنین پرورش
            گاو وجود دارد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            در شهرستان قدس انواع کمی از محصولات زراعی تولید می شوند و در صورت
            وجود زمین کافی قابلیت توسعه کشت آن ها وجود دارد. گندم، جو و ذرت از
            جمله این محصولات هستند.
          </p>
          <p>
            {" "}
            در میان محصولات کشاورزی، کشت گندم نسبت به بقیه کم دردسرتر است.گندم
            در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد
            و در دو نوع بهاره و پاییزه کشت می شود که محصول دهی پاییزه آن بیشتر
            است. علاوه بر خود گندم، کاه آن نیز مشتری خاص خودش را دارد. بعد از
            برداشت محصول، زمین آن هم چراگاه گوسفندان می‌شود. همچنین مورد حمایت
            های دولت واقع شده و کود شیمیایی و بذر نیز به شکل یارانه ای در اختیار
            کشاورزان قرار می گیرد؛ بنابراین توسعه این کشت توجیه اقتصادی دارد.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            نیز استفاده می شود و در تهیه غذای کودک کاربرد دارد. جوشانده جو داروي
            خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین آورنده
            کلسترول است.
          </p>
          <p>
            ذرت که در دو نوع علوفه‌ای و دانه‌ای کشت می‌شود، با هر آب و هوایی
            سازگاری دارد، در برابر خشکی مقاوم است و میزان ثمردهی آن در هکتار
            بالا می‌باشد. دولت برای تشویق به کشت این گیاه، اقدام به خرید تضمینی
            ذرت از کشاورزان می کند. روغن ذرت، کنسرو بلال و دانه ذرت به مصارف
            انسانی می رسد و همچنین دانه ذرت در مرغداری ها و علوفه تر، خشک، سیلو
            شده و کنجاله دانه در دامداری ها استفاده می شود. کاکل ذرت نیز در
            داروسازی به کار می رود. از ساقه و برگ ذرت در صنایع کاغذ، مقوا سازی و
            تولید کاغذ دیواری استفاده می کنند. نشاسته ذرت در صنایع رنگرزی، دارو
            سازی و پلاستیک سازی کاربرد دارد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
