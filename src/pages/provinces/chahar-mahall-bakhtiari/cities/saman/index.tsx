import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-09"].cities["IR-0904"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        livestock: "دامداری",
        food_industry: "صنایع غذایی",
        services: "خدمات",
        agriculture: "زراعت",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        fisheries: "شیلات",
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
            شهرستان سامان یکی از شهرستان‌های استان چهارمحال و بختیاری است که در
            سال ۱۳۹۱ به شهرستان ارتقا یافت. این شهرستان از جنوب به شهرستان
            شهرکرد، از غرب به شهرستان بن و از سمت شمال و شرق به استان اصفهان
            محدود می گردد. جمعیت شهرستان طبق سرشماری سال 1395، تعداد 34616 نفر
            بوده است. وضعیت طبیعی شهرستان سامان تقریباً کوهستانی و دارای تپه و
            ماهورهای متعدد و سرسبز است. شکل زیر موقعیت شهرستان سامان را نشان می
            دهد.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها
            به عنوان ورودي به نرم‌افزار داده‌شده و خروجي نرم‌افزار هم‌پوشاني اين
            دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين اولويت‌بندي‌ها
            توسط كارشناسان و افرادخبره هر شهرستان بازبيني و اصلاح مي‌شوند. يكي
            از منابع تحليل همين ليست مزيت‌سنجي اصلاح‌شده‌است. يكي ديگر از منابع
            تحليل، مصاحبه با كارشناسان و متخصصين حوزه اشتغال هر شهرستان است. در
            هر شهرستان با حداقل 3 نفر از اين افراد مصاحبه انجام مي‌شود. اين
            مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در صورت وجود تناقض و ابهام
            بين اين 3 مصاحبه و ليست مزيت‌سنجي، مصاحبه‌هاي تكميلي و حتي مصاحبه
            بيشتر هم صورت مي‌گيرد تا تيم تحليل به نتيجه نهايي مطلوب دست‌يابد.
            بنابراين خروجي هر شهرستان از تجميع مصاحبه‌ها و ليست مزيت‌سنجي حاصل
            مي‌شود. در ادامه تحليل شهرستان سامان ارائه‌شده‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همانطوريكه در قسمت مقدمه اشاره‌شده مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به
            ترتيب اولويت مشخص شده‌است. در تحليل به مشاغل موجود، مشاغل قابل توسعه
            و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد آن‌ها در
            شهرستان وجوددارد، اشاره شده‌است. مزيت‌هاي شغلي به ترتيب اولويت در
            ادامه آورده شده‌است.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از مشاغل رایج در بین مردم شهرستان سامان است. شرایط
            اقلیمی ویژه‌ی منطقه و واقع شدن باغات در حاشیه رودخانه زاینده رود
            باعث شده تا منطقه سامان پتانسیل ویژه ای برای احداث باغات گردو و
            بادام داشته باشد. باتوجه به تولید بادام مرغوب و با کیفیت و صادرات آن
            به مناطق و حتی کشورهای دیگر، افزایش تولید بادام مزیت بالاتری دارد.{" "}
          </p>
          <p>
            گياهان براي داشتن رشد مطلوب نياز به شرايط خاصي از نظر شدت نور، دماي
            روزانه، دماي‌شبانه، ميزان رطوبت نسبي هوا و رطوبت خاک دارند. براي
            توليد و پرورش تجاري گياهان با کيفيت بالا و در تمام طول سال بايد
            شرايط محيطي مطلوب مهیا شده و عوامل خسارت زا نظير آفات و بیماری ها،
            باد، طوفان هاي ويرانگر، سرما و يخبندان و ...کنترل شوند. گلخانه محیطی
            است که به راحتی می توان در داخل آن شرایط محیطی را تحت کنترل درآورد و
            به سمت رشد مطلوب گیاه سوق داد. گلخانه‌ها که از نظر اندازه متغیرند
            گیاهان را از سرمای بیش از حد زمستان یا گرمای بیش از حد تابستان حفظ
            می‌کنند. کشاورزی در گلخانه ها نسبت به کشاورزی در فضای آزاد و در زمین
            های کشاورزی دارای دردسر و مشکلات کمتری است، به علاوه بازه ی زمانی
            برای به ثمر نشستن و برداشت محصولات نیز نسبت به کشاورزی سنتی، کوتاه
            تر است. به همین منظور در این زمینه می توان گلخانه هایی با هدف پرورش
            گل و گیاه زینتی، سبزیجات، گیاهان دارویی و صیفی جات احداث نمود.
          </p>
          <p>
            تولید نشاء در گلخانه از دیگر کسب‌وکارهایی است که به دلیل رونق
            باغداری در شهرستان مزیت دارد. با شرایط امروز منطقه، تغییر کشت از
            فضای باز به گلخانه ضروری بوده و با توجه به گسترش گلخانه‌ها نیاز به
            بذر و نشاء مرغوب نیز بالاتر می‌رود. با توجه به افزایش هزینه‌های
            تولید ازجمله افزایش قیمت بذر و محدودیت نهاده‌های تولید، استفاده از
            نشاء به‌جای کشت مستقیم بذر، ضروری به نظر می‌رسد. کاشت نشاء به دلایل
            زیر از مزیت‌ و جذابیت‌های اقتصادی بیشتر در مقایسه با کاشت بذر
            برخوردار است. این دلایل عبارت‌اند از: افزایش دوره برداشت به‌ویژه در
            مناطق سردسیر، تراکم مناسب بوته، افزایش عملکرد محصول پاییزه، کاهش
            مصرف آب تا 40 %، حداقل توقف رشد در مرحله انتقال، کاهش هزینه بذر،
            کاهش هزینه‌های جاری، یکنواختی رشد، محافظت محصول در برابر تگرگ و
            سرمازدگی و مبارزه مؤثر با بیماری، آفات و علف‌های هرز. از جذابیت‌های
            مالی کشت گلخانه‌ای نشاء، می‌توان به افزایش تعداد برداشت‌ها در سال،
            افزایش برداشت محصول نسبت به سطح زیر کشت، تعیین زمان بهره‌برداری
            محصول و کاهش تعداد کارگران اشاره کرد.
          </p>
          <p>
            آلوئه‌ورا از دیگر محصولات باغی است که قابلیت تولید در سطح شهرستان را
            دارد. گونه های مختلف آلوئه ورا گیاهانی مقاوم به گرما، خشکی،
            بیماری‌ها، آفات و حتی شوری هستند. علت مقاومت زیاد آن ها ساختار
            مرفولوژیکی این گیاه است و بذر آن ها نیز در شرایط اقلیمی مناسب و در
            دمای 21درجه سانتی گراد سبز می شوند. البته این گیاهان به سرما بسیار
            حساس هستند به طوریکه در دمای زیر 10درجه سانتی گراد رشد آن ها متوقف
            می شود. آلوئه ورا به رطوبت بالا، آب ایستایی و آبیاری زیاد حساس است.
            از این رو آبیاری گیاهان باید زمانی انجام شود که خاک آن ها کاملا خشک
            باشد. چنانچه این گیاه در مناطق گرم و خشک کاشته شود باید تحت آبیاری
            به موقع قرار بگیرد. آلوئه ورا را در هر نوع خاکی می توان کاشت ولی خاک
            های سبک که از زهکشی مناسبی برخوردار باشند برای کاشت این گیاه توصیه
            می شود. بازار و جایگاه آلوئه ورا در کشور جدید می‌باشد و آن چنان که
            باید جایگاه خود را پیدا نکرده اما این گیاه از اندک گیاهان دارویی است
            که علاوه بر مصرف دارویی در حوزه های آرایشی (مایع، ژل، کرم، لوسیون) و
            تغذیه ای (عصاره و نوشیدنی) نیز کاربرد دارد.{" "}
          </p>
          <p>
            زغال اخته که برای رشد مناسب نیاز به رطوبت دارد، گیاهی است آبدوست و
            در کنار جریان های دائمی آب مانند رودخانه ها و چشمه ها بهتر رشد می
            کند. در واقع می توان گفت مهم ترین فاکتور در پرورش درختچه زغال اخته
            کم آبی است که موجب ایجاد تنش، ریزشدن میوه ها و زردشدن برگ های این
            درخت می شود. این میوه تحمل متوسطی نسبت به خشکی دارد و همچنین در
            رابطه با کیفیت آب باید گفت که به شوری آب حساس است. اگرچه کاشت این
            محصول در شهرستان سامان انجام نشده است ولی باتوجه به شرایط منطقه
            انتظار می رود محصول مرغوبی تولید شود؛ بنابراین فعالیت در این زمینه
            پیشنهاد می‌شود.
          </p>
          <p>
            از دیگر کشت های جدید و پرسودی که قابلیت اجرا در شهرستان سامان را
            دارند، کاشت درخت پالونیا با هدف تولید چوب است. درخت پالونیا به دلیل
            تحمل بالا در برابر گرما، خشکی وعدم حساسیت به انواع خاک، کسب و کار
            کاشت درخت پالونیا را تبدیل به یک فرصت سودآور در تجارت جهانی کرده
            است. درخت پالونیا علاوه بر صنعت چوب، به علت زیبایی، سریع الرشد بودن
            و جذب آلاینده های هوا در جنگل کاری سریع و توسعه فضای سبز شهری مناسب
            است. رشد درخت پالونیا بسیار سریع است و در طی سه هفته از شروع کاشت به
            اندازه یک وجب رشد می کند. این درخت در سن 5 سالگی به بلوغ رسیده و چوب
            آن قابل بهره برداری و استفاده است. نرمی و فرم پذیری چوپ درخت پالونیا
            ،گزینه مناسبی در صنایع مبلمان سازی است. از چوپ درخت پالونیا علاوه بر
            تولید مبلمان در درب و پنجره، ساخت آلات موسیقی، روکش سازی، تخته های
            چند لایه، خمیرکاغذ، ساخت جعبه و کانتینرهای چوبی استفاده می شود.گرده
            زایی و شهدزایی بالای شکوفه های درخت پالونیا ،تغذیه ی مناسب برای
            زنبورعسل و مواد معدنی موجود در برگ بزرگ این درخت تقویت کننده ی خاک
            (خاک برگ و کود سبز) و تغذیه دام می باشد. همچینین در مصارف دارویی
            تأثیرات مثبتی بر روی کبد، کلیه و کیسه صفرا دارد.{" "}
          </p>
          <p>
            درخت فندق از گونه های کم توقع و مقاوم در برابر عوامل نامساعد محیطی
            است. مناطق با شرایط اقلیمی معتدل و کوهستانی برای توسعه این محصول
            مناسب هستند. ضمناً وجود رطوبت کافی در رشد و پرورش این محصول امری
            ضروری است. مشتریان فندق بازارهای خشکبار و آجیل فروشان هستند. از این
            محصول همچنین در صنعت شکلات و بستنی استفاده می شود. از میوه فندق،
            روغن هم به دست می آید که علاوه بر مصرف خوراکی در صنایع عطرسازی و
            نقاشی نیز کاربرد دارد. علاوه بر آفات و بیماری‌هایی که درختان فندق را
            تهدید می کند،‌ اختلاف قیمت بین فندق خریداری شده از کشاورز و قیمتی که
            در مغازه ها به فروش می رسد، دغدغه تمام باغ داران می باشد، که با
            تبلیغ و بازاریابی مناسب می توان این اختلاف قیمت را از بین برد. با
            توجه به پتانسیل شهرستان در حوزه باغداری این کشت نیز می تواند توسعه
            پیدا کند و در کنار تولیدات گردو وبادام، انجام شود.
          </p>
          <p>
            احداث باغات آلبالو، هلو، شلیل، گیلاس، انگور و آلو با توجه به اینکه
            بازدهی خوبی در شهرستان سامان داشته اند و با شرایط اقلیمی این منطقه
            سازگار هستند برای گسترش بیشتر دارای مزیت هستند. البته باید گفت که
            این محصولات اولویت پایین تری نسبت به سایر محصولات باغی منطقه هستند.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری یکی دیگر از مشاغل رایج در شهرستان سامان است. دامداری با یکی
            از مهم ترین نیازهای انسان، یعنی نیاز به منابع غذایی و خصوصا منابع
            پروتئینی مرتبط می‌باشد، که توجه به آن امری ضروری است. فعالیت در این
            حوزه شغلی و افزایش بهره وری در آن، می تواند از راهکارهای توسعه
            اقتصادی و عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب شود.{" "}
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
            برجا است و هر میزان تولید به راحتی به فروش خواهد رسید. از این رو بحث
            رقابت در این حوزه چندان مطرح نبوده و جزء دغدغه‌های پرورش‌دهندگان
            نیست. گوسفند لری بختیاری از نژادهای پرورشی در شهرستان است که افزایش
            پرورش آن مزیت دارد. این گوسفند را در دسته گوسفندان گوشتی تقسیم‌بندی
            می‌کنند.
          </p>
          <p>
            از دیگر نژادهایی که برای پرورش در شهرستان سامان پیشنهاد می شود، نژاد
            رومانوف است. گوسفند رومانوف جزء به صرفه ترین و بهترین گوسفندان گله
            گوشتی – زایشی است. این نوع گوسفند، یک گوسفند روسی است که اصل ‌نژاد
            آن متعلق به دره ولگا، در شمال غرب مسکو است. رومانوف یک ‌نژاد خالص
            بوده و از تلاقی نژاد‌ها به‌وجود نیامده است. باروری بسیار خوب،
            بالاترین میزان چندقلوزایی، فصل تولیدمثل بسیار طولانی، امکان تولیدمثل
            در تمام طول سال، سازگاری و عادت کردن به آب و هوای سرد و خوراک محلی
            برخی از ویژگی‌های خوب این نژاد است. نژاد رومانوف گرچه از دسته
            گوسفندان گوشتی است؛ اما پشم این نژاد بسیار محکم و باکیفیت است و
            سالانه 5/4 کیلوگرم پشم قابل استحصال دارد که از جنبه اقتصادی برای
            پرورش‌دهنده سرمایه ساز است.{" "}
          </p>
          <p>
            به طورکلی بز به‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر و گوشت
            در مناطق مختلف پرورش داده می‌شود. جثه کوچک، کم توقع بودن و مقاومت در
            برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز به‌عنوان حیوانی
            محبوب در بین دامداران تلقی شود. در نقاط مختلف از این حیوان علاوه بر
            تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز استفاده می‌شود. بز
            سانن یک نژاد شیری پرتولید است که نسبت به بزهای بومی، تولید شیر بسیار
            بیشتری دارد و می‌تواند بخشی از نیاز کشور به شیر و پروتئین حیوانی را
            تأمین نماید. نرخ تبدیل مواد خوراکی به شیر در بزهای سانن بالاتر
            می‌باشد که این امر موجب افزایش بازدهی بز سانن از خوراک مصرف شده توسط
            آن می‌شود. کسب و کار پرورش بز سانن موجب اشتغال‌زایی و رغبت بیشتر
            جوانان به امر دام‌پروری می‌شود. هر کیلوگرم شیر بز با قیمت بیشتری
            نسبت به شیر گاو فروخته می‌شود و در نقاط مختلف کشور طرفداران خاص خود
            را دارد.
          </p>
          <p>
            همچنین منطقه سامان شرایط مناسبی را برای پرورش گاو دارد و در این
            زمینه هم واحدهایی به صورت صنعتی فعالیت می کنند. با توجه به کاهش دما
            در فصول سرد سال در شهرستان سامان و شرایط اقلیمی شهرستان، پرورش دام
            سمینتال پیشنهاد داده می شود. گاو سمینتال جزء بهترین گاو های شیری و
            گوشتی جهان است. افزایش وزن روزانه فوق‌العاده و گوساله دهی با فاصله
            365 روز، مقاومت بالا نسبت به بیماریهای عفونی و متابولیکی، عمر مفید
            بالا، مدیریت آسان این نژاد و همچنین سازگاری بسیار خوب و قابل توجه با
            محیط پرورش همان چیزی است که یک دامدار برای بقاء و پیشرفت به آن نیاز
            دارد. یکی دیگر از مزایای پرورش گاو سمینتال، به صرفه بودن در شرایط
            اقتصادی فعلی است زیرا این گاو با دادن کمترین علوفه و کنسانتره،
            بیشترین میزان شیر و گوشت را می‌دهد.{" "}
          </p>
          <p>
            علاوه بر پرورش گاوشیری، پرواربندی گوساله با هدف تولید گوشت هم مزیت
            دارد. پرواربندی گوساله در راستای تامین گوشت، می تواند مزیت موفقی
            باشد. حدود نیمی از گوشت قرمز کشور توسط گاوهای پروار شده تأمین
            می‌شود؛ بنابراین این بخش از دامپروری و دامداری دارای ظرفیت زیادی
            برای توسعه و پیشرفت دارد. مزایای ورود به عرصه‌ی پرواربندی گوساله
            دارای جنبه های مختلف است. از یک طرف، از پوست گاو گوشتی در چرم‌سازی
            استفاده می‌شود؛ از طرف دیگر از گوشت آن جهت استفاده در تغذیه انسان
            بهره برداری می شود. همچنین برای جلوگیری از واردات گوشت گوساله از
            کشورهای دیگر، تولید آن اهمیت دارد.{" "}
          </p>
          <p>
            زنبورداری از دیگر مشاغلی است که به سبب وجود باغات مختلف و تولید
            محصولات زراعی متنوع در شهرستان، قابل سرمایه‌گذاری است. پرورش زنبور
            عسل از جمله مشاغلی است که می تواند سود خوبی به همراه داشته باشد.
            باردهی گل ها و میوه ها با گرده افشانی توسط زنبور عسل افزایش می یابد.
            این مسئله باعث شده ارزش اقتصادی پرورش زنبور عسل بسیار بیشتر از ارزش
            ریالی حاصل از تولید عسل باشد. در طی فرآیند پرورش و نگهداری زنبورعسل،
            با ازدیاد کندوها می توان به فروش کندو نیز فکر کرد و به سود خوبی دست
            یافت. در مناطق گرمسیری از هر کندو یک بچه کندو گرفته می شود. در ضمن
            محصول مزرعه پرورش زنبور عسل صرفاً کندو و عسل نیست؛ موم، زهر و ژل آن
            نیز قابل فروش است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و عاملی مهم در توسعه پایدار امنیت غذایی کشور است.
            ایجاد صنایع غذایی، علاوه بر اشتغالزایی، باعث ارتقای سطح درآمد ارزی
            می‌شود که کاهش هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع
            را تا حد امکان ممکن می‌کند.
          </p>
          <p>
            همانگونه که پیش از این نیز بیان شد، سطح بالایی از بادام و گردو در
            شهرستان سامان تولید می گردد. به منظور ایجاد ارزش افزوده و صادرات
            گسترده تر، با ایجاد صنایع فراوری در این زمینه می توان برای جوانان
            شهرستان نیز ایجاد اشتغال نمود. طبق بررسی های انجام شده، فرآوری گردو
            و بادام و بسته بندی مناسب در این منطقه مزیت فوق العاده ای دارد که با
            اهتمام به آن می توان سود بسیار خوبی را کسب کرد. از جمله انواع فرآوری
            می توان به تهیه روغن، مزه دار کردن مغزها، بسته بندی مناسب و... اشاره
            نمود.
          </p>
          <p>
            تهیه چیپس میوه به دلیل فراوانی تولید میوه‌های باغی در شهرستان مزیت
            دارد. خشک کردن میوه‌جات، یکی از روش‌هاي جلوگیري از فساد میکروبی
            آن‌ها است. در این روش، در اثر کاهش میزان رطوبت، امکان فساد میکروبی
            بسیار کم شده و سرعت دیگر واکنش‌هاي مضر نیز، به مقدار قابل توجهی کاهش
            می‌یابد. خشک کردن، ضمن اینکه روي محصول اثر حفاظتی دارد، وزن و حجم آن
            را نیز به میزان چشمگیری کاهش می‌دهد، در نتیجه از هزینه‌های حمل و نقل
            و ذخیره‌سازي نیز می‌کاهد. با توجه به اینکه بخشی از بازار میوه خشک
            ایران، سهم محصولات وارداتی است، با تولید مشابه داخلی این میوه‌ها (از
            نظر نوع و کیفیت)، می‌توان مانع واردات و خروج میلیون‌ها دلار ارز از
            کشور شد. همچنین نیاز بیش از حد برخی از کشورها به این گونه محصولات
            (به دلیل شرایط ویژه اقلیمی آن‌ها، هزینه بالای حمل و نقل سبزیجات و
            میوه‌های تازه و محدود بودن زمان نگه‌داری آن‌ها)، فرصت مناسبی برای
            رونق تولید و صادرات چیپس میوه فراهم آورده است. در شهرستان سامان که
            تولیدات میوه های باغی نظیرگیلاس، آلبالو، هلو، انگور و شلیل با کیفیت
            بالایی تولید می شود، بستر مناسبی برای ایجاد این کسب وکار وجود دارد.
            مخصوصا اینکه در صورت عدم فروش و یا هردلیل دیگری میوه‌های تولیدی فاسد
            شده و باغدار را محتمل ضرر می کند. راه اندازی واحدی در این زمینه
            علاوه بر ایجاد اشتغال می تواند راه حل خوبی برای حل این مشکل باشد. به
            منظور فروش بهتر و ایجاد اطمینان خاطر برای مشتری، بااخذ مجوز از
            سازمان بهداشت می توان این تولیدات را در بسته بندی مناسب عرضه کرد.
          </p>
          <p>
            تولید لواشک نیز از دیگر راه های فرآوری میوه های باغی است. تازه ماندن
            و حفظ خواص میوه ها در فرآیند تولید لواشک، بیشتر از فرآوری های دیگر
            است. همچنین این محصول محبوبیت زیادی در بین مردم دارد و در صورت تولید
            محصول مرغوب و بهداشتی از یک سو وبازار یابی و حمایت مناسب از سوی دیگر
            می توان درآمد خوبی کسب کرد.
          </p>
          <p>
            با توجه به کشت گندم در شهرستان سامان و شهرستان همجوار آن یعنی
            شهرستان بن احداث کارخانه آرد به منظور فرآوری گندم مزیت دارد. با
            آسیاب کردن گندم، جوانه و سبوس یا همان پوسته از بخش آردی آن تفکیک
            می‌گردد. آرد با توجه به میزان سبوس جدا شده، به انواع مختلفی
            تقسیم‌بندی می‌گردد. از انواع آرد می‌توان به آرد قنادی، آرد ستاره،
            آرد سبوس گرفته و آرد کامل اشاره نمود که از این میان آرد کامل به لحاظ
            میزان سبوس بالای آن، دارای ارزش غذایی قابل توجهی است. لازم به ذکر
            است ورود به این حرفه نیازمند بررسی بازار منطقه است زیرا با احداث بیش
            از یک یا دو واحد، ظرفیت شهرستان اشباع می‌شود.
          </p>
          <p>
            ترشی و شور، بیشتر به‌عنوان یک چاشنی در کنار غذا مصرف می شود و به
            دلیل خاصیت اسیدی که دارد، باعث افزایش اشتها و میل به غذا خوردن در
            افراد می‌شود. این محصول یکی از فرآیندهای نگهداری طولانی‌ مدت صیفی‌ و
            سبزیجات است. در جوامع امروزی به دلیل افزایش مشغله افراد و شاغل بودن
            بسیاری از زنان، فرصت کافی برای تهیه آن در منزل و توسط خود افراد وجود
            ندارد و اکثر خانواده‌ها تمایل دارند ترشی و شور موردنیاز خود را
            به‌صورت آماده تهیه نمایند. بنابراین راه اندازی کسب‌ وکار تهیه ترشی و
            شور می‌تواند راهی برای پاسخ به این نیاز افراد جامعه و کسب درآمد
            باشد. ایجاد چنین کسب و کاری در شهرستان سامان از جمله مشاغل دارای
            مزیت برشمرده می شود.
          </p>
          <p>
            فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز به سرمايه‌گذاري
            زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته باشد. یکی از
            فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات دارای
            تکنولوژی و دانش فنی پیچیده ای نمی باشد و می‌توان با سرمایه‌ای اندک
            به این کسب و کار مشغول شد. خشک کردن و بسته‌بندی نیز از دیگر
            فرآوری‌های گیاهان دارویی است که می‌توان با فعالیت در آن‌ها به سود
            رسید. برای تهیه مواد اولیه موردنیاز این واحد باید به شهرستان های
            همجوار مراجعه نمود چون افراد شهرستان به باغداری و فعالیت در این
            زمینه بیشتر علاقه مند هستند و علی رغم وجود پتانسیل برای کشت گیاهان
            دارویی در شهرستان، مردم تمایل زیادی به پرورش گیاهان دارویی ندارند.{" "}
          </p>
          <p>
            برای تولید و بسته بندی نان های محلی تولیدی نیز ظرفیت های خوبی در
            شهرستان وجود دارد و در صورت تولید محصولات مرغوب حتی امکان صادرات به
            سایر شهرستان ها و استان ها نیز وجود دارد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            شهرستان سامان به عنوان نگین چهارمحال و بختیاری یکی از مهمترین
            شهرستانهای گرشگری این استان به شمار می رود، این شهرستان دارای پل های
            تاریخی بسیاری از قبیل پل زمانخان، پل هوره، پل کاهکش، پل چوبی و ...
            است که تاریخی بودن و معماری خاص انها در کنار رودخانه خروشان زاینده
            رود جاذبه های گردشگری بسیار ارزشمندی را در منطقه فراهم کرده است. از
            دیگر قابلیت های این شهرستان در جذب مسافر و گردشگر وجود و ثبت چهار
            روستای هدف تاریخی و گردشگری شامل یاسه چاه، هوره، چلووان و سوادجان در
            شهرستان سامان است که این روستاها با قابلیت هایی شامل نوع بافت
            معماری، ویژگیهای فرهنگی و اقلیمی منحصر به فرد، جاذبه های طبیعی،
            صنایع دستی و توجه به توسعه صنعت گردشگری در بخش روستایی حائز اهمیت
            هستند. باتوجه به وجود این جاذبه های گردشگری که سالانه در 6 ماه اول
            سال، استقبال زیادی از آن می شود، راه اندازی طرح های خدماتی مانند
            احداث اقامتگاه بومگردی و رستوران‌های بومی پیشنهاد بسیار خوبی است.{" "}
          </p>
          <p>
            از جمله دیگر طرح های خدماتی که به منظور جذب گردشگر و مردم منطقه می
            توان در شهرستان راه اندازی کرد، سینما و شهربازی در حاشیه پل زمانخان
            است که البته سرمایه گذاری زیادی را می طلبد و برای اجرای آن می بایست
            سرمایه گذاری ویژه ای کرد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی مناطق مختلف نقش‎های متعددی بر
            عهده دارد که از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه
            مورد نیاز صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف
            تولیدات سایر بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات
            کشاورزی، ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام
            برد.
          </p>
          <p>
            اگرچه زراعت در این شهرستان در سطح کمی انجام می شود اما ظرفیت های
            خوبی برای انجام آن وجود دارد. گندم یکی از محصولات زراعی است که در
            سطح شهرستان تولید می‌شود؛ باتوجه به مزایای تولید این محصول، افزایش
            سطح زیر کشت مزیت دارد. در میان محصولات کشاورزی، کاشت گندم نسبت به
            بقیه کم دردسرتر است.گندم در بازه زمانی حدودا هشت ماهه به ثمر نشسته و
            به مرحله سود دهی می رسد. خرید تضمینی گندم همه ساله توسط دولت انجام
            می گیرد. البته خود کشاورز هم می تواند گندم را بفروشد و درآمد خوبی
            کسب کند. کود شیمیایی و بذر نیز به شکل یارانه‌ای در اختیار کشاورزان
            قرار می گیرد؛ بنابراین گسترش تولید گندم ارزش افزوده زیادی را به
            دنبال دارد.
          </p>
          <p>
            برنج از دیگر محصولات زراعی است که سطح زیر کشت کمتری نسبت به گندم
            دارد. افزایش تولید این محصول نیز پیشنهاد می‌شود. البته باید به این
            نکته توجه داشت که کشت برنج به آب زیادی نیاز دارد و برای شروع کار
            باید این شرایط بررسی شود.
          </p>
          <p>
            تقاضای مصرف گیاهان دارویی به علت روی گردانی از داروهای شیمیایی و یا
            حتی استفاده شدن برخی از این محصولات در تولیدات کارخانه‌های بزرگ
            دارویی همواره رو به افزایش است. گیاهان دارویی گونه‌ها و مصارف مختلفی
            دارند. از این گیاهان نه تنها برای درمان بیماری‌ها بلکه در صنایع
            کنسروسازی، نوشابه سازی، ‌عطر سازی و غذایی نیز استفاده می‌شود.
            درشهرستان سامان گیاهان دارویی متنوعی از جمله آویشن، بادرنجبویه، به
            لیمو، کرفس کوهی، موسیر و قارچ کوهی تولید می‌شود. باتوجه به میزان
            استقبال از این محصولات، فعالیت در زمینه کشت گیاهان دارویی قابل
            سرمایه‌گذاری است.
          </p>
          <p>
            کلزا از جمله دانه‌های روغنی است که در سطح شهرستان کشت می‌شود و
            افزایش تولید آن مزیت دارد. کشت کلزا باعث از بین رفتن چرخه زندگی
            آفات، بیماری ها و علف های هرز گردیده و با کاهش جمعیت آنها موجب صرفه
            جویی در مصرف سموم و کاهش آلودگی های زیست محیطی می گردد. با توجه به
            آنکه زمان کشت کلزا در فصل پاییز است، نیاز گیاه به آب کم می‌باشد و با
            استفاده از نزولات جوی می توان به کشت آن اقدام نمود. کلزا با تولید
            مقادیر قابل توجهی علوفه می تواند در تغذیه دام های منطقه نقش موثری
            داشته باشد. همچنین برگردان بقای کلزا به خاک باعث افزایش حاصلخیزی خاک
            و بهبود ساختمان خاک خواهد شد. کشت کلزا به عنوان یک دانه روغنی بسیار
            مهم در تولید محصولات حوزه صنایع غذایی و یا تولید انواع نهاده‌های
            خوراکی دام و طیور متداول است. روغن کلزا ازجمله مشتقات این گیاه است
            که امروزه به دلیل سالم بودن و داشتن کمترین کلسترول و اسیدهای چرب
            اشباع ‌شده مورد استقبال قرارگرفته است. تحقیقات دانشمندان نشان می‌دهد
            که دانه کلزا 40-30 درصد روغن و کنجاله‌اش50-40 درصد پروتئین دارد.
          </p>
          <p>
            عدس از جمله حبوباتی است که کاشت و برداشت آن نسبت به سایر حبوبات ساده
            تر بوده و در هر آب و هوایی با دو روش دیمی و آبی قابل کشت است. این
            گیاه با هوای سرد هم سازگاری دارد و در فصل پاییز میزان ثمردهی آن
            بیشتر از بهار است. این گیاه به حاصلخیزی خاک کمک کرده و همچنین به
            عنوان کود سبز برای تقویت خاک استفاده می شود. می توان این محصول را در
            اراضی زراعی شهرستان سامان کشت نمود.
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
            شهرستان سامان به دلیل تولید میزان بالایی از گردو و بادام، زمینه خوبی
            برای ایجاد کسب و کارهایی از قبیل فراوری پوست خشکبار دارد. امروزه در
            اکثر صنایع مساله بازیافت پسماندها مورد توجه خاصی قرار گرفته است.
            صنایع تبدیلی، دیگر مانند گذشته پسماندها را جزء ضایعات به حساب
            نمی‌آورند و سعی می‌کنند با فرآوری آن‌ها، ارزش افزوده بیشتری برای
            صنایع خود ایجاد نمایند و همچنین به محیط زیست آسیب کمتری برسانند. یکی
            از پسماندهایی که اخیرا در کشور ما به شکل محدود مورد توجه قرار گرفته
            است، مساله پسماندهای حاصل از پوست کنی، فرآوری و بسته بندی خشکبار
            است. یکی از ساده‌ترین را‌ه‌های فرآوری پوست خشکبار، آسیاب کردن و
            تبدیل آنها به پودر است. با خرید یک دستگاه آسیاب مناسب جهت انجام این
            کار می توان پودر بدست آمده را به شکل ماده اولیه سایر صنایع از قبیل
            تولید خوارک دام وطیور، کاغذ، مقوا، MDF، نئوپان، فیبر، کف‌پوش و
            لمینیت به فروش رساند. بنابر مطالعات انجام شده قیمت پودر به دست آمده
            3 تا 4 برابر قیمت پوست خشکبار است. در صورت نداشتن توان مالی جهت خرید
            دستگاه آسیاب می‌توان با کارگاه‌‌هایی که دارای این دستگاه‌ها هستند
            همکاری نموده تا با بستن قرارداد و دریافت مبلغی این پوست‌ها را آسیاب
            کرده و پودری شبیه آرد سفید تحویل دهند. نوع دوم فرآوری که در آن نیاز
            به سرمایه بالاتر و جذب سرمایه گذار است تولید کربن فعال می باشد. کربن
            فعال ماده‌ای است که برای تصفیه استفاده می‌شود و از آن می‌توان در
            تصفیه خانه‌های بزرگ آب، صنایع پتروشیمی، نفت و گاز، صنایع غذایی و
            دارویی و همچنین پزشکی استفاده کرد. برای تولید هر کیلو کربن فعال به
            12 کیلو پوست پسته نیاز است و هم اکنون چین بیشترین صادرات کربن فعال
            به کشورمان را دارد. متاسفانه در کشور ما بخش زیادی از پوست خشکبار به
            شکل خام و با قیمت بسیار پایین به دو کشور چین و ترکیه صادر می‌شود .
            در حالیکه با راه‌اندازی صنایع فرآوری مربوطه، می‌توان از این پتانسیل
            قدرتمند برای ایجاد کسب و کاری پرسود به عنوان تولید مواد اولیه برای
            صنایع مختلف بهره برد و از خروج ارز از کشور جلوگیری کرد. از فواید
            دیگر این صنعت این است که سلولزهای پوست خشکبار می‌تواند جایگزین
            مناسبی برای چوب درختان و کاهش نیاز به سلولز درختان در صنعت باشد و
            کمک شایانی به بهبود شرایط زیست‌محیطی و نابودی کمتر جنگل‌های کشورمان
            نماید
          </p>
          <p>
            همانطوریکه در بخش باغداری و زراعت بیان شد محصولات متنوعی در شهرستان
            تولید می‌شود. برای نگه‌داری و عرضه به موقع این محصولات به بازار،
            شهرستان سامان نیازمند یک سردخانه است. از مهمترین مزایای استفاده از
            سردخانه میوه و سبزی می توان به جلوگیری از فساد محصول اشاره کرد. روند
            انواع فسادها از قبیل فساد فیزیکی، فساد شیمیایی یا تغییر رنگ محصول،
            فساد ناشی از وجود میکروارگانیسم ها و غیره با نگهداری در سردخانه ها
            به شدت کند شده و حفظ کیفیت محصول در زمان طولانی تر حاصل می گردد. از
            دیگر مزایای با اهمیت احداث سردخانه میوه، کنترل قیمت بازار است. ذخیره
            کردن میوه در سردخانه موجب می شود در ماه هایی که مصرف میوه بسیار است
            و فصل برداشت آن محصول خاص نیست، بازار با کمبود مواجه نشده و حباب
            قیمت ایجاد نگردد. در واقع با ساخت سردخانه میوه تعادلی در عرضه و
            تقاضا ایجاد می گردد و موجب خواهد شد از افزایش بی رویه قیمت که به ضرر
            مصرف کننده است و از کاهش بیش از حد آن که به ضرر باغداران است جلوگیری
            به عمل آید؛ بنابراین نقش سردخانه های میوه جات به عنوان حد واسط بازار
            و باغداران در این بین بسیار پر رنگ و حیاتی است.{" "}
          </p>
          <p>
            لازم به ذکر است در صورت دقت نکردن به بازارفروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد.
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازارفروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز جامعه به
            منابع غذایی، از اهمیت بالایی برخوردار است و سود سرشاری دارد. مرغ
            گوشتی از جمله طیور پرورشش در شهرستان است که باتوجه به نیاز منطقه و
            جامعه به گوشت سفید، افزایش تولید آن مزیت دارد. گوشت مرغ به سبب
            مزیت‌های فراوانی که دارد به عنوان منابع تامین پروتئین می تواند مطرح
            و نیاز عمومی منطقه و کشور را در این زمینه مرتفع نماید. ارزش غذایی
            بالای گوشت طیور، کم بودن افت پس از کشتار، سالم وبهداشتی بودن گوشت
            طیور، قابلیت هضم و جذب بالا، سرعت رشد سریع، صرفه جویی در جایگاه و
            زمین و برگشت سریع سرمایه از فواید پرورش مرغ گوشتی است.{" "}
          </p>
          <p>
            طبق بررسی‌های انجام‌شده پرورش مرغ بومی نیز به دلیل اینکه محدودیت
            خاصی برای محل پرورش ندارد قابل تولید در شهرستان است. باتوجه به
            مزایای پرورش مرغ بومی در صورت بازاریابی برای محصولات تولیدی حتی می
            توان به گسترش کسب و کار خود نیز فکر کرد. پرورش مرغ محلی نسبت به مرغ
            صنعتی تلفات کمتری دارد. مرغ بومی نسبت به بیماری‌ها، گرما و سرما
            مقاوت بیشتری دارد و این امر باعث سود دهی بیشتر می شود. هرچند تلفات
            در مرغداری ها اجتناب ناپذیر است اما در صورت رعایت بهداشت و
            واکسیناسیون می توان مرگ و میر مرغ ها را به حداقل رساند. اگر در پرورش
            مرغ بومی یا همان مرغ محلی از تجهیزات مدرن استفاده شود، سود بیشتری
            نصیب پرورش دهنده می شود. اما با خلاقیت می توان تجهیزات پرورش شامل
            :آبخوری ، دان خوری ، لانه تخم گذاری و…را با وسایل ساده ساخت. درواقع
            با کمترین تجهیزات می توان به پرورش مرغ بومی پرداخت.
          </p>
          <p>
            شترمرغ از جمله طیوری است که با شرایط آب‌وهوایی و اقلیم شهرستان
            سازگاری دارد و افزایش پرورش آن پیشنهاد می‌شود. شترمرغ در گروه
            پرندگان طبقه بندی شده و گوشت آن جزء گوشت‌های قرمز محسوب می‌شود که
            نسبت به دیگر گوشت‌های قرمز کم چرب‌تر و سالم‌تر است به طوری که ۹۰
            درصد آن قابلیت هضم داشته و بعد از گوشت ماهی در رتبه دوم قرار دارد.
            پوست این پرنده از بهترین نوع چرم بوده، مقاومتش3 برابر چرم گاو است،
            ظرافت خاصی دارد و در تولید کیف و کفش با قیمت بالا به کار می رود.
            علاوه بر آن، از پر و تخم شترمرغ، ناخن و قرنیه چشم آن برای مصارف
            صنعتی، دارویی، زینتی و نیز تولید نخ بخیه استفاده می شود. همچنین با
            استفاده از پوکه تخم این پرنده در زمینه صنایع دستی و خلق آثار هنری،
            می توان اشتغال زایی کرد.{" "}
          </p>
          <p>
            سایر ماکیان همچون کبک در مناطق گرمسیری شهرستان، بوقلمون و بلدرچین
            تخم گذار نیز دارای مزیت است و می توان با ایجاد واحد هایی، پرورش آن
            ها را گسترش داد. البته باید به خاطر داشت که بحث بازاریابی در این
            زمینه اهمیت فراوانی دارد و باید شخص، مشتریان خود را پیداکند تا
            بتواند در مقیاس بزرگتری کار خود را انجام دهد. محصولات کبک نسبت به
            دیگر طیور به دلیل طعم و کیفیت مناسب و قیمت بیشتر، مشتریان خاص خود را
            دارد. از جهت دیگر به دلیل مقاومت نسبتاً بالای این پرنده در مقابل
            بیماری‌ها، تلفات آن نسبت به دیگر پرندگان کمتر است. با پرورش کبک
            به‌صورت صنعتی می‌توان بخشی از نیاز کشور در حوزه گوشت را تأمین کرد و
            از میزان واردات به داخل کشور کاست. همچنین می‌توان به بازار جوجه و
            تخم کبک اشاره نمود که قابلیت تولید و عرضه را دارد. گوشت بوقلمون
            دارای خواص غذائي ويژه ای است و محدوديت مصرف خاصي نيز ندارد؛ بنابراین
            مي تواند جايگزين مناسبی براي گوشت قرمز علی الخصوص در بيمارانی که
            مصرف گوشت قرمز برای آنها با محدوديت هایی همراه است، مطرح گردد. از
            ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز در يک
            لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد وزن يک لاشه 8 کيلوئي
            را تشکيل مي دهد. تولید بوقلمون گوشتی به دلیل به صرفه بودن تولید، در
            دسترس بودن نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز امکان
            انجام صادرات به کشورهای منطقه حائز اهمیت است.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در زمینه پرورش ماهی، شهرستان ظرفیت چندانی ندارد؛ اما اگر شخصی با اخذ
            مجوز و داشتن منابع آبی بخواهد اقدام به راه اندازی این کسب و کار کند،
            می تواند در زمینه پرورش ماهیان سردآبی فعالیت کند. نکته‌ی مهم در این
            رابطه تامین آب پاکیزه با دمای پایین است که برای سلامت ماهیان نکته
            مهمی می‌باشد.{" "}
          </p>
          <p>
            یکی دیگر از مشاغل مزیت‌دار در حوزه شیلات، پرورش ماهیان زینتی است. در
            سال‌های اخیر، با توجه به رواج آپارتمان‌نشینی و دور افتادن انسان از
            طبیعت، شرایط به‌گونه‌ای رقم خورده است که بازار ماهیان زینتی رونق
            گرفته و زمینه‌ساز ایجاد مشاغل مختلف شده است. به‌طوری‌که امروزه در
            بسیاری از شهرها، چندین مغازه به خرید و فروش این آبزیان مشغول هستند.
            پرورش ماهیان زینتی نیاز به آب کمی دارد و می‌توان از آب‌های شهری برای
            تولید آنها استفاده کرد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنايع دستي به آن گروه از صنايعي گفته مي شود كه مهارت، ذوق و بينش
            انسان در آن نقش اساسي دارد و يا اينكه تمام يا بخش اعظم مراحل ساخت
            فراورده هاي آن با دست انجام گرفته و در چارچوب فرهنگ و بينش هر منطقه
            و با ديدگاه هاي قومي ساخته و پرداخته مي شود. صنايع دستي بازتابي از
            تاريخ تمدن هر ملت و قومي است و مي تواند انتشار مؤثري براي فرهنگ و
            سنن مناطق مختلف باشد.{" "}
          </p>
          <p>
            قالیبافی از جمله صنایع دستی رایج در شهرستان است که با توجه به مهارت
            برخی مردم قابلیت توسعه دارد. شرط موفقیت در این زمینه، تولید محصولات
            متنوع و به روز و بازاریابی مناسب است. قالیبافی از مشاغل خانگی
            پردرآمدی است که تسهیلات خوبی به آن تعلق می گیرد. بسیاری از زنان خانه
            دار این هنر را یک فرصت شغلی مناسب می دانند چون در کنار کارهای روزمره
            می توانند به این کار بپردازند و درآمد خوبی کسب کنند. از آن جایی که
            قالی انواع مختلفی دارد می توان با آموختن دانش آن، محصولات متنوع و
            متناسب با ذوق و سلیقه افراد تولید و به بازار عرضه کرد. همچنین با
            تولید فرش با کیفیت می توان به صادرات در این زمینه فکر کرد. این کسب و
            کار را می توان در فضای کوچک و با سرمایه اولیه کم راه انداخت و با
            فروش محصول و افزایش مشتری، این کار را گسترش داد و زمینه اشتغال
            بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            چرم‌دوزی و تولید مصنوعات چرمی نیز می تواند در شهرستان موفق باشد و
            عرضه و تبلیغات مناسب، باعث فروش زیاد و گسترش کسب و کار می‌شود. خاتم
            کاری نیز از دیگر هنرهای زیبایی است که با آموزش مناسب و تولید محصولات
            متنوع، می‌توان به سود خوبی دست یافت.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل مرتبط با حوزه صنعت در شهرستان سامان مزیت بالایی ندارد؛ اگرچه
            احداث واحدهایی از قبیل تولید کارتن و سبد پلاستیکی به منظور بسته بندی
            وسهولت در حمل و نقل میوه‌های باغی و تولیدات کشاورزی که در سطح خوبی
            در شهرستان سامان تولید می شود، پیشنهاد می‌گردد.
          </p>
          <p>
            در حوزه صنعت، واحدهایی در زمینه تولید خوراک دام، تشک سازی، تولید
            کارتن و سبد میوه و تولید تیرچه بلوک فعال هستند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
