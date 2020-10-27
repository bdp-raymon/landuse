import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-20"].cities["IR-2002"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        agriculture: "زراعت",
        birds: "طیور",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        services: "خدمات",
        gardening: "باغداری",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        industry: "صنعت",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            بیجار یکی از شهرستان های استان کردستان بوده که در شرق استان واقع
            شده‌است. شهرستان بیجار از غرب با شهرستان‌های دیواندره و سنندج، از
            جنوب با شهرستان قروه، از شمال شرقی با استان زنجان، از شمال غربی با
            استان آذربایجان غربی و از شرق با استان همدان همسایه است. جمعیت
            شهرستان طبق آمار سال 1395 حدود 57 هزار نفر بوده است.
          </p>
          <p>
            موقیعت جغرافیایی بیجار یکی از مزیت های اصلی این شهرستان محسوب می
            شود. فاصله کم با شهرها و استانهایی با جمعیت بالا، باعث می شود که
            بتوان به ایجاد کسب وکارهای صنعتی و تولیدی و مهاجرت معکوس افرادی که
            از شهرستان مهاجرت کردند، امیدوار بود و از بازار فروش محصولات، تاحدی
            اطمینان حاصل نمود. بیجار با سنندج 148، با همدان 161، با زنجان 145،
            با قزوین 268 و با اراک 355 کیلومتر فاصله دارد. شکل زیر موقعیت
            شهرستان بیجار را نشان می‌دهد.
          </p>
          <p>
            بیجار منطقه‌ای است کوهستانی در امتداد سلسله جبال غربی ایران که یک
            سوم اراضی آن تقریباً کوهستانی است. نوع زمین و ساختمان آن مرکب از
            سنگ‌های رسوبی به‌ویژه ترکیبات رسی و آهکی و شنی مخلوط است که مربوط به
            دگرگونی‌های دوران سوم زمین‌شناسی است. این شهر در طول ۴۷ درجه و ۳۶
            دقیقه شرقی گرینویچ و عرض شمالی ۳۵ دجه و ۵۲ دقیقه استوا واقع شده‌است.
            ارتفاع بیجار از سطح دریا 1940 متر است و ۷۷۰ متر از تهران و ۴۲۵ متر
            از سنندج بلندتر است. در رابطه با آب و هوا نیز باید گفت دارای آب و
            هوایی سرد و خشک است.
          </p>
          <p>
            یکی دیگر از نکات قابل توجه در رابطه با بیجار سد تالوار است. سد
            تالوار سدی خاکی در منطقه بیجار گروس است. تعداد زیادی از کشاورزان این
            منطقه زمین‌های خود را در اختیار سد قرار داده اند اما با وجود آبگیری
            سد و رها کردن زمین توسط کشاورزان، خسارت آنها همچنان پرداخت نشده است
            و بعضی از آنان در حاشیه شهرهای بیجار، همدان و قروه ساکن شده و بیکار
            هستند که این خود معضل بزرگی برای مردمان این خطه است. اگر آب این سد
            که درحال حاضر بیشتر آن به استانهای همدان و زنجران برده می شود، به
            نفع هدف اصلی یعنی استفاده افراد شهرستان بیجار تخصیص داده شود، می
            توان انتظار داشت که مهاجرت معکوس چشم گیری انجام شده و به تبع آن،
            مشکلات بیکاری تاحد زیادی از بین برود.
          </p>
          <p>
            منابع تامین آب این شهرستان بیشتر آبهای زیرزمینی است. همانطور که در
            بالا اشاره شد؛ علی رغم وجود سدها در بیجار، سودی به مردم بومی نمی رسد
            و بیشتر آب این سدها به مصرف شهرستان‌ها و شهرهای اطراف می رسد. به علت
            این کم آبی نیز بیشتر کشاورزی به صورت دیمی انجام می شود. کیفیت آبهای
            زیرزمینی علی رغم کم بودن میزان آنها، خوب و قابل قبول است و بعضا برای
            شرب نیز استفاده می شود.
          </p>
          <p>
            ریسک پذیری کم مردم بیجار از مهمترین مشکلات عدم ایجاد کسب و کار در
            این شهرستان است. به نظر می رسد باتوجه به شرایط اقتصادی امروز کشور،
            محدودیت منابع و انواع تحریم هایی که در رابطه با ایران اعمال و اجرا
            شده، لزوم استفاده از مزیت ها و پتانسیل های داخل کشور اهمیت بیشتری
            پیدا کرده است. با این شرایط به نظر می رسد مهمترین عاملی که می تواند
            این مانع را از سر راه چرخه اقتصاد در ایران بردارد، فرهنگ سازی و کاهش
            شاخص نااطمینانی است. اگر افراد و سرمایه گذاران به آینده امیدوار
            باشند؛ بعنوان مثال بدانند که درصورت ایجاد یک واحد تولیدی از
            امتیازاتی مانند معافیت های مالیاتی قابل ملاحظه ای بهره مند می شوند،
            انگیزه بیشتری برای کار در زمینه تولید پیدا خواهند کرد تا اینکه پول و
            سرمایه خود را در بازار ارز و یا سکه، بدون هیچ ریسکی پس انداز کنند یا
            بعنوان مثالی دیگر اگر از اینکه پس از دیدن خسارتی توسط دولت و یا بیمه
            ها حمایت می شوند مطمئن باشند، می تواند در روند ایجاد کارهای تولیدی
            در کشور تاثیر چشم گیری بگذارد. لازم بذکر است برای تحقق مطلب فوق،
            باید اقداماتی از سمت رسانه های دیداری و شنیداری و وزارتخانه های
            مرتبط انجام شود. از دیگر موانع ایجاد کسب و کار در بیجار باید به
            کمبود نقدینگی و سرمایه در گردش، نبود ضامن و وثیقه برای گرفتن وام از
            بانک ها و بروکراسی اشاره کرد.
          </p>
          <p>
            مهاجرت افراد شهرستان، مخصوصا جوانان برای کار به شهرهایی مانند تهران
            و کرج از مسائل جدی در بیجار عنوان شده است. کمبود افراد بومی در یک
            شهر، به مرور باعث از بین رفتن سرمایه انسانی آن منطقه خواهد شد و در
            دراز مدت باعث خسارات اجتماعی جبران ناپذیری مانند بی هویتی می شود.
            بیجار دارای منابع و مزیت های خوبی است که باتوجه به این مزیت ها می
            توان مشاغل خوب و درخورتوجهی ایجاد کرد که ظاهرا تاکنون توجه زیادی به
            آنها نشده است. طبق بررسی های انجام شده باید گام های جدی تری برای
            ذخیره و ساماندهی سرمایه انسانی بومی در این منطقه برداشت.
          </p>
          <p>
            متاسفانه آمار اعتیاد و خودکشی در شهر بیجار هر روز رو به افزایش است و
            مسئولان شهرستان هنوز آن را باور نکرده و هیچ مسئولیتی در قبال آن را
            نمی پذیرند. به عنوان مثال آموزش و پرورش بیجار تا کنون آماری از تعداد
            دانش آموزان معتاد در این شهرستان ارائه نکرده است و نپذیرفته که دانش
            آموز مصرف کننده ای هم هست که بتوان برای آن راه حلی در نظر گرفت.
            تعداد بالای آمار خودکشی و قتل در شهر تایید کننده این سخن است که
            مسئولان در شهر بیجار تاکنون قبول نکرده اند که معضل بزرگی به نام
            خودکشی وجود دارد که برای آن نسخه خاصی بپیچند.
          </p>
          <p>
            استان کردستان ازلحاظ صادرات به عراق که کشوری است عمدتا مصرف کننده،
            دارای مزیت خوب و بالایی است. موقعیت جغرافیایی و منابع سطح استان باعث
            می شود تابتوان محصولات زیادی را در استان تولید و سپس به عراق صادر
            کرد. مشخصا دررابطه با بیجار باید گفت که نزدیکترین مسافت با بازارچه
            مرزی سقز با 160 کیلومتر را دارد البته این بازار درحال حاضر به دلیل
            زیاد بودن هزینه ترخیص کالا تعطیل است. فاصله بیجار تا مریوان 260 و تا
            بانه 220 کیلومتر است. این میزان از مسافت نشاندهنده آن است که اگر
            محصول تولیدی دارای ارزش افزوده بالا و سود زیادی نباشد، صادرات آن
            ازطریق این مرزهای ذکرشده مقرون به صرفه نخواهد بود؛ درنتیجه به نظر می
            رسد در رابطه با بیجار باید بر روی صادرات کالا به شهرهای پرجمعیتی که
            در بالاتر ذکر شد کار کرد.
          </p>
          <p>
            در پایان باید گفت باتوجه به کم بودن جمعیت شهرستان و دور بودن بیجار
            از شهرهایی مانند بانه یا مریوان که دارای بازارچه مرزی هستند؛ بنظر
            نمی رسد بتوان کارهای تولیدی و صنعتی بزرگی را در این شهر پیشنهاد داد؛
            درنتیجه بیشتر تمرکز این تحلیل بر روی مشاغلی است که بتواند نیاز خود
            شهرستان را در زمینه های مختلف برطرف نماید. اگر شرایط برای صادرات
            کالا به شهرهای دیگر کشور و یا حتی خارج از کشور مهیا شد، مشاغل
            پیشنهادی درذیل می توانند به صورت صنعتی دنبال شوند.
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
            بیجار شهرستانی است کوهستانی با مراتع خوب و غنی که شرایط مناسبی را
            برای پرورش انواع دام های سنگین و سبک و حتی اصلاح نژادشده بوجود آورده
            است. البته درحال حاضر نژاد اکثر دام ها بومی است. زراعت غنی و تولید
            محصولاتی مانند گندم، جو و یونجه نیز باعث دسترسی آسان و ارزان به
            خوراک دام شده است. دامداری از مشاغل اصلی مردم بیجار محسوب شده و
            بازدهی بسیارخوب و بالایی دارد، تاحدی که قبل از ممنوعیت صادرات گوشت،
            این محصول دامی به کشورهایی مانند عراق صادر می شد.{" "}
          </p>
          <p>
            بیشتر دامداری در بیجار به صورت سنتی انجام می شود البته برخی واحدهای
            صنعتی و نیمه صنعتی نیز در این زمینه فعالیت دارند. همچنین درحال حاضر
            بیشتر دامداری که انجام می شود، معطوف به دام های سبک مانند گوسفند و
            بز است. باتوجه به تجربه دامداران در این زمینه و همچنین نیاز همیشگی
            به مصرف فرآورده های به دست آمده از گوسفند، توسعه دامداری در این
            شهرستان پیشنهاد می شود. درادامه باید به پرورش گاو نیز اشاره کرد که
            قابلیت توسعه خواهد داشت.
          </p>
          <p>
            کیفیت بالای عسل تولیدی و وجود مراتع بسیارخوب در شهرستان بیجار باعث
            شده است تا زنبورداری در سطح خوب و قابل ملاحظه ای انجام شود. باتوجه
            به بازار مصرف و سود سرشاری که در تولید عسل و زنبورداری وجود دارد، می
            توان این شغل را توسعه داد.{" "}
          </p>
          <p>
            باتوجه به شرایط کوهستانی و سرد بیجار، می توان بر روی پرورش دام های
            اصلاح نژادشده نیز کار کرد. دام های اصلاح نژادشده دارای سود بسیارخوب
            و بازدهی بالایی هستند؛ درنتیجه درصورت آموزش و فرهنگ سازی، می توان
            نتایج خوبی از فعالیت در این زمینه را شاهد بود. در پایان باید به
            پرورش اسب اشاره کرد که در اولویت آخر این رسته قرار می‌گیرد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            کمبود آب در شهرستان بیجار و عدم استفاده از آب سدها مخصوصا سد تلوار،
            موجب شده است که بسیاری از کشاورزی زراعی در این شهرستان به صورت دیم
            انجام شود.{" "}
          </p>
          <p>
            بیشترین محصول تولیدی در بیجار گندم است. گندم نسبت به دیگر محصولات به
            راحتی قابل کشت است و در بیشتر شرایط آب و هوایی پاسخگوست. باتوجه به
            خرید تضمینی دولت و سبقه ای که بیشتر کشاورزان بیجاری در عمل آوردن این
            محصول استراتژیک دارند، توسعه کشت آن دارای سود خوبی خواهد بود. گندم
            در تولید محصولاتی مانند آرد که ماده اصلی برای تولید تعداد زیادی از
            محصولات خوراکی است نیز به کار می رود؛ درنتیجه همیشه بازار فروش مخصوص
            به خود را خواهد داشت.
          </p>
          <p>
            پس از گندم باید به محصولی مانند زعفران اشاره کرد. زعفران محصولی است
            استراتژیک که برای پرورش به آب کمی نیاز دارد. باتوجه به سطح درآمدی
            مردم منطقه و بازار فروش زعفران به نظر می رسد بتوان اقدامات خوبی در
            این زمینه انجام داد البته کشت این محصول چند سالی است که درحال انجام
            است. در ادامه در رابطه با گیاهان دارویی باید گفت که بعضا به صورت
            خودرو در کوهستان ها وجود دارند؛ اما می توان در زمینه کشت آنها
            اقدامات خوبی انجام داد؛ زیرا شرایط اقلیمی جوابگوی تولید محصولات این
            چنینی خواهد بود؛ ولی در این بین باید به بازار فروش نیز دقت لازم را
            داشت و درصورت لزوم این محصولات را در بازار شهرستانهای همجوار به فروش
            رساند. علف چشمه، پونه خوراکی، گل آقا، شنگ، گوشت برهپ کنگر، ترشک
            اسفنجی، پیاز وحشی و زرایند کوهی از انواع این گیاهان است. یکی دیگر از
            این گیاهان نیز که استفاده از فراورده های آن از گذشته در بین ایرانیان
            رواج داشته است، گل محمدی است. این محصول نیز برای کشت دارای مزیت است
            و بازدهی خوبی خواهد داشت.{" "}
          </p>
          <p>
            یونجه، یکی از خوراک دام های اصلی برای تغذیه دام است. طبق بررسی های
            انجام شده، سطح قابل توجهی از کل تولید استان از یونجه، در بیجار است.
            باید گفت سطح دامداری که در استان و بیجار درحال انجام است باعث می شود
            تا بتوان توسعه کشت این محصول را پیشنهاد داد؛ حتی می توان مازاد مصرف
            در سطح شهرستان را به شهرهای اطراف فرستاد. لازم به ذکر است یونجه
            دارای آهن زیادی است که درصورت فرهنگ سازی، می توان از خواص درمانی آن
            برای انسان‌ها نیز استفاده کرد.{" "}
          </p>
          <p>
            حبوباتی مانند عدس و نخود نیز در این شهرستان کشت می شود. باتوجه به
            وجود پتانسیل و ظرفیت، می توان کشت این محصولات را توسعه داد و نیاز
            شهرستان در این زمینه را از بین برد.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            اقلیم سرد و خشک بیجار شرایط خوبی برای پرورش طیور مختلف را به ارمغان
            آورده است. مرغداری های زیادی در سطح شهرستان وجود دارند. این مرغداری
            ها عمدتا به پرورش مرغ گوشتی می پردازند. لازم به ذکر است بیشتر این
            مرغ ها برای کشتار به زنجان برده می شوند.{" "}
          </p>
          <p>
            شترمرغ از طیوری است که واحدهای محدودی در بیجار به پرورش آن به صورت
            صنعتی مشغول هستند. محصولات به دست آمده از این پرنده در بازار قیمت
            بالایی دارند و از خاصیت دارویی خوبی نیز برخوردار هستند؛ درنتیجه
            درصورت افزایش پرورش آن‌ها و همزمان ایجاد واحدهایی برای فراوری
            محصولات آن، می توان سود چشم گیری را شاهد بود.{" "}
          </p>
          <p>
            طبق بررسی‌های انجام‌شده شرایط برای پرورش بوقلمون وجود دارد و بعضا در
            روستاها به صورت سنتی پرورش می یابند. باتوجه به آب و هوا می توان بر
            روی توسعه پرورش این پرنده، سرمایه گذاری کرد؛ ولی باید به بازار فروش
            و ذائقه مردم توجه ویژه ای داشت.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            محصولات غذایی از مواردی هستند که میزان مصرف آنها همیشه زیاد و قابل
            توجه است البته در شرایط اقتصادی امروز برخی از محصولاتی که در این
            رسته قرار می گیرند، کالای لوکس محسوب می شوند. این کالاها در صورت
            تولید یا باید به خارج از کشور صادر شوند و یا در شهرهای بزرگی که کشش
            خرید وجود دارد، به فروش برسند.{" "}
          </p>
          <p>
            گندم، اصلی ترین محصول زراعی بیجار است. محصولاتی که از گندم به دست می
            آید و تولید می شود، معمولا از مواردی است که به میزان زیاد و توسط
            بیشتر افراد مصرف می شود؛ درنتیجه تولیدشان در هر زمانی دارای مزیت
            خواهد بود. آرد، نان، شیرینی، رشته آشی و پلویی و سایر فرآورد های گندم
            مانند نان بستنی، کلوچه و بیسکویت، نشاسته گندم، برشته کردن گندم و آرد
            سوخاری از این محصولات هستند. فرآیند تولید این موارد پیچیده نیست و
            توسعه تولیدشان دارای مزیت خواهد بود البته در رابطه با آرد باید اشاره
            کرد که باتوجه به وجود یک کارخانه آرد در شهرستان و مصرف تولیدات آن در
            سطح منطقه ، به نظر نمی رسد کار در این حوزه مزیت زیادی داشته باشد.
            لازم به ذکر است برای راه‌اندازی مشاغل ذکر شده، باید به بازار فروش
            آن‌ها دقت شود.{" "}
          </p>
          <p>
            فرآوری شیر گاو، گوسفند و بز و تولید لبنیات از مشاغلی است که می توان
            همیشه در آن کار کرد. توسعه کارگاه هایی که محصولات باکیفیت لبنی را
            تولید و نیاز شهرستان در این زمینه را برطرف کنند، سود خوبی را ایجاد
            خواهد کرد.{" "}
          </p>
          <p>
            فرآوری گیاهان دارویی خودرو مانند عرق گیری، بسته بندی و یا خشک کردن و
            فرآوری گیاهان دارویی که پتانسیل کشت دارند مانند گل محمدی، باتوجه به
            بازار مصرفی که دارند و سوق پیدا کردن تمایل مردم به مصرف محصولات این
            چنینی، پیشنهاد می شود.{" "}
          </p>
          <p>
            فرآوری صیفی جات مانند تولید رب گوجه فرنگی و یا تولید خیارشور،
            پیشنهاد می شود. میزان تولید این محصولات در شهرستان چشم گیر است و
            بازار مصرف نیز برای فرآورده های آن‌ها همیشه وجود دارد؛ گرچه برخی از
            محصولات فرآوری شده به صورت خانگی و برای مصرف شخصی تولید می شود؛ ولی
            می توان این مشاغل را به صورت جدی تر و صنعتی تر و در کارگاه ها دنبال
            کرد.{" "}
          </p>
          <p>
            در ادامه باید به تولید سوسیس و کالباس اشاره کرد. باتوجه به اینکه
            دامداری در سطح بالایی در بیجار انجام می‌شود واین محصول جایگاه ویژه
            ای در سبد بیشتر خانوارها دارد می توان تولید این محصول را البته در
            ابتدا به صورت کارگاهی، پیشنهاد داد. لازم به ذکر است که باید بازار
            فروش این محصول نیز بررسی شود.
          </p>
          <p>
            درحال حاضر محصولات باغی، نیاز مردم شهرستان به بیشتر میوه های سردرختی
            را برطرف می کند؛ اما درصورت حل شدن مشکل آب و افزایش سطح زیرکشت این
            محصولات، می توان در زمینه تولید فرآورده های آنها مانند چیپس میوه،
            میوه خشک، آبمیوه و سایر فرآورده ها مانند کمپوت، شیره، شهد، مربا،
            ترشی و خشکبار اقدمات پرسودی انجام داد. باتوجه به کشت انگور در منطقه
            فرآوری انگور شامل تهیه شیره، سرکه و علی الخصوص کشمش پیشنهاد می شود.
            درضمن همانطور که در بالا اشاره شد باتوجه به شرایط اقتصادی بیجار و
            لوکس بودن بیشتر این تولیدات، توصیه می شود بازاری در خارج از شهرستان
            برای فروش آنها تامین شود.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            همانطور که اشاره شد، دور بودن بیجار از شهرهایی با جمیعت بالای یک
            میلیون نفر، کم جمعیت بودن خود شهرستان و دور بودن از شهرهای مرزی
            استان، موجب می شود تا مزیت بالایی در ایجاد مشاغلی در این رسته به
            صورت صنعتی و با تناژ بالا وجود نداشته باشد. با این وجود، رفع نیاز
            مردم شهرستان و ایجاد اشتغال از مواردی است که باید در اولویت قرار
            گیرد و توجه ویژه ای به آنها شود. مشاغل پیشنهاد شده در ذیل عمدتا به
            صورت کارگاهی و یا خانگی قابلیت اجرا دارند البته درصورتیکه بازار فروش
            و تقاضایی در خارج از شهرستان مهیا و یا صادرات محصولات تولیدی مقرون
            به صرفه شود، می توان آنها را در مقیاس صنعتی نیز اجرا کرد.{" "}
          </p>
          <p>
            بسته بندی مواردی که در رسته صنایع غذایی پیشنهاد شده است مانند میوه
            خشک، چیپس میوه، لبنیات تولیدی، عرق گیاهان دارویی، خیارشور و... می
            تواند دارای سود خوب و مزیت بالایی باشد البته باید اشاره کرد که قیمت
            محصولات ازحد مشخصی که در توان مردم شهرستان است، بالاتر نرود.{" "}
          </p>
          <p>
            بسته بندی عسل، باتوجه به مرغوبیت عسل تولیدی و وجود شرایط برای توسعه
            آن، پیشنهاد می شود. این محصول در صورت بسته بندی و برندسازی می تواند
            به استانهای دیگر نیز صادرات خوبی داشته باشد. همچنین بسته بندی
            زعفران، شغلی است که ارزش افزوده بسیارزیادی را به کشت این محصول اضافه
            می کند و درآمد بسیارخوبی خواهد داشت.{" "}
          </p>
          <p>
            باتوجه به رونق دامداری و تولید پوست فراوان در شهرستان، فراوری پوست
            دام به منظور تولید چرم از پوست گاو و نخ از پشم و کرک گوسفند مزیت
            دارد. بازار مصرف محصولات تولیدی در صنایع چرم دوزی و سایر صنایع دستی
            مانند قالی‌بافی است.
          </p>
          <p>
            در پایان باید به فرآوری محصولات به دست آمده از شترمرغ مانند تولید
            روغن شترمرغ اشاره کرد که درصورت تولید دارای سود و ارزش افزوده زیادی
            است. درضمن این محصولات قابلیت صادرات به عراق را نیز دارد.{" "}
          </p>
          <p>
            طبق بررسی های انجام شده، درحال حاضر کشتارگاه مجهز و فعالی در سطح
            شهرستان موجود نیست؛ درصورتیکه ایجاد کشتارگاه مرغ باوجود تعداد زیادی
            مرغداری در بیجار می تواند دارای سود خوبی باشد البته باید توجه داشت
            که این واحد با ایجاد دو یا سه مورد به حالت اشباع خواهد رسید. درضمن
            قبل از انجام هر اقدامی در این زمینه باید به این مورد دقت داشت که
            بازار هدف تامین شود و مرغ ها برای کشتار به دیگر استانها مانند زنجان
            برده نشوند.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            بیجار تنها راه ارتباطی میان استان کردستان واستان زنجان است. همچنین
            جاده بیجار-تکاب، یکی از راه‌های ارتباطی استان کردستان با استان
            آذربایجان غربی است، از سمت شرق جاده بیجار-کبودرآهنگ و بیجار - بهار
            هم یکی از راه‌های ارتباطی مابین استان کردستان و استان همدان است.
            راه‌های ارتباطی بیجار در داخل استان کردستان از جنوب به قروه و از شرق
            به شهره‌های دیواندره و سنندج منتهی می‌شود. این موقعیت جغرافیایی باعث
            می شود تا بتوان سود خوبی از انواع مشاغل خدماتی بین راهی در این شهر
            کسب نمود. باتوجه به مطلب فوق و باعنایت به لیست مزیت سنجی، مشاغلی
            مانند جوشکاری، اسباب بازی فروشی، مصالح فروشی، میوه فروشی، کفاشی،
            صافکاری و نقاشی خودرو و.... علاوه بر رفع نیاز شهرستان، نیاز مسافران
            گذری و توریست ها را نیز برطرف خواهد کرد.{" "}
          </p>
          <p>
            وجود کوهای بلند و طبیعت زیبا در بیجار باعث شده است تا ظرفیت خوبی
            برای ایجاد انواع امکانات تفریحی و گردشگری وجود داشته باشد. تبلیغ
            درباره این جاذبه ها درسطح کشور و یا کشورهای های همجوار مانند عراق و
            ترکیه، باعث شناسانده شدن این موارد به افراد شده و تمایل به استفاده
            از این جاذبه ها در آنها ایجاد خواهد شد. درصورت ایجاد مشاغلی برای
            ارائه سرویس و خدمات به گردشگرانی که از این امکانات استفاده می کنند،
            باید به فصلی بودن مسافر و استفاده از این موارد نیز دقت لازم را داشت.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری رواج چندانی در بین اهالی شهرستان بیجار ندارد. به علت کمبود
            آب بیشتر مواردی که در رسته باغداری قرار می گیرد از خارج از شهرستان
            وارد می شود و جز چند مورد، در بیجار تولید نمی شوند؛ بعنوان مثال
            بیشتر میوه جات تولیدی به صورت شخصی تولید می شود.{" "}
          </p>
          <p>
            گوجه و خیار عمده ترین محصولات از خانواده صیفی جات است که در بیجار
            تولید می شوند. باتوجه به بازار همیشگی این دو محصول و فرآورده های
            آنها، توسعه کشت و فعالیت در این زمینه دارای مزیت خواهد بود و پیشنهاد
            می شود.{" "}
          </p>
          <p>
            انگور تنها محصول باغی از خانواده میوه جات است که به میزان قابل توجه
            تولید می شود. میوه جاتی مانند سیب، گلابی، زردآلو، هلو، شلیل و
            خشکباری مانند بادام و گردو نیز به صورت محدود در بیجار تولید می شوند.
            باتوجه به کیفیت این محصولات و ارزش افزوده ای که از تولید فرآورده های
            این محصولات به دست می آید، توسعه کاشت آنها دارای سود خوبی خواهد بود.
            درضمن بیشتر این محصولات با آب و هوای شهرستان سنخیت دارند و با محیط
            سازگار هستند.
          </p>
          <p>
            تعداد گلخانه های کمی در بیجار مشغول به فعالیت هستند که بیشتر در
            زمینه پرورش گل های زینتی مانند گل رز، صیفی جات، سبزیجات و محصولات
            جالیزی مانند هندوانه مشغول هستند. مشخصا در رابطه با گل های زینتی
            باید اشاره کرد که و درصورت افزایش تولید، می توان به شهرهای دیگر صادر
            کرد. درضمن در لیست مزیت سنجی، به علت تجربه کشت، پرورش قارچ پیشنهاد
            شده است.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی از مشاغل اصلی افراد قدیمی خصوصا زنان روستایی است؛ اما
            امروزه اوضاع این صنعت، اوضاع به سامانی نیست. بسیاری از مردم یا به
            دلیل گران بودن مواداولیه و ارزان بودن قیمت خرید، از این حرفه کناره
            گرفتند.
          </p>
          <p>
            بازار فروش، مهمترین معضل تولید انواع صنایع دستی در ایران است.
            رزوگاری بود که بازارهای فرش ایران از پررونق ترین بازارها به شمار می
            رفت؛ ولی امروز یا بسیاری از آنها تعطیل شده و یا درحال حاضر متروکه ای
            بیش نیستند.{" "}
          </p>
          <p>
            فرش بیجار از مهمترین محصولات تولیدی در این شهرستان است که شهرت جهانی
            دارد؛ اما درحال حاضر رونق زیادی در بازار این محصول دیده نمی شود.
            گلیم، قالی و قالیچه نیز وضعیت بهتری از شرایط فرش بافی ندارند و تولید
            همه شان بدلیل کم فروغ بودن بازار فروش، کاهش چشمگیری داشته است.{" "}
          </p>
          <p>
            تقریبا می توان گفت بسیاری از موارد بالا به صورت سنتی درحال تولید
            هستند؛ ولی همانطور که اشاره شد میزان تولید آنها بسیار کاهش یافته
            است. اگر مسئله بازار فروش حل و فصل نشود و این تولیدات جان تازه ای
            نگیرند، به احتمال زیاد دیگر نمی توان از آنها بعنوان برند شهرستانی
            مانند بیجار نام برد.{" "}
          </p>
          <p>
            چرم دوزی از دیگر حرفه هایی است که در بیجار دنبال می شود و محصولات
            تولیدی نیز از کیفیت خوبی برخوردار است ؛ بنابراین افزایش فعالیت در
            این زمینه مزیت دارد.{" "}
          </p>
          <p>
            سفالگری نیز در بیجار انجام می شود و تولیدات خوبی هم دارد. باتوجه به
            جاذبه های توریستی شهرستان و رفت و آمدی که به این شهرستان می شود، می
            توان توسعه سفالگری را پیشنهاد داد و انتظار بازارفروش خوبی برای آن
            داشت.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            آب بیجار کم است و وضعیت مطلوبی ندارد؛ اما باتوجه به اقلیم و کیفیت
            همین آبهای اندک، پرورش ماهی های سردآبی درحال انجام است. اگر مشکل آب
            بیجار حل شود، می توان پرورش ماهی را توسعه داد و سودخوبی از این
            تولیدات به دست آورد البته قبل از هراقدامی، باید ذائقه مردم شهرستان و
            شهرستانهای همجوار را درنظر گرفت تا در تامین بازار فروش مشکل جدی
            ایجاد نشود.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            معادن مختلفی مانند سنگ آهن، سنگ معدن و... در بیجار وجود دارد. درحال
            حاضر بهره برداری محدودی از این موارد می شود که درصورت افزایش، می
            تواند تعداد شغل بیشتری را برای مردم خصوصا جوانان ایجاد کند و انگیزه
            خوبی برای مهاجرت معکوس به بیجار باشد.{" "}
          </p>
          <p>
            طبق توضیحاتی که در بالاتر در رابطه با روحیه مردم و شرایط آب داده شده
            است، به نظر نمی رسد ایجاد واحدهای صنعتی مزیت بالایی در این شهرستان
            داشته باشد؛ درنتیجه برای ایجاد شغل و افزایش اشتغال باید در زمینه های
            دیگری سرمایه گذاری کرد. البته باتوجه به مساعد بودن شرایط اقلیمی برای
            ایجاد و فعالیت در گلخانه ها، کار در زمینه تولید ادوات موردنیاز برای
            گلخانه ها می تواند سودده باشد.{" "}
          </p>
          <p>
            علی رغم کم آبی شهرستان بیجار کارخانه های متفاوتی در این شهر مشغول به
            فعالیت هستند که بیشتر تولیدات خود را نیز به شهرهای دیگر کشور صادر می
            کنند. واحدهای صنعتی نظیر تولید قطعات خودرو، ادوات کشاورزی، فوم سازی،
            فیبرسازی، قند، آرد و... در بیجار مشغول به فعالیت هستند. یک کارخانه
            سیمان نیز در پنج کیلومتری شهرستان واقع شده که میزان اشتغال قابل
            ملاحظه ای را ایجاد کرده و درحال فعالیت است. بیشتر کارگران مشغول در
            این واحدها نیز بومی شهرستان هستند .{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
