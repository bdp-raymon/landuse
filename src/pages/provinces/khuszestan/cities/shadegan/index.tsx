import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-13"].cities["IR-1318"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        gardening: "باغداری",
        livestock: "دامداری",
        birds: "طیور",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        industry: "صنعت",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان شادگان یا الدورق با جمعیتی بالغ بر 138 هزار و 480نفر، یکی از
            شهرستان‌های استان خوزستان در جنوب غربی ایران است. تقسیمات کشوری این
            شهرستان، بنابر آنچه در نتایج آمارگیری سرشماری سال ۱۳۹۵ کل کشور آمده
            ‌است، بر حسب بخش به دو بخش مرکزی و بخش خنافره تقسیم شده است. شهرستان
            شادگان با 3197 کیلومتر مربع مساحت در جنوب غربی استان خوزستان واقع
            شده است. این شهرستان از شمال به شهرستان اهواز، از شرق به شهرستان
            بندر ماهشهر، از غرب به شهرستان خرمشهر و از جنوب به شهرستان آبادان
            محدود می‌شود. ارتفاع این شهر از سطح دریا 5 متر و آب و هوای آن گرم و
            مرطوب است. شکل زیر موقعیت شهرستان شادگان را نشان می دهد.
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
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی،
            ارزآوری و تامین مالی سایر بخش‎های زیربنایی را نام برد. با توجه به
            نظر کارشناسان، نیشکر، برنج و کلزا و در اولویت های پایین تر کاشت
            گندم، جو، لوبیا چشم بلبلی، باقلا، کنجد و تعدادی از گیاهان دارویی در
            شهرستان در حوزه زراعت دارای مزیت می باشد.
          </p>
          <p>
            نِیشِکَر بین ۶ تا ۳۷ گونه دارد و گیاهی است بلند از جنس تباشیر، تیره
            غلات بومی مناطق معتدل گرم تا مناطق حاره همچون شادگان می‌باشد. نیشکر
            دارای ساقه ای ضخیم و بند بند است که قسمت داخلی آن لیفی و حاوی مقادیر
            زیادی عصاره شکر و بلندی آن بین ۲ تا ۶ متر می‌باشد. حدود 13 هزار
            هکتار نیشکر در شهرستان شادگان کشت می شود که نشان از سازگاری بالای
            این گیاه با شرایط آبی، خاکی و آب و هوایی شهرستان شادگان دارد؛ از این
            رو توسعه کشت این گیاه ارزشمند در شهرستان قابل توصیه می باشد.
          </p>
          <p>
            برنج از جمله مهم ترین غلات و اقلام غذایی است که بیشتر مردم به عنوان
            یک غذای اصلی به آن وابسته هستند. آب مورد نیاز برای کشت برنج از سایر
            غلات بیشتر و رطوبت کافی از عوامل مورد نیاز برای کاشت بهتر این محصول
            است. البته برای کشت این محصول باید بازار فروش و قیمت مناسب باشد تا
            کشاورزان متضرر نشوند و رونق تولیدات داخلی را زمینه ساز شود. در
            شهرستان شادگان، کاشت برنج متداول شده و سطح زیر کشت آن در شهرستان در
            حدود 6 هزار هکتار است و کشاورزان توانسته اند سود خوبی را از کشت این
            محصول کسب کنند؛ از این رو می توان کاشت این گیاه را برای شهرستان
            پیشنهاد داد.
          </p>
          <p>
            کاشت گیاه کلزا در شهرستان شادگان دارای مزیت می باشد، بطوریکه سالانه
            بالغ بر 2000 هکتار کلزا در سطح شهرستان کاشته می شود . کشت کلزا باعث
            از بین رفتن چرخه زندگی آفات، بیماری ها و علف های هرز گردیده و با
            کاهش جمعیت آن‌ها، موجب صرفه جویی در مصرف سموم و کاهش آلودگی های زیست
            محیطی می گردد. با توجه به آنکه زمان کشت کلزا در فصل پاییز است، نیاز
            گیاه به آب کم می‌باشد و با استفاده از نزولات جوی می توان به کشت آن
            در مناطقی از شهرستان که در فصل تابستان آبی در آنجا نیست، اقدام نمود.
            کلزا با تولید مقادیر قابل توجهی علوفه می تواند در تغذیه دام های
            منطقه نقش موثری داشته باشد. همچنین برگرداندن بقایای کلزا به خاک باعث
            افزایش حاصلخیزی خاک و بهبود ساختمان خاک خواهد شد.
          </p>
          <p>
            درصد زیادی از زراعت گندم و جو در شهرستان شادگان به صورت دیم انجام
            می‌شود و درصد بسیار کمی از آن به صورت آبی می باشد و در حالت آبی،
            بازدهی بیشتر است. در میان محصولات کشاورزی، کاشت گندم نسبت به بقیه کم
            دردسرتر است. گندم در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به
            مرحله سود دهی می رسد و در دو نوع بهاره و پاییزه کشت می شود که محصول
            دهی پاییزه آن بیشتر است. علاوه بر خود گندم، کاه آن نیز مشتری خاص
            خودش را دارد. بعد از برداشت محصول، زمین آن هم چراگاه گوسفندان
            می‌شود. همچنین مورد حمایت های دولت واقع شده و کود شیمیایی و بذر نیز
            به شکل یارانه ای در اختیار کشاورزان قرار می گیرد؛ بنابراین توسعه این
            کشت توجیه اقتصادی خوبی در شهرستان شادگان دارد.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            استفاده می شود و در تهیه غذای کودک نیز کاربرد دارد. جوشانده جو داروي
            خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین آورنده
            کلسترول خون است. کاشت این گیاه زراعی در کنار گندم، در شهرستان شادگان
            رایج بوده و با توجه به سازگاری خوب برخی از ارقام جو با شرایط
            شهرستان، امکان استفاده از اراضی دیم نیز وجود دارد. بازار فروش مطمئن،
            کاشت، داشت و برداشت مکانیزه، از عواملی است که باعث ایجاد مزیت برای
            کاشت این گیاه شده و با توجه به تولید پایین جو در کشور نسبت به میزان
            مورد نیاز، توسعه کاشت این محصول پیشنهاد می شود.
          </p>
          <p>
            در اولویت های پایین تر، با توجه به اهمیت تولید حبوبات در اقتصاد
            کشاورزی و مستعد بودن شرایط اقلیمی از نظر نوع خاک که سبک و غیر اسیدی
            است و آب و هوای این شهرستان، توسعه کشت حبوباتی مانند لوبیا چشم بلبلی
            از جمله مواردی است که ارزش افزوده زیادی را به دنبال دارد. لازم به
            ذکر است که لوبیا چشم بلبلی شهرستان شادگان شهرت خاصی در شهرستان و
            استان خوزستان دارد.
          </p>
          <p>
            طبق نظر کارشناسان، در شهرستان شادگان تولید باقلا نیز دارای مزیت است.
            باقلا محصول فصل خنک است و قادر است دمای 4- درجه سانتی گراد را نیز
            تحمل کند، ولی در دمای 7- درجه سانتی گراد بوته آن خشک شده و از بین می
            رود. باقلا نسبت به خشکی هوا مخصوصا در مرحله گل دهی خیلی حساس است.
            گرمای زیاد، خشکی هوا و تابش خورشید اثرات نامطلوبی روی مقدار محصول
            باقلا خواهد داشت. با توجه به آب و هوای مرطوب شهرستان شادگان، مزیت
            خاصی برای کشت باقلا ایجاد شده است. باقلا به علت داشتن دوره نمو
            طولانی و دارا بودن شاخ و برگ زیاد احتیاج زیادی به آب دارد، زیرا در
            زمان خشکی خاک رشد ریشه های فرعی کم شده و گیاه خیلی زود پژمرده می شود
            و بنابراین رطوبت کافی زمین از شرایط اولیه کشت موفقیت آمیز این گیاه
            است که در شهرستان شادگان این رطوبت در برخی مناطق به راحتی قابل تامین
            است.
          </p>
          <p>
            گرمای سوزان در زمین های زراعی در طول تابستان باعث شده است تا مردم
            شهرستان شادگان بعد از برداشت گندم و جو، کاشت کنجد را به عنوان گیاهی
            برای کشت دوم انتخاب کنند. وجود ارقام مقاوم و سازگار با شرایط
            شهرستان، عملکرد بالا، قیمت زیاد محصول و مقاومت در برابر کم آبی از
            ویژگی های کنجد می باشد که آن را برای کاشت در شهرستان توجیه پذیر کرده
            است. با توجه به بازار خوب کنجد در شهرستان، کاشت بیشتر آن در شهرستان
            توصیه می شود.
          </p>
          <p>
            توسعه کشت گیاهان دارویی به دلیل داشتن آستانه تحمل بالا در برابر تنش
            های محیطی و نیاز کم به منابع آبی حرکتی هوشمندانه و در خور توجه است.
            تقاضای مصرف گیاهان دارویی به علت روی گردانی از داروهای شیمیایی و یا
            حتی استفاده برخی از این محصولات در تولیدات کارخانه‌های بزرگ دارویی
            همواره رو به افزایش است. همین امر مزیت خوبی برای کاشت گیاهان دارویی
            رزماری و آلوئه ورا در شهرستان شادگان به ارمغان آورده است.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج در شهرستان شادگان است. تولید اشتغال
            توسط رسته باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب
            و کار رونق می‌بخشد. کشاورزی و از جمله باغبانی در توسعه ملی و افزایش
            رفاه عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری،
            توزیع درآمد و عدالت اجتماعی موثر است. در یک نگاه کلی می توان گفت نقش
            کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری
            الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه
            شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای
            بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است. در حوزه باغداری، در
            شهرستان شادگان بیشتر تمرکز بر روی کاشت درختان خرما بوده و در اولویت
            های پایین تر، کاشت بامیه، انگور، سیب، سبزیجات، صیفی جات و پرورش قارچ
            مد نظر کشاورزان شهرستان می باشد.
          </p>
          <p>
            خرما از جمله محصولات باغی است که با آب و هوای گرم و اقلیم جغرافیایی
            شهرستان شادگان سازگاری بسیار خوبی دارد بطوریکه حدود 99 درصد از باغات
            شهرستان را خرما تشکیل می دهد و حدود 13 هزار هکتار نخلستان در این
            شهرستان وجود دارد . خرما میوه ای با ارزش غذایی بالا است که به علت
            دارا بودن مواد قندی قابل توجه (حدود 70 درصد) علاوه بر مصرف غذایی، در
            صنعت نیز موارد استفاده فراوان دارد. مصارف مختلف خرما در صنعت شامل
            موارد خوراکی مانند شیره، شهد، شکلات خرما و... است. همچنین از ضایعات
            آن نیز در ترکیب خوراک دام و طیور و از برگ خرما نیز در ساخت انواع
            ظروف بافتنی و حصیر و از تنه و چوب خرما در کارخانجات نئوپان سازی و
            کاغذ سازی و همین طور پوشش ساختمان ها و پل ها استفاده می کنند. با
            توجه به موارد مذکور، احداث نخلستان در شهرستان شادگان از توجیه
            اقتصادی بالایی برخوردار است.
          </p>
          <p>
            بامیه در خانواده گیاهان ختمی، چای ترش، کاکائو و پنبه قرار می گیرد.
            این گیاه در شرایط آب و هوایی شادگان به خوبی رشد می کند و دارای گل
            های بزرگی است که در نهایت به گیاه سبزغلاف مانند پر از دانه تبدیل می
            شود. بامیه برای مناطق گرمسیری همچون شادگان مناسب بوده و در مناطق
            سردسیر، محصول کمتری تولید می کند. با توجه به گرمسیری بودن شهرستان
            شادگان، مزیت خوبی برای این گیاه در شهرستان به وجود آمده است که برای
            سرمایه گذاری قابل توصیه است.
          </p>
          <p>
            انگور از مهم‌ترین محصولات باغی است که هم به لحاظ سطح زیر کشت و هم
            ارزش اقتصادی و تغذیه‌ای، مورد توجه کشاورزان و کارآفرینان است.
            زیبایی، تنوع رنگ، طعم و مزه، ارزش غذایی، خواص دارویی و وجود
            فرآورده‌‌های تبدیلی چون کشمش، شیره انگور، روغن هسته انگور، کنسانتره،
            آب انگور، سرکه، آبغوره، دارو‌های تقویتی و مواد آرایشی ‌بهداشتی،
            همچنین توصیه‌‌های دینی و مذهبی، انگور را به یک میوه استثنایی و
            بی‌نظیر تبدیل کرده است؛ بنابراین در بین مردم طرفداران زیادی دارد و
            بازار مصرف این محصول به صورت محصولات فراوری شده و تازه خوری فراهم
            است. سطح زیرکشت این محصول بیش از 200 هکتار در سطح شهرستان شادگان است
            . سازگاری خوب این میوه با شرایط شهرستان باعث شده است تا گسترش سطح
            زیر کشت آن دارای مزیت باشد.
          </p>
          <p>
            در شهرستان شادگان، برخی مناطق که دارای آب و هوای خنک می باشند، کاشت
            درخت سیب با موفقیت بیشتری همراه است. درختان سیب نسبتاً به شرایط خاک
            شهرستان بی‌تفاوت هستند و در دامنه گسترده‌ای از مقادیر pH و سطوح
            حاصلخیزی رشد می کنند. این درختان حتماً باید در مقابل باد مراقبت شده
            و نباید در مناطق پست که در معرض آخرین سرماهای بهاری می باشند، کاشته
            شوند. سرمای دیررس بهاره در شهرستان شادگان تقریبا وجود ندارد و همین
            امر یک مزیت عالی برای کاشت سیب در این شهرستان ایجاد کرده است و توسعه
            کاشت آن را می توان در دستور کار قرار داد.
          </p>
          <p>
            کاشت سبزیجات و صیفی جاتی نظیر هندوانه و خیار در فضای آزاد در شهرستان
            شادگان رایج بوده و سوددهی خوبی برای کشاورزان دارد. این شهرستان گرمای
            مورد نیاز سبزیجات و صیفی جات مختلف را به راحتی تامین کرده و مزیت
            خوبی از این طریق برای کاشت آن ها ایجاد نموده است و توسعه کاشت آن ها
            را ممکن ساخته است. بازار خوب و دائمی سبزیجات و صیفی جات باعث شده است
            تا کشاورزان در فروش محصول خود به مشکل خاصی برنخورند. سبزیجات و صیفی
            جات حاوی انواع ویتامین های مورد نیاز بدن بوده و از آن ها انواع مواد
            فرآوری شده غذایی می توان به دست آورد.
          </p>
          <p>
            در شهرستان شادگان پرورش قارچ نیز به صورت محدود انجام می شود که گسترش
            کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته باشد.
            فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی دارای مزیت
            خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین امر باعث شده که
            جایگزین مناسبی برای گوشت باشد. در برخی از شهرها و روستاها به دلیل
            عدم آشنایی با فواید قارچ، میزان مصرف این محصول پایین است که می توان
            با تبلیغ و معرفی این محصول، میزان مصرف را افزایش داد. همچنین پرورش
            قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک شروع
            کرد. در کل در شهرستان فعالیت جدی در این زمینه نشده است و جای کار
            برای ورود به این عرصه وجود دارد. شاید دلیل موفقیت تولید قارچ در
            شهرستان شادگان را بتوان دسترسی به مواد اولیه ارزان عنوان کرد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری یکی از مشاغل رایج در شهرستان شادگان است. دامداری با یکی از
            مهم ترین نیازهای انسان، یعنی نیاز به منابع غذایی و خصوصا منابع
            پروتئینی مرتبط می‌باشد؛ بنابراین توجه به آن امری ضروری است. فعالیت
            در این حوزه شغلی و افزایش بهره وری در آن، می تواند از راهکارهای
            توسعه اقتصادی و عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب
            شود. درصد بالایی از مردم این شهرستان به دامداری مشغول هستند. دامداری
            در این شهرستان عمدتا به هر دو صورت سنتی و صنعتی انجام می شود. دام
            هایی همچون گاو، گوسفند، بز و شتر در حال حاضر در شهرستان شادگان پرورش
            داده می شوند.
          </p>
          <p>
            پرورش گاو و پرواربندی گوساله در راستای تامین گوشت و شیر می تواند کسب
            و کار موفقی باشد. پرورش گاو به صورت داشتی ضمن کمک به تولید گوساله
            برای پرواربندی، نقش مهمی در تولید لبنیات دارد. بخش عظیمی از گوشت
            قرمز شهرستان توسط گاوهای پروار شده تأمین می‌شود؛ بنابراین این بخش از
            دامپروری و دامداری دارای ظرفیت زیادی برای توسعه و پیشرفت دارد.
            مزایای ورود به عرصه‌ی پرواربندی گوساله در شهرستان دارای جنبه های
            مختلف است. از یک طرف، از پوست گاو گوشتی در چرم‌سازی استفاده می‌شود؛
            از طرف دیگر از گوشت آن جهت استفاده در تغذیه انسان بهره برداری می
            شود. همچنین برای جلوگیری از واردات گوشت گوساله از کشورهای دیگر،
            تولید آن اهمیت دارد. پرواربندی گوساله به هر دو صورت صنعتی و سنتی در
            شهرستان انجام می گیرد. در پرواربندی علمی و صنعتی از دام‌های نر جوان
            نژادهای گوشتی استفاده می‌شود. استفاده از ظرفیت ژنتیکی دام‌های گوشتی
            و کاهش کشتار دام‌های شیری و مولد از دیگر محاسن پرواربندی با روش‌های
            نوین است. پرواربندی گوساله با روش‌های علمی و نوین سبب کاهش دوره
            پرواربندی، کاهش هزینه تولید گوشت و جلوگیری از تخریب مراتع می‌شود که
            همین موضوع مزیت خوبی برای پرورش گاو در شهرستان ایجاد کرده است.
          </p>
          <p>
            در شهرستان شادگان، پرورش گوسفند بومی نسبت به سایر دام ها، بیشتر مورد
            توجه دامداران قرار گرفته است؛ زیرا توان گوسفند بومی برای تحمل اقلیم
            های متفاوت شهرستان بیشتر است و جیره غذایی کمتر و در نتیجه هزینه
            کمتری نیز دارد. همچنین تمامی فرآورده های دامی مانند گوشت، شیر، ماست،
            کره و حتی پشم و پوست دام پرکاربرد هستند و فروش این فرآورده ها در
            تمامی روزهای سال انجام می‌شود. قیمت گوشت گوسفند بالا است و به علاوه
            اجزای گوسفند مانند دل، قلوه، جگر، سیرابی، کله پاچه، خوش گوشت و… نیز
            قابل فروش هستند. خرید دام برای قربانی کردن در ایام مذهبی مانند عید
            قربان و… موجب رونق این کسب و کار می‌شود؛ بنابراین گسترش پرورش گوسفند
            سوددهی خوبی را در شهرستان به همراه خواهد داشت.
          </p>
          <p>
            همچنین در اولویت های پایین تر، پرورش بز در شهرستان شادگان دارای مزیت
            می باشد. بزهای پرورشی در این شهرستان بیشتر از نوع بومی هستند و
            قابلیت توسعه پرورش آن‌ها در شهرستان وجود دارد. با توجه به وجود فصل
            گرم و تمایل بزهای بومی برای چریدن در مناطق مختلف شهرستان، به نظر می
            رسد، پرورش بز بومی در شهرستان از امتیاز خوبی نسبت به بسیاری از دام
            های دیگر داشته باشد. به طورکلی بز به‌عنوان یک حیوان اهلی نشخوارکننده
            جهت تولید شیر و گوشت در مناطق مختلف شهرستان پرورش داده می‌شود. جثه
            کوچک، کم توقع بودن و مقاومت در برابر بیماری‌ها و شرایط سخت محیطی،
            باعث شده تا بز به‌عنوان حیوانی محبوب در بین دامداران شهرستان شادگان
            تلقی شود.
          </p>
          <p>
            پرورش شتر از دیگر فعالیت هایی است که به میزان خیلی کم در این شهرستان
            انجام می شود و می توان نسبت به توسعه انجام آن اقدام کرد. البته بررسی
            ها نشان می دهد که پرورش آن در اولویت های بعدی مزیت های شغلی این حوزه
            قرار می گیرد. پرورش شتر نسبت به سایر دام ها مزیت‌هایی مانند قابلیت
            سازگاری با شرایط سخت محیطی، تحمل گرما، کم آبی و کیفیت پایین علوفه و
            مقاومت نسبی در مقابل امراض و عوامل بیماری زا دارد. همچنین شتر در
            مقایسه با سایر دام های اهلی علوفه را با قابلیت هضم بالا و بازده
            بیشتری استفاده می نماید و قادر است از انواع خاص گیاهان مرتعی (خشبی،
            خاردار و تیغ دار) به میزانی استفاده نماید که سایر دام ها قادر به
            استفاده از آن نیستند. در شهرستان شادگان در طی فصول تابستان علوفه ها
            خشک زیادی در مراتع باقی می مانند که برای تغذیه این دام بسیار مناسب
            هستند.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            امروزه یکی از معیارهای پیشرفت جوامع، وضعیت تغذیه به ویژه تغذیه
            پروتئین توسط افراد آن جامعه است. وظیفه متخصصین علوم دامی تولید
            پروتئین با حداکثر کیفیت و عملکرد و حداقل هزینه و بار محیطی می باشد.
            فراورده های طیور از مهم ترین منابع پروتئینی در اغلب کشورها هستند، به
            طوری که تولید و مصرف آن ها در اغلب کشورها با سرعت روز افزون در حال
            افزایش است. در این زمینه برای پرورش بسیاری از طیور شرایط مساعدی در
            شهرستان شادگان وجود دارد، اما نکته مهم و قابل توجه، بازاریابی جهت
            فروش محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می
            تواند زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه
            صنعتی فراهم نماید؛ بنابراین در ادامه به طیوری که مزیت خوبی در
            شهرستان دارد، یعنی پرورش بوقلمون، بلدرچین و اردک پرداخته می شود.
          </p>
          <p>
            بوقلمون از طیوری است که در شهرستان شادگان پرورش آن زیاد است و ظرفیت
            لازم برای توسعه پرورش آن وجود دارد. گوشت بوقلمون دارای خواص غذایي
            ويژه ای است و محدوديت مصرف خاصي نيز ندارد؛ بنابراین مي تواند جايگزين
            مناسبی براي گوشت قرمز علی الخصوص در بيمارانی که مصرف گوشت قرمز برای
            آنها با محدوديت هایی همراه است، مطرح گردد. از ديگر امتيازات گوشت
            بوقلمون وجود هر دو نوع گوشت سفيد و قرمز در يک لاشه است. پرورش
            بوقلمون به دلیل به صرفه بودن تولید، در دسترس بودن نهاده‌های مصرفی
            بوقلمون، نیاز بازار داخلی و نیز امکان انجام صادرات به کشورهای منطقه
            حائز اهمیت است. سازگاری این پرنده به شرایط آب و هوایی شهرستان شادگان
            نیز توسعه پرورش آن را با توجیه اقتصادی خوبی همراه کرده است.
          </p>
          <p>
            از طیور دیگری که پرورش آن در شهرستان رواج یافته و بازار خوبی برای
            گوشت آن در داخل شهرستان و کشورهای خارجی ایجاد شده است می توان به
            بلدرچین اشاره کرد. از این رو پرورش آن دارای مزیت خواهد بود. بلدرچین
            پرنده ای با جثه کوچک است که در برابر بسیاری از بیماری ها مقاوم است.
            پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن بازار فروش،
            کوتاه بودن دوره پرورش (40 روز) و عدم پرورش انحصاری توسط شرکت های
            بزرگ دارای مزیت است. محصولات این پرنده شامل گوشت، تخم بلدرچین و کود
            است. گوشت و تخم این پرنده دارای ارزش غذایی و دارویی و همچنین سرشار
            از پروتئین است.
          </p>
          <p>
            در اولویت های پایین تر، پرورش اردک در شهرستان به صورت سنتی رایج است
            و معمولا در روستاها، هر خانوار چند قطعه از این پرنده را نگه داری می
            کنند. سازگاری خوب این پرنده با شرایط محیطی شهرستان و تغذیه از مواد
            غذایی بی ارزش باعث شده است تا استقبال خوبی از این پرنده شود. تغذیه‌ی
            اردک‌ها شبیه به مرغ است، با این تفاوت که گوشت آن گرم است، ارزش غذایی
            بالایی دارد و مثل مرغ واکسینه نمی‌شود؛ در نتیجه مشکل هورمونی نیز
            ندارد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی می تواند یکی از راهکار
            های مهم جهت ایجاد اشتغال پایدار و توسعه پایدار امنیت غذایی شهرستان
            محسوب شود. ایجاد صنایع غذایی در شهرستان شادگان، علاوه بر اشتغالزایی،
            باعث ارتقای سطح درآمد ارزی نیز می‌شود که کاهش هدررفت محصولات کشاورزی
            و ایجاد ارزش افزوده از منابع را تا حد زیادی ممکن می‌سازد. شهرستان
            شادگان ظرفیت های بسیار خوبی در زمینه احداث صنایع غذایی مختلف دارد،
            اما تا به حال آنگونه که باید از این ظرفیت ها استفاده نشده است؛
            بنابراین سرمایه گذاری در زمینه ایجاد واحدهای تولید مواد غذایی در این
            شهرستان امکان پذیر بوده و ارزش افزوده خوبی را ایجاد خواهد کرد.
          </p>
          <p>
            با توجه به تولید خرمای زیاد در شهرستان شادگان که در سال 1398 به 50
            هزار تن رسید و همچنین واردات این محصول از استان های مجاور، احداث
            واحدهایی برای فرآوری خرما در این شهرستان دارای مزیت خواهد بود.
            فراوری‌های متداول از خرما نظیر تولید شیره خرما، شهد خرما، سرکه خرما،
            چیپس خرما، قند مایع خرما، قهوه خرما، شکلات، نان و لواشک خرمایی مزیت
            تولید دارند، البته فرآوری خرما در همه موارد برای شهرستان قابلیت
            فعالیت دارد.
          </p>
          <p>
            وجود باغات گسترده انگور در شهرستان، ماده اولیه را برای تولید شیره
            انگور سهل نموده است و همین امر در کنار وجود بازار فروش مناسب برای
            شیره انگور، فعالیت در این حوزه را توجیه پذیر کرده است. سایر فرآورده
            های انگور شامل کشمش، روغن هسته انگور، کنسانتره، آب انگور، سرکه،
            آبغوره، دارو‌های تقویتی و مواد آرایشی ‌بهداشتی می باشند که این تنوع
            محصولات خو یک مزیت بزرگ برای راه اندازی کسب و کار فرآوری انگور را
            ایجاد کرده است.
          </p>
          <p>
            مطابق با نظر کارشناسان، به نظر می رسد فعالیت در زمینه تولید لبنیات
            در شهرستان نسبت به سایر فعالیت های صنایع غذایی ارجحیت دارد و ظرفیت
            خوبی برای توسعه آن وجود دارد. امروزه این فعالیت بیشتر به صورت خانگی
            انجام می شود. شیر و فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره
            غذایی انسان است که از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي
            مورد نیاز و پروتئین غنی می‌باشد و همیشه استقبال بسیار خوبی از این
            نوع محصولات می شود. با توجه به وضعیت دامپروری در شهرستان، ایجاد
            واحدی برای تولید لبنیات قابل پیشنهاد است.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان شادگان، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از این محصولات در مراحل کاشت، داشت و برداشت
            به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از
            محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در
            طی سال صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی در شهرستان شادگان
            می‌تواند زمان استفاده از محصولات را افزایش دهد و از میزان ضایعات آن
            بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و
            جلوگیری از اتلاف و ضایع شدن محصولات در این شهرستان خواهد شد.
          </p>
          <p>
            همانطور که در بخش های پیشین اشاره شد، میزان تولید خرما در شهرستان
            شادگان زیاد است و مردم در باغ و زیر نخل فروش را انجام می دهند و
            میزان سوددهی بسیار کم است. از طرفی بسته‌بندی صنعتی خرما در شهرستان
            وجود ندارد. درحالی که اگر بسته بندی شود و به فروش رود، بازدهی بسیار
            بیشتر خواهد بود؛ از این رو ایجاد واحدی برای بسته بندی خرما در
            شهرستان شادگان از مزیت خوبی برخوردار بوده و برای سرمایه گذاری مناسب
            می باشد. در حال حاضر فعالیت سورتینگ و بسته بندی خرما به صورت سنتی در
            شهرستان در حال انجام است و قابلیت انجام آن به صورت صنعتی وجود دارد.
            هدف از سورتینگ محصولات، دسته بندی و درجه بندی انواع محصول بر اساس
            سایز و کیفیت است؛ به طوری که بتوان محصول نهایی را به صورت یک دست و
            یک اندازه در بسته بندی های مختلف در بازار ارائه نمود و مشتری نهایی
            در طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن باشد.
          </p>
          <p>
            از مهمترین مزایای استفاده از سردخانه میوه و سبزی می توان به جلوگیری
            از فساد محصول اشاره کرد. از دیگر مزایای با اهمیت احداث سردخانه میوه،
            کنترل قیمت بازار است. در واقع با ساخت سردخانه میوه تعادلی در عرضه و
            تقاضا ایجاد می گردد و موجب خواهد شد از افزایش بی رویه قیمت که به ضرر
            مصرف کننده است و از کاهش بیش از حد آن که به ضرر باغداران است جلوگیری
            به عمل آید؛ بنابراین نقش سردخانه های میوه جات به عنوان حد واسط بازار
            و باغداران در این بین بسیار پر رنگ و حیاتی است. با توجه به میزان
            تولید زیاد انواع میوه در شهرستان شادگان، احداث چنین واحدی دارای مزیت
            است.
          </p>
          <p>
            مرغداری های صنعتی در شهرستان زیاد است و مرغ خود را برای کشتار به
            دزفول و اهواز ارسال می کنند . با توجه به اینکه شهرستان شادگان فاقد
            کشتارگاه طیور است و طیور ده ها مرغداری صنعتی این شهرستان برای کشتار
            به شهرستان های اطراف فرستاده می‌شود؛ بنابراین ایجاد چنین واحدی علاوه
            بر درآمدزایی باعث کاهش هزینه های حمل و نقل می‌شود. فرد سرمایه‌گذار
            با احداث کشتارگاه صنعتی و خرید طیور، سود اقتصادی خوبی کسب می‌کند.
            احداث کشتارگاه به لحاظ رعایت موارد بهداشتی، اشتغالزایی، کاهش آلودگی
            محیطی زیست، بالا بردن ظرفیت تولید و... در هر منطقه ای از شهرستان که
            تعداد طیور پرورشی زیادی دارد و ذبح آن ها به صورت سنتی انجام می شود،
            لازم است.
          </p>
          <p>
            بررسی‌های انجام شده نشان می‌دهد ایجاد واحدی برای تولید خوراک دام،
            فرصت مناسبی برای سرمایه گذاری در شهرستان است؛ زیرا با وجود اینکه در
            حال حاضر چنین واحدی در شهرستان فعال است؛ اما همچنان نیاز به چنین
            واحد دیگری وجود دارد. مراتع مهمترین بخش از منابع تجدید شونده است که
            به دلیل پایین بودن هزینه تأمین علوفه از آنها در مقایسه با هزینه
            تولید علوفه از طریق کشت آبی، فشار زیادی بر آن وارد می شود. با توجه
            به افزیش دامپروری و مرغداری‌ها و پایین بودن ظرفیت تولیدی مراتع، این
            فشار بیشتر و بیشتر می‌شود و برای جلوگیری از تخریب مراتع شهرستان باید
            به فکر منابع غذایی غیر مرتعی آن‌ها بود. با اجرای پروژه های صنعتی که
            از ضایعات کشاورزی و… خوراک دام و طیور تولید شود، هم غذای مورد نیاز
            دام در این زمینه تأمین می شود و شهرستان را به خودکفایی سوق می دهد و
            هم استفاده از مواد اولیه ارزانتر در تولید این محصول سبب خواهد شد تا
            قیمت تمام شده آن پایین تر و در نتیجه قیمت فروش آن نیز پایین باشد.
            این کار می‌تواند زمینه اشتغال خوبی را به طور مستقیم و غیر مستقیم
            برای افراد شهرستان ایجاد کند.
          </p>
          <p>
            لازم به ذکر است در صورت دقت نکردن به بازارفروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد؛
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازارفروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی است، اما در شهرستان
            شادگان آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های
            شهرستان در این حوزه برای پیشرفت اقتصادی استفاده شود. در شهرستان
            شادگان، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد، اما پتانسیل
            های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای
            صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            نئوپان نوعی چوب چندلایه است که از خرده های چوب همچون خرده های چوب
            نخل و چسب ساخته می شود. این نوع چوب نسبت به سایر چوب ها از قیمت
            کمتری برخوردار است که همین مزیت باعث شده است تا بازار خوبی برای آن
            در صنعت چوب ایجاد شود. از چوب نئوپان در ساخت کمد، کابینت، سرویس خواب
            و غیره استفاده های بسیاری می شود. وجود نخلستان های زیاد در سطح
            شهرستان شادگان، ماده اولیه لازم برای ساخت نئوپان یعنی چوب نخل را در
            دسترس قرار داده و تولید انواع نئوپان را توجیه پذیرکرده است و برای
            سرمایه گذاری در این زمینه مزیت ایجاد نموده است.
          </p>
          <p>
            رعایت بهداشت فردی و اجتماعی، نقش زیادی در سلامتی و طول عمر انسان ها
            و در مجموع جامعه دارد. یکی از راهکارهای رعایت بهداشت فردی و عمومی،
            استفاده از انواع مواد شوینده بهداشتی است. به دنبال اختراع و استفاده
            بشر از لباس و ظرف و دیگر وسایل ضروری زندگی در گذشته، شیوه شستشوی آن
            نیز مورد بررسی قرار گرفت و سیر تکاملی خودش را طی کرد. در حال حاضر
            انواع مواد شوینده را می توان در خرده فروشی ها و عمده فروشی ها یافت.
            حال آنکه هر کدام دارای ویژگی ها و کاربردهای متفاوتی هستند. نزدیکی
            شهرستان به مراکز پتروشیمی، تولید مواد شوینده را توجیه پذیر کرده است
            . نزدیکی به مراکز پتروشیمی در شهرستان های همجوار دسترسی به مواد
            اولیه را آسان نموده و از این رو تولید مواد شوینده در شهرستان شادگان
            برای سرمایه گذاری مناسب است.
          </p>
          <p>
            در اولویت های پایین تر، با توجه به اینکه اکثر پوشاک مورد نیاز
            شهرستان از سایر شهرستان ها و استان ها وارد می شود، ایجاد واحدی برای
            تولید انواع پوشاک می تواند گزینه مناسبی برای ایجاد کسب و کار سودده
            باشد، البته باید به صرف سرمایه کلان، ایجاد بازار فروش مناسب و تقاضا
            و سلایق افراد جامعه توجه شود تا این طرح سوددهی مناسب را داشته باشد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت شهرستان با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از جمله فعالیت هایی است که
            با سودآوری بسیاری همراه است و در شهرستان شادگان نیز ظرفیت های بسیار
            خوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد. مطابق با نظر
            کارشناسان، احداث اقامتگاه بوم‌گردی و ایجاد شهر بازی از جمله طرح هایی
            هستند که در حوزه خدمات در شهرستان شادگان با موفقیت همراه خواهند بود.
          </p>
          <p>
            از مناظر طبیعی و گردشگری شهرستان شادگان می توان به تالاب شادگان
            اشاره کرد که آلاچیق هایی در وسط آن طراحی و ساخته شده است . منطقه
            تاريخي قطراني كه اكنون سرزمين عاري از سكنه است قدمت آن به قبل از
            اسلام برمی گردد و اكنون موقعيت جغرافيايي اين اثر مهم و تاريخي در
            اطراف روستاي قطراني از توابع دهستان بوزي واقع مي باشد و در سال 1388
            عمليات ثبت آن در اثار ملي به عنوان يكي از آثار تاريخي مهم اين
            شهرستان توسط اداره كل ميراث فرهنگي، صنايع دستي و گردشگري خوزستان در
            دست اقدام مي باشد. روستاي مدينه يكي از روستاهاي اطراف شهرستان شادگان
            و از توابع دهستان بوزي مي باشد. بني خالد در حدود 600 سال پيش در انجا
            حكمراني مي كرد و در انجا قلعه محكمي ساخته بود كه هنوز آثار آن پاي
            هزاران گردشگر را به خود كشانده است. موارد باستانی و گردشگری ذکر شده
            باعث می شود تا همه ساله گردشگران زیادی از شهرها و کشورهای مختلف جذب
            شهرستان شوند و مزیت خاصی برای ایجاد اقامتگاه بومگردی و شهربازی به
            وجود آید. امروزه در شهرستان شادگان اقامتگاه بومگردی وجود دارد، ولی
            به دلیل استقبال گسترده از این طرح، ظرفیت برای اقامتگاه های جدید نیز
            وجود دارد و فقدان شهربازی های مدرن و مجهز در شهرستان، ایجاد یک
            شهربازی مدرن را با توجه به تعداد زیاد گردشگران و افراد بومی مشتاق،
            توجیه پذیر کرده است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوانشان روح و جان فرهنگ و هنر به یادگار مانده از نیاکان خویش
            را جاودانه می‌سازند. صنایع دستی نماد فرهنگ اصیل، تاریخ کهن و هنر
            بی‌مثال مردم این سرزمین اسطوره‌ای است.
          </p>
          <p>
            نکته ای که در رابطه با صنایع دستی وجود دارد این است که برخلاف زحمتی
            که هنرمند می کشد تا یکی از صنایع دستی را تولید کند، متاسفانه به علت
            عدم حمایت و بازار فروش داخلی و خارجی، رغبت به سمت فعالیت در این
            زمینه کاهش یافته است و بسیاری از هنرهای دستی به همین دلیل به فراموشی
            سپرده شده اند. در ادامه توضیحاتی در مورد پتانسیل های صنایع دستی در
            شهرستان شادگان یعنی طبق بافی، جاروسازی، حصیربافی و گلیم بافی آورده
            شده است، اما در هر صورت اگر توجهی به آن‌ها از سمت دولت و نهادهای
            مربوطه نشود، نمی توان انتظار موفقیت برای آن‌ها داشت.
          </p>
          <p>
            طبق بافی و جاروسازی همیشه در ایران جایگاه خاصی داشته است و در هر شهر
            با توجه به آداب و سنن مخصوص به خود بافته می‌شود. این سبد‌های زیبا با
            وسایل ساده‌ای مثل نوار پلاستیکی، طناب، کاموای کتان و... ساخته
            می‌شوند که می‌توان در همه جا به سادگی آن‌ها را به دست آورد. در
            شهرستان شادگان از برگ نخل برای بافتن طبق و جارو استفاده می شود.
            دسترسی به نخل به جهت سطح زیر کشت بسیار زیاد آن در سطح شهرستان
            شادگان، طبق بافی و ساخت جارو را توجیه پذیر کرده است و می توان در این
            زمینه ها سرمایه گذاری نمود؛ چرا که بازار بسیار خوب و گسترده ای برای
            این صنایع دستی در سطح شهرستان و شهرستان های اطراف بوده و گردشگران
            نیز با خرید این صنایع دستی، به رونق هر چه بیشتر آن کمک می کنند.
          </p>
          <p>
            حصیربافی از دیگر صنایع دستی است که در این شهرستان انجام می شود. وجود
            نخلستان های زیاد در این شهرستان شرایط را برای تولید این صنعت دستی
            نیز که از برگ خرما تهیه می شود، فراهم می کند. با استفاده از حصیر
            لوازم دیگری مانند سبد، گلدان و وسایل تزئینی دیگر نیز ساخته می شود.
            با توجه به تجربه مردم شهرستان در انجام این کار و وجود مواد اولیه
            لازم در شهرستان، فعالیت گسترده تر در این زمینه در صورت بازاریابی
            صحیح، قابلیت داشته و پیشنهاد می شود.
          </p>
          <p>
            گلیم به عنوان یکی از قدیمی ترین دست بافت های بشر، از شاخه هاي
            قاليبافي است و در آن از طرح هاي مختلف محلي استفاده مي شود. هر چند در
            گذشته گلیم به عنوان یک زیرانداز شناخته و بافته می شد، اما امروزه با
            توجه به زیبایی نقوش و کیفیت بافتی که دارد از آن در هنرهای تلفیقی
            همچون روکش های مبلمان، دوخت کیف های چرمی، وسایل تزیینی و غیره
            استفاده های بسیاری می شود. این هنر نیز در شهرستان شادگان از رونق
            خوبی برخوردار بوده و قابلیت سرمایه گذاری را دارد.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی برای آن وجود
            دارد که اگر از این ظرفیت های شیلاتی استفاده شود، ارزآوری بسیار خوبی
            به همراه خواهد شد؛ اما متاسفانه خشکسالی های پی درپی و به دنبال آن
            کمبود آب در شهرستان شادگان باعث شده است تا اجرای طرح های شیلاتی در
            شهرستان بسیار مشکل و گاها ناممکن شود و از این رو برای سرمایه گذاری
            پیشنهاد نمی شود .
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
