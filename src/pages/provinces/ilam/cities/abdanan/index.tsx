import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-06"].cities["IR-0601"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        gardening: "باغداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        agriculture: "زراعت",
        industry: "صنعت",
        services: "خدمات",
        fisheries: "شیلات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            آبدانان یکی از شهرستانهای استان ایلام بوده که ازلحاظ جغرافیایی در
            جنوب شرقی استان ایلام واقع است. طبق سرشماری انجام شده در سال 1395،
            از 850158 نفر جمعیت استان ایلام، حدود 47 هزار نفر در شهرستان آبدانان
            ساکن هستند.
          </p>
          <p>
            شهرستان آبدانان از شرق و شمال شرق با شهرستان‌های دره‌شهر و بدره، از
            غرب و شمال غربی با شهرستان دهلران و از جنوب شرقی با شهرستان اندیمشک
            استان خوزستان همسایه است. شکل زیر موقعیت شهرستان آبدانان را نشان
            می‌دهد.
          </p>
          <p>
            آبدانان داراي دو اقليم آب‌وهوایی متفاوت است، يك اقليم دشتی و گرمسيري
            مانند دشت مورموري و يك اقليم كوهستاني با آب‌وهواي معتدل. خود این
            تفاوت اقلیم یک مزیت برای ایجاد کسب‌وکارهای مختلف در این شهرستان است.
          </p>
          <p>
            تاثیر کمبود آب آبدانان را می‌توان در زمینه های مختلفی مانند عدم رواج
            باغداری یا گلخانه‌داری و حتی رواج نداشتن پرورش ماهی به وضوح دید؛
            هرچند که کیفیت این آب‌ها برای کشت محصولاتی مانند پسته و زیتون، یک
            مزیت محسوب می‌شود.
          </p>
          <p>
            ریسک پذیری کم مردم این شهرستان برای شروع کارهایی که در آن‌ها مانند
            کشاورزی یا دامداری تجربه کافی را ندارند، پایین است و باعث می‌شود
            روحیه کار و تولید افراد آبدانان، اجرایی نشود. این مسئله باعث شده که
            بسیاری از پتانسیل‌های شهرستان به نحواحسن اجرایی نشود. مردم برای شروع
            و انجام کارهای جدید تمایل زیادی ندارند و ترجیح می دهند ابتدا کاری
            انجام شود، نتیجه آن را ببینید و سپس از آن کار تقلید کرده و خودشان
            وارد آن حیطه شوند. تمایل مردم مخصوصا زنان به کارهای تولیدی را
            می‌توان در انجام میزان قابل توجهی از مشاغل خانگی یافت.
          </p>
          <p>
            بن بست بودن و مناسب نبودن وضعیت راه‌های ارتباطی با دیگر شهرستان‌ها و
            مرکز کشور که باعث دوربودن از بازار مصرف شهرهای دیگر می‌شود، از
            مهمترین عوامل عدم ایجاد کسب و کار در آبدانان است. باتوجه به جمعیت،
            برای تامین صرفه اقتصادی وارد شدن به بیشتر صنایع، نیاز به بازارمصرفی
            بسیار بزرگتر از خود شهرستان است که اصلی ترین بستر برای این موضوع،
            احداث راه‌های مواصلاتی مناسب است. البته گویا طرحی برای ایجاد تونل و
            ارتباط با شهرستان‌های مجاور وجود دارد ولی هنوز خبری از انجام این طرح
            نیست.
          </p>
          <p>
            بیشتر واحدهای صنعتی تعطیل شده در آبدانان به علت نداشتن سرمایه و
            نقدینگی کافی، عدم توانایی در بازاریابی و عدم استقبال مردم از
            محصولاتشان شکست خورند. این مساله نشان‌دهنده آن است که پتانسیل‌ها
            برای راه‌اندازی کسب‌وکارهای مختلف، تاحد قابل قبولی فراهم است و مشکل
            اصلی در عدم فرهنگ‌سازی برای مردم و حمایت پایدار از تولیدکننده است.
          </p>
          <p>
            یکی از نکات مهم درباره این شهرستان مهاجرت زیاد و بیکاری اغلب جوانان
            است که امید است با پیشنهاداتی که در ذیل داده شده، گامی جدی در زمینه
            ایجاد مشاغل مختلف و البته پرسود برداشته شود. درپایان لازم به ذکر است
            باتوجه به شرایط آبدانان، لزوم ورود اجرایی‌تر نهادهای ذیربط در ایجاد
            بسترهای مناسب برای ایجاد مشاغل خرد و نوپا، شدیدا احساس می شود.
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
            بنظر می رسد اولویت اول مشاغل در آبدانان، دامداری است. دامداری
            کسب‌وکار اصلی مردم این شهرستان است که هم قابلیت توسعه دارد و هم از
            گذشته رواج دارد. میزان تولیدات دامی زیاد است به عنوان مثال تا قبل از
            صدور قانون ممنوعیت صادرات دام زنده به خارج از کشور، دام زنده تولیدی،
            به کشورهایی مانند عراق و کویت صادر می‌شد. شرایط آب و هوایی و وجود
            مراتع زیاد، باعث شده است بتوان برای این رسته نسبت به سایر رسته‌های
            مشاغل، مزیت بیشتری قائل بود. عمده دامداری به صورت سنتی انجام شده و
            پرورش دام‌های سبک نسبت به دیگر دام‌ها بیشتر انجام می‌شود درنتیجه
            گوسفند و بز، دارای مزیت اول برای پرورش در شهرستان هستند.{" "}
          </p>
          <p>
            زنبورداری نیز به میزان گسترده انجام می شود. عسل تولیدی هم کیفیت
            بسیار خوبی دارد و می تواند به عنوان یک محصول باکیفیت در بازار
            عرضه‌شود.
          </p>
          <p>
            گاو نیز در اولویت دوم مزیت قرار خواهدگرفت. هردو نوع بومی و اصلاح
            نژاد شده گاو پرورش داده می شود. ذکر این نکته ضروری است که باتوجه به
            اقلیم آب‌وهوایی شهرستان، پرورش دام‌های اصلاح نژادشده جدید، نیازمند
            آموزش، مهیاکردن تجهیزات خاص و بررسی دقیق تر شرایط است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            تعداد زیادی مرغداری صنعتی و نیمه صنعتی در شهرستان وجود دارد که
            تولیدات زیاد و قابل توجهی دارند. مرغ با آب‌وهوای آبدانان سازگار بوده
            و مردم نیز دارای تجربه کافی در این زمینه هستند؛ زیرا به صورت سنتی و
            از دیرباز در منطقه رواج داشته است. بوقلمون نیز با شرایط شهرستان
            سازگار بوده و درحال حاضر پرورش آن انجام می شود لذا باتوجه به سازگاری
            این پرنده با آب‌وهوا، پیشنهاد پرورش آن داده می‌شود. این دو پرنده در
            سطح اول مزیت برای پرورش هستند و توسعه پرورش آنها باتوجه به نیاز مردم
            به این تولیدات پیشنهاد داده می شود.{" "}
          </p>
          <p>
            در سطح دوم اولویت نیز می توان به کبک و بلدرچین اشاره کرد؛ البته در
            رابطه با پرورش بلدرچین باید بازار فروش را درنظر گرفت. در پایان باید
            اشاره شود باتوجه به نبود شرایط لازم برای پرورش شترمرغ، به نظر می رسد
            تنها درصورت ایجاد شرایط لازم بتوان این پرنده را در آبدانان پرورش
            داد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            مردم و مخصوصا زنان آبدانان در زمینه تولیدات صنایع دستی مهارت خوب و
            بالایی دارند؛ درواقع از گذشته به این کار مشغول بودند. درحال حاضر نیز
            تولید این محصولات عمدتا به صورت خانگی انجام می‌شود.{" "}
          </p>
          <p>
            مشکلی که در رسته صنایع‌دستی باعث کاهش تولیدات شده و بر سر توسعه این
            کار موانع جدی ایجاد کرده، نبود بازار فروش است. درحال حاضر بیشتر
            تولیدات برای فروش به تهران و قم فرستاده شده و یا نهایتا در
            نمایشگاه‌ها به فروش می‌رسند.{" "}
          </p>
          <p>
            ذکر این نکته ضروری است که علی رغم وجود تعداد زیاد دام، بیشتر
            مواداولیه این حوزه از خارج از شهرستان وارد می شود البته نخ ریسی به
            صورت سنتی و محدود انجام می‌شود؛ ولی برای ظرفیت شهرستان کافی نیست.
            اگر بازار فروش تولیدات صنایع دستی تامین شود و تولید این موارد توسعه
            پیدا کند، فرآوری پوست دام ها نیز برای تولید مواداولیه صنایع دستی رشد
            خوبی را تجربه خواهد کرد.
          </p>
          <p>
            گلیم بیشترین میزان تولید در آبدانان را به خود اختصاص داده است و در
            سطح اول مزیت قرار گرفته است. در ادامه باید به فرش و قالی اشاره کرد.
            در اولویت‌های بعد حصیر، چیت و نمد قرارگرفته و در اولویت‌های آخر
            جاجیم و گبه‌بافی انجام می‌شود.{" "}
          </p>
          <p>
            مجداد تاکید می گردد باتوجه به مهارت بالایی که وجود دارد، درصورت
            تامین بازار فروش برای این محصولات، می توان این صنعت را احیا کرد و
            اشتغال قابل توجهی برای جوانان علاقمند به این حرفه‌ها و انگیزه خوبی
            برای بافندگان قدیمی‌تر ایجاد کرد.
          </p>
          <p>
            لازم به ذکر است منبت و معرق کاری به صورت کم و محدود انجام می شود که
            البته باتوجه به نبود چوب در شهرستان و حتی استان، به نظر نمی رسد
            دارای مزیت زیادی برای گسترش باشد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            به علت شرایط آب‌وهوایی، صرفا در مناطق خاصی از شهرستان می توان
            باغداری را توسعه داد و به صورت کلی رواج زیادی ندارد البته باغ‌های
            انجیر و انگور وجود دارد که تولیدات محدودی دارند.
          </p>
          <p>
            زیتون در مزیت اول شهرستان قرار می گیرد که علاوه بر اینکه درحال حاضر
            کشت می‌شود، می توان در زمینه توسعه باغات آن کار کرد. علت مزیت داشتن
            این محصول این است که به آب زیادی نیاز نداشته و با آب و هوای آبدانان
            سنخیت دارد.{" "}
          </p>
          <p>
            قارچ نیز که به صورت محدود درحال پرورش است، در همین سطح از مزیت قرار
            می‌گیرد. به علت شرایط شهرستان و جواب دادن این محصول، پتانسیل خوبی
            برای گسترش تولید قارچ (مخصوصا قارچ دکمه‌ای) وجود دارد. در ادامه باید
            گفت که گیاهان دارویی خودروی زیادی وجود دارند که علاوه بر آنها، کشت
            این گیاهان نیز پیشنهاد می شود.
          </p>
          <p>
            کشت صیفی جاتی مانند گوجه، خیار و زعفران در اولویت دوم قرار خواهند
            گرفت و پیشنهاد می‌شوند. پسته به میزان محدود کشت می‌شود. این محصول به
            آب زیادی نیاز ندارند و با خاک آبدانان همخوانی دارد؛ درنتیجه می تواند
            گسترش پیدا کند.{" "}
          </p>
          <p>
            موز، مرکبات، لیموشیرین، لیموترش و توت فرنگی نیز در اولویت‌های آخر
            قرار داشته و دارای مزیت خیلی زیادی برای توسعه نیستند هرچند که با
            ایجاد شرایط فروش مناسب و تجهیزات کافی برای پرورش، می توان بر روی این
            محصولات کار کرد.
          </p>
          <p>
            در آخر لازم است اشاره شود باتوجه به کمبود آب و دوری از بازار مصرف،
            به نظر نمی‌رسد که بتوان مزیت زیادی برای ایجاد گلخانه قائل بود؛ ولی
            درصورت حل شدن مشکل آب، شاید بتوان برای ایجاد گلخانه در زمینه کشت
            صیفی‌جات و حتی گل‌های تزئینی، مزیتی را قائل بود.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            باتوجه به میزان قابل توجه تولیدات دامی، فرآوری پوست دام مانند تولید
            چرم و نخ، تولید کودحیوانی و بسته‌بندی فرآوری‌های لبنیات که به صورت
            سنتی در سطح شهر تولید می‌شود دارای مزیت و سود خوبی هستند. در راستای
            مطلب ذکر شده در قسمت صنایع دستی و باتوجه به ظرفیت بالای دامداری و
            تولید صنایع دستی، می توان مواداولیه صنایع دستی را در داخل آبدانان
            تولید کرد؛ البته درحال حاضر به میزان خیلی کم و به صورت سنتی تولید می
            شوند. مجداد تاکید می شود تولید این موارد، می تواند باعث کاهش هزینه
            تولید و افزایش انگیزه بافنده‌ها شود.{" "}
          </p>
          <p>
            باتوجه به زنبورداری گسترده‌ای که در سطح شهرستان انجام می‌شود، می
            توان بسته بندی عسل را نیز پیشنهاد داد.
          </p>
          <p>
            باتوجه به میزان گندم و جوی کافی در شهرستان، فراهم‌بودن شرایط برای
            کشت کلزا، پتانسیل بالای دامداری و واردات میزان عمده ای از خوراک دام
            از خارج از شهرستان، می توان در زمینه تولید خوراک دام نیز توسعه ایجاد
            کرد تا شهرستان به مرز خودکفایی برسد.{" "}
          </p>
          <p>
            ایستگاه جمع آوری شیر یکی از نیازهای اصلی در آبدانان به شمار می‌آید.
            برای اقدام در این زمینه باید به این نکته توجه داشت که این مورد با
            ایجاد یک یا دو واحد اشباع خواهد شد.
          </p>
          <p>
            باتوجه به تعداد بالای مرغداری‌ها، می توان در زمینه ایجاد کشتارگاه
            مرغ و بسته بندی گوشت آن اقدام کرد؛ اما باید همزمان به این نکته توجه
            داشت که این مورد با ایجاد یک یا دو واحد به اشباع خواهد رسید و ظرفیت
            برای ایجاد واحدهای جدیدتر وجود نخواهد داشت؛ مگراینکه طیوری از شهرهای
            دیگر برای کشتار به این شهرستان آورده شوند. لازم به ذکر است درصورت
            گسترش پرورش طیور دیگر به غیراز مرغ، می توان کشتارگاه مخصوص به هرکدام
            از آنها را ایجاد کرد.
          </p>
          <p>
            درضمن باتوجه به اینکه میزان تولیدات باغی درحد خیلی زیادی نیست،
            احتیاجی به ایجاد سردخانه محصولات کشاورزی وجود ندارد.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            به علت وجود تعداد قابل توجهی از دام و همچنین وجود پتانسیل برای
            افزایش پرورش شان، فرآوری شیر دام‌ها و تولید لبنیات و تولید سوسیس و
            کالباس دارای سود خوبی خواهند بود. دررابطه با سوسیس و کالباس باید به
            این نکته توجه کرد که تولید آن به صورت خانگی و فروش آن درسطح شهرستان
            مزیت بیشتری دارد؛ زیرا اگر به صورت خیلی گسترده تولید شود، ممکن است
            بازار فروش موردانتظار برایش تامین نشود.{" "}
          </p>
          <p>
            نکته قابل ذکر این است که درصورت ایجاد کارگاه یا کارخانه‌هایی در خصوص
            فرآوری محصولات دامی، نه تنها نیاز شهرستان از واردات چنین محصولاتی
            برطرف می شود بلکه می توان به صادرات به خارج از کشور مانند عراق و
            تامین نیاز کل کشور فکر کرد. درضمن این محصولات درحال حاضر به صورت
            سنتی، بدون برند و محدود در سطح شهر تولید می شوند. در پایان تولید
            سایر فرآوری های دامی مانند تولید ژلاتین و شیرخشک نیز پیشنهاد داده
            می‌شود.{" "}
          </p>
          <p>
            باتوجه به میزان کشت گندم در آبدانان، تولید محصولاتی مانند تولید آرد،
            ماکارونی، شیرینی‌پزی و نان و سایر فرآورده‌های گندم مانند پفک گندم،
            تولید رشته آشی و پلویی، برشته کردن، تولید نان بستنی، تولید نشاسته،
            کلوچه و بیسکویت پیشنهاد می‌شود. درواقع درحال حاضر باتوجه به کشت قابل
            توجه این محصول، بنظر می‌رسد می توان مزیت بیشتری برای فرآوی قائل بود
            تا گسترش کشت آن؛ هرچند که گندم توسط دولت و به صورت تضمینی خریداری
            می‌شود.
          </p>
          <p>
            علاوه بر تولید روغن زیتون که عمدتا به صورت خانگی انجام می‌شود،
            افزایش روغن گیری و فرآوی آن دارای سود خوبی خواهد بود البته برای
            اینکه این کار به عنوان شغلی پایدار تلقی شود، باید بر روی توسعه کشت
            سرمایه‌گذاری انجام شود.{" "}
          </p>
          <p>
            وجود پتانسیل برای افزایش تولید انواع قارچ باعث می‌شود تا بتوان از
            کار در زمینه تولید انواع فرآوری های آن مانند تولید ترشی سود خوبی به
            دست آورد البته باتوجه به بافت سنتی شهر، باید بر روی بازار فروش آن در
            خارج از شهرستان فکر کرد.
          </p>
          <p>
            تولید خیارشور، عرق‌گیری از گیاهان دارویی و رب گوجه فرنگی نیز در
            اولویت های بعدی قرار خواهند گرفت.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            کشاورزی در این شهرستان مزیت بالایی ندارد؛ زیرا میزان آب کم است البته
            در مناطق جنوبی که به منطقه دشت عباس شهرستان دهلران نزدیک و به علت
            نزدیکی به سد کرخه دارای مقدار قابل توجهی آب است، کشاورزی انجام
            می‌شود.
          </p>
          <p>
            مانند اکثر شهرستان‌های استان ایلام، در آبدانان نیز کشت گندم در
            اولویت اول قرار می گیرد. گندم محصولی است که در بسیاری از مواد خوراکی
            به کار برده می‌شود و همیشه بازار فروش خوبی دارد؛ درنتیجه می توان
            توسعه کشت آن را پیشنهاد داد.{" "}
          </p>
          <p>
            کشت جو و حبوباتی مانند عدس نیز دارای اولویت دوم مزیت است. افزایش
            تولید این موارد پیشنهاد می‌شود؛ زیرا می‌تواند نیاز شهرستان را برطرف
            کند.{" "}
          </p>
          <p>
            به‌تازگی هم پرورش گل نرگس البته به صورت محدود درحال اجراست که ظاهرا
            جواب داده است و می شود آن را توسعه داد. گیاهان دارویی نیز به میزان
            زیاد و به صورت خودرو وجود دارند و کشت آنها البته باتوجه به وجود
            بازار مصرف خوبی که در این روزها پیدا کرده است، پیشنهاد می شود.
          </p>
          <p>
            در اولویت های آخر نیز یونجه، برنج و کلزا که البته درحال حاضر به صورت
            محدود کشت می شوند قرار می گیرند. باید تاکید کرد که با ایجاد شرایط
            مناسب و تجهیزات کافی برای پرورش، می‌توان برروی این محصولات نیز کار
            کرد. نکته شایان ذکر در رابطه با کلزا و دانه های روغنی این است که
            واردات بی‌رویه آنها موجب شده‌است تا بتوان این محصولات را در هر منطقه
            از کشور که کشش دارد به صورت گسترده کشت کرد؛ درنتیجه می‌توان در زمینه
            تولید این محصول نیز فعالیت کرد و سود خوبی را بدست آورد.{" "}
          </p>
          <p>
            بطورکلی می توان گفت کشت محصولاتی که به آب زیادی احتیاج ندارند، در
            اولویت قرار گرفته و قابلیت توسعه دارند.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            باتوجه به روحیه مردم شهرستان، برای ایجاد کارخانه‌هایی فعال در زمینه
            فرآوری محصولات کشاورزی، باید در زمینه تامین بازار فروش محصولات در
            سایر شهرستان‌ها نیز اقداماتی انجام شود. نکته دیگر این است که برای
            ایجاد کارخانه در هر زمینه ای در آبدانان، باید به شرایط آب توجه داشت.{" "}
          </p>
          <p>
            درحال حاضر یک کارخانه ایزوگام و چند واحد صنعتی دیگر در آبدانان فعال
            هستند. همچنین باتوجه به حجم تولیدات کشاورزی، به نظر می‌رسد می‌توان
            در زمینه ایجاد کارگاهی فعال در زمینه تولید سبد، گونی و کارتون و
            ادوات کشاورزی اقدام‌کرد.
          </p>
          <p>
            از جمله مهمترین منابع طبیعی موجود در این شهرستان منابع نفت و گاز است
            که متاسفانه بهره برداری از این موارد نمی‌شود؛ باتوجه به وجود منابع
            نفت مشترک با عراق و قطر و لزوم و اضطرار برداشت از آن میادین، به نظر
            می‌رسد بهره برداری از چاه‌های آبدانان می‌تواند اشتغال خوبی در سطح
            شهرستان ایجاد کند و از نرخ بیکاری بکاهد. وجود معادنی مانند گچ و عدم
            بهره‌برداری از آن‌ها، نکته‌ای است که می توان روی آن تامل کرد.
            سرمایه‌گذاری در این حیطه نیز می‌تواند اشتغال خوبی در شهرستان
            ایجادکند البته باید توجه کرد به علت سرمایه زیادی که باید در این
            زمینه‌ها هزینه شود، لزوم ورود دولت و یا نهادهای دارای نقدینگی کافی،
            باید درنظر گرفته‌شود.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            اکثر جوانان روستا در زمینه دامداری مشغول هستند؛ ولی آن دسته از
            جوانان شهری که مهاجرت نکرده‌اند، به ناچار در صنوف مختلف و بعضا
            بی‌ربط به رشته تحصیلی‌شان، مشغول به کار هستند.
          </p>
          <p>
            وجود پتانسیل‌های خوب ازلحاظ جاذبه‌های گردشگری مانند قلعه هزاردر،
            دریاچه دوقولو، امامزاده صلاح الدین محمد و... باعث شده است هرساله
            بازدید قابل قبولی از بیشتر این اماکن که به ثبت ملی هم رسیده‌اند،
            انجام شود. البته در رابطه با بازدید از این موارد و مخصوصا جاذبه‌های
            طبیعی باید خاطرنشان کرد که بیشترین بازدید در فصل بهار انجام می شود؛
            درواقع بازدید از این جاذبه ها فصلی است. اگر برای سودده بودن اقامتگاه
            های بومگردی و مراکز تفریحی، در فصولی که گردشگری به شهرستان نمی آید
            فکر شود، می توان مزیت متوسطی برای ایجاد این موارد قائل بود.{" "}
          </p>
          <p>
            در لیست مزیت سنجی به مزیت داشتن مشاغل خدماتی مانند کلیدسازی، تولید
            مصنوعات چوبی و آلومینیومی و خدمات آرایشی و آرایگشری اشاره شده است.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            باتوجه به شرایط اّب‌ها، نمی‌توان مزیت زیادی را برای پرورش ماهی قائل
            بود.
          </p>
          <p>
            در ادامه تحلیل، مشاغل در 10 رسته ذيل سه حوزه كشاورزي، صنعت و خدماتي
            دسته‌بندي شده‌است. در هريک از اين رسته‌ها عناوين شغلي، بر اساس مزيت
            راه‌اندازي، از شماره 1 تا 3 اولويت‌بندي شده‌اند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
