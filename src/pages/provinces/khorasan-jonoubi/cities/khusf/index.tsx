import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-10"].cities["IR-1011"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        undefined: "صنایع تبدیلی",
        gardening: "باغداری",
        agriculture: "زراعت",
        birds: "طیور",
        services: "خدمات",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان خوسف یکی از شهرهای استان خراسان جنوبی بوده و از مناطق کویری
            به حساب می‌آید. این شهرستان از دو شهر خوسف و محمدشهر و دو بخش مرکزی
            و جلگه ماژان تشکیل شده‌است. از آنجا که خوسف به تازگی در تقسیمات
            شهرستانی استقلال پیداکرده و قبلا بخشی از شهر بیرجند بوده ، همچنان
            بافت روستایی خود را حفظ کرده است. این شهر از شمال به شهرستان سرایان،
            از شرق به شهرستان بیرجند، از جنوب به شهرستان نهبندان و از غرب به
            شهرستان طبس محدود می‌شود . بزرگان زیادی در این شهرستان زندگی
            کرده‌اند. از گذشته ترویج فرهنگ کار رواج داشته است. با وجود اینکه
            بیشتر جمعیت خوسف را کهنسالان تشکیل می‌دهند، ولی هنوز شاغل هستند و
            دست از کار و تلاش بر نمی‌دارند. شکل زیر موقعیت شهرستان خوسف را نشان
            می‌دهد.
          </p>
          <p>
            طبق بررسی‌های انجام‌شده، کمترین آمار بیکاری مربوط به شهرستان خوسف
            بوده است؛ بنابراین می‌توان گفت که افراد، جویای کار هستند؛ حتی اگر
            موقعیت آن وجود نداشته‌باشد. قطعا اگر کسب‌وکار جدیدی راه‌اندازی شود،
            مردم در آن مشارکت کرده و به سمت آن تمایل پیدا می‌کنند؛ چون مردم خوسف
            مردم کویر هستند و سختی کشیده‌اند، زحمت و دشواری کار برایشان اهمیتی
            نداشته و بیشتر بحث درآمد برای آنها اهمیت دارد.
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
        <Section id="undefined" title="دامپروری" size="h3">
          <p>
            وجود مراتع سبز مورد نیاز دام‌ها، بازار مصرف و تقاضای بالا در حوزه
            دامداری باعث شده تا بتوان این حوزه را به عنوان اولویت اول در خوسف
            معرفی کرد. همچنین فاصله‌ی کم این شهر با مرکز استان خراسان جنوبی باعث
            می‌شود تا دامدار از بابت فروش محصولات و فرآورده‌های تولیدی خود
            آسوده‌خاطر باشد. در این منطقه دام های سبکی چون بز و گوسفند را به
            صورت پرواری و داشتی پرورش داد.
          </p>
          <p>
            از دیگر ویژگی‌های منحصر به فرد این شهرستان، دارا بودن شرایط مناسب
            برای پرورش شتر پرواری است.چون نگهداری و پرورش این حیوان علاوه بر
            هزینه‌های نسبتا پایین، سود بالایی دارد و با شرایط آب و هوایی و اقلیم
            خوسف همخوانی دارد. نزدیکی به استان‌های کرمان و یزد از یک سو و وجود
            کشتارگاه‌های مناسب شتر در شهرستان‌های این دو استان از سوی دیگر باعث
            رونق پرورش شتر در شهرستان خوسف شده‌است؛ به‌گونه‌ای که همچنان ظرفیت
            برای توسعه پرورش وجود دارد. علاوه بر شتر، در بخش دام سنگین، پرورش
            گاو هم دارای مزیت است.
          </p>
          <p>
            با توجه به شرایط شهرستان و محصولات تولیدی مخصوصاً عناب، زمینه برای
            پرورش زنبورعسل فراهم ‌است. با اجرای طرح پرورش زنبورعسل می‌توان عسل
            عناب را با کیفیت بالایی تولید و حتی صادر کرد. لازم به ذکر است که عسل
            خوسف در جشنواره عسل کشور سال 97 رتبه اول را از آن خود کرده است.
            بدیهی است که با وجود چنین مزیت مطلقی، زنبورداری همچنان دارای مزیت
            باشد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            محصولات کشاورزی استراتژیک منطقه خراسان، در شهرستان خوسف به خوبی جواب
            داده‌است. اگرچه زرشک در بسیاری از نقاط کشور تولید می‌شود؛ ولی زرشک
            شهرستان خوسف، کیفیت بسیار مطلوبی دارد و همچنان ظرفیت برای توسعه و
            گسترش آن فراهم است.
          </p>
          <p>
            تولید عناب با توجه به مصرف کم آب، مقاوم بودن در برابر گرما و
            هزینه‌های پایین، صرفه‌ی اقتصادی دارد و تنها محصولی است که در خوسف در
            رده‌ی میوه‌های درختی به راحتی تولید می‌شود. طبق آمار کارشناسان 90
            درصد عناب مصرفی کشور در شهرستان خوسف تولید می‌شود که با توجه به
            دلایل ذکر شده همچنان می توان در این زمینه کار کرد.
          </p>
          <p>
            کشت پسته چند سالی است در شهرستان خوسف انجام شده است ولی باید این
            نکته را درنظر گرفت که نهال پس از 5 سال محصول می‌دهد. با این وجود چون
            این درخت حساسیت خاصی به کیفیت آب مصرفی ندارد با آب شور هم می توان آن
            را آبیاری نمود. بنابراین کاشت پسته با درنظرگرفتن شرایط دارای مزیت
            است.
          </p>
          <p>
            کشت گل محمدی هم همزمان با پسته اجرا شده و نتایج خوبی داشته است؛
            بنابراین می‌توان آن را توسعه داد.
          </p>
          <p>
            کاشت درخت انجیر، انگور، انار و بادام(در نقاط سردسیر شهرستان) با توجه
            به اینکه در شهرستان جواب داده‌است، قابلیت اجرا دارد. بدیهی است که با
            افزایش میزان تولیدات در این بخش می توان زمینه را برای راه‌اندازی کسب
            و کارهایی در حوزه فرآوری این محصولات فراهم کرد.
          </p>
          <p>
            طبق بررسی‌های انجام‌شده گیاهان دارویی مانند زیره سبز، پونه و... به
            صورت خودرو در شهرستان وجود دارد؛ بنابراین می‌توان با فراهم‌کردن
            شرایط کشت، تولید این محصولات را افزایش داد.
          </p>
          <p>
            احداث گلخانه با هدف تولید سبزیجات و صیفی‌جات در شهرستان پیشنهاد خوبی
            است که همچنان می‌توان آن را توسعه داد. با برنامه‌ریزی مناسب و عرضه
            به موقع محصولات در فصول سرد سال، سود خوبی نصیب گلخانه دار می‌گردد.
            چند مورد گلخانه آلوئه‌ورا و توت فرنگی نیز در خوسف در حال فعالیت
            هستند که به دلیل عدم فرآوری محصولات مزیتی برای گسترش آنها وجود ندارد
            و میزان تولیدات این دو گلخانه در این زمینه کفایت می‌کند. در صورت
            راه‌اندازی صنایع تبدیلی این محصولات، می‌توان احداث گلخانه‌ را توسعه
            بخشید.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            وجود جلگه‌ی حاصلخیز ماژان در این شهرستان، بستر را برای تولید محصولات
            با کیفیت زراعی فراهم نموده است. زعفران تولیدی خوسف کیفیت بالایی دارد
            و به خاطر مصرف کم آب، همچنان ظرفیت برای توسعه آن وجود دارد. گندم و
            جو تولیدی شهرستان هم مرغوب بوده و قابلیت کشت دارد.
          </p>
          <p>
            کشت پنبه از جمله کشت‌هایی است که در سنوات قبل در خوسف انجام می‌شده و
            اگر آب مورد نیاز آن تامین شود گزینه خوبی برای کشت است.{" "}
          </p>
          <p>
            تولید گل نرگس علی‌رغم زحمات فراوانی که دارد از جمله تولیداتی است که
            در شهرستان خوسف در سطح بالایی انجام می‌شود و در کشور حائز رتبه است.
            بنابراین می‌توان بادرنظرگرفتن شرایط، در این حوزه فعالیت کرد. پس از
            آن یونجه، ذرت علوفه‌ای و ارزن برای استفاده دام و طیور مزیت دارد. کشت
            عدس، پیاز و نخود از دیگر پیشنهادات کارشناسان برای حوزه‌ی زراعت است.
          </p>
          <p>صنایع غذایی</p>
          <p>
            با توجه به تولیدات گسترده عناب، فرآوری آن در شهرستان مزیت دارد.
            البته واحد کارگاهی با 11 نیروی کار در حال تولید حبه عناب هستند. این
            مجموعه با وجود عدم تبلیغات خاص و بسته‌بندی معمولی، بازار فروش خوبی
            دارد و برای تولیدات بیشتر نیازمند توسعه و گسترش است. روال کار به این
            شکل است که عناب آسیاب شده را با میوه‌های خشک آسیاب‌شده مانند آلو
            مخلوط می‌کنند و با فشرده‌کردن این ترکیب آن را تبدیل به حبه می‌کنند.
            طعم و مزه‌ی خاص این محصول طرفداران زیادی دارد.
          </p>
          <p>
            اگرچه بیشتر شترهایی که در این منطقه پرورش می یابند، به صورت پرواری و
            با هدف تامین گوشت هستند اما اگر فرآوری مناسب بر روی شیر آن انجام
            شود، محصولاتی تولید می‌شود که از نظر ارزش غذایی در سطح بالایی قرار
            دارند. اخیرا افراد زیادی به سمت مصرف این محصولات گرایش پیدا
            کرده‌اند. در نتیجه ایجاد واحدی در زمینه فرآوری شیر شتر در این منطقه
            مزیت دارد.
          </p>
          <p>
            با توجه به رویش فراوان گیاهان دارویی مانند زیره سبز، پونه و... به
            صورت خودرو، می توان واحدی را در زمینه تولید گلاب و عرقیات گیاهی در
            شهرستان راه‌اندازی کرد. حُسن این کسب‌وکار این است که به صورت خانگی
            نیز قابلیت اجرا دارد.
          </p>
          <p>
            کاشت درخت عناب در خوسف باعث‌شده تا این شهرستان در زمینه تولید عسل
            عناب در کشور سرآمد باشد. این عسل علاوه بر خواص دارویی و درمانی
            فوق‌العاده‌ای که دارد، از لحاظ طعم و مزه هم بی‌نظیر بوده و افراد
            زیادی خواستار آن هستند. در واقع وجود این محصول در خوسف، مزیت بسیار
            خوبی برای تولید عسل عناب است.
          </p>
          <p>
            در این منطقه تولید پسته صورت می‌گیرد. در صورتی که سطح تولید بالارود
            با انجام فرآیندهای لازم بر روی پسته و بسته بندی بازارپسند آن می‌توان
            در این حوزه فعالیت کرد و ارزش افزوده‌ی قابل توجهی ایجاد نمود.
          </p>
          <p>
            همانگونه که پیش از این بیان شد، باتوجه به تولید انگور در سطج
            شهرستان، مشتقات حاصل از این میوه، ارزش غذایی بالایی داشته و در درمان
            بسیاری از بیماری‌ها نقش بسزایی دارد. به همین دلیل تولید کشمش، شیره و
            سرکه انگور حتی اگر به صورت کارگاه‌های کوچک خانگی هم باشد، مزیت خوبی
            برای شهرستان محسوب می‌شود.
          </p>
          <p>
            ایجاد واحد تولید لبنیات به صورت گسترده از دیگر مشاغلی است که می توان
            برای این شهرستان پیشنهاد داد. سایر مزیت‌هایی که به دلیل رونق پرورش
            دام و کشت گندم در این منطقه پیشنهاد می شود، تولید ژلاتین از استخوان،
            سوسیس و کالباس، پفک گندم، نشاسته گندم و شیر خشک است که برای ایجاد آن
            باید جوانب زیادی از جمله بازار فروش را بررسی‌کرد و در صورت نبود
            مشکل، آن را اجرانمود .
          </p>
        </Section>
        <Section id="undefined" title="صنایع تبدیلی" size="h3">
          <p>
            همانطوریکه گفته‌شد، کشت گل نرگس سختی زیادی برای کشاورز دارد و با
            درنظرگرفتن جوانب زیاد توصیه می‌شود؛ ولی با فرآوری مناسب می توان
            زمینه را برای کشت آن هم فراهم کرد .{" "}
          </p>
          <p>
            با توجه به ارزشمند بودن آلوئه‌ورا و مواد مفیدی که در این گیاه وجود
            دارد، فرآوری آن و تبدیل به نوشیدنی، مواد آرایشی بهداشتی و
            فرآورده‌های دیگر در شهرستان خوسف مزیت دارد.در این صورت می‌توان در
            بخش باغداری‌، گلخانه‌های بیشتری در این زمینه احداث نمود.
          </p>
          <p>
            کشتارگاه صنعتی از دیگر نیازهای شهرستان خوسف است که وجود دام‌های
            فراوان در این منطقه، چنین صنعتی را می طلبد.
          </p>
          <p>
            بسته بندی زرشک، زعفران و عناب تولیدی نیاز دیگر خوسف است تا از خام
            فروشی محصولات جلوگیری شود و ارزش افزوده‌ای برای شخص ایجاد کند.لازم
            به ذکراست که در این منطقه میزان تولید عناب از زرشک و زعفران بالاتر
            بوده و به همین دلیل بسته بندی آن مزیت بیشتری دارد. از طرفی به دلیل
            مسافت 30 کیلومتری خوسف با مرکز استان (شهرستان بیرجند)، بیشتر بسته
            بندی زرشک و زعفران در بیرجند انجام می‌گیرد.
          </p>
          <p>
            بسته‌بندی عسل عناب تولیدشده و سبزیجات از دیگر کسب‌وکار هایی است که
            می‌توان در شهرستان راه‌اندازی کرد.
          </p>
          <p>
            امروزه پزشکان و متخصصین طب سنتی خواص زیادی برای روغن کوهان شتر
            برشمرده اند که از جمله آن می‌توان به درد مفاصل اشاره نمود؛ بنابراین
            با تهیه این محصول در چنین منطقه‌ای که خود، مستعد پرورش شتر است
            می‌توان به سود خوبی دست پیداکرد.{" "}
          </p>
          <p>
            به پیشنهاد کارشناسان، با فراوری پوست دام و ایجاد واحد تولید چرم می
            توان زمینه را برای تولید کیف و کفش فراهم کرد. برای شروع کار باید
            پارامترهایی مانند بازارفروش، کیفیت چرم تولیدی و تأمین مواداولیه را
            درنظرگرفت.
          </p>
          <p>
            بسته‌بندی گوشت قرمز نیز در سطح شهرستان از دیگر مزیت هایی است که
            علاقه مندان به این رشته می توانند آن را انجام دهند.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            شهرستان خوسف به لحاظ شرایط اقلیمی و آب‌وهوایی یکی از بهترین مناطق
            برای پرورش شترمرغ است.طبق گفته کارشناسان به تازگی واحد کشتارگاه و
            فرآوری شترمرغ در حال اخذ مجوز برای راه‌اندازی است و اگر این اتفاق
            بیفتد، پرورش شترمرغ سود خوبی را عاید شخص خواهد کرد و برای بازار فروش
            مشکلی نخواهد داشت.
          </p>
          <p>
            در زمینه پرورش مرغ گوشتی در شهرستان اقداماتی انجام‌شده و در این مورد
            تقریبا می‌توان گفت که ظرفیت اشباع است. اما در مورد تخم‌مرغ میزان
            تولید کم‌بوده و همچنان ظرفیت برای تولید در این زمینه وجود دارد. از
            این رو پرورش مرغ تخمگذار در این منطقه مزیت پیدا می‌کند.
          </p>
          <p>
            پرورش بلدرچین و بوقلمون در خوسف خوب جواب داده است و می‌توان گفت
            نزدیکی به مرکز استان خراسان جنوبی، مشکلی در زمینه فروش وجود
            نخواهدداشت.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            از آن‌جا که دامپروری در شهرستان در سطح بالایی انجام می‌شود و
            ظرفیت‌های زیادی هم برای آن وجود دارد، قصابی می تواند به عنوان یک
            مزیت در کنار دامپروری شکل پیدا کند.{" "}
          </p>
          <p>
            بقیه شغل های خدماتی مانند تعمیرکاری لوازم خانگی، تعمیرات ادوات
            کشاورزی، احداث اقامتگاه‌های بوم‌گردی و اجرای کمپ‌های کویری، با توجه
            به ظرفیت‌های شهرستان در بخش کویر، می‌توانند موفق باشند.
          </p>
          <p>
            به گفته کارشناسان نیروی کار شهرستان در بحث خدمات و تعمیرات بیشتر به
            استان‌های همجوار و شهرهای بزرگ مهاجرت می‌کنند و به همین دلیل خلا
            آن‌ها در شهرستان وجود دارد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            از ویژگی‌های منحصربه‌فرد استان خراسان جنوبی و شهرستان خوسف وجود
            معادن متنوع و با ارزش است. معادن سنگ مرمریت، سنگ‌های زینتی، سنگ طلا
            و مس از جمله این معادن هستند. با سرمایه‌گذاری عظیم و انجام فرآوری بر
            روی محصولات استخراجی از این معادن می توان از خام‌فروشی و خارج‌شدن
            این مواد از کشور به صورت فرآوری‌نشده جلوگیری کرد.
          </p>
          <p>
            در حال حاضر کارخانه لبنیات کوهستان، معدن مس قلعه زری، کارخانه شمش
            چدن و کارگاه فرآوری عناب در خوسف فعال هستند.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            طبق بررسی‌های انجام‌شده، کارگاه‌های حوله‌بافی، توربافی و شال‌بافی با
            همت خانم‌های بیرجندی در شهرستان خوسف فعالیت دایربوده و با توجه به
            فروش داخلی و خارجی آن‌ها و کیفیت بالای محصولات همچنان قابلیت توسعه و
            گسترش در قالب کارگاه‌های تجمیعی وجود دارد.{" "}
          </p>
          <p>
            از طرفی با توجه به معادن سنگ‌های زینتی که در شهرستان وجود دارد،
            تراشکاری این نوع سنگ‌ها چندسالی است رونق پیدا کرده که در کنار آن می
            توان تهیه زیور آلات را نیز راه‌اندازی کرد.
          </p>
          <p>
            در اولویت‌های بعدی می‌توان تولید فرش و قالیچه را در شهرستان انجام
            داد که با توجه به علاقه مندی افراد قابل اجرا است.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
