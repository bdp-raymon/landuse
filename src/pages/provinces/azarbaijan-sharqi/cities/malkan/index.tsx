import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-01"].cities["IR-0116"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        livestock: "دامداری",
        food_industry: "صنایع غذایی",
        agriculture: "زراعت",
        birds: "طیور",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        industry: "صنعت",
        services: "خدمات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان ملکان یکی از شهرستان‌های جنوب غربی استان آذربایجان شرقی است.
            مرکز این شهرستان شهر ملکان است. این شهر با ۳۸٫۲۴۳ نفر جمعیت در سال
            ۱۳۹۵ خورشیدی، به‌عنوان دوازدهمین شهرستان استان آذربایجان شرقی شناخته
            شده است. ملکان در جنوب شرق دریاچه ارومیه و در محل اتصال استان‌های
            آذربایجان شرقی و آذربایجان غربی قرار گرفته‌است. این شهرستان در ۱۵۰
            کیلومتری جنوب تبریز واقع شده‌است. این شهرستان از شمال و شرق با
            شهرستان‌های بناب و مراغه و از سمت جنوب و غرب نیز با استان آذربایجان
            غربی هم‌مرز است. شکل زیر موقعیت شهرستان ملکان را نشان می‌دهد.
            شهرستان ملکان دارای دو بخش مرکزی و لیلان، سه شهر لیلان، مبارک‌شهر و
            ملکان، پنج دهستان و ۸۴ روستا است. این شهرستان در سال 1374 از بخش
            ملکان به شهرستان ارتقاء یافت. مردم ملکان آذربایجانی بوده و به زبان
            ترکی آذربایجانی تکلم می‌کنندآب و هوای ملکان تحت‌تأثیر جریان‌های
            آسیای مرکزی، اقیانوس اطلس، دریای خزر، دریای سیاه و دریای مدیترانه
            قرار می‌گیرد. جریان‌های آسیای مرکزی در فصل‌های بهار، پاییز و زمستان
            موجب بارندگی و گاهی برف می‌شوند. جریان‌های اقیانوس اطلس و دریای خزر
            (بادهای خزری) بیش‌تر در منطقه ارسباران موجب بارش می‌شوند و گهگاهی
            مناطق جنوبی‌تر را نیز تحت‌الشعاع خود قرار می‌دهند و جریان‌های دریای
            سیاه و دریای مدیترانه (بادهای سفید) در فصل‌های بهار و زمستان موجب
            بارش می‌شوند.
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
            مي‌شود. در ادامه تحليل شهرستان ملکان ارائه‌شده‌است.
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
            كاشت و پرورش انگور در ايران از سابقه ديرينه ای برخوردار است و با
            توجه به شرايط اقليمي مناسب، شهرستان ملکان از گذشته از مهمترين مناطق
            توليد انگور براي مصارف تازه خوری و توليد كشمش بوده است. امروزه انگور
            یکی از مهمترین محصولات باغی در کشور به شمار می رود. انگور علاوه بر
            امکان اشتغالزایی، یکی از محصولات ارزآور در کشور بوده که می تواند در
            توسعه صادرات غیر نفتی در بخش کشاورزی سهم بسزایی داشته باشد.
          </p>
          <p>
            همچنین انگور طبق طب قدیم ایران گرم و تر است، اخلاط بدن را متعادل می
            کند و بسیار مقوی است . در ضمن یکی از خواص این محصول این است که خون
            را تصفیه می‌کند؛ بنابراین در بین مردم طرفداران زیادی دارد و بازار
            مصرف این محصول به صورت محصولات فراوری شده و تازه خوری فراهم است. از
            طرفی به دلیل مرغوبیت زیاد، انگور این شهرستان به کشور‌های حاشیه ی
            خلیج فارس و کشور‌های اتحادیه اروپا، اتریش، آلمان، مجارستان، روسیه و
            بیشتر کشورها صادر می‌شود .
          </p>
          <p>
            کاشت انگور در این شهرستان در حال حاضر انجام می‌شود و از جمله مواردی
            است که همچنان هم ظرفیت توسعه و گسترش را دارد.
          </p>
          <p>
            احداث باغ گردو یک سرمایه‌گذاری طولانی‌مدت و پربازده در زمینه کشاورزی
            و باغی است. گردو از جمله میوه هایی است که در بین میوه های خشک ارزش
            بسیار بالایی دارد و جهت نگهداری طولانی مدت نیاز به سردخانه و تجهیزات
            پرهزینه ندارد. همچنین درختی باارزش و دارای عمر باردهی بالایی است. به
            طوری که بعد از یکبار کاشت می توان سالها از درخت گردو، محصول برداشت
            کرد. همچنین درخت این میوه بسیار بلند است و چوب سخت آن از بهترین و
            معروف‌ترین چوب‌ها است؛ بنابراین علاوه بر میوه، چوب آن نیز در صنایع
            چوبی به کار می‌رود. با توجه به اینکه در حال حاضر باغات گردوی خوبی در
            این شهرستان وجود دارد، توسعه کاشت این محصول هم با اقلیم این منطقه
            سازگار است و هم صرفه اقتصادی خوبی را به همراه دارد.
          </p>
          <p>
            بادام نیز از جمله میوه هایی است که میوه خشک و خام آن ارزش غذایی و
            درمانی بالایی دارد و همچنین «روغن» آن نیز به دو صورت خوراکی و مالشی،
            از بهترین داروها برای درمان انواع بیماری‌های گوارشی، کوفتگی‌ها و...
            است. در حال حاضر کاشت بادام بین کشاورزان رواج دارد که به دلیل سود
            زیاد، بازار هدف مناسب و سازگاری خوب آن با شرایط آب و هوایی این
            منطقه، قابلیت توسعه را دارد.
          </p>
          <p>
            کشت صیفی جاتی مانند گوجه فرنگی، خیار و کدو در این شهرستان در فضای
            آزاد و به صورت گلخانه ای در برخی از نقاط ملکان وجود دارد که بسیار هم
            موفق هستند. این موارد نیز قابلیت گسترش را دارند؛ زیرا تقاضای همیشگی
            مردم بوده و بازار دائمی دارند. همچنین فراوری آنها به صورت سنتی و
            صنعتی وجود دارد که همین موضوع انگیزه را برای کشاورز بیشتر می‌کند.{" "}
          </p>
          <p>
            میزان مصرف قارچ در سال های اخیر در ایران رشد خوبی را داشته و سرانه
            مصرف آن بالا رفته است. مشتری داشتن این محصول از یک سو و غنی از
            پروتئین و ویتامین بودن آن از سوی دیگر، باعث شده که جایگزین مناسبی
            برای گوشت باشد. در برخی از شهرها و روستاها به دلیل عدم آشنایی با
            فواید قارچ، میزان مصرف این محصول پایین است که می توان با تبلیغ و
            معرفی این محصول، میزان مصرف را بالاتر برد. با توجه به اینکه پرورش
            قارچ صدفی در این شهرستان وجود دارد. گسترش آن از مزیت هایی است که سود
            خوبی را به دنبال دارد.
          </p>
          <p>
            بعد از موارد فوق می‌‌توان گفت باغات خوب سیب، زردآلو، گیلاس، گلابی،
            شفت آلو، آلبالو و توت فرنگی نیز در شهرستان وجود دارند که محصول خوبی
            را تولید می‌کنند. این موارد هم قابلیت توسعه و سرمایه گذاری را دارند.
          </p>
          <p>
            سبزیجات از جمله محصولات پر مصرف در سبد غذایی خانوار ها هستند که
            سرمایه گذاری در پرورش آنها، روشی نوین و پردرآمد برای افرادی است که
            به دنبال یک کسب و کار تازه هستند. البته در حال حاضر نیز کشت برخی از
            انواع سبزی جات در این شهرستان وجود دارد که قابل سرمایه گذاری و توسعه
            است. کشت بادمجان و هویج هم در صورت توسعه، صرفه اقتصادی خوبی را به
            دنبال دارد.
          </p>
          <p>
            تولید و پرورش گل و گیاه، همیشه یکی از پر درآمدترین مشاغل بوده است،
            امروزه نیز با توجه به آپارتمانی شدن منازل، تمایل به پرورش گیاهان
            داخل آپارتمان رو به افزایش است. یکی از این گل‌های آپارتمانی که
            طرفداران زیادی دارد، کاکتوس است. با توجه به استقامت و بردباری
            کاکتوس‌ها نسبت به شرایط محیطی، حتی افراد پر مشغله یا تازه کار هم
            قادر به پرورش این گیاهان صبور خواهند بود. در حال حاضر یک گلخانه
            کاکتوس در شهرستان وجود دارد که با درنظرگرفتن این شرایط، توسعه آن
            سوددهی بالایی خواهد داشت.
          </p>
          <p>
            طبق بررسی‌های انجام‌شده کاشت پسته در این شهرستان انجام شده است؛ اما
            هنوز به مرحله برداشت محصول نرسیده؛ ولی احتمال موفقیت آن زیاد است که
            در این صورت می‌توان کاشت این محصول را با توجه به اینکه قیمت و تقاضای
            خوبی در بازار های امروزی دارند، افزایش داد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            پرورش دام سبک و سنگین به طور یکسان در شهرستان انجام می‌شود. همچنین
            دامداری عمدتاً به شکل سنتی بوده و چند واحد گاوداری صنعتی وجود دارد.
            با توجه به اینکه ملکان دارای زمین و آب‌‎وهوای مستعد است، دامداری
            سوددهی خوبی دارد و متقاضیان این کار هم در این شهرستان زیاد هستند.{" "}
          </p>
          <p>
            گوسفند نژاد افشاری جزء گوسفندانی است که پرورش آنها خیلی به صرفه است.
            به خصوص اینکه دارای گوشت و پشم عالی هستند. در اصل زادگاه اصلی
            گوسفندان افشاری متعلق به زنجان است؛ اما با توجه به نژاد خوب این
            گوسفند برای پرواربندی و فروش، امروزه در استان ها و شهرستان های دیگر
            مانند ملکان هم پرورش داده می‌شوند. از دیگر مزیت های این گوسفند،
            مقاومت در برابر سرما است. با توجه به اینکه پرورش این دام در شهرستان
            موفق است، گسترش آن علاوه بر اشتغالزایی به توسعه اقتصاد این شهرستان
            هم کمک می‌کند.
          </p>
          <p>
            علاوه بر نژاد افشاری، پرورش گوسفند نژاد قزل نیز در این شهرستان انجام
            می‌شود و همچنان هم ظرفیت توسعه را دارد؛ زیرا با توجه به واردات گوشت
            و بازار دائمی محصولات گوسفند و همچنین وجود مراتع مناسب، سود زیادی
            حاصل می‌شود.
          </p>
          <p>
            موضوع پرورش گاو از دیر باز در ایران مورد توجه مردم بوده است . این
            توجه، بیشتر به خاطر بهره برداری چند جانبه از این حیوان مفید است که
            فرآورده های آن می تواند در صنوف و صنعت های مختلف درآمد زا و دارای
            بازدهی بسیار باشد. مزایای ورود به عرصه ی پرورش گوساله دارای جنبه های
            مختلف است. از یک طرف، از پوست گاو گوشتی در چرم‌سازی استفاده می‎شود؛
            از طرف دیگر از گوشت آن جهت استفاده در تغذیه انسان بهره برداری می
            شود. همچنین به لحاظ اقتصادی، در درآمد زایی انسان تاثیر گذار است.
            علاوه بر این موارد، برای جلوگیری از واردات گوشت گوساله از کشورهای
            دیگر، تولید آن اهمیت دارد. در ملکان در حال حاضر پرورش گاو بومی به دو
            صورت صنعتی و سنتی انجام می گیرد. این مورد نیز قابلیت گسترش را دارد؛
            زیرا ارزش افزوده زیادی را ایجاد می‌کند.
          </p>
          <p>
            لازم به ذکر است که برای موفق شدن در دامپروری می‌‌توان از دام هایی با
            بازده بالا و نژاد برتر استفاده کرد تا سود خوبی برای دامدار به همراه
            داشته باشد. در این باره می‌توان گفت با توجه به اینکه در این شهرستان
            پرورش دام های اصلاح نژاد شده ای مانند سمینتال و هلشتاین وجود دارد،
            گسترش آنها سود خوبی را به دنبال دارد؛ زیرا نژاد سمینتال، نژادی آرام
            و قانع بوده که باعث کاهش هزینه و سود بالاتر برای دامدار می‌شود و
            همچنین این نژاد عملکرد بسیار خوبی دارد و در برابر بیماری های عفونی
            مقاوم است و با شرایط محیط خود را وفق می‌دهد. در مورد گاو هلشتاین هم
            می‌توان گفت این گاو به دلیل مقاومت در برابر سرما می تواند انتخاب
            خوبی برای پرورش باشد. در ضمن گاو هلشتاین بهترین نژاد گاو شیری در
            جهان است که علاوه بر آن به عنوان سنگین ترین گاو شیری در جهان محسوب
            می شود.
          </p>
          <p>
            پرورش زنبور عسل از حرفه هایی است که از دیرباز مردم اقصی نقاط دنیا به
            خصوص ایرانیان بدان اشتغال داشته اند و امرار معاش آنها در گرو محصول
            شفابخش این حشره کوچک بوده است. کماکان این شغل بین مردم رواج داشته و
            از گزینه های مناسب برای راه اندازی کسب و کار برای علاقه مندان به این
            زمینه است و طبق بررسی های انجام شده، توسعه آن قابلیت سرمایه گذاری
            دارد.
          </p>
          <p>
            عسل از خواص درمانی بی شماری برخورداراست و همواره در تمام اعصار مورد
            توجه مردم و اطبا بوده است. از خواص اعجاب انگیز آن می توان به خاصیت
            هایی چون درمان زخم و سوختگی، ضد سرطان، قویترین آنتی بیوتیک طبیعی،
            درمان سرماخوردگی و سرفه، افزایش حافظه، درمان بی‌خوابی و ... اشاره
            کرد. زندگی این حشرات به سبک کلنی باعث شده تا پرورش دهندگان زنبور از
            اشتغالی پایدار بهره مند شوند چراکه میزان بالای زاد و ولد زنبورها
            باعث سودآوری بیشتر برای پرورش دهندگان خواهد شد؛ لذا گسترش صنعت زنبور
            داری هم از مزیت هایی است که در صورت توسعه، ارزش افزوده زیادی را به
            دنبال خواهد داشت.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            فراوری محصولات کشاورزی مهم ترین روش برای ایجاد اشتغال پایدار و کاهش
            وابستگی به درآمد های نفتی و عاملی مهم در توسعه پایدار امنیت غذایی
            کشور است. ایجاد صنایع غذایی، علاوه بر ایجاد اشتغال، باعث ارتقای سطح
            درآمد ارزی و ارزش افزوده می‌شودو که با کاهش هدر رفت محصولات کشاورزی
            و ایجاد ارزش افزوده از منابع تا حد امکان ممکن می‌کند.
          </p>
          <p>
            از انگور، فراورده های غذایی مختلفی مانند شیره، کشمش، مویز، سرکه،
            روغن هسته انگور و آبغوره به دست می‌آید که هر کدام ارزش غذایی و بازار
            مصرف خاص خود را دارند.
          </p>
          <p>
            فراوری انگور و تولید کشمش فرصت سرمایه گذاری پررونقی است. با تولید
            این محصول می توان به جرگه صادرکنندگان پیوست و از درآمد ارزی برخوردار
            شد.{" "}
          </p>
          <p>
            پس از فرش و پسته، کشمش سومین محصول صادراتی غیرنفتی کشور است ؛
            بنابراین تولید کشمش در این شهرستان، فرصت شغلی مناسبی را برای مردم
            این شهرستان ایجاد کرده تا با تولید و صادرات این محصول سود خوبی را
            کسب کنند. البته لازم به ذکر است که در حال حاضر تعدادی واحد کشمش پاک
            کنی به صورت سنتی و صنعتی فعال هستند؛ اما به دلیل کیفیت و کمیت بالا
            تولید کشمش همچنان ظرفیت گسترش را دارد. البته در این مورد لازم به ذکر
            است که محصول تولیدی در این شهرستان به دلیل کیفیت بالا، قابلیت رقابت
            در بازار های امروزی را دارد.
          </p>
          <p>
            شیره انگور فراورده ای با ارزش غذایی بالاست که از آب انگور به دست
            می‌آیند. این ماده به دلیل مزه شیرین، مطبوع و ملایم در تولید نان
            محلی، حلوا، شیرینی، فرنی و سایر اقلام غذایی به کار می‌رود. شیره در
            مقایسه با انگور کالری بسیار بالایی دارد و مصرف مقدار کمی از آن،
            انرژی از دست رفته را جبران می‌کند. تولید این محصول سنتی که طرفداران
            زیادی دارد، اگر زیر نظر سازمان بهداشت انجام شده و همچنین به مسائل
            بازاریابی توجه شود، می‌توان آن را به عنوان یک فرصت اقتصادی مناسب
            معرفی کرد. تولید و تهیه شیره در ملکان به صورت سنتی در حال انجام است
            که با رعایت مواردگفته شده، سودآوری آن چند برابر می‌شود.
          </p>
          <p>
            به دليل روند رو به رشد مصرف روغن‌هاي گياهي در سال‌هاي اخير، روغن
            هسته انگور دركنار روغن‌هاي ديگر مي‌تواند تامين كننده بخشي از نياز
            مردم باشد. لذا با توجه به وارداتي بودن روغن هسته انگور، احداث
            كارخانه روغن كشي از تفاله انگور در كناير ساير دانه‌هاي روغني و در
            مجاورت خط توليد آب انگور و با در نظر گرفتن توجيه اقتصادي طرح در
            زمينه مصرف داخلي و همچنين مساله صادرات آن، توصيه مي‌شود. خواص و
            مزیت‌هایی که این روغن دارد می‌تواند به‌عنوان مزیت‌های اصلی
            سرمایه‌گذاری شمرده شود. اين روغن منبع سرشاري از ويتامين E است که نقش
            بسيار مؤثري در جلوگيري از امراض قلبي دارد و مانع لخته شدن خون در
            رگ‌ها مي‌شود. جالب است بدانید روغن‌کشی از این دانه علاوه بر بحث
            خوراکی در بسیاری از موارد صنعتی مانند صنایع نساجی، تولید کاغذ،
            داروسازی، لاستیک سازی و ... هم پرکاربرد است.
          </p>
          <p>
            سرکه انگور و آبغوره نیز از مواردی است که تولید آن حتی به روش خانگی
            هم امکان پذیر است و ارزش افزوده زیادی دارد. تولید و فروش این محصولات
            نیز سود خوبی را به دنبال دارد.
          </p>
          <p>
            شیر اصلی‌ترین ماده غذایی برای تامین ویتامینD، کلسیم و فسفر در زندگی
            بسیاری از انسان‌ها است و فرآورده‌های لبنی که همگی از شیر گرفته
            می‌شوند نیز از این ویژگیها مستثنی نیستند. بنابراین می‌توان گفت شیر و
            لبنیات یکی از مهمترین موادغذایی محسوب می‌شود که مصرف روزانه آن ها به
            افراد بسیار توصیه می‌شود. باتوجه به اینکه دامداری در این شهرستان
            رونق دارد و شیر خوبی تولید می‌شود، ایجاد کارخانه یا کارگاه تولید
            لبنیات، می‌تواند توسعه و سودآوری خوبی را داشته باشد. البته باید در
            نظر بگیریم که در حال حاضر نیز واحد های فعال درا ین حوزه مشغول به کار
            هستند؛ اما با این وجود نیاز به این صنعت همچنان احساس می‌شود.
          </p>
          <p>
            یکی از مواد اصلی و مورد نیاز در تهیه غذاها آرد است که معمولا از طریق
            آسیاب گندم به دست می‌آید. گندم یکی از پرمصرف‌ترین گیاهان زراعی در
            جهان است که سرشار از پروتئین و ویتامین‌های مختلف از قبیل A، B، C و E
            است. از جمله خواص گندم، کنترل چاقی، بهبود سوخت و ساز بدن، جلوگیری از
            دیابت، کاهش التهاب های مزمن و جلوگیری از سنگ صفرا است. با آسیاب کردن
            گندم، جوانه و سبوس یا همان پوسته از بخش آردی آن تفکیک می‌گردد. آرد
            با توجه به میزان سبوس جدا شده از آن به انواع مختلفی تقسیم‌بندی
            می‌گردد. از انواع آرد می‌توان به آرد قنادی، آرد ستاره، آرد سبوس
            گرفته و آرد کامل اشاره نمود که از این میان آرد کامل به لحاظ میزان
            سبوس بالای آن، دارای ارزش غذایی قابل توجهی است. این محصول به صورت
            غیر مستقیم بخش عمده ای از غذا را تشکیل می‌دهد. با توجه به نیاز
            شهرستان به کارخانه تولید آرد و همچنین کشت انبوه گندم، ایجاد کارخانه
            و یا کارگاهی برای تولید آرد، صرفه اقتصادی خوبی را به دنبال خواهد
            داشت.
          </p>
          <p>
            سیب زمینی یک ماده غذایی پرمصرف به شمار می آید که در تهیه انواع غذاها
            و فرآورده های خوراکی مورد استفاده قرار می گیرد از جمله محصولاتی که
            از سیب زمینی تولید می شود می توان به چیپس سیب زمینی، چیپس خلالی یا
            خلال سیب زمینی، سیب زمینی نیم پز منجمد (فرنچ فرایز) یا سیب زمینی
            نیمه آماده و سیب زمینی سرخ شده اشاره کرد. با در نظر گرفتن کشت زیاد
            سیب زمینی در این شهرستان تولید موارد گفته نیز موفق خواهد بود. البته
            لازم به ذکر است که در این مورد باید به فرهنگ و آداب و رسوم مردم جهت
            بررسی بازار مصرف توجه شود و در صورت عدم تأمین بازار در شهرستان
            می‌توان به دنبال بازار فروش در سایر شهرستان‌ها بود. همچنین برای
            راه‌اندازی این کسب وکار باید به نشان‌های تجاری معروف داخل بازار هم
            توجه کرد.
          </p>
          <p>
            آجیل و خشکبار از موارد مصرفی خانوارها است که سال‌ها مورد استفاده
            عموم قرار گرفته و گاهی حتی در بازار جهانی و صادرات جایگاه خاصی
            دارند. با توجه به اینکه در این شهرستان کاشت گردو، بادام و پسته وجود
            دارد، سرمایه گذاری در این زمینه موفق خواهد بود؛ زیرا این محصولات نه
            تنها صادرات دارند، بلکه در بازار های داخلی نیز تقاضا و ارزش افزوده
            آن‌ها زیاد است. در ضمن در حال حاضر دو یا سه مورد تولید خشکبار وجود
            دارد که بسیار هم موفق هستند. با این وجود با توجه به کیفیت محصولات
            باغی تولیدی، همچنان فعالیت در این حوزه، دارای مزیت است.
          </p>
          <p>
            با توجه به گرانی نرخ اجاره مغازه‌ها، افزایش هزینه ها و خیلی موارد
            دیگر، راه اندازی مشاغل خانگی که بتواند در محیط کوچک که به درآمدی
            کارآمد برساند، نکته جذابیست و امروزه در سراسر دنیا همین مشاغل خانگی،
            رو به افزایش بوده و مورد استقبال بسیاری از زنان و مردان واقع شده
            است؛ زیرا با داشتن شغل خانگی، هزینه ایاب و ذهاب به محل کار وجو ندارد
            و تمامی درآمد متعلق به شخص است. یکی از مشاغل خانگی پرطرفدار، تولید
            چیپس میوه و میوه خشک است که با توجه به وجود مواد اولیه آن در این
            شهرستان، باعث ارز آوری و اشتغالزایی می‌شود.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            در میان محصولات کشاورزی، کشت گندم نسبت به بقیه کم دردسرتر است.گندم
            در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد.
            خرید تضمینی گندم همه ساله توسط دولت انجام می گیرد. البته خود کشاورز
            هم می تواند گندم را بفروشد و درآمد خوبی کسب کند. کود شیمیایی و بذر
            نیز به شکل یارانه ای در اختیار کشاورزان قرار می گیرد؛ بنابراین گسترش
            تولید گندم ارزش افزوده زیادی را به دنبال دارد.
          </p>
          <p>
            سیب زمینی بعـد از گنـدم، برنـج و ذرت، بیشتریـن سـهم را در میـزان
            تولید محصولات غذایـي داراسـت و نقـش مهمـي در تغذیه و سـبد غذایي
            جمعیـت جهان دارد. با توجه به اینکه این محصول مورد نیاز روزانه مردم
            است، در صورت تغیر الگوی کشت و مدیریت منابع آبی، توسعه آن سودآور
            خواهد بود. ضمن اینکه در حال حاضر نیز کشت آن به صورت انبوه صورت
            می‌گیرد.
          </p>
          <p>
            با توجه به اهمیت تولید حبوبات در اقتصاد کشاورزی و مستعد بودن شرایط
            اقلیمی از نظر نوع خاک که سبک و غیر اسیدی است و آب و هوای معتدل این
            شهرستان، توسعه کشت حبوباتی مانند عدس، لوبیا و نخود، از جمله مواردی
            است که ارزش افزوده زیادی را به دنبال دارد.
          </p>
          <p>
            اقلیم ایران یکی از مناسب‌ترین اقلیم‌ها برای پرورش گیاهان دارویی است.
            با این که پرورش و فرآوری گیاهان دارویی در ایران فرآیندی شناخته شده
            است؛ اما آن چنان که باید و شاید از این ظرفیت استفاده نمی‌شود. گیاهان
            دارویی به اشکال مختلف قابلیت فرآوری و عرضه به بازار را دارند.{" "}
          </p>
          <p>
            بازار این گیاهان صرفا مختص بازارهای داخلی نبوده و در کل جهان برای
            تولیدات گیاهان دارویی ایران متقاضی وجود دارد. این تقاضا به علت روی
            گردانی از داروهای شیمیایی و یا حتی استفاده شدن برخی از این محصولات
            در تولیدات کارخانه‌های بزرگ دارویی همواره رو به افزایش است.
          </p>
          <p>
            گیاهان دارویی گونه‌ها و مصارف مختلفی دارند. از این گیاهان نه تنها
            برای درمان بیماری‌ها بلکه در صنایع کنسروسازی، نوشابه سازی، ‌عطر سازی
            و غذایی نیز استفاده می‌شود. گیاهان دارویی به طور معمول در طبیعت یافت
            می‌شوند که می‌توان با برداشت آن‌ها اقدام به فروش مستقیم و یا فرآوری
            آن‌ها نمود. در ضمن امروزه بسیاری از گیاهان دارویی را به صورت هدفمند
            در مزارع پرورش می‌دهند. شهرستان ملکان نیز یکی از شهرستان هایی است که
            کشت گیاهان دارویی در آن بسیار موفق عمل کرده است. با توجه به نکات
            گفته شده، گسترش این گیاهان ضمن وجود صنایع فراوری آنها با سود خوبی
            همراه خواهد بود.
          </p>
          <p>
            پياز محصولی است که به صورت یکساله کشت می‌شود. این گیاه متعلق به فصل
            خنک است و بهترین دما برای جوانه زدن بذر پیاز 18 درجه سانتی‌گراد و
            حداقل و حداکثر دما برای این مرحله از رشد به ترتیب 7 و 29 درجه
            سانتی‌گراد است. این محصول از مهم‌ترین سبزی‌هایی است که در سطح وسیعی
            کشت می‌گردد و به‌عنوان چاشنی و طعم‌دهنده در اکثر غذاها استفاده
            می‌شود و دارای مصارف پزشکی و دارویی متعددی است؛ بنابراین بازار مصرف
            خوبی داشته و توسعه کشت آن در شهرستان توجیه اقتصادی دارد.
          </p>
          <p>
            جو بعد از گندم بیشترین سطح زیر کشت را در ایران به خود اختصاص داده
            است. در ایران اراضی وسیعی وجود دارد که بدلیل شوری و عمق کم خاک و شور
            بودن آب زراعی صرفا برای تولید جو مناسب است؛ ولی متاسفانه با توجه به
            تنوع آب و هوایی، ارقام مناسب هرمنطقه معرفی نشده است. دو نوع جو
            بهاره، پاییزه را می‌توان در مناطق مختلف از جمله ملکان، کاشت.
          </p>
          <p>
            از جو برای تهیه نان و پخت سوپ استفاده می شود. این گیاه در تهیه غذای
            کودک نیز کاربرد دارد. جو از دیر باز در سبد تغذیه دام جایگاه ویژه
            داشته و به صورت دانه و علوفه سبز مورد استفاده قرار می‌گیرد. جوشانده
            جو داروي خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین
            آورنده کلسترول است. لذا افزایش تولید این مورد نیز زمینه های لازم
            برای رشد و پیشرفت را دارد؛ زیرا با اقلیم این شهرستان سازگار بوده و
            هم اکنون نیز به صورت انبوه کشت می‌شود.
          </p>
          <p>
            بسیاری از مردم فکر می کنند که کاشت زعفران فقط درخراسان رضوی انجام می
            شود، به همین دلیل اطلاعات کافی از کاشت طلای سرخ ندارند. مقاومت
            زعفران در برابر سرما زیاد بوده و به آب کمی نیاز دارد. زعفران به علت
            داشتن رنگ زیبا، عطر و طعم بسیار مطبوع، در صنایع غذایی کاربرد زیادی
            دارد. دمنوش زعفران آرام بخش بوده و استرس و نگرانی را برطرف می
            کند.کسب و کار کشت زعفران به علت خاصیت ضد سرطانی این گیاه اهمیت دو
            چندان پیدا می کند؛ با توجه به اینکه در حال حاضر این کشت درر این
            شهرستان انجام می‌شود، کشت این محصول، از جمله مزیت هایی است که در
            صورت توسعه، صرفه اقتصادی خوبی را در پی دارد.
          </p>
          <p>
            یکی از دلایل کشت یونجه تقویت خاک اراضی کشاورزی است که ریشه این گیاه
            با تثبیت ازت، خاک را غنی و شرایط ایده آلی برای کشت محصول بعدی فراهم
            می کند. علاوه بر این با توجه به مصرف روزانه بین 4 تا 5 کیلو علوفه و
            قیمت خوب آن، کشت این محصول از نظر اقتصادی نیز مقرون به صرفه خواهد
            بود و در حال حاضر نیز کشت آن در حال انجام است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            در طي چند دهه گذشته توجه به بوقلمون و محصولات آن موجب گشت تا پرورش
            آن به صورت صنعتي در ايران و جهان آغاز و طي چند سال اخير نيز به مرز
            قابل قبولي برسد تا جائيکه امروزه شاهد افزايش روز افزون مصرف گوشت و
            ساير فرآورده هاي آن در سراسر جهان هستيم. از آنجا که گوشت بوقلمون
            داراي خواص غذائي ويژه اي بوده و محدوديت مصرف خاصي نيز ندارد؛ لذا مي
            تواند به عنوان جايگزين مناسبي براي گوشت قرمز علي الخصوص در بيماراني
            که مصرف گوشت قرمز براي آنها با محدوديت هائي همراه است، مطرح گردد.
          </p>
          <p>
            از ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز در يک
            لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد وزن يک لاشه 8 کيلوئي
            را تشکيل مي دهد.
          </p>
          <p>
            عواملی چون افزایش استانداردهای سطح معیشتی و رشد سریع شهرنشینی،
            افزایش توجه به غذاهای غربی و همچنین اهمیت به جذب هرچه کمتر چربی، سبب
            افزایش تولید و مصرف گوشت بوقلمون در دهه گذشته شده است. پرورش بوقلمون
            در این شهرستان انجام می‌شود. عملکرد واحد های فعال در این حوزه بسیار
            موفق بوده است؛ لذا گسترش آن با توجه به آنچه گفته شد، ارزش افزوده
            زیادی را به دنبال دارد.
          </p>
          <p>
            پرورش مرغ تخمگذار علاوه براینکه به تامین منابع غذایی طبیعی و رونق
            تولید کمک می کند نقش به‌سزایی در امر اشتغال-زایی ، بهبود وضع اقتصادی
            و خودکفایی در تولید محصول ارگانیک و طبیعی را ایفا می کند. در ملکان
            واحد هایی در این حوزه مشغول به کار هستند. اقدام در این باره سود خوبی
            را ایجاد می‌کند؛ زیرا تولیدات این واحد ها از جمله نیاز های روزانه
            مردم بوده و بازار مصرف خوبی دارد.
          </p>
          <p>
            پرورش مرغ گوشتی نیز از مزیت های خوب این شهرستان است که همچنان ظرفیت
            سرمایه گذاری را دارد.
          </p>
          <p>
            بلدرچین پرنده ای با جثه کوچک است که در برابر بسیاری از بیماری ها
            مقاوم است. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن
            بازار فروش و کوتاه بودن دوره پرورش(40 روز)، پرورش آن مزیت دارد.
            محصولات این پرنده شامل گوشت، تخم بلدرچین و کود است. گوشت و تخم این
            پرنده دارای ارزش غذایی و دارویی و همچنین سرشار از پروتئین است. پرورش
            این پرنده نیز در صورت بازاریابی و بازار مصرف مناسب، قابلیت توسعه را
            دارد.
          </p>
          <p>
            پرورش کبک و شترمرغ نیز در این شهرستان انجام می‌شود؛ ارزش غذایی گوشت
            این طیور نیز زیاد است و در صورت سرمایه گذاری و بالا بردن فرهنگ مردم
            در راستای مصرف این موارد، قابلیت گسترش برای آنها وجود دارد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با توجه به رونق دامداری در این شهرستان، ایجاد کشتارگاه صنعتی از نیاز
            های این شهرستان است؛ زیرا در حال حاضر ذبح دام در این شهرستان به صورت
            سنتی انجام می‌شود. جلوگیری از بیماری های بین انسان و حیوان و رعایت
            مسائل بهداشتی از جمله مزیت های این کشتارگاه نسبت به کشتار سنتی است.
            علاوه بر این، با ایجاد کشتارگاه صنعتی می‌توان ضایعات دام را برای
            تولید خوراک دام مانند پودر گوشت فراوری کرد.
          </p>
          <p>
            {" "}
            گوشت (پروتئین دامی) به‌عنوان یکی از پرمصرفترین مواد غذایی در دسترس
            بشر، از این قاعده مستثنی نیست و از طرفی به دلیل فسادپذیری بالا، باید
            آن را به روش‌های مناسب بسته‌بندی نمود و با شرایط مناسب با حفظ زنجیره
            سرد حمل، به بازار عرضه کرد. مجموعه عملیات فرآوری و بسته‌بندی گوشت
            قرمز به منظور به تأخیر انداختن فساد، بهبود خواص ارگانولپتیک (آزمایش
            ارگانولپتیکی یک محصول شامل دیدن‌، بوئیدن‌، چشیدن و لمس کردن
            می‌شود)‌، افزایش زمان ماندگاری، حمل ونقل آسان و بازار پسندی بیشتر آن
            است؛ بنابراین با توجه به گسترگی دامداری در ملکان بسته بندی گوشت نیز
            می‌تواند فرصت شغلی مناسبی باشد.
          </p>
          <p>
            فراوری پوست دام شامل استفاده از پشم گوسفند در صنعت ریسندگی و همچنین
            استفاده از چرم گاو در صنعت چرم دوزی، می‌تواند موفق باشد. البته لازم
            به ذکر است، به سبب نزدیکی به تبریز که یکی از قطب های تولید چرم است،
            قبل از سرمایه گذاری بازار مصرف باید به صورت دقیق تری بررسی شود.
          </p>
          <p>
            باتوجه به اینکه نیاز خوراک دام ملکان از شهرستان‌های همجوار تامین
            می‌شودو همچنین برخی از مواد اولیه تهیه این محصول مانند یونجه و جو در
            این منطقه موجود است، می‌توان در زمینه تولید خوراک دام نیز می‌توان
            فعالیت کرد.
          </p>
          <p>
            در مورد مزیت های فوق باید به این نکته توجه کنیم که با ایجاد بیش از
            یک یا دو واحد از هر کدام به حد اشباع می‌رسد و نکته ی بعدی این است که
            سرمایه گذار در هر مورد باید بازار مصرف را نیز در نظر بگیرد.
          </p>
          <p>
            با توجه به اینکه تولیدات عسل مرغوب در این شهرستان زیاد است، بسته
            بندی آن می‌تواند فرصت شغلی مناسبی برای سرمایه گذاری باشد؛ زیرا برای
            حفظ قدرت ضد میکروبی عسل باید آن را در مکانی تاریک و یا در ظرف شیشه
            ای مات یا تیره خارج از یخچال نگه داری شود. نگهداری عسل در ظروف فلزی
            برای مدت طولانی مناسب نیست. بدین منظور امروزه بسته بندی عسل به شکل
            های جذاب و خلاقانه و مناسب، جهت نگهداری رو به افزایش است. تولید
            کننده ها در پی طراحی نوین برای بسته بندی عسل هستند و حتی برای آسان
            سازی شرایط نگهداری و زیبایی ظاهری بیشتر از جعبه های مقوایی استفاده
            می کنند. در ضمن این کار باعث رغبت بیشتر مشتری به خرید می‌شود. در این
            زمینه، تهیه کندو و موم هم می‌تواند درآمد خوبی را ایجاد کند.
          </p>
          <p>
            بسته بندی گوشت بوقلمون، گوشت مرغ و همچنین تخم مرغ، در صورت رعایت
            موازین بهداشتی، توسعه پرورش و بازاریابی مناسب، قابلیت سرمایه گذاری
            را دارد.
          </p>
          <p>
            میزان تولید خشکبار در کشور ایران رقم زیادی را به خود اختصاص می دهد؛
            ولی بیشتر این محصول چه برای صادرات، چه برای فروش در بازارهای داخلی
            به شکل فله‌ای عرضه می شود و فقط تعداد محدودی از برندها بسته بندی این
            گروه از مواد غذایی را انجام می دهند. باید توجه داشت بسته بندی مناسب
            هم در حفظ خواص محصول نقش به سزایی دارد و می تواند مشتریان را به سمت
            خود جذب کند و هم نقل و انتقال محصول بسته بندی شده ساده تر است.
            بنابراین اگر بتوان این گروه از مواد غذایی را در بسته بندی های مشتری
            پسند ارائه کرد، به شرط آنکه قیمت تمام شده در مقایسه با نوع فله ای
            خیلی بیشتر نباشد، می توان از این طریق سود مناسبی به دست آورد.
          </p>
          <p>
            بسته بندی خشکبار نیز از فرصت هایی است که با در نظر گرفت کشت انبوه
            آنها دراین شهرستان، قابل توسعه هستند؛ زیرا با صنعتی شدن جوامع،
            استفاده از محصولات بسته بندی شده به منظور جلوگیری از پاک کردن حبوبات
            و اتلاف وقت بیشتر شده است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی یکی از زمینه‌هایی است که کشور ایران در آن زبانزد جهانیان
            است. فرهنگ و تمدن در ایران تاریخچه‌ای چند هزارساله دارد و این قدمت
            باعث شده تا صنایع دستی بسیار زیادی در دل آن به وجود آمده و رشد کند.
          </p>
          <p>
            قالیبافی از مشاغل خانگی پردرآمدی بوده که تسهیلات خوبی به آن تعلق می
            گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب می
            دانند؛ چون در کنار کارهای روزمره می توانند به این کار بپردازند و
            درآمد خوبی کسب کنند. از آن جایی که قالی انواع مختلفی دارد می توان با
            آموختن دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و
            به بازار عرضه کرد
          </p>
          <p>
            {" "}
            با توجه به اینکه در حال حاضر نیز قالی بافی در این شهرستان انجام
            می‌شود و عده در آن مهارت دارند، ایجاد کارگاهی در این خصوص در صورت
            بازاریابی مناسب و وجود بازار مصرف، می‌تواند سرمایه گذاری موفقی باشد.
            ضمن این که این کسب و کار را می توان در فضای کوچک و با سرمایه اولیه
            کم راه انداخت و با فروش محصول و افزایش مشتری، این کار را گسترش داد و
            زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در شهرستان ملکان چهار استخر پرورش ماهی قزل‌آلا وجود دارد که قابلیت
            گسترش دارند؛ زیرا پرورش ماهی بیشتر در مزارع و زمین‌های کشاورزی بزرگ
            انجام می‌شود تا در مصرف منابع به خصوص آب صرفه‌جویی شود. همچنین قزل
            آلا، بازار مصرف خوبی در بین ماهیان دارد و در صورت تامین بازار مصرف
            مناسب، ارزش افزوده زیادی را به همراه خواهد داشت .
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            این منطقه شامل معادن زیادی مانند معدن خاک نسوز در روستای چاللو، معدن
            زغال سنگ شیروان، معدن سنگ آهن در روستای قربانکندی و قره چناق و
            داشبلاغ، معدن خاک چینی اوچبلاغ و سنگ‌های مختلف دیگر است. از خاک چینی
            بهره‌برداری کمی می‌شود؛ اما تمام معدن‌های نام برده شده خام فروشی‌
            می‌کنند؛ لذا فراوری معادن فرصت مناسب برای سرمایه گذاری است. تولید
            پوشاک نیز از جمله کسب و کارهایی است که قابلیت سرمایه گذاری را دارد.
          </p>
          <p>
            در این شهرستان شهرک صنعتی یک، کاملا فعال است و شهرک صنعتی دو در حال
            احداث است. در شهرک صنعتی یک تمام اصناف فرش و لبنیات وجود دارد. تولید
            خوارک دام، تولید رب، کشمش پاک کنی، تولید فرش ماشینی، تولید بستنی،
            کارتن‌سازی، ساخت لوله‌های بتنی، خرد کردن و بسته‌بندی قند ، رنگ و
            مواد شیمیایی، تولید کالباس و همبرگر، لوله‌های بتنی، سبدسازی، تولید
            مواد شوینده و ساخت مبل و کابینت و کارگاه ریخته گری نیز در شهرستان
            فعال هستند .{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            پل دختر، قیزلار کورپوسی، تپه علی‌بلاغی، مسجد جامع لیلان، قلعه بختک،
            پل آجری لیلان چای، آب معدنی شورسو، آب معدنی آرپادره سی، کوه
            شیروانشاهلو، دره گاومیش ئولناز، غار آبی بنایم و سرچشمه‌های سرسبز
            روستای باباقاضی جاذبه‌های طبیعی و تاریخی شهرستان ملکان به‌شمار
            می‌آیند. از دیگر مکان‌های تاریخی می‌توان به قره کولیگ لر، سلمان تختی
            و آق اولیا در مبارک شهر و قره تپه بایقوت اشاره کرد.
          </p>
          <p>
            با توسعه گردشگری پایدار، نیاز به محل هایی برای اسکان در گوشه و کنار
            کشورمان احساس می‌شود. با گسترش روند گردشگری در طی این سال ها،
            اقامتگاه های بوم گردی متعددی در اقصی نقاط ایران تاسیس شد. تمام این
            اقامتگاه ها با هدف حفظ و پاسداشت فرهنگ بومی و سنتی هر منطقه و افزایش
            ورود گردشگران به آن نواحی ساخته شده اند. این اقامتگاه ها زیر نظر
            سازمان میراث فرهنگی، صنایع دستی و گردشگری بوده و ملزم به رعایت یک
            سری ضوابط و مقررات برای راحتی و آسایش گردشگران هستند. باتوجه به
            ظرفیت و پتانسیل این شهرستان برای ایجاد این اماکن و همچنین استقبال
            مردم از طرح های موجود، ایجاد چنین واحد هایی از مزیت های خوب این
            شهرستان است که قابل توسعه و سرمایه گذاری است.
          </p>
          <p>
            با توجه به لیست مزیت سنجی، ایجاد خدمات خودرو نیز فرصت شغلی مناسبی
            برای سرمایه گذاری در این شهرستان است؛ زیرا مهارت و تجربه نیرو های
            جوان در این مورد زیاد بوده و قابلیت اشتغالزایی را دارد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
