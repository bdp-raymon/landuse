import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-24"].cities["IR-2405"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        gardening: "باغداری",
        livestock: "دامداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        birds: "طیور",
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
            شهرستان رامیان یکی از شهرستان های استان گلستان است و شهر رامیان مرکز
            این شهرستان می باشد. شهرستان رامیان در قسمت جنوبی استان گلستان از
            شمال به شهرستان گنبد، از جنوب به استان سمنان، از شرق به شهرستان
            آزادشهر و از غرب به شهرستان علی آباد محدود می شود. وسعت این شهرستان
            73/780 کیلومتر مربع است. بر اساس سرشماری عمومی نفوس و مسکن، جمعیت
            شهرستان رامیان در سال 1395 معادل 86 هزار و 210 نفر بوده که از این
            تعداد 36210 نفر شهری و 49939 نفر روستایی بوده و 43083 نفر مرد و
            43127 نفر زن بوده اند. از نظر اقلیمی نقاط جنوبی این شهرستان اقلیم
            کوهستانی و نقاط شمالی آن اقلیم نیمه مرطوب دارد و وقوع بلایای اقلیمی
            همچون سیل، رانش زمین، خشکسالی و طوفان در طی سال های اخیر خسارات
            هنگفتی را به بخش های زبربنایی، اقتصادی و اجتماعی شهرستان وارد ساخته
            است. شکل زیر موقعیت شهرستان رامیان را نشان می دهد.
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
            ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام برد. در
            این قسمت نیز به بررسی محصولات زراعی متناسب با شرایط موجود در منطقه
            پرداخته می شود و مزایای کشت هر کدام به تفکیک آورده می شود. شهرستان
            رامیان به دلیل داشتن منابع آبی مناسب و با کیفیت و آب و هوایی خوب،
            جهت گسترش کشت انواع محصولات زراعی مناسب است. کشت برنج در شهرستان
            رامیان به صورت انبوه انجام می شود و با توجه به بازار فروش این محصول
            قابلیت افزایش سطح زیر کشت آن نیز وجود دارد . برنج جزء مهم ترین غلات
            و اقلام غذایی جهان است. آب مورد نیاز برای کشت برنج از سایر غلات
            بیشتر است و رطوبت کافی از عوامل مورد نیاز برای کاشت بهتر این محصول
            است. البته برای کشت این محصول باید بازار فروش و قیمت، مناسب باشد تا
            کشاورزان متضرر نشوند و رونق تولیدات داخلی را زمینه ساز شود.
          </p>
          <p>
            گندم و جو از جمله محصولات استراتژیک این شهرستان هستند که در حال حاضر
            در برخی از مناطق کشت می‌شوند و با توجه به اینکه با شرایط جوی شهرستان
            سازگار هستند، پتانسیل های افزایش کشت و سوددهی را دارند. در میان
            محصولات کشاورزی، کاشت گندم نسبت به بقیه کم دردسرتر و کم آفت تر است.
            گندم در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می
            رسد. خرید تضمینی گندم همه ساله توسط دولت انجام می گیرد. البته خود
            کشاورز نیز می تواند گندم را به صورت آزاد بفروشد و درآمد خوبی کسب
            کند. کود شیمیایی و بذر نیز به شکل یارانه‌ای در اختیار کشاورزان قرار
            می گیرد؛ بنابراین گسترش تولید گندم ارزش افزوده زیادی را به دنبال
            دارد.
          </p>
          <p>
            جو نیز از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            استفاده می شود. این گیاه در تهیه غذای کودک نیز کاربرد دارد.
          </p>
          <p>
            شهرستان رامیان برای کشت دانه های روغنی مانند کلزا و سویا نیز مستعد
            است. در حال حاضر نیز این محصولات در شهرستان کشت می شوند و پتانسیل
            گسترش کشت نیز وجود دارد. از مزایای کشت کلزا این است که این محصول می
            تواند در تناوب با زراعت گندم و جو قرار گرفته و از تراکم بیماری ها،
            آفات و علف های هرز بکاهد و باعث افزایش عملکرد دانه این محصولات شود.
            کلزا دارای پتانسیل عملکرد بالا بوده و در بین دانه های روغنی از درصد
            روغن بالایی (40 تا 45 درصد) برخوردار است. کلزا به علت بقایای گیاهی
            مطلوب، علاوه بر تاثیر مثبت در میزان ماده آلی خاک، در تامین علوفه
            مورد نیاز زارعین نیز موثر است. همچنین کشت این محصول برای کشور بسیار
            مهم است زیرا سالانه مقدار زیادی واردات در این زمینه صورت می گیرد و
            ارز زیادی از کشور خارج می شود.
          </p>
          <p>
            سويا مي تواند جايگزين مناسبي براي محصولات با مصرف آب زياد باشد. ارزش
            تناوبي سويا و نقش آن در افزايش توليد ساير محصولات زراعي، تقويت خاك
            هاي زراعي از طريق تثبيت بيولوژيكي ازت، استفاده از شاخ و برگ سويا به
            عنوان خوراك دام و نياز به آب كمتر در مقايسه با ذرت از مزاياي زراعت
            سويا است.
          </p>
          <p>
            کشت گیاهان دارویی مانند گل گاو زبان، آویشن و... در منطقه، به لحاظ
            دارا بودن شرایط جوی مناسب انجام شده است و همچنان هم جای کار دارد؛
            زیرا امروزه افراد زیادی به استفاده از گیاهان دارویی متمایل شده اند.
            خواص بی نظیر این گیاهان و نداشتن عوارض جانبی ناشی از مصرف باعث شده
            تا افراد زیادی به صور مختلف از آن ها استفاده کنند. به همین جهت به
            کشت گیاهان دارویی می توان به چشم یک مزیت پر سود نگریست. از آن جا که
            این گیاهان برای کشت به مراقبت خاص و شرایط حساسی نیاز ندارند، می توان
            روی کشت آن ها سرمایه گذاری کرد.
          </p>
          <p>
            با توجه به اهمیت تولید حبوبات در اقتصاد کشاورزی و مستعد بودن شرایط
            اقلیمی از نظر نوع خاک که سبک و غیر اسیدی است و آب و هوای معتدل این
            شهرستان، توسعه کشت حبوباتی مانند نخود، از جمله مواردی است که ارزش
            افزوده زیادی را به دنبال خواهد داشت.
          </p>
          <p>
            کشت زعفران نیز از جمله برنامه های راهبردی منطقه برای سوددهی و
            اشتغالزایی به شمار می‌رود؛ زیرا کشت آن به صورت آزمایشی انجام شده و
            عملکرد خوبی نیز داشته است. زعفران گیاهی است که نیاز آبی کمی داشته و
            دارای ارزش اقتصادی بالایی است و همچنین کشت این گیاه پتانسیل ایجاد
            اشتغال بالایی را نیز دارد. به غیر از مصرف زیاد داخلی این محصول، همه
            ساله مقدار قابل توجّهی ارز با صادرات زعفران وارد کشور می شود. از
            سویی با توجه به قیمت بالای‌ این گیاه ارزشمند و امکان ارزآوری‌ بسیار
            زیاد آن برای اقتصاد کشور و از دیگر سو به دلیل تولید قریب به 90 درصد
            از زعفران جهان در ایران، این طلای سرخ در زمینه درآمدزایی و اشتغال
            آفرینی از اهمیت به سزایی برخوردار است. گرچه کاشت، داشت و برداشت
            زعفران از دیگر کشت‌ها دشوارتر است و نیروی کار بیشتری را می‌طلبد، اما
            سود زیاد حاصل از فروش آن ارزش کشت آن را بیشتر به ما ثابت می کند؛
            بنابراین توسعه کشت این محصول از گزینه های بسیار خوب شغلی است که
            پیشنهاد می شود.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج در شهرستان رامیان است. تولید اشتغال
            توسط رسته باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب
            و کار رونق می‌بخشد. کشاورزی و از جمله باغبانی در توسعه ملی و افزایش
            رفاه عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری،
            توزیع درآمد و عدالت اجتماعی موثر است. در یک نگاه کلی می توان گفت نقش
            کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری
            الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه
            شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای
            بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.
          </p>
          <p>
            شهرستان رامیان با داشتن آب و هوایی مناسب و همچنین داشتن خاکی حاصلخیز
            جهت انجام فعالیت های باغداری بسیار مناسب می باشد. در ادامه به نمونه
            هایی از محصولات قابل تولید در شهرستان رامیان پرداخته می‌شود .
          </p>
          <p>
            در شهرستان رامیان کشت توت فرنگی به صورت انبوه انجام می شود و با توجه
            به قیمت مناسب این محصول در بازار، سود مناسبی نصیب کشاورزان می شود و
            بنابراین کشت این محصول در شهرستان پیشنهاد می شود.
          </p>
          <p>
            در شهرستان رامیان کشت صیفی جاتی نظیر گوجه و خیار نیز به صورت انبوه
            انجام می شود و با توجه به بازار فروش مناسب این محصولات و سازگاری آن
            با شرایط اقلیمی منطقه، امکان گسترش کشت این محصولات همچنان در شهرستان
            وجود دارد و کشت این نوع محصولات نیز پیشنهاد می شود.
          </p>
          <p>
            شهرستان رامیان ظرفیت مناسبی جهت گسترش باغات درخت هلو و آلو دارد و در
            حال حاضر نیز کشت این محصولات در شهرستان انجام می شود و سوددهی مناسبی
            را نیز برای کشاورزان این حوزه به دنبال داشته است. همچنین در این
            شهرستان در زمینه پرورش گل های زینتی در گلخانه، احداث باغ پرتقال و
            نارنگی نیز فعالیت های خوبی صورت گرفته است و با توجه به میزان سوددهی
            این کسب و کار و فروش مناسب آن، گسترش این فعالیت ها پیشنهاد می گردد .{" "}
          </p>
          <p>
            در این شهرستان پرورش قارچ نیز به صورت محدود انجام می شود که گسترش
            کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته باشد.
            فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی دارای مزیت
            خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین امر باعث شده که
            جایگزین مناسبی برای گوشت باشد. در برخی از شهرها و روستاها به دلیل
            عدم آشنایی با فواید قارچ، میزان مصرف این محصول پایین است که می توان
            با تبلیغ و معرفی این محصول، میزان مصرف را افزایش داد. همچنین پرورش
            قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک شروع
            کرد. در کل در شهرستان فعالیت جدی در این زمینه نشده است و جای کار
            برای ورود به این عرصه وجود دارد. شاید دلیل موفقیت تولید قارچ در
            شهرستان رامیان را بتوان دسترسی به مواد اولیه ارزان عنوان کرد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            شهرستان رامیان به دلیل داشتن مراتع زیاد و همچنین داشتن آب و هوای
            مناسب جهت انجام دامداری بسیار مناسب می باشد. انجام این فعالیت سود
            اقتصادی مناسبی را برای شهرستان به همراه داشته است. با توجه به اینکه
            حوزه دامداری با یکی از مهم ترین نیازهای انسان، یعنی نیاز به منابع
            غذایی و همچنین منابع پروتئینی مرتبط می‌باشد؛ بنابراین همواره مورد
            توجه قرار گرفته است. فعالیت در این حوزه شغلی و افزایش بهره وری در
            آن، می تواند عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب
            شود. این شهرستان به لحاظ وضعیت منطقه ای و بستر آماده برای پرورش دام
            توانسته است پتانسیل های بالقوه ای را برای خود ایجاد کند و زمینه را
            برای اشتغال جوانان این منطقه فراهم کند.
          </p>
          <p>
            به طورکلی دامداری در این شهرستان به صورت سنتی و بخشی نیز به صورت
            صنعتی انجام می شود. در شهرستان رامیان، سرمایه گذاری در حوزه دامداری
            بازدهی خوبی خواهد داشت. طبق نظر کارشناسان، در این شهرستان پرورش دام
            سبک بهتر نتیجه می دهد. همچنین اگر پرورش دام به صورت صنعتی و نیمه
            صنعتی انجام شود، بازدهی مطلوب تری خواهد داشت. از جمله دام های سبک
            پرورشی در این شهرستان می توان به گوسفند بومی، قزل، افشار، دالاق،
            رومانوف و بز بومی و پاکستانی اشاره نمود . توسعه پرورش این دام ها در
            شهرستان مزیت دارد و پیشنهاد می شود. قابل ذکر است که پرورش گوسفند
            نسبت به بز از اولویت بالاتری در این شهرستان برخوردار است.
          </p>
          <p>
            پرورش گوسفند بومی در این شهرستان نسبت به سایر حیوانات، بیشتر مورد
            توجه دامداران قرار گرفته است؛ زیرا توان گوسفند برای تحمل اقلیم های
            متفاوت بیشتر است. همچنین جیره غذایی کمتر و در نتیجه هزینه کمتری نیاز
            دارد. تمامی فرآورده های دامی مانند گوشت، شیر، ماست، کره و حتی پشم و
            پوست این دام پرکاربرد هستند و فروش این فرآورده ها در تمامی روزهای
            سال انجام می‌شود. قیمت گوشت گوسفند بالا است و به علاوه سایر اجزای
            گوسفند مانند دل، قلوه، جگر، سیرابی، کله پاچه، خوش گوشت و … نیز قابل
            فروش هستند. خرید دام برای قربانی کردن در ایام مذهبی مانند عید قربان
            و … موجب رونق این کسب و کار می‌شود.
          </p>
          <p>
            از جمله ویژگی‌های گوسفند نژاد قزل می‌توان به داشتن دنبه کوچک، قابلیت
            راهپیمایی طولانی در مناطق کوهستانی، گوشت مرغوب با کیفیت، راندمان
            توليد گوشت، شير و زاد و ولد اشاره کرد. این گوسفند به جیره نگهداری
            کمی احتیاج داشته و بیشتر غذایی را که دریافت می کند صرف تولید و رشد و
            نمو خود می‌کند.
          </p>
          <p>
            گوسفند افشاری نیز یکی از نژادهای بسیار مهم گوسفند داشتی است که بومی
            استان زنجان است. مدیریت پرورشی بهینه این نژاد می تواند سودآوری واحد
            گوسفندداری را افزایش دهد. دلایل زیادی باعث شده است که امروزه
            گوسفندان نژاد افشاری جزء پر فروش ترین گوسفندان باشند. این نژاد به آب
            و هوای سرد عادت داشته و دارای جثه بزرگی است. گوسفند افشاری جزء
            گوسفندان سنگین ‌دنبه کشور محسوب می‌گردد. سرعت رشد بالا، تولید شیر
            خوب و پرچرب و بهترین گوشت قرمز (که باعث ‌شده است که جزء گوسفندان دو
            منظوره گوشتی – شیری قرار بگیرد.)، بهبود کمی و کیفی پشم گوسفند،
            سازگاری و عادت پذیری با شرایط آب و هوایی مناطق سردسیر، قدرت
            راهپیمایی و کوه پیمایی خوب، توان چند قلو زایی، مقاومت در برابر امراض
            و انگل‌های منطقه و بالا بودن ضریب تبدیل و داشتن بازده اقتصادی مطلوب
            از جمله مزایای پرورش گوسفند افشاری است.
          </p>
          <p>
            گوسفند نژاد دالاق دارای بدنی کشیده و دست و پایی بلند است. همچنین
            دارای گوش های بلند و بدون شاخ است. در نژاد گوسفند دالاق روی بینی قوس
            دار، حدقه چشم برجسته، پیشانی پوشیده از پشم، بالای جمجمه کمی برجسته،
            نیمرخ محدب، گردن پوشیده از پشم و دست و پا دارای قلم درشت می باشد.
          </p>
          <p>
            گوسفند رومانوف نیز جزء به صرفه ترین و بهترین گوسفندان گله گوشتی-
            زایشی است. این نوع گوسفند، یک گوسفند روسی است که اصل ‌نژاد آن متعلق
            به دره ولگا، در شمال غرب مسکو است. رومانوف یک ‌نژاد خالص بوده و از
            تلاقی نژاد‌ها به‌ وجود نیامده است. باروری بسیار خوب، بالاترین میزان
            چندقلوزایی، فصل تولیدمثل بسیار طولانی، امکان تولیدمثل در تمام طول
            سال، سازگاری و عادت کردن به آب و هوای سرد و خوراک محلی برخی از
            ویژگی‌های خوب این نژاد است. نژاد رومانوف گرچه از دسته گوسفندان گوشتی
            است؛ اما پشم این نژاد بسیار محکم و باکیفیت است و سالانه 5/4 کیلوگرم
            پشم قابل استحصال دارد که از جنبه اقتصادی برای پرورش‌دهنده سرمایه ساز
            است.
          </p>
          <p>
            به طور کلی بز به ‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر و
            گوشت در این شهرستان پرورش داده می‌شود. جثه کوچک، کم توقع بودن و
            مقاومت در برابر بیماری‌ها و شرایط سخت محیطی باعث شده است که بز به
            ‌عنوان حیوانی محبوب در بین دامداران تلقی شود. در نقاط مختلف از این
            حیوان علاوه بر تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز
            استفاده می‌شود.
          </p>
          <p>
            بز پاکستانی که منشاء ان کشور پاکستان است، دارای جثه بزرگ و گوش های
            آویزان و دراز هستند. این بز ها تولید شیر و گوشت مناسبی داشته و برای
            عملیات اصلاح نژاد بزهای بومی گزینه مناسبی بوده و در سال های اخیر
            تعدادی از آنها از طریق مرز های شرقی وارد کشور شده اند، اما به طور
            کلی تعداد آن ها محدود می باشد.
          </p>
          <p>
            علاوه بر ظرفیت بالای شهرستان در زمینه پرورش دام سبک، برای پرورش دام
            سنگین نظیر گاو هلشتاین و سمینتال نیز مزیت وجود دارد. گاو هلشتاین که
            به نام هولشتاین نیز شناخته می شود جزو سنگین وزن ترین گاوهای شیری به
            شمار می‌رود. این نژاد که از نظر تولید شیر بهترین نژاد در میان گاوهای
            شیری است، حدوداً ۷۲۴۰ لیتر شیر در سال تولید می کند. این شیر دارای
            65/3 درصد چربی و ۳ درصد پروتئین است.
          </p>
          <p>
            گاو سمینتال جزء بهترین گاوهای شیری و گوشتی جهان است. افزایش وزن
            روزانه فوق‌العاده و گوساله دهی با فاصله 365 روز، مقاومت بالا نسبت به
            بیماریهای عفونی و متابولیکی، عمر مفید بالا، مدیریت آسان این نژاد و
            همچنین سازگاری بسیار خوب و قابل توجه با محیط پرورش همان چیزی است که
            یک دامدار برای بقاء و پیشرفت به آن نیاز دارد. یکی دیگر از مزایای
            پرورش گاو سمینتال، به صرفه بودن در شرایط اقتصادی فعلی است زیرا این
            گاو با دادن کمترین علوفه و کنسانتره، بیشترین میزان شیر و گوشت را
            می‌دهد.
          </p>
          <p>
            زنبورداری از جمله مشاغلی است که در این شهرستان بسیار انجام می شود.
            طبق نظر کارشناسان، این فعالیت اشباع نشده است و همچنان ظرفیت برای
            فعالیت های بیشتر در این زمینه وجود دارد. باردهی گل ها و میوه ها با
            گرده افشانی توسط زنبورعسل افزایش می یابد. این مسئله باعث شده است که
            ارزش اقتصادی پرورش زنبورعسل بسیار بیشتر از ارزش ریالی حاصل از تولید
            عسل باشد. در طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد کندوها می
            توان به فروش کندو نیز اقدام کرد و به سود خوبی دست یافت. در مناطق
            گرمسیری از هر کندو یک بچه کندو و در مناطق سردسیری همچون شهرستان
            رامیان این تعداد به دو یا بیشتر افزایش می یابد. در ضمن محصول مزرعه
            پرورش زنبور عسل صرفاً کندو و عسل نیست، بلکه موم، زهر و ژل آن نیز
            قابلیت فروش دارد.
          </p>
          <p>
            در شهرستان رامیان کسب و کار پرورش کرم ابریشم نیز رونق خوبی دارد و با
            توجه به قیمت بالای ابریشم سودآوری مناسبی را نیز برای شاغلان این حوزه
            فراهم آورده است و همچنان نیز قابلیت گسترش این کسب و کار در شهرستان
            وجود دارد و پیشنهاد می شود.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان رامیان، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از این محصولات در مرحله برداشت به ضایعات
            تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از محصولات
            کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال
            صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی در این شهرستان می‌تواند زمان
            استفاده از محصولات را افزایش دهد و از میزان ضایعات آن بکاهد. همچنین
            گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از اتلاف و
            ضایع شدن محصولات در این شهرستان خواهد شد.
          </p>
          <p>
            با توجه به اینکه سالانه حجم زیادی برنج در شهرستان رامیان تولید می
            شود و همچنین نبود واحدی جهت بسته بندی این محصول و فروش این محصول به
            صورت فله ای توسط کشاورزان؛ بنابراین احداث واحدی جهت بسته بندی این
            محصول می تواند ارزش افزوده حاصل از فروش برنج را بسیار افزایش دهد.
          </p>
          <p>
            با وجود تولید عسل در این شهرستان به میزان زیاد، واحدی جهت بسته بندی
            آن وجود ندارد؛ بنابراین احداث واحد صنعتی جهت بسته بندی عسل در
            شهرستان صرفه اقتصادی خوبی به همراه خواهد داشت. راه اندازی خط تولید و
            بسته بندی عسل یکی از بهترین راهکارهایی است که می‌توان به کمک آن یک
            منبع درآمد پایدار برای فرد یا خانواده ایجاد کرد. خوشبختانه عسل یکی
            از موادی است که امکان فاسد شدن آن وجود ندارد و می‌توان آن را برای
            مدت زمان زیادی بسته بندی کرد. از طرف دیگر روند تولید این محصول
            پیچیدگی چندانی ندارد و فرد می‌تواند با سرمایه کم حجم بالایی از آن را
            تولید نماید.
          </p>
          <p>
            کشت گندم به میزان زیاد در شهرستان رامیان صورت می‌گیرد، اما کارخانه
            آرد جهت فرآوری گندم در این شهرستان وجود ندارد؛ بنابراین وجود کارخانه
            آرد از جمله مواردی است که این شهرستان به آن نیاز دارد. با آسیاب کردن
            گندم، جوانه و سبوس یا همان پوسته از بخش آردی آن تفکیک می‌گردد و لذا
            آرد با توجه به میزان سبوس جدا شده از آن به انواع مختلفی تقسیم‌بندی
            می‌گردد. از انواع آرد می‌توان به آرد قنادی، آرد ستاره، آرد سبوس
            گرفته و آرد کامل اشاره نمود و از این میان آرد کامل به لحاظ میزان
            سبوس بالای آن، دارای ارزش غذایی قابل توجهی است. از طرفی ایران از
            جمله کشورهایی است که سرانه مصرف آرد و تولید نان در آن بالاست.
          </p>
          <p>
            با توجه به جمعیت بالای دام در این منطقه به ویژه دام سبک، سرمایه
            گذاری در زمینه احداث کشتارگاه صنعتی دام پیشنهاد می گردد.
            کشتارگاه‌های صنعتی نقش مهمی در حفظ محیط زیست دارند؛ به دلیل اینکه
            ضایعات حاصل از کشتار دام نظیر خون و اجزای گوشتی غیر قابل مصرف، در
            محل تبدیل ضایعات به پودر گوشت که خوراک دام است، تبدیل می شود و علاوه
            بر قرار گرفتن مجدد در چرخه اقتصادی، از آلودگی محیط زیست نیز جلوگیری
            می‌کند. فاضلاب حاصل از کشتار نیز در تصفیه خانه های مجهز تصفیه شده و
            پساب حاصله به مصرف کشاورزی می رسد. البته در کشتارگاه ها باید فضای
            مناسب برای کشتار دام سبک و سنگین به صورت همزمان وجود داشته باشد و
            همچنین باید آب مورد نیاز در زمان کشتار نیز تامین شده و تجهیزات و
            امکانات لازم برای رعایت مسائل بهداشتی و زیست محیطی فراهم شود. همچنین
            با توجه به میزان بالای تولید دام در این شهرستان فراوری پوست دام شامل
            استفاده از پوست گاو در صنعت چرم دوزی و همچنین استفاده از پشم و کرک
            گوسفند و بز در صنعت ریسندگی، ضمن ایجاد درآمد مناسب برای سرمایه گذار،
            سود خوبی را نیز نصیب دامدار می‌کند. همچنین بررسی های انجام شده نشان
            می‌دهد ایجاد واحدی برای تولید خوراک دام و طیور، فرصت مناسبی برای
            سرمایه گذاری است؛ زیرا شهرستان رامیان فاقد چنین واحدی است و در حال
            حاضر خوراک دام از جمله نیازهای این شهرستان است که از سایر شهرستان‌ها
            تأمین می‌شود.{" "}
          </p>
          <p>
            لازم به ذکر است که در صورت دقت نکردن به بازار فروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد؛
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازار فروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و عاملی مهم در توسعه پایدار امنیت غذایی شهرستان محسوب
            می‌شود. ایجاد صنایع غذایی در شهرستان رامیان، علاوه بر اشتغالزایی،
            باعث ارتقای سطح درآمد ارزی کشور نیز می‌شود که کاهش هدررفت محصولات
            کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان ممکن می‌سازد.
          </p>
          <p>
            در شهرستان رامیان با توجه به تولید انبوه کلزا و سویا در این شهرستان،
            فعالیت در حوزه روغن کشی از این محصولات می تواند علاوه بر سودآوری، از
            حجم انبوده واردات این محصولات نیز به کشور بکاهد و از خروج ارز از
            کشور نیز جلوگیری نماید.
          </p>
          <p>
            در شهرستان رامیان سالانه حجم زیادی میوه تولید می شود و متاسفانه بخشی
            از این محصولات به دلیل شرایط بازار و عدم فروش محصول از بین می رود؛
            بنابراین احداث واحدهای خشک کنی میوه در این شهرستان می تواند مزیت
            خوبی داشته باشد. خشک کردن میوه‌جات، یکی از روش‌هاي جلوگیري از فساد
            میکروبی آن‌ها است. در این روش، در اثر کاهش میزان رطوبت، امکان فساد
            میکروبی بسیار کم شده و سرعت دیگر واکنش‌هاي مضر نیز، به مقدار قابل
            توجهی کاهش می‌یابد. خشک کردن، ضمن اینکه روي محصول اثر حفاظتی دارد،
            وزن و حجم آن را نیز به میزان چشمگیری کاهش می‌دهد، در نتیجه از
            هزینه‌های حمل و نقل و ذخیره‌سازي نیز می‌کاهد. با توجه به اینکه بخشی
            از بازار میوه خشک ایران، سهم محصولات وارداتی است، با تولید مشابه
            داخلی این میوه‌ها (از نظر نوع و کیفیت)، می‌توان مانع واردات و خروج
            میلیون‌ها دلار ارز از کشور شد. همچنین نیاز بیش از حد برخی از کشورها
            به این گونه محصولات (به دلیل شرایط ویژه اقلیمی آن‌ها، هزینه بالای
            حمل و نقل سبزیجات و میوه‌های تازه و محدود بودن زمان نگه‌داری آن‌ها)،
            فرصت مناسبی برای رونق تولید و صادرات میوه خشک فراهم آورده است.
          </p>
          <p>
            در شهرستان رامیان کشت گیاهان دارویی و همچنین گیاهان دارویی خودرو به
            میزان زیاد است و فعالیت در حوزه فرآوری این گیاهان به دلیل بازار مصرف
            بسیار خوب دارای مزیت است و می توان به سوددهی خوبی رسید. در واقع
            فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز به سرمايه‌گذاري
            زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته باشد. یکی از
            فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات دارای
            تکنولوژی و دانش فنی پیچیده‌ای نمی باشد و می‌توان به راحتی در این
            حوزه وارد شد. همچنین احداث واحدی برای بسته بندی این محصول نیز سوددهی
            خوبی خواهد داشت.{" "}
          </p>
          <p>
            تولید لبنیات در شهرستان به صورت خانگی انجام می شود. با توجه به اینکه
            شیر تولید شده در شهرستان کفاف تامین نیاز شهرستان رامیان را می دهد،
            ایجاد واحد های سنتی و نیمه صنعتی برای تولید آن دارای مزیت است. شیر و
            فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان است که
            از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز و پروتئین،
            غنی می‌باشد و همیشه استقبال بسیار خوبی از این نوع محصولات می شود.
            البته باید توجه داشت برای موفقیت در زمینه تولید لبنیات باید به بالا
            بردن توانایی در زمینه رقابت با نشان‌های تجاری معروف نیز فکر کرد.
            همچنین با توجه به وجود باغات خوب میوه در این شهرستان و همچنین تولید
            زیاد توت فرنگی، فراوری محصولات تولیدی نظیر تولید آبمیوه و سایر
            فراورده های میوه پتانسیل های لازم برای سرمایه گذاری را دارد.
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
            شهرستان رامیان وجود دارد اما نکته مهم و قابل توجه، بازاریابی جهت
            فروش محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می
            تواند زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه
            صنعتی فراهم نماید؛ بنابراین طیوری که به آن پرداخته می شوند، به شرط
            بازازیابی مناسب مزیت پرورش دارند.
          </p>
          <p>
            مرغ بومی از طیوری است که در شهرستان رامیان پرورش می یابد و می‌توان
            در زمینه گسترش پرورش آن ها اقدام کرد. یکی از دلایل استقبال از پرورش
            مرغ بومی، سوددهی بسیار خوب پرورش مرغ بومی یا محلی است. مرغ بومی یا
            همان مرغ های محلی، نوعی نژاد بسیار مقاوم به شمار می آیند که در مقابل
            بیماری ها، گرما و سرما تحمل بالایی دارند و این مزیت باعث می شود که
            ایجاد واحدهای تولیدی مرغ بومی برای تولید کنندگان سوددهی داشته باشد.
            یکی دیگر از مزیت های پرورش مرغ بومی این است که این کار نیاز به
            تجهیزات زیادی ندارد. هرچند اگر در پرورش مرغ بومی از تجهیزات مدرن
            استفاده شود، سود بیشتری نصیب پرورش دهنده خواهد شد. منظور از تجهیزات
            مواردی مانند آبخوری، دان خوری، لانه تخم گذاری و... است.
          </p>
          <p>
            پرورش مرغ گوشتی نیز در این شهرستان به صورت صنعتی انجام می شود که با
            توجه به شرایط حاضر امکان گسترش و توسعه آن وجود دارد. گوشت مرغ به سبب
            مزیت‌های فراوانی که دارد به عنوان منابع تامین پروتئین می تواند مطرح
            و نیاز عمومی منطقه و کشور را در این زمینه مرتفع نماید. ارزش غذایی
            بالای گوشت طیور، کم بودن افت پس از کشتار، سالم و بهداشتی بودن گوشت
            طیور، قابلیت هضم و جذب بالا، سرعت رشد سریع، صرفه جویی در جایگاه و
            زمین و برگشت سریع سرمایه از فواید پرورش مرغ گوشتی است.
          </p>
          <p>
            پرورش بلدرچین و بوقلمون نیز هم اکنون در شهرستان به صورت محدود و
            خانگی انجام می‌شود؛ اما ظرفیت های سرمایه گذاری و توسعه را دارند .
          </p>
          <p>
            بلدرچین پرنده ای با جثه کوچک است که در برابر بسیاری از بیماری ها
            مقاوم است. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن
            بازار فروش، کوتاه بودن دوره پرورش (40 روز) و عدم پرورش انحصاری توسط
            شرکت های بزرگ دارای مزیت است. محصولات این پرنده شامل گوشت، تخم
            بلدرچین و کود است. گوشت و تخم این پرنده دارای ارزش غذایی و دارویی و
            همچنین سرشار از پروتئین است.
          </p>
          <p>
            گوشت بوقلمون دارای خواص غذایي ويژه ای است و محدوديت مصرف خاصي نيز
            ندارد؛ بنابراین مي تواند جايگزين مناسبی براي گوشت قرمز علی الخصوص در
            بيمارانی که مصرف گوشت قرمز برای آنها با محدوديت هایی همراه است، مطرح
            گردد. از ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز
            در يک لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد از وزن يک لاشه
            8 کيلوگرمی را تشکيل مي دهد. تولید بوقلمون گوشتی به دلیل به صرفه بودن
            تولید، در دسترس بودن نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز
            امکان انجام صادرات به کشورهای منطقه حائز اهمیت است.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در کشور ما
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور به همراه خواهد شد. در شهرستان رامیان به دلیل
            وجود منابع آبی مناسب، پرورش ماهی در سطح خوبی انجام می شود و در این
            حوزه بیشتر پرورش ماهیان سردابی نظیر قزل آلا و ماهیان گرمابی مانند
            کپور انجام می شود.
          </p>
          <p>
            ماهی قزل‌آلا مناسب‌ترین ماهی سردابی جهت پرورش است؛ زیرا آسان‌تر به
            غذای دستی عادت کرده و نسبت به درجه حرارت و کیفیت آب، حساسیت کمتری
            دارد. از این ماهی می‌توان جهت ماهی‌دار کردن آبگیرهای طبیعی استفاده
            نمود. به دلیل وجود تعداد زیادی مراکز تکثیر ماهی قزل‌آلای رنگین‌کمان
            در کشور، در طول سال بچه ماهی مورد نیاز مزارع پرورشی در اوزان مختلف
            مهیا می‌شود. از طرفی وجود کارخانه‌های متعدد تولید غذای ماهی قزل‌آلا
            باعث شده تا عمده‌ترین اقلام مورد نیاز مزارع پرورشی به‌راحتی قابل
            تأمین باشد. ماهی قزل‌آلای رنگین‌کمان مانند سایر آزادماهیان دارای
            گوشتی لذیذ است که طرفداران زیادی دارد و طعم و مزه این ماهی حتی در
            بین کسانی که کمتر ماهی را به‌عنوان غذای اصلی خود مصرف می‌کنند،
            خوشایند است.
          </p>
          <p>
            ماهیان گرمابی در محدوده دمایی 27-20 درجه سانتیگراد بهترین رشد را
            دارند. بزرگ‌ترین خانواده ماهيان آب شيرين، کپورماهیان هستند که دارای
            200 جنس می‌باشند. این ماهی در مقایسه با سایر گونه‌های پرورشی در
            آب‌های گرم و معتدل، ارزشمندترین ماهی از لحاظ اقتصادی است و نیز
            ارزش‌های تغذیه‌ای فراوانی دارد؛ ازاین‌رو آموزش توسعه پرورش این ماهی
            می‌تواند در راستای تأمین غذای جمعیت کشور و نیز افزایش سطح معیشتی
            مردم مؤثر باشد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از فعالیت‌هایی است که با
            سودآوری بسیاری همراه است و در شهرستان رامیان نیز ظرفیت های بسیار
            خوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد.
          </p>
          <p>
            دشت گل رامیان، جنگل های هیرگانی، قلعه ماران، آبشار شیرآباد، چشمه
            نعلبک و ... از جمله جاذبه های دیدنی شهرستان رامیان هستند که مورد
            استقبال مردم واقع می‌شوند و با توجه به اینکه این شهرستان در زمینه
            های رفاهی نظیر هتل، رستوران و شهربازی کمبودهایی دارد؛ بنابراین احداث
            چنین اماکنی می تواند سودآوری مناسبی برای سرمایه گذاران آن داشته
            باشد.
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
            سپرده شده اند. در ادامه توضیحاتی راجع به پتانسیل های صنایع دستی در
            شهرستان رامیان آورده شده است اما در هر صورت اگر توجهی به آن از سمت
            دولت و نهادهای مربوطه نشود، نمی توان انتظار موفقیت برای آن داشت.
          </p>
          <p>
            از جمله صنایع دستی که توسط مردم شهرستان رامیان انجام می شود، ابریشم
            بافی و قالی بافی است. در شهرستان رامیان میزان ابریشم تولیدی بسیار
            زیاد است و همین موضوع سبب شده است تا بخشی از مردم این شهرستان به کسب
            و کار ابریشم بافی روی بیاورند و سود خوبی را نیز از این کسب و کار به
            دست آورند.
          </p>
          <p>
            قالیبافی از مشاغل خانگی پردرآمدی است که تسهیلات خوبی به آن تعلق می
            گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب می
            دانند؛ چون در کنار کارهای روزمره می توانند به این کار بپردازند و
            درآمد خوبی کسب کنند. از آن جایی که قالی انواع مختلفی دارد، می توان
            با آموختن دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید
            و به بازار عرضه کرد. همچنین با تولید فرش با کیفیت می توان به صادرات
            در این زمینه نیز فکر کرد. این کسب و کار را می توان در فضای کوچک و با
            سرمایه اولیه کم راه انداخت و با فروش محصول و افزایش مشتری، این کار
            را گسترش داد و زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            در این شهرستان کسب و کار سوزن دوزی و دوخت لباس های سنتی نیز رونق
            خوبی دارد و می توان در زمینه گسترش این کسب و کارها نیز فعالیت کرد.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی هر کشوری است که متاسفانه
            در کشور ما آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل
            های هر شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در
            شهرستان رامیان، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد، اما
            پتانسیل های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد
            واحدهای صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            با توجه به اینکه شهرستان رامیان دارای معادن سنگ ساختمانی زیادی می
            باشد و این سنگ ها نیز عموماً به صورت خام به خارج از شهرستان ارسال می
            شوند؛ بنابراین احداث واحد فرآوری و برش سنگ های ساختمانی در این
            شهرستان می تواند ارزش افزوده خوبی را برای سرمایه گذاران این حوزه
            فراهم آورد و منجر به افزایش اشتغالزایی در این مناطق شود. همچنین با
            توجه به رونق کشاورزی در شهرستان و نبود واحد تولیدی کود و سموم
            شیمیایی، احداث واحد تولیدی کود و سم در این شهرستان می تواند به عنوان
            مزیت محسوب شود.
          </p>
          <p>
            از دیگر کسب و کارهایی که در شهرستان رامیان بنا به نظر کارشناسان می
            تواند سودآوری مناسبی به همراه داشته باشد تولید قطعات حودرو و مصالح
            ساختمانی است که سرمایه گذاری در این بخش می تواند موجب اشتغال جوانان
            این منطقه و کاهش درصد بیکاری شود . از جمله کارخانه های فعال در
            شهرستان رامیان می توان به کارخانه آب معدنی و تولید مبلمان اشاره کرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
