import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-07"].cities["IR-0709"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        industry: "صنعت",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        gardening: "باغداری",
        services: "خدمات",
        livestock: "دامداری",
        fisheries: "شیلات",
        birds: "طیور",
        agriculture: "زراعت",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان کَنگان یکی از شهرستان‌های استان بوشهر در جنوب ایران است.
            مرکز شهرستان کنگان، شهر بندر کنگان است. این شهرستان از شرق و شمال
            شرق به شهرستان جم، از شمال غرب به شهرستان دیر، از جنوب شرق به
            شهرستان عسلویه و از غرب به خلیج فارس منتهی می‌گردد. طبق سرشماری اخیر
            در سال ۱۳۹۵ جمعیت این شهرستان به ۱۰۷۸۰۱ نفر رسیده ‌است که طبق این
            آمار 80556 خانوار در این شهرستان ساکن می باشند و سومین شهرستان
            پرجمعیت استان بوشهر می باشد. کنگان دارای تابستانی گرم و مرطوب و
            زمستانی معتدل می باشد. این شهرستان در بیشتر ماه های سال گرم و دمای
            آن در تابستان گاهی به ۵۰ درجه سانتی گراد و در زمستان به ۱۰درجه سانتی
            گراد بالای صفر می رسد. شکل زیر موقعیت شهرستان کنگان را نشان می دهد.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب ‌و كارهاي موجود در هر شهرستان بر مبناي
            يک روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب ‌و كار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان کنگان
            ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان طوري كه در قسمت مقدمه اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب ‌و كارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب ‌و كارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی هر کشوری است که متاسفانه
            در کشور ما آن گونه که باید به آن توجه نشده است و لازم است از
            پتانسیل‌های هر شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده
            شود. در شهرستان کنگان، تعداد زیادی واحد صنعتی در زمینه های مختلف
            وجود دارد اما پتانسیل های شهرستان نشان دهنده این موضوع است که همچنان
            برای ایجاد واحدهای صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            با توجه به تعداد زیاد شرکت های پتروشیمی و پالایشگاهی در این شهرستان،
            فعالیت در حوزه تولید ظروف پلاستیکی و نایلون می تواند ارزش افزوده
            خوبی را برای سرمایه گذاران این بخش به همراه داشته باشد . همچنین
            تولید مصالح ساختمانی و پوشاک نیز در این شهرستان مزیت دارد، زیرا
            شرایط صادرات این محصولات به کشورهای حاشیه خلیج فارس و همچنین میزان
            مصرف این محصولات در وضعیت خوبی قرار دارد و می تواند سودآوری مناسبی
            به همراه داشته باشد.
          </p>
          <p>
            پوشاک پردرآمدترین صنعت موجود در کشور است. امروزه افراد زیادی در صنعت
            پوشاک یعنی در زمینه طراحی، دوخت و تولیدی لباس فعالیت می کنند. همچنین
            با وجود شبکه های اجتماعی و رشد روز افزون این شبکه ها و نفوذ آن در
            میان مردم طی ۵۰ سال گذشته تعداد مزون هایی که در زمینه پوشاک فعالیت
            می کند به طرز چشمگیری افزایش یافته است. از طرفی به دلیل اینکه در
            مناسبت هایی همچون عید نوروز و شروع مدارس افراد زیادی اقدام به خرید
            لباس می کنند و همین موضوع باعث می شود که بیش از پیش این صنعت رونق
            پیدا کند؛ بنابراین ایجاد و گسترش تولیدی های پوشاک نیز از کسب و
            کارهایی است که قابلیت سرمایه گذاری در شهرستان را دارد.{" "}
          </p>
          <p>
            در ادامه می توان کسب و کارهایی نظیر تولید قطعات خودرو، تولید لوازم
            خانگی، تولید سبد و کارتن، تولید ادوات کشاورزی و تولید کود شیمیایی را
            در این شهرستان به عنوان کسب و کارهای سودده معرفی کرد. با توجه به
            تولید محصولات کشاورزی در این شهرستان، واحدهایی در زمینه تولید کارتن
            و سبد وجود دارد اما با توجه به نیاز شهرستان به این کالا و وارداتی که
            گاهی اوقات در این زمینه صورت می گیرد، سرمایه گذاری در زمینه تولید
            کارتن و سبد مقرون به صرفه به نظر می رسد. ضمن اینکه می توان بعد از
            تامین نیاز شهرستان، روی ارسال آن به خارج از شهرستان نیز فکر کرد.
          </p>
          <p>
            در شهرستان کنگان کارخانه های بزرگی نظیر کارخانه سیمان، شرکت های
            پتروشیمی و پالایشگاه وجود دارد و به لحاظ صنعتی این شهرستان در جایگاه
            مناسبی قرار دارد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان کنگان، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از این محصولات در مراحل کاشت، داشت و برداشت
            به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از
            محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در
            طی سال صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی در این شهرستان می‌تواند
            زمان استفاده از محصولات را افزایش دهد و از میزان ضایعات آن بکاهد.
            همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از
            اتلاف و ضایع شدن محصولات در این شهرستان خواهد شد.
          </p>
          <p>
            به منظور نگهداری و ذخیره سازی محصولات کشاورزی، احداث واحد سردخانه
            صنعتی در این شهرستان مزیت دارد. از مهمترین مزایای استفاده از سردخانه
            میوه و سبزی می توان به جلوگیری از فساد محصول اشاره کرد. روند انواع
            فسادها از قبیل فساد فیزیکی، فساد شیمیایی یا تغییر رنگ محصول، فساد
            ناشی از وجود میکروارگانیسم ها و غیره با نگهداری در سردخانه ها به شدت
            کند شده و حفظ کیفیت محصول در زمان طولانی تر حاصل می گردد. از دیگر
            مزایای با اهمیت احداث سردخانه میوه، کنترل قیمت بازار است. ذخیره کردن
            میوه در سردخانه موجب می شود در ماه هایی از سال که مصرف میوه بسیار
            است و فصل برداشت آن محصول خاص نیست، بازار با کمبود مواجه نشده و حباب
            قیمت ایجاد نگردد. در واقع با ساخت سردخانه میوه تعادلی در عرضه و
            تقاضا ایجاد می گردد و موجب خواهد شد از افزایش بی رویه قیمت که به ضرر
            مصرف کننده است و از کاهش بیش از حد آن که به ضرر باغداران است جلوگیری
            به عمل آید؛ بنابراین نقش سردخانه های میوه جات به عنوان حد واسط بازار
            و باغداران در این بین بسیار پر رنگ و حیاتی است.
          </p>
          <p>
            حوزه دیگری که در شهرستان کنگان قابلیت سرمایه گذاری دارد، ایجاد واحد
            تولیدی خوراک دام است. این واحد در صورتی که بتواند علاوه بر بازار
            فروش شهرستان در سایر نقاط نیز مشتری داشته باشد با سود سرشاری مواجه
            خواهد شد. با اجرای پروژه های صنعتی که از ضایعات کشاورزی خوراک دام
            تولید شود، هم غذای مورد نیاز دام‌ها تأمین می شود و شهرستان را به
            خودکفایی سوق می دهد و هم استفاده از مواد اولیه ارزانتر در تولید این
            محصول سبب خواهد شد تا قیمت تمام شده آن پایین تر و در نتیجه قیمت فروش
            آن نیز پایین باشد. تولید خوراک دام می تواند زمینه اشتغال خوبی را به
            طور مستقیم و غیر مستقیم برای افراد ایجاد کند.
          </p>
          <p>
            یکی از محصولات دیگری که در شهرستان کنگان تولید می شود خرما است که
            معمولا به صورت فله و بدون بسته بندی به سایر استان ها ارسال می شود؛
            بنابراین می توان با بسته بندی این محصول ارزش افزوده حاصل از آن را به
            میزان قابل توجهی افزایش داد و باعث افزایش درآمد و سوداوری برای
            شهرستان شد. بسته بندی خرما به عنوان یک ماده غذایی موثر از اهمیت
            بسزایی برخوردار است زیرا در صورتی که بسته‌بندی‌خرما به درستی انجام
            نشود، خرماها از بین می‌روند و افت کیفیتی شدیدی پیدا خواهند کرد. هدف
            اصلی در بسته‌بندی خرما اين است كه در فاصله زمانی انبارداری، حمل و
            نقل، توزيع و تا رسيدن به دست مصرف كننده مشخصات مهم خرما حفظ شده و از
            صدمات و خطرات احتمالی جلوگیری شود.
          </p>
          <p>
            با توجه به اینکه کشت گندم در این منطقه صورت می‌گیرد، اما کارخانه آرد
            جهت فرآوری گندم در این شهرستان وجود ندارد؛ بنابراین وجود کارخانه آرد
            از جمله مواردی است که این شهرستان به آن نیاز دارد. با آسیاب کردن
            گندم، جوانه و سبوس یا همان پوسته از بخش آردی آن تفکیک می‌گردد و لذا
            آرد با توجه به میزان سبوس جدا شده از آن به انواع مختلفی تقسیم‌بندی
            می‌گردد. از انواع آرد می‌توان به آرد قنادی، آرد ستاره، آرد سبوس
            گرفته و آرد کامل اشاره نمود و از این میان آرد کامل به لحاظ میزان
            سبوس بالای آن، دارای ارزش غذایی قابل توجهی است. از طرفی ایران از
            جمله کشورهایی است که سرانه مصرف آرد و تولید نان در آن بالاست.
          </p>
          <p>
            لازم به ذکر است که در صورت دقت نکردن به بازار فروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد؛
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازار فروش در
            شهرستان های اطراف در زمینه راه اندازی این مشاغل مهم است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و عاملی مهم در توسعه پایدار امنیت غذایی شهرستان محسوب
            می‌شود. ایجاد صنایع غذایی در شهرستان کنگان، علاوه بر اشتغالزایی،
            باعث ارتقای سطح درآمد ارزی کشور نیز می‌شود که کاهش هدررفت محصولات
            کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان ممکن می‌سازد.
          </p>
          <p>
            گوجه فرنگی از جمله محصولاتی است که به میزان زیادی در این شهرستان
            تولید می شود و کارخانه‌ای نیز جهت تولید رب در این شهرستان فعالیت
            نمی‌کند؛ بنابراین مقدار گوجه تولیدی نشان می دهد که می توان در زمینه
            احداث واحد صنعتی در زمینه فرآوری گوجه فرنگی به منظور تولید رب گوجه
            فرنگی اقدام کرد. رب گوجه فرنگی دارای کاربردهای فروانی از قبیل چاشنی
            و بهبود دهنده رنگ و طعم انواع غذا و ماده اولیه سس‌ها و کنسروها است.
          </p>
          <p>
            با توجه به اینکه در شهرستان کنگان سالانه مقدار زیادی خرما تولید می
            شود؛ بنابراین احداث واحدی جهت فرآوری خرما در شهرستان کنگان مزیت
            خواهد داشت. فرآوری‌های متداول از خرما نظیر تولید شیره خرما، شهد
            خرما، سرکه خرما، چیپس خرما، قند مایع خرما، قهوه خرما، شکلات، نان و
            لواشک خرمایی مزیت تولید دارند، البته فرآوری خرما در همه موارد برای
            شهرستان قابلیت فعالیت دارد.
          </p>
          <p>
            گیاهان دارویی از دیگر تولیدات این شهرستان هستند که میزان تولید
            مناسبی دارند و می توان در زمینه فرآوری آن ها در واحد صنعتی کوچکی
            سرمایه گذاری کرد. با این کار رغبت مردم شهرستان برای کشت این محصولات
            نیز بیشتر خواهد شد. فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز
            به سرمايه‌گذاري زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته
            باشد. یکی از فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات
            دارای تکنولوژی و دانش فنی پیچیده ای نمی باشد و با توجه به ظرفیت
            تولید گیاهان دارویی در شهرستان کنگان و نیز سهولت صادرات این محصولات
            به شهرها و کشورهای دیگر، می توان با سرمایه‌ای اندک به این کسب و کار
            مشغول شد. خشک کردن و بسته‌بندی نیز از دیگر فرآوری‌های گیاهان دارویی
            است که می‌توان با فعالیت در آن‌ها به سود رسید.
          </p>
          <p>
            در شهرستان کنگان مقدار مناسبی میوه تولید می شود که می توان در زمینه
            احداث واحد یا واحدهای صنعتی فرآوری آن ها اقدام کرد. تولید میوه خشک
            از جمله محصولات قابل تولید از این میوه های می باشد. خشک کردن
            میوه‌جات، یکی از روش‌هاي جلوگیري از فساد میکروبی آن‌ها است. در این
            روش، در اثر کاهش میزان رطوبت، امکان فساد میکروبی بسیار کم شده و سرعت
            دیگر واکنش‌هاي مضر نیز، به مقدار قابل توجهی کاهش می‌یابد. خشک کردن،
            ضمن اینکه روي محصول اثر حفاظتی دارد، وزن و حجم آن را نیز به میزان
            چشمگیری کاهش می‌دهد، در نتیجه از هزینه‌های حمل و نقل و ذخیره‌سازي
            نیز می‌کاهد. با توجه به اینکه بخشی از بازار میوه خشک ایران، سهم
            محصولات وارداتی است، با تولید مشابه داخلی این میوه‌ها (از نظر نوع و
            کیفیت)، می‌توان مانع از واردات و خروج میلیون‌ها دلار ارز از کشور شد.
            همچنین نیاز بیش از حد برخی از کشورها به این گونه محصولات (به دلیل
            شرایط ویژه اقلیمی آن‌ها، هزینه بالای حمل و نقل سبزیجات و میوه‌های
            تازه و محدود بودن زمان نگه‌داری آن‌ها)، فرصت مناسبی برای رونق تولید
            و صادرات میوه خشک فراهم آورده است.
          </p>
          <p>
            البته بررسی ها نشان می دهد در داخل شهرستان کنگان بازار مصرف زیادی
            برای میوه های خشک شده وجود ندارد که در این صورت لازم است ابتدا نسبت
            به ارسال این محصول به سایر شهرستان ها اقدام کرد و همزمان بحث
            بازاریابی و تبلیغات صحیح در داخل شهرستان را نیز انجام داد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج در شهرستان کنگان است. تولید اشتغال توسط
            رسته باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار
            رونق می‌بخشد. کشاورزی و از جمله باغبانی در توسعه ملی و افزایش رفاه
            عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع
            درآمد و عدالت اجتماعی موثر است. در یک نگاه کلی می توان گفت نقش
            کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری
            الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه
            شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای
            بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.
          </p>
          <p>
            شهرستان کنگان به دلیل داشتن آب و هوایی گرم و خاک حاصلخیز، پتانسیل
            خوبی جهت توسعه باغداری و کاشت انواع محصولات گرمادوست دارد. در ادامه
            به نمونه هایی از این محصولات قابل تولید در شهرستان کنگان پرداخته
            می‌شود.
          </p>
          <p>
            در شهرستان کنگان کشت گوجه فرنگی به صورت انبوه انجام می شود و سود
            مناسبی را نیز نصیب کشاورزان این منطقه می کند. گوجه فرنگی محصولی است
            که هم به صورت تازه خوری و هم به صورت فرآوری شده در بسیاری از غذاها
            به عنوان چاشنی و رنگ دهنده مورد استفاده قرار می گیرد.
          </p>
          <p>
            در شهرستان کنگان با توجه به گرم بودن هوا در اغلب اوقات سال کشت انواع
            صیفی جات و سبزی جات به صورت آزاد انجام می شود و با توجه به ورود این
            محصولات به بازار در خارج از فصل برداشت، با قیمت مناسبی در سایر
            شهرستان ها به فروش می رسد و سود مناسبی را نصیب کشاورزان خواهد نمود؛
            بنابراین گسترش کشت این محصولات در منطقه می تواند مزیت مناسبی را به
            همراه داشته باشد.
          </p>
          <p>
            خرما از جمله محصولات باغی است که به میزان متوسط در شهرستان کنگان کشت
            می شود و با آب و هوای این شهرستان سازگاری دارد . خرما میوه ای است با
            ارزش غذایی بالا که به علت دارا بودن مواد قندی قابل توجه (حدود 70
            درصد) علاوه بر مصرف غذایی، در صنعت نیز موارد استفاده فراوان دارد.
            مصارف مختلف خرما در صنعت شامل موارد خوراکی مانند شیره، شهد و شکلات
            خرما است. از ضایعات آن نیز در ترکیب خوراک دام و طیور، از برگ خرما در
            ساخت انواع ظروف بافتنی و حصیر و از تنه و چوب خرما در کارخانجات
            نئوپان سازی و کاغذ سازی و همین طور پوشش ساختمان‌ها و پل‌ها استفاده
            می کنند.
          </p>
          <p>
            همچنین در شهرستان کنگان می توان نسبت به کاشت گیاه دارویی باارزش
            آلوئه ورا سرمایه گذاری نمود. گونه های مختلف آلوئه ورا گیاهانی مقاوم
            به گرما، خشکی، بیماری‌ها، آفات و حتی شوری هستند. علت مقاومت زیاد آن
            ها ساختار مرفولوژیکی این گیاه است و بذر آن ها نیز در شرایط اقلیمی
            مناسب و در دمای 21 درجه سانتی گراد سبز می شوند. البته این گیاهان به
            سرما بسیار حساس هستند به طوریکه در دمای زیر 10 درجه سانتی گراد رشد
            آن ها متوقف می شود. آلوئه ورا به رطوبت بالا، آب ایستایی و آبیاری
            زیاد حساس است؛ از این رو آبیاری گیاهان باید زمانی انجام شود که خاک
            آن ها کاملا خشک باشد. چنانچه این گیاه در مناطق گرم و خشک کاشته شود
            باید تحت آبیاری به موقع قرار بگیرد. آلوئه ورا را در هر نوع خاکی می
            توان کاشت ولی خاک های سبک که از زهکشی مناسبی برخوردار باشند برای
            کاشت این گیاه توصیه می شود. بازار و جایگاه آلوئه ورا در کشور جدید
            می‌باشد و آن چنان که باید جایگاه خود را پیدا نکرده اما این گیاه از
            اندک گیاهان دارویی است که علاوه بر مصرف دارویی در حوزه های آرایشی
            (مایع، ژل، کرم، لوسیون) و تغذیه ای (عصاره و نوشیدنی) نیز کاربرد
            دارد.
          </p>
          <p>
            همچنین در شهرستان کنگان تولید محصولاتی نظیر لیموشیرین، نارنج و
            پرتقال نیز انجام می شود و با توجه به اینکه این محصولات با شرایط آب و
            هوایی این منطقه سازگاری دارند و عملکرد مناسبی نیز داشته اند بنابراین
            می توان نسبت به گسترش باغات آن ها در این شهرستان اقدام کرد.
          </p>
          <p>
            با توجه به شرایط اقلیمی و همچنین خشکسالی‌های چند سال اخیر در شهرستان
            کنگان این شهرستان از مناطق مستعد در استان بوشهر برای توسعه کشت
            گلخانه‌ای است. گياهان براي داشتن رشد مطلوب نياز به شرايط خاصي از نظر
            شدت نور، دماي روزانه، دماي ‌شبانه، ميزان رطوبت نسبي هوا و رطوبت خاک
            دارند. براي توليد و پرورش تجاري گياهان با کيفيت بالا و در تمام طول
            سال بايد شرايط محيطي مطلوب مهیا شده و عوامل خسارت زا نظير آفات و
            بیماری ها، باد، طوفان هاي ويرانگر، سرما و يخبندان و ...کنترل شوند.
            گلخانه محیطی است که به راحتی می توان در داخل آن شرایط محیطی را تحت
            کنترل درآورد و به سمت رشد مطلوب گیاه سوق داد. گلخانه‌ها که از نظر
            اندازه متغیرند گیاهان را از سرمای بیش از حد زمستان یا گرمای بیش از
            حد تابستان حفظ می‌کنند. کشاورزی در گلخانه ها نسبت به کشاورزی در فضای
            آزاد و در زمین های کشاورزی دارای دردسر و مشکلات کمتری است، به علاوه
            بازه زمانی برای به ثمر نشستن و برداشت محصولات نیز نسبت به کشاورزی
            سنتی، کوتاه تر است؛ اما با این وجود پرورش گلخانه ای محصولات نیز نیاز
            به مراقبت های خاص خود دارد. به منظور مدیریت منابع آبی و بهره وری
            بیشتر در زمینه تولید محصولات خارج از فصل که سوددهی بالایی دارند،
            توصیه می گردد تا در زمینه احداث گلخانه در این شهرستان سرمایه گذاری
            گردد. به این ترتیب می توان محصولاتی نظیر انواع صیفی جات همچون گوجه
            فرنگی، فلفل و بادمجان و... و سبزیجات را در محیط گلخانه پرورش داد.
            بازاریابی مناسب و عرضه به موقع محصولات موجب می شود تا بازگشت سرمایه
            سریعتر اتفاق بیفتد و نزدیک شدن به موفقیت سرعت بیشتری بگیرد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت‌هایی دارد. برای مثال گردشگری از فعالیت هایی است که با
            سودآوری بسیاری همراه است و در شهرستان کنگان نیز ظرفیت های بسیار خوبی
            برای سرمایه گذاری در زمینه گردشگری وجود دارد.
          </p>
          <p>
            قلعه شیخ نصوری، گور دختر، موزه سیراف، مقبره یهودیان، جنگل دریایی حرا
            و ساحل کنگان و ... از جمله جاذبه های دیدنی شهرستان کنگان هستند که
            مورد استقبال مردم و گردشگران داخلی و خارجی واقع می‌شوند ؛ بنابراین
            احداث رستوران بومی و هتل (با توجه به کمبود آن ها در شهرستان) در این
            شهرستان می تواند سودآوری مناسبی داشته باشد.
          </p>
          <p>
            رستوران‌های بومی، مکان‌هایی با فضای سنتی و متناسب با آداب ‌و ‌رسوم
            هر منطقه است که در آن‌ها بیشتر به‌جای استفاده از میز و صندلی‌های
            مدرن از تخت یا سایر وسایل سنتی استفاده و علاوه بر سرو غذاهای محلی،
            ترشیجات خانگی و نوشیدنی‌هایی مانند چای و قهوه نیز عرضه می‌شود.
            رستوران‌ بومی جزء مهم‌ترین نمادهای فرهنگی محسوب می‌شود و می تواند در
            خانه های قدیمی موجود در هر منطقه اجرا شود. بسیاری از گردشگران و
            توریست‌های غذایی برای امتحان کردن غذاهای مختلف به سفر می روند و این
            مسئله برای مناطق مختلف قابل استفاده و بهره برداری است؛ بنابراین
            ایجاد رستوران بومی نیز از کسب و کارهای زود بازده است؛ زیرا هم تمایل
            مردم به سمت سرو غذاهای محلی بیشتر شده و هم معاملات این کسب و کار به
            صورت نقدی انجام می‌شود.
          </p>
          <p>
            پیش از آن که یک گردشگر از شهری بازدید کند، بخشی از جستجوی آن‌‌‌‌‌ در
            مورد این خواهد بود که چگونه نزدیک‌‌‌‌‌‌ترین هتل و اقامتگاه را در شهر
            پیدا کند. حقیقت این است که اگر یک شهر توریستی فاقد هتل‌‌‌‌‌‌ و
            اقامتگاه‌‌‌‌‌‌های استاندارد باشد، احتمالاً بازدیدکنندگان (گردشگران)
            کمتری جذب خواهد کرد، بنابراین یکی از گزینه‌‌‌‌‌‌هایتان
            سرمایه‌‌‌‌‌‌گذاری در شهرستان کنگان بخش هتل و اقامتگاه است.
          </p>
          <p>
            شهرستان کنگان به لحاظ شهربازی و سینما نیز دارای کمبودهایی است؛
            بنابراین احداث این موارد در صورت استقبال مردم ارزش افزوده زیادی به
            همراه خواهد داشت.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            مشاغل حوزه دامداری از جمله فعالیت های کسب و کاری است که در سطح
            محدودی در شهرستان کنگان انجام می شود. سود اقتصادی حاصل از دامداری
            برای مردم این شهرستان مناسب است و علاوه بر آن در تامین غذایی مردم
            منطقه نقش مهمی دارد. از آن جایی که حوزه دامداری با یکی از مهم ترین
            نیازهای انسان، یعنی نیاز به منابع غذایی و خصوصا منابع پروتئینی مرتبط
            می‌باشد، توجه به آن امری ضروری است. فعالیت در این حوزه شغلی و افزایش
            بهره وری در آن، می تواند عاملی برای توسعه صنایع غذایی، تبدیلی و
            تکمیلی در این شهرستان محسوب شود.
          </p>
          <p>
            دامداری در شهرستان کنگان به دلیل شرایط آب و هوایی این منطقه و همچنین
            علاقه مردم از دیرباز تاکنون رونق خوبی داشته است. بیشتر جمعیت دام های
            این شهرستان را دام‌های سبک تشکیل داده اند و استفاده از دام های سبک
            در این شهرستان مزیت بیشتری نسبت به دام سنگین داشته است. در واقع
            اقلیم منطقه شرایط مناسبی را برای انجام فعالیت های دامداری اعم از
            پرورش بز و گاوهای شیری و پرواری فراهم نموده است. در ادامه به معرفی و
            مزیت دام هایی که در این منطقه ظرفیت پرورش دارند، پرداخته می شود.
            لازم به ذکر است که در زمینه پرورش دام های سبک و سنگین یاد شده، پرورش
            به روش صنعتی اگر چه سرمایه گذاری بیشتری را می طلبد اما می تواند شخص
            را با سود سرشاری مواجه سازد؛ بنابراین مزیت این روش با توجه به محاسنی
            که دارد، به مراتب بیشتر از دامداری سنتی است. قابل ذکر است که در
            شهرستان کنگان به دلیل فرهنگ مردم استفاده از گوشت بز بسیار بیشتر از
            گوشت گوسفند می باشد و به همین دلیل پرورش گوسفند در این شهرستان
            تقریبا انجام نمی شود و مزیتی برای آن در نظر گرفته نشده است.
          </p>
          <p>
            بزهای پرورشی در این شهرستان بیشتر از نوع نژاد بومی، پاکستانی، عدنی،
            سومالی و بربری هستند و قابلیت توسعه پرورش آن ها در شهرستان وجود
            دارد. به طورکلی بز به‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر
            و گوشت در مناطق مختلف پرورش داده می‌شود. جثه کوچک، کم توقع بودن و
            مقاومت در برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز به‌عنوان
            حیوانی محبوب در بین دامداران تلقی شود. در نقاط مختلف از این حیوان
            علاوه بر تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز استفاده
            می‌شود.
          </p>
          <p>
            علاوه بر ظرفیت بالای شهرستان در زمینه پرورش دام سبک از نژادهای
            مختلف، برای پرورش دام های سنگین گوشتی و شیری نیز پتانسیل مناسبی در
            شهرستان کنگان وجود دارد. از جمله نژادهای قابل پرورش می توان به نژاد
            هلشتاین و سمینتال اشاره نمود . امروزه با توجه به رشد جمعیت کشور و
            نیاز روزافزون جامعه به گوشت و مواد گوشتی و نقش مهم این محصولات در
            تامین پروتئین و غذای افراد جامعه، پرورش دام های پر بازده به منظور
            افزایش تولید و خودکفایی غذایی کشور، امری لازم و ضروری است. پوست گاو
            به عنوان یک محصول با ارزش دامی در صنعت چرم‌سازی استفاده می‌شود و حتی
            شاخ، سم و فضولات این حیوان نیز ارزش اقتصادی داشته و به روش های مختلف
            مورد استفاده قرار می گیرد.
          </p>
          <p>
            گاو هلشتاین که به نام هولشتاین نیز شناخته می‌شود جزء سنگین وزن ترین
            گاوهای شیری در جهان است. این نژاد که از نظر تولید شیر بهترین نژاد در
            میان گاوهای شیری است حدودا ۷۲۴۰ لیتر شیر در سال تولید می کند. درصد
            چربی این شیر 65/3 درصد و درصد پروتئین آن نیز ۳ درصد است.
          </p>
          <p>
            گاو سمینتال جزء بهترین گاوهای شیری و گوشتی در جهان است. افزایش وزن
            روزانه فوق‌العاده و گوساله دهی با فاصله 365 روز، مقاومت بالا نسبت به
            بیماریهای عفونی و متابولیکی، عمر مفید بالا، مدیریت آسان این نژاد و
            همچنین سازگاری بسیار خوب و قابل توجه با محیط پرورش همان چیزی است که
            یک دامدار برای بقاء و پیشرفت به آن نیاز دارد. یکی دیگر از مزایای
            پرورش گاو سمینتال، به صرفه بودن در شرایط اقتصادی فعلی است، زیرا این
            گاو با دادن کمترین علوفه و کنسانتره، بیشترین میزان شیر و گوشت را
            می‌دهد.
          </p>
          <p>
            از جمله دیگر رشته های دارای مزیت برای اجرا در شهرستان کنگان، پرورش
            زنبورعسل است که در حال حاضر با شرایط خشکسالی می تواند به عنوان یک
            کسب و کار خرد مورد توجه قرار گیرد. پرورش زنبور اگر همراه با رعایت
            اصول علمی صورت پذیرد، می تواند پیشه‌ای سودآور باشد. زندگی این حشرات
            به سبک کلنی باعث شده تا پرورش دهندگان زنبور از اشتغالی پایدار بهره
            مند شوند چرا که میزان بالای زاد و ولد زنبورها باعث سودآوری بیشتر
            برای پرورش دهندگان خواهد شد. بر خلاف افکار عمومی که تصور می کنند
            مهمترین فایده زنبورعسل، تولید عسل و سایر محصولات و فراورده های مرتبط
            با شهد و عسل است، در واقع بالغ بر 90 درصد فواید زنبورعسل مربوط به
            فعالیت گرده افشانی است. عدم فعالیت زنبورها و دیگر حشراتی که گرده
            افشانی را انجام می دهند باعث عدم باروری و نابودی تدریجی گیاهان و
            درختانی که برای گرده افشانی به این حشرات وابسته اند می شود. افراد با
            تجربه معمولا در کنار پرورش زنبور عسل به کشاورزی و تولید محصولات
            زراعی می پردازند، زیرا با ادغام این دو فعالیت علاوه بر تامین مواد
            غذایی برای زنبورها به دلیل کیفیت در گرده افشانی، به کشت و زراعتی با
            کیفیت و محصولی بی نظیر نیز دست خواهند یافت.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در شهرستان
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور ایجاد خواهد شد. در این شهرستان پرورش میگو انجام
            می شود و پرورش آن برای شهرستان مزیت دارد. در شهرستان کنگان انواع
            میگو پرورش داده می شود. با توجه به صادرات بسیار زیاد این محصول و
            همچنین استفاده از خاک ساحل که برای کشاورزی مزیتی ندارد و می توان
            حوضچه های پرورش این گونه را در سواحل احداث کرد و میزان صادرات را
            افزایش داد. قابل ذکر است که با توجه به اینکه شهرستان کنگان هم مرز با
            دریا می باشد پرورش ماهی در آن صورت نمی گیرد و صیادان این منطقه به
            صید ماهی از دریا می پردازند و کسب و کار صیادی در این منطقه از شرایط
            مناسبی برخودار است.
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
            شهرستان کنگان وجود دارد اما نکته مهم و قابل توجه، بازاریابی جهت فروش
            محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می تواند
            زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه صنعتی
            فراهم نماید؛ بنابراین طیوری که به آن پرداخته می شوند، به شرط
            بازازیابی مناسب مزیت پرورش دارند.
          </p>
          <p>
            مرغ بومی از طیوری است که در شهرستان کنگان پرورش می یابد و می‌توان در
            زمینه گسترش پرورش آن ها اقدام کرد. یکی از دلایل استقبال از پرورش مرغ
            بومی، سوددهی بسیار خوب پرورش مرغ بومی یا محلی است. مرغ بومی یا همان
            مرغ های محلی، نوعی نژاد بسیار مقاوم به شمار می آیند که در مقابل
            بیماری ها، گرما و سرما تحمل بالایی دارند و این مزیت باعث می شود که
            ایجاد واحدهای تولیدی مرغ بومی برای تولید کنندگان سوددهی داشته باشد.
            یکی دیگر از مزیت های پرورش مرغ بومی این است که این کار نیاز به
            تجهیزات زیادی ندارد. هرچند اگر در پرورش مرغ بومی از تجهیزات مدرن
            استفاده شود، سود بیشتری نصیب پرورش دهنده خواهد شد. منظور از تجهیزات
            مواردی مانند آبخوری، دان خوری ، لانه تخم گذاری و... است.
          </p>
          <p>
            پرورش بوقلمون، بلدرچین و کبک نیز هم اکنون در شهرستان کنگان به صورت
            محدود انجام می‌شود و ظرفیت سرمایه گذاری و توسعه آن با توجه به شرایط
            آب و هوایی این منطقه وجود دارد.
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
          <p>
            بلدرچین پرنده ای با جثه کوچک است که در برابر بسیاری از بیماری ها
            مقاوم است. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن
            بازار فروش، کوتاه بودن دوره پرورش (40 روز) و عدم پرورش انحصاری توسط
            شرکت های بزرگ دارای مزیت است. محصولات این پرنده شامل گوشت، تخم
            بلدرچین و کود است. گوشت و تخم این پرنده دارای ارزش غذایی و دارویی و
            همچنین سرشار از پروتئین است.
          </p>
          <p>
            کبک پرنده‌ای است وحشی، که در کوهستان‌ها زندگی می‌کند و از قدرت پرواز
            کمی برخوردار است. محصولات کبک نسبت به دیگر طیور به دلیل طعم و کیفیت
            مناسب و قیمت بیشتر، مشتریان خاص خود را دارد. از جهت دیگر به دلیل
            مقاومت نسبتاً بالای این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به
            دیگر پرندگان کمتر است. با پرورش کبک به‌صورت صنعتی می‌توان بخشی از
            نیاز کشور در حوزه گوشت را تأمین کرد و از میزان واردات آن به داخل
            کشور کاست. همچنین می‌توان به بازار جوجه و تخم کبک نیز اشاره نمود که
            قابلیت تولید و عرضه را دارد.
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
            پرداخته می شود و مزایای کشت هر کدام به تفکیک آورده می شود.
          </p>
          <p>
            از جمله محصولاتی که در شهرستان کنگان کشت می‌شود و قابلیت توسعه کشت
            نیز دارد می توان به گندم و جو اشاره کرد. کشت گندم از گذشته تاکنون به
            روش آبی و دیم در این شهرستان انجام شده است و همچنان برای توسعه آن
            مزیت وجود دارد. گندم در بازه زمانی حدوداً هشت ماهه به ثمر نشسته و به
            مرحله سود دهی می رسد و در دو نوع بهاره و پاییزه کشت می‌شود که محصول
            دهی پاییزه آن بیشتر است. علاوه بر خود گندم، کاه آن نیز جهت تغذیه دام
            مورد استفاده قرار می‌گیرد و مشتری خاص خودش را دارد و بعد از برداشت
            محصول، زمین آن نیز چراگاه گوسفندان خواهد شد. همچنین کشت گندم مورد
            حمایت های دولت واقع شده و کود شیمیایی و بذر نیز به شکل یارانه ای در
            اختیار کشاورزان قرار می گیرد؛ بنابراین توسعه این کشت توجیه اقتصادی
            دارد.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            نیز استفاده می شود و در تهیه غذای کودک نیز کاربرد دارد. جوشانده جو
            داروي خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین
            آورنده کلسترول خون است.
          </p>
          <p>
            پیاز از دیگر محصولاتی است که در این شهرستان کشت می شود و قابلیت خوبی
            برای افزایش تولید این محصول وجود دارد اما با توجه به مصرف زیاد آب
            توسط این محصول، لازم است در کشت آن زیاده روی نشود.{" "}
          </p>
          <p>
            پياز محصولی است که به صورت یک‌ساله كشت می‌شود. این گیاه متعلق به فصل
            خنک است و بهترین دما برای جوانه زدن بذر پیاز 18 درجه سانتی‌گراد و
            حداقل و حداکثر دما برای این مرحله از رشد به ترتیب 7 و 29 درجه
            سانتی‌گراد است. این محصول از مهم‌ترین محصولاتی است که در سطح وسیعی
            در تمام دنیا کشت می‌گردد و به‌عنوان چاشنی و طعم‌دهنده در اکثر غذاها
            استفاده می‌شود و دارای مصارف پزشکی و دارویی متعددی است؛ بنابراین
            بازار مصرف خوبی داشته و توسعه آن توجیه اقتصادی دارد.
          </p>
          <p>
            در شهرستان کنگان گیاهان دارویی نیز به صورت خودرو و کشت شده وجود
            دارند و می توان در رابطه با توسعه کشت آن ها اقدام کرد. البته باید
            توجه داشت که گیاهان دارویی نیز باید امکان سنجی شوند، یعنی باید بررسی
            شود که چه گیاهی با شرایط شهرستان مانند خاک و اقلیم آن سازگاری دارد.
            تقاضای مصرف گیاهان دارویی به علت روی گردانی از داروهای شیمیایی و یا
            حتی استفاده برخی از این محصولات در تولیدات کارخانه‌های بزرگ دارویی
            همواره رو به افزایش است. از این گیاهان نه تنها برای درمان بیماری‌ها
            بلکه در صنایع کنسروسازی، نوشابه سازی، ‌عطر سازی و غذایی نیز استفاده
            می‌شود.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوانشان روح و جان فرهنگ و هنر به یادگار مانده از نیاکان خویش
            را جاودانه می‌سازند. در شهرستان کنگان در زمینه تولید صنایع دستی
            فعالیت هایی صورت می گیرد که در صورت حمایت و سرمایه گذاری بیشتر می
            تواند سودآوری خوبی در پی داشته باشد. از جمله کسب و کارهایی که در این
            شهرستان در زمینه صنایع دستی فعالیت بیشتری صورت می گیرد می توان به
            حصیربافی و گلابتون دوزی اشاره کرد.{" "}
          </p>
          <p>
            بعد از موارد فوق می‌توان به مزیت هایی مانند گلیم بافی و جواهردوزی
            اشاره کرد که در حال حاضر توسط برخی از مردم شهرستان انجام شده و در
            صورت وجود بازار مصرف، همچنان جای کار داشته و می‌توان این تولیدات را
            افزایش داد .
          </p>
          <p>
            گلیم بافی از دیگر صنایع دستی این شهرستان است که قابلیت گسترش آن وجود
            دارد. گلیم به عنوان یکی از قدیمی ترین دست بافت های بشر، از شاخه هاي
            قاليبافي است و در آن از طرح هاي مختلف محلي استفاده مي شود. هر چند در
            گذشته گلیم به عنوان یک زیرانداز شناخته و بافته می شد اما امروزه با
            توجه به زیبایی نقوش و کیفیت بافتی که دارد از آن در هنرهای تلفیقی
            همچون روکش های مبلمان، دوخت کیف های چرمی، وسایل تزیینی و غیره
            استفاده های بسیاری می شود.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
