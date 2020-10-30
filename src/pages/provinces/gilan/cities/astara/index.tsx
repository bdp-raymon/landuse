import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-25"].cities["IR-2501"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        services: "خدمات",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        gardening: "باغداری",
        agriculture: "زراعت",
        livestock: "دامداری",
        food_industry: "صنایع غذایی",
        fisheries: "شیلات",
        birds: "طیور",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            آستارا ششمین شهر بزرگ استان گیلان است که در شمالی ترین نقطه استان و
            در مرز با کشور جمهوری آذربایجان واقع شده است. این شهرستان از شرق به
            دریای خزر، از شمال به آستارای جمهوری آذربایجان، از غرب به استان
            اردبیل و از جنوب به شهرستان تالش محدود می شود. شهرستان آستارا دارای
            دو شهر آستارا و لوندویل است. موقعیت جغرافیایی و ارتفاع آن از سطح
            دریا، نزدیکی این شهر به دره حیران، دارابودن اقلیم کوهستانی و آب و
            هوای مرطوب و معتدل، باعث شده تا این شهر اندکی خنک‌تر از دیگر مناطق
            پست جلگه‌ای استان باشد. شکل زیر موقعیت شهرستان آستارا را نشان
            می‌دهد.
          </p>
          <p>
            آستارا یکی از قدیمی‌ترین گمرکات کشور با بیش از ۲۰۰ سال سابقه است که
            رتبة نخست صادرات و بزرگ‌ترین گمرک زمینی شمال کشور را داراست. این
            شهرستان مهم‌ترین پل ارتباطی راهبری میان ایران و جمهوری آذربایجان،
            دروازه ورود به منطقه قفقاز، دروازه‌ی طلایی ورود به اروپا، سومین مرز
            فعال کشور در زمینة صادرات و واردات است. همچنین از امن‌ترین و
            پرترددترین مرزهای زمینی کشور، دومین منبع درآمد گمرکی استان گیلان و
            دارای بیشترین سهم ارزشی صادرات چمدانی در کشور است.
          </p>
          <p>
            نکته قابل توجه دیگر در رابطه با آستارا، وجود جاذبه های طبیعی و
            استقبال گردشگران داخل و خارجی از این موارد است. سالانه در حدود شش
            میلیون نفر از ایرانیان و بالغ بر ششصدهزار نفر از کشورهای خارجی از
            این شهر دیدن می‌کنند.
          </p>
          <p>
            امکانات رفاهی و فرهنگی در آستارا قابل ملاحظه است. وجود کتابخانه
            عمومی، سالن های تئاتر، دانشگاه ها و مراکز علمی و... از مواردی هستند
            که می توان با استناد به وجود آنها در سطح شهرستان، از آستارا به عنوان
            شهری با سطح فرهنگ بالا نام برد.
          </p>
          <p>
            طبق بررسی های انجام شده، منابع تامین آب در شهرستان آستارا خوب و قابل
            قبول است. سطح آبهای زیرزمینی بالا است و مشکل جدی در زمینه تامین آب
            وجود ندارد. لازم به ذکر است به علت بارش ها، مقداری از کشاورزی به
            صورت دیم نیز انجام می شود.
          </p>
          <p>
            کمبود سرمایه، سخت گیری و طولانی بودن پروسه اخذ مجوز از دستگاه های
            مختلف مانند منابع طبیعی و محیط زیست، از مهمترین موانع ایجاد کسب و
            کار در شهرستان آستارا عنوان شده است. یکی از مسائل دیگری که شاید
            بتوان به عنوان مانع در آستارا از آن نام برد، عدم وجود روحیه برای
            ایجاد کارهای تولیدی و صنعتی است. باتوجه به اینکه آستارا از چندین سال
            پیش به عنوان شهری مرزی با میزان تجارت قابل توجه شناخته می شده است،
            تمایل بیشتر مردم به سمت کارهایی در رابطه با توزیع کالا و خدمات است
            درنتیجه تمایل به کارهای تولیدی و پرزحمت، کمرنگ شده است. این مسئله
            یکی از زنگ های خطر جدی برای این شهرستان است؛ زیرا منابع طبیعی بسیار
            خوب و بالقوه ای وجود دارد که تا دیر نشده، باید به نحواحسن از آنها
            استفاده شود و برای جوانان بومی اشتغال ایجاد کرد؛ ولی متاسفانه از این
            شرایط استفاده نمی شود.
          </p>
          <p>
            تحریم های اخیری که ایران در آنها قرار گرفته است و روز به روز بیشتر
            می شود؛ اهمیت بازارهای خاورمیانه و آسیای غربی و جنوبی را چندین برابر
            کرده است. وجود جمعیت قابل توجه در این کشورها، کمبود مسافت و به صرفه
            بودن هزینه های حمل و نقل بیانگر این است که باید بیش از پیش بر روی
            صادرات به کشورهای این چنینی و حوزه قفقاز توجه کرد. آستارا مهمترین
            شهر برای صادرات به این کشورهاست.
          </p>
          <p>
            امنیت شهرستان آستارا، نکته دیگری است که بسیار حائز اهمیت است.
            اطمینان سرمایه گذاران از امنیت و سلامت روانی و اجتماعی منطقه ای که
            در آن سرمایه گذاری می کنند، بسیار مهم و تایین کننده برای افزایش
            تمایل آنها به سرمایه گذاری در مناطق این چنینی است. این مسئله در
            رابطه با شهرهای مرزی چندین برابر می شود که آستارا این امتیاز مثبت را
            نیز دارد.
          </p>
          <p>
            شغل بیشتر مردم این شهرستان در وهله اول در زمینه کارهای خدماتی و
            توزیعی کالاهای وارداتی است. در وهله های بعد، مردم به کشاورزی و عده
            کمی نیز به دامداری مشغول هستند که عمدتا هم در روستاها انجام می شود.
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
            وچود بازارچه های مرزی فعال، حجم بالای صادراتی که به صورت روزانه از
            آستارا انجام می شود، استقبال و شناخته شده بودن این شهر برای تجار
            ایرانی و خارجی و... دلایل خوبی برای فعالیت درزمینه خدمات در این
            شهرستان است. درحال حاضر رستوران ها، هتل ها و امکانات دیگری برای
            استفاده این افراد وجود داشته و درحال کار و فعالیت هستند؛ ولی اگر طبق
            نکته ای که در مقدمه آورده شد، میزان صادرات از این شهر افزایش یابد،
            این امکانات جوابگو نبوده و باید در این زمینه فعالیت های گسترده تری
            انجام گیرد.{" "}
          </p>
          <p>
            یکی از مهمترین تحریم هایی که اخیرا در رابطه با ایران به تصویب رسیده
            است، تحریم های بانکی است که یکی از نتایج آن که بسیار ملموس است،
            بلوکه شدن پول به دست آمده از صادرات و واردات در بانک های خارجی است.
            این موضوع لزوم پیدا کردن راه حل هایی برای ورود پول و ارز به کشور را
            یادآور می شود. یکی از این راه ها گسترده و به روزتر کردن صنعت توریست
            و گردشگری است. این مهم همیشه در دستور کار وزارت خانه های مرتبط و
            دولت ها بوده است و حتی در برنامه های توسعه نیز به آن تاکید شده؛ ولی
            لزوم پیگیری جدی آن درحال حاضر، بیش از پیش است. در این بین جایگاه
            آستارا، به عنوان شهری توریستی، آرام و در مرزی استراتژیک، برای ایران،
            بسیار تعیین کننده است. جاذبه های طبیعی و آثارباستانی ویژه و خارق
            العاده ای در آستارا وجود دارد که میزان بازدید از آنها خوب و قابل
            توجه است؛ درواقع این جاذبه ها توسط گردشگران داخلی و خارجی زیادی در
            طی سال بازدید می شود. تبلیغات بیشتر این جاذبه ها و توسعه خدمات
            گردشگری از مواردی است که پتانسیل ایجاد آنها در آستارا وجود دارد و می
            تواند ایجاد شود.{" "}
          </p>
          <p>
            تولید پوشاک ازجمله مشاغلی است که در این شهر دارای مزیت است. جمعیت
            شهرستان آستارا کم بوده و درحدی نیست که بتواند پاسخگوی مصرف این
            تولیدات باشد؛ اما باتوجه به مرزی بودن و رفت و آمد تجار و گردشگران،
            می توان در زمینه ارائه خدماتی در این صنعت اقدام کرد البته این واحدها
            درحال حاضر نیز فعالیت داشته و جزء واحدهای موفق در سطح شهرستان هستند؛
            ولی می توانند کارشان را توسعه دهند و میزان اشتغال بیشتری ایجاد کنند.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            وجود موقعیت جغرافیایی و مرزی شهرستان آستارا و استقبال خوب گردشگران و
            تاجران داخلی و خارجی از بازارچه های مرزی باعث می شود تا بتوان مزیت
            بالا و قابل توجهی برای صنایع تبدیلی در این شهرستان قائل بود.{" "}
          </p>
          <p>
            ایجاد کشتارگاه دام و طیور می تواند علاوه بر ایجاد اشتغال برای مردم
            بومی و جوانان، سود خوبی را در پی داشته باشد. کارخانه های بسته بندی
            محصولات دامی و کشاورزی نیز سود خوبی را ایجاد خواهند کرد؛ به این‌صورت
            که محصولات به آستارا آورده می شوند، در آنجا بسته بندی شده و به خارج
            از کشور صادر می شوند.
          </p>
          <p>
            سردخانه برای نگهداری محصولات باغی، از مواردی است که قابلیت ایجاد در
            آستارا را دارد البته طبق بررسی های انجام شده تعدادی سردخانه وجود
            دارد؛ ولی باتوجه به میزان تولیدات و شرایط برای گسترش تولید آنها، می
            تواند افزایش پیدا کند؛ زیرا علاوه بر کیوی تولید شده در خود آستارا که
            می تواند در سردخانه ها نگهداری شود و در فصولی که نمی توان این محصول
            را کاشت، از آنها استفاده نمود، محصولات تولید شده در شهرهای کوچک
            مجاور نیز که قابلیت ایجاد سردخانه برای محصولاتشان را ندارند، می
            توانند در سردخانه های این شهر نگهداری شود. البته در این رابطه باید
            به دو نکته توجه ویژه داشت. اول اینکه سردخانه ها علاوه بر ایجاد
            اشتغال، با ایجاد تعداد واحد های محدودی به حالت اشباع می رسند و
            واحدهای جدیدتر برای پیدا کردن بازار هدف، دچار مشکل خواهند شد. نکته
            دوم اینکه درصورت وجود صرفه اقتصادی، به عنوان مثال به صرفه بودن هزینه
            حمل و نقل از شهرهای مجاور به سردخانه های آستارا، می توان بر روی این
            محصولات نیز حساب کرد.
          </p>
          <p>
            بسته بندی محصولات فرآوری شده دامی و باغی مانند کیوی، خرمالو و... که
            در رسته صنایع غذایی به آنها اشاره می شود نیز، دارای مزیت بسیارخوبی
            خواهد بود؛ زیرا ارزش افزوده خوب و قابل توجهی را ایجاد خواهد کرد.
            نکته حائز اهمیت دراینجا این است که بسته بندی موادغذایی فرآوری شده و
            خام، ارزش و قیمت را به طور محسوسی افزایش می دهد. ازطرفی شرایط
            اقتصادی حال حاضر ایران، نشان دهنده آن است که نمی توان انتظار فروش و
            بازار خوبی را برای محصولات لوکسی مانند ترشی کیوی و یا چیپس داشت؛ ولی
            باتوجه به امکانپذیر بودن صادرات، می توان مقدار زیادی از این محصولات
            را به خارج از کشور صادر کرد و ارزآوری قابل توجهی را شاهد بود.{" "}
          </p>
          <p>
            بسته بندی عسل تولیدی در سطح شهرستان آستارا و صنایع تبدیلی آن مانند
            تولید زهرعسل، از مشاغلی است که سوددهی خوبی دارند. درضمن در این زمینه
            ها تابحال اقدامات زیادی انجام نشده است و قطعا دارای مزیت خوبی خواهند
            بود.{" "}
          </p>
          <p>
            توسعه سورتینگ محصولات زراعی و باغی که یا در سطح شهرستان تولید می
            شوند و یا برای صادرات به آستارا آورده می شوند نیز از مشاغلی است که
            در شهرهای مرزی و دارای قابلیت صادرات مانند آستارا، دارای مزیت است.
            به اختصار می توان اینگونه توضیح داد که محصولاتی که قابلیت صادرات به
            داخل و خارج از کشور را دارند، از یکدیگر جدا می شوند. این کار باعث
            افزایش ارزآوری و سود می شود؛ زیرا محصولات با کیفیت تر به خارج از
            کشور صادر شده و درنهایت با قیمت بیشتری نیز خریداری می شود. همچنین
            کیفیت بالای محصولات صادراتی باعث می شود تا مزیت نسبی تولید و پایداری
            تقاضای این محصولات از سمت کشورهای خارجی تحقق یابد.{" "}
          </p>
          <p>
            درحال حاضر واحدهایی در زمینه برنج کوبی درحال فعالیت هستند. اگر میزان
            کشت برنج افزایش یابد و یا صادرات آن به صورت جدی تر پیگیری شود، می
            توان این واحدها را افزایش داد و از این طریق، تعداد قابل توجهی شغل در
            سطح شهرستان ایجاد کرد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            آب وهوای آستارا و اقلیم آن موجب شده تا باغداری در سطح شهرستان جواب
            دهد؛ ولی به دلایلی که در مقدمه گفته شد، استقبال زیادی از آن نشده و
            اغلب باغات به صورت خصوصی اداره می‌شوند و میزان تولیدات محدودی دارند.
          </p>
          <p>
            کیوی یکی از انواع میوه‌های خوراکی است که در مناطق معتدل و بر روی
            درخت رشد می‌کند. هر درخت صدها کیلو میوه تولید می‌کند. در بسیاری از
            مناطق 3 تا 7 سال طول می‌کشد تا این درخت به بلوغ برسد. این گیاه در
            خاک‌های عمیق آبرفتی بهترین رشد را دارد البته در خاک‌های لومی و
            سیلتی‌لوم بهتر از خاک‌های شنی‌لوم رشد می‌کند؛ درواقع خاک مناسب کشت
            این گیاه بایستی سبک و غنی از مواد آلی و دارای زهکشی مناسب بوده و عمق
            کافی داشته باشد. بدلیل حساسیت کیوی به شوری بویژه نمک‌های بور و سدیم،
            آب آبیاری بایستی حداقل شوری را داشته باشد. کلرید، بیکربنات،‌ بور و
            سدیم ‌بیشترین خسارت را به این گیاه وارد می‌آورند. درضمن عموما در اثر
            باد، شاخه این گیاه شکسته می شود؛ درنتیجه باید در مناطقی این گیاه کشت
            شود که حتی باد ساحلی نیز وزشی نداشته باشد. وجود مهارت کشاورزان خطه
            شمال در به عمل آوردن این محصول؛ سنخیت با اقلیم آب و هوایی منطقه و
            امکان صادرات آن به خارج از کشور از جمله دلایلی است که می توان توسعه
            کشت آن را در سطح شهرستان دارای مزیت دانست. علاوه بر مقاومت در برابر
            سرما‌زدگی، ضایعات کم، نیاز کم به آب، آفات و مشکلات مراحل داشت کمتر
            نیز از دیگر دلایل مزیت داشتن کیوی است. لازم به ذکر است پرورش کیوی از
            نظر اقتصادی یکی از مهم‌ترین صنایع کشاورزی جهان با توجیه اقتصادی بالا
            محسوب می شود.{" "}
          </p>
          <p>
            حسن نوابیان مدیر عامل اتحادیه کیوی‌کاران شرق گیلان، به ظرفیت بالای
            استان گیلان در درآمدزایی به موازات درآمد نفت اشاره می‌کند و
            می‌افزاید: با برنامه‌ریزی دقیق و مدبرانه و حمایت عملی و واقعی
            مسئولان و دست‌اندرکاران موضوع می‌توان با افزایش تولید و توسعه باغات
            کیوی در استان شمالی به‌خصوص استان گیلان، درآمد ارزی همپای درآمدهای
            نفتی ایجاد کرد تا جایی که می‌توان با درآمد حاصل از تولید کیوی،
            فرآوری، تولید محصولات جانبی و ایجاد ارزش افزوده بالاتر، کیوی را
            جایگزین نفت کنیم.{" "}
          </p>
          <p>
            تولید صیفی جاتی مانند خیار، گوجه و بادمجان به علت داشتن بازار فروش و
            مناسب بودن شرایط اقلیمی منطقه دارای مزیت هستند. تولید میوه جاتی
            مانند خرمالو و ازگیل نیز به صورت محدود انجام می شود که برای توسعه
            دادن تولید آنها باید در ابتدا به شرایط بازار و کیفیت این محصولات دقت
            لازم را داشت. در پایان باید اشاره کرد به علت شرایط آب و هوایی ایجاد
            گلخانه مزیت زیادی ندارد.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            برنج، اصلی ترین محصول زراعی است که از گذشته در آستارا تولید می شده
            است. طبق بررسی های انجام شده، بیشترین میزان برنج به صورت دیم تولید
            می شود. باتوجه به بازار فروش این محصول در خارج از کشور و کیفیت بالای
            آن، توسعه کشت برنج دارای مزیت و سود خوبی خواهد بود.{" "}
          </p>
          <p>
            میزان تولید گندم و جو در این شهرستان کم بوده و طبق بررسی های انجام
            شده مزیت زیادی برای توسعه در این مشاغل وجود ندارد؛ زیرا آب و هوای
            شهرستان اجازه کشت چنین محصولاتی را نمی دهد. این دو محصول استراتژیک
            که بعضا در زمینه خوراک دام نیز از آنها استفاده می شود، عموما وارد
            شهرستان می شوند. طبق بررسی های انجام شده بیشتر جو و خوراک دام مصرفی
            در شهرستان از خارج از شهرستان وارد می شود؛ اما همانطور که گفته شد به
            نظر نمی رسد به علت شرایط جوی، بتوان این موارد را تولید کرد.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            زنبورداری یکی از اصلی ترین مشاغل مردم در شهرستان آستارا است. رونق
            این شغل و کیفیت خوب عسل تولیدی نیز از ویژگی های این کسب و کار محسوب
            می شود. خواص درمانی و دارویی عسل و تمایل به مصرف آن، از دلایلی است
            که می توان توسعه در این شغل را دارای سود و مزیت دانست.{" "}
          </p>
          <p>
            بیشتر دامداری که در شهرستان انجام می شود به صورت سنتی است. اغلب
            محصولات تولیدی دامی مانند گوشت قرمز نیز نیاز شهرستان را برطرف می
            کند. باتوجه به اقلیم و شرایط آب و هوایی مناسب و وجود تقاضا برای
            محصولات دامی، توسعه دامداری دارای سود خوبی خواهد بود؛ علاوه بر اینکه
            دامداری نسبت به کشاورزی و رسته های باغداری و زراعت، زودبازده تر است.
            طبق بررسی های انجام شده، اطلاعات دقیقی از نوع دام های سبک و سنگینی
            که طبق بررسی‌های انجام‌شده و باتوجه به میزان تولید لبنیات، پرورش دام
            سبک و سنگین در شهرستان انجام می‌شود؛ ولی پرورش دام سبک بیشتر است.{" "}
          </p>
          <p>
            طبق لیست مزیت سنجی نیز به علت وجود بستر و شرایط لازم در سطح شهرستان،
            پرورش کرم ابریشم دارای مزیت خواهد بود.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            احداث واحدهای صنایع‌تبدیلی و بسته‌بندی وابسته به کیوی می‌تواند یکی
            از بزرگ‌ترین سرمایه‌گذاری‌ها با بازده و درآمد بالا باشد و برای این
            صنعت، ارزش افزوده بیافریند. واحدهای فعال در زمینه تولید فرآورده هایی
            مانند میوه خشک، آبمیوه، چیپس میوه، کنسانتره، لواشک، مربا، و کمپوت می
            تواند ایجاد شود. علاوه بر صادرات این محصولات به داخل کشور، صادرات
            آنها به کشورهای همجوار نیز دارای مزیت خواهد بود.{" "}
          </p>
          <p>
            اگر میزان تولید محصولات باغی مانند خرمالو و ازگیل افزایش یابد، می
            توان انتظار داشت که فرآورده های آنها مانند تولید میوه خشک و یا چیپس
            میوه دارای مزیت باشد و سود خوبی را عاید کشاورز و تولیدکننده کند.{" "}
          </p>
          <p>
            طبق لیست مزیت سنجی، مشاغلی مانند شیرینی پزی و تولید رشته آشی دارای
            مزیت شمرده شده است.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            درحال حاضر پرورش ماهیان خاویاری و قزل آلا به صورت محدود انجام می
            شود. باتوجه به مساعد بودن شرایط برای پرورش این نوع ماهی ها و طبق
            لیست مزیت سنجی، توسعه این شغل پیشنهاد می شود.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش مرغ گوشتی و تخم گذار و ماکیانی مانند اردک و غاز در شهرستان
            آستارا به میزان محدود و به صورت سنتی و خانگی انجام می شود. باتوجه به
            وجود بازار مصرف این پرنده ها و فراهم بودن شرایط مرزی و جاذبه های
            گردشگری در آستارا، به نظر می رسد بتوان در زمینه پرورش این طیور به
            صورت گسترده تر کار کرد. درضمن به‌نظر می رسد به علت محدود تر بودن
            بازار فروش گوشت اردک و غاز، مرغ در اولویت بالاتری نسبت به این موارد
            قرار خواهد گرفت.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            طبق بررسی های انجام شده معادن شن و ماسه در این شهرستان وجود دارند؛
            ولی بهره برداری خاصی از آنها نمی شود. اگر شرایط برای ایجاد واحد
            استخراج و فرآوری محصولات آنها فراهم شود، می توان مشاغل زیادی را
            ایجاد کرد. درصورت وجود بازار تقاضا و فراهم بودن شرایط، صادرات این
            محصولات نیز دارای مزیت خواهد بود.{" "}
          </p>
          <p>
            ایجاد واحدهایی برای تولید گونی، سبد و کارتون برای بسته بندی محصولاتی
            که در خود شهرستان تولید شده و به صورت خام صادر می شوند و یا محصولاتی
            که از دیگر شهرها و شهرستانهای مجاور برای صادرات به آستارا آورده می
            شوند، دارای مزیت و سود قابل توجهی خواهد بود.{" "}
          </p>
          <p>
            درحال حاضر چند واحد صنعتی در آستارا مشغول به کار هستند که یکی از
            مهمترین آنها کارخانه تولید شمش ذوب آهن است. یک کارخانه تولید کیک و
            کلوچه نیز درحال احداث است. لازم به ذکر است بیشتر کارگران مشغول در
            واحدهای صنعتی فعال، بومی شهرستان هستند .{" "}
          </p>
          <p>
            در پایان شایان ذکر است که اشاره شود بیشتر واحدهای صنعتی و کارخانه
            هایی که در آستارا از بین رفته و تعطیل شده اند، به دلیل بالا رفتن
            قیمت مواداولیه و قادر نبودن به تامین آنها به مرز تعطیلی کشیده شده
            اند .
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            تولید صنایع دستی، یکی از کارهایی است که معمولا زنان در خطه شمال
            ایران به آن مشغول هستند و به علت رفت و آمد گردشگران، عموما درآمد
            قابل ملاحظه ای از این راه کسب می کنند. در شهرستان آستارا نیز بیشتر
            صنایع دستی که تولید می شود، گلیم، قالی یا فرش است البته میزان تولید
            این محصولات به دلایل متعددی کاهش یافته است. باتوجه به شرایط مرزی
            آستار می توان تولید این محصولات و صنایع را احیا کرد و توسعه داد و در
            بازارچه های مرزی به فروش رساند.{" "}
          </p>
          <p>
            تمایل گردشگران خارجی به استفاد از صنایع دستی و محصولات تولیدی در
            شهرهای ایران خوب و زیاد است و می توان از این پتانسیل برای افزایش
            فروش این محصولات استفاده کرد. مزیت رونق دادن به بازار فروش این
            محصولات در وهله اول باعث ایجاد انگیزه برای بافندگان و در وهله دوم
            نیز سبب بالا رفتن سطح درآمد خانوارهایی خواهد بود که در این زمینه
            فعالیت دارند و امرار معاش می کنند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
