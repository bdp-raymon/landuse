import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-08"].cities["IR-0810"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        industry: "صنعت",
        services: "خدمات",
        livestock: "دامداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        agriculture: "زراعت",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        birds: "طیور",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان شمیرانات در نقطه شمالی استان تهران قرار گرفته است. ارتفاع از
            سطح دریا در بالاترین نقطه (توچال) ۳۹۷۵ متر می باشد. این شهرستان از
            شمال به استان مازندران، از جنوب به شهرستان تهران، از شرق به شهرستان
            های دماوند و پردیس و از غرب به استان البرز محدود می گردد. این
            شهرستان به دلیل واقع شدن در منطقه کوهستانی شمال استان تهران و نیز
            ارتفاعات البرز دارای آب و هوای نیمه مرطوب و مرطوب با زمستان های
            طولانی و سرد می باشد به طوریکه متوسط درجه حرارت در سردترین ماه سال،
            تا پایین تر از منفی ۱۵ درجه سانتی گراد می رسد. جمعیت شهرستان بر حسب
            سرشماری نفوس و مسکن سال 95، 47279 نفر گزارش شده است.
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
            مي‌شود. در ادامه تحليل شهرستان شمیرانات ارائه‌شده‌است.
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
            باغداری یکی از حوزه‌های رایج در شهرستان شمیرانات است. تولید اشتغال
            توسط باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار
            رونق می‌بخشد. کشاورزی و ازجمله باغبانی در توسعه ملی و افزایش رفاه
            عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع
            درآمد و عدالت اجتماعی موثر است.
          </p>
          <p>
            در یک نگاه کلی می توان گفت نقش کشاورزی و به خصوص باغداری در کاهش فقر
            بسیار چشمگیر بوده و در برقراری الگوی صحیح توسعه شهری مؤثر است و در
            صورت بی توجهی به این بخش، توسعه شهرنشینی، الگوی متمرکز و ناسالمی به
            خود می‌گیرد که پیدایش شهرهای بزرگ با هزینه زندگی بسیار بالا مثال
            بارز آن است.
          </p>
          <p>
            گیلاس و گردو و سیب از جمله محصولات باغی این شهرستان هستند که به
            مقدار زیاد و با کیفیت بالایی تولید می‌شوند؛ بنابراین توسعه کاشت این
            محصولات که طرفداران زیادی دارند از جمله برنامه های راهبردی برای
            توسعه اقتصاد شهرستان است.
          </p>
          <p>
            گردو، درختی چندساله و مقاوم است که پس از رشد کامل، هر درخت تا 18
            کیلوگرم تولید محصول خواهد داشت. محصول نهایی قیمت بالایی دارد که هم
            در داخل کشور طرفداران زیادی داشته و هم قابلیت بالای صادرات دارد. در
            صورت احداث باغ گردو، تا سال های سال نیاز به سرمایه گذاری و کشت
            دوباره وجود ندارد؛ زیرا درخت گردو دارای عمر طولانی است و تا ده ها
            سال قابلیت برداشت دارد. میوه گردو هم جزء معدود میوه هایی است که هیچ
            گونه نیازی به هزینه انبار در سردخانه ندارد و به دلیل ماندگاری
            طولانی، می تواند چند ماه و حتی چند سال مورد مصرف قرار گیرد. در ضمن
            چوب درخت گردو هم برای منبت کاری، خراطی و کنده کاری، ساخت مجسمه و
            اشیاء دکوری، ساخت آلات موسیقی و همچنین در دکوراسیون داخلی منزل و
            ساخت روکش های چوب بسیار پرکاربرد است. این چوب نیمه سنگین و نیمه سخت
            بوده و مقاومت مناسبی در برابر فشار، خمش، رطوبت و کشش دارد.
          </p>
          <p>
            سیب از میوه‌های مهمی است که می توان برای ماه‌ها انبار نمود؛ درحالیکه
            همچنان ارزش غذایی خود را حفظ می کند. توسعه باغات سیب در این شهرستان
            مزیت اقتصادی دارد. باید توجه داشت سیب معمولا آب نسبتا زیادی مصرف می
            کند که می توان با روش آبیاری قطره ای در شهرستان شمیرانات، در مصرف آب
            صرفه جویی کرد. البته مقدار آب مصرفی بر اساس کیفیت خاک منطقه و نوع
            پایه سیب و شرایط آب و هوایی متغیر است.
          </p>
          <p>
            از دیگر پیشنهادات خوب حوزه باغداری، می‌توان به احداث باغات زردآلو و
            آلبالو اشاره کرد که در حال حاضر وجود داشته و محصول با کیفیتی را
            تولید می‌کنند.
          </p>
          <p>
            گلخانه داری از جمله کسب و کار هایی است که در حال حاضر انجام می‌شود و
            با توجه به سازگاری با شرایط شهرستان، قابلیت توسعه و سرمایه گذاری را
            دارد. گلخانه های فعال در این شهرستان بیشتر صیفی جاتی مانند خیار و
            گوجه را پرورش می‌دهند. گياهان براي داشتن رشد مطلوب نياز به شرايط
            خاصي از نظر شدت نور، دماي روزانه، دماي‌شبانه، ميزان رطوبت نسبي هوا و
            رطوبت خاک دارند. براي توليد و پرورش تجاري گياهان با کيفيت بالا و در
            تمام طول سال بايد شرايط محيطي مطلوب مهیا شده و عوامل خسارت زا نظير
            آفات و بیماری ها، باد، طوفان هاي ويرانگر، سرما و يخبندان و ...کنترل
            شوند. گلخانه محیطی است که به راحتی می توان در داخل آن شرایط محیطی را
            تحت کنترل درآورد و به سمت رشد مطلوب گیاه سوق داد. گلخانه‌ها که از
            نظر اندازه متغیرند گیاهان را از سرمای بیش از حد زمستان یا گرمای بیش
            از حد تابستان حفظ می‌کنند. کشاورزی در گلخانه ها نسبت به کشاورزی در
            فضای آزاد و در زمین های کشاورزی دارای دردسر و مشکلات کمتری است، به
            علاوه بازه ی زمانی برای به ثمر نشستن و برداشت محصولات نیز نسبت به
            کشاورزی سنتی، کوتاه تر است. اما با این وجود پرورش گلخانه ای محصولات
            نیز نیاز به مراقبت های خاص خود را دارد.
          </p>
          <p>
            پرورش قارچ نیز در شهرستان به میزان کمی درحال انجام است و قابلیت
            گسترش و جلوگیری از واردات را دارد.
          </p>
          <p>
            میزان مصرف قارچ در سال های اخیر رشد خوبی داشته و سرانه مصرف بالا
            رفته است. مشتری داشتن این محصول از یک سو و غنی از پروتئین و ویتامین
            بودن آن از سوی دیگر، باعث شده که جایگزین مناسبی برای گوشت باشد.
            پرورش قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک
            شروع کرد. یک دوره کامل پرورش قارچ 60 روز طول می کشد که قابلیت کاهش
            به 35 روز را دارد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            شمیرانات، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما پتانسیل
            های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای
            صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            در این شهرستان تعدادی معدن در زمینه تولیدآهک، گچ، شن و ماسه، سنگ های
            زینتی و ... وجود دارد؛ اما متاسفانه این معادن فراوری نمی‌شوند و مواد
            استخراج شده به صورت خام به فروش می‌رسند؛ بنابراین فراوری معادن
            ازجمله ظرفیت‌های مهم اقتصادی منطقه است که فعال سازی کامل آن‌ها با در
            نظر داشتن اصول زیست‌محیطی می‌تواند نقش مهمی درتوسعه درآمدهای اقتصادی
            شهرستان شمیرانات و همچنین سرعت یافتن روند تولید و اشتغال استان داشته
            باشد .
          </p>
          <p>
            علیرغم اینکه تولیدی پوشاک در این شهرستان وجود دارد، برخی از اقلام
            مورد نیاز به شهرستان وارد می‌شود؛ لذا کار کردن در زمینه تولید پوشاک
            از جمله پیشنهادات مناسب برای دستیابی به اشتغال پایدار است .{" "}
          </p>
          <p>
            تولید مصالح ساختمانی و همچنین تیرچه و بلوک نیز از جمله پیشنهاداتی
            است که به دلیل رونق ساخت و ساز در شهرستان، پتانسیل های سوددهی را
            دارد.
          </p>
          <p>
            با توجه به میزان تولید محصولات زراعی و باغی شهرستان فعالیت در حوزه ی
            تولید سبد و کارتن باعث می شود تا واردات این مورد از استانهای اطراف
            کاهش یابد و برای جوانان این منطقه اشتغال زایی رخ بدهد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از فعالیت هایی است که با
            سودآوری بسیاری همراه است و در شهرستان شمیرانات نیز ظرفیت های
            بسیارخوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد. شهرستان
            شمیرانات یکی از مناطق توریستی است که خیلی از مردم به دلیل زیبایی آن
            تمایل دارند به آن سفر کنند. همچنین به لحاظ فرهنگ و تمدن، آب و هوا و
            جاذبه های طبیعی سر آمد شهرستان ها است.
          </p>
          <p>
            شهر هویزه روستای زیبای دربندسر، دریاچه سد لتیان، کوه مهرچال، پارک
            جنگلی لویزان، آبشار دوقلو، آبشار اسون، آبشار پسنگ، آبشار سوتک، آبشار
            منظریه، پیست توچال، پیست دربندسر، پیست شمشک، پیست دیزین از جاده
            بالا، دیواره یخی هملون میگون، امامزاده قاسم (شمیرانات)، بقعه سلطان،
            آرامگاه‌های خواجه احمد، موسی، سید میر سلیم و مکان‌های تاریخی و چون
            مسجد امام حسن عسکری، قلعه دختر ضحاک، قصر ضحاک، گورستان زرتشتیان، تپه
            کله قندی، قبر تاج‌الدین، سعادت آباد و تپه حصارک، پارک جنگلی تلو،
            پارک جنگلی لویزان، باغ پرندگان لویزان وارامگاه ظهیر الدوله از جمله
            جاذبه های طبیعی، تاریخی و مذهبی این شهرستان هستند که میزان بازدید
            زیادی داشته و پتانسیل های سرمایه گذاری در زمینه گردشگری و راه‌اندازی
            مشاغلی مانند احداث رستوران بومی، اقامتگاه بومگردی و هتل و اقامتگاه
            را دارد.
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
            این حوزه است که پتانسیل بالایی برای سوددهی و سرمایه گذاری دارد.{" "}
          </p>
          <p>
            مجتمع تفریحی-سرگرمی به تاسیساتی گفته می‌شود که مجموعه ای از واحد های
            گردشگری ساخته شده است و هر کدام به صورت خود پذیرایی کار می‌کنند.
            فروشگاه ها، رستوران ها، اغذیه فروشی ها، تسهیلات ورزشی، فضای بازی و
            تفریحی، اقامتگاه ها، مراکز توریست گردانی و ... از جمله امکاناتی است
            که این مجتمع ها ارائه می‌دهند. همچنین در اکثر این تاسیسات، واحدهای
            ساخته شده‌ی دارای اتاق، مانند هتل، کلبه و ویلا عرضه می‌شود.
          </p>
          <p>
            چند سالی است که احداث مجتمع های خدماتی رفاهی بین راهی در جاده های
            کشور به منظور ساماندهی خدمات بین راهی و افزایش رفاه رهگذران جاده ها
            مورد توجه قرار گرفته است. لیکن قابلیت های بالقوه بسیاری در این مجتمع
            ها نهفته است که می توان از آنها در جهت نیل به اهداف بزرگتری همچون
            توسعه و توازن منطقه ای بهره برد. از سوی دیگر در نظر گرفتن نقش های
            جدید برای این مجتمع ها، می تواند گام های مهمی در جهت توسعه پایدار
            مناطق تلقی گردد و باعث شود که ادامه فعالیت مجتمع های خدماتی – رفاهی
            بین راهی و گسترش دامنه فعالیت آنها از نظر اقتصادی توجیه پذیر باشد.
            در این زمینه تبعات مثبت احداث این مجتمع ها، به ویژه جنبه های گردشگری
            همراه با تاثیرات متقابل آنها بر مردم منطقه و رهگذران جاده ها تا حدی
            است که بعضا این الزام را ایجاب می کند که نهادهای اجرایی برای احداث
            این مجتمع ها و کمک به استقرار فعالیت آن‌ها پیشقدم شوند.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به عنوان یکی از حوزه های بخش کشاورزی، در سطح گسترده ای در
            کشور انجام می شود و در نتیجه ی انجام این حرفه، سود اقتصادی خوبی کسب
            شده است. از آن جایی که حوزه دامداری با یکی از مهم ترین نیازهای
            انسان، یعنی نیاز به منابع غذایی و خصوصا منابع پروتئینی مرتبط
            می‌باشد، توجه به آن امری ضروری است. فعالیت در این حوزه شغلی و افزایش
            بهره وری در آن، می تواند از راهکارهای کاهش وابستگی به درآمد نفتی
            باشد و عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی کشور محسوب شود.
          </p>
          <p>
            زنبورداری در شهرستان در سطح گسترده ای انجام می شود و اقلیم سرد و خشک
            شهرستان برای این فعالیت بسیار مناسب است.
          </p>
          <p>
            پرورش زنبور اگر همراه با رعایت اصول علمی صورت پذیرد، می تواند
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
          <p>
            دامداری در شهرستان شمیرانات در سطح محدودی در حال انجام است. به این
            صورت که دامداری صنعتی در شهرستان احداث نشده است و فعالیت دامداری
            تنها در روستاها و بصورت سنتی انجام می شود و پرورش گوسفند های بومی به
            صورت داشتی بیشتر است. گاو هم خیلی کم از نژاد بومی در روستاها به چشم
            می خورد. با توجه به این مسئله می توان گفت احداث دامداری صنعتی پتاسیل
            سوددهی لازم را دارد.
          </p>
          <p>
            توان گوسفند برای تحمل اقلیم های متفاوت بالا است، جیره غذایی کمتر و
            در نتیجه هزینه کمتری نیاز دارد، تمامی فرآورده های دامی مانند گوشت،
            شیر، ماست، کره، و حتی پشم و پوست دام پرکاربرد هستند و فروش این
            فرآورده ها در تمامی روزهای سال انجام می‌شود. با توجه به فروش گوشت و
            سایر اجزای گوسفند و دست‌یابی به سود بالا، فعالیت در این زمینه مزیت
            دارد.
          </p>
          <p>
            امروزه با توجه به رشد جمعیت کشور و نیاز روز افزون جامعه به گوشت و
            مواد گوشتی و نقش مهم این محصولات در تامین پروتئین و غذای افراد
            جامعه، پرورش دام های پر بازده به منظور افزایش تولید و خودکفایی غذایی
            کشور، امری لازم و ضروری است. گاوهای بومی به لحاظ تنوع و اختلاف
            ژنتیکی، ویژگی های خاص نژادی و مقاومت های طبیعی ایجاد شده در آن ها طی
            قرن ها زیست در شرایط سخت محیطی و آب و هوایی مختلف به عنوان یک منبع
            عظیم تولید شیر و گوشت می تواند نقش موثر در تامین مواد پروتئین حیوانی
            و اقتصاد جامعه ایفا نماید. پوست گاو به عنوان یک محصول با ارزش دامی
            در صنعت چرم‌سازی استفاده می‌شود، حتی شاخ و سم و فضولات حیوان نیز
            ارزش اقتصادی داشته و به روش های مختلف مورد استفاده قرار می گیرد.
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
            در شهرستان شمیرانات سردخانه برای محصولات کشاورزی وجود ندارد و
            کشاورزان مجبورند محصولات خود را پس از برداشت فورا به مرکز میوه و تره
            بار تهران منتقل کنند. بنابراین می توان گفت احداث سردخانه از اصلی
            ترین نیاز های شهرستان است و پتانسیل بالایی جهت سودآوری دارد.
          </p>
          <p>
            از مهمترین مزایای استفاده از سردخانه میوه و سبزی می توان به جلوگیری
            از فساد محصول اشاره کرد. روند انواع فسادها از قبیل فساد فیزیکی، فساد
            شیمیایی یا تغییر رنگ محصول، فساد ناشی از وجود میکروارگانیسم ها و
            غیره با نگهداری در سردخانه ها به شدت کند شده و حفظ کیفیت محصول در
            زمان طولانی تر حاصل می گردد. از دیگر مزایای با اهمیت احداث سردخانه
            میوه، کنترل قیمت بازار است. ذخیره کردن میوه در سردخانه موجب می شود
            در ماه هایی که مصرف میوه بسیار است و فصل برداشت آن محصول خاص نیست،
            بازار با کمبود مواجه نشده و حباب قیمت ایجاد نگردد. در واقع با ساخت
            سردخانه میوه تعادلی در عرضه و تقاضا ایجاد می گردد و موجب خواهد شد از
            افزایش بی رویه قیمت که به ضرر مصرف کننده است و از کاهش بیش از حد آن
            که به ضرر باغداران است جلوگیری به عمل آید؛ بنابراین نقش سردخانه های
            میوه جات به عنوان حد واسط بازار و باغداران در این بین بسیار پر رنگ و
            حیاتی است.
          </p>
          <p>
            میزان میوه های تولید شده در شهرستان زیاد است و معمولا به صورت فله ای
            به فروش می رسند، در صورتیکه می توان انها را سورت و درجه بندی کرد. در
            واقع هدف از سورتینگ میوه، دسته بندی و درجه بندی انواع میوه بر اساس
            سایز و کیفیت است؛ به طوری که بتوان محصول نهایی را به صورت یک دست و
            یک اندازه در بسته بندی های مختلف در بازار ارائه نمود و مشتری نهایی
            در طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن باشد. بسته
            بندی نهایی میوه و سبزی پس از عملیات سورتینگ به منظور جابجایی آسان و
            همچنین حفاظت از محصول نهایی سورتینگ شده صورت می گیرد.
          </p>
          <p>
            تولید و بسته بندی کمپوست (افزودن کود شیمیایی به کود حیوانی) هم از
            کسب و کار های خوبی است که قابلیت سرمایه گذاری را دارد؛ زیرا در گذشته
            در حد مطلوبی انجام می شود و هم اکنون نیز در حد خانگی انجام می شود؛
            لذا مشکلی در خصوص تولید و بازار مصرف این مورد وجود ندارد. كود حيواني
            علاوه بر تأمين قسمتي از نياز غذایي محصول، ساختمان فيزيكي خاك را
            بهبود بخشيده تا ريشه محصول بهتر بتواند تنفس كند و فضاي بهتري را برای
            رشد و گسترش ريشه در اختيار داشته باشد؛ بنابراین طرفداران زیادی
            مخصوصا در بین باغداران دارد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            تولیدات باغی شهرستان شمیرانات در حوزه ی گردو، سیب و زرد آلو بسیار
            زیاد است و معمولا بخشی ازاین محصولات به صورت خام فروخته و بخش دیگر
            نیز معمولا خراب و دور ریخته می شوند، با توجه به اینکه محصولات فراوری
            شده این میوه ها بازار مصرف خوبی دارند، در نتیجه فراوری این محصولات
            دارای مزیت خواهد بود.{" "}
          </p>
          <p>
            محصولات فرآوری شده از زردآلو شامل کمپوت، آبمیوه، کنسانتره، چیس میوه
            و برگه زردآلو است. این محصولات به دلیل وجود بازار فروش مناسب و
            استقبال خوب توسط مردم شهرستان و حتی استان، با مزیت تولید همراه هستند
            و می توان در این زمینه سرمایه گذاری قابل توجهی انجام داد.
          </p>
          <p>
            روغن گردو یکی از گران‌ترین روغن‌های طبیعی موجود در بازار است. این
            روغن به‌راحتی دردسترس است و در تمام جهان شناخته‌شده می‌باشد. ولی
            بسیاری از مردم هنوز از این روغن همه‌کاره که خواص فراوانی دارد بهره
            نمی‌برند، زیرا از خواص روغن گردو آگاهی ندارند، اما با آگاهی دادن به
            مردم می توان بازار فروش این روغن را گسترده تر کرد. روغن گردو خواص
            فراوانی دارد که کمک به سلامت قلب و عروق، کمک به کنترل قند خون و
            دیابت، جلوگیری از ریزش مو، ، بهبود عملکرد مغز و کاهش خطر ابتلا به
            سرطان از این دست هستند. یکی دیگر از محصولاتی که از گردو می توان
            تولید کرد، ترشی گردو است. این ترشی خوشمزه علاوه بر خواص بی نظیر در
            کاهش سطح کلسترول نیز مفید است.
          </p>
          <p>
            با توجه به اینکه سالانه برداشت سیب در این منطقه زیاد است، صرف نظر از
            مقدار تازه خوری آن، می‌توان صنایع فراوری آن شامل تولید شهد، پوره،
            سرکه و کمپوت آن را ایجاد کرد تا علاوه بر اینکه از هدر رفت مقدار
            مازاد آن جلوگیری شود، سود خوبی هم نصیب سرمایه گذار شود.
          </p>
          <p>
            با توجه به باغات خوب میوه هایی مانند گیلاس و آلبالو فراوری محصولات
            تولیدی شامل تهیه چیپس میوه، میوه خشک، آبمیوه و سایر فراورده های میوه
            مانند مربا، لواشک، کمپوت و ... پتانسیل های لازم برای سرمایه گذاری را
            دارد.
          </p>
          <p>
            کنسانتره میوه ها از یک فرایند مرتب و متوالی تولید و این فرآیند در
            نهایت به تغلیظ منتهی می شود که امکان جابجایی را تسهیل می کند. فایده
            تولید کنسانتره در میوه ها این است که با حذف آب، وزن ماده غذایی کاهش
            یافته و حمل و نقل آن راحت تر و با صرف هزینه کمتر صورت می گیرد. به
            علاوه کنسانتره را به راحتی در هنگام مصرف با اضافه نمودن حلال (معمولا
            آب) به حالت اول برگردانده و استفاده می کنند. کنسانتره میوه در تولید
            آبمیوه، پاستیل های میوه ای، بستنی میوه ای و شیرینی مغزدار به صورت
            مستقیم کاربرد دارد.
          </p>
          <p>
            باتوجه به جایگاه صیفی جات در شهرستان و مصرف بالای فرآورده های آن
            توسط مردم، احداث واحد هایی جهت فرآوری صیفی جات در راستای تحقق اهداف
            اقتصادی مفید خواهد بود. لازم به ذکر است که در حال حاضر این عمل مانند
            تولید ترشیجات به صورت خانگی در حال انجام است.
          </p>
          <p>
            صنعت تولید رب گوجه فرنگی دارای کاربردهای فروانی از قبیل چاشنی و
            بهبود دهنده رنگ و طعم انواع غذا و ماده اولیه سس‌ها و کنسروها است. با
            توجه به اینکه کاشت گوجه فرنگی در این شهرستان وجود دارد، تولید رب از
            مزیت های قابل سرمایه گذاری است.
          </p>
          <p>
            پودر گوجه‌فرنگي محصولي است كه زمان زیادی از توليد آن در كشور
            نمي‌گذرد و در همین مدت هم توانسته جاي خود را در بازار باز كند. اين
            پودر به دليل داشتن وزن و حجم كمتر نسبت به ساير فراورده‌هاي
            گوجه‌فرنگي، باعث سهولت و صرفه‌جويي در حمل‌ونقل و بسته‌بندي شده و
            ماندگاري و عمر مفيد بيشتري دارد. از طرفي برخی آنتي ‌اكسيدان‌های
            موجود در گوجه‌فرنگي طی فرايند توليد رب از بين مي‌ رود اما اين مواد
            در پودر گوجه حفظ شده و از بين نمي‌روند. مزيت ديگر اين پودر نداشتن
            مواد نگهدارنده در تركيبات آن نسبت به رب است چرا كه رب، ماندگاري
            كمتري دارد و براي جلوگيري از اين حالت از مواد نگهدارنده بيشتري در
            ترکیب آن استفاده می‌ شود. پودر گوجه فرنگی در صنایع غذایی و دارویی
            دارای کاربردهای متنوعی است. از جمله کاربردهای گسترده این محصول
            می‌توان به کاربرد آن در مواد غذایی منجمد شده و نیمه آماده، سوپ‌های
            آماده، اسنک‌ها (شامل پفک، چیپس،...) و... اشاره نمود. به طور کلی می
            توان گفت از این محصول به عنوان چاشنی در تولید محصولات مختلف استفاده
            می‌شود.
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
            باشد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            زراعت بر خلاف باغداری در شهرستان شمیرانات انجام نمی شود. برای زراعت
            زمین بدون شیب و بایر لازم است درحالی که شمیرانات یک شهرستان کوهپایه
            ای و شیب دار است و پوشیده از درخت می باشد. به همین دلیل زراعت در این
            شهرستان مزیت ندارد. فقط مقداری گیاهان دارویی در دامنه کوه ها وجود
            دارد که خودرو است و بدون دخالت ساکنین بوده است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            شهرستان شمیرانات صنایع دستی خاصی ندارد. البته در گذشته قالیبافی
            انجام می شد و امروزه نیز در صورت وجود سرمایه و نیروی کار، احداث
            کارگاه قالیبافی و یا تولید تابلو فرش قابلیت سوددهی دارد.
          </p>
          <p>
            قالیبافی از مشاغل خانگی پردرآمدی است که تسهیلات خوبی به آن تعلق می
            گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب می دانند
            چون در کنار کارهای روزمره می توانند به این کار بپردازند و درآمد خوبی
            کسب کنند. از آن جایی که قالی انواع مختلفی دارد می توان با آموختن
            دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و به
            بازار عرضه کرد. همچنین با تولید فرش با کیفیت می توان به صادرات در
            این زمینه فکر کرد. این کسب و کار را می توان در فضای کوچک و با سرمایه
            اولیه کم راه انداخت و با فروش محصول و افزایش مشتری، این کار را گسترش
            داد و زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            در کنار انواع فرش ها، گلیم ها و جاجیم هایی که برای زینت کف اتاق ها و
            خانه ها به کار می روند، تابلو فرش ها هم برای آراستن دیوارهای منازل
            کاربرد دارند و می توان گفت تابلوفرش کالایی تزیینی و دکوری است.
          </p>
          <p>
            ایران یکی از کشورهای پیشرو در بافت و تولید این مدل از فرش هاست و عده
            زیادی در کشور به غیر از تولید فرش به تولید تابلوفرش می پردازند که به
            نظر می رسد به نوعی راهکاری برای زنده نگه داشتن کارگاه های تولیدی
            است. با توجه به اینکه برخی از افراد شهرستان در این زمینه مهارت های
            کافی را دارند، توسعه آن می‌تواند نقش مهمی در توسعه اقتصادی این
            شهرستان ایجاد کند.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شهرستان شمیرانات در حوزه ی شیلات فعالیت چندانی ندارد و بجای پرورش
            ماهی، ماهی مورد نیاز و تقاضا را از طریق واردات تامین می کند.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور نیز در شهرستان شمیرانات انجام نمی شود. زیرا اقلیم آب و
            هوایی شهرستان سرد و خشک است و برای پرورش ماکیان مناسب نیست. تجربه
            های صورت گرفته در این زمینه نشان می دهد که کسانی که در این زمینه در
            گذشته سرمایه گذاری کرده بودند، در زمستان جهت تامین گرما و دمای مورد
            نیاز به مشکل برخوردند و نتوانستند ادامه بدهند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
