import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-25"].cities["IR-2505"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        services: "خدمات",
        agriculture: "زراعت",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        fisheries: "شیلات",
        livestock: "دامداری",
        gardening: "باغداری",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان رَشت از شهرهای استان گیلان در شمال ایران است که از شمال به
            دریای خزر و بندر انزلی، از جنوب به شهرستان رودبار، از شرق به
            شهرستانهای سیاهکل و آستانه اشرفیه و از غرب به شهرستانهای فومن، صومعه
            سرا و شفت منتهی می شود.
          </p>
          <p>
            شهرستان رشت به عنوان مرکز استان، در جلگه مرکزی گیلان واقع شده است.
            این شهرستان در وسیع ترین بخش دلتای رودخانه سفید رود با ارتفاع متوسط
            ۸ متر از سطح دریاهای آزاد و مسیر اصلی و درجه یک قزوین به بندر انزلی
            قرار دارد. شکل زیر موقعیت شهرستان رشت را نشان می‌دهد.
          </p>
          <p>
            بناهای رشت از سبک معماری ویژه ای برخوردار است که تبلور آن را در
            میدان اصلی شهر ( میدان شهدا) می توان مشاهده نمود. این بناها ارزش
            فرهنگی – هنری دارد . بازار ماهی فروشان رشت و بازار اصلی آن که در
            مجاورت یکدیگر قرار دارد از نقاط دیدنی و مهمترین مرکز خرید و فروش
            کالا در استان گیلان به شمار می آیند.
          </p>
          <p>
            به استثنای منجیل و رودبار که شهرهای بین راهی گیلان هستند. رشت
            مهمترین شهری است که در دروازه ورودی استان قرار دارد. این موقعیت
            جغرافیایی رشت امتیاز بالایی برای آن محسوب می شود. اقلیم این شهر
            معتدل خزری است و دارای تابستان گرم و مرطوب و زمستان های معتدل است.
          </p>
          <p>
            شهرستان رشت دارای شش بخش، مرکزی، خمام، خشکبیجار، سنگر، کوچصفهان و
            لشت نشا است. در شهر رشت عده ای از اقلیت ارامنه و یهودی هم اقامت
            دارند. اما ساکنان اصلی آن را گیلکها تشکیل می دهند. در منابع تاریخی
            آمده است این شهر به احتمال قوی قبل از اسلام و در زمان ساسانیان وجود
            داشته است. در دوران صفویه مرکز گیلان پس از فومن به رشت منتقل گشت و
            این امر موجب افزایش اهمیت بیش از پیش این شهر شد. رشت را در گذشته
            دارالعماره (دارا لمرز ) نیز می نامیدند.
          </p>
          <p>
            این شهر در قدیم تنها راه ارتباطی و بازرگانی ایران از طریق بندر انزلی
            به اروپا به شمار می آمده و از زمان شاه عباس دوم تا اواخر حکومت
            قاجاریه شهر رشت مرکز تجاری بزرگی بوده است و کاروانهایی در شهر برای
            خرید ابریشم توقف می کردند و کالاهای خود را از این طریق به بنادر
            دریای مدیترانه ارسال می‌کردند. در حال حاضر مردم این شهرستان ، به
            زبان گیلکی با لهجه بیه پس تکلم می کنند و به مشاغل خدماتی، تجارتی و
            صنعتی روی آورده اند. علاوه بر آن شالیکاری از عمده فعالیت های
            روستاییان این خطه است .
          </p>
          <p>
            مردم این شهرستان بیشتر به کارهای خدماتی مانند: کار در
            سوپرمارکت،کارهای فنی، خدمات خودرو(باتری سازی،مکانیکی،صافکاری و
            نقاشی) و غذا خوری ها(سمت روستای شکار سرا غذاخوری های معروفی دارند.)
            تمایل دارند.
          </p>
          <p>
            تعاملات اجتماعی مردم در حوزه کسب وکار خیلی خوب است و بسیار پرتلاش
            هستند. استقبال از کارهای فنی و مهندسی زیاد است؛ زیرا تحصیل کرده در
            این زمینه زیاد بوده و علاقه دارند درزمینه های تولیدی و صنعتی فعالیت
            کنند و به صورت کلی هرشغلی که منجر به کسب درآمد حلال شود، مورد
            استقبال مردم است.
          </p>
          <p>
            جوانان شهرستان به کارهای تولیدی و نو میل دارند و به دنبال ایجاد
            خلاقیت و تولیدات جدی هستند؛ ولی مسئله ی اصلی داشتن سرمایه اولیه است.
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
        <Section id="services" title="خدمات" size="h3">
          <p>
            شهرستان رشت از نظر جاذبه های گردشگری و توریستی یکی از مناطق مستعد
            برای جذب توریست به شمار می آید؛ بنابراین ایجاد اقامتگاه بوم گردی،
            اقامتگاه رفاهی و خدماتی، مغازه داری و همچنین ایجاد رستوران بومی،
            قابلیت توسعه را دارد و باعث جذب گردشگر و توریست شده و نیاز ارزی
            شهرستان را تامین می‌کند. همچنین انجام کار های فنی و تعمیرات لوازم
            خانگی و انجام کارهای خدماتی مثل آرایشگری و ایجاد آشپرخانه غذای اماده
            هم زمینه های پیشرفت و توسعه را دارد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            در این شهرستان بعد از کارهای خدماتی، زراعت برنج از جمله کسب و
            کارهایی است که قابلیت سرمایه گذاری دارد؛ زیرا برنج یک کالای
            استراتژیک است و بعد از گندم از جمله مهم ترین غلاتی است که مورد نیاز
            جهان بوده و نقش گسترده ای را در تامین غذا ایفا می‌کند؛ بنابراین
            گسترش این کشت درآمد قابل توجهی را به دنبال دارد. لازم به دکر است کشت
            برنج با اقلیم و شرایط منطقه سازگاری دارد.
          </p>
          <p>
            بعد از کشت برنج، می‌توان به کشت باقلا اشاره کرد که در حال حاضر در
            این شهرستان انجام می‌شود و از مرغوبیت بالایی هم برخوردار است؛
            بنابراین افزایش کشت باقلا نیز علاوه بر رفع نیاز خانوارها، می‌تواند
            منبع درآمد خوبی باشد.
          </p>
          <p>
            طبق بررسی‌های انجام‌شده کشت شبدر در شهرستان رشت جواب داده است؛ اما
            حالت تنبلی برای روستاییان به وجود آمده و تمایلی به کشت آن ندارند. به
            گفته کارشناسان در صورت همت بیشتر برای کشت این محصول، سود خوبی حاصل
            می‌شود. ضمن اینکه کشت این قبیل گیاهان علوفه ای از فرسایش خاک جلوگیری
            کرده و باعث افزایش حاصلخیزی خاک می‌شوند.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با توجه به کشت برنج، بسته بندی و سورتینگ آن، بزرگترین نیاز شهرستان
            است؛ زیرا این محصول در فضای باز، زود خراب می شود. در ضمن با بسته
            بندی، صادرات آن به سایر نقاط راحت تر می‌شود و برای این محصول بسته
            بندی شده بازار دائمی وجود دارد؛ زیرا نیاز به این محصول در بیشتر
            مناطق کشور وجود دارد.
          </p>
          <p>
            بسته بندی چای نیز مانند برنج از مزیت های خوب شهرستان است که سود آوری
            خوبی را به دنبال دارد؛ زیرا به دلیل وجود منطقه آزاد در این منطقه و
            همچنین گردشگری بودن آن، بازار خوبی وجود دارد. البته لازم به ذکر است
            که بسته بندی محصولات به صورت زیبا و شکیل باعث بالا رفتن رغبت مشتری
            به خرید آن می‌شود.
          </p>
          <p>
            بسته بندی گوشت ماهی نیز با توجه به رونق پرورش ماهی در این شهرستان،
            پیشرفت خوبی را خواهد داشت.
          </p>
          <p>
            احداث سردخانه در شهرستان مزیت دارد؛ زیرا در فصل هایی از سال تولید
            محصولات کشاورزی زیاد است و کشاورزان به دلیل اینکه این محصولات خراب
            می شوند، مجبور هستند، تولیدات خود را با قیمت پایین تر بفروشند.
          </p>
          <p>
            در ادامه نیز می‌توان به بسته بندی عسل و همچنین تولید موم و کندو
            اشاره کرد. زیرا با توجه به وجود مراتع خوبی در شهرستان و تولید عسل
            باکیفیت، بسته بندی و برند سازی عسل از مزیت هایی است که قابلیت سرمایه
            گذاری دارد.
          </p>
          <p>
            تولید ابریشم نیز با توجه به پرورش کرم ابریشم در این شهرستان، توجیه
            اقتصادی دارد؛ زیرا ابریشم از جمله الیاف لطیفی است که برای تولید
            پارچه های با ارزش و گران قیمت به کار می‌رود و در حال حاضر نیز تقاضا
            برای آن زیاد است.
          </p>
          <p>
            بعد از این موارد نیز بسته بندی ادویه جات آسیاب شده با توجه به اینکه
            هزینه کمی احتیاج دارد و همچنین بسته بندی خشکبار و ترشی جات با توجه
            به اینکه در این شهرستان تولید می‌شوند، قابلیت سرمایه گذاری دارند.
          </p>
          <p>
            {" "}
            بسته بندی و صادرات داخلی گوشت و تخم مرغ هم با توجه به واردات آن و
            وجود بازار هدف مناسب برای آن، زمینه ساز اشتغال و سود زیاد است.{" "}
          </p>
          <p>
            بسته بندی حبوبات، کشمش، ذرت و تخمه بو داده نیز بسته به حجم تولیدات
            شهرستان، قابلیت توسعه و سود آوری دارند.
          </p>
          <p>
            بسته بندی گوشت غاز، بوقلمون و اردک نیز با توجه به ارزش غذایی این
            گوشت و بالا رفت سطح آگاهی های عمومی در این باره، قابل رشد و پیشرفت
            است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            فراوری برنج و شالیکوبی و همچنین فراوری چای شامل خشک کردن و تولید
            انواع چای مانند چای سبز، از جمله مزیت های خوب این شهرستان است؛ زیرا
            این محصولات در حجم زیاد تولید می‌شود و کار کردن در این حوزه همچنان
            ظرفیت های لازم را دارد.
          </p>
          <p>
            با توجه به کشت صیفی جاتی مانند رب و خیار و همچنین کشت بادمجان، تهیه
            رب، خیارشور و ترشی جات، با توجه به مهارت بانوان در این زمینه، قابلیت
            اشتغال زایی و سودآوری را دارد.
          </p>
          <p>
            فراوری سبزیجات نیز شامل پاک کردن، خرد کردن و بسته بندی می‌شود که با
            درنظر گرفتن صنعتی شدن جوامع و کمبود زمان برای این قبیل کارها، رشد و
            پیشرفت خوبی را به دنبال خواهد داشت.
          </p>
          <p>
            تولید شیرینی، نان و رشته آشی این شهرستان معروف بوده و از مرغوبیت
            بالایی برخوردار است؛ بنابراین ایجاد کارگاه هایی در این خصوص آینده
            تجاری روشنی را خواهند داشت.
          </p>
          <p>
            تولید مربا، چیپس میوه، میوه خشک، نخود چی و نبات هم از مزیت هایی است
            که به شرط تولید انبوه مواد اولیه و بازار یابی مناسب، ارزش افزوده
            زیادی را به دنبال دارد. تهیه غذاهای سنتی و محلی نیز به دلیل متقاضی
            زیاد می‌توانند موفق باشند.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی در شهرستان به صورت بتنی، گالوانیزه و خاکی انجام می گیرد و
            بیشتر، پرورش ماهی های سردابی نظیر قزل آلا و گرمابی نظیر کپور انجام
            می گیرد.
          </p>
          <p>
            پرورش ماهی در قفس یکی از روشهای متداول در پرورش ماهی است که در سنوات
            اخیر با توجه به مزایای خاص خود مورد توجه اکثر کشورهای دنیا واقع
            شده‌است. در این روش از قفس‌هایی با اشکال و جنس های مختلف بسته به
            شرایط محیطی و منطقه ای و گونه های مدنظر مورد استفاده قرار می‌گیرند.
            پرورش ماهی در قفس به آب فراوانی نیاز ندارد. همچنین باعث سهولت در
            برداشت محصول، بررسی، مشاهده و نمونه‎برداری از ماهیان در طول دوره
            پرورش می‎شود؛ بنابراین استفاده از این روش صرفه اقتصادی خوبی را در پی
            دارد.
          </p>
          <p>
            بعد از این موارد می‌توان گفت که پرورش ماهیان خاویاری در حوضچه های
            بزرگتر انجام می‌گیرد، البته برای پرورش ماهیان خاویاری نیاز به
            تسهیلات زیادی است؛ اما در صورت فراهم کردن همین تشهیلات، با توجه به
            قیمت بالای خاویار در بازار، سود خوبی حاصل می‌شود. به نظر می‌رسد
            پرورش ماهی اوزون برون هم از مزیت هایی باشد که قابلیت توسعه دارد ولی
            در اولویت‌های بعدی راه‌اندازی قرار می‌گیرند.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در این شهرستان بسیار خوب جواب می دهد؛ زیرا تامین مواد اولیه
            مانند کاه و...راحت است. بیشتر دامداری در شهرستان به صورت سنتی و برای
            پرورش گاو پرواری انجام می گیرد؛ زیرا مردم خود شهرستان و استان
            نیازمند این تولیدات هستند؛ بنابراین پرورش گاو مزیت اول این حوزه است
            که توجیه اقتصادی دارد.
          </p>
          <p>
            افزایش روز افزون مصرف فراورده های ابریشمی در جهان و کاهش یا توقف
            فعالیت های نوغانداری در کشورهای توسعه یافته، فرصت مناسبی را برای
            فعالان این زمینه فراهم کرده است. الیاف ابریشم دارای درخشش بسیار زیبا
            بوده و به عنوان ماده اولیه در تولید فرش، پارچه، آویزه و... به کار
            می‌رود؛ بنابراین گسترش پرورش کرم ابرشم با توجه به اهمیت فراورده های
            آن و شرایط مناسب پرورش آن در این شهرستان، قابل سرمایه گذاری و توسعه
            است.
          </p>
          <p>
            زنبور داری در شهرستان رشت به صورت محدود و ییلاق و قشلاق انجام
            می‌شود؛ اما به دلیل مرغوبیتی که دارد، قابل توسعه است.
          </p>
          <p>
            طبق بررسی‌های انجام‌شده باتوجه به رونق دامداری اگر روی تولید سبوس
            برنج که خوراک اصلی دام است سرمایه گذاری شود جواب می‌دهد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            گیاه چای به طور معمول در آب و هوای نسبتا گرم، خاک حاصلخیز و بارش
            زیاد، بهترین رویش را دارد؛ بنابراین با توجه به شرایط اقلیمی مورد نظر
            برای کاشت چای، مناطق شمال کشورمان برای این کار مناسب است. گسترش کشت
            چای در شهرستان رشت بسیار سودآور است؛ ضمن اینکه امروزه چای یکی از
            اجزای جدایی ناپذیر زندگی عادی مردم است و همواره بازار مصرف خود را
            دارد.
          </p>
          <p>
            استان گیلان با دارابودن شرایط آب و هوایی معتدل، بارندگی زیاد و خاک
            حاصلخیز، از قطب های مستعد تولید گل و گیاه زینتی است؛ اما تعداد
            گلخانه ها برای تولید گل و گیاه زینتی در شهرستان رشت کم است. طبق
            مطالعات انجام‌شده برای کشت گل و گیاه زینتی ظرفیت‌های لازم وجود دارد؛
            بنابراین ایجاد گلخانه گل و گیاه زینتی ارزش افزوده زیادی دارد؛ زیرا
            تولیدات این گلخانه ها به کشور های دیگر و مابقی تولیدات به بازار های
            داخلی، نمایشگاه ها و شهرداری ها فرستاده می‌شود؛ لذا بازار مصرف خوبی
            دارد.
          </p>
          <p>
            بعد از موارد فوق کشت صیفی جاتی مانند گوجه و خیار، کشت بادمجان و
            همچنین پرورش قارچ دکمه ای و صدفی هم از مزیت هایی است که باعث توسعه
            اقتصادی این شهرستان می‌شوند؛ زیرا این موارد از نیاز ها و تقاضا های
            همیشگی مردم است. البته لازم به ذکر است که در حال حاضر نیز این موارد
            به مقدار زیاد کشت می‌شوند.{" "}
          </p>
          <p>
            با توجه به لیست مزیت سنجی ایجاد گلخانه هیدروپونیک نیز از مزیت هایی
            است که شرایط برای ایجاد آن وجود دارد. هيدروپونيک در عمل به معني کاشت
            گياهان در آب و محلول غذايي بدون استفاده از خاک است. کشت هيدروپونيک
            اين امکان را به کشاورز می‌دهد که در زمان کوتاه‌تر، با زحمت کمتر
            محصولي باراندمان بيشتر را کشت نمايد. علم هيدروپونيک ثابت کرده است که
            براي رشد گياهان به خاک احتياجي نيست؛ اما به عناصري که در خاک موجود
            است( مواد معدني، مواد آلی) نیاز است. هر گياهي را می‌توان به‌صورت
            هيدروپونيک کشت کرد؛ ولي بعضي از آن‌ها موفقيت بيشتري در اين سيستم
            دارند. کشت هيدروپونيک براي میوه‌هایی با محصولات مقاوم از قبيل گوجه،
            خيار، فلفل، گياهان برگي مثل کاهو، سبزي و گياهاني که رشد سريعي دارند،
            ايده آل است.
          </p>
          <p>
            بعد از موارد فوق کاشت بادام و فندق با توجه به سازگاری آنها با اقلیم
            این منطقه و همچنین قیمت گران و بازار خوبی که دارند، قابلیت سرمایه
            گذاری دارد.
          </p>
          <p>
            در ادامه نیر می‌توان به احداث باغ محصولاتی مانند آلو، توت فرنگی، توت
            و انجیر اشاره کرد که صرفه اقتصادی داشته و در صورت وجود صنایع فراوری
            آنها، رشد و سودآوری خوبی را به دنبال دارند.
          </p>
          <p>
            کشت هندوانه و خربزه هم از جمله کشت های سود مند خواهد بود که با توجه
            به موقعیت جغرافیایی این شهرستان، امکان صادرات آنها فراهم است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            با توجه به شرایط خوب آب و هوایی و زمین های حاصل خیز، پرورش ماکیان به
            میزان زیاد انجام می گیرد و قابلیت توسعه نیز دارد، البته به دلیل نیاز
            به سرمایه‌ی اولیه بالا، باید برای تامین سرمایه و بازار فروش مناسب،
            بیشتر تلاش کرد.
          </p>
          <p>
            تعداد مرغداری های صنعتی گوشتی در شهرستان رشت بسیار زیاد است و همچنین
            مرغ های تخم گذار به صورت بومی و محلی پرورش می یابند و قابلیت توسعه
            را دارند و می توان این موارد را به میزان بیشتری انجام داد.
          </p>
          <p>
            با توجه به خواص درمانی گوشت اردک، بوقلمون و غاز، پرورش آنها از مزیت
            هایی است که قابلیت سرمایه گذاری داشته و سود خوبی را به دنبال دارد.
          </p>
          <p>
            در ادامه نیز می‌توان به پرورش بلدرچین و کبک اشاره کرد که به نظر
            می‌رسد گسترش پرورش آنها ارزش افزوده خوبی را ایجاد کند.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            حصیر بافی در این شهرستان به صورت گسترده انجام می‌شود. تولیدات
            شهرستان در این خصوص بسیار معروف بوده و طرفداران زیادی دارد. این
            تولیدات بیشتر در نمایشگاه ها و آثار دیدنی که محل عبور و مرور گرشگران
            است، فروخته می‌شود.
          </p>
          <p>
            مردم شهرستان در زمینه فرش بافی به صورت ضعیف فعالیت می‌کنند زیرا
            مراکز فروش وجود ندارد. مردمی که در این حوزه فعالیت می‌کنند، فرش‌های
            تولیدی را برای فروش به تبریز می‌برند؛ اما در صورت یافتن بازار هدف
            مناسب، فرش بافی نیز از اولویت های خوب این حوزه است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            این شهرستان دارای دو عدد شهرک صنعتی است که شامل کارخانه های ایران
            رادیاتور(تولید پکیج دیواری و رادیاتور)، وسایل پزشکی(گاز استریل
            و...)، مواد خوشبو کننده ، پلاستیک(بسته بندی و فریزر و ...) همینطور
            شامل کارگاه های بسته بندی ذغال و کارگاه ذوب فلزات است.
          </p>
          <p>
            تولید انواع نوشیدنی، تولید صنایع برقی(سیمکو که در گیلا خیلی معروف
            است.)، چینی سازی، تولید کالای خواب، تولید لوازم آرایشی
            بهداشتی(نیوساد)، شرکتهای چاپ و تولید کاغذ، کارخانه های بسته بندی و
            خشک کردن چای، کارخانه های شالیکوبی برنج و بسته بندی آن، تولید فولاد،
            سبحان دارو، ایران پوپلین، شیشه‌ی گیلان و کارخانه ی الکترونیک در
            شهرستان هستند.
          </p>
          <p>
            علاوه بر موارد ذکر شده در بالا کارگاه های تولید قطعات خودرو،تولید
            ادوات کشاورزی،تولید قطعات ماشینها صنعتی(دستگاه های تراشکاری و...) از
            تولیدات این شهرستان هستند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
