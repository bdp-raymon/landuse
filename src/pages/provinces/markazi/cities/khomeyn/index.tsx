import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-28"].cities["IR-2805"]
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
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        fisheries: "شیلات",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
        services: "خدمات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان خمین یکی از شهرستان‌های استان مرکزی می‌باشد و از دو بخش به
            نام‌های مرکزی و کمره و همچنین هفت دهستان تشکیل شده ‌است. از لحاظ
            موقعیت جغرافیایی این شهرستان در جنوب استان قرار دارد و از شمال با
            شهرستان اراک، از شرق با شهرستان محلات، از جنوب با استان اصفهان و
            لرستان و از غرب با شازند همسایه است مرکز این شهرستان، شهر خمین می
            باشد و جمعیت این شهرستان در سال 1395، برابر با 105017 نفر گزارش شده
            است. این شهرستان دارای آب وهوای گرم و خشک است و به تبع شرایط آب و
            هوایی، مقدار آب کمی دارد؛ بنابراین برای کشاورزی و دامداری باید چاه
            هایی با عمق صد متر حفر شوند. شکل زیر موقعیت شهرستان خمین را نشان می
            دهد.
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
            زراعت یکی از بخش‌های حوزه کشاورزی است که در شهرستان خمین رونق دارد.
            در این شهرستان گرایش به کشاورزی زیاد است ولی به دلیل کمبود آب، بیشتر
            به صورت دیمی رواج دارد.{" "}
          </p>
          <p>
            طبق بررسی های انجام شده، تولید گندم به هر دو صورت آبی و دیمی در این
            شهرستان انجام می شود. البته به دلیل کمبود آب در این شهرستان، قابلیت
            توسعه کشت این محصول به صورت آبی وجود ندارد؛ بنابراین توسعه آن به
            صورت دیمی مزیت خواهد داشت. در میان محصولات کشاورزی، کاشت گندم نسبت
            به بقیه دارای ریسک کمتری است. گندم در بازه زمانی حدوداً هشت ماهه به
            ثمر نشسته و به مرحله سود دهی می رسد. خرید تضمینی گندم همه ساله توسط
            دولت انجام می گیرد. البته خود کشاورز هم می تواند گندم را بفروشد و
            درآمد خوبی کسب کند. علاوه بر اعطای تسهیلات بانکی، کود شیمیایی و بذر
            نیز به شکل یارانه ای در اختیار کشاورزان قرار می گیرد؛ بنابراین گسترش
            تولید گندم در این شهرستان ارزش افزوده زیادی را به دنبال خواهد داشت.
          </p>
          <p>
            در شهرستان خمین کشت حبوباتی نظیر لوبیا چیتی، نخود و عدس به مقدار
            زیادی انجام می شود. از بین محصولات ذکر شده، کشت لوبیا چیتی بیشتر است
            و به سراسر کشور نیز ارسال می شود. از طرفی لوبیا چیتی این شهرستان
            تبدیل به برند شده است و بازار فروش خوبی دارد؛ بنابراین افزایش کشت آن
            می تواند سوددهی خوبی را به همراه داشته باشد.
          </p>
          <p>
            همچنین در این شهرستان کشت جو و سایر محصولات علوفه ای نظیر ذرت علوفه
            ای و یونجه به صورت دیمی برای تأمین خوراک دام انجام می گیرد.
          </p>
          <p>
            در این شهرستان اراضی وسیعی وجود دارند که به دلیل شوری و عمق کم خاک و
            شور بودن آب زراعی صرفاً برای تولید جو مناسب هستند. سه نوع جو بهاره،
            پاییزه و حد واسط (نسبت به سرما مقاومت کمتری داشته و در نقاط نسبتاً
            گرمسیر در هر دو فصل بهار و پاییز کشت می شود) را می توان در مناطق
            مختلف این شهرستان کشت کرد.
          </p>
          <p>
            کاشت ذرت در خاک هایی که دارای عمق کافی، نرم و نفوذپذیر باشند امکان
            پذیر است. هم چنین لازم است تهویه در خاک به خوبی انجام شود، از نظر
            آهک و هوموس غنی باشد و دارای حرارت کافی و مقادیر زیادی مواد کلوئیدی
            باشد. زمین های خیلی سبک و خیلی سنگین برای کاشت ذرت مناسب نیستند. این
            نوع زمین ها را باید به وسیله کودهای حیوانی و سبز اصلاح نمود و سپس
            اقدام به کاشت این گیاه کرد. زمین های رسی هوموسی و زمین های رسی شنی
            که عمق کافی داشته باشند، برای کاشت این گیاه مناسب اند. مناسب ترین و
            بهترین pH برای رشد و نمو ذرت برابر 6.5-5.5 است و در خاک هایی که pH
            آن‌ها 7-6 باشد قادر به رشد بوده و محصول قابل توجهی تولید می نماید.
          </p>
          <p>
            در میان گیاهان علوفه ای، یونجه به دلیل داشتن ارزش غذایی بالا و
            عملکرد خوب آن از اهمیت خاصی برخوردار است. همچنین به علت وجود
            باکتریهای ریزوبیوم در ریشه های خود قادر به تثبیت ازت هوا بوده که این
            ازت برای کشت بعدی قابل استفاده است و می توان حداقل تا ۳ سال محصول
            برداشت نمود؛ بنابراین توسعه کشت آن توجیه اقتصادی داشته و امکان تأمین
            بخشی از علوفه مورد نیاز جهت تعلیف احشام فراهم می‌شود که علاوه بر
            ایجاد اشتغال مولد و حصول درآمد مناسب برای زارعین، در استفاده بهینه
            از ظرفیت های پرورش دام نیز مؤثر بوده و نیاز شهرستان در زمینه پروتئین
            دامی را برطرف می کند.
          </p>
          <p>
            کشت چغندرقند در چند سال اخیر در این شهرستان کاهش پیدا کرده بود؛ زیرا
            این محصول نیاز به آب زیادی دارد و کارخانه قندی که در شهرستان دایر
            بود، برای تأمین نیاز مواد اولیه از نیشکر استفاده می کرد و این واحد
            در حال حاضر تعطیل می باشد. البته از سال گذشته به دلیل نیاز شهرستان
            به شکر و قند و همچنین خرید تضمینی این محصول، کشت آن افزایش پیدا کرده
            است. به همین دلیل با توجه به مدیریت منابع آبی شهرستان می توان در
            زمینه کشت این محصول فعالیت کرد. همچنین می توان کارخانه قند شهرستان
            را مجدداً راه اندازی کرد.{" "}
          </p>
          <p>
            کشت زیره مزیت‌هایی اقتصادی خاصی دارد. از جمله این خواص می توان به
            خواص درمانی، فصل رشد نسبتاً کوتاه که باعث می‌شود پس از برداشت محصول،
            زمین را زیر کشت محصولاتی نظیر ذرت علوفه‌ای، سویا، هویج، ارزن و کنجد
            برد و یا اقدامات اصلاحی روی خاک انجام داد، نیاز آبی کم و تأمین آب
            مورد نیاز خود از نزولات جوی، عدم تلاقی فصل کاری زیره با فصل کاری
            محصولات دیگر و داشتن توجیه اقتصادی مناسب در مناطقی که محدودیت منابع
            آب دارند، اشاره نمود. بنابراین کشت این گیاه در شهرستان مزیت خواهد
            داشت.
          </p>
          <p>
            دانه روغنی نظیر کلزا دارای ارزش غذایی زیادی است؛ به طوری که حاوی ۴۰
            تا ۴۵ درصد روغن، ۱۷ تا ۲۶ درصد پروتئین و کنجاله آن حاوی ۵۰ درصد
            پروتئین است. این گیاه مفید و استراتژیک آب کمی مصرف می‌کند و قابلیت
            توسعه کشت آن در این شهرستان وجود دارد.{" "}
          </p>
          <p>
            علاوه بر کلزا، کشت کنجد نیز در شهرستان دارای مزیت است. کنجد از آن
            دسته گیاهانی محسوب می شود که با هر بار کاشت و پرورش، محصول و بار
            قابل توجهی را به ارمغان می آورد. یکی دیگر از مزایای کاشت کنجد، صرفه
            جویی در منابع آب است. این گیاه قادر است تا با جذب رطوبت باقیمانده در
            خاک رشد کند. همین امر موجب سازگاری آن با آب و هوای گرم می شود. ریشه
            های کنجد در بهبود ساختمان خاک و افزایش نفوذپذیری آن نقش مؤثری داشته
            و به عنوان یکی از گیاهان مناسب برای تناوبهای زراعی در نظر گرفته می
            شود. همچنین در بعضی از مناطق این گیاه به عنوان کود سبز کاشته می شود.
            این امر حاکی از این است که کاشت کنجد علاوه بر سودآوری، به کیفیت خاک
            و بهبود کشاورزی نیز کمک می کند.
          </p>
          <p>
            زعفران از جمله گیاهانی است که به آب کمی نیاز دارد و به صورت گلخانه
            ای نیز قابلیت کشت دارد. برای کشت این گیاه در هر منطقه ای نیاز به
            شرایطی مانند خاک شنی-رسی، آب و هوای گرم و خشک و همچنین زمین هایی که
            قبلاً در آن کشت زعفران انجام نشده باشد، است. با توجه به شرایط ذکر
            شده، کشت این گیاه در این شهرستان به میزان کم و به صورت آزمایشی انجام
            شده است و توسعه کشت آن دارای مزیت خواهد بود. لازم به ذکر است با توجه
            به این که کشت این گیاه در اکثر شهرستان ها و استان ها انجام می شود،
            احتمال اشباع شدن در این مورد وجود دارد؛ بنابراین لازم است بازار فروش
            مناسب ایجاد شود.{" "}
          </p>
          <p>
            طبق بررسی های انجام شده، 60 هكتار از اراضي كشاورزي اين استان زير كشت
            گياهان دارويي قرار دارد و در سال 1395، حدود يك هزار و 320 تن انواع
            گياهان دارويي از اين اراضي برداشت شده است. با توجه به اقلیم شهرستان
            خمین و همچنین گلخانه هایی که در این شهرستان وجود دارند، تولید گل
            گاوزبان و گل محمدی مزیت خواهد داشت و می توان این تولیدات را گسترش
            داد. البته کشت گیاهان دارویی در اکثر مناطق کشور به هر دو صورت آزاد و
            گلخانه ای انجام می شود و برای این محصولات تأمین بازارفروش به صورت
            فله ای سخت شده است؛ در نتیجه باید برای این محصولات بازار صادرات و
            صنایع بسته بندی ایجاد کرد.{" "}
          </p>
          <p>
            طبق بررسی های انجام شده، در 300 هکتار از زمین های این شهرستان سیب
            زمینی و پیاز کشت می شوند که این تولیدات نسبت به سال های 1395 و 1396
            کاهش بیست درصدی داشته است. در واقع برای این محصولات بازار فروش
            تضمینی وجود ندارد و بیشتر این تولیدات در شهرستان فاسد شده و موجب ضرر
            کشاورز می شوند، به همین دلیل تولید این قبیل محصولات در شهرستان کاهش
            پیدا کرده است؛ بنابراین افزایش تولید سیب زمینی و پیاز در این شهرستان
            مستلزم ایجاد بازار فروش تضمینی است.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری در شهرستان خمین از لحاظ تعداد زمین های قابل کشت مشکلی ندارد؛
            ولی مسئله اصلی در این خصوص این است که شهرستان با کمبود آب مواجه است
            و نمی توان در زمینه تولید میوه های باغی به صورت گسترده فعالیت کرد.{" "}
          </p>
          <p>
            در این شهرستان، تولیدات گلخانه ای که شامل گل های زینتی و صیفی جات
            هستند، زیاد است. گلخانه های تولید صیفی جات نظیر خیار، گوجه فرنگی،
            انواع فلفل و بادمجان و همچنین تولید سبزی های خوراکی در این شهرستان
            دایر است. البته این محصولات بیشتر برای تأمین نیاز شهرستان و استان
            تولید می شوند و افزایش تولیدات این محصولات با توجه به اینکه بازار
            فروش وجود ندارد و در اکثر استان ها تولید می شوند، صرفه اقتصادی ندارد
            و نمی توان این تولیدات را گسترش داد.{" "}
          </p>
          <p>
            احداث گلخانه های تولید گل های زینتی نسبت به تولید صیفی جات مزیت
            بیشتری دارد. این فعالیت ها به صورت گسترده در شهرستان انجام می شود.
            در خمین مجتمع ها و شهرک های گلخانه ای بیست و پنج هکتاری و مکانیزه
            فعال هستند و برای اقلیم و کم آبی این شهرستان راه چاره محسوب می شوند.
            طبق لیست مزیت سنجی گل های تولید شده در این شهرستان شامل رز، لیلیوم،
            داوودی، میخک و گلایل هستند که بیشترین سهم برای تولید گل‌های گلایل و
            میخک است. با توجه به شرایط شهرستان، تولید گل و گیاه زینتی دارای مزیت
            است. قابل ذکر است که ایجاد آفت در گل های پیازی (کنه پیاز) نظیر گلایل
            از جمله مشکلاتی است که برای پرورش این گل وجود دارد.{" "}
          </p>
          <p>
            پرورش قارچ در تعدادی از روستاهای این شهرستان به صورت آزمایشی انجام
            شده و بازدهی مطلوبی نیز داشته است. پرورش قارچ از جمله مشاغلی است که
            می توان با سرمایه اولیه کم و محیط کوچک راه‌اندازی کرد. یک دوره کامل
            پرورش قارچ 60 روز طول می کشد که قابلیت کاهش به 35 روز را نیز دارد؛
            بنابراین توسعه پرورش قارچ نیز از کسب و کارهای خوب این شهرستان است که
            در صورت بازاریابی، سوددهی خوبی را به همراه خواهد داشت. این فعالیت را
            به صورت کارگاهی یا در گلخانه ها نیز می توان انجام داد.{" "}
          </p>
          <p>
            طبق لیست مزیت سنجی محصولات باغی که به صورت انبوه در این شهرستان
            تولید می شوند شامل انگور، سیب، بادام و گردو هستند. تولید کشمش و شیره
            انگور به صورت خانگی در این شهرستان رواج دارد و در بعضی مواقع در بسته
            بندی های معمولی به شهرستان های دیگر نیز ارسال می شود. با توجه به
            توضیحات بیان شده احداث باغات انگور در این شهرستان مزیت دارد.
          </p>
          <p>
            طبق لیست مزیت سنجی تولید سایر میوه های باغی نظیر گیلاس، انجیر، هلو،
            توت و زردآلو در شهرستان انجام می شود. این تولیدات بیشتر برای مصارف
            شخصی بوده و با توجه به کم آبی که در شهرستان حاکم است قابلیت توسعه
            بیشتر را ندارند.{" "}
          </p>
          <p>
            محصولات جالیزی تولید شده در این شهرستان شامل طالبی، هندوانه و خربزه
            هستند. تولید این محصولات به دلیل مصرف زیاد آب کاهش یافته است؛ به
            طوری که تولید آنها به کمتر از پنج درصد در سال می رسد.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به عنوان یکی از حوزه های بخش کشاورزی در شهرستان خمین انجام
            می شود. با توجه به اینکه حوزه دامداری با یکی از مهم‌ترین نیازهای
            انسان، یعنی نیاز به منابع غذایی و همچنین منابع پروتئینی مرتبط می
            باشد، بنابراین همواره مورد توجه قرار گرفته است. فعالیت در این حوزه
            شغلی و افزایش بهره‌وری در آن، ضمن ایجاد اشتغال‌زایی در شهرستان، می
            تواند عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب شود.
            دامداری در این شهرستان به هر دو صورت سنتی و صنعتی انجام می شود.
            دامداری های سبک سنتی شامل پرورش بز سانن، گوسفند رومانف و بزهای گوشتی
            بوده و دامداری های صنعتی به صورت مجتمع های دامداری برای پرورش دام
            های سنگین بومی و اصلاح نژاد شده از نژاد هلشتاین هستند. طبق بررسی های
            انجام شده پرورش دام های سبک برای شهرستان مزیت بیشتری نسبت به دام
            سنگین دارد.
          </p>
          <p>
            بز سانن یک نژاد شیری پرتولید بوده که نسبت به بزهای بومی، شیر بسیار
            زیادی تولید می کند و می‌تواند بخشی از نیاز شهرستان به شیر و پروتئین
            حیوانی را تأمین نماید. نرخ تبدیل مواد خوراکی به شیر در بزهای سانن
            بالاتر بوده که این امر موجب افزایش بازدهی بز سانن از خوراک مصرف شده
            توسط آن می‌شود. کسب و کار پرورش بز سانن موجب اشتغال‌زایی و رغبت
            بیشتر جوانان به امر دامداری می‌شود. هر کیلوگرم شیر بز با قیمت بیشتری
            نسبت به شیر گاو فروخته می‌شود و طرفداران خاص خود را دارد. با توجه به
            اینکه پرورش این بز در شهرستان خمین انجام شده است و بازدهی خوبی نیز
            داشته است؛ بنابراین توسعه آن می تواند جزو مشاغل پیشنهادی در این حوزه
            محسوب شود.
          </p>
          <p>
            گوسفند رومانف جزو به صرفه ترین و بهترین گوسفندان گله گوشتی _زایشی
            است. گوسفند رومانف، یک نوع گوسفند روسی است که اصل ‌نژاد آن متعلق به
            دره ولگا، در شمال غرب مسکو است. رومانف یک ‌نژاد خالص بوده و از تلاقی
            سایر نژاد‌ها به ‌وجود نیامده است. باروری بسیار خوب و بالاترین میزان
            چندقلوزایی، فصل تولیدمثل بسیار طولانی، امکان تولیدمثل در تمام طول
            سال، سازگاری و عادت پذیری نسبت به آب و هوای سرد و خوراک محلی برخی از
            ویژگیهای خوب این نژاد هستند. پرورش این نژاد در شهرستان مزیت دارد.
          </p>
          <p>
            امروزه می‌توان برای رونق دامداری از پرورش گاو هلشتاین نیز استفاده
            کرد. زیرا این گاو جزو سنگین وزن ترین گاوهای شیری در جهان است و پرورش
            آن توجیه اقتصادی دارد. این نژاد که از نظر تولید شیر بهترین نژاد در
            میان گاوهای شیری است، حدوداً ۷۲۴۰ لیتر شیر تولید می کند.
          </p>
          <p>
            دامداری با هدف تولید گوشت و شیر در سطح این شهرستان انجام می شود و
            گوشت تولیدی تنها نیاز مردم شهرستان را تأمین می کند. اما تولید شیر به
            خصوص توسط دام های سبک زیاد انجام می شود.
          </p>
          <p>
            با توجه به اقلیم و وضعیت زمین های شهرستان ایجاد مجتمع های دامداری
            برای پرورش گوسفند های داشتی قابلیت دارد.{" "}
          </p>
          <p>
            در سالیان گذشته بسیاری از روستاییان علاوه بر دامداری و کشاورزی به
            پرورش زنبورعسل نیز اشتغال داشتند. پرورش زنبورعسل اگر همراه با رعایت
            اصول علمی صورت پذیرد، می تواند پیشه‌ای سودآور باشد. عسل از خواص
            درمانی بی شماری برخوردار می باشد و همواره مورد توجه مردم و اطبا قرار
            گرفته است. در این شهرستان نیز زنبورداری انجام می شود؛ ولی مشکل اصلی
            در این خصوص این است که اقلیم آب و هوایی این شهرستان بسیار گرم و خشک
            بوده و برای زنبور داری مناسب نیست؛ بنابراین اگر قرار به انجام این
            فعالیت باشد، باید به صورت کوچرو و در مناطق دیگر انجام بگیرد.{" "}
          </p>
          <p>
            پرورش اسب و شتر نیز طبق لیست مزیت سنجی برای شهرستان قابلیت دارد. در
            واقع این گونه ها برای استفاده در بارکشی، مسابقه های مختلف و همچنین
            گردشگری کاربرد دارند.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            در شهرستان خمین پرورش طیور رونق دارد، که پرورش مرغ های گوشتی از تخم
            گذار بیشتر است. این شهرستان یکی از تأمین کننده های گوشت سفید در کشور
            بود؛ اما به تازگی مشکلات تأمین خوراک طیور و عدم وجود بازار فروش
            تضمینی باعث شده است که بعضی از مرغداری ها تعطیل شوند و مزیت کمتری
            برای ایجاد چنین واحدهایی وجود دارد.{" "}
          </p>
          <p>
            با توجه به اینکه مرغداری های پرورش مرغ مادر در اکثر استان‌ها قابلیت
            ایجاد دارند و همچنین واحدهای تولید مرغ تخم گذار در این شهرستان وجود
            دارد، ایجاد واحدهای تولید جوجه های یک روزه در این شهرستان دارای مزیت
            خواهد بود. لازم به ذکر است که پرورش مرغ گوشتی به میزان زیادی در این
            شهرستان انجام می شود؛ بنابراین بهتر است در زمینه بسته بندی و صادرات
            این محصول فعالیت صورت بگیرد.
          </p>
          <p>
            طبق لیست مزیت سنجی پرورش بلدرچین، کبک، بوقلمون، شترمرغ و همچنین اردک
            و غاز در شهرستان به صورت سنتی انجام می گیرند. پرورش کبک، بوقلمون و
            شترمرغ در واحدهای صنعتی مزیت بیشتری دارند. البته برای ایجاد بازار
            فروش و تأمین نیاز واحدهای صنعتی باید چاره ای اندیشید.{" "}
          </p>
          <p>
            کبک نسبت به سایر طیور به دلیل طعم و کیفیت مناسب، قیمت بیشتری داشته و
            مشتریان خاص خود را دارد و از جهت دیگر به دلیل مقاومت نسبتاً بالای
            این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به سایر پرندگان کمتر
            است. همچنین می‌توان به بازار جوجه و تخم کبک اشاره نمود که قابلیت
            تولید و عرضه بیشتر را دارند و از نظر صادرات در برخی از استان ها در
            وضعیت مناسبی قرار دارند. همچنین با پرورش کبک به‌ صورت صنعتی می‌توان
            بخشی از نیاز شهرستان در حوزه گوشت را تأمین کرد.
          </p>
          <p>
            در طي چند دهه گذشته توجه به بوقلمون و محصولات آن موجب شده است که
            پرورش آن به صورت صنعتي آغاز شود و طي چند سال اخير نيز به مرز قابل
            قبولي برسد. تا جائي که امروزه شاهد افزايش روز افزون مصرف گوشت و ساير
            فرآورده هاي آن در سراسر جهان هستيم. بوقلمون سرعت رشد بالایی دارد؛ به
            طوری‌که در طی ۳ ماه وزن آن به ۱۵ کیلوگرم می رسد و به سرعت رشد می
            کند. بوقلمون تنها حیوانی است که دو نوع گوشت دارد؛ به طوری که سینه
            این پرنده دارای گوشت سفید و ران آن دارای گوشت قرمز است. به طور
            میانگین از هر بوقلمون ۶۵ درصد گوشت به دست می آید. این نکته قابل ذکر
            است که نه تنها گوشت بوقلمون مورد استفاده قرار می گیرد، بلکه از پوست
            پاهای بوقلمون به عنوان چرم خالص در تهیه کیف و کفش نیز استفاده می
            شود.
          </p>
          <p>
            پرورش شترمرغ پرواری به دلیل رشد سریع و بهره مندی از گوشت قرمز كم
            كلسترول و سالم با طبیعتی گرم و دارای آهن، پوست نرم، لطیف و مقاوم
            برای تولید چرم با كیفیت و همچنین روغن سرشار از امگا 3، 6 و 9 تنها
            بخشی از مزایای اقتصادی پرورش این گونه از طیور است. استان مرکزی قطب
            تولید گوشت شترمرغ در ایران است. با توجه به نوپا بودن این صنعت در
            کشور ما، ظرفیت بالایی برای تولید و کسب درآمد اقتصادی و سودآور در این
            زمینه وجود دارد. بدیهی است که با افزایش سطح تولیدات، در زمینه فرآوری
            محصولات حاصل از آن نیز می توان اقداماتی انجام داد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با توجه به تولید محصولات کشاورزی در شهرستان خمین، بررسی ها نشان می
            دهد که سالانه مقداری از این محصولات در مراحل کاشت، داشت و برداشت به
            ضایعات تبدیل می شوند. از سوی دیگر برداشت و یا تولید بسیاری از
            محصولات کشاورزی در یک بازه زمانی مشخصی رخ می دهد؛ اما مصرف آن‌ها در
            طی سال صورت می‌پذیرد. لذا توسعه صنایع تبدیلی و تکمیلی در این
            شهرستان، می تواند زمان استفاده از محصولات را افزایش دهد و از میزان
            ضایعات آن‌ها بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد
            درآمد و جلوگیری از اتلاف و ضایع شدن محصولات خواهد شد.
          </p>
          <p>
            سردخانه برای تولیدات گلخانه ای در این شهرستان وجود دارد و احداث
            واحدهای جدید مستلزم انجام بروکراسی های اداری طولانی و وجود تولیدات
            به میزان انبوه است؛ بنابراین راه اندازی یک یا دو مورد دیگر از این
            واحد با توجه به تولیدات این شهرستان نیاز است.{" "}
          </p>
          <p>
            در این شهرستان بسته بندی حبوبات و زعفران به مقدار زیادی انجام می شود
            که دارای کیفیت بالایی نیز هستند. ظرفیت‌های لازم برای توسعه این
            فعالیت در شهرستان وجود دارد.{" "}
          </p>
          <p>
            با توجه به تولید انبوه علوفه در این شهرستان، تولید خوراک دام و طیور
            نیز مزیت دارد و می توان این تولیدات را به استان های اطراف نیز ارسال
            کرد. شهرستان خمین دارای مراتع با ارزشی است که به دلیل پایین بودن
            هزینه تأمین علوفه از آن‌ها در مقایسه با راه های دیگر تأمین علوفه و
            از طرفی به دلیل افزایش تعداد واحدهای دامداری در معرض آسیب و خطر
            تخریب قرار گرفته‌اند به همین دلیل باید به سمت تولید خوراک دام به روش
            های صنعتی رفت تا فشار روی مراتع شهرستان به حد قابل قبولی کاهش پیدا
            کند. سالانه تقاضا برای محصولات دامی در کشور در حال افزایش است و این
            امر باعث می شود تا آمار تعداد دام سیر صعودی داشته باشد؛ از این رو هر
            سال نسبت به سال گذشته مقدار بیشتری علوفه و خوراک دام مورد نیاز است.
            در نتیجه با اجرای پروژه‌های صنعتی که با استفاده از ضایعات کشاورزی،
            خوراک دام، طیور و آبزیان با ارزش غذایی مناسب تولید شود غذای مورد
            نیاز دام ها تأمین می شود و هم اینکه استفاده از مواد اولیه ارزان‌تر
            در تولید این محصول سبب خواهد شد تا قیمت تمام شده خوراک پایین‌تر بوده
            و با قیمت کمتری به فروش برسد. تولید خوراک دام و طیور می تواند زمینه
            اشتغال خوبی را به طور مستقیم و غیر مستقیم برای افراد ایجاد کند.
          </p>
          <p>
            طبق لیست مزیت سنجی بسته بندی سبزیجات، کشمش و درجه بندی سایر میوه های
            باغی نیز در شهرستان انجام می شود. با توجه به در نظر گرفتن شرایط
            بازار فروش و میزان مواد اولیه موجود می توان این تولیدات را گسترش
            داد.
          </p>
          <p>
            بسته‌بندی عسل نیز از جمله مشاغلی است که در این شهرستان انجام می شود؛
            به طوری که عسل از شهرستان های دیگر وارد این شهرستان شده و بسته بندی
            آن با کیفیت بالایی انجام می شود.{" "}
          </p>
          <p>
            طبق لیست مزیت سنجی برای ایجاد کارگاه بسته بندی گوشت قرمز و صادرات
            این محصول نیز مزیت وجود دارد. گوشت سالم و بهداشتی رنگ، بو و شکل
            فیزیکی طبیعی داشته و عاری از هر گونه ضایعات بوده و کاملاً تمیز و
            بدون آثار خون مردگی است. بسته بندی نیز باید طوری باشد که گوشت را در
            مقابل نفوذ طعم، بو، رنگ و سایر عوامل خارجی محافظت کرده و از خشک شدن
            و تبخیر سطحی آن جلوگیری کند. همچنین بتواند خواص حسی و ظاهری و سایر
            ویژگی‌های گوشت را حفظ کرده و همچنین آن را در برابر آلودگی های
            میکروبی و سایر آلودگی ها نیز نگهداری کند؛ بنابراین بسته بندی گوشت
            قرمز برای شهرستان صرفه اقتصادی خواهد داشت.
          </p>
          <p>
            بسته بندی گوشت مرغ نیز در شهرستان با قابلیت بالایی انجام می شود.
            البته با توجه به اینکه مقدار زیادی گوشت سفید در این شهرستان تولید می
            شود؛ بنابراین پتانسیل لازم برای احداث واحدهای جدید بسته بندی در این
            شهرستان وجود دارد.{" "}
          </p>
          <p>
            بسته بندی گوشت بلدرچین و شترمرغ در صورتی که بازار فروش مناسب آن‌ها
            در این شهرستان فراهم شود، مزیت خواهد داشت. البته گوشت این ماکیان در
            شهرستان مصرف نمی شود و بسته بندی گوشت آنها برای صادرات قابلیت دارد.
            همچنین اگر میزان تولید تخم مرغ و بلدرچین افزایش یابد، می توان بسته
            بندی این موارد را انجام داد، البته باید بازار فروش مناسب برای آن‌ها
            تأمین شود.
          </p>
          <p>
            کشتارگاه برای دام در شهرستان وجود دارد و ایجاد واحدهای دیگر در این
            خصوص مزیت ندارد؛ زیرا این کشتارگاه بزرگ و صنعتی است و از شهرستان های
            اطراف نیز برای کشتار دام ها به خمین مراجعه می کنند.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            فرآوری محصولات کشاورزی و دامی، یکی از مهم‌ترین روش‌ها برای ایجاد
            اشتغال و عاملی مهم در توسعه پایدار امنیت غذایی در شهرستان خمین محسوب
            می شود. ایجاد و توسعه صنایع غذایی در این شهرستان، علاوه بر اشتغال
            زایی و کاهش هدررفت محصولات کشاورزی، باعث ارتقای سطح درآمد مردم این
            منطقه خواهد شد.{" "}
          </p>
          <p>
            کارخانه های تولید رشته آشی و آرد در شهرستان خمین دایر هستند و با
            توجه به اینکه تولید گندم در شهرستان زیاد است ایجاد واحد دیگری برای
            تولید آرد در شهرستان وجود دارد. همچنین احداث کارخانه تولید بیسکویت
            نیز در این شهرستان دارای مزیت است.{" "}
          </p>
          <p>
            تولید نان سنتی به صورت خانگی در شهرستان انجام می شود؛ ولی می توان
            این محصول را به صورت کارگاهی تولید کرد و با بسته بندی های مرغوب برای
            صادرات آن اقدام کرد و به سوددهی رسید.{" "}
          </p>
          <p>
            با توجه به حجم تولید لوبیا چیتی در شهرستان، احداث واحدی برای کنسرو
            لوبیا با توجه به اینکه بازار مصرف مطلوبی در داخل شهرستان و استان و
            سایر استان های کشور دارد، برای شهرستان سودده خواهد بود.{" "}
          </p>
          <p>
            تولید شیره انگور و کشمش به صورت خانگی در شهرستان انجام می شود و
            ایجاد کارگاه هایی جهت تولید این محصولات به دلیل بازار مصرف خوب، مزیت
            دارد.{" "}
          </p>
          <p>
            همچنین چیپس میوه و سایر فرآورده های باغی نظیر تولید کمپوت سیب، با
            توجه به تولید مناسب میوه در خمین مزیت وجود دارد.{" "}
          </p>
          <p>
            میزان تولید گوجه فرنگی در شهرستان به حدی است، که بتوان واحدی برای
            تولیدرب گوجه احداث کرد. صنعت تولید رب گوجه فرنگی است دارای کاربردهای
            فروانی از قبیل چاشنی و بهبود دهنده رنگ و طعم انواع غذا، ماده اولیه
            سس‌ها و کنسروها است.
          </p>
          <p>
            سیب زمینی و پیاز در این شهرستان به مقدار زیادی تولید می شوند. با
            توجه به اینکه برای این محصولات بازار فروش کافی وجود ندارد، می توان
            کارگاه هایی برای تولید چیپس سیب زمینی، نشاسته سیب زمینی و پیاز سرخ
            شده در شهرستان ایجاد کرد تا فرآورده های حاصل از این محصولات به فروش
            برسند؛ زیرا این فرآورده ها بازار فروش خوبی دارند و همچنین این
            شهرستان به استان های پرجمعیت نظیر تهران نزدیک است که می تواند تأثیر
            زیادی در بازار فروش داشته باشد.{" "}
          </p>
          <p>
            در شهرستان خمین تولید لبنیات به صورت سنتی و به مقدار زیادی انجام می
            شود. در واقع ایجاد واحدهای صنعتی برای این تولیدات در شهرستان مزیت
            ندارد؛ زیرا مردم این شهرستان فقط از لبنیات سنتی استفاده می کنند.
            البته در این زمینه لبنیات به صورت سنتی به دلیل وجود بازار مصرف داخل
            شهرستان و استان تولید بیشتری دارد.{" "}
          </p>
          <p>
            در صورتی که پرورش ماهی در این شهرستان توسعه یابد؛ به طوری که بتوان
            علاوه بر تأمین نیاز شهرستان و استان، تولید مازاد در این زمینه داشت،
            ایجاد واحد تولید تن ماهی در شهرستان مزیت خواهد داشت. این تولیدات
            مستلزم تأمین بازار فروش در داخل شهرستان و همچنین برای صادرات به
            کشورهای اطراف است.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در حال حاضر پرورش ماهیان سردآبی و گرم‌آبی در دو الی سه استخر کوچک در
            این شهرستان انجام می شود. ایجاد استخرهای دو یا چند منظوره برای پرورش
            هر دو نوع ماهی قزل آلا و خاویاری، بچه ماهی های سردابی و گرمابی و
            همچنین ماهی های زینتی در شهرستان مزیت دارد.{" "}
          </p>
          <p>
            خاویار نوعی ماهی با گونه ها، مصارف و محصولات متفاوت است. از جمله
            محصولات آن می توان به گوشت و خاویار اشاره کرد. پوست این ماهی در
            صنایع چرم کاربرد دارد که از آن محصولاتی مثل کیف، کفش، لباس شنا و ...
            ساخته می شود. عمده خاویار ایران صادر می شود که در سال های گذشته به
            دلیل برنامه ریزی نامناسب و کم کاری تولید کنندگان کاهش یافته است.
            همچنین کمبود این محصول در بازار جهانی، توسط چین تأمین می شود. بازدهی
            محصول مذکور پس از 3 سال با فروش گوشت ماهیان نر شروع شده که سود
            سرشاری را نصیب تولید کننده می کند. پرورش این ماهی با حداقل یک نفر
            قابل انجام است که با توجه به توسعه تولید و همچنین بزرگ شدن فضا،
            تعداد افراد مورد نیاز افزایش می یابد. بنابراین ایجاد این کسب و کار
            ارزش افزوده زیادی دارد که باعث افزایش انگیزه سرمایه گذار می‌شود.
          </p>
          <p>
            ماهی قزل آلا یکی از منابع خوب آهن است. آهن در خونسازی و همچنین در
            حفظ مقاومت بدن در برابر میکروبها نقش مهمی به عهده دارد. علاوه بر آن،
            آهن موجود در ماهی قزل آلا، جذب آهن منابع گیاهی را هم افزایش می دهد.
            بنابراین نقش مهمی در پیشگیری از کم خونی ناشی از فقر آهن به عهده
            دارد. نتایج مطالعات نشان می دهند که امگا ۳ ماهی قزل آلا می تواند
            فشار خون و ضربان قلب را در بیماران صرع تنظیم کرده و از تعداد تشنج
            های آن به طور قابل توجهی بکاهد؛ بنابراین این نوع ماهی طرفداران زیادی
            در بین مردم دارد؛ لذا راه اندازی پرورش آن، علاوه بر ایجاد اشتغال
            پایدار، سوددهی خوبی را به همراه خواهد داشت.
          </p>
          <p>
            پرورش ماهیان زینتی از جمله کسب و كارهاي زود بازده است. شاید سال‌های
            قبل نگهداری ماهیان زینتی، موضوع چندان شایعی نبود و تنها عده‌ معدودی
            در خانه‌های خود، آكواريوم و ماهی زینتی نگهداری می‌کردند؛ اما در
            سال‌های اخیر، با توجه به رواج آپارتمان‌نشینی و دور افتادن انسان از
            طبیعت، شرایط به‌گونه‌ای رقم خورده است که بازار ماهی‌های زینتی رونق
            گرفته و زمینه‌ساز ایجاد مشاغل مختلف شده است. به‌طوری‌که امروزه شاهد
            آن هستیم که در بسیاری از شهرها، چندین مغازه به خرید و فروش این
            آبزیان مشغول هستند. از مزایای پرورش این نوع ماهیان این است که میزان
            سودی که به دست می‌آید، نسبت به سرمایه‌ای که در ابتدا صرف می‌شود،
            زیاد است. همچنین پرورش این نوع ماهی ها نیاز به آب کم‌تری دارد و از
            آب‌های شهری، می‌توان برای پرورش آنها استفاده کرد.
          </p>
          <p>
            استخرهای دو یا چند منظوره برای پرورش ماهی قزل آلا استفاده می شوند و
            علاوه بر این که آب آنها در پرورش ماهی مصرف می شود، بلکه برای آبیاری
            زمین های کشاورزی نیز استفاده می شوند.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            قالی و قالیچه صنایع دستی اصلی شهرستان خمین هستند و می توان این
            تولیدات را گسترش داد. البته مسئله اصلی این است که در گذشته این
            تولیدات صادر می شدند؛ ولی در حال حاضر صادرات ندارند و تمایل مردم
            شهرستان برای بافت قالی و قالیچه کاهش یافته است. طبق لیست مزیت سنجی
            علاوه بر این تولیدات، تولید گلیم، نمد، لعابکاری، میناکاری و سفالگری
            در شهرستان به مقدار کم انجام می شود و از بین موارد ذکر شده میناکاری،
            لعاب کاری و سفال گری قابلیت توسعه دارند.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            در شهرستان خمین سه ناحیه صنعتی وجود دارد و علی رغم وجود زمین های
            مناسب برای ایجاد کارخانه های صنعتی و فراهم بودن بستر مناسب برای این
            فعالیت ها، کارخانه های فعال در این سه شهرک کمتر از سطح توقع است.{" "}
          </p>
          <p>
            کارخانه تولید ظروف یکبار مصرف در این شهرستان در حال احداث است. در
            واقع به دلیل اینکه در گذشته به گفته کارشناسان یک کارخانه تولید ظروف
            پلاستیکی در شهرستان دایر بود، می توان همان واحد را نیز احیا و یا
            واحدهای جدید برای تولید ظروف یکبار مصرف احداث کرد. همچنین واحد تولید
            کارتن و سبد با توجه به تولیدات گلخانه ای در شهرستان مزیت تولید
            دارند.{" "}
          </p>
          <p>
            در زمینه صنایع غذایی کارخانه های فعال نظیر تولید آرد، رشته آش، بسته
            بندی حبوبات، عسل و مرغ هستند که در بین این واحدها، بسته بندی حبوبات
            و عسل نسبت به سایرین از بازدهی خوبی برخوردار بوده‌اند.
          </p>
          <p>
            در زمینه فعالیت های صنعتی تولید روغن ماشین، پرچم، کارخانه ذوب پریس
            که از ضایعات آهن تولید شمش می کند، سنگبری، رینگ آلومینیومی خودرو،
            ظروف چینی استخوانی، الیاف پلی استر، پارس لیزر، فیلتر سازی و تولید
            ادوات کشاورزی در شهرستان فعال هستند.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            با توجه به اینکه شهرستان خمین دارای عقبه تاریخی و جاذبه های طبیعی که
            شامل حمام لکان، صخره تیمره، روستای برجک و کلیسای لیلیان و ... است،
            ایجاد واحدهای خدمات گردشگری نظیر مجتمع های رفاهی، اقامتگاه های
            بومگردی، شهربازی و رستوران های سنتی مزیت دارد. توسعه گردشگری از دو
            جهت در شهرستان حائز اهمیت است، نخست اینکه موجبات آشنایی گردشگران با
            فرهنگ، سنن و آداب ورسوم و ... شهرستان خواهد شد و دوم اینکه از نظر
            اقتصادی به عنوان یک منبع تأمین درآمد برای شهرستان محسوب خواهد شد.{" "}
          </p>
          <p>
            فعالیت های خدماتی در شهرستان به دو دسته تقسیم می شوند؛ به طوری که یک
            بخش برای کارهای صنفی نظیر خدمات ساختمانی، آرایشگری و خیاطی و بخش
            دیگر فعالیت های مرتبط با گردشگری و بومگردی است.
          </p>
          <p>
            برای فعالیت های خدماتی نظیر انجام نساجی های سنتی، پوشاک، تعمیر کار
            لوازم منزل و مرمت فرش طبق لیست مزیت سنجی در شهرستان قابلیت وجود
            دارد.  
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
