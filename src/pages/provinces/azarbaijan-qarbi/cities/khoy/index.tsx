import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-02"].cities["IR-0206"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        gardening: "باغداری",
        services: "خدمات",
        livestock: "دامداری",
        agriculture: "زراعت",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        birds: "طیور",
        industry: "صنعت",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان خوی بزرگ‌ترین و پرجمعیت‌ترین شهرستان استان آذربایجان غربی پس
            از مرکز استان است. این شهرستان با وسعتی بالغ بر ۵۵۴۸ کیلومتر مربع در
            شمال غربی‌ترین نقطه ایران و آذربایجان و در مرز کشور ترکیه واقع
            شده‌است. این شهرستان در دشتی وسیع و محصور در بین کوههای سر به فلک
            کشیده واقع شده و به همین جهت نیز به خوی چوخورو مشهور شده ‌است. جمعیت
            این شهرستان طبق سرشماری سال 1395 برابر با 348664 نفر بوده‌ است که از
            این تعداد 225931 نفر آنان در نقاط شهری و 122731 نفر آنان در نقاط
            روستایی بوده‌اند. شهرستان خوی از شمال به شهرستان های چایپاره و
            چالدران، از جنوب به شهرستان سلماس، از شرق به استان آذربایجان شرقی و
            از غرب به کشور ترکیه محدود می شود. شکل زیر موقعیت شهرستان خوی را
            نشان می دهد. آب و هوای خوی کوهستانی است و هر ساله زمستان‌هایی سرد و
            برفی، بهارانی عطرناک، تابستان‌هایی ملایم و گاه معطوف به گرمی و
            پاییزهایی رنگارنگ و هزار رنگ، چهره‌ای چهار فصل به منطقه می‌بخشند. در
            رابطه با وضعیت آب نیز باید گفت که میزان آن طبق تحقیقات انجام شده،
            نسبت به گذشته تغییر و کاهش چشمگیری داشته است. باید گفت که بیشتر
            کشاورزی در سطح شهرستان به صورت دیم انجام می‌شود؛ اما با این حال برای
            ایجاد کسب و کارهای فرآوری و تبدیلی که یکی از اصلی‌ترین نیازهای این
            شهرستان است، مانع جدی خواهد بود؛ درواقع اگر مشکل کم آبی حل نشود، از
            ایجاد تعداد زیادی کسب و کار سودده و خصوصاً صنعتی، جلوگیری خواهد
            کرد.فاصله این شهرستان از تهران ۷۸۰ و از تبریز ۱۶۵ کیلومتر بوده و
            جاده ترانزیتی ایران- اروپا نیز از ۳۰ کیلومتری آن عبور می‌کند.
            شهرستان خوی به علت قرار گرفتن در مسیر جاده ابریشم تنها راه مرزی
            نزدیک ایران به کشور ترکیه بوده و تنها شهریست که راه‌آهن ایران به
            کشور ترکیه و اروپا را دار است و مسافت جاده زمینی آن با شهر وان ترکیه
            از طریق پایانه مرزی رازی ۱۲۰ کیلومتراست. فرودگاه خوی هم اکنون به
            عنوان یک دروازه مهم توسعه شمال استان و به عنوان یکی از زیباترین
            فرودگاه‌های کشور ایفای نقش می‌نماید. این موقعیت جغرافیایی خوی باعث
            می‌شود تا کار در زمینه بسیاری از صنایع از جمله صنایع تبدیلی و غذایی
            که جزء مهمترین نیازهای استان و بیشتر شهرستانهای آن است، دارای صرفه
            اقتصادی قابل توجهی باشد. تحریم بانکی ایران، کاهش ارزش پول ملی، کاهش
            فروش نفت خام و.... ازجمله دلایلی است که توجه به پتانسیل‌های منطقه را
            برای ایران دوچندان می‌کند. علاوه بر صادرات به کشورهای همسایه که
            روابط دوستانه و قابل قبولی نیز با ایران دارند، میزان جمعیت خوی نیز
            قابل ملاحظه است و می‌تواند باعث ایجاد صرفه اقتصادی و بازار فروش خوبی
            برای بسیاری از محصولات تولیدی باشد.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب ‌و كارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌ و كار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده ‌شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد. بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان خوی
            ارائه‌ شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همانطور كه در قسمت مقدمه اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌ و كارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌ و كارهاي رايج به
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
            وجود سطح بالایی از تولیدات کشاورزی و فراهم بودن شرایط اقلیمی برای
            توسعه بیشتر آنها، لزوم توسعه صنایع تبدیلی و فرآوری را در این شهرستان
            چندین برابر کرده است. بازار فروش یکی از فاکتورهای اصلی برای کار در
            زمینه صنایع تبدیلی و فرآوری است که با توجه به جمعیت بالای شهرستان و
            استان، نزدیکی به کشور ترکیه و عراق و سهولت ارسال انواع محصولات به
            صورت خام به سایر نقاط کشور، این مسئله تا حد زیادی در این شهرستان حل
            شده است. در واقع توسعه و ایجاد این صنایع، باعث افزایش سود و ایجاد
            ارزش افزوده بیشتری خواهد شد. همچنین انگیزه افراد و تولیدکنندگان فعال
            در هرکدام از حوزه‌ها را به میزان قابل ملاحظه‌ای تحت شعاع قرار
            می‌دهد.
          </p>
          <p>
            موقعیت مرزی خوی، اصلی‌ترین عاملی است که باعث می‌شود بتوان بسیاری از
            مشاغلی که در ذیل عنوان می‌شود را در مقیاس صنعتی و به صورت کارخانه‌ای
            پیشنهاد داد؛ اما مسئله‌ای که در اینجا مطرح می‌شود و خیلی هم جدی است،
            کمبود آب و کاهش آن نسبت به سالهای گذشته است. اگر این مسئله حل شود،
            علاوه بر وجود شرایط برای اجرایی کردن این پیشنهادات در مقیاس کارگاهی
            و خانگی، در مقیاس صنعتی و کارخانه‌ای نیز می‌توان وارد شد و نهایتاً
            سود خوبی را به دست آورد. در ضمن باید اشاره کرد درصورت وجود صرفه
            اقتصادی، به عنوان مثال به صرفه بودن هزینه حمل و نقل، می‌توان صنایع
            بسته بندی محصولاتی که در دیگر شهرستانهای استان تولید می‌شوند را در
            خوی ایجاد کرد و برای صادرات آنها به کشوری مانند ترکیه اقدام نمود.
          </p>
          <p>
            زنبورداری و تولید عسل یکی از اصلی‌ترین مشاغل مردم شهرستان خوی است.
            هر ساله میزان زیادی عسل با کیفیت در خوی تولید می‌شود. بسته بندی این
            محصول شفابخش در حال حاضر انجام می شود ولی با توجه به میزان تولید و
            کیفیت محصول، همچنان ظرفیت توسعه و گسترش داشته و می‌تواند رونق
            زنبورداری و تولید عسل را بیش از پیش کند. در همین راستا و به علت
            میزان تولیدات بالا نظیر تولید ژله رویال، موم و زهر زنبور عسل نیز
            پیشنهاد می‌شود که هر یک به نوبه خود می‌تواند سود واحد زنبورداری را
            به طور چشمگیری افزایش دهد.{" "}
          </p>
          <p>
            بسته‌بندی لبنیات، انواع میوه‌جات، خشکبار و محصولات غذایی و... در خوی
            دارای مزیت هستند؛ به شرطی که واحد تولید کننده این محصولات به سیستم
            بسته‌بندی مجهز نباشد. در رابطه با بازار فروش برخی از این محصولات
            مانند میوه بسته‌بندی باید اشاره کرد که موقعیت جغرافیایی شهرستان و
            ظرفیت مناسب برای صادرات، مزیت قابل توجهی برای این مشاغل ایجاد کرده
            است. در ضمن همانطور که در بالا اشاره شد، می‌توان بسته‌بندی محصولات
            تولیدی در دیگر شهرستانها را نیز در خوی انجام داد و سپس برای صادرات
            آنها اقدام نمود. در ادامه باید اشاره کرد سورتینگ میوه جات تولیدی در
            خود خوی و سطح استان، یکی از اصلی‌ترین اقداماتی است که باید برای
            صادرات به خارج از کشور انجام شود. اگر واحدهای بسته‌بندی به این سیستم
            مجهز نباشند، می‌تواند به عنوان شغلی مجزا محسوب شده و درآمد خوبی را
            ایجاد کند.{" "}
          </p>
          <p>
            در رابطه با بسته بندی مواد غذایی نظیر خشکبار مخصوصاً تخم آفتابگردان
            و کدو نیز باید گفت، در صورت جلوگیری از واردات و رونق دوباره این شغل
            می‌توان توسعه بیشتری ایجاد کرد. پرورش مرغ به میزان زیادی در این
            منطقه انجام میشود. با بررسی دقیق شرایط مانند بازار عرضه و فروش، صرفه
            اقتصادی حمل و نقل و... می توان در شهرستان خوی واحدهایی برای
            بسته‌بندی گوشت طیوری که در سطح استان پرورش داده می‌شوند ایجاد کرد.
            طبق بررسی‌ها انجام شده، دامداری از مشاغل اصلی مردم سطح استان
            آذربایجان غربی بوده و رونق خوبی دارد. قبل از طرح ممنوعیت صادرات،
            میزان قابل ملاحظه‌ای از تولیدات دامی از جمله دام زنده به خارج ازکشور
            صادر می شد؛ اما دیگر به نظر نمی‌رسد بتوان مزیت زیادی برای ایجاد
            واحدهای بسته بندی گوشت دام‌ها قائل بود به علاوه اینکه در اکثر
            کشتارگاه، بسته‌بندی گوشت انجام می‌شود.{" "}
          </p>
          <p>
            در حال حاضر چندین واحد برای جمع‌آوری شیر در سطح شهرستان مشغول به
            فعالیت هستند. همچنین یک کشتارگاه مخصوص دام و طیور نیز در سطح شهرستان
            فعال است. لذا به نظر می‌رسد افزایش ظرفیت و توسعه بیشتر چنین واحدهایی
            در شرایط فعلی مقرون به صرفه نباشد. از طرفی این واحدها برای ایجاد به
            سرمایه اولیه زیاد نیاز دارند و با ایجاد چند واحد محدود نیز به اشباع
            و حالت رقابت می‌رسند. لذا قبل از هراقدامی باید شرایط بازار آنها را
            به دقت مورد بررسی قرار داد.
          </p>
          <p>
            در صورت توسعه پرورش و نگهداری شتر در سطح منطقه، می توان در زمینه های
            مختلف فرآوری محصولات به دست آمده از این حیوان پرسود، مانند روغن
            اقدام کرد. در لیست مزیت سنجی به بسته بندی بلغور و حبوبات نیز اشاره
            شده است. بلغور و حبوبات به علت مصرف دائمی در طول سال، همواره بازار
            عرضه و فروش مناسبی داشته و به عنوان کسب و کاری پر سود و منفعت مورد
            پیشنهاد است.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری انواع محصولات کشاورزی مهمترین روش برای
            ایجاد اشتغال پایدار و کاهش وابستگی به درآمدهای نفتی و عاملی مهم در
            توسعه پایدار امنیت غذایی است. ایجاد صنایع غذایی متناسب با ظرفیت
            شهرستان، علاوه بر اشتغال‌زایی، باعث ارتقاء سطح درآمد اهالی آن می‌شود
            که کاهش هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد
            امکان ممکن می‌کند. با وجود میزان بالای تولید آلبالو و گیلاس در سطح
            شهرستان خوی، صنایع فرآوری آن بسیار ضعیف عمل کرده و آنطور که باید
            فعال نیستند. تولید آبمیوه، کنسانتره، میوه خشک و کمپوت علاوه بر ایجاد
            انگیزه برای تولید بیشتر، سود بیشتری را نیز عاید کشاورزان و باغداران
            کرده و خلأ نبود صنایع فرآوری را پر خواهد کرد.
          </p>
          <p>
            فرآوری گندم مانند تولید نان و رشته آشی و پلویی و سایر فرآورده های
            حاصل از گندم مانند آرد سوخاری، نان بستنی، پفک گندمی و نشاسته گندم،
            به علت وجود بازار مصرف داخلی و خارجی پیشنهاد می‌شود. البته در رابطه
            با آرد باید گفت که در حال حاضر چهار کارخانه در این حوزه مشغول به
            فعالیت هستند در نتیجه به نظر نمی‌رسد مزیت زیادی در زمینه تولید این
            محصول وجود داشته باشد.{" "}
          </p>
          <p>
            {" "}
            کلزا نیز از دیگر محصولات زراعی است که جدیداً تمایل به استفاده از
            روغن آن افزایش یافته است. با توجه به افزایش سطح کشت این گیاه زراعی
            ارزشمند و اقتصادی در خوی، روغن‌گیری از این گیاه به عنوان یک کسب و
            کار با مزیت اقتصادی در حوزه صنایع غذایی پیشنهاد می‌شود. چیپس میوه،
            میوه خشک، آبمیوه و سایر موارد مانند کمپوت، شربت، آبمیوه، کنسانتره،
            لواشک و شهد از محصولاتی هستند که می‌توان از دیگر میوه‌جات مانند سیب،
            گلابی، هلو و توت تولید کرد. در ضمن اگر این مشاغل به صورت صنعتی و در
            مقیاس کارخانه‌ای ایجاد شوند، با توجه به موقعیت مرزی و همچنین تولید
            بالای میوه‌جات در سراسر استان، می‌توان از محصولات دیگر شهرها در این
            کارخانه‌ها به عنوان ماده اولیه استفاده کرد.
          </p>
          <p>
            درصورت افزایش کشت گل محمدی در منطقه، می‌توان سود خوبی از تولید گلاب
            به دست آورد. ایجاد این شغل، با توجه به نیاز آبی کم این محصول باعت
            افزایش انگیزه کشاورزان برای کار در حوزه کشت و برداشت خواهد شد.
            همچنین با توجه به تراکم بالای انواع گیاهان دارویی خودرو در
            کوهستان‌ها، تولید عرقیجات سودده بوده و حداقل می‌تواند نیاز خود منطقه
            به این محصولات را مرتفع کند. طبق بررسی‌های انجام شده، در حال حاضر
            کارگاه‌هایی به تولید لبنیات و فرآوری شیر به صورت روغن حیوانی، کره،
            ماست و... به صورت صنعتی، سنتی و نیمه صنعتی مشغول هستند؛ در نتیجه
            برای فعالیت در این زمینه و ایجاد توسعه در آن، باید شرایط بازار را به
            دقت بررسی کرد و در شرایط فعلی مورد پیشنهاد نمی‌باشد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            شهرستان خوی در بیشتر محصولات باغی دارای مزیت نسبی بوده و باغداری یکی
            از پایه‌های اقتصادی این شهرستان را تشکیل می‌دهد. از سوی دیگر تولید
            اشتغال در زمینه باغ و باغداری زیاد بوده و برای رونق کسب و کارهای
            مرتبط با این بخش مؤثر می‌باشد. باغداری یکی از اصلی‌ترین حرفه‌های
            مردم شهرستان خوی است.{" "}
          </p>
          <p>
            سطح باغات آلبالو در خوی در سال جاری (1398) 1220 هکتار و گیلاس 3۱۰۰
            هکتار اعلام شده است. ارزش تولید این دو محصول باغی ۱۲۲ میلیارد تومان
            است به طوری که خوی در تولید آلبالو در آذربایجان غربی رتبه اول را
            دارد. تنوع ارقام این دو محصول از مهمترین ویژگی باغ‌های گیلاس و
            آلبالو در این شهرستان به شمار می‌رود. سفید، تک‌دانه و بادامی از
            مهمترین ارقام گیلاس و گوشواره‌ای، مجاری و بومی از مهمترین ارقام کشت
            شده آلبالو هستند. در ضمن ۳۰ درصد این محصولات به صورت تازه در خوی
            مصرف و بقیه به استان‌های همجوار و کشورهای همسایه از جمله ترکیه،
            جمهوری‌آذربایجان و عراق صادر می‌شود. از این‌رو توسعه باغات آلبالو و
            گیلاس مد نظر بوده و سودآوری بالایی برای این دو محصول پیش‌بینی
            می‌شود.{" "}
          </p>
          <p>
            اقلیم خاص شهرستان خوی باعث می‌شود تا فعالیت در زمینه باغداری از مزیت
            ویژه‌ای برخوردار باشد و بیشتر میوه‌جات و محصولات باغی جوابگو بوده و
            از کیفیت خوبی نیز برخوردار باشند. از دیگر تولیدات باغی مهم و اقتصادی
            در شهرستان می‌توان به میوه جاتی مانند سیب، هلو، گلابی و توت اشاره
            کرد. مهارت و تجربه کشاورزان، وجود شرایط برای صادرات و فراهم بودن
            بازار فروش، کیفیت بالا و... از مهمترین دلایلی است که فعالیت بیشتر در
            زمینه کشت و توسعه میوه‌جات اشاره شده در فوق را دارای مزیت می‌کند.{" "}
          </p>
          <p>
            طبق بررسی‌ها چندین گلخانه در سطح شهرستان فعال هستند که غالباً در
            زمینه پرورش نهال گردو و صیفی‌جاتی مانند خیار، گوجه فرنگی، گیاهان
            دارویی و بادمجان مشغول هستند. در این راستا به علت بازار فروش این نوع
            از محصولات و کیفیت آنها، توسعه این مورد پیشنهاد می‌شود؛ اما نکته‌ای
            که باید در نظر گرفته شود این است که با توجه به اقلیم سردسیر خوی،
            مکان ایجاد گلخانه و فراهم آوردن تجهیزات آن اهمیت بسیار زیادی پیدا
            خواهد کرد؛ در نتیجه قبل از هر اقدامی در این زمینه، باید مکان
            جغرافیایی احداث گلخانه را به دقت بررسی کرد.
          </p>
          <p>
            گل محمدی از جمله محصولاتی است که طی سال‌های گذشته، میزان تولید زیادی
            داشته است. گل محمدی از معروف‌ترین رزهای دنیا در باغبانی است. گل‌های
            محمدی در ایران از مرغوبیت بسیار بالایی برخوردارند. گل محمدی از جمله
            گیاهان دارویی و محصولات زراعی است که در شهرستان خوی تولید می‌شود و
            جواب می‌دهد. لذا توسعه کشت آن موجب می‌شود تا حداقل نیاز خود شهرستان
            به این محصول و فرآورده‌های آن مرتفع شده و نیازی به واردات در این
            زمینه نباشد.
          </p>
          <p>
            پرورش انواع قارچ نظیر دُنبَلان پیشنهاد پر سود و منفعت دیگری در حوزه
            باغداری این شهرستان می‌باشد. قارچ دنبلان نوعی قارچ خوراکی، گران‌قیمت
            و کمیاب است. این قارچ در گونه‌های مختلف به رنگ‌های قرمز تیره،
            خاکستری، سفید، بنفش و سیاه یافت می‌شود ولی لذیذترین نوع آن دارای
            پوسته سیاه رنگ است. بیش‌ترین میزان مصرف قارچ دنبلان در رستوران‌ها،
            صنایع غذایی، تهیه انواع سس‌ها و روغن‌های معطر و نیز داروسازی است.
            طبق بررسی‌های انجام شده، نوعی از این قارچ در شهرستان خوی نیز یافت
            شده است. اگر بتوان کشت این محصول را به صورت عمده انجام داد و یا صرفه
            اقتصادی برای آن ایجاد کرد، صادرات آن سود بسیار خوبی به همراه خواهد
            داشت. قارچ صدفی و دکمه‌ای نیز از دیگر انواع قارچ‌ها بوده که توسط
            مردم منطقه مصرف می‌شوند و پیشنهاد توسعه پرورش آنها مدنظر می‌باشد.{" "}
          </p>
          <p>
            کاشت هویج از جمله مزیت‌های قابل سرمایه‌گذاری در زمینه باغداری است.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            حوزه خدمات یکی دیگر از ظرفیت‌های بالقوه شهرستان خوی می‌باشد که به
            نوبه خود سهم مهمی در ایجاد کسب و کار دارد. شهرستان خوی دارای
            جاذبه‌های طبیعی و تاریخی متعددی بوده که در ادامه اشاره خواهد شد. از
            جاذبه‌های طبیعی می‌توان به کوه اورین (در زبان ترکی به معنی بزرگ و با
            عظمت) بلندترین کوه شهرستان خوی، با ارتفاعی بیش از ۳۶۵۰ متر اشاره
            کرد. قوتور، آغ‌چای و قودوق‌بوغان از مهمترین رودخانه‌های آن هستند. از
            جمله آثار تاریخی شهرستان خوی، مقبره و برج شمس تبریزی، مقبره پوریای
            ولی، پل خاتون، بازار سرپوشیده، خانه کبیری‌ها، کاروانسرای خان،
            کلیساهای سورپ سرکیس و ماهلازان، امامزاده سید بهلول و... می‌باشند که
            بخشی از تاریخ ارزشمند این شهرستان را به تصویر کشیده‌اند. وجود این
            پتانسیل‌های توریستی و گردشگری، بهترین دلیل برای توسعه صنعت گردشگری و
            توریسم در این منطقه است. دسترسی آسان، وجود فرودگاه و پایانه مسافربری
            و هم مرز بودن با ترکیه نیز از جمله دیگر دلایل برای مزیت داشتن کار در
            زمینه خدمات گردشگری و بین راهی است. ایجاد انواع هتل‌ها و رستوران‌ها
            با تکیه بر فرهنگ بومی و سنتی، یکی از پیشنهاداتی است که می‌توان در
            این حیطه داد. در رابطه با وضعیت این صنعت درحال حاضر باید گفت که
            مواردی وجود دارند که موفق نیز هستند ولی با تبلیغ بیشتر این جاذبه‌ها
            و تمرکز بیشتر بر روی آن، قطعاً به امکانات بیشتری نیاز خواهد بود.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به عنوان فعالیتی اقتصادی و سودده یکی از حوزه‌های مهم مرتبط
            با بخش کشاورزی بوده که در سطح گسترده‌ای در شهرستان خوی انجام می‌شود
            و در نتیجه انجام این حرفه، سود اقتصادی خوبی نیز کسب شده است. از آن
            جایی که حوزه دامداری با یکی از مهمترین نیازها، یعنی نیاز به منابع
            غذایی و خصوصاً منابع پروتئینی مرتبط می‌باشد. از این‌رو توجه به آن
            امری پر اهمیت و ضروری است. فعالیت در این حوزه شغلی و افزایش بهره‌وری
            در آن، می‌تواند از راهکارهای افزایش اشتغال باشد و عاملی برای توسعه
            صنایع غذایی، تبدیلی و تکمیلی محسوب شود.
          </p>
          <p>
            بر اساس آمار سال 1398، 27 درصد عسل کل کشور در آذربایجان غربی تولید
            شده است. شهرستان خوی با داشتن بیش از 390 هزار کندو و با تولید بیش از
            12 هزار تن عسل، مقام اول استان را در تولید این ماده غذایی با ارزش
            غذایی و درمانی بالا به خود اختصاص داده است. وجود مراتع، مزارع
            آفتابگردان و تراکم بیشتر گل‌ها در طبیعت این شهرستان به برداشت با
            کیفیت‌ترین نوع عسل از زنبورستان های آن منجر شده است. تعاونی
            زنبورداران خوی با سه هزار و 29 نفر عضو، بزرگترین تعاونی در کشور است
            که فعالیت‌های چشمگیری در امر تولید، بازاریابی و صادرات این محصول
            ارزشمند دارد. با توجه به این که فعالیت در صنعت زنبورداری نقش مهمی در
            اقتصاد خانوارها و به خصوص خانواده‌های روستایی شهرستان دارد، توجه
            بیشتر به زنبورداران و ایجاد امکانات و تسهیلات برای آنان، نقش موثری
            در افزایش تولید، کیفیت و میزان تولید این محصول با ارزش دارد و در
            زمینه ایجاد اشتغال نیز تاثیرگذار است. همچنین می‌تواند توسعه و
            سودآوری بالای این صنعت و مشاغل مرتبط و زیر مجموعه آن را به دنبال
            داشته باشد.
          </p>
          <p>
            پرورش انواع دام‌های سبک و سنگین مانند گوسفند و گاو از دیگر
            فعالیت‌های اقتصادی در حوزه دامداری است که در سطح شهرستان رونق دارد.
            در شهرستان خوی پرورش گوسفند نسبت به سایر دام‌ها، بیشتر مورد توجه
            دامداران قرار گرفته زیرا توان گوسفند برای تحمل اقلیم‌های متفاوت
            بیشتر بوده و نیز جیره غذایی کمتر و در نتیجه هزینه کمتری جهت پرورش و
            نگهداری نیاز دارد. تمامی فرآورده‌های دامی مانند گوشت، شیر، ماست،
            کره، و حتی پشم و پوست این دام پرکاربرد بوده و فروش این فرآورده‌ها در
            تمامی روزهای سال انجام می‌شود. از طرفی قیمت گوشت گوسفند بالا است و
            به علاوه اجزای گوسفند مانند دل، قلوه، جگر، سیرابی، کله پاچه، خوش
            گوشت و... نیز قابل فروش هستند. خرید دام برای قربانی کردن در ایام
            مذهبی مانند عید قربان و... موجب رونق این کسب و کار می‌شود بنابراین
            گسترش پرورش گوسفند پرواری سوددهی مناسبی را به همراه خواهد داشت. در
            زمینه پرورش و نگهداری دام سنگین باید اشاره کرد که عموماً اصلاح نژاد
            شده هستند. به عنوان مثال بیشتر گاوهای پرورشی منطقه از نژادهای با
            عملکرد بالا و پربازده نظیر هلشتاین و سمینتال هستند. جمعیت روبه رشد
            شهرستان، وجود مراتع سرسبز، آب و هوای مناسب و مهارت افراد در این حیطه
            از جمله دلایلی است که باعث شده تا دامداری در این شهرستان رونق مطلوبی
            داشته باشد و همچنان نیز برای توسعه آن ظرفیت مناسبی وجود داشته باشد.{" "}
          </p>
          <p>
            پرورش شتر در حال حاضر در یکی از روستاهای شهرستان خوی انجام می‌شود.
            پرورش شتر نسبت به سایر دام ها مزیت‌هایی مانند قابلیت سازگاری با
            شرایط سخت محیطی مناطق خشک و نیمه خشک، تحمل گرما، کم آبی و کیفیت
            پایین علوفه و مقاومت نسبی در مقابل امراض و عوامل بیماری‌زا دارد.
            همچنین شتر در مقایسه با سایر دام‌های اهلی علوفه را با قابلیت هضم
            بالا و بازده بیشتری استفاده می نماید و قادر است از انواع خاص گیاهان
            مرتعی (خشبی، خاردار و تیغ دار) به میزانی استفاده نماید که سایر دام
            ها قادر به استفاده از آن نیستند. از دیگر فواید پرورش شتر، حداقلِ
            نیاز به تاسیسات، تجهیزات و امکانات پرورش و نگهداری و در نتیجه کمترین
            نیاز به سرمایه‌گذاری سنگین را در مقایسه با سایر دام‌ها دارد. گوشت
            شتر منبع بسیار خوبی برای بسیاری از مواد غذایی مهم و مورد نیاز بدن
            می‌ باشد.
          </p>
          <p>
            در ضمن طبق لیست مزیت سنجی، به علت وجود توت، پرورش کرم ابریشم نیز
            دارای مزیت دانسته شده است.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            کشاورزی زراعی، یکی از اصلی‌ترین مشاغل مردم خصوصاً روستاییان در
            شهرستان خوی به شمار می‌رود. مهمترین محصولات زراعی شهرستان شامل گندم،
            چغندرقند، آفتابگردان، کدو و کلزا است. البته بیشترین سطح زیر کشت
            محصولات مربوط به کلزا بوده است. خاک منطقه برای محصولات استراتژیکی
            مانند کلزا، گندم، آفتابگردان و... حاصلخیز بوده و شرایط آب و هوایی
            نیز برای کشت این محصولات زراعی مساعد است.{" "}
          </p>
          <p>
            گندم که در قسمت قبل نیز به آن اشاره شد از دیگر محصولات استراتژیکی
            است که در شهرستان خوی تولید می‌شود. این گیاه زراعی، محصولی مهم برای
            کشور بوده و به صورت تضمینی و در هر شرایط اقتصادی، توسط دولت خریداری
            می‌شود. با توجه به سطح زیر کشت آن، سازگاری با شرایط شهرستان خوی و
            همچنین بازار خرید و فروش محصولات به دست آمده از آن مانند نان، شیرینی
            و... توسعه کشت آن همچنان دارای مزیت خواهد بود.
          </p>
          <p>
            تخم آفتابگران و کدو، از اصلی‌ترین محصولات خوی است؛ بعنوان مثال اقلام
            دانه‌هاي آفتابگردان كشت شده در شهرستان خوي از نوع قلمي (شمشيري،
            بادامي، دورسفيد، پسته‎اي و روغني) و اقلام كدو نيز از نوع ريزخوي
            (مشهدي)، گوشتي (همداني) و قلمي مي باشد؛ اما با وجود واردات تخمه‌های
            ژاپنی و چینی از خارج از کشور، میزان کشت آنها کاهش داشته و امرار معاش
            کشاورزان را تحت شعاع قرار داده است. با جلوگیری از این مورد و افزایش
            صادرات آن، می‌توان مزیت خوبی برای توسعه کشت این محصولات قائل بود.
          </p>
          <p>
            کلزا یکی از گیاهانی است که در تناوب با گندم و جو می‌تواند به عنوان
            یک محصول پائیزه اقتصادی کشت شود و ضمن تولید، نقش بسیار مؤثری در
            کنترل آفات خاکزی مانند زابروس در اراضی دیم داشته باشد. هر ساله
            دانه‌های روغنی، میزان قابل توجهی از حجم واردات ایران را به خود
            اختصاص می‌دهند. این محصول که با شرایط آب و هوایی خوی سازگاری دارد،
            چندین سال است که در حال تولید است و همچنان افزایش تولید آن به صورت
            کمی و کیفی مدنظر است.{" "}
          </p>
          <p>
            چغندرقند یکی از محصولات استراتژیک تولیدی استان بوده که طی سال‌های پی
            در پی رتبه برتر کشوری را برای این استان به ارمغان آورده است. این
            محصول چند سالی است که در خوی نیز درحال کشت است و به علت وجود کارخانه
            فرآوری آن در داخل شهرستان، از رونق خوبی برخوردار است. با توجه به این
            که چغندرقند محصولی با نیاز آبی بالا است، مشکل کمبود آب در سطح
            شهرستان، مشکلاتی را برای کشاورزان این حوزه بوجود آورده و مزیت این
            کار را، علی رغم وجود کارخانه فرآوری آن کاهش داده است. در نتیجه توسعه
            در این زمینه در صورت حل شدن مشکل کم آبی شهرستان توصیه می‌شود.
          </p>
          <p>
            در لیست مزیت سنجی به علت وجود اراضی دیم و آبی کشت حبوباتی مانند عدس
            و لوبیا، همچنین محصولاتی نظیر جو، سیب زمینی دارای مزیت دانسته
            شده‌اند. همچنین به علت وجود زمین‌های حاصلخیز، کشت ذرت علوفه‌ای و
            یونجه نیز مزیت خواهد داشت.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            قالیبافی یکی از اصلی‌ترین مشاغل مردم در سطح شهرستان خوی عنوان
            می‌شود. مهارت خوب بافندگان خویی در این زمینه باعث می‌شود تا بتوان
            افزایش توسعه در این زمینه را توصیه کرد تا هم انگیزه بافندگان را
            افزایش دهد و هم مشاغل مرتبط مانند تولید نخ، رنگرزی و.. را رونق
            بیشتری بخشد. در ضمن درحال حاضر این محصول به صورت خانگی و بعضاً به
            صورت کارگاهی دنبال می‌شود. اگر صنعت گردشگری رونق یافته و رفت و آمد
            گردشگران به این منطقه افزایش یابد، بازار فروش خوبی برای این نوع از
            صنایع دستی ایجاد خواهد شد. گلیم‌بافی یکی دیگر از شاخه‌هاي قالي بافي
            است و در آن از طرح‌هاي مختلف محلي استفاده مي‌شود. هر چند در گذشته
            گلیم به عنوان یک زیرانداز شناخته و بافته می‌شد اما امروزه با توجه به
            زیبایی نقوش و کیفیت بافتی که دارد از آن در هنرهای تلفیقی همچون
            روکش‌های مبلمان، دوخت کیف‌های چرمی، وسایل تزیینی و... استفاده‌های
            بسیاری می‌شود. لذا مورد پیشنهاد بوده و به دلیل دانش موجود و قیمت
            مناسب می‌تواند سودده و پر منفعت باشد.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه‌های شغلی سوددهی است که پتانسیل بسیار خوبی برای آن وجود
            دارد که اگر از این ظرفیت‌های شیلاتی استفاده شود سودآوری بسیار خوبی
            برای شهرستان ایجاد خواهد شد. در حال حاضر چند مزرعه شیلات و آبزی
            پروری در سطح شهرستان خوی مشغول به فعالیت هستند که اصلی‌ترین تولیدشان
            نیز ماهی سردآبی قزل آلا می‌باشد. نکته جدی که مطرح است، کمبود آب در
            سطح شهرستان خوی برای ایجاد توسعه در این حیطه است. با توجه به وجود
            تعداد قابل توجهی سد و همچنین راهکارها و روش‌های نوین پرورش ماهی
            مانند پرورش ماهی در قفس و... اگر بتوان بر مساله کمبود آب در شهرستان
            فایق آمد، پرورش ماهی دارای مزیت بالایی برای ایجاد خواهد بود زیرا هم
            میزان اشتغال خوبی را ایجاد می‌کند و هم سود خوبی را به دنبال خواهد
            داشت.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز شهرستان به
            منابع غذایی، از اهمیت بالایی برخوردار بوده و سود سرشاری نیز دارد. در
            حوزه طیور، پرورش مرغ گوشتی در بسیاری از واحدهای شهرستان انجام می‌شود
            به طوری که به گفته کارشناسان، علاوه بر تامین نیاز شهرستان، می‌توان
            مازاد آن را به سایر نقاط استان و یا خارج از استان نیز ارسال نمود. با
            افزایش روز افزون جمعیت و تامین نیازهای مردم شهرستان، ایجاب می‌کند در
            زمینه پرورش مرغ گوشتی فعالیت کرد. درحال حاضر واحدهایی به صورت صنعتی
            و نیمه صنعتی در سطح شهرستان به پرورش مرغ که عمدتاً نیز گوشتی هستند،
            مشغول بوده و نیاز شهرستان و استان در این زمینه را برطرف کرده‌اند. در
            نتیجه برای ایجاد واحدی در این زمینه، باید بازار فروش را به خوبی
            بررسی کرد. طبق بررسی‌های انجام شده، مزیت زیادی برای پرورش انواع طیور
            و ماکیان مانند بوقلمون در خوی وجود ندارد و حتی برای پرورش کبک و
            بلدرچین مجوزی داده نمی‌شود اما با این حال در لیست مزیت سنجی، به
            پرورش بوقلمون برای مصرف گوشت و تخم آن اشاره شده است. در این زمینه
            بررسی و ارزیابی دقیق اصول علمی و عملی پرورش و همین‌طور نیازسنجی
            بازار جهت کسب سود و درآمد الزامی است.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            به جرات می‌توان گفت که صنعت و مشاغل صنعتی یکی از عوامل مهم توسعه
            اقتصادی این شهرستان می‌باشد. اما متاسفانه با این‌که ظرفیت‌های خوبی
            برای ایجاد مشاغل صنعتی مختلف وجود دارد، نقش این حوزه شغلی آن چنان که
            باید پر رنگ نیست. در صورتی که با اندکی ریسک‌پذیری می‌توان واحدهای
            سودآوری را در شهرستان احداث کرد. خوی دارای یک شهرک صنعتی است که نسبت
            به دیگر شهرک‌های سطح استان، از وضعیت بهتری برخوردار است. تولیدی‌های
            مبل، مهمترین واحدهای فعال و موفق در سطح استان محسوب می‌شوند و صادرات
            داخلی و خارجی خوبی نیز دارند. در سال‌های گذشته این واحدها، بیش از
            ۱۰۰ هزار دست انواع مبل تولید و به بازارهای مبل داخل و خارج مانند
            عراق، افغانستان، ترکیه و کشورهای حاشیه خلیج فارس صادر کردند. صنایع
            پایین دستی مانند واحدهای تولید یراق‌آلات و ابزار مبل نیز در خوی وجود
            دارد و از خروج بیش از یک میلیون دلار ارز از کشورمان جلوگیری کرده
            است‌. به صورت کلی نیز حدود ۲ هزار و ۳۰۰ نفر در بخش صنعت مبل شهرستان
            مشغول فعالیت هستند. واحدهای دیگری مانند کارخانه نساجی و تولید
            ایزوگام نیز در سطح شهرستان فعال هستند. همچنین با وجود معادن سنگ و
            سیلیس، به نظر می رسد با ایجاد واحدهایی برای بسته بندی این محصولات،
            بتوان سود خوبی کسب کرد البته باید توجه داشت که فعالیت در حوزه‌های
            معدنی، نیاز به سرمایه اولیه قابل توجهی دارد. در لیست مزیت سنجی نیز،
            به علت وجود کارخانه ریسندگی در سطح شهرستان، تولید پوشاک دارای مزیت
            اقتصادی خواهد بود. طبق بررسی‌های انجام شده تاکنون واحد صنعتی عمده‌ای
            ورشکست نشده است. همچنین بیشتر کارگران واحدهای صنعتی فعال بومی
            شهرستان و روستاهای اطراف آن هستند.{" "}
          </p>
          <p>
            باید گفت علی رغم کمبود آب، طرح‌های صنعتی دیگری از سوی مراکز دولتی در
            حال پیگیری است. در واقع از ابتدای سال 1398، برای 14 واحد تولیدی با
            414 میلیارد ریال سرمایه گذاری و با 270 نفر اشتغال مجوز تأسیس در
            شهرستان صادر شده است. این مطلب نشان می‌دهد که در آینده، میزان قابل
            توجهی شغل صنعتی در سطح خوی ایجاد خواهد شد و نه تنها جوانان خود
            شهرستان بلکه دیگر شهرستان‌های همجوار را نیز مشغول به کار خواهد کرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
