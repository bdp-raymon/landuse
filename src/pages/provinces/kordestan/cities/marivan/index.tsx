import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-20"].cities["IR-2010"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        services: "خدمات",
        gardening: "باغداری",
        livestock: "دامداری",
        agriculture: "زراعت",
        birds: "طیور",
        fisheries: "شیلات",
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
            شهرستان مریوان یکی از شهرستانهای استان کردستان است که به علت داشتن
            کوه‌ها و دره‌های ژرف، جنگل‌ها و پوشش گیاهی مناسب در شمال و جنوب،
            اقلیم‌های گوناگونی را در خود ایجاد کرده است. همچنین قرارگیری آن در
            کنار دریاچه زریبار، اورامان و طبیعت زیبای منطقه، ترانزیت و واردات
            کالا در مرز ایران و عراق بر اقتصاد شهر افزوده است.
          </p>
          <p>
            شهرستان مریوان از شمال با شهرستان سقز، از شمال شرقی با شهرستان
            دیواندره، از شرق با سنندج، از جنوب شرقی با شهرستان سروآباد و از شمال
            غربی با دره شلیر هم مرز است. از غرب هم به شهر پنجوین شهرستان
            سلیمانیه کشور عراق با ۱۰۰ کیلومتر مرز مشترک محدود می‌شود. ارتفاع
            مریوان از سطح دریا ۱۳۲۰ متر است. شکل زیر موقعیت شهرستان مریوان را
            نشان می‌دهد.
          </p>
          <p>
            مریوان آب و هوای سرد و کوهستانی متمایل به معتدل سرد و حتی
            مدیترانه‌ای دارد. جریان‌های مدیترانه‌ای شهر مریوان را به شدت تحت
            تاثیر قرار می‌دهد و به همین خاطر، بارش‌های جوی زیادی در این منطقه به
            وجود می‌آید. این جریان‌ها از منطقه گذر کرده و با کوه‌های زاگرس
            برخورد می‌کند و قسمتی از رطوبت خود را به صورت برف و باران از دست
            می‌دهد.
          </p>
          <p>
            مریوان به علت بارش زیاد یکی از پرآب‌ترین مناطق غرب کشور و منطقه‌ای
            سرسبز و پوشیده از پوشش گیاهی غنی و متنوع است. میزان متوسط بارندگی
            بین ۵۰۰ تا ۹۰۰ میلی‌لیتر در سال است.
          </p>
          <p>
            طبق سرشماری سال ۱۳۹۵، جمعیت مریوان برابر با ۱۹۵ هزارو ۲۶۳ نفر است.
            طبق گفته مورخین کردها نژاد «ماد آریایی» هستند که از قدیمی ترین
            مردمان این منطقه به شمار می‌روند. مردم مریوان به زبان کردی و لهجه
            سورانی صحبت می‌کنند.
          </p>
          <p>
            نزدیک به ۹۳ درصد مردم مریوان پیرو دین اسلام و مذهب سنی شافعی هستند و
            بقیه نیز پیرو مذهب تشیع و سایر ادیان الهی همچون زرتشتی و مسیحی
            هستند.
          </p>
          <p>
            لباس مردم منطقه کردی بوده و به دلیل قرار گرفتن در منطقه کوهستانی از
            ویژگی‌های خاصی برخوردار است. این لباس یکی از زیباترین، متنوع‌ترین و
            پوشیده‌ترین پوشش‌ها محسوب می‌شود. پوشاک مردان و زنان کرد از تن‌پوش،
            سرپوش و پای‌افزار تشکیل شده‌است.
          </p>
          <p>
            مردم مریوان از لحاظ آداب و رسوم مشابه با کردهای دیگر مناطق هستند.
            رسوم گوناگون مناطق کردنشین پیوند با یکی از مراحل یا پدیده‌های تاریخی
            دارد. جشن‌های مذهبی، ملی و باستانی از جشن‌های مردم این منطقه است.
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
            جلوگیری از اتلاف و ضایع شدن محصولات می‌گردد. طبق بررسی های انجام شده
            و با توجه به گستردگی تولیدات کشاورزی و دامداری در شهرستان مریوان،
            کار در حوزه صنایع تبدیلی به جهت مرزی بودن منطقه، فرصت بسیار مناسبی
            برای سرمایه گذاری به شمار می‌رود.{" "}
          </p>
          <p>
            عسل مرغوب یکی از محصولات زیاد و با ارزش مریوان است. به سبب وجود
            مراتع و گیاهان دارویی در سطح شهرستان، عسل تولیدی از کیفیت بالایی
            برخورداراست؛ اما بسته بندی این محصول در مریوان انجام نمی‌شود.
            بنابراین بسته‌بندی عسل در شهرستان جواب می‌دهد. راه‌اندازی این کسب و
            کار، علاوه بر سودآوری و راحت‌ترکردن حمل‌ونقل، باعث جذب مشتری نیز
            می‌شود.
          </p>
          <p>
            با توجه به رونق دامداری در این شهرستان، ایجاد کشتارگاه صنعتی دام نه
            تنها نیاز این شهرستان است، بلکه افزایش كیفیت گوشت، كاهش مخاطرات
            بهداشتی و ارتقا سطح بهداشتی جامعه، ایجاد شرایط مناسب بهداشتی برای
            كشتار دام، به حداقل رساندن حمل و نقل دام به منظور كنترل بیماری ها،
            تغییر نظام سنتی كشتار و تبدیل تجارت دام زنده به تجارت گوشت را به
            همراه دارد.
          </p>
          <p>
            یک کارگاه برای بسته بندی خشکبار در این شهرستان دایراست؛ اما می توان
            در این حیطه فعالیت بیشتری کرد و تولید محصولات خشکبار بسته بندی شده
            را گسترش داد.
          </p>
          <p>
            احداث سردخانه در شهرستان لازم است؛ زیرا تولیدات باغی در این شهرستان
            زیاد است. ضمن اینکه احداث سردخانه برای محصولات کشاورزی، انگیزه کاشت
            محصولات را برای کشاورز بیشتر می‌کند.
          </p>
          <p>
            بسته بندی گوشت قرمز نیز از دیگز مزیت هایی است که به سبب رونق دامداری
            در این شهرستان، قابلیت سرمایه گذاری را دارد. یکی از روش‌های تازه
            ماندن گوشت، بسته‌بندی مناسب است. بسته بندی باید به گونه‌ای باشد که
            گوشت را در مقابل نفوذ طعم، بو، رنگ و سایر عوامل خارجی محافظت کرده و
            از خشک شدن و تبخیر سطحی جلوگیری کند. همچنین بسته بندی باید خواص حسی
            و ظاهری و سایر ویژگی‌های گوشت را حفظ و همچنین گوشت را در برابر
            آلودگی های میکروبی و سایر آلودگی ها نگهداری کند.
          </p>
          <p>
            فراوری پوست دام شامل استفاده از پوست گاو در صنعت چرم دوزی و همچنین
            استفاده از پشم و کرک گوسفند و بز در صنعت ریسندگی، ضمن ایجاد درآمد
            مناسب برای سرمایه گذار، سود خوبی هم نصیب دامدار می‌کند.
          </p>
          <p>
            با وجود اینکه واحدهایی برای تولید خوراک دام در شهرستان مریوان مشغول
            به کار هستند؛ اما این موارد همچنان جای کار دارند و می‌توان این گونه
            تولیدات را افزایش داد .مراتع مهمترین بخش از منابع تجدید شوندۀ کشور
            است که به دلیل پایین بودن هزینه تأمین علوفه از آنها در مقایسه با
            هزینه تولید علوفه از طریق کشت آبی، فشار زیادی بر آن وارد می شود. با
            توجه به افزیش دامپروری و مرغداری‌ها و پایین بودن ظرفیت تولیدی مراتع،
            این فشار بیشتر و بیشتر می‌شود و برای جلوگیری از تخریب مراتع باید به
            فکر منابع غذایی غیر مرتعی آنها باشیم. با توجه به اینکه محصول تولیدی
            توسط دام های موجود کشور به مصرف می رسد و همچنین میزان دام هر روز رو
            به افزایش است لذا هر سال نسبت به سال گذشته مقدار بیشتری علوفه و
            خوراک دام مورد نیاز است. با اجرای پروژه های صنعتی که از ضایعات
            کشاورزی و… خوراک دام، طیور و آبزیان با ارزش غذایی تولید بشود، هم
            غذای مورد نیاز دام‌ها تأمین می شود و کشور را به خودکفایی سوق می دهد
            و هم استفاده از مواد اولیه ارزانتر در تولید این محصول سبب خواهد شد
            تا قیمت تمام شده آن پایین تر و در نتیجه قیمت فروش آن نیز پایین باشد.
            تولید خوراک دام و طیور می تواند زمینه اشتغال خوبی را به طور مستقیم و
            غیر مستقیم برای افراد ایجاد کند. باتوجه به جمعیت دامی در شهرستان
            مریوان و نیاز این دام ها به استفاده از خوراک صنعتی، می توان در جهت
            احداث واحدی در زمینه تولید خوراک فعالیت نمود.
          </p>
          <p>
            برای فراوری و بسته بندی هر نوع محصول کشاورزی که در شهرستان تولید می
            شود می‌توان با تبلیغات مناسب روی بازار فروش داخلی و صادرات به کشور
            های دیگر نیز فکر کرد. در این خصوص بسته بندی حبوبات از جمله مواردی
            است که در صورت ایجاد موفق می‌شود؛ زیرا بازار مصرف آن فراهم است و
            سرمایه گذار مشکلی در این زمینه ندارد.{" "}
          </p>
          <p>
            در سال های اخیر با افزایش آگاهی مردم نسبت به مواد غذایی و توجه بیشتر
            آنها به سلامت و نقش مواد غذایی مفید، مصرف گوشت ماهی از جایگاه ویژه
            ای نزد مردم برخوردار شده و مصرف آن در جوامع بشری افزایش چشمگیری پیدا
            کرده است. همچنین با توجه به فسادپذیری بالای ماهی و لزوم وجود آن در
            سبد غذایی انسان، استفاده از روش های بسته بندی مناسب بسیار ضروری است؛
            لذا بسته بندی ماهیان پرورشی صرفه اقتصادی دارد.
          </p>
          <p>
            برای بسته بندی گوشت و تخم مرغ و طیوری مانند بوقلمون و بلدرچین در
            شهرستان قابلیت های زیادی وجود دارد؛ زیرا این شهرستان هم مرز با کشور
            عراق و دارای بازارچه مرزی است که فعالان در این حوزه ها می‎‌توانند
            محصولات خود را برای عرضه به این مناطق ببرند.
          </p>
          <p>
            در رابطه با موارد فوق لازم به ذکر است که با ایجاد بیش از یک یا دو
            مورد به حد اشباع می‌رسند و همچنین سرمایه گذار برای ایجاد هر مورد
            باید به بازار هدف و فرهنگ مصرف مردم توجه کند.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            با وجود وفور تولید محصولات کشاورزی در مریوان، بررسی‌ها نشان می‌دهد
            که سالانه مقداری از آن در مراحل کاشت، داشت و برداشت به ضایعات تبدیل
            می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از محصولات کشاورزی در
            یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال صورت
            می‌پذیرد. لذا صنایع غذایی می‌تواند زمان استفاده را افزایش دهد و از
            میزان ضایعات آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی،
            ایجاد درآمد و جلوگیری از اتلاف و ضایع شدن محصولات می‌گردد.
          </p>
          <p>
            با توجه به وجود باغات خوب توت فرنگی و گیلاس، فراوری آنها مانند تولید
            میوه خشک، آبمیوه، چیپیس میوه، مربا و ... در این شهرستان انجام
            نمی‌شود؛ لذا اقداماتی در این حوزه توجیه اقتصادی دارد.
          </p>
          <p>
            با توجه به تنوع آب و هوایی در مریوان، تقریبا تمامی انواع محصولات
            کشاورزی از جمله گوجه فرنگی با کیفیت بالا تولید می‌گردد. یکی از
            صنایعی که در قابلیت سرمایه گذاری را دارد، صنعت تولید رب گوجه فرنگی
            است که دارای کاربردهای فراوانی از قبیل چاشنی و بهبود دهنده رنگ و طعم
            انواع غذا، ماده اولیه سس‌ها و کنسروها است که باتوجه به تولید در حجم
            بالا، قابلیت توسعه را دارد.
          </p>
          <p>
            در صورت ایجاد واحدهای فراوری انگور مانند تولید شیره، کشمش، مویز و
            سرکه، به دلیل فواید زیاد، بازار مصرف و تقاضای بالا، علاوه بر اینکه
            درآمد زیادی برای سرمایه گذار به دنبال دارد، زمینه اشتغال مناسبی برای
            جوانان و به خصوص خانم های خانه دار فراهم می‌کند.{" "}
          </p>
          <p>
            عصاره گیری از گیاهان دارویی به منظور تولید داروهای گیاهی یکی از
            مهمترین موارد مصرف این گیاهان است. رویکرد روز افزون استفاده از
            گیاهان دارویی و فراورده های حاصله از آنها نقش این گیاهان را در چرخه
            اقتصاد جهانی پررنگ کرده است به طوری که مصرف رو به افزایش آنها تنها
            اختصاص به کشورهای در حال توسعه نداشته بلکه یکی از فاکتورهای مهم
            بهداشتی کشورهای پیشرفته نیز محسوب می شود؛ لذا با توجه به کشت گیاهان
            دارویی در این شهرستان، فراوری گیاهان دارویی شامل خشک کردن، عرق گیری
            و بسته بندی این گیاهان، یکی از مزیت‌های شهرستان مریوان است که
            پتانسیل های لازم را برای گسترش دارد.
          </p>
          <p>
            روغن، بخش مهمی از وادرات کشور را تشکیل می‌دهد. با در نظر گرفتن
            تولیدات کلزا و کنجد، روغن گیری از آنها، سود خوبی را به دنبال خواهد
            داشت.
          </p>
          <p>
            دانه کنجد از قدیمی ترین دانه های روغنی است که به ملکه دانه های روغنی
            معروف است. روغن کنجد علاوه بر این که مصرف خوراکی دارد در زمینه تهیه
            مواد آرایشی و رنگ های نقاشی نیز کاربرد دارد. از آرد کنجد و کنجد
            آسیاب شده (ارده) نیز در صنایع غذایی استفاده می شود.{" "}
          </p>
          <p>
            شیر و فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان
            بوده که از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز و
            پروتئین، غنی است. پروتئین موجود در شیر و فرآورده هاي آن در مقایسه با
            منابع دیگر پروتئین هاي حیوانی و گیاهی ارزان تر و از ارزش بیولوژیکی
            بالاتری برخوردار است . در کشورهاي صنعتی افزایش تولید شیر، تنوع
            تولیدات و توسعه صنایع تبدیلی، تأثیر به سزایی در میزان مصرف شیر و
            فرآورده هاي آن داشته؛ بنابراین تقاضا در این مورد همواره وجود دارد و
            همچنین با توجه به اینکه تولیدات شیر در این شهرستان به مقدار زیاد
            است، راه اندازی واحد های تولید لبنیات نقس بسزایی در توسعه اقتصادی
            این شهرستان دارد. البته لازم به ذکر است که یک واحد برای تولید لبنیات
            وجود دارد که نیاز شهرستان را برطرف می‌کند؛ اما درصورت رونق دامداری و
            افزایش تولید، وجود یک کارخانه دیگر برای صادرات این مورد موفق خواهد
            بود.
          </p>
          <p>
            در شهرستان مریوان، با وجود رونق دامداری، پرورش طیور و تولید گوشت
            فراوان، واحدی برای تولید سوسیس و کالباس وجود ندارد که در صورت ایجاد
            چنین واحدی در صورت بازاریابی و وجود بازار مصرف، شاهد رشد و پیشرفت
            خوبی در این زمینه خواهیم بود.
          </p>
          <p>
            با توجه به گستردگی تولید سبزی جات در این شهرستان، فراوری سبزی جات
            شامل پاک کردن، خشک کردن، خرد کردن و بسته بندی آن سودده خواهد بود. با
            توجه به گرانی نرخ اجاره ها، افزایش هزینه ها و خیلی موارد دیگر، راه
            اندازی مشاغل خانگی که بتواند در محیط کوچک که به درآمدی کارآمد
            برساند، نکته جذابیست و امروزه در سراسر دنیا همین مشاغل خانگی، رو به
            افزایش بوده و مورد استقبال بسیاری از زنان و مردان واقع شده است.{" "}
          </p>
          <p>
            تولید گسترده صیفی جات در این شهرستان، مزیت هایی مانند تولید شور و
            ترشی جات را ایجاب می‌کند. ترشی و شور، بیشتر به‌عنوان یک چاشنی در
            کنار غذا مصرف می شود و به دلیل خاصیت اسیدی که دارد، باعث افزایش
            اشتها و میل به غذا خوردن در افراد می‌شود. این محصول یکی از فرآیندهای
            نگهداری طولانی‌ مدت صیفی‌ و سبزیجات است. در جوامع امروزی به دلیل
            افزایش مشغله افراد و شاغل بودن بسیاری از زنان، فرصت کافی برای تهیه
            آن در منزل و توسط خود افراد وجود ندارد و اکثر خانواده‌ها تمایل دارند
            ترشی و شور موردنیاز خود را به‌صورت آماده تهیه نمایند. بنابراین راه
            اندازی کسب‌ وکار تهیه ترشی و شور می‌تواند راهی برای پاسخ به این نیاز
            افراد جامعه و کسب درآمد باشد.
          </p>
          <p>
            با توجه به اینکه در این شهرستان کشت گندم از اولویت های خوب حوزه
            زراعت است و در حال حاضر هم گندم زیادی کشت می‌شود، تولید شیرینی و نان
            هم از کسب و کار های خوبی است که قابلیت سرمایه گذاری دارد. البته در
            حال حاضر نیز واحد هایی در این زمینه ها فعال هستند که در صورت سرمایه
            گذاری و راه‌اندازی واحدهای جدید باید به بازار مصرف و نیاز شهرستان
            توجه شود.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            دریاچه زریبار، قلعه امام (قلعه هلوخان)، دشت بیلو، منطقه تفریحی
            قمچیان، مجتمع پارک ساحلی زریوار، تفرجگاه ملاقوبی، آبشار گویله، غار
            کونا شم شم، بازارچه مرزی، ارتفاعات چهل چشمه و ‌‌‌پل گاران (کردلان)‌
            از دیدنی‌های شهرستان مریوان است. در بحث امکانات رفاهی، برای جاذبه
            های طبیعی و آثار باستانی قابلیت بسیاری وجود دارد، البته در حال حاضر
            در این زمینه ها فعالیت هایی در حال انجام است؛ ولی این فعالیت ها
            همچنان زمینه گسترش را دارد.
          </p>
          <p>
            با توجه به اینکه شهرستان در نقطه ی صفر مرزی واقع شده و روستاهای
            اطراف دریاچه ی زریوار جاذبه های طبیعی زیبایی دارند و لک لک ها در فصل
            گرم سال به شهرستان می آیند، می‌توان از این ظرفیت در زمینه ایجاد بوم
            گردی استفاده کرد و فعالیت هایی انجام داد. ایران کشوری است غنی از
            اقلیم های مختلف و برای کسانی است که می خواهند با فرهنگ و آداب و رسوم
            محلی هر منطقه آشنا شوند. اقامتگاه های بوم گردی فرصتی مناسبی است تا
            ضمن گردشگری در هر منطقه و بازدید از جاذبه های توریستی، حس ایرانی
            زیستن به سبک سنتی را تجربه کنند. همچنین طبخ غذاهای محلی در برخی
            اقامتگاه ها، مصداق دیگری از مهمان نوازی ایرانی است.
          </p>
          <p>
            تجارت کالا و مغازه داری در صورت اخذ مجوزهای لازم و طی مراحل اداری،
            یکی از سودآورترین مشاغل این شهرستان است؛ زیرا با توجه به موقعیت
            جغرافیای مریوان، امکان صدور کالا های مختلف وجود دارد.
          </p>
          <p>
            شهربازی و سینما در شهرستان دایر است؛ ولی شهربازی ها خیلی معمولی
            هستند و اگر تسهیلات به آنها اختصاص یابد و گسترش پیدا کنند، میزان
            استقبال مردم چند برابر می شود.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            در حال حاضر کشاورزی در شهرستان از روش سنتی به سمت مکانیزه شدن پیش می
            رود و کشاورزان آبیاری ها را به صورت قطره ای و بارانی انجام می دهند.
          </p>
          <p>
            در حوزه باغداری در این شهرستان کاشت گیلاس و توت فرنگی به صورت انبوه
            انجام می‌شود که کیفیت خیلی خوبی هم دارند. با توجه به سازگاری این
            محصول با شرایط منطقه و تقاضا برای این محصولات به سبب کیفیت خوبی که
            دارند، گسترش باغات این محصولات سبب توسعه اقتصادی این شهرستان می‌شود.
          </p>
          <p>
            در رابطه با محصول توت فرنگی لازم به ذکر است که در حال حاضر کاشت آن
            در گلخانه نیز انجام می‌شود؛ اما همچنان جای کار دارد و می‌توان تعداد
            این گلخانه ها را افزاش داد.
          </p>
          <p>
            با توجه به وجود باغات خوب انگور در این شهرستان، توسعه این باغات از
            مزیت هایی است که پتانسیل های لازم برای موفقیت را دارد.
          </p>
          <p>
            احداث باغ گردو یک سرمایه‌گذاری طولانی‌مدت و پربازده در زمینه کشاورزی
            و باغی است؛ زیرا گردو از جمله میوه هایی است که در بین میوه های خشک
            ارزش بسیار بالایی دارد و جهت نگهداری طولانی مدت نیاز به سردخانه و
            تجهیزات پرهزینه ندارد. همچنین درخت گردو درختی با ارزش و دارای عمر
            باردهی بالایی است. به طوری که بعد از یکبار کاشت می توان سالها از
            محصول درخت گردو برداشت کرد و از چوب درخت آن هم در صنایع چوبی استفاده
            کرد؛ بنابراین ایجاد باغات گردو نیز فرصت شغلی مناسبی برای کشاورزان
            است.
          </p>
          <p>
            کشت صیفی جاتی مانند خیار و گوجه با توجه به اینکه بازار مصرف خوبی
            دارند و تقاضا برای آنها همواره موجود است، به صورت آزاد و گلخانه ای
            قابل سرمیه گذاری هستند.
          </p>
          <p>
            یکی دیگر از مزیت های این شهرستان در حوزه باغداری، پرورش قارچ است؛
            زیرا کاشت این محصول به سرمایه اولیه و فضای کمی احتیاج دارد و همچنین
            سوددهی آن کوتاه مدت است؛ لذا گسترش آن در صورت بازاریابی مناسب، ارزش
            افزوده خوبی را به دنبال دارد البته لازم به ذکر است که پرورش قارچ در
            شهرستان به مقدار کمی انجام می شود؛ ولی قابلیت خوبی برای توسعه آن
            وجود دارد و می توان به صورت خانگی یا کارگاهی پرورش آنها را انجام
            داد.
          </p>
          <p>
            برای افزایش تولیدات سیب، گلابی، به و گل محمدی نیز در این شهرستان
            ظرفیت مناسبی وجود دارد؛ زیرا این محصولات هم به صورت خام و هم به صورت
            فراوری، بازار مصرف خوبی دارند.
          </p>
          <p>
            کشت انواع سبزی در شهرستان تا فصل پاییز انجام می شود و بعد از آن سبزی
            های مورد نیاز را از دزفول وارد شهرستان می کنند؛ لذا می توان به صورت
            گلخانه ای این محصولات را تولید کرد تا از واردات آن جلوگیری شود.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در شهرستان به صورت سنتی و برای پرورش هر دو نوع دام سبک و
            سنگین انجام می شود، البته پرورش دام سنگین شیری بیشتر است و در این
            زمینه اغلب از دام های اصلاح نژاد شده ای نظیر سمینتال و هلشتاین
            استفاده می‌کنند. همچنین در زمینه دام های سبک بیشتر، گوسفند نژاد بومی
            پرورش پیدا می‌کنند. در ضمن تولید گوشت و شیر در شهرستان بیشتر از نیاز
            است و می توان این تولیدات را صادر کرد.
          </p>
          <p>
            گاو سمینتال جزء بهترین گاو های شیری و گوشتی جهان است. افزایش وزن
            روزانه فوق العاده و گوساله دهی با فاصله 365 روز، مقاومت بالا نسبت به
            بیماری‌های عفونی و متابولیکی، عمر مفید بالا، مدیریت آسان این نژاد و
            همچنین سازگاری بسیار خوب و قابل توجه با محیط پرورش همان چیزی است که
            یک دامدار برای بقاء و پیشرفت به آن نیاز دارد؛ بنابراین با توجه به
            اینکه در حال حاضر پرورش این نژاد در حال حاضر در این شهرستان انجام
            می‌َشود، گسترش پرورش آن صرفه اقتصادی خوبی را به دنبال دارد.
          </p>
          <p>
            زنبورداری و تولید عسل جزء مشاغلی است که زیرمجموعه کشاورزی محسوب می
            شود و رابطه مستقیمی با اقلیم، شرایط آب و هوایی، تنوع گیاهی و وضعیت
            نگهداری دارد. تولید عسل، مسیر نسبتا طولانی را طی می کند و اندازه ای
            زمان بر است؛ چرا که زنبوردار را در تمام طول سال مشغول می کند. این
            حرفه می تواند درآمد مناسبی برای افراد ایجاد کند، با این حال موفقیت
            در آن، نیاز به آموزش و کسب مهارت دارد. شهرستان مریوان به دلیل شرایط
            آب و هوایی مناسب و وجود مراتع و دشت های پوشیده از پوشش گیاهی، ظرفیت
            و پتانسیل بسیار خوبی برای تولید عسل دارد و در هر سال 2 یا 3 هزار تن
            عسل تولید می شود که این تولیدات همچنان ظرفیت گسترش را دارد.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            دانه های روغنی مانند کنجد و کلزا در این شهرستان کشت می شوند که گسترش
            و پیشروی به سمت این تولیدات در صورت آموزش به مردم قابل سرمایه گذاری
            است و در حوزه زراعت اولویت اول را به خود اختصاص می‌دهند.{" "}
          </p>
          <p>
            دربین دانه¬ های روغنی، کلزا به عنوان سومین گیاه عمده روغنی جهان پس
            از سویا و نخل روغنی شناخته می ¬شود، که نقطه امیدی جهت تامین روغن
            خوراکی کشور، محسوب می¬ شود؛ بنابراین با توجه به سازگاری این محصولات
            با اقلیم این منطقه و همچنین بازار مناسب و قیمت خوب برای فروش، گسترش
            آن ارزش افزوده زیادی را در پی دارد. تحقیقات دانشمندان نشان می ¬دهد
            که دانه کلزا30-40 درصد روغن و کنجاله -اش40-50 درصد پروتئین دارد.
            گیاه کلزا را می¬ توان بین گندم و جو کاشت ومانع از رشد علف¬ های هرز
            شد. کنجاله برای خوراک دام استفاده می ¬شود و درضمن با هر آب وهوایی
            سازگار است. روغن کلزا به دلیل ترکیب مناسب، با کیفیت ترین روغن خوراکی
            است.{" "}
          </p>
          <p>
            اقلیم ایران یکی از مناسب‌ترین اقلیم‌ها برای پرورش گیاهان دارویی است.
            با این که پرورش و فرآوری گیاهان دارویی در ایران فرآیندی شناخته شده
            است؛ اما آن چنان که باید و شاید از این ظرفیت استفاده نمی‌شود. گیاهان
            دارویی به اشکال مختلف قابلیت فرآوری و عرضه به بازار را دارند. همچنین
            این بازار صرفا مختص بازارهای داخلی نبوده و در کل جهان برای تولیدات
            گیاهان دارویی ایران متقاضی وجود دارد. این تقاضا به علت روی گردانی از
            داروهای شیمیایی و یا حتی استفاده شدن برخی از این محصولات در تولیدات
            کارخانه‌های بزرگ دارویی همواره رو به افزایش است. گیاهان دارویی
            گونه‌ها و مصارف مختلفی دارند. از این گیاهان نه تنها برای درمان
            بیماری‌ها بلکه در صنایع کنسروسازی، نوشابه سازی، ‌عطر سازی و غذایی
            نیز استفاده می‌شود. گیاهان دارویی متنوعی نظیر آویشن، بومادران و
            بابونه به طور معمول در مریوان یافت می‌شوند که می‌توان با برداشت
            آن‌ها اقدام به فروش مستقیم و یا فرآوری آن‌ها نمود. با توجه به موفق
            بودن این موارد در مریوان، گسترش و توسعه آنها قابلیت سرمایه گذاری را
            دارد.
          </p>
          <p>
            در میان محصولات کشاورزی، کاشت گندم نسبت به بقیه کم دردسرتر است. گندم
            در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد
            و در دو نوع بهاره و پاییزه کشت می شود که محصول دهی پاییزه آن بیشتر
            است؛ بنابراین می توان در هر منطقه ای گندم برداشت کرد. علاوه بر خود
            گندم، کاه آن نیز مشتری خاص خودش را دارد. بعد از برداشت محصول، زمین
            آن هم چراگاه گوسفندان می‌شود. خرید تضمینی گندم همه ساله توسط دولت
            انجام می گیرد. خود کشاورز هم می تواند گندم را بفروشد و درآمد خوبی
            کسب کند. کود شیمیایی و بذر نیز به شکل یارانه ای در اختیار کشاورزان
            قرار می گیرد . به همین دلیل کشاورزان تمایل زیادی برای توسعه این مورد
            دارند؛ لذا گسترش آن قابلیت توسعه را دارد و بعد از دانه های روغنی از
            اولویت خوبی برخوردار هستند.
          </p>
          <p>
            کشت سیر و سیب زمینی نیز از مزیت های خوبی است که با توجه به بازار
            دائمی برای آنها، قابل سرمایه گذاری است.
          </p>
          <p>
            جو بعد از گندم بیشترین سطح زیر کشت را در ایران به خود اختصاص داده
            است. در ایران اراضی وسیعی وجود دارد که بدلیل شوری، عمق کم خاک و شور
            بودن آب زراعی، صرفا برای تولید جو مناسب هستند ولی متاسفانه با توجه
            به تنوع آب و هوایی، ارقام مناسب هرمنطقه معرفی نشده است. دو نوع جو
            بهاره، پاییزه را می توان در مناطق مختلف کاشت. از جو برای تهیه نان و
            پخت سوپ استفاده می شود. این گیاه در تهیه غذای کودک نیز کاربرد دارد.
            جو از دیر باز در سبد تغذیه دام جایگاه ویژه داشته و همواره مشتری و
            بازار خود را دارند؛ بنابراین کار کردن در این حوزه نیز سودآور خواهد
            بود و در مزیت های بعدی حوزه زراعت قرار دارند.
          </p>
          <p>
            با توجه به دامداری موفق در این شهرستان، گسترش کشت یونجه نیز از جمله
            مواردی است که قابلیت توسعه را داشته و کشت آن سبب حاصلخیزی خاک نیز
            می‌شود.
          </p>
          <p>
            کشت پیاز نیز در برخی از مناطق این شهرستان وجود دارد. البته دلالی هم
            در فرآیند فروش آن تاثیر دارد. با این حال مصرف پیاز در ایران بالا
            بوده و در تمام فصول مشتری دارد؛ لذا اثر نوسانات قیمت را خنثی کرده و
            دلالی را بی اثرمی کند. همچنین فرآیند داشت این محصول ساده است. در
            برخی از فصول به دلیل عرضه کم این محصول و بالا بودن تقاضا قیمت آن تا
            5 برابر افزایش می یابد؛ بنابراین کار کردن در این حوزه از مزیت های
            خوب این شهرستان است که در اولویت های آخر قرار می‌گیرد.
          </p>
          <p>
            اخیرا کشت زعفران در مریوان انجام شده و جوابدهی خوبی داشته؛ لذا با
            توجه به قیمت زعفران در بازارهای امروزی، قابلیت خوبی برای فعالیت در
            این زمینه وجود دارد.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            کبک پرنده‌ای است وحشی، که در کوهستان‌ها زندگی می‌کند. این پرنده از
            قدرت پرواز کمی برخوردار بوده و در دنیا گونه‌های متعددی از آن وجود
            دارد. سه نوع عمده‌ی کبک به نام‌های چوکار، کبک صخره‌ای و کبک پا قرمز
            اروپایی شناخته می‌شوند که نوع چوکار بیشتر در خاورمیانه و ایران یافت
            می‌شود.
          </p>
          <p>
            محصولات کبک نسبت به دیگر طیور به دلیل طعم و کیفیت مناسب قیمتی بیشتر
            و مشتریان خاص خود را دارند و از جهت دیگر به دلیل مقاومت نسبتاً بالای
            این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به دیگر پرندگان کمتر
            است. همچنین می‌توان به بازار جوجه و تخم کبک اشاره نمود که قابلیت
            تولید و عرضه بیشتر را دارد و از نظر صادرات در برخی مناطق مانند
            مریوان، در وضعیت مناسبی قرار دارد. با پرورش کبک به‌صورت صنعتی
            می‌توان بخشی از نیاز کشور در حوزه گوشت را تأمین کرد و از میزان
            واردات به داخل کشور کاست؛ بنابراین توسعه آن از مزیت های خوب این
            شهرستان است.
          </p>
          <p>
            بوقلمون تنها حیوانی است که ۲نوع گوشت دارد؛ گوشت سینه این پرنده سفید
            و گوشت ران آن، قرمز است. از هر بوقلمون ۶۵درصد گوشت به‌دست می‌آید.
            بوقلمون پرنده ای است که به سرعت رشد می کند و گوشت بدون پوست آن، به
            طور طبیعی چربی کمی دارد؛ لذا کسانی که رژیم غذایی کم‏ چرب دارند،
            می‏توانند از آن استفاده کنند. همچنین بوقلمون کلسترول بد خون را کاهش
            می‏‏دهد، آرامش و سرحالی ایجاد می‏کند و از سرطان جلوگیری می‏کند؛
            بنابراین در صورت فرهنگ سازی برای مصرف بیشتر مردم از این گوشت و
            بازاریابی مناسب، توسعه پرورش این پرنده هم از فرصت های شغلی مناسب است
            که پتانسیل های سرمایه گذاری را دارد.
          </p>
          <p>
            با توجه به اینکه درحال حاضر دراین شهرستان واحد هایی به پرورش بلدرچین
            مشغول هستند، توسعه آن علاوه بر صرفه اقتصادی، باعث ایجاد اشتغال
            پایدار می‌شود؛ زیرا گوشت بلدرچین پروتئین و فسفر بالاتری از رده دیگر
            طیور دارد و به دلیل سهل الهضم بودن برای افراد دچار ناتوانی، زنان
            باردار و کودکان مفید است. هچنین تخم بلدرچین، آهن، فسفر و ویتامین های
            بالاتری نسبت به تخم مرغ دارد؛ بنابراین در بین مردم داخل و خارج از
            کشور طرفدارانی دارد و در این حوزه صادراتی هم صورت می‌گیرد؛ بنابراین
            این پرورش این موارد از اولویت های اول حوزه طیور است.
          </p>
          <p>
            پرورش مرغ تخمگذار علاوه براینکه به تامین منابع غذایی طبیعی و رونق
            تولید کمک می کند نقش به‌سزایی را در امر اشتغال‌زایی و بهبود وضع
            اقتصادی و خودکفایی در تولید محصول ارگانیک و طبیعی ایفا می کند.
            راه‌اندازی این کسب وکار نیاز به تکنولوژی پرهزینه ندارد و با بهره
            گیری از امکانات کم، می توان شرایط اجرای طرح را فراهم کرد. همچنین
            پرورش مرغ تخم‌گذار حتی به صورت صنعتی و با تمام تجهیزات مدرن می‌تواند
            در صورت پیدا کردن بازار مناسب، سالیانه حدود 20 تا 30 درصد سودآوری
            داشته باشد که رقم مناسبی است. لازم به ذکر است که پیدا کردن بازار
            فروش با حاشیه سود بالا از امور مهم درمورد این کسب و کار است که با
            تبلیغات مناسب مخصوصا در فضای مجازی امکان پذیر است.
          </p>
          <p>
            در ادامه نیز می‎‌توان مزیت به پرورش مرغ بومی اشاره کرد که در حال
            حاضر نیز برخی از افراد به انجام آن مشغول هستند.
          </p>
          <p>
            یکی از دلایل استقبال از پرورش مرغ بومی، سوددهی بسیارخوب پرورش مرغ
            بومی یا محلی است. مرغ بومی یا همان مرغ های محلی ایران، نوعی نژاد
            بسیار مقاوم به شمار می آیند که در مقابل بیماری ها، گرما و سرما تحمل
            بالایی دارند و این مزیت باعث می شود که ایجاد واحدهای تولیدی مرغ بومی
            برای تولید کنندگان سوددهی داشته باشد. یکی دیگر از مزیت های پرورش مرغ
            بومی این است که این کار نیاز به تجهیزات ندارد. هرچند اگر در پرورش
            مرغ بومی یا همان مرغ محلی از تجهیزات مدرن استفاده شود، سود بیشتری
            نصیب پرورش دهنده می شود. منظور از تجهیزات مواردی مانند آبخوری، دان
            خوری ، لانه تخم گذاری و... است.
          </p>
          <p>
            با توجه به اینکه در این شهرستان تعدادی واحد مرغداری گوشتی وجود دارد،
            به نظر می‌رسد ایجاد مرغداری گوشتی در شهرستان دیگر مزیتی به دنبال
            ندارد و سودمند نیست.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            با توجه به اینکه در این شهرستان واحد هایی به پرورش ماهی قزل آلا
            مشغول هستند؛ گسترش این صنعت همچنان ظرفیت های لازم برای توسعه را
            دارد. ماهی با خواص شگفت انگیز و مفیدی که دارد امکان ندارد که از
            برنامه غذایی خانواده ها حذف شود؛ زیرا ماهی ها منبع خوبی از آهن و
            پروتئین هستند و به تنظیم فعالیت های عصبی در مغز کمک فراوانی می کنند.
            همه این دلایل در کنار دلایل اقتصادی دست به دست هم داده اند تا پرورش
            ماهی قزل آلا هم از مزیت هایی باشد که راه‌اندازی آن، سود خوبی را به
            دنبال خواهد داشت.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            پاي‌افزار گيوه كه در شهر مريوان كلاش ناميده مي شود، با توجه به آب و
            هواي معتدل ايران، خنك، سبك و قابل شستشو طراحي شده و به دليل داشتن
            اين ويژگي‌ها توسط مردم از گذشته هاي دور تا امروز مورد استفاده قرار
            گرفته ‌است. پاي افزار كلاش، چپ و راست ندارد و از نظر طبي نيز كاملا
            تاييد شده و براي افرادي كه مبتلا به ديسك كمر، زانو درد و ديابت
            هستند، توصيه شده است. گیوه (كلاش زيره اي) يكي از صنايع غالب در منطقه
            اورامانات است كه با توجه به ويژگي هاي آن از جمله عدم نياز به
            تكنولوژي پيچيده و ماشين آلات سنگين، فراواني مواد اوليه، فراواني
            افراد داوطلب براي جذب به اين صنعت و روز افزون شدن تقاضا براي اين
            محصول در داخل و خارج از كشور، حمايت از آن به بارور شدن اقتصاد منطقه
            و اشتغالزايي منجر مي شود. گيوه بافي به دليل ظرفيت ها و مزيت هاي
            اقتصادي اش، از جمله عرصه هايي بوده كه مورد حمايت قرار گرفته و
            شهرستان مريوان نيز به عنوان قطب توليد كلاش مورد توجه ويژه قرار گرفته
            است ؛ بنابراین کارکردن در این زمینه هم ارزش افزوده زیادی خواهد داشت.
          </p>
          <p>
            با توجه به اینکه فرش بافی از جمله صنایع دستی معروف شهرستان مریوان
            است و در این زمینه افراد زیادی مشغول فعالیت هستند، کار کردن در این
            حوزه در صورتی که آموزش های لازم انجام شود و تسهیلاتی به این مورد
            اختصاص یابد، مثمرثمر خواهد بود؛ لذا مانند گیوه بافی از مزیت های این
            حوزه است.
          </p>
          <p>
            در ادامه نیز می‌توان گفت در این شهرستان همچنین مینا کاری، منبت کاری،
            چرم دوزی و تولید لباس محلی انجام می‌شود که به نظر می‌رسد توسعه آنها
            و یا ایجاد کارگاه هایی در این خصوص، ارزش افزوده زیادی را داشته باشد؛
            زیرا صنایع دستی مریوان به کشور عراق در محدوه کردستان عراق، سلیمانیه
            و اربیل، شهرستان های مجاور نظیر بانه و سقز و استان های کرمانشاه و
            آذربایجان غربی صادر می گردند .
          </p>
          <p>
            سبد بافی، ریسندگی و گلیم بافی هم از جمله صنایعی هستند که قابلیت
            سرمایه گذاری دارند. ملیله دوزی و خیاطی هم در صورت بازاریابی مناسب و
            وجود بازاری برای عرضه و مصرف، توجیه اقتصادی دارند.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            تولید پوشاک از جمله مزیت های حوزه صنعت است و در حال حاضر نیز انجام
            می‌شود؛ اما همچنان جای کار داشته و می‌توان تعداد این تولیدی ها را
            افزایش داد. پوشاک پردرآمدترین صنعت موجود در کشور ماست. امروزه افراد
            زیادی در کشور ما در صنعت پوشاک یعنی در زمینه ی طراحی، دوخت و تولیدی
            لباس فعالیت می کنند. همچنین با وجود شبکه های اجتماعی و رشد روز افزون
            این شبکه ها و نفوذ آن در میان مردم طی ۵۰ سال گذشته تعداد مزون هایی
            که در زمینه ی پوشاک فعالیت می کند به طر ز چشمگیری افزایش یافته است
            از طرفی به دلیل این که در مناسبت هایی همچون عید نوروز و شروع مدارس
            افراد زیادی اقدام به خرید لباس می کنند و همین باعث می شود که بیش از
            پیش این صنعت رونق پیدا کند.
          </p>
          <p>
            با توجه به تولید چوب در این شهرستان، تولید مصنوعات چوبی از جمله
            مبلمان، سودآور خواهد بود. از گذشته تا کنون چوب و کالاهای ساخته شده
            از ان بخش عمده ای از نیازهای بشری را فراهم کرده اند.این ماده طبیعی
            دارای خصوصیاتی است که آن را از بسیاری از مواد دیگر مجزا میکند. به
            همین دلیل است که این صنعت تا به امروز پا بر جا بوده و مواد جایگزین
            نتواسته اند جایگزین آن شوند. صنعت مبلمان نیز یکی از مهمترین صنایع
            وابسته به صنعت چوب بوده؛ که در بسیاری از کشورهای جهان و از جمله
            ایران دارای رونق بسیار خوبی است. در کشور خودمان امروزه دیگر مبل به
            عنوان یک وسیله لوکس شناخته نمی شود و در بسیاری از منازل می توان آن
            را مشاهده کرد؛ بنابراین گسترش استفاده از مبلمان در بین خانواده های
            ایرانی باعث شده است که این صنعت برای کسانی که می خواهند یک کسب و کار
            جدید را راه اندازی کنند یک فرصت بسیار عالی باشد.
          </p>
          <p>
            یکی از امتیازات شهرستان مریوان وجود معادن سنگ، خاک و سنگ های زینتی
            است. در حال حاضر استخراج از این معادن صورت می‌گیرد؛ اما متاسفانه
            فراوری نمی‌شوند و به صورت خام به سایر نقاط ارسال می‎‌شوند؛ بنابراین
            فراوری معادن نیزدر صورت سرمایه گذاری، سودآور خواهد بود.
          </p>
          <p>
            یک شهرک صنعتی در شهرستان وجود دارد که قرار بود به عنوان منطقه ی آزاد
            در نظر گرفته شود؛ ولی هنوز اتفاقی در این خصوص رخ نداده و مسئولین در
            حال مذاکره هستند و واحدهای صنعتی کمی مانند بسته بندی خشکبار، در آن
            فعال است .
          </p>
          <p>
            کارخانه های تولید سیم و کابل اخگر، کارگاه هایی برای تولید سبد و
            کارتن، کارگاه های تولید آجر و آجر پزی، تولید لبنیات ریمیا، کارخانه ی
            تولید کولر نسیم، کارگاه بسته بندی عسل در شهرستان فعال هستند.{" "}
          </p>
          <p>
            در ادامه تحليل، مشاغل در 10 رسته، ذيل سه حوزه كشاورزي، صنعت و خدماتي
            دسته‌بندي شده‌است. در هريک از اين رسته‌ها عناوين شغلي، بر اساس مزيت
            راه‌اندازي، از شماره 1 تا 4 اولويت‌بندي شده‌اند(مزیت‌ها براساس اهمیت
            رسته‌ها و تعداد مشاغل پیشنهادی در هر رسته، شماره گذاری شده اند.).
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
