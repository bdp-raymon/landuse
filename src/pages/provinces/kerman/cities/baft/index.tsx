import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-21"].cities["IR-2103"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        agriculture: "زراعت",
        gardening: "باغداری",
        birds: "طیور",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        services: "خدمات",
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
            شهرستان بافت یکی از مناطق استان کرمان بوده و در جنوب غربی این استان
            واقع شده است. این شهرستان در 156 کیلومتری مرکز استان کرمان است و
            دارای شهرهای بافت، برنجان و کشکوییه می باشد و از دو بخش مرکزی و خبر
            تشکیل شده است. شهرستان بافت توسط سازمان بهداشت جهانی (WHO) به عنوان
            یکی از ۷۰ شهر سالم ایران و همچنین یکی از هزار شهر سالم جهان معرفی
            شده ‌است. جمعیت این شهرستان طبق سرشماری سال 1395، برابر با 84103
            هزار نفر برآورد شده است. این شهرستان، در دل بزرگترین استان ایران
            واقع شده است. ریزش باران های موسمی، همسایگی با کویر سیرجان از غرب و
            ارتفاعات کوه شاه از شرق و همچنین بادهای صدوبیست روزه باعث شده است که
            این شهرستان دارای آب و هوایی کوهستانی و معتدل باشد و به بهشت جنوب
            ایران معروف شود. شهرستان بافت از شمال شرق به شهرستان بردسیر، از شرق
            و جنوب شرق به شهرستان‌های رابر و جیرفت، از جنوب به شهرستان ارزوئیه و
            از جنوب شرق و شرق به استان هرمزگان و شهرستان سیرجان محدود می‌شود.
            شکل زیر موقعیت شهرستان را نشان می‌دهد.
          </p>
          <p>
            در سال های اخیر خشکسالی اصلی ترین چالش استان کرمان بوده است. شهرستان
            بافت جزو معدود شهرستان های پرآب این استان است که کاهش بارندگی در
            سالهای اخیر در آن نیز، چالش های زیادی را بر سر دامداران و کشاورزان
            ایجاد کرده است؛ مراتع این شهرستان در حال نابودی است و کشاورزی در آن
            به میزان قابل توجهی کاهش یافته است. با این وصف، سه رود دائمی با نام
            های آسیاب جفته، زردشت یا خارا و رود خبر در شهرستان بافت جریان دارند؛
            هرچند که میزان آب این رودها نیز کاهش چشمگیری داشته است. قنوات و آب
            های زیرزمینی نیز نقش اصلی را در تأمین آب مورد استفاده در کشاورزی
            ایفا می کنند. به طور خلاصه باید اینگونه مطرح کرد که این شهرستان به
            دلیل واقع ‌شدن در نوار خشک ایران و محدودیت منابع آب با مشکل شدید آبی
            روبرو است. در نتیجه برای ارائه پیشنهاد در زمینه کسب و کار و ایجاد
            توسعه در هر زمینه ای، باید به این موضوع که یکی از اصلی ترین مؤلفه ها
            برای شروع کار خصوصاً به صورت صنعتی است، توجه ویژه ای داشت.
          </p>
          <p>
            علی رغم وجود پتانسیل های خاص و فوق العاده بر ایجاد انواع کسب و کارها
            مانند اقلیم و شرایط آب وهوایی، مشکلات زیادی بر سر راه ایجاد کسب و
            کار در این شهرستان وجود دارد. سخت گیری در صدور مجوزات، عدم وجود
            سرمایه اولیه، عدم وجود سرمایه درگردش، کمبود آموزش و فرهنگ سازی کار،
            مشکلات اراضی و عدم حمایت از اصلی‌ترین موانع عنوان شده‌اند. این موانع
            باعث مهاجرت بسیاری از افراد به دیگر استانها و شهرها نیز شده است.
          </p>
          <p>
            قابل ذکر است با توجه به اینکه بیشتر مردم این شهرستان را روستاییان و
            عشایر تشکیل می دهند، به نظر می رسد قبل از انجام هر اقدامی در زمینه
            کار در حوزه های صنایع تبدیلی، صنایع فرآوری، صنایع دستی و دیگر موارد
            اشاره شده در طی گزارش، باید بازار فروش را مدنظر قرار داد و بررسی
            خاصی روی آن انجام داد. بازار فروش یکی از اصلی ترین فاکتورها برای
            ایجاد و و وجود مزیت برای هر کسب و کاری است که با توجه به کسب و کار
            مورد نظر، باید در این شهرستان به طور ویژه بررسی شود.
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
            دامداری به عنوان یکی از حوزه های بخش کشاورزی، در شهرستان بافت انجام
            می شود و یکی از اصلی ترین شغل مردم این شهرستان است. با توجه به اینکه
            حوزه دامداری با یکی از مهم‌ترین نیازهای انسان، یعنی نیاز به منابع
            غذایی و همچنین منابع پروتئینی مرتبط می‌باشد، بنابراین همواره مورد
            توجه قرار گرفته است. فعالیت در این حوزه ضمن ایجاد اشتغال‌زایی در
            شهرستان، می تواند عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی
            محسوب شود. در حقیقت شهر کشکوییه را می توان قطب دامداری در سطح این
            شهرستان به شمار آورد. درضمن 80 درصد مردم این شهرستان در زمینه
            دامداری مشغول به فعالیت هستند.{" "}
          </p>
          <p>
            بر اساس نقشه پهنه بندی اقلیمی استان کرمان، شهرستان بافت دارای دو نوع
            اقلیم بری نیمه خشک، معتدل تا خشک و محدوده کوچکی در شمال شهرستان،
            دارای اقلیم بري نيمه خشک معتدل تا سرد است .این تنوع اقلیم و شرایط آب
            و هوایی، همچنین کوهستانی بودن و پوشش گیاهی خاص منطقه، موجب شده است
            که زنبورداری در این شهرستان مزیت خوبی به همراه داشته باشد و انجام
            شود. با توجه به کیفیت عسل تولیدی این شهرستان، در صورت ایجاد توسعه در
            این زمینه، می توان نیاز شهرستان به عسل را به طورکامل برطرف کرد و حتی
            در صورت وجود صرفه اقتصادی، به دیگر مناطق استان صادرات انجام داد.{" "}
          </p>
          <p>
            بز کرکی یکی از دام‌های پرورشی در شهرستان است که افزایش پرورش آن مزیت
            دارد. مهمترین مشکل در ارتباط با توسعه پرورش این نوع دام فقدان برنامه
            عملیاتی در این خصوص است. مشکل دیگری که مشخصا به استان کرمان مربوط
            است، تخلیه برخی از روستاها و مناطق عشایری از نیروی انسانی برای ادامه
            پرورش این نوع دام سبک است.{" "}
          </p>
          <p>
            مطالعات نشان داده است که سودآوری و بهره وری بزهای رایینی در سیستم
            پرورش عشایری و نیمه ساکن خیلی پایین است. معمولاً دو مؤلفه عملكرد
            توليد مثل و توليدي بالا موجب افزايش بازده اقتصادي پرورش دام مي‌ شود
            اما بزهاي كركي راييني علاوه بر بازدهي زايمان و نرخ بزغاله‌ زايي
            پايين از عملكرد توليدي خيلي پايين در مقايسه با نژاد‌هاي پر توليد كرك
            نيز برخوردار است؛ لذا بايد با اصلاح درون نژادي و سپس بين نژادي كميت
            و كيفيت كرك توليدي بزهاي راييني را بهبود بخشيد. درواقع اصلاح بزهاي
            راييني در مولفه هاي وزن زنده و افزايش مقدار كرك توليدي نه تنها درآمد
            دامداران را زياد مي نمايد همچنين ماده خام بيشتري براي صنايع توليد
            كرك، نساجي، پارچه و پوشاك فراهم آورده و ارزش افزوده ناشي از توليد
            كرك را افزايش مي‌ دهد كه مي ‌تواند براي فرزندان پرورش دهندگان بز
            كركي اشتغال مطلوبي را ايجاد كند. اگر بتوان این برنامه را پیاده کرد،
            مزیت نسبی شهرستان در تولید این محصول حفظ شده و احتمالا شاهد افزایش
            مهاجرت معکوس به مناطق عشایری خواهیم بود.
          </p>
          <p>
            پرورش دام‌های سبک شامل گوسفند و بزگوشتی و همچنین دام سنگین مانند گاو
            در سطح این شهرستان بیشتر به صورت داشتی و سنتی انجام می شود. محصولات
            و فرآورده های لبنی یکی از اصلی ترین سوغاتی های شهرستان بافت هستند.
            اقلیم آب و هوایی معتدل و کوهستانی بودن سطح این شهرستان فاکتورهای
            خوبی برای توسعه دامداری به شمار می روند. علاوه بر این نیاز و وجود
            تقاضا برای فرآورده های لبنی نیز مزیت کار در این حوزه را بیشتر خواهد
            کرد. در ضمن در لیست مزیت سنجی به مزیت پرورش اسب و الاغ نیز به علت
            مساعد بودن شرایط آب و هوایی این شهرستان اشاره شده است.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            همان‌طور که در توضیحات اشاره شد، شهرستان بافت از معدود مناطق استان
            کرمان است که دارای اقلیم خاص و ویژه ای است؛ به طوری که این شهرستان
            دارای آب وهوایی معتدل و سطح وسیعی از جنگل و باغ می باشد. این ویژگی
            ها سبب شده است که بخش کشاورزی در این شهرستان از مزیت خاص و ویژه ای
            برخوردار باشد؛ هرچند که به علت خشکسالی و کاهش میزان آب در چند سال
            اخیر، فعالیت در این حوزه کاهش چشمگیری داشته است.{" "}
          </p>
          <p>
            با وجود اینکه طبق تحقیقات انجام شده در این شهرستان، کشاورزی یکی از
            مشاغل اصلی مردم است و کشاورزان نیز مهارت‌های لازم را دارند و همچنین
            وجود پتانسیل اقلیم منطقه، لازم است بر روی کشت محصولاتی که به آب
            کمتری نیاز دارند و سودآوری خوبی هم دارند، تمرکز کرد. البته تا حدودی
            کشاورزی با همین روند در سطح منطقه در حال انجام است.{" "}
          </p>
          <p>
            گندم یکی از محصولات استراتژیکی است که در اکثر نقاط ایران قابلیت کشت
            دارد. کشاورزان شهرستان بافت و استان کرمان نیز هر ساله مقدار قابل
            ملاحظه ای از تولیدات کشاورزی خود را به این محصول اختصاص می دهند.
            خرید تضمینی این محصول توسط دولت و همچنین موارد متعدد استفاده از آن،
            باعث می شود که بتوان مزیت بالایی برای توسعه کشت آن قائل بود. جو نیز
            از دیگر محصولات زراعی است که شرایطی مشابه گندم دارد علاوه بر اینکه
            از آن در تغذیه دام و طیور نیز استفاده می شود.{" "}
          </p>
          <p>
            زعفران، محصولی سودده است که برای کشت به آب زیادی نیاز نداشته و در
            صورت سازگاری با شرایط اقلیمی منطقه، رشد خوبی خواهد داشت. چند سالی
            است که کشت زعفران در این شهرستان رونق گرفته و محصول با کیفیتی تولید
            شده است. کیفیت بالا و همچنین توانایی رقابت زعفران این شهرستان با
            زعفران تولید شده در سایر نقاط کشور، باعث جذب مشتریان زیادی در داخل
            استان و شهرهای مجاور شده است. درآمدزایی و سود حاصل از تولید این
            محصول باعث شده است که کشاورزان تمایل بیشتری به کار در این زمینه
            داشته باشند. توسعه کشت زعفران در این شهرستان می تواند جزو پیشنهادات
            شغلی در این حوزه محسوب شود.
          </p>
          <p>
            آفتابگردان در مقایسه با محصولاتی مانند گندم، نیاز کمتری به آب دارد و
            همچنین درآمدی معادل دو برابر درآمد تولید گندم را نصیب کشاورزان می
            کند. سالانه مقدار قابل توجهی ارز به علت واردات دانه های روغنی از
            کشور خارج می شود؛ علی رغم اینکه شرایط اقلیمی برای تولید بیشتر این
            محصولات در اکثر نقاط مانند شهرستان بافت فراهم است. طبق بررسی‌های
            انجام شده فعالیت در زمینه کشت آفتابگردان مزیت دارد.
          </p>
          <p>
            در سالهای اخیر تمایل مردم نسبت به مصرف گیاهان دارویی و فرآورده‌های
            حاصل از آن‌ها افزایش یافته است؛ از این رو کشت این گیاهان در این
            شهرستان مورد توجه ویژه‌ای قرار گرفته است. در این شهرستان، با توجه به
            تنوع آب و هوایی، بیش از 1000 گونه گیاهی رویش دارند. وجود این ظرفیت
            اقلیمی و همچنین مزیت ایجاد توسعه در آن، توجیه اقتصادی برای ایجاد
            مراکز و واحدهای فرآوری را نیز افزایش می دهد و باعث ایجاد اشتغال قابل
            توجهی خواهد بود.{" "}
          </p>
          <p>
            سیب‌زمینی یکی از محصولات زراعی است که در شهرستان بافت تولید می شود.
            سیب زمینی تقویت‌کننده قلب، محکم‌کننده لثه، مسکن درد و زخم معده است.
            این محصول علاوه بر ویتامین ث زیادی که دارد، حاوی مواد مفید دیگری
            نظیر پتاسیم، فسفر، آهن و منیزیم است. همچنین به علت داشتن میزان قابل
            ملاحظه ای نشاسته انرژی زا نیز می باشد. توسعه کشت این محصول در
            شهرستان، علاوه بر تأمین بازار داخل شهرستان و استان، می تواند به دیگر
            استانها نیز صادر شود.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه های بخش کشاورزی است که در شهرستان بافت انجام می
            شود. تولید محصولات سردرختی در این شهرستان به صورت عمده انجام می شود.
            ارگانیک بودن این محصولات، عدم استفاده از سموم شیمیایی، همچنین کیفیت
            و طعم و مزه مطلوب سبب بازار پسندی میوه های تولیدی این شهرستان در
            شهرها و استانهای همجوار شده است. شرايط مناسب آب و هوايي و اقلیمی و
            همچنین مهارت افراد در باغداری و قابلیت تولید انواع میوه جات در این
            شهرستان، باعث شده است که باغداری در آن از مزیت بالایی برخوردار باشد؛
            بنابراین توسعه آن می تواند جزو پیشنهادات شغلی در این شهرستان باشد.
            البته باید اشاره کرد علاوه بر کاهش میزان آب، سرمازدگی یکی دیگر از
            مشکلات بر سر باغداری این منطقه است که در صورت تمایل به کار در این
            زمینه، باید مورد توجه ویژه‌ای قرار گیرد.{" "}
          </p>
          <p>
            دهستان خبر، دهستان گوغر، شهر بزنجان، شهر کشکوییه و خود شهر بافت از
            اصلی‌ترین مناطقی هستند که تولید انواع میوه های سردرختی مانند انار،
            انگور، هلو، سیب، زردآلو، گیلاس، سیب، آلبالو، به و گردو در آنها رواج
            دارد. بادام نیز از دیگر محصولات سردرختی است که در انواع کاغذی و سنگی
            تولید می شود؛ منطقه دشتاب در این شهرستان به عنوان قطب تولید این
            محصول شناخته شده است.{" "}
          </p>
          <p>
            این شهرستان یکی از اصلی ترین مناطق تولید گردو در سطح استان کرمان می
            باشد. مهم‌ترین ارقام گردوی تولیدی در این شهرستان شامل کاغذی، کلاغی،
            سوزنی و اناری هستند که غیر قابل تکثیر می‌باشند. اصلی ترین مزیت کار
            در زمینه تولید گردو در این شهرستان، وجود بازار فروش مناسب، شرایط
            اقلیمی و مهارت کشاورزان است. علاوه بر اینکه اقتصاد مردم این شهرستان
            به صورت مستقیم به کشت این محصول سودده وابسته است. باید اشاره کرد که
            این محصول به بیشتر استانهای کشور مانند اصفهان، شیراز و ... صادر می
            گردد.{" "}
          </p>
          <p>
            گل محمدی، یکی از انواع گیاهان دارویی است که در این شهرستان کشت
            می‌شود. محصول تولیدی این شهرستان به دلیل آب و هوای خاص و عدم استفاده
            از کود‌های شیمیایی دارای کیفیت بسیار بالایی بوده و بر همین اساس
            مشتریان خاص خود را دارد. با توجه به محدودیت منابع آبی در این شهرستان
            و از طرفی دیگر نیاز آبی کم این گیاه و همچنین اقتصادی بودن تولید آن،
            افزایش سطح زیر کشت آن در این شهرستان به عنوان کشت جایگزین مورد توجه
            قرار گرفته است و می تواند اقتصاد منطقه را رونق بخشد.{" "}
          </p>
          <p>
            گلخانه‌هایی در سطح شهرستان بافت وجود دارند که به تولید صیفی جاتی
            مانند گوجه فرنگی و خیار مشغول هستند. با توجه به اینکه این محصولات
            بازار فروش مناسبی دارند؛ بنابراین توسعه این فعالیت در شهرستان با
            سودآوری قابل توجهی همراه خواهد بود. همچنین در لیست مزیت سنجی مشاغلی
            در زمینه تولید انگور، هویج و توت به علت شرایط آب و هوایی مساعد
            شهرستان، دارای مزیت شناخته شده‌اند.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز شهرستان
            بافت به منابع غذایی از اهمیت بالایی برخوردار است. اقلیم خاص این
            شهرستان، اصلی ترین دلیل برای مزیت کار در زمینه پرورش انواع طیور است.{" "}
          </p>
          <p>
            مرغ یکی از اصلی ترین انواع طیور است که در حال حاضر در این شهرستان
            پرورش می یابد. چندین مزرعه پرورش مرغ گوشتی و تخم گذار در سطح این
            شهرستان مشغول به پرورش چند صد هزار قطعه از این پرنده هستند که نیاز
            منطقه را نیز برطرف می کنند. کیفیت گوشت، مهارت مرغداران و همچنین وجود
            کشتارگاه صنعتی طیور در این شهرستان باعث می شود که در صورت تأمین
            بازار فروش این محصولات در شهرستانهای مجاور و ایجاد شرایط برای صادرات
            به سایر استانها، توسعه در این زمینه پیشنهاد شود.
          </p>
          <p>
            با توجه به اقلیم آب و هوایی این شهرستان، به نظر می رسد فعالیت در
            زمینه پرورش سایر طیور مانند بوقلمون، بلدرچین و ... سوددهی قابل توجهی
            به همراه داشته باشد؛ ولی قبل از کار در این زمینه باید فرهنگ استفاده
            در داخل شهرستان و همچنین بازار فروش در شهرستانهای مجاور به طور دقیق
            بررسی شود.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            شهرستان بافت، دارای مراکز تبدیل و فرآوری محصولات تولیدی در سطح
            شهرستان مانند کارخانه لبنیات، تولید کرک و پشم، کیک و بیسکوییت و
            کشتارگاه های صنعتی است؛ ولی با توجه به کیفیت محصولات تولیدی در این
            شهرستان و همچنین مزیت کار در زمینه فرآوری آنها، به نظر می رسد توسعه
            فعالیت در این حوزه ها مزیت داشته باشد و اشتغال خوبی را ایجاد کند.
            البته باید توجه داشت برای کار در هرکدام از این زمینه ها، می بایست در
            ابتدا توان رقابت با واحدهای قدیمی تر را در نظر گرفت.
          </p>
          <p>
            شهرستان بافت یکی از سرسبزترين مناطق کشور است که چندین ایل و طایفه در
            آن با تولید چندین هزار کرک در سال، رتبه برتر در تولید این محصول در
            سطح کشور را به خود اختصاص داده است. ايران دارای رتبه خوبی از لحاظ
            تولید کرک در سطح جهانی است؛ در واقع بیشترین میزان کرک تولیدی کشور در
            شهرستان بافت تولید می شود. کارخانه کرک در این شهرستان، قابليت فرآوري
            بيش از 1000 تن کرک در سال را دارد. اين کارخانه تنها کارخانه کرک جنوب
            شرق کشور است که قابليت توسعه نیز دارد و صنايع پايين دستي نيز در
            آينده به آن اضافه خواهند شد. در ضمن ميزان صادرات محصول اين کارخانه
            بستگي به توليد کرک خام توسط عشاير و دامداران این منطقه دارد؛
            بنابراین اگر توسعه ای در این زمینه رخ ندهد و میزان تولیدات افزایش
            نیابد، ایران مزیت خود در تولید و صادرات این محصول را از دست خواهد
            داد. قابل ذکر است که با توجه به نوسانات قیمتی پیش آمده، کمبود سرمایه
            در گردش یکی از اصلی ترین مشکلات این واحد است.
          </p>
          <p>
            با وجود سطح پرورش دام و همچنین شرایط شهرستان، ظرفیت خوبی برای کار در
            زمینه فرآوری و تبدیل کرک جهت تولید پارچه و صنایع نساجی وجود دارد. در
            صورت ایجاد این واحدها می توان انگیزه خوبی برای ایجاد توسعه در زمینه
            پرورش این نوع از بز ایجاد کرد.
          </p>
          <p>
            باتوجه به میزان تولید گردو در شهرستان، کارخانه ای در زمینه فرآوری
            پوست این محصول در سطح شهرستان وجود ندارد. فرآوری پوست سبز گردو، یکی
            از اصلی ترین راه هایی است که می توان با انجام فعالیت در آن، سود
            بسیار زیادی از این خشکبار به دست آورد. پوست سبزگردو سرشار از تانن
            است که در صنایع رنگ سازی، داروسازی، مواد آرایشی و چرم سازی کاربرد
            فراوانی دارد. در برخی از کشور‌ها نیز برای ضد عفونی کردن محصولات
            کشاورزی نظیر برنج و حبوبات و همچنین تولید سموم دفع آفات نباتات از
            عصاره آن استفاده می کنند. با جمع آوری، خشک کردن و پودر کردن این
            ماده، رنگ طبیعی تولید و با آن کلاف‌های خام بندهایش را رنگ می‌کند.
            رنگ حاصله از آن نیز کاملاً طبیعی، با دوام و ماندگار است که در مقایسه
            با رنگ‌های شیمیایی از شادابی و ثبات بالایی برخوردار است. همچنین خمیر
            آن جرم‌گیری قوی است که جرم لثه‌ها را به راحتی از بین می برد و
            دندان‌ها را براق می‌کند. سالانه مقدار قابل توجهی از پوست سبز گردو
            دور ریخته می شود؛ درصورتی‌که می تواند فرآوری شود و درآمد قابل ملاحظه
            ای را ایجاد کند. بنابراین فرآوری پوست سبز گردو می تواند جزو مشاغل
            پیشنهادی در این شهرستان باشد.
          </p>
          <p>
            عسل یکی از محصولاتی است که در شهرستان بافت تولید می شود. کیفیت عسل
            تولیدی و همچنین مساعد بودن اقلیم این شهرستان برای افزایش تولید این
            محصول، باعث می شود تا بتوان احداث واحد بسته بندی عسل و در واقع ایجاد
            ارزش افزوده برای این محصول با خاصیت دارویی فوق العاده را پیشنهاد
            داد.{" "}
          </p>
          <p>
            با توجه به اینکه میوه های سردرختی در سطح این شهرستان تولید می شوند و
            دارای کیفیت مطلوبی نیز هستند؛ بنابراین احداث واحدی جهت بسته‌بندی
            فرآورده‌های آن‌ها مانند میوه خشک، آبمیوه، مربا و ... می تواند جزو
            پیشنهادات شغلی در این حوزه محسوب شود. بسته بندی اغلب در سهولت
            کاربرد، حمل و نقل، حفاظت و انبار کردن محصول تأثیر بسیاری دارد.
            همچنین میزان طول عمر محصول را نیز افزایش می دهد. در ادامه باید به
            مزیت بسته بندی زعفران و افزایش سود تولید آن با ایجاد این واحدها،
            اشاره کرد.{" "}
          </p>
          <p>
            با توجه به سطح تولید میوه در باغات این شهرستان، در صورت افزایش میزان
            تولید و وجود مازاد میوه پس از فرآوری و همچنین تأمین بازار فروش در
            خارج از شهرستان، می توان در زمینه بسته بندی این محصولات فعالیت کرد و
            سود خوبی به دست آورد. در ضمن در لیست مزیت سنجی به سورتینگ این
            محصولات نیز اشاره شده است.{" "}
          </p>
          <p>
            با توجه به اینکه دامداری در این شهرستان انجام می شود و گوشت‌های
            تولید شده نیز کیفیت بالایی دارند؛ لذا بسته بندی گوشت در این شهرستان
            از اهمیت ویژه ای برخوردار است و در صورت تأمین بازار فروش آنها در
            خارج از استان، سود خوبی را نصیب دامدار خواهد کرد. البته باید اشاره
            کرد در صورتی که بسته بندی این محصولات توسط کشتارگاه انجام شود، نمی
            توان از آن به عنوان شغلی مستقل نام برد. با توجه به سطح مرغداری و
            مزیت کار در این زمینه و پرورش سایر طیور، احداث واحدی جهت بسته بندی
            گوشت آنها در صورت عدم بسته بندی در کشتارگاه، می تواند جزو پیشنهادات
            شغلی در این شهرستان باشد.{" "}
          </p>
          <p>
            کشتارگاه طیور واقع در شهرستان بافت، با ظرفیت چهار هزار قطعه و ۶ هزار
            تن قطعه بسته بندی و ۱۵۰ تن تبدیل ضایعات، با سرمایه گذاری ۱۵ میلیارد
            تومانی، برای ۷۵ نفر اشتغال ایجاد کرده است و هم اکنون فعال است. به
            نظر می رسد با وجود این واحد، برای ایجاد توسعه در این زمینه و یا
            ایجاد واحد جدیدی در این زمینه، باید توان رقابت و وجود صرفه اقتصادی
            کار در این زمینه به طور دقیق بررسی شود. البته در صورت تأمین بازار
            فروش این محصولات در شهرستانهای مجاور و جتی خارج از استان، ایجاد
            واحدهای دیگر ضروری خواهد بود. در رابطه با کشتارگاه دام نیز باید گفت
            که در سطح شهرستان وجود دارد و طبق بررسی های انجام شده و وجود مزیت
            کار در حوزه دامداری، احداث واحدی دیگر می تواند بازدهی خوبی داشته
            باشد.{" "}
          </p>
          <p>
            با وجود این که محصولات باغی متنوعی در سطح این شهرستان تولید می شوند،
            اما سردخانه ای برای نگهداری این محصولات در شهرستان وجود ندارد. با
            توجه به آب وهوای سرد این شهرستان و طبق بررسی های انجام شده، به نظر
            نمی رسد که چنین واحدی جزو اصلی ترین نیازهای این منطقه باشد؛ هرچند که
            در صورت بررسی و وجود نیاز به چنین واحدی، کار در این زمینه می تواند
            سودآورد باشد. البته ذکر این نکته نیز ضروری است که چنین واحدهایی با
            ایجاد یک یا چند مورد به حالت اشباع می رسند و در نتیجه برای واحدهای
            جدیدتر، بازار فروش مناسبی وجود نخواهد داشت؛ بنابراین در صورت تمایل
            به کار در این زمینه، باید به این مورد نیز توجه داشت.{" "}
          </p>
          <p>
            در پایان اشاره می شود که در لیست مزیت سنجی به مزیت بسته بندی
            سبزیجات، بسته بندی غلات و حبوبات، تولید و بسته‌بندی کمپوست به علت
            وجود مواد اولیه در شهرستان و همچنین وجود بازار تقاضا، اشاره شده است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            فرآوری محصولات کشاورزی و دامی، یکی از مهم‌ترین روش‌ها برای ایجاد
            اشتغال و عاملی مهم در توسعه پایدار امنیت غذایی در شهرستان بافت محسوب
            می شود. ایجاد و توسعه صنایع غذایی در این شهرستان، علاوه بر
            اشتغال‌زایی و کاهش هدررفت محصولات کشاورزی در این منطقه، باعث ارتقای
            سطح درآمد مردم نیز خواهد شد.
          </p>
          <p>
            با توجه به اینکه گردو به مقدار زیادی در این شهرستان تولید می شود اما
            کارخانه ای در زمینه فرآوری این محصول در سطح شهرستان وجود ندارد.
            ایجاد کارخانه هایی در زمینه فرآوری این محصول مانند تولید روغن گردو و
            همچنین تولید خشکبار می تواند جزو مشاغل پیشنهادی در این حوزه محسوب
            شود. روغن گردو روغنی خوراکی است که در اکثر نقاط جهان تولید شده و در
            دسترس است. این روغن فاقد کلسترول بوده و برای بهبود سلامت قلب عالی
            است؛ زیرا موجب افزایش گردش خون، کاهش رسوب چربی، افزایش انرژی و کاهش
            فشار خون می‌شود. همچنین جلوگیری از ریزش مو و شوره سر، کمک به کنترل
            قند خون و دیابت، کاهش خطر ابتلا به سرطان، کاهش حمله های میگرنی،
            افزایش سلامت استخوان ها و ... از جلمه فواید مصرف این محصول هستند.
            البته میزان مصرف این روغن باید کنترل شود؛ زیرا درکنار این فواید،
            معایبی مانند ناراحتی معده، التهاب معده و قندخون نیز دارد.{" "}
          </p>
          <p>
            همچنین تولید خشکبار یکی دیگر از فرآورده‌های گردو است که با سوددهی
            مناسبی همراه است. مصرف گردو به صورت خام و خشکبار فواید پزشکی بسیاری
            دارد. افزایش قدرت حافظه، درمان تنگی نفس، جلوگیری از ورم مفاصل، ضد
            سرطان، جلوگیری از لخته خون، تنظیم سوخت و ساز در بدن، تنظیم فشار خون
            و ... از جمله فواید بی شمار گردو و دم کرده آن و همچنین خشکبار آن
            هستند.
          </p>
          <p>
            میوه های سردرختی به مقدار زیادی در این شهرستان تولید می شوند؛
            بنابراین احداث واحدی جهت فرآوری آن‌ها در زمینه تولید آبمیوه، چیپس
            میوه، میوه خشک و سایر فرآوری های آن‌ها مانند مربا، ترشی جات، لواشک،
            کنسانتره، کمپوت، شهد و سرکه می تواند جزو مشاغل پیشنهادی در این حوزه
            محسوب شود. تولید این موارد علاوه بر ایجاد ارزش افزوده، اشتغال و
            درآمد خوبی را برای افراد این شهرستان ایجاد خواهد کرد.
          </p>
          <p>
            شهرستان بافت قطب تولیدات خام دامی می باشد. این شهرستان با وجود چندین
            هزار دام سنگین و سبک و تعداد زیادی از مردم عشایرنشین، تنها دارای یک
            کارخانه برای فرآوری شیر است که در زمینه تولید انواع فرآورده ها مانند
            شیر پاستوریزه، ماست، خامه، پنیر، کشک و ... در حال فعالیت است. این
            واحد در شهرک صنعتی شهرستان بافت واقع در 2 کیلومتری مرکز شهر واقع شده
            است. با توجه به اقلیم آب و هوایی مساعد منطقه برای دامداری و همچنین
            بازار فروش مناسب برای این محصولات در دیگر استانهای مجاور این شهرستان
            مانند هرمزگان، می‌توان در زمینه توسعه فرآوری شیر تمرکز کرد و واحدهای
            جدیدی در این زمینه احداث نمود و به سود مناسبی رسید. فعالیت در این
            زمینه ضمن ایجاد اشتغال‌زایی، انگیزه خوبی برای توسعه دامداری در
            دامداران ایجاد خواهد کرد. قابل ذکر است که به علت کیفیت محصولات
            تولیدی، در صورت کار در این حوزه می توان به صادرات به خارج از استان و
            شهرستان نیز فکر کرد.{" "}
          </p>
          <p>
            با توجه به این که کشت گیاهان دارویی در شهرستان بافت انجام می شود و
            همچنین ظرفیت‌های لازم برای توسعه سطح زیر کشت آن‌ها خصوصاً گل محمدی
            در این شهرستان وجود دارد؛ بنابراین فرآوری این گیاهان مانند بسته
            بندی، خشک کردن و عرق گیری از آنها از مزیت بسیار خوبی برخوردار بوده و
            می تواند جزو مشاغل پیشنهادی در این حوزه محسوب شود. البته یک واحد
            تولید گلاب در سطح شهرستان فعال است. در ادامه نیز باید به مزیت کار در
            زمینه فرآوری صیفی جات اشاره کرد. وجود ظرفیت برای توسعه کشت این
            محصولات و همچنین وجود بازار مصرف برای آن‌ها در سطح شهرستان، از
            مهم‌ترین دلایل مزیت این کسب و کار خواهد بود.{" "}
          </p>
          <p>
            فرآوری گندم نیز از جمله مشاغلی است که در این شهرستان پیشنهاد می شود.
            وجود بازار تقاضا برای فرآورده های گندم مانند نان، شیرینی، رشته آشی و
            پلویی، آرد و سایر موارد مانند کلوچه و بیسکوییت، پفک، نشاسته گندم،
            نان بستنی، آرد سوخاری و برشته گندم از علت های اصلی مزیت کار در این
            زمینه ها و ایجاد توسعه در آنهاست. یک کارخانه تولید کیک و بیسکوییت در
            سطح شهرستان مشغول به فعالیت است که علاوه بر تأمین نیاز شهرستان،
            صادرات نیز انجام می دهد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            شهرستان بافت یکی از مرتفع‌ترین و خوش آب وهواترین مناطق استان کرمان
            است. این شهرستان با داشتن شرایط ویژه دمایی، ارتفاع بالا و بارش مناسب
            دارای بزرگترین پهنه جنگلی جنوب شرق ایران است. آبشار سه کاسه، قدیمی
            ترین درخت گردوی جهان با قدمتی بیش از 2500 سال، پارک ملی خبر، قلعه
            گنج، غار طرنگ، آبشار کوه شاه، ارتفاعات دهستان گوغر و چندین جاذبه
            طبیعی و تاریخی دیگر در سطح شهرستان بافت وجود دارند که هرکدام از آنها
            خاصیت و جذابیت خاص خود را دارند.{" "}
          </p>
          <p>
            طبق بررسی ها و تحقیقات انجام شده میزان بازدید از این موارد خوب بوده
            و این شهرستان در فصل های مختلف پذیرای مسافرانی از سرتاسر کشور است؛
            ولی مزیت کار در این زمینه و ظرفیت برای کار، بسیار بیشتر از اقداماتی
            است که تاکنون انجام شده است. چندین هتل و اقامتگاه بومگردی در سطح این
            شهرستان وجود دارد که برای چندین نفر اشتغال ایجاد کرده است. مجتمع
            گردشگری در پارک ملی خبر نیز وجود دارد که در حال راه اندازی است. با
            وجود این امکانات محدود، توسعه ارائه خدمات گردشگری مانند بومگردی و
            رستوران های بومی نیز پیشنهاد می شود و دارای مزیت خواهد بود. در ضمن
            در لیست مزیت سنجی به مزیت آرایشگری و ارائه خدمات ساختمانی به دلیل
            وجود نیاز در منطقه اشاره شده است.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            شهرستان بافت از مراکز مهم گلیم شیریکی پیچ و قالیبافی استان کرمان و
            سطح کشور است. به طور کلی قالی‌های استان کرمان را می‌توان به دو گروه
            شهری‌باف و عشایری‌باف تقسیم کرد که شهرهای شمالی استان کرمان مهم‌ترین
            مرکز عرضه قالی‌های شهری باف و سیرجان و بافت مهم‌ترین مرکز عرضه
            فرش‌های عشایری هستند. فرش دستباف این شهرستان نیز به دلیل اقلیم خاص
            خود از نقشه‌های خاصی برخوردار است که آن را از سایر نواحی استان کرمان
            متمایز می کند. همچنین قالی‌هایی که در این شهرستان تولید می‌شوند
            دارای طرح کرمانی و نقش‌های شاه عباسی، گلدانی، حشمتی، گل بادامی و گل
            سرخی هستند.{" "}
          </p>
          <p>
            با توجه به مهارت بافندگان و همچنین کیفیت محصولات، در صورت تأمین
            بازار فروش در خارج از سطح شهرستان، می توان در زمینه توسعه تولید این
            محصولات سرمایه گذاری کرد و اشتغال‌زایی نمود. در ضمن در لیست مزیت
            سنجی به نساجی سنتی و نمدبافی نیز اشاره شده است.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در اوایل دهه نود، پرورش ماهی یکی از مشاغل پرسود در سطح این شهرستان
            شناخته می شد. فعالیت در زمینه پرورش ماهیان گرم آبی و سردآبی سال به
            سال افزایش می یافت. وجود منابع غنی آب شیرین، استقبال کشاورزان و مردم
            منطقه از آبزی پروری و استفاده از روش های علمی از علل افزایش تولید و
            رضایتمندی تولیدکنندگان بود. همچنین منطقه خبر، بزرگترین واحد
            تولیدکننده ماهیان سردآبی را در خود جای داده بود که تولیداتش در سطح
            استان نیز به فروش می رسید. اما با وجود خشکسالی های اخیر در سطح استان
            و کاهش میزان بارندگی‌ها میزان تولید کاهش محسوسی داشته است. اما علی
            رغم کاهش میزان آب در سطح این شهرستان، همچنان پرورش ماهی در سطح
            شهرستان انجام می شود و ماهیان سردآبی سهم بیشتری از این تولید را به
            خود اختصاص داده اند. با شرایط کنونی و کمبود آب و منابع آبی، اگر
            بتوان منبع آب پایدار مورد نیاز برای کار در حوزه شیلات را فراهم آورد،
            با وجود شرایط اقلیمی ویژه و مساعدی که در شهرستان حاکم است، پتانسیل
            خوبی برای کار در این زمینه وجود دارد و در صورت افزایش تولید می توان
            این محصولات را در سراسر استان به فروش رساند.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            یک کارخانه فولاد در این شهرستان مشغول به فعالیت است که برای هزار نفر
            اشتغال ایجاده کرده است. این واحد پس از 12 سال تعطیلی، مجدداً در سال
            1396 احیا و راه اندازی شد. همچنین کارخانه کرک بافت که در قسمت‌های
            قبل به آن اشاره شد، چندین سال پیش به علت بدهی بانکی تعطیل شده بود؛
            ولی پس از 12 سال احیا شده است و در حال حاضر مشغول به فعالیت است. این
            واحد برای ۸۰ نفر به صورت مستقیم و ۱۰۰ نفر غیرمستقیم اشتغال ایجاد
            کرده است.{" "}
          </p>
          <p>
            شهرستان بافت از لحاظ معدنی از اهمیت ویژه ای برخوردار است. معادن
            منگنز، آهن، کروم و ... در این شهرستان فعال هستند و استخراج از آنها
            صورت می گیرد. همچنین در این زمینه معدنی در کوه شاه که ارتفاعی بالغ
            بر ۴۴۵۰ متر داشته و در رشته کوه لاله‌زار واقع شده است، وجود دارد که
            نتایج اکتشافات نشان می‌دهد که عیار سنگ آهن آن بالاست اما وسعت بسیار
            محدودی دارد. به علت مسائل محیط زیستی و مخالفت مردم منطقه با راه
            اندازی و فعالیت این معدن، استخرج از آن متوقف شده و هزینه های مکتشف
            نیز به او پرداخت شد. در واقع باید اشاره کرد با توجه به اینکه شغل
            اصلی اکثر مردم شهرستان دامداری و یا کشاورزی است، به نظر نمی رسد
            تغییر دادن اقلیم منطقه به علت گسترده تر کردن معادن مزیت داشته باشد.
            هرچند که در این خصوص باید بررسی‌های گسترده تری انجام گیرد.{" "}
          </p>
          <p>
            همان‌طور که در قسمت صنایع تبدیلی و غذایی اشاره شد، کارخانه شیر و
            لبنیات، کارخانه تولید کیک و کلوچه و کارخانه کرک نیز از صنایع فعال در
            سطح این شهرستان هستند که عمدتاً از بازدهی خوبی برخوردار بوده‌اند و
            نقش تأثیرگذاری بر روی اشتغال افراد بومی این منطقه داشته اند. در ضمن
            در لیست مزیت سنجی به مزیت فعالیت در حوزه تولید مصنوعات آلومینیومی به
            دلیل نیاز داشتن منطقه اشاره شده است.{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
