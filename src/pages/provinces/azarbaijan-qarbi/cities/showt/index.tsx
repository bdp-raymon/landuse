import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-02"].cities["IR-0209"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        agriculture: "زراعت",
        food_industry: "صنایع غذایی",
        gardening: "باغداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        services: "خدمات",
        industry: "صنعت",
        fisheries: "شیلات",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان شوط یکی از شهرستان‌های شمالی استان آذربایجان غربی در شمال
            غرب ایران است که از شمال غربی با شهرستان ماکو، شمال شرقی با شهرستان
            پلدشت، جنوب شرقی با شهرستان چایپاره و از سمت جنوب غربی با شهرستان
            چالدران همسایه است. مرکز سیاسی و اداری این شهرستان، شهر شوط است.
            شهرستان شوط سیاسی‌ترین و محروم‌ترین شهرستان در استان آذربایجان غربی
            است که به دلیل قرار گرفتن در یک بن‌بست جغرافیایی از لحاظ اقتصادی از
            وضع مطلوبی برخوردار نیست. شهرستان شوط از لحاظ وسعت هفدهمین اما از
            حیث تراکم و رشد جمعیت چهاردهمین شهرستان استان آذربایجان غربی است و
            به همراه شهرستان‌های پلدشت، چالدران و ماکو، منطقه آزاد ماکو را تشکیل
            می‌دهد. بر اساس آخرین تقسیمات کشوری در سال 1386، شهرستان شوط به
            مرکزیت شهر شوط از شهرستان ماکو جدا شد. شهرستان شوط مطابق آمار
            سرشماری سال 1395، دارای 15756 خانوار و 55682 نفر جمعیت بوده است که
            این تعداد برابر 71/1 درصد کل جمعیت استان را شامل شده است. شکل زیر
            موقعیت شهرستان شوط را نشان می‌دهد.
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
            مي‌شود. در ادامه تحليل شهرستان شوط ارائه‌شده‌است.
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
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در شهرستان شوط به میزان خوبی انجام می شود. شهرستان شوط مراتع
            زیادی دارد و این موضوع یکی از دلایلی است که انجام دامداری را در این
            شهرستان دارای مزیت کرده است. دامداری در این شهرستان بیشتر به صورت
            سنتی انجام می شود ولی دامداری صنعتی نیز به میزان کمی وجود دارد. اکثر
            دام های پرورش یافته دام های سبک هستند، البته دام سنگین نیز پرورش می
            یابد. در بین دام های سبک نژاد ماکویی وجود دارد و پرورش آن مورد توجه
            مردم شهرستان است. گوسفند نژاد ماکویی به دلیل راندمان بالای تولید
            گوشت و دارا بودن پشم سفید مرغوب با تارهای بلند از دیگر نژاد های بومی
            موجود یک سرو گردن بالاتر است. زیستگاه این گوسفند که از لحاظ تولید
            شیر در رتبه بالایی قرار دارد بیشتر در استان های آذربایجان شرقی و
            آذربایجان غربی است. با توجه به اینکه پرورش نژاد ماکویی(که از بهترین
            نژاد هاست) دراین شهرستان به خوبی جواب می دهد ویونجه زار و چمن زار و
            مرتع در این شهرستان در سطح وسیع وجود دارد، به نظر می رسد شهرستان
            ظرفیت بیشتری برای پرورش دام سبک داشته باشد و پرورش گوسفند به عنوان
            اولویت اول مزیت های شغلی این حوزه پیشنهاد می شود. همچنین در شهرستان
            شوط بز گوشتی نیز پرورش می یابد و امکان توسعه پرورش آن وجود دارد.
            البته پرورش بز گوشتی در اولویت های بعدی قرار می گیرد.
          </p>
          <p>
            در شهرستان شوط شرایط برای پرورش دام سنگین نیز وجود دارد و پرورش گاو
            از بهترین مشاغلی است که می توان در خصوص آن سرمایه گذاری کرد. پرورش
            گاو بعد از پرورش گوسفند دارای مزیت است.{" "}
          </p>
          <p>
            پرورش زنبورعسل نیز از مشاغلی است که در حوزه دامداری در این شهرستان
            انجام می شود. علی رغم اینکه توجه چندان زیادی به این شغل در شهرستان
            شوط نشده است ولی بررسی های انجام شده نشان می دهد این شهرستان با آب و
            هوا و پوشش گیاهی بسیارخوبی که دارد برای پرورش زنبورعسل بسیار مناسب
            است.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            زراعت نیز به میزان خوب و قابل توجهی در این شهرستان انجام و محصولات
            زراعی با ارزشی نیز تولید می شود. گندم و جو از محصولاتی هستند که
            تولید زیادی در شهرستان دارد. با وجود زمین های زراعی مرغوب و ظرفیت
            شهرستان در کشت این غلات، افزایش تولید آن به عنوان اولویت اول مزیت
            های شغلی این حوزه پیشنهاد می گردد.{" "}
          </p>
          <p>
            در میان محصولات کشاورزی، کاشت گندم نسبت به بقیه کم دردسرتر است.گندم
            در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد.
            خرید تضمینی گندم همه ساله توسط دولت انجام می گیرد. البته خود کشاورز
            هم می تواند گندم را بفروشد و درآمد خوبی کسب کند. کود شیمیایی و بذر
            نیز به شکل یارانه‌ای در اختیار کشاورزان قرار می گیرد؛ بنابراین گسترش
            تولید گندم ارزش افزوده زیادی را به دنبال دارد.
          </p>
          <p>
            جو بعد از گندم بیشترین سطح زیر کشت را در ایران به خود اختصاص داده
            است. در ایران اراضی وسیعی وجود دارد که بدلیل شوری و عمق کم خاک و شور
            بودن آب زراعی صرفا برای تولید جو مناسب است. جو از دیرباز در سبد
            تغذیه دام جایگاه ویژه داشته و به صورت دانه و علوفه سبز مورد استفاده
            قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ استفاده می شود. این گیاه
            در تهیه غذای کودک نیز کاربرد دارد. جوشانده جو داروي خوبي براي
            مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین آورنده کلسترول است
          </p>
          <p>
            محصولات زراعی دیگری همچون آفتابگردان نیز به میزان زیادی کشت می شوند.
            کلزا نیز از دیگر دانه های روغنی است که قابلیت برای کشت آن در شهرستان
            وجود دارد (کشت کلزا در اولویت های بعدی قرار می گیرد). از آن جایی که
            کشور ما واردات زیادی در زمینه دانه های روغنی دارد، نیازمند توسعه کشت
            محصولاتی از این دست می‌باشد. همچنین با توجه به وجود ظرفیت برای
            افزایش کشت این محصولات در شهرستان شوط و سودآور بودن فروش آن ها، رغبت
            برای گسترش سطح کشت، بیشتر خواهد شد.{" "}
          </p>
          <p>
            کدوی آجیلی از دیگر محصولاتی است که سطح زیرکشت بالایی در شهرستان
            دارد. کدوی آجیلی علاوه بر مصرف خوراکی، در تهیه روغن نیز کاربرد دارد؛
            ولی از آن‌جایی که خیلی شناخته شده نیست، بیشتر مصرف خوراکی دارد.
          </p>
          <p>
            چغندر قند نیز از محصولاتی است که در این شهرستان تولید می شود. با
            توجه به اینکه کشت چغندرقند آب زیادی را می طلبد، معمولا در روستاهای
            نزدیک رودخانه این محصول کشت می شود. وجود ظرفیت برای کشت این محصول و
            تعدادی کارخانه قند در استان آذربایجان غربی باعث می شود گسترش کشت آن
            دارای مزیت باشد.
          </p>
          <p>
            از محصولات زراعی دیگری که سطح کشت مناسبی در شهرستان شوط دارد،یونجه
            است. یونجه علاوه بر اینکه علوفه دامی است خواص دارویی برای انسان ها
            نیز دارد. با توجه به اینکه در شهرستان شوط دامداری به میزان قابل
            ملاحظه ای انجام می شود و قیمت یونجه نیز افزایش پیدا کرده،گسترش سطح
            کشت یونجه حتما مزیت دارد.{" "}
          </p>
          <p>
            شرایط کشت زعفران نیز در این شهرستان فراهم است. زعفران گران ترین
            محصول کشاورزی جهان و مهم ترین محصول صادراتی کشاورزی ایران است. به
            غیر از مصرف زیاد داخلی، همه ساله مقدار قابل توجّهی ارز با صادرات
            زعفران وارد کشور می شود. از سویی با توجه به قیمت بالای‌ این گیاه
            ارزشمند و امکان ارزآوری‌ بسیار زیاد آن برای اقتصاد کشور و از دیگر سو
            به دلیل تولید قریب به 90 درصد زعفران جهان در ایران، این طلای سرخ در
            زمینه درآمدزایی و اشتغال آفرینی از اهمیت به سزایی برخوردار است. حال
            که در این شهرستان ظرفیت برای کشت این محصول وجود دارد (کشت آن امتحان
            شده و به خوبی جواب داده است) تولید آن به میزان بیشتر پیشنهاد می شود.{" "}
          </p>
          <p>
            شهرستان در زمینه کشت گیاهان دارویی نیز وضعیت خوبی دارد. کشت گیاهان
            دارویی با توجه به بازار فروش خوبی که در سطح کشور دارد به صورت کلی
            دارای مزیت است و در این شهرستان که ظرفیت برای کشت آن ها وجود دارد،
            پیشنهاد می شود. بابونع و پونه کوهی از جمله گیاهان دارویی هستند که در
            این شهرستان کشت می شوند.
          </p>
          <p>
            حبوباتی مانند نخود و عدس نیز در بعضی از مناطق کشت می شوند. با توجه
            به قیمت حبوبات در کشور و زمینه توسعه کشت آن ها در شهرستان،افزایش
            تولید آن ها مزیت دارد.
          </p>
          <p>
            لازم به ذکر است در شهرستان شوط از شیوه آبیاری قطره ای برای آبیاری
            زمین ها بهره گرفته اند و این شیوه در حال گسترش است.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و کاهش وابستگی به درآمد های نفتی و عاملی مهم در توسعه
            پایدار امنیت غذایی کشور است.ایجاد صنایع غذایی، علاوه بر ایجاد
            اشتغال، باعث ارتقای سطح درآمد ارزی و ارزش افزوده می‌شود که کاهش
            هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان
            ممکن می‌کند. شهرستان شوط نیز مانند اکثر شهرستان های ایران ظرفیت لازم
            برای ایجاد تعدادی از صنایع غذایی را دارد اما متاسفانه به آن ها توجهی
            که باید، نشده است. یکی از محصولاتی که در شهرستان تولید می شود ولی
            واحد صنعتی برای فرآوری آن در شهرستان وجود ندارد، شیر است. شیر تولیدی
            در شهرستان امکان ایجاد یک واحد صنعتی تولید فرآورده های لبنی را فراهم
            کرده است. احداث واحد صنعتی تولید لبنیات به عنوان اولویت اول مزیت های
            شغلی این حوزه قرار می گیرد. لازم به ذکر است یک واحد تولید لبنیات
            سنتی در این شهرستان وجود دارد.{" "}
          </p>
          <p>
            همانطور که گفته شد میزان تولید دانه‌های روغنی در شهرستان زیاد است؛
            اما واحدی برای فرآوری آن ها یعنی روغن کشی وجود ندارد. تولید این نوع
            از روغن های خوراکی صرفه اقتصادی خوبی دارد و احداث واحد هایی برای
            روغن کشی پیشنهاد می شود.{" "}
          </p>
          <p>
            سطح کشت گندم نیز در شهرستان وسیع است و در این زمینه کارخانه آرد وجود
            دارد. اما فرآورده های متنوعی را می توان از گندم تولید کرد که به نظر
            می رسد در شهرستان شوط تولید خاصی نداشته باشد. از فراورده های دیگر
            مربوط به گندم که می توان نام برد نان، شیرینی، رشته آشی و پلویی،
            کلوچه و بیسکوییت و سایر فرآورده های حاصل از گندم مانند آرد
            سوخاری،گندم برشته، نان بستنی،پفک گندمی و نشاسته گندم است که قابلیت
            تولید در شهرستان را دارند. البته تولید سایر فرآورده های حاصل از گندم
            در اولویت آخر مزیت های شغلی این حوزه قرار می گیرد.{" "}
          </p>
          <p>
            با توجه به میزان دامداری شهرستان و تولید گوشت به میزان مناسب (در این
            شهرستان کشتارگاه دام به منظور تولید گوشت وجود دارد) احداث واحدی برای
            تولید سوسیس و کالباس دارای مزیت به نظر می رسد. البته ممکن است با
            توجه به کوچک بودن شهرستان، محصولات سوسیس و کالباس بازار فروش مناسبی
            نداشته باشد؛ ولی امکان ارسال آن به خارج از شهرستان وجود دارد.{" "}
          </p>
          <p>
            میوه های موجود در شهرستان شرایط برای تولید چیپس میوه را فراهم کرده
            است. می توان تولید این محصول را به صورت خانگی یا در حد کارگاهی(کوچک)
            انجام داد و سود خوبی را نصیب خود کرد. تولید سایر فرآورده های حاصل از
            محصولات باغی مانند مربا، لواشک، کمپوت، شهد و سرکه سیب نیز قابلیت
            تولید به صورت خانگی و یا کارگاهی(کوچک) را دارند. برای تولید آبمیوه
            نیز باید افزایش تولید میوه افزایش یابد و یا وارداتی در این زمینه
            صورت بگیرد تا شرایط برای ایجاد یک واحد تولید آبمیوه فراهم شود.
          </p>
          <p>
            درخصوص تولید میوه خشک نیز واحدی درحال حاضر وجود دارد و درصورت افزایش
            کاشت میوه جات و یا واردات از شهرستان های اطراف می توان به تعداد
            واحدهای تولید میوه خشک افزود.{" "}
          </p>
          <p>
            وجود صیفی جاتی مانند گوجه و خیار موقعیت خوبی را برای تولید رب گوجه
            فرنگی و خیارشور فراهم کرده است. البته میزان تولید این صیفی جات آن
            قدر زیاد نیست که به صورت صنعتی اقدام به انجام این کسب و کار کرد. اما
            می توان به صورت خانگی و یا در حد کارگاهی(کوچک) این فرآورده ها را
            تولید کرد.{" "}
          </p>
          <p>
            سبزیجات تولید شده نیز می تواند باعث استقبال افراد شهرستان از فرآوری
            سبزیجات به صورت خانگی شود. منظور از فرآوری سبزیجات خشک کردن، سرخ
            کردن و بسته بندی آن ها است.{" "}
          </p>
          <p>
            همانطور که گفته شد گیاهان دارویی در این شهرستان تولید می شوند و
            خوشبختانه عرق گیری نیز توسط مردم این شهرستان انجام می شود. بررسی
            نشان می دهد می توان در زمینه فرآوری گیاهان دارویی به صورت صنعتی به
            منظور عرق گیری، خشک کردن و بسته بندی آن ها فعالیت کرد. برای مثال عرق
            بابونه و نعنا تولید کرد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            بخشی از کشاورزی شهرستان شوط به صورت باغداری انجام می شود. با اینکه
            باغداری سهم کمتری در کشاورزی این شهرستان دارد اما محصولات متنوعی که
            افزایش کاشت آن ها مزیت دارد در این شهرستان تولید می شود. سیب و
            زردآلو از محصولات باغی هستند که تولید مناسبی دارند. در صورت وجود
            زمین کافی می توان مقدار بیشتری از این محصولات را تولید کرد. سیب و
            زردآلو علاوه بر بازار فروشی که برای تازه خوری دارند،برای تولید
            فرآورده های حاصل از آن نیز مورد استفاده قرار می گیرند. افزایش سطح
            کاشت این محصولات صرفه اقتصادی خوبی دارد و پیشنهاد می شود.{" "}
          </p>
          <p>
            یکی از محصولاتی که تولید و کیفیت خوبی دارد وافزایش تولید آن پیشنهاد
            می شود،قارچ است. می توان به تعداد کارگاه های پرورش قارچ افزود و در
            صورت کافی نبودن بازار فروش در داخل شهرستان، آن را به شهرستان های
            اطراف (که فاصله زیادی با این شهرستان ندارند، چون قارچ زود خراب می
            شود) ارسال کرد.
          </p>
          <p>
            صیفی جاتی مانند گوجه و خیار و سبزیجات نیز تا اندازه ای در شهرستان
            کاشته می شوند. با توجه به وجود بازار مصرف همیشگی برای این محصولات و
            شرایط مساعد شهرستان برای تولید این محصولات،افزایش تولید آن ها مزیت
            دارد.
          </p>
          <p>
            خربزه نیز از محصولاتی است که در بعضی از مناطق کاشته می شود و افزایش
            تولید آن دارای مزیت است که در اولویت‌های بعدی قرار می‌گیرد.
          </p>
          <p>
            گل محمدی از گل هایی است که طبق آزمایشات انجام شده، کاشت آن در
            شهرستان شوط جواب می دهد و با توجه به ظرفیت شهرستان در تولید این
            محصول واستفاده های فراوانی که توسط مردم کشورمان دارد،تولید آن به
            میزان انبوه پیشنهاد می شود.
          </p>
          <p>
            شهرستان شوط به دلیل خاک مرغوبی که دارد برای احداث گلخانه نیز جوابگو
            است. درحال حاضریک گلخانه تولید گل های زینتی در شهرستان وجود دارد که
            خریدار تمام محصولات آن شهرداری و مردم شهر هستند. افزایش واحد های
            مربوط به تولید گل های زینتی در صورت بازاریابی مناسب، مزیت دارد.
            تولید محصولات دیگری مانند زعفران، گیاهان دارویی، صیفی جاتی مانند
            گوجه و خیار و سبزیجات در گلخانه نیز دارای مزیت است و مقرون به صرفه
            خواهد بود.
          </p>
          <p>
            محصولات دیگری مانند گیلاس، گلابی، هلو و شلیل نیز در این شهرستان
            کاشته شده اند و درصورت وجود زمین کافی می توان تولید آن ها گسترده تر
            کرد و سود خوبی از فروش آن ها به دست آورد. اما بررسی ها نشان می دهد
            احداث باغ در رابطه با محصولات نام برده شده، در اولویت آخر مزیت های
            شغلی قرار می گیرد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            صنایع تبدیلی و تکمیلی نیز همچون صنایع غذایی تاثیر به سزایی در میزان
            بهره وری بخش کشاورزی و دامداری و سطح درآمد مردم شهرستان(خصوصا
            روستاها) دارد. صنایع تبدیلی و تکمیلی می تواند ارزش افزوده خوبی برای
            هر منطقه ایجاد کند. شهرستان شوط نیز ظرفیت هایی در این حوزه دارد که
            به آن ها اشاره می کنیم. از جمله صنایع تبدیلی و تکمیلی که مزیت بالایی
            دارد، صنایع مربوط به تولیدات دامی است. با توجه به تولید دام صورت
            گرفته در شهرستان و کشتارگاهی که درخصوص دام وجود دارد، فرآوری پوست
            دام گزینه شغلی خوبی به نظر می رسد. متاسفانه در سطح کشور، توجهی به
            ارزش پوست دام ها نمی شود و معمولا هر دامداری، پوست های دامش را مانند
            کالایی بی ارزش دور می اندازد و یا با قیمتی بسیار ناچیز می فروشد. در
            صورتی که اگر فرد یا افرادی در همان منطقه اقدام به فرآوری پوست دام
            کنند، سود بیشتری نیز نصیب دامدار می شود. منظور از فرآوری پوست دام،
            تولید چرم از پوست گاو و تولید نخ از پوست گوسفند است. ممکن است این
            موضوع به ذهن ما برسد که در شهرستان کوچکی مانند شوط بازاری برای
            استفاده از چرم وجود نداشته باشد، اما این موضوع صرفا یک احتمال است،
            چون تا به حال آزمایشی در این زمینه انجام نشده است. حتی اگر بازار
            فروش برای چرم در داخل شهرستان وجود نداشته باشد، در خارج از شهرستان
            می توان بازار مناسبی برای آن یافت. اما نخ تولیدی حتما مورد استفاده
            مردم شهرستان قرار خواهد گرفت زیرا قالی بافی یکی از مشاغل مهم مردم
            شهرستان است و درصورت وجود نخ در داخل شهرستان برای خرید آن از خارج
            شهرستان متحمل هزینه های بسیار زیاد نمی شوند. همچنین با توجه به اینکه
            فاصله شهرستان شوط تا شهرستان تبریز(در آذربایجان شرقی) حدود
            220کیلومتر است و فاصله چندان زیادی نیست، در صورتی که میزان نخ تولیدی
            و چرم تولیدی زیاد باشد، می توان به این شهرستان نیز صادرات داشت. زیرا
            شهرستان تبریز قطب تولید چرم در کشور بوده و در صنعت فرش بافی نیز
            بسیار قوی است.
          </p>
          <p>
            مواد تولید شده مانند تخم آفتابگردان و تخم کدو نیاز به بسته بندی
            دارند تا به صورت فله فروخته نشوند و سود بیشتری را عاید کشاورز کنند؛
            بنابراین این کسب وکار از مشاغل دارای صرفه اقتصادی است.{" "}
          </p>
          <p>
            از دیگر فعالیت هایی که در شهرستان شوط قابلیت انجام دارد و پیشنهاد می
            شود، تولید کمپوست است. تولید کمپوست (افزودن مقدار مشخصی از کودهای
            شیمیایی به کود حیوانی) به دلیل استفاده کشاورزان برای تقویت زمین های
            کشاورزی خود گزینه شغلی خوبی است و صرفه اقتصادی دارد.
          </p>
          <p>
            حبوبات تولیدی در شهرستان درصورتی که بیشتر کشت شوند، زمینه را برای
            احداث واحدی در خصوص بسته بندی حبوبات فراهم می کنند.
          </p>
          <p>
            در رابطه با کشتار طیور نیز در این شهرستان کشتارگاه طیور وجود دارد و
            بسته بندی مرغ نیز در هر مرغداری انجام می شود.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            طیور پرورش یافته در شهرستان شوط،تنوع زیادی ندارند اما تعدادی از بعضی
            طیور مانند مرغ وجود دارد. تعداد مرغداری های شهرستان زیاد است که
            بیشتر آن ها را مرغ گوشتی تشکیل می دهد. البته مرغ تخم گذار نیز در
            شهرستان به تعداد کمتر وجود دارد. به نظر می رسد ظرفیت مناسبی برای
            تولید مرغ گوشتی و بعد از آن مرغ تخم گذار وجود داشته باشد. البته باید
            توجه داشت که به صورت کلی احداث واحدهای مرغداری به علت نوسانات قیمت
            مرغ با مقداری ریسک همراه است ولی در صورت موفق شدن،سودآوری خوبی دارد.{" "}
          </p>
          <p>
            با افزایش روزافزون جمعیت در راستای تامین نیازهای مردم ایجاب می‌کند
            در زمینه تولید گوشت سفید و پرورش مرغ گوشتی فعالیت کرد. ارزش غذایی
            بالای گوشت طیور، کم بودن افت پس از کشتار، سالم وبهداشتی بودن گوشت
            طیور، قابلیت هضم و جذب بالا، سرعت رشد سریع، صرفه جویی در جایگاه و
            زمین و برگشت سریع سرمایه از فواید پرورش مرغ گوشتی است. بدیهی است
            گوشت مرغ به سبب مزیتهای فراوانی که دارد به عنوان منابع تامین پروتئین
            می تواند در کشور مطرح و نیاز عمومی را در این زمینه مرتفع نماید. نسبت
            ضایعات در گوشت مرغ در مقایسه با سایر دام ها کمتر است، به طوری که در
            گوشت گوسفند ضایعات حدود 50 % و در مرغ حدود 25 % است. ضریب تبدیل جیره
            غذائی به گوشت در مرغ نسبت به سایر دام ها بالا بوده به طوری که در مرغ
            های اصلاح شده این ضریب 2 تا 2/2 و در گوساله و گاو بین 6 تا 9 % متغیر
            است. با توجه به دلایل فوق ایجاد واحد پرورش مرغ گوشتی در شهرستان مزیت
            دارد و تنها باید بازاریابی کرد تا بتوان محصول را با قیمت مناسب به
            فروش رساند.
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
            پرورش غاز نیز در شهرستان شوط قابلیت انجام دارد که در اولویت بعدی
            راه‌اندازی قراردارد. از مزایای پرورش غاز این است که گوشت آن برای
            تامین گوشت مصرفی انسان اهمیت ویژه‌ای دارد. همچنین از تخم وجگر این
            پرنده برای تهیه غذا‌های گران قیمت در بسیاری از کشور‌ها استفاده
            می‌شود و جنبه صادراتی دارد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            بررسی های انجام شده نشان می دهد مهم ترین صنایع دستی که در شهرستان
            تولید می شود، قالی است. قالی بافی از مشاغل اصلی مردم شهرستان است.
            قالی شهرستان شوط معروف است و رتبه اول را در استان به خود اختصاص داده
            است. گسترش قالی بافی در این شهرستان حتما به صرفه خواهد بود. نقشه
            مورد استفاده برای قالی بافی از تبریز تهیه شده و درنهایت قالی ها به
            تبریز فروخته می شود.{" "}
          </p>
          <p>
            گلیم بافی و نمدمالی نیز یکی دیگر از شغل هایی هست که در اولویت بعدی
            قرار می گیرد و افراد ماهر در این زمینه وجود دارد و انجام آن مقرون به
            صرفه خواهد بود.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            مشاغل خدماتی یکی از راه های تامین معیشت برای مردم شهرستان شوط و
            خصوصا مردم شهر است. مردم این شهرستان به مشاغلی مانند فروش
            لبنیات،خواروبار و....اشتغال دارند. می توان درخصوص فروشندگی برای دیگر
            کالاهای ضروری مردم اقدام کرد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی آن گونه که باید در بین مردم شهرستان شوط جایگاهی پیدا
            نکرده است. البته این موضوع نشان دهنده عدم علاقه افراد به انجام
            کارهای صنعتی نیست. بلکه در صورتی که شرایطی مانند سرمایه گذاری فراهم
            شود، از این مشاغل نیز استقبال خواهد شد. در حال حاضر نیز کارخانه هایی
            وجود دارند که در ادامه به آن ها اشاره می کنیم. تنها شغلی که با توجه
            به بررسی های انجام شده فعلا می توان پیشنهاد داد، تولید آجر است. خاک
            این شهرستان برای تولید آجر مناسب است،در حال حاضر نیز کوره آجر پزی
            وجود دارد، اما می توان به صورت صنعتی تر به انجام این کار پرداخت.
          </p>
          <p>
            صنایع فعال شهرستان عبارتند از: واحدهای سنگ بری، تولید ترانسفورماتور،
            آرد، لیوان یکبار مصرف و سبد، فرش ماشینی، میوه خشک و بسته بندی آن ،
            قارچ وبسته بندی آن وکشتارگاه دام و طیور.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در شهرستان شوط برای پرورش ماهی سردابی قابلیت خوبی وجود دارد. در کشور
            ما نیز بازار فروش بسیار خوبی برای این ماهیان وجود دارد. البته در این
            شهرستان دو واحد پرورش ماهی وجود داشته که شکست خورده اند که دلیل شکست
            آن ها عدم مزیت پرورش ماهی در این شهرستان نبوده است بلکه به دلیل عدم
            توانایی در بازاریابی صحیح و تامین هزینه شکست خورده اند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
