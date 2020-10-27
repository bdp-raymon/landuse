import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"

export default function () {
  const city = Provinces["IR-05"].cities["IR-0501"]

  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان اشتهارد",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        food_industry: "صنایع غذایی",
        livestock: "دامداری",
        industry: "صنعت",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        agriculture: "زراعت",
        birds: "طیور",
        gardening: "باغداری",
        services: "خدمات",
        fisheries: "شیلات",
        handicrafts: "صنایع دستی",
      },
    },
  }

  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان اشتهارد در استان البرز واقع شده است. آب و هوای این استان تحت
            تأثیر سلسله کوه‌های البرز، دارای زمستان‌های سرد و تابستان‌های معتدل
            است. جنوب استان به دلیل مجاورت با دشت، آب و هوای بسیار خشک دارد و
            این ویژگی خاص این منطقه به‌شمار می‌رود که از یک سو به رشته کوه‌های
            البرز می‌رسد و از سوی دیگر به حاشیه یکی از خشک‌ترین بیابان‌های ایران
            منتهی می‌شود. این شهرستان از طرف شمال به ارتفاعات «حلقه‌دره» و
            محدوده شهرستان نظرآباد، از طرف جنوب به ارتفاعات «قزل‌باش» و محدوده
            شهر ملارد، از طرف شرق به رودخانه شور و محدوده شهر کرج و از طرف غرب
            به محدوده شهر بوئین زهرا محدود می‌شود. جمعیت این شهرستان طبق سرشماری
            سال 1395، 37 هزار و 876 نفر بوده است.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان اشتهارد">
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
            مي‌شود. در ادامه تحليل شهرستان اشتهارد ارائه‌شده‌است.
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
        <Section size="h3" id="food_industry" title="صنایع غذایی">
          <p>
            راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال و عاملی مهم در توسعه پایدار امنیت غذایی محسوب می‌شود که کاهش
            هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان
            ممکن می‌کند. تاکنون در حوزه صنایع غذایی فعالیت‌هایی در سطح شهرستان
            انجام شده؛ اما همچنان ظرفیت برای افزایش فعالیت وجود دارد.
          </p>
          <p>
            علیرغم اینکه گندم از جمله عمده محصول تولیدی در حوزه زراعت است،
            شهرستان اشتهارد فاقد کارخانه آرد است؛ بنابراین ایجاد چنین واحدی از
            جمله نیاز های مبرم این منطقه است که توجیه اقتصادی دارد.{" "}
          </p>
          <p>
            با آسیاب کردن گندم، جوانه و سبوس یا همان پوسته از بخش آردی آن تفکیک
            می‌گردد. آرد با توجه به میزان سبوس جدا شده، به انواع مختلفی
            تقسیم‌بندی می‌گردد. از انواع آرد می‌توان به آرد قنادی، آرد ستاره،
            آرد سبوس گرفته و آرد کامل اشاره نمود که از این میان آرد کامل به لحاظ
            میزان سبوس بالای آن، دارای ارزش غذایی قابل توجهی است.
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
            رونق دامداری در این شهرستان، راه‌اندازی این کسب‌وکار مزیت دارد. لازم
            به ذکر است تهیه ناگت مرغ نیز از جمله کسب و کارهایی است که به دلیل
            گستردگی پرورش مرغ قابلیت های سرمایه گذاری را دارد.
          </p>
          <p>
            طبق بررسی های انجام شده، تولید لبینات به صورت صنعتی سودآور خواهد
            بود؛ زیرا در حال حاضر تولید لبنیات به صورت سنتی انجام می‌شود و بیشتر
            لبنیات مورد نیاز شهرستان از سایر مناطق تامین می‌شود؛ بنابراین ایجاد
            این واحد یکی از نیاز های مبرم این شهرستان است.{" "}
          </p>
          <p>
            شهرستان اشتهارد یکی از شهرستان هایی است که باغداری در آن اخیرا توسعه
            یافته و محصولات با کیفیتی در این حوزه تولید می‌شوند؛ بنابراین راه
            اندازی کسب و کارهایی مانند تولید آبمیوه، میوه خشک، چیپس میوه و سایر
            فراورده های میوه مانند کمپوت، لواشک، کنسانتره، مربا و ... سودآوری
            خوبی به دنبال دارد. در ضمن با توجه به اینکه برداشت سالانه آلو در این
            منطقه زیاد است، صرف نظر از مقدار تازه خوری آن، می‌توان صنایع فراوری
            آن شامل تولید لواشک، آلوچه و ترشک آن را ایجاد کرد تا علاوه بر
            جلوگیری از هدر رفت مقدار مازاد، سود خوبی هم نصیب سرمایه گذار شود.
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
        </Section>
        <Section title="دامداری" id="livestock" size="h2">
          <p>
            دامداری در شهرستان اشتهارد به صورت های سنتی، صنعتی و نیمه صنعتی
            انجام می‌شود. مردم این شهرستان در زمینه دام سبک بیشتر گوسفند نژاد
            بومی و پشندی را پرورش می‌دهند. البته پرورش بز بومی نیز به صورت محدود
            در برخی از نقاط شهرستان وجود دارد. در زمینه دام سنگین نیز بیشتر گاو
            هلشتاین دورگ و گاو بومی را پرورش می‌دهند. پرورش تمام موارد فوق با
            اقلیم شهرستان سازگار است و ظرفیت های توسعه را دارد. البته مردم بیشتر
            از دام سبک استقبال می‌کنند؛ لذا پرورش دام سبک در اولویت بهتری قرار
            می‌گیرد .
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
            به طورکلی بز به‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر و گوشت
            در مناطق مختلف پرورش داده می‌شود. جثه کوچک، کم توقع بودن و مقاومت در
            برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز به‌عنوان حیوانی
            محبوب در بین دامداران تلقی شود. در نقاط مختلف از این حیوان علاوه بر
            تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز استفاده می‌شود.
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
          <p>
            امروزه به منظور بهره برداری بهینه، از گاو های دورگ استفاده می‌شود.
            که این موارد حاصل تلقیح نژاد اصلی و نژاد بومی هستند. گوساله ای که از
            طریق آمیخته گری متولد می شود هم برخی خصوصیات ارثی گاو نر اصیل را
            دارا می باشد و هم برخی خصوصیات ارثی گاو ماده بومی را دارد. در نسل
            های بعدی به تدریج صفات منتقل شده از گاو های اصیل در گوساله ها ظاهر
            می شود و تولیدات شیر و گوشت اغلب آنها نیز به نحو قابل توجهی بیشتر می
            شود. در شهرستان اشتهارد نیز پرورش گاو هلشتاین دورگ دورگ انجام می‌شود
            و با توجه به سازگاری که با اقلیم منطقه داشته، همچنان قابلیت توسعه و
            سرمایه گذاری را دارد.
          </p>
          <p>
            زنبورداری نیز از جمله مشاغلی است که در این شهرستان به صورت محدود
            انجام می‌شود و تنها در صورت وجود شرایط کافی، پتانسیل های سرمایه
            گذاری و سوددهی را دارد. پرورش زنبور اگر همراه با رعایت اصول علمی
            صورت پذیرد، می تواند پیشه‌ای سودآور باشد. زندگی این حشرات به سبک
            کلنی باعث شده تا پرورش دهندگان زنبور از اشتغالی پایدار بهره مند شوند
            چراکه میزان بالای زاد و ولد زنبورها باعث سودآوری بیشتر برای پرورش
            دهندگان خواهد شد. بر خلاف افکار غالب عمومی که تصور می کنند مهمترین
            فایده زنبورعسل، تولیدعسل و سایر محصولات و فراورده های مرتبط با شهد و
            عسل است، در واقع بالغ بر 90 درصد فواید زنبورعسل مربوط فعالیت گرده
            افشانی است. عدم فعالیت زنبورها و دیگر حشراتی که گرده افشانی را انجام
            می دهند باعث عدم باروری و نابودی تدریجی گیاهان و درختانی که برای
            گرده افشانی به این آنها وابسته اند می شود. افراد با تجربه معمولا در
            کنار پرورش زنبور عسل به کشاورزی و تولید محصولات زراعی می پردازند و
            با یک تیر دو نشان می زنند، زیرا با ادغام این 2 فعالیت علاوه بر تامین
            مواد غذایی برای زنبورها به دلیل کیفیت در گرده افشانی، به کشت و
            زراعتی با کیفیت و محصولی بی نظیر نیز دست خواهند یافت.
          </p>
        </Section>
        <Section title="صنعت" id="industry" size="h2">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            اشتهارد، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما پتانسیل
            های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای
            صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            تولید مصالح ساختمانی نیز از جمله پیشنهاداتی است که به دلیل رونق ساخت
            و ساز در شهرستان، پتانسیل های سوددهی را دارد.
          </p>
          <p>
            احداث نیروگاه خورشیدی نیز از دیگر پیشنهادات خوب و سودده این حوزه به
            شمار می‌رود که پتانسیل های سرمایه گذاری را دارد. در نیروگاه خورشیدی
            با استفاده از پنل‌های خورشیدی، انرژی خورشید را به الکتریسیته یا همان
            برق تبدیل می‌کنند. کاهش بارش در سال‌های اخیر و کمبود آب پشت سدها
            برای تولید برق، افزایش جمعیت و ساخت ‌وساز و در دسترس بودن نور خورشید
            بدون پرداخت هزینه‌ای، سبب شده دولت اجازه اجرا و حمایت از طرح احداث
            نیروگاه خورشیدی را در خانه ها، کارخانه ها و... بدهد.
          </p>
          <p>
            مشاغلی مانند تولید لوازم برقی، ادوات کشاورزی و مواد شوینده و همچنین
            لوازم بهداشتی مانند مسواک، محصولات مراقبت از پوست و مو و ... نیز زیر
            ساخت های توسعه را دارد.
          </p>
          <p>
            در این شهرستان دو شهرک صنعتی وجود دارد. همچنین کارخانه های تولید
            مواد آرایشی و بهداشتی، اکسیژن، قطعات خودرو، تجهیزات پزشکی، کاشی و
            سرامیک، لوازم خانگی، انواع فلزات و ... در داخل و خارج از شهرک صنعتی
            فعال هستند.
          </p>
        </Section>
        <Section
          title="صنایع تبدیلی"
          id="conversion_complementary_industries"
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
            تولید و بسته بندی کمپوست (افزودن کود شیمیایی به کود حیوانی) هم از
            کسب و کار های خوبی است که قابلیت سرمایه گذاری را دارد؛ زیرا در این
            شهرستان کشاورزی و دامداری به حد مطلوبی انجام می‌شود؛ لذا مشکلی در
            خصوص تولید و بازار مصرف این مورد وجود ندارد. كود حيواني علاوه بر
            تأمين قسمتي از نياز غذایي محصول، ساختمان فيزيكي خاك را بهبود بخشيده
            تا ريشه محصول بهتر بتواند تنفس كند و فضاي بهتري را برای رشد و گسترش
            ريشه در اختيار داشته باشد؛ بنابراین طرفداران زیادی مخصوصا در بین
            باغداران دارد.
          </p>
          <p>
            بسته بندی گوشت قرمز از جمله مزیت هایی است که به سبب رونق دامداری،
            قابلیت سرمایه گذاری و سوددهی را دارد . یکی از روش‌های تازه ماندن
            گوشت، بسته‌بندی مناسب است. بسته بندی باید به گونه‌ای باشد که گوشت را
            در مقابل نفوذ طعم، بو، رنگ و سایر عوامل خارجی محافظت کرده و از خشک
            شدن و تبخیر سطحی جلوگیری کند. همچنین بسته بندی باید خواص حسی و ظاهری
            و سایر ویژگی‌های گوشت را حفظ و همچنین گوشت را در برابر آلودگی های
            میکروبی و سایر آلودگی ها نگهداری کند.
          </p>
          <p>
            یکی از پرمصرف ترین سوخت های جهان، زغال است، ولی آلودگی هوا و آلودگی
            محیطی را به همراه دارد. زغال ها اگر در مجاورت اکسیژن آتش بگیرند دود
            فراوانی تولید می کنند ولی اگر اکسیژن از آن ها حذف شود بدون هیچ دودی
            می سوزند. زغال فشرده بهترین و مناسب ترین جایگزین برای زغال های طبیعی
            هستند چون هم توجیه اقتصادی دارند و هم برای طبیعت و سلامتی انسان ها
            مضر نیستند. زغال فشرده برعکس زغال های طبیعی از چوب درخت به وجود نمی
            آید و همین امر باعث می شود که درختان کمتری قطع شود. با توجه به این
            که کسب و کار تولید زغال فشرده یک کسب و کار جدید و نو است، راه برای
            کارآفرینان تازه کار به این حوزه باز است. با توجه به اینکه تولیدات
            باغی در این شهرستان به میزان قابل توجهی وجود دارد، سورت و بسته بندی
            میوه یکی از مشاغلی است که علاوه بر اشتغالزایی، سوددهی خوبی را به
            همراه خواهد داشت. سورتینگ و بسته بندی از فرآیند هایی است که بر میزان
            صادارت تاثیر دارد. هدف از سورتینگ، دسته بندی و درجه بندی انواع محصول
            بر اساس سایز و کیفیت است. به طوری که بتوان محصول نهایی را به صورت یک
            دست و یک اندازه در بسته بندی های مختلف در بازار ارائه نمود و مشتری
            نهایی در طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن باشد.
            بسته بندی نهایی میوه و سبزی پس از عملیات سورتینگ به منظور جابجایی
            آسان و همچنین حفاظت از محصول نهایی سورتینگ شده صورت می گیرد. از
            ویژگی های بسته بندی مناسب میوه می‌توان به عدم استفاده از مواد مضر و
            شیمیایی در ساختار بسته بندی، سهولت فریز کردن و نگهداری در سردخانه،
            قابلیت حمل و نقل مناسب، پاسخگویی به نیازهای نهایی بازار به طوری که
            در وزن ها و بسته های مختلف که همه سلیقه ها را در بر بگیرد، اشاره
            کرد.
          </p>
          <p>
            لازم به ذکر است در صورت دقت نکردن به بازارفروش و ظرفیت شهرستان، تمام
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد.
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازارفروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section title="زراعت" id="agriculture" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی،
            ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام برد.
          </p>
          <p>
            طبق بررسی های انجام شده، کشت برخی از دانه های روغنی مانند کلزا، به
            صورت پراکنده در برخی از نقاط شهرستان اشتهارد وجود داشته و با توجه به
            اینکه با شرایط اقلیمی و اکولوژیکی شهرستان سازگار است، گزینه ی مناسبی
            برای بهره وری بهتر از آب و خاک محسوب می‌شود.{" "}
          </p>
          <p>
            کشت کلزا باعث از بین رفتن چرخه زندگی آفات، بیماری ها و علف های هرز
            گردیده و با کاهش جمعیت آنها موجب صرفه جویی در مصرف سموم و کاهش
            آلودگی های زیست محیطی می گردد. با توجه به آنکه زمان کشت کلزا در فصل
            پاییز است، نیاز گیاه به آب کم می‌باشد و با استفاده از نزولات جوی می
            توان به کشت آن اقدام نمود. کلزا با تولید مقادیر قابل توجهی علوفه می
            تواند در تغذیه دام های منطقه نقش موثری داشته باشد. همچنین برگردان
            بقای کلزا به خاک باعث افزایش حاصلخیزی خاک و بهبود ساختمان خاک خواهد
            شد. کشت کلزا به عنوان یک دانه روغنی بسیار مهم در تولید محصولات حوزه
            صنایع غذایی و یا تولید انواع نهاده‌های خوراکی دام و طیور متداول است.
            روغن کلزا ازجمله مشتقات این گیاه است که امروزه به دلیل سالم بودن و
            داشتن کمترین کلسترول و اسیدهای چرب اشباع ‌شده مورد استقبال قرارگرفته
            است. تحقیقات دانشمندان نشان می‌دهد که دانه کلزا 40-30 درصد روغن و
            کنجاله‌اش50-40 درصد پروتئین دارد.
          </p>
          <p>
            گندم و جو از جمله محصولات عمده و استراتژیک این شهرستان هستند که
            تاکنون عملکرد خوبی داشته اند و با توجه به سازگاری با شرایط شهرستان،
            پتانسیل های سرمایه گذاری را دارند. در میان محصولات کشاورزی، کاشت
            گندم نسبت به بقیه کم دردسرتر است.گندم در بازه زمانی حدودا هشت ماهه
            به ثمر نشسته و به مرحله سود دهی می رسد و در دو نوع بهاره و پاییزه
            کشت می شود که محصول دهی پاییزه آن بیشتر است. علاوه بر خود گندم، کاه
            آن نیز مشتری خاص خودش را دارد. بعد از برداشت محصول، زمین آن هم
            چراگاه گوسفندان می‌شود. همچنین مورد حمایت های دولت واقع شده و کود
            شیمیایی و بذر نیز به شکل یارانه ای در اختیار کشاورزان قرار می گیرد؛
            بنابراین توسعه این کشت توجیه اقتصادی دارد. جو از دیرباز در سبد تغذیه
            دام جایگاه ویژه داشته و به صورت دانه و علوفه سبز مورد استفاده قرار
            می‌گیرد. از جو برای تهیه نان و پخت سوپ نیز استفاده می شود و در تهیه
            غذای کودک کاربرد دارد. جوشانده جو داروي خوبي براي مبتلايان به تب و
            كم خوني و سوء هاضمه بوده و پایین آورنده کلسترول است.
          </p>
          <p>
            با توجه به اینکه کشت برخی از گیاهان علوفه ای مانند یونجه در این
            شهرستان انجام شده و با موفقیت همراه بوده است، افزایش سطح زیر کشت
            آنها‌ فرصت مناسبی برای سرمایه گذاری می‌باشد. در میان گیاهان علوفه
            ای، یونجه به خاطر ارزش غذایی بالا و عملکرد خوب آن از اهمیت خاصی
            برخوردار است همچنین به علت وجود باکتریهای ریزوبیوم در ریشه های خود
            قادر به تثبیت ازت هوا بوده و به این طریق باعث باروری خاک می شود از
            طرفی دیگر گیاهی چندساله است و تا چند سال می توان برداشت انجام داد؛
            بنابراین توسعه این کشت توجیه اقتصادی داشته و امکان تامین بخشی از
            علوفه مورد نیاز دام، فراهم می‌شود که علاوه بر ایجاد اشتغال مولد و
            حصول درآمد مناسب برای زارعین، در استفاده بهینه از ظرفیت های پرورش
            دام نیز موثر خواهد بود و نیاز شهرستان برای وارد کردن نهاده های مورد
            نیاز دام از سایر مناطق را برطرف خواهد کرد.
          </p>
          <p>
            با توجه به اینکه کشت پنبه در حال حاضر در این شهرستان وجود دارد،
            توسعه سطح زیر کشت آن در صورت مدیریت منابع آبی، سودآور خواهد بود.
          </p>
        </Section>
        <Section title="طیور" id="birds" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز جامعه به
            منابع غذایی، از اهمیت بالایی برخوردار است و سود سرشاری دارد.{" "}
          </p>
          <p>
            طبق بررسی های انجام شده، پرورش شترمرغ از جمله کسب و کار های پرسود
            این حوزه خواهد بود؛ زیرا پرورش این مورد در حال حاضر به صورت صنعتی
            انجام شده و عملکرد و سوددهی خوبی داشته است
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
          <p>
            پرورش بوقلمون و بلدرچین از جمله مشاغلی هستند که در حال حاضر انجام
            می‌شوند و با توجه به سازگاری با اقلیم منطقه قابلیت توسعه و اجرا در
            سطح وسیع تر را دارند.
          </p>
          <p>
            گوشت بوقلمون دارای خواص غذائي ويژه ای است و محدوديت مصرف خاصي نيز
            ندارد؛ بنابراین مي تواند جايگزين مناسبی براي گوشت قرمز علی الخصوص در
            بيمارانی که مصرف گوشت قرمز برای آنها با محدوديت هایی همراه است، مطرح
            گردد. از ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز
            در يک لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد وزن يک لاشه 8
            کيلوئي را تشکيل مي دهد. تولید بوقلمون گوشتی به دلیل به صرفه بودن
            تولید، در دسترس بودن نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز
            امکان انجام صادرات به کشورهای منطقه حائز اهمیت است.
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
            در شهرستان اشتهارد تعداد زیادی مرغداری صنعتی وجود دارد که در زمینه
            پرورش مرغ گوشتی و مرغ تخم گذار فعالیت می‌کنند. پرورش این موارد که با
            شرایط شهرستان سازگار هستند، تنها در صورت وجود تقاضا و بازار مصرف
            پتانسیل های سرمایه گذاری را دارد.
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
        </Section>
        <Section title="باغداری" id="gardening" size="h3">
          <p>
            باغداری نیز یکی از حوزه‌های اشتهارد است. تولید اشتغال توسط باغداری
            بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار رونق
            می‌بخشد. کشاورزی و ازجمله باغبانی در توسعه ملی و افزایش رفاه عمومی،
            فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع درآمد و
            عدالت اجتماعی موثر است.
          </p>
          <p>
            صیفی جاتی مانند گوجه از جمله محصولات باغی این شهرستان هستند که با
            کیفیت بالایی تولید می‌شوند؛ بنابراین توسعه کاشت این محصولات که
            طرفداران زیادی دارند از جمله برنامه های راهبردی برای توسعه اقتصاد
            شهرستان است.
          </p>
          <p>
            گردو و بادام از جمله میوه های آجیلی این شهرستان هستند که به صورت
            پراکنده در منطق کوهستانی تولید شده و ظرفیت های توسعه و ارز اوری را
            دارند. بادام یکی از میوه های سردرختی خشک و از جمله محصولات ارگانیک
            محسوب می شود. از ویژگی های درخت بادام این است که نسبت به کم آبی
            مقاوم و نگهداری آن نیز نسبت به سایر درختان آسانتر است. این میوه ی
            باارزش با قیمت بالایی در بازارفروش، عرضه می شود و توسعه باغات مربوط
            به آن با درآمدزایی بسیار خوبی روبه رو خواهد بود.
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
            از دیگر پیشنهادات خوب حوزه باغداری، می‌توان به احداث باغات آلو اشاره
            کرد که در حال حاضر وجود داشته و محصول با کیفیتی را تولید می‌کنند.{" "}
          </p>
          <p>
            با توجه به اینکه باغات برخی از میوه ها مانند سیب، زردآلو، هلو و شلیل
            در این شهرستان وجود دارد، توسعه این موارد نیز از جمله گزینه های شغلی
            مناسب برای اشتغالزایی و سوددهی است؛ زیرا کیفیت خوبی دارند و با اقلیم
            شهرستان سازگار هستند.
          </p>
          <p>
            با توجه به اینکه کاشت محصولات جالیزی مانند خربزه به صورت دیمی و آبی
            در این شهرستان موفق بوده و با اقلیم و شرایط آب و هوایی سازگار است،
            توسعه و گسترش آنها از جمله کسب و کار های خوب در حوزه باغداری به شمار
            می‌رود که قابلیت سرمایه گذاری را دارد.
          </p>
        </Section>
        <Section title="خدمات" id="services" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از فعالیت هایی است که با
            سودآوری بسیاری همراه است و در شهرستان اشتهارد نیز ظرفیت های بسیار
            خوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد.
          </p>
          <p>
            کویر اشتهارد نزدیک ترین کویر به تهران است که در شمال اشتهارد واقع
            شده و طبیعتی بکر و دست نخورده دارد. این کویر زیبا مانند سایر کویرهای
            کشورمان دارای بافت منحصر به فرد و مکانی مناسب برای کویر نوردی،
            شترسواری و سافاری محسوب میگردد که در چند سال اخیر مورد توجه علاقه
            مندان به کویرنوردی قرار گرفته است؛ بنابراین توسعه و ایجاد چنین
            خدماتی سوددهی خوبی به همراه خواهد داشت.
          </p>
        </Section>
        <Section title="شیلات" id="fisheries" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در کشور ما
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور ایجاد خواهد شد. با توجه به اینکه در این شهرستان
            چند استخر پرورش ماهی قزل آلا وجود دارد، کار کردن در این حوزه نیز در
            صورت تامین بازار مصرف، علاوه بر اشتغالزایی، سوددهی خوبی را به همراه
            خواهد داشت.
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
        </Section>
        <Section title="صنایع دستی" id="handicrafts" size="h3">
          <p>
            صنايع دستي به آن گروه از صنايع گفته مي شود كه مهارت، ذوق و بينش
            انسان در آن نقش اساسي دارد و يا اينكه تمام يا بخش اعظم مراحل ساخت
            فراورده هاي آن با دست انجام شده و در چارچوب فرهنگ و بينش هر منطقه و
            با ديدگاه هاي قومي ساخته و پرداخته مي شود. صنايع دستي بازتابي از
            تاريخ تمدن هر ملت و قوم است و مي تواند انتشار مؤثري براي فرهنگ و سنن
            مناطق مختلف باشد. با توجه به اینکه قالی بافی در حال حاضر به صورت
            محدود در شهرستان انجام می‌شود و برخی از مردم نیز در انجام آن مهارت
            دارند، این مورد را می‎‌توان گسترش داد و با استفاده از بازاریابی
            مناسب، سود چشمگیری را به دست آورد. قالیبافی از هنرهایی است که از
            قدیم نزد جهانیان جایگاه ویژه ای داشته و ایران را به این هنر
            می‌شناسند. آمارها نشان می دهد فرش ایرانی از کیفیت خوبی برخوردار بوده
            و قابل رقابت با کشورهای دیگر است. در ضمن با تولید فرش با کیفیت می
            توان به صادرات در این زمینه نیز فکر کرد. همچنین قالیبافی از مشاغل
            خانگی پردرآمدی بوده که تسهیلات خوبی به آن تعلق می گیرد. بسیاری از
            زنان خانه دار این هنر را یک فرصت شغلی مناسب می دانند چون در کنار
            کارهای روزمره می توانند به این کار بپردازند و درآمد خوبی کسب کنند.
            از آن جایی که قالی انواع مختلفی دارد می توان با آموختن دانش آن،
            محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و به بازار عرضه
            کرد. در ضمن این کسب و کار را می توان در فضای کوچک و با سرمایه اولیه
            کم راه انداخت و با فروش محصول و افزایش مشتری، این کار را گسترش داد و
            زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            راه اندازی کسب و کار هایی مانند شمع سازی، ساخت تراریوم و عروسک نمدی
            نیز از جمله موارد پیشنهادی برای اشتغالزایی زنان به شمار می‌روند که
            در صورت تامین بازار مصرف به وسیله تبلیغات و بازاریابی سوددهی بالایی
            را به همراه خواهند داشت.
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
      </CityContent>
    </div>
  )
}
