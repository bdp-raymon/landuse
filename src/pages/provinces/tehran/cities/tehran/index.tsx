import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-08"].cities["IR-0806"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        services: "خدمات",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        gardening: "باغداری",
        livestock: "دامداری",
        birds: "طیور",
        agriculture: "زراعت",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان تهران یکی از شهرستان‌های استان تهران در ایران است. این
            شهرستان در مرکز استان تهران قرار دارد و از بخش های مرکزی، کن، تشکیل
            شده‌است. شهرستان تهران از شمال به شهرستان شمیرانات و استان البرز از
            مشرق به شهرستان پردیس، از جنوب به شهرستان‌های پاکدشت و ورامین و ری و
            اسلامشهر و از مغرب به شهرستان‌های قدس، شهریار و استان البرز محدود
            می‌شود. این شهرستان پرجمعیت‌ترین شهرستان کشور است. مرکز این شهرستان،
            شهر تهران است که همزمان، مرکز استان تهران و پایتخت کشور ایران
            است.جمعیت شهرستان تهران طبق سرشماری سال ۱۳۹۵، 8میلیون و737 هزار و
            510 نفر گزارش شده است. شکل زیر موقعیت شهرستان تهران را نشان می دهد.{" "}
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
            مي‌شود. در ادامه تحليل شهرستان تهران ارائه‌شده‌است.
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
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد.
          </p>
          <p>
            طبق بررسی های انجام شده و نظر به اینکه این شهرستان یکی از کلان
            شهرستان های ایران است، مشاغلی خدماتی از جمله مهم ترین و سودآور ترین
            کسب و کار ها برای سرمایه گذاری به شمار می‌روند که پتانسیل های
            ارزآوری را دارد.{" "}
          </p>
          <p>
            احداث شرکت خدماتی-نظافتی، ایجاد واحدی برای تاسیسات برق، توسعه حمل و
            نقل، راه اندازی خدمات کامپیوتری، ایجاد مغازه های لوازم یدکی و
            تعمیرات خودرو، خدمات مشاوره، بازاریابی و فروش، آرایشگری و خیاطی و
            مزون های لباس از جمله مواردی هستند که در حال حاضر وجود داشته و ارزش
            افزوده خوبی داشته اند؛ لذا راه اندازی و توسعه آنها از جمله گزینه های
            سودآور برای علاقه مندان محسوب می‌شود.
          </p>
          <p>
            احداث رستوران و واحد های تهیه غذا، راه اندازه کارواش نانو، تعمیرات
            تلفن همراه، فروشگاه زنجیره ای و استارتاپ نیز از جمله کسب و کارهای
            سوددهی هستد که برای دستیابی به اقتصاد پایدار می‌توان به از آنها
            استفاده کرد.
          </p>
          <p>
            با توجه به اینکه اینکه پایتخت کشور در این شهرستان واقع شده و مهاجرت
            افراد تحصیل کرده ای که جویای کار هستند، به آن زیاد است، راه اندازی
            مشاغل تخصصی تر مانند خدمات چات، دفاتر مهندسی، خدمات IT و خدماتR&D
            گزین هایی برای اشتغالزایی هستند.{" "}
          </p>
          <p>
            احداث واحد های آموزشی مانند، آموزشگاه زبان، کنکور، فنی حرفه ای مانند
            حسابداری و ... و همچنین مهدکودک، سالن ورزشی، نیز از جمله مزیت های
            این شهرستان است که همچنان جای کار دارد.{" "}
          </p>
          <p>
            در انتها نیز می‌توان به راه اندازه مغازه های فروش پوشاک، کفش، لوازم
            خانگی، مواد غذایی مانند گوشت و میوه و ...، داروخانه و همچنین
            سوپرمارکت اشاره کرد.
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
            بر مبنای اینکه تولیدات دامی و کشاورزی در این شهرستان بسیار کم است و
            با فرض واردات مواد اولیه، راه اندازی کسب و کارهایی مانند تولید چیپس
            میوه، آبمیوه، سایر فراورده های میوه مانند لواشک، کمپوت، کنسانتره،
            ژله و... به صورت خانگی و یا در مقیاس های بزرگتر از جمله کسب و کارهای
            سودده این حوزه به شمار می‌روند و نقش بزرگی در توسعه اقتصاد و
            اشتغالزایی خواهند داشت.
          </p>
          <p>
            خشک کردن میوه‌جات، یکی از روش‌هاي جلوگیري از فساد میکروبی آن‌ها است.
            در این روش، در اثر کاهش میزان رطوبت، امکان فساد میکروبی بسیار کم شده
            و سرعت دیگر واکنش‌هاي مضر نیز، به مقدار قابل توجهی کاهش می‌یابد. خشک
            کردن، ضمن اینکه روي محصول اثر حفاظتی دارد، وزن و حجم آن را نیز به
            میزان چشمگیری کاهش می‌دهد، در نتیجه از هزینه‌های حمل و نقل و
            ذخیره‌سازي نیز می‌کاهد. با توجه به اینکه بخشی از بازار میوه خشک
            ایران، سهم محصولات وارداتی است، با تولید مشابه داخلی این میوه‌ها (از
            نظر نوع و کیفیت)، می‌توان مانع واردات و خروج میلیون‌ها دلار ارز از
            کشور شد. همچنین نیاز بیش از حد برخی از کشورها به این گونه محصولات
            (به دلیل شرایط ویژه اقلیمی آن‌ها، هزینه بالای حمل و نقل سبزیجات و
            میوه‌های تازه و محدود بودن زمان نگه‌داری آن‌ها)، فرصت مناسبی برای
            رونق تولید و صادرات چیپس میوه فراهم آورده است.
          </p>
          <p>
            تولید پودرگوجه، ترشی جات، رب گوجه، رشته آشی و پلویی، نان صنعتی، نان
            فانتزی، شیرینی و همچنین فراوری سبزی جات و گیاهان دارویی نیز از جمله
            کسب و کارهایی است که در صورت تامین اقلام اولیه از سایر شهرستان ها
            پتانسیل های ارزآوری را خواهند داشت.{" "}
          </p>
          <p>
            صنعت تولید رب گوجه فرنگی دارای کاربردهای فراوانی از قبیل چاشنی و
            بهبود دهنده رنگ و طعم انواع غذا، ماده اولیه سس‌ها و کنسروها است.
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
            می‌شود.{" "}
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
            باشد. همچنین یکی از محصولاتی که از گردو می توان تولید کرد، ترشی گردو
            است. این ترشی خوشمزه علاوه بر خواص بی نظیر در کاهش سطح کلسترول نیز
            مفید است.
          </p>
          <p>
            فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز به سرمايه‌گذاري
            زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته باشد. یکی از
            فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات دارای
            تکنولوژی و دانش فنی پیچیده ای نمی باشد و با توجه به ظرفیت تولید
            گیاهان دارویی در شهرستان شیراز و نیز سهولت صادرات این محصولات به
            شهرها و کشورهای دیگر، می توان با سرمایه‌ای اندک به این کسب و کار
            مشغول شد. خشک کردن و بسته‌بندی نیز از دیگر فرآوری‌های گیاهان دارویی
            است که می‌توان با فعالیت در آن‌ها به سود رسید.
          </p>
          <p>
            با توجه به گرانی نرخ اجاره ها، افزایش هزینه ها و خیلی موارد دیگر،
            راه اندازی مشاغل خانگی که بتواند در محیط کوچک که به درآمدی کارآمد
            برساند، نکته جذابیست و امروزه در سراسر دنیا همین مشاغل خانگی، رو به
            افزایش بوده و مورد استقبال بسیاری از زنان و مردان واقع شده است.
            فراوری سبزی جات شامل پاک کردن، خشک کردن، سرخ کردن و بسته بندی، یکی
            از مشاغل خانگی پرطرفدار است که با توجه به وجود مواد اولیه آن در این
            شهرستان، باعث ارز آوری و اشتغالزایی می‌شود.
          </p>
          <p>
            گروه ديگري از فرآورده هاي خميري حاصل از آرد گندم انواع رشته ها
            هستند. رشته فرآورده‌اي است كه از مخلوط كردن آرد گندم، آب و نمك پس از
            طي مرحله عمل آوردن به وسيله ماشين‏هاي مخصوص، تهيه و پس از خشك كردن
            به بازار عرضه مي شود. رشته آش رشته اي است كه داراي رنگ سفيد متمايل
            به شيري مي باشد و از آرد ستاره که 21 درصد از سبوس خود را از دست داده
            است، تهيه مي شود.
          </p>
          <p>
            پخت شیرینی در ابعاد وسیع و کارگاهی و حتی در محیطی کوچک (در خانه)
            امکان پذیر است.شیرینی محصولی است که در انواع متفاوت و با طعم های
            متنوعی تهیه می شود. به علاوه این که با تغییر در مواد تشکیل دهنده آن
            می توان برای افراد رژیمی هم شیرینی تهیه کرده و این افراد را نیز به
            بازار هدف خود اضافه کرد.این کسب و کار را می توان با تجهیزات کم و
            سرمایه پایینی شروع کرد و در زمان کوتاه با فروش محصول به سود بالایی
            رسید. پخت شیرینی یکی از مشاغل زودبازده بوده و یک فرصت شغلی مناسب
            مخصوصا برای زنان خانه دار محسوب می شود.یافتن بازار فروش محصول یکی از
            ضروریات این حرفه بوده که با تبلیغات مناسب مخصوصا در فضای مجازی می
            توان به آن دست یافت . توجه به این نکته ضروری است که یکی از لازمه های
            موفقیت در این شغل گذراندن دوره های آموزشی مرتبط با پخت شیرینی است.
          </p>
          <p>
            امروزه شغل نانوایی یکی از مشاغل پایه‌ای و پر رونق است که در طول سال
            همیشه درآمدزا می باشد. نان محصولی است که با توجه به سلیقه یا نوع
            غذای مصرفی خانواده ها، همواره بر سر سفره ها قرار دارد. نان‌ها فقط به
            صورت نان های ساده و معمول مانند لواش، سنگک و … نیستند بلکه نان های
            فانتزی نیز تولید می شوند که مشتریان خاص خود را دارند. امروزه راه
            اندازی کسب و کار تولید نان فانتزی بازاری رو به رشد دارد. این کسب و
            کار با تولید نان هایی با اندازه و طعم های متفاوت با استقبال مردم
            مواجه شده‌است. باتوجه به شرایط شهرستان، فعالیت در این زمینه مزیت
            دارد.
          </p>
          <p>
            در تولید نان به روش صنعتی، نان با استفاده از تکنولوژی روز دنیا،
            ماشین ¬آلات مدرن و به صورت مکانیزه (تمام اتوماتیک) و بدون دخالت دست
            و در مقیاس بالا تولید می گردد. از مزایای تولید صنعتی نان، ارتقاء
            کیفیت نان، ارزش غذایی بیشتر، ضایعات کمتر، تنوع محصول و بسته بندی و
            استفاده بهینه از انرژی است.
          </p>
          <p>
            در انتها نیز می‌توان به راه اندازه فراوری محصولات دامی مانند تهیه
            لبنیات به صورت صنعتی و سنتی، سوسیس و کالباس و همچنین ناگت مرغ اشاره
            کرد.
          </p>
          <p>
            شیر و فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان
            است که از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز و
            پروتئین، غنی می‌باشد و همیشه استقبال بسیار خوبی از این نوع محصولات
            می شود. البته باید توجه داشت برای موفقیت در این زمینه باید به
            بالابردن توانایی رقابت با نشان‌های تجاری معروف نیز فکر کرد.
          </p>
          <p>
            تولید محصولات مشتقی از گوشت‌های فرآوری شده، در هر زمانی سوددهی دارد
            و از شغل‌های آزاد پردرآمد محسوب می‌شود. در بین فراورده های عمل آوری
            شده از گوشت، سوسیس و کالباس به دلیل آماده سازی سریع و همچنین طعم و
            مزه مطلوب، مصرف بیشتری دارد. سوسیس و کالباس حاوی پروتئین های حیوانی
            کافی، چربی، کربوهیدرات و ویتامین است و می توان آن‌ها را از جمله
            غذاهای آماده در سفره خانواده ها نام برد. برای حفظ این جایگاه و
            افزایش تقاضای این محصولات، علاوه بر انتخاب روش های مناسب تولید و
            فراوری، باید به نوع و شکل بسته بندی آنها نیز توجه نمود. باتوجه به
            رونق دامداری در این شهرستان، راه‌اندازی این کسب‌وکار مزیت دارد.
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
            کسب و کارهای پیشنهاد شده در این رسته بسته بندی برخی از اقلام مانند
            خشکبار غلات و حبوبات است که مقدمات صادرات انها را فراهم می‌کند و با
            توجه به صنعتی شدن جوامع و کمبود زمان لازم، بازار مصرف خوبی خواهد
            داشت. البته لازم به ذکر است که مواد اولیه این صنایع در این شهرستان
            وجود ندارد و سرمایه گذار باید این محصولات اولیه ررا از سایر شهرستان
            های تهیه کند.
          </p>
          <p>
            تولید زغال فشرده نیز از دیگر فعالیت های اقتصادی موفق خواهد بود. یکی
            از پرمصرف ترین سوخت های جهان، زغال است، ولی آلودگی هوا و آلودگی
            محیطی را به همراه دارد. زغال ها اگر در مجاورت اکسیژن آتش بگیرند دود
            فراوانی تولید می کنند ولی اگر اکسیژن از آن ها حذف شود بدون هیچ دودی
            می سوزند. زغال فشرده بهترین و مناسب ترین جایگزین برای زغال های طبیعی
            هستند چون هم توجیه اقتصادی دارند و هم برای طبیعت و سلامتی انسان ها
            مضر نیستند. زغال فشرده برعکس زغال های طبیعی از چوب درخت به وجود نمی
            آید و همین امر باعث می شود که درختان کمتری قطع شود. با توجه به این
            که کسب و کار تولید زغال فشرده یک کسب و کار جدید و نو است، راه برای
            کارآفرینان تازه کار به این حوزه باز است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            تهران، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما پتانسیل
            های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای
            صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            شهرستان تهران یکی از مراکز اصلی تولید مصنوعات چوبی مانند مبلمان و ام
            دی اف است. تولیدات این صنعت که تاکنون بازار مصرف و عملکرد خوبی داشته
            اند، همچنان پتانسیل های توسعه و ارزآوری را دارد.
          </p>
          <p>
            تولید تابلو های ال ای دی و تخته وایت برد نیز از دیگر پیشنهادات این
            حوزه است که قابلیت های سوددهی را دارد و از جمله مشاغل اشتغالزا به
            شمار می‌رود.
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
            قالیبافی یکی از مشاغلی است که در حال حاضر در شهرستان انجام می‌شود و
            برخی از مردم در انجام آن مهارت دارند. این حرفه در صورت بازاریابی و
            تولید محصولات متنوع، قابلیت توسعه دارد. قالیبافی از مشاغل خانگی
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
            گليم بافي يكي از شاخه هاي قاليبافي است و در آن از طرح هاي مختلف محلي
            استفاده مي شود. برخی از مردم شهرستان با مهارت گلیم بافی آشنا هستند و
            این کار را انجام می‌دهند. این مورد نیز در صورت تامین بازار، همچنان
            جای کار دارد.
          </p>
          <p>
            عروسک بافی و تراش سنگ فیروزه نیز از جمله پیشنهادات مناسب حوزه صنایع
            دستی است که با توجه به گردشگری بودن شهرستان، گزینه های مناسبی برای
            سوددهی به شمار می‌روند.
          </p>
          <p>
            در ادامه نیز می‌توان به مزیت هایی مانند قلاب دوزی، گلدوزی، شمع سازی،
            ساخت سرامیک های دست ساز و سفالگری اشاره کرد. این موارد که در حال
            حاضر نیز وجود داشته و برخی از مردم در انجام آنها مهارت دارند، در
            صورت بازاریابی و تبلیغات مناسب، سوددهی قابل توجهی خواهند داشت.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی از جمله مشاغلی است که توسط برخی از مردم شهرستان انجام
            می‌شود. در این زمینه چند واحد پرورش ماهیان زینتی وجود دارد. کار کردن
            در این حوزه به دلیل وجود منابع آبی مزیت داشته و سود خوبی را به دنبال
            دارد.{" "}
          </p>
          <p>
            شاید سال‌ها قبل نگهداری ماهیان زینتی، موضوع چندان شایعی نبود و تنها
            عده‌ی معدودی در خانه‌های خود، آكواريوم و ماهی زینتی نگهداری
            می‌کردند؛ اما در سال‌های اخیر، با توجه به رواج آپارتمان‌نشینی و دور
            افتادن انسان از طبیعت، شرایط به‌گونه‌ای رقم خورده است که بازار
            ماهیان زینتی رونق گرفته و زمینه‌ساز ایجاد مشاغل مختلف شده است.
            به‌طوری‌که امروزه در بسیاری از شهرها، چندین مغازه به خرید و فروش این
            آبزیان مشغول هستند. پرورش ماهیان زینتی نیاز به آب کمی دارد و می‌توان
            از آب‌های شهری برای تولید آنها استفاده کرد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            شهرستان تهران یکی از شهرستان هایی است که فضای شهری گسترده ای دارد؛
            لذا باغداری یکی از حوزه های کم رنگ این شهرستان است. در حال حاضر تنها
            باغات میوه هایی مانند سیب، انجیر و گردو وجود دارند که به صورت شخصی
            کار می‌کنند و تولیدات گسترده برای فروش ندارند.؛ اما به نظر می‌رسد
            کسب و کارهایی مانند احداث گلخانه صیفی جات و یا پرورش قارچ در صورت
            وجود فضای مورد نیاز، قابلیت های سرمایه گذاری را دارند.
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
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در این شهرستان به صورت بسیار محدود انجام می‌شود و بیشتر
            فعالان این زمینه پرواربندی گوسفند را دنبال می‌کنند. با توجه به فضای
            شهری غالب بر شهرستان، این رسته تنها در صورت وجود فضای مناسب پتانسیل
            توسعه را دارد.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز جامعه به
            منابع غذایی، از اهمیت بالایی برخوردار است و سود سرشاری دارد. پرورش
            طیور نیز مانند دامداری به صورت محدود دنبال می‌شود و در صورت وجود
            فضای مناسب برای پرورش، پتانسیل های سرمایه گذاری را دارد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            با توجه به اینکه در این شهرستان فضایی برای کشت محصولات این حوزه وجود
            ندارد، اقداماتی برای این حوزه صورت نگرفته است.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
