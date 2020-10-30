import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-27"].cities["IR-2713"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        services: "خدمات",
        gardening: "باغداری",
        birds: "طیور",
        food_industry: "صنایع غذایی",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        livestock: "دامداری",
        agriculture: "زراعت",
        industry: "صنعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان عباس‌آباد یکی از شهرستان‌های استان مازندران در شمال ایران
            است که از غرب به شهرستان تنکابن، از شرق به شهرستان چالوس، از شمال به
            دریای خزر و از جنوب به رشته کوه‌های البرز و شهرستان کلاردشت متصل
            است. مرکز این شهرستان شهر عباس‌آباد می‌باشد.
          </p>
          <p>
            بنابر سرشماری مرکز آمار ایران، جمعیت شهرستان عباس‌آباد در سال ۱۳۹۵
            برابر با 52 هزار و 832 نفر بوده‌است . شکل زیر موقعیت شهرستان عباس
            آباد را نشان می دهد.
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
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از فعالیت هایی است که با
            سودآوری بسیاری همراه است و در شهرستان عباس آباد نیز ظرفیت های بسیار
            خوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد.
          </p>
          <p>
            روستای سرتاکرات، روستای ولیکستان، پارک جنگلی خشکه‌داران، ساحل زیبا و
            ... از جمله جاذبه های دیدنی این شهرستان هستند که سالانه
            بازدیدکنندگان زیادی داشته و پتانسیل سرمایه گذاری در زمینه گردشگری و
            جذب توریسم مانند احداث رستوران بومی، اقامتگاه بومگردی، هتل و
            اقامتگاه، کرایه اتومبیل، ایجاد خدمات استقبال از مسافر، اجاره ویلا و
            احداث متجمع تفریحی سرگرمی را دارد.
          </p>
          <p>
            رستوران‌های بومی، مکان‌هایی با فضای سنتی و متناسب با آداب ‌و ‌رسوم
            هر منطقه است که در آن‌ها بیشتر به‌جای استفاده از میز و صندلی‌های
            مدرن از تخت یا سایر وسایل سنتی استفاده و علاوه بر سرو غذاهای محلی،
            ترشیجات خانگی، نوشیدنی‌هایی مانند چای و قهوه نیز داده می‌شود.
            رستوران‌ بومی جزء مهم‌ترین نمادهای فرهنگی محسوب می‌شود و می تواند در
            خانه های قدیمی موجود در هر منطقه اجرا شود. بسیاری از گردشگران و
            توریست های غذایی برای امتحان کردن غذاهای مختلف به سفر می روند و این
            مسئله برای مناطق مختلف قابل استفاده و بهره برداری است؛ بنابراین
            ایجاد رستوران بومی نیز از کسب و کارهای زود بازده است؛ زیرا هم تمایل
            مردم به سمت سرو غذا های محلی بیشتر شده و هم معاملات این کسب و کار به
            صورت نقدی انجام می‌شود.
          </p>
          <p>
            اقامتگاه بوم گردی فرصت مناسبی است تا مسافران ضمن گردشگری در هر منطقه
            و بازدید از جاذبه های توریستی، حس ایرانی زیستن به سبک سنتی را تجربه
            کنند. همچنین طبخ غذاهای محلی در برخی اقامتگاه ها، مصداق دیگری از
            مهمان نوازی ایرانی است. با توجه به اینکه علاقه مردم به سمت بازدید و
            اقامت در این مناطق بیشتر شده‌است، گسترش این اماکن توجیه اقتصادی
            دارد.
          </p>
          <p>
            احداث مجتمع تفریحی- سرگرمی و مجتمع خدماتی رفاهی نیز از دیگر مزیت های
            این حوزه است که پتانسیل بالایی برای سوددهی و سرمایه گذاری دارد.
            مجتمع تفریحی-سرگرمی به تاسیساتی گفته می‌شود که مجموعه ای از واحد های
            گردشگری ساخته شده است و هر کدام به صورت خود پذیرایی کار می‌کنند.
            فروشگاه ها، رستوران ها، اغذیه فروشی ها، تسهیلات ورزشی، فضای بازی و
            تفریحی، اقامتگاه ها، مراکز توریست گردانی و ... از جمله امکاناتی است
            که این مجتمع ها ارائه می‌دهند. همچنین در اکثر این تاسیسات، واحدهای
            ساخته شده‌ی دارای اتاق، مانند هتل، کلبه و ویلا عرضه می‌شود.
          </p>
          <p>
            متاسفانه شهرستان عباس آباد فاقد شهربازی و سینما است؛ بنابراین احداث
            این موارد در صورت استقبال مردم ارزش افزوده زیادی به همراه خواهد داشت
            .
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج در شهرستان عباس آباد است. تولید اشتغال
            توسط باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار
            رونق می‌بخشد. کشاورزی و ازجمله باغبانی در توسعه ملی و افزایش رفاه
            عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع
            درآمد و عدالت اجتماعی موثر است.
          </p>
          <p>
            گلخانه داری از جمله کسب و کار هایی است که در حال حاضر انجام می‌شود و
            با توجه به سازگاری با شرایط شهرستان، قابلیت توسعه و سرمایه گذاری را
            دارد. گلخانه های فعال در این شهرستان بیشتر گل و گیاه زینتی را پرورش
            می‌دهند و تاکنون عملکرد بسیار خوبی داشته اند.{" "}
          </p>
          <p>
            میزان تولید مرکباتی مانند لیموترش و ... در این شهرستان زیاد است و
            باغداران این شهرستان سال‌ها است ازاین طریق درآمد زایی می‌کنند. با
            توجه به مرغوبیت و کیفیت بالای این محصولات و بازار خوبی که برای این
            تولیدات وجود دارد؛ سرمایه گذاری برای احداث این باغات از جمله چشم
            انداز های شهرستان برای دست یابی به اشتغال پایدار است.
          </p>
          <p>
            از دیگر پیشنهادات خوب حوزه باغداری، می‌توان به احداث باغات کیوی
            اشاره کرد که در حال حاضر وجود داشته و محصول با کیفیتی را تولید
            می‌کنند.
          </p>
          <p>
            توسعه باغات زیتون نیز از جمله مزیت هایی است که در صورت سرمایه گذاری،
            ظرفیت های سوددهی را فراهم خواهد کرد.
          </p>
          <p>
            زیتون به موجب مقاومت به کم‌آبی، سازگاری با خاک‌های فقیر و کم بازده و
            تولید محصول ارزشمند، از نظر اقتصادی حائز اهمیت می‌باشد و به محصول
            ثروتمند خاک‌های فقیر مشهور است. زیتون به دلیل استقامت و طول عمر و
            سازش با محیط‌های مختلف به دیگر درختان برتری دارد تا جایی که علاوه بر
            کشت در باغات و اراضی کشاورزی در توسعه فضای سبز شهری نیز از این درخت
            استفاده می‌شود. زیتون علاوه بر خواص درمانی، دارای مزیت‌های اقتصادی
            ارزشمندی از جمله تولید روغن، کنسرو زیتون، کمک به معیشت کشاورزان با
            زیر کشت بردن اراضی کم بازده فقیر و شور، اشتغال‌زایی (جذب
            قابل‌ملاحظه‌ای از جمعیت جویای کار) و جلوگیری از مهاجرت است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز جامعه به
            منابع غذایی، از اهمیت بالایی برخوردار است و سود سرشاری دارد. در
            شهرستان عباس آباد چند مرغداری صنعتی وجود دارد که در زمینه پرورش مرغ
            گوشتی و مرغ تخم گذار فعالیت می‌کنند. پرورش این موارد که با شرایط
            شهرستان سازگار هستند، تاکنون عملکرد خوبی داشته و پتانسیل های سرمایه
            گذاری را دارد.
          </p>
          <p>
            پرورش مرغ تخمگذار علاوه براینکه به تامین منابع غذایی طبیعی و رونق
            تولید کمک می کند نقش به‌سزایی در امر اشتغالزایی، بهبود وضع اقتصادی و
            خودکفایی در تولید محصول ارگانیک و طبیعی ایفا می‌کند. در صورتی که شخص
            بخواهد مشغول به پرورش مرغ تخم‌گذار به صورت محدود شود نیاز به
            تکنولوژی پرهزینه‌ای ندارد و با بهره گیری از امکانات کم و موجود در
            روستا یا محل زندگی خود می تواند شرایط اجرای طرح را فراهم کند. پرورش
            مرغ تخم‌گذار حتی به صورت صنعتی و با تمام تجهیزات مدرن می‌تواند در
            صورت پیدا کردن بازار مناسب، سالیانه حدود 20 تا 30 درصد سودآوری داشته
            باشد که رقم مناسبی است. همچنین پیدا کردن بازار فروش با حاشیه سود
            بالا از امور مهم درمورد این کسب و کار است که با تبلیغات مناسب مخصوصا
            در فضای مجازی امکان پذیر است.
          </p>
          <p>
            گوشت مرغ به سبب مزیت‌های فراوانی که دارد به عنوان منابع تامین
            پروتئین می تواند مطرح و نیاز عمومی منطقه و کشور را در این زمینه
            مرتفع نماید. ارزش غذایی بالای گوشت طیور، کم بودن افت پس از کشتار،
            سالم وبهداشتی بودن گوشت طیور، قابلیت هضم و جذب بالا، سرعت رشد سریع،
            صرفه جویی در جایگاه و زمین و برگشت سریع سرمایه از فواید پرورش مرغ
            گوشتی است.
          </p>
          <p>
            پرورش شترمرغ، بلدرچین، کبک و قرقاول نیز از جمله مشاغلی هستند که در
            حال حاضر به صورت سنتی انجام می‌شوند؛ اما با توجه به سازگاری با اقلیم
            منطقه قابلیت توسعه و اجرا در سطح وسیع تر را دارند.
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
        <Section id="birds" title="طیور" size="h3">
          <p>
            قرقاول یکی از بهترین پرندگانی است که حتی نسبت به بقیه طیور در زمینه
            پرورش، از سودآوری بالایی برخوردار است؛ ولی به دلیل عدم اطلاع رسانی
            های کافی هنوز خیلی از پرورش دهندگان، آگاهی لازم نسبت به این نوع
            پرنده ندارند. قرقاول به دلیل ویژگی های ظاهری و جنبه زیبایی بال و
            پرها و خواص بسیار زیاد گوشت آن مانند: عدم وجود چربی، وجود مواد معدنی
            و گروه عظیمی از ویتامین ها، لذیذ بودن گوشت آن بعد از آهو، سریع الهضم
            بودن، نداشتن هیچ گونه عارضه مصرفی برای سیستم گوارش و همچنین خواص آن
            برای درمان فراموشی و کم خونی، بسیار مورد توجه قرار گرفته است. این
            پرنده نیاز به مراقبت مداوم ندارد و نسبت به هر شرایط آب و هوایی مقاوم
            است. درضمن می‌توان روی صادرات گوشت قرقاول به کشورهای دیگر (مخصوصاً
            کشورهای حوزه خلیج فارس) کار کرد؛ بنابراین پرورش آن سوددهی بالایی
            خواهد داشت.
          </p>
          <p>
            بلدرچین پرنده ای با جثه کوچک، در برابر بسیاری از بیماری ها مقاوم
            است. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن بازار
            فروش، کوتاه بودن دوره پرورش(40 روز) و عدم پرورش انحصاری توسط شرکت
            های بزرگ دارای مزیت است. محصولات این پرنده شامل گوشت، تخم بلدرچین و
            کود است. گوشت و تخم این پرنده دارای ارزش غذایی و دارویی و همچنین
            سرشار از پروتئین است.
          </p>
          <p>
            کبک پرنده‌ای است وحشی، که در کوهستان‌ها زندگی می‌کند و از قدرت پرواز
            کمی برخوردار است. محصولات کبک نسبت به دیگر طیور به دلیل طعم و کیفیت
            مناسب و قیمت بیشتر، مشتریان خاص خود را دارد. از جهت دیگر به دلیل
            مقاومت نسبتاً بالای این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به
            دیگر پرندگان کمتر است. با پرورش کبک به‌صورت صنعتی می‌توان بخشی از
            نیاز کشور در حوزه گوشت را تأمین کرد و از میزان واردات به داخل کشور
            کاست. همچنین می‌توان به بازار جوجه و تخم کبک اشاره نمود که قابلیت
            تولید و عرضه را دارد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال و عاملی مهم در توسعه پایدار امنیت غذایی محسوب می‌شود که کاهش
            هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان
            ممکن می‌کند. تاکنون در حوزه صنایع غذایی فعالیت‌هایی در سطح شهرستان
            انجام شده؛ اما همچنان ظرفیت برای افزایش فعالیت وجود دارد.
          </p>
          <p>
            طبق مطالعات انجام شده فراوری مرکبات شامل تهیه روغن پوست پرتغال، آب
            میوه، کنساتره، عصاره و... علیرغم تولیدات انبوه این محصولات انجام
            نمی‌شود؛ اما پتانسیل احداث را دارد.
          </p>
          <p>
            با مقایسه سرانه مصرف آبزیان در سبد غذایی جامعه ایرانی و فاصله بسیار
            زیاد بین ارقام و اعداد سرانه مصرف جهانی بایستی علل عدم مصرف آن
            درجامعه را بررسی و به رفع آن پرداخت ، چرا که قرار گرفتن آبزیان در
            سبد غذایی مردم نقش مهمی در سلامت جامعه ایفا می نماید. مصرف گوشت سفید
            در مقایسه با گوشت قرمز از سلامت بالاتری برخوردار است و برطبق آخرین
            یافته های محققین علوم تغذیه و پزشکی مصرف صحیح آبزیان از بروز بسیاری
            از بیماریها جلوگیری می کند؛ بنابراین تنها راه افزایش مصرف سرانه ی
            آبزیان در کشور علاوه برگزاری برنامه های آموزشی، تولید غذاهای دریایی
            آماده ی مصرف نظیر انواع فیش برگر و ناگت ، میگو برگر و ..و ترویج مصرف
            آن ها بین گروه های مختلف مصرف کننده است؛ لذا ایجاد چنین صنایعی ضمن
            وجود مواد اولیه آنها در شهرستان عباس آباد ، توجیه اقتصادی دارد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنايع دستي به آن گروه از صنايعي گفته مي شود كه مهارت، ذوق و بينش
            انسان در آن نقش اساسي دارد و يا اينكه تمام يا بخش اعظم مراحل ساخت
            فراورده هاي آن با دست انجام گرفته و در چارچوب فرهنگ و بينش هر منطقه
            و با ديدگاه هاي قومي ساخته و پرداخته مي شود. صنايع دستي بازتابي از
            تاريخ تمدن هر ملت و قومي است و مي تواند انتشار مؤثري براي فرهنگ و
            سنن مناطق مختلف باشد.
          </p>
          <p>
            با توجه به اینکه قالی بافی در حال حاضر در شهرستان انجام می‌شود و
            برخی از مردم نیز در انجام آن مهارت دارند، این مورد را می‎‌توان گسترش
            داد و با استفاده از بازاریابی مناسب، سود چشمگیری را به دست آورد.
            قالیبافی از هنرهایی است که از قدیم نزد جهانیان جایگاه ویژه ای داشته
            و ایران را به این هنر می‌شناسند. آمارها نشان می دهد فرش ایرانی از
            کیفیت خوبی برخوردار بوده و قابل رقابت با کشورهای دیگر است. در ضمن با
            تولید فرش با کیفیت می توان به صادرات در این زمینه نیز فکر کرد.
            همچنین قالیبافی از مشاغل خانگی پردرآمدی بوده که تسهیلات خوبی به آن
            تعلق می گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب
            می دانند چون در کنار کارهای روزمره می توانند به این کار بپردازند و
            درآمد خوبی کسب کنند. از آن جایی که قالی انواع مختلفی دارد می توان با
            آموختن دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و
            به بازار عرضه کرد. در ضمن این کسب و کار را می توان در فضای کوچک و با
            سرمایه اولیه کم راه انداخت و با فروش محصول و افزایش مشتری، این کار
            را گسترش داد و زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            در ادامه می‌توان به مزیت هایی سفالگری اشاره کرد که در حال حاضر توسط
            برخی از مردم شهرستان انجام شده و در صورت وجود بازار مصرف، همچنان جای
            کار داشته و می‌توان این تولیدات را افزایش داد.
          </p>
          <p>
            راه اندازی کسب و کار هایی مانند شمع سازی، ساخت تراریوم، زیورآلات
            رزینی و عروسک نمدی نیز از جمله موارد پیشنهادی برای اشتغالزایی زنان
            به شمار می‌روند که در صورت تامین بازار مصرف به وسیله تبلیغات و
            بازاریابی سوددهی بالایی را به همراه خواهند داشت.
          </p>
          <p>
            دوخت عروسک نمدی از مشاغل خانگی است که در هم اکنون انجام شده و با
            سرمایه اولیه کم قابل راه اندازی است. با اقبال مردم (مخصوصا مردم
            شهرهای بزرگ) به دست سازها و کارهای هنری، راه اندازی این کسب و کار،
            می تواند سود خوبی را به ارمغان بیاورد. برای شروع، نیاز به محیط بزرگی
            نبوده و می توان داخل خانه مشغول تهیه عروسک نمدی شد. با افزایش تولید
            و بالارفتن سفارشات می توان، کار را توسعه داده و به احداث یک مکان
            بزرگ تر فکر کرد. این امر زمینه اشتغال بسیاری از افراد (مخصوصا زنان
            خانه دار) را فراهم می کند. بنابراین می توان این حرفه را یک فرصت شغلی
            مناسب دانست. دوخت عروسک، دانش خاصی نیاز ندارد و با آموختن این مهارت
            می توان محصولات متنوعی تولید و به بازار عرضه کرد. بازار مصرف محصولات
            تولیدی، مغازه ها و نمایشگاه ها می باشند. باتوجه با گسترش فضای مجازی،
            با تبلیغ در این شبکه ها می توان محصولات بیشتری را معرفی کرده و به
            فروش رساند.
          </p>
          <p>
            بسیاری از کسب‌وکارهای پررونق و با سرمایه اولیه اندک، ترکیبی از هنر،
            خلاقیت و دانش زنانی است که در بلندمدت خانواده‌های بسیاری را تحت
            حمایت مادی خود قرار داده‌اند. بسیاری از این کسب‌وکارها در کنج خانه و
            با کمترین میزان هزینه‌ برای خانواده‌ها درآمدزایی می‌کند. تهیه
            زیورآلات رزینی از این دست مشاغل است. در این کسب‌وکار مجموعه‌ای از
            زیورآلات اعم از دست‌بند، گردن‌بند که بیشتر به حالت رو مانتویی شناخته
            می‌شوند، پابند، سنجاق‌سینه، آویز ساعت و کیف و … ساخته می‌شود. تولید
            زیورآلات رزینی بیشتر از هر چیزی هنر و خلاقیت می‌طلبد و چون از جمله
            کسب و کارهای جدید است، می تواند درآمد زایی خوبی برای شخص داشته باشد.
          </p>
          <p>
            کسب و کار شمع سازی از مشاغل خانگی پر درآمدی است که امروزه به علت
            خواص دارویی، خواص زینتی و زیبایی، بازار مصرفی بالا و پررونقی دارد.
            این کسب و کار از ریسک پایینی برخوردار است و چون مواد اولیه آن به
            راحتی تامین می شود، بازار مصرفی خوبی دارد (مواد اولیه شمع سازی،
            پارافین می‌باشد که ایران منابع سرشاری از پارافین را داراست).
            شمع‌سازی در مقیاس کوچک قابل انجام است و خطرهایی مثل بیماری و یا آب و
            هوای اقلیمی، کار و سرمایه را تهدید نمی کند. به همین خاطر می تواند از
            بهترین گزینه ها برای راه اندازی کسب و کار باشد و با بازاریابی مناسب
            سود خوبی را عاید شخص کند. در صورت تامین بازار می‌توان این شغل را در
            مقیاس‌های بزرگ‌تر نیز راه‌اندازی کرد.
          </p>
          <p>
            تولید و پرورش گل و گیاه همیشه یکی از پر درآمد ترین مشاغل بوده است،
            امروزه نیز با توجه به آپارتمانی شدن منازل، تمایل به پرورش گیاهان
            داخل آپارتمان رو به افزایش است. تولید تراریوم چون به سرمایه و صرف
            وقت زیادی نیاز ندارد، می تواند به عنوان شغل دوم، بسیار قابل تامل
            باشد و با صرف هفته ای یک روز زمان، سوددهی خوبی داشته باشد. با ایجاد
            خلاقیت و ابتکار و هنر در کارها سود را می توان تا دوبرابر هم افزایش
            داد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در کشور ما
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور ایجاد خواهد شد. با توجه به اینکه در این شهرستان
            چند استخر پرورش ماهی کپور، ازون برون و قزل آلا وجود دارد ، کار کردن
            در این حوزه نیز در صورت تامین بازار مصرف، علاوه بر اشتغالزایی،
            سوددهی خوبی را به همراه خواهد داشت.
          </p>
          <p>
            البته صیادی نیز از جمله کسب و کار های رایج در این شهرستان است که
            بیشتر مردم به آن مشغول بوده و در صورت تامین بازار مصرف، همچنان جای
            کار دارد.
          </p>
          <p>
            ماهیان گرمابی در محدوده دمایی 27-20 درجه سانتیگراد بهترین رشد را
            دارند. بزرگ‌ترین خانواده ماهيان آب شيرين، کپورماهیان هستند. این ماهی
            در مقایسه با سایر گونه‌های پرورشی در آب‌های گرم و معتدل، ارزشمندترین
            ماهی از لحاظ اقتصادی است و نیز ارزش‌های تغذیه‌ای فراوانی دارد؛
            ازاین‌رو آموزش توسعه پرورش این ماهی می‌تواند در راستای تأمین غذای
            جمعیت کشور و نیز افزایش سطح معیشتی مردم مؤثر باشد.
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
            پرورش ماهی اوزون برون در استخر یکی از انواع روش هایی شایعی است که
            این روزها بیشتر افراد برای درآمد زدایی از آن بهترین استفاده را می
            کنند. پرورش ماهی اوزون برون در استخرها باعث شده تا در ایران تولید
            گوشت و ماهی اوزون برون برای خرید و فروش افزایش یابد و با اینکار
            اقتصاد کشور نیز از قبل قوی تر می شود.
          </p>
          <p>
            این ماهی از جمله ماهیان خاویاری به شمار می رود که از نظر اقتصادی
            بسیار ارزشمند می باشد.
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
            با توجه به اینکه مرکبات از جمله محصولات باارزش شهرستان هستند، ایجاد
            صنایعی برای بسته بندی آنها از جمله کسب و کارهای پرسود قملداد می‌شود
            .
          </p>
          <p>
            در سال های اخیر با افزایش آگاهی مردم نسبت به مواد غذایی و توجه بیشتر
            آنها به سلامت و نقش مواد غذایی مفید، مصرف گوشت ماهی جایگاه ویژه‌ای
            پیدا کرده است. با توجه به فسادپذیری بالای ماهی و لزوم وجود آن در سبد
            غذایی انسان، استفاده از روش های بسته بندی مناسب برای حفظ این جایگاه
            بسیار ضروری است؛ لذا بسته بندی ماهیان پرورشی صرفه اقتصادی دارد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در این شهرستان به صورت پراکنده و محدود انجام می‌شود. مردم
            این شهرستان در زمینه دام سنگین نیز بیشتر گاو هلشتاین و گاو سمینتال
            را پرورش می‌دهند. در زمینه دام سبک بیشتر پرواربندی گوسفند انجام
            می‌شود. پرورش تمام موارد فوق با اقلیم شهرستان سازگار است و ظرفیت های
            توسعه را دارد. البته مردم بیشتر از دام سنگین استقبال می‌کنند؛ لذا
            پرورش دام سنگین در اولویت بهتری قرار می‌گیرد .
          </p>
          <p>
            گاو سمینتال جزء بهترین گاو های شیری و گوشتی جهان است. افزایش وزن
            روزانه فوق‌العاده و گوساله دهی با فاصله 365 روز، مقاومت بالا نسبت به
            بیماریهای عفونی و متابولیکی، عمر مفید بالا، مدیریت آسان این نژاد و
            همچنین سازگاری بسیار خوب و قابل توجه با محیط پرورش همان چیزی است که
            یک دامدار برای بقاء و پیشرفت به آن نیاز دارد. یکی دیگر از مزایای
            پرورش گاو سمینتال، به صرفه بودن در شرایط اقتصادی فعلی است زیرا این
            گاو با دادن کمترین علوفه و کنسانتره، بیشترین میزان شیر و گوشت را
            می‌دهد.
          </p>
          <p>
            گاو هلشتاین که به نام هولشتاین هم شناخته می شود جزء سنگین وزن ترین
            گاوهای شیری در جهان است. این نژاد که از نظر تولید شیر بهترین نژاد در
            میان گاوهای شیری است حدودا ۷۲۴۰ لیتر شیر در سال تولید می کند. درصد
            چربی این شیر 65/3 درصد و درصد پروتئین آن ۳ درصد است.
          </p>
          <p>
            در سال‌های اخیر پرواربندی گوسفند به دلیل سودآوری بالا و ریسک کم،
            طرفداران بسیاری پیدا کرده و با اقبال عمومی مواجه شده است. از
            مزیت‌های اقتصادی این کسب و کار می توان به اشتغال زایی در مناطق
            مختلف، تولید گوشت مرغوب و پشم اشاره نمود. گوسفند در مقايسه با ساير
            حيوانات به جيره نگهدارى کمترى احتياج دارد و بيشتر غذاى دريافتى را
            صرف رشد و نمو مى‌کند همچنین نسبت به سایر دام‌ها مثل بز و طیور،
            مقاومت خوبی به بیماری‌ها و شرایط نامناسب رطوبتی و دمایی دارد؛
            بنابراین میزان تلفات در این دام بسیار پایین‌تر بوده و ضرر اقتصادی
            کمی را از این جهت به دامدار وارد می‌کند. پرواربندی گوسفند نیاز به
            تجهیزات ارزان قیمتی داشته و به دلیل ریسک کم و بازگشت سریع سرمایه در
            کوتاه مدت، از جذابیت مالی مطلوبی برخوردار است. طرح پرواربندی گوسفند
            از نظر اقتصادی ظرفیت بالایی داشته و به دلیل نیاز مداوم بازار به گوشت
            گوسفند و میزان تولید کم آن در داخل کشور، تقاضا برای گوشت گوسفند پا
            برجا بوده و هر میزان تولید به راحتی به فروش خواهد رسید. از این رو
            بحث رقابت در این حوزه چندان مطرح نبوده و جزء دغدغه‌های پرورش‌دهندگان
            نیست. با توجه به مزیت های مطرح شده طرح پروار بندی گوسفند مزیت دارد.
          </p>
          <p>
            زنبورداری نیز از جمله مشاغلی است که در شهرستان انجام می‌شود و به سبب
            اقلیم مناسب و عملکرد بالا، پتانسیل های سرمایه گذاری و سوددهی را
            دارد. پرورش زنبور اگر همراه با رعایت اصول علمی صورت پذیرد، می تواند
            پیشه‌ای سودآور باشد. زندگی این حشرات به سبک کلنی باعث شده تا پرورش
            دهندگان زنبور از اشتغالی پایدار بهره مند شوند چراکه میزان بالای زاد
            و ولد زنبورها باعث سودآوری بیشتر برای پرورش دهندگان خواهد شد. بر
            خلاف افکار غالب عمومی که تصور می کنند مهمترین فایده زنبورعسل،
            تولیدعسل و سایر محصولات و فراورده های مرتبط با شهد و عسل است، در
            واقع بالغ بر 90 درصد فواید زنبورعسل مربوط فعالیت گرده افشانی است.
            عدم فعالیت زنبورها و دیگر حشراتی که گرده افشانی را انجام می دهند
            باعث عدم باروری و نابودی تدریجی گیاهان و درختانی که برای گرده افشانی
            به این آنها وابسته اند می شود. افراد با تجربه معمولا در کنار پرورش
            زنبور عسل به کشاورزی و تولید محصولات زراعی می پردازند و با یک تیر دو
            نشان می زنند، زیرا با ادغام این 2 فعالیت علاوه بر تامین مواد غذایی
            برای زنبورها به دلیل کیفیت در گرده افشانی، به کشت و زراعتی با کیفیت
            و محصولی بی نظیر نیز دست خواهند یافت.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی،
            ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام برد.
          </p>
          <p>
            برنج از جمله محصولات زراعی با ارزش این شهرستان است که کشت آن در حال
            حاضر به صورت عمده وجود داشته و محصول با کیفیتی در این حوزه تولید
            می‌شود. با توجه به اینکه این محصول یکی از اقلام مورد نیاز خانوار ها
            است و محصول این منطقه طرفداران زیادی دارد، توسعه سطح زیر کشت آن
            پتانسیل های سوددهی و ارزآوری را دارد. برنج مهم ترین غلات و اقلام
            غذایی است که بیشتر مردم به عنوان یک غذای اصلی به آن وابسته هستند. آب
            مورد نیاز برای کشت برنج از سایر غلات بیشتر است و رطوبت کافی از عوامل
            مورد نیاز برای کاشت بهتر این محصول است. البته برای کشت این محصول
            باید بازار فروش و قیمت، مناسب باشد تا کشاورزان متضرر نشوند و رونق
            تولیدات داخلی را زمینه ساز شود.
          </p>
          <p>
            اقلیم شهرستان عباس آباد یکی از مناسب‌ترین اقلیم‌ها برای پرورش گیاهان
            دارویی مانند گل گاو زبان، عناب و ... است . امروزه افراد زیادی به
            استفاده از گیاهان دارویی متمایل شده اند. خواص بی نظیر این گیاهان و
            نداشتن عوارض جانبی ناشی از مصرف باعث شده تا افراد زیادی به گونه‌های
            مختلف از آن ها استفاده کنند. به همین جهت به کشت گیاهان دارویی می
            توان به چشم یک مزیت پر سود نگریست. از آن جا که این گیاهان برای کشت،
            مراقبت خاص و شرایط حساسی نیاز ندارند، می توان روی کشت آن ها سرمایه
            گذاری کرد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            عباس آباد، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما
            پتانسیل های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد
            واحدهای صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            علیرغم اینکه تولیدی پوشاک در این شهرستان وجود دارد، برخی از اقلام
            مورد نیاز از سایر مناطق وارد می‌شود؛ لذا کار کردن در زمینه تولید
            پوشاک از جمله پیشنهادات مناسب برای دستیابی به اشتغال پایدار است .{" "}
          </p>
          <p>
            تولید مصالح ساختمانی نیز از جمله پیشنهاداتی است که به دلیل رونق ساخت
            و ساز در شهرستان، پتانسیل های سوددهی را دارد .
          </p>
          <p>
            در این شهرستان یک شهرک صنعتی وجود دارد. همچنین کارخانه های تولید
            لبنیات، آرد، دارو، پوشاک، آب معدنی، نوشابه، قطعات خودرو و ... در
            داخل و خارج از شهرک صنعتی فعال هستند .
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
