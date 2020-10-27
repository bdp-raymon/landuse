import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-12"].cities["IR-1206"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        gardening: "باغداری",
        food_industry: "صنایع غذایی",
        agriculture: "زراعت",
        undefined: "صنایع تبدیلی",
        services: "خدمات",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
        fisheries: "شیلات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            باتوجه به شرایط کوهستانی فاروج، آب‌وهوای این شهر سرد و خشک بوده و
            دارای زمستان‌های سرد و تابستان‌هایی معتدل است. همچنین به دلیل داشتن
            بلندترین ارتفاع نسبت به دریا درسطح استان، سردترین شهر خراسان جنوبی
            محسوب می شود. وضعیت آب‌ها نیز باتوجه به میزان بارش در سال‌های اخیر
            به وضعیت قابل قبولی رسیده‌است؛ ولی در چندین سال گذشته خشکسالی وجود
            داشت.
          </p>
          <p>
            فاروج درحد فاصل بین شیروان و قوچان واقع شده؛ شهری کنار جاده‌ای که در
            سال‌های اخیر اقتصاد آن تاحد زیادی به عبور مسافران و زائران حرم علی
            ابن موسی الرضا (ع) گره خورده‌است؛ چراکه گرچه در سالیان گذشته کشاورزی
            و دامداری شغل غالب اهالی شهرستان فاروج محسوب می‌شد اما اکنون
            فروشندگی و تأمین نیاز خدماتی رفاهی مسافران دم‌دست‌ترین شغلی است که
            می‌شود در فاروج جستجوکرد. قطعا انجام کارهای خدمات و رفاهی دارای سود
            خوبی خواهد بود؛ ولی باتوجه به اهیمت دو رسته شغلی دامداری و کشاورزی و
            مشاغل مرتبط با آنها و همچنین مهارت افراد شهرستان در این دو حیطه، به
            نظر می‌رسد باید گام‌ها و اقدامات عملی‌تری برای احیا و توسعه این
            مشاغل برداشت. مردم فاروج بسیار اهل کار وتلاش هستند.
          </p>
          <p>
            توصیه می‌شود قبل از اقدامی برای ایجاد کسب‌وکار در فاروج، باید میزان
            اشباع بودن بازار مصرف در خود شهرستان و شهرستان‌های اطراف بررسی شود.
            برای صادرات محصول به مشهد نیز علاوه بر مطلب ذکر شده، باید توان رقابت
            با برندهای بزرگ بررسی شود؛ اما به طورکلی موقعیت جغرافیایی و عبور
            زائرین از این شهر، باعث شده تا بازار فروش نسبتا قابل قبولی برای
            محصولات تولیدی وجود داشته باشد که می توان به نحواحسن از آن استفاده
            کرد.
          </p>
          <p>
            فاروج به شهر آجیلی معروف است و میزان آجیل و خشکبار قابل توجهی در آن
            تولید می‌شود. بیشتر این محصولات نیز توسط زائرین مشهد مقدس خریداری
            شده و بازار خوبی دارد.
          </p>
          <p>
            غیربومی بودن مسئولان، عدم وجود سرمایه گذار و نقدینگی، طولانی و
            هزینه‌بر بودن پروسه اخذ مجوز، بروکراسی اداری، عدم آموزش به افراد
            مستعد و چند مورد دیگر از مهمترین موانع ایجاد کسب‌وکار در فاروج عنوان
            شده است و درصورت اقدام برای کار در شهرستان، باید به این موارد توجه
            ویژه‌ای داشت. موانع مذکور به علاوه موقعیت جغرافیایی، باعث شده‌است که
            بسیاری از مردم مخصوصا جوانان، به کار در زمینه‌های تولیدی و پذیرفتن
            ریسک این مشاغل، تمایل نداشته‌باشند. مسئله دیگری که باعث‌شده افراد
            انگیزه زیادی برای شروع کارهای تولیدی نداشته باشند، نزدیکی به
            شهرستان‌های قوچان و شیروان است؛ زیرا مردم براحتی می‌توانند نیازهای
            خود را از این دو شهر تامین کنند. درضمن به علت نبود زیرساخت‌های لازم
            برای ایجاد برخی مشاغل، بسیاری از جوانان شهرستان برای کار به شهرهای
            بزرگ مانند تهران مهاجرت می‌کنند.
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
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری یکی از مشاغل اصلی مردم فاروج است که از دیرباز در بین آن‌ها
            رواج داشته و مهارت خوبی در آن دارند. وجود مراتع، زمین‌های علوفه‌ای و
            اقلیم آب‌وهوایی شهرستان باعث شده است که پرورش دام سبک مانند گوسفند و
            بزگوشتی از دیگر دام ها بیشتربوده و توسعه آن پیشنهادشود.
          </p>
          <p>
            پرورش زنبورعسل در شهرستان رواج دارد و باتوجه به اقلیم کوهستانی، وجود
            مراتع گل و مهارت افراد در این زمینه قابل توسعه خواهد بود. دررابطه با
            تکمیل زنجیره تولید عسل نیز می توان کارهای شایان توجهی انجام داد و
            میزان اشتغال مناسبی ایجاد کرد که در ادامه متن به آنها اشاره خواهدشد.{" "}
          </p>
          <p>
            در ادامه باید به پرورش گاو نیز بیشتر با هدف تولید شیر و گوشت
            انجام‌شده و توسعه آن پیشنهاد می‌شود، اشاره کرد؛ زیرا مصرف همیشگی این
            نوع محصولات، بازار فروش خوبی را ایجاد کرده‌است. البته باید اشاره کرد
            بیشتر محصولات دامی، نیاز خود شهرستان را برطرف می‌کند.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            طبق آمار سال 1393، حدود بیست درصد از باغ و قلمستان‌های استان در
            شهرستان فاروج قرار گرفته است. عمده‌ترین محصول باغات این شهرستان
            انگور بوده که وجود مهارت کشاورزان باعث شده‌است تا بتوان همچنان در
            این زمینه و تولید انواع فرآورده‌های آن که در ادامه به آنها اشاره
            خواهدشد، کارکرد و درآمد خوبی به دست آورد. همانطوریکه اشاره‌شد،
            موقعیت جغرافیایی شهرستان بدین صورت است که این محصول و فرآورده‌های آن
            به‌راحتی به فروش خواهدرسید.
          </p>
          <p>
            باغات بادام، گردو و سیب با آب و هوای شهرستان سنخیت داشته و جواب
            داده‌اند؛ درنتیجه توسعه آن‌ها پیشنهاد می‌شود.{" "}
          </p>
          <p>
            صادرات باعث شده است تا بتوان مزیت خوبی برای کشت گوجه‌فرنگی و خیار که
            درحال حاضر نیز به میزان قابل توجهی تولید می‌شوند، قائل بود. البته
            این محصولات در اولویت‌های پایین‌تر از مواردی که در فوق به آنها اشاره
            شد، قرار خواهندگرفت.{" "}
          </p>
          <p>
            در لیست مزیت سنجی به میوه‌جاتی مانند آلبالو، گیلاس، زردآلو و گلابی
            اشاره شده‌است که بعضا در مناطق دارای آب، کشت می‌شوند. توسعه کشت
            آن‌ها به علت فراهم‌بودن شرایط برای تولید فرآورده‌هایی با ارزش افزوده
            بالا از این محصولات پیشنهاد می‌شود؛ ولی باید شرایط آب شهرستان را
            درنظر گرفت و در مناطقی که کشش تولید وجود دارد، اقدام کرد. همچنین در
            این لیست به ایجاد گلخانه انگور و انواع صیفی جات مانند خیار، گوجه
            فرنگی، فلفل دلمه ای و... اشاره شده و پیشنهاد ایجاد آنها داده شده
            است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            در ابتدای توضیحات این رسته مجددا لازم به ذکر است، تمام مشاغل
            پیشنهادشده در ذیل، باتوجه به موقعیت گذری شهرستان، بازار فروش تضمین
            شده‌ای خواهندداشت. همچنین درصورت تامین بازارفروش در مشهد و دیگر
            شهرستان‌های همجوار پرجمعیت، می‌توان این مشاغل را در مقیاس صنعتی و با
            میزان تولیدات زیاد دنبال کرد.
          </p>
          <p>
            در اولویت اول در رسته صنایع غذایی فرآوری انگور مانند تولید کشمش،
            شیره و سرکه پیشنهاد می‌شود. البته این محصولات کم و بیش تولید می
            شوند؛ ولی همانطور که در بالاتر اشاره‌شد، باتوجه به وجود پتانسیل‌های
            شهرستان و همچنین موقعیت جغرافیایی، می توان فعالیت در این زمینه را
            توسعه داد.{" "}
          </p>
          <p>
            فرآوری عسل نیز دارای مزیت خواهد بود و البته درصورت توسعه زنبورداری
            پیشنهاد می شود. همچنین باتوجه به گستردگی دامداری و مهیابودن شرایط
            برای توسعه آن، می‌توان در زمینه تولید انواع لبنیات و محصولات دامی
            فعالیت کرد.
          </p>
          <p>
            به دلیل وجود باغات میوه مانند سیب، گیلاس، گلابی، زردآلو، آلبالو و
            خشکبار مانند گردو و بادام، فرآوری آن‌ها مانند تولید چیپس‌میوه،
            میوه‌خشک، آبمیوه و سایر فرآورده‌ها مانند کنتسانتره، مربا، ترشی‌جات،
            لواشک، کمپوت، شهد و سرکه پیشنهاد می‌شوند. همچنین باتوجه به میزان
            کشت، مهارت و علاقه مردم به تولید محصولات مختلف از گندم، فعالیت در
            زمینه‌هایی مانند تولید آرد، تهیه نان، شیرینی‌پزی، تولید رشته آشی و
            پلویی و سایر فرآوری‌های آن مانند تولید پفک گندمی، کیک و کلوچه،
            نشاسته گندم، برشته‌کردن گندم، نان‌بستنی و آرد سوخاری دارای مزیت است
            و میزان اشتغال خوبی ایجاد خواهد کرد. درضمن باید یادآور شد نیاز مردم
            به مصرف اکثر محصولات نام برده باعث شده است بیشتر این مشاغل اشباع
            نشوند و همچنان جای کار داشته باشند. در ادامه باید فرآوری زعفران را
            پیشنهاد داد؛ زیرا دارای مزیت کشت در فاروج بوده و ارزش افزوده بالایی
            دارد.
          </p>
          <p>
            در اولویت‌های پایین‌تر و درصورت افزایش سطح زیرکشت گل‌محمدی، تولید
            گلاب و درصورت افزایش سطح زیرکشت گیاهان دارویی، فرآوری آنها مانند
            عرق‌گیری، بسته‌بندی و خشک‌کردن پیشنهاد می‌شود. همچنین فرآوری گوجه و
            خیار، مخصوصا به صورت خانگی و روغن گیری از دانه های روغنی مانند کلزا
            و آفتابگردان نیز دارای مزیت خواهدبود.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            وجود زمین‌های زیاد در سطح شهرستان فاروج و اقلیم های آب وهوایی متفاوت
            باعث شده است تا کشاورزی رونق داشته باشد و یکی از پیشه های اصلی مردم،
            مخصوصا روستاییان محسوب شود.{" "}
          </p>
          <p>
            کشت جو و چغندرقند درحال انجام است. از آن‌جایی‌که جو محصولی استراتژیک
            در کشور محسوب می‌شود و می‌توان از آن در زمینه تولید خوراک دام و...
            استفاده کرد و همچنین توسط دولت به صورت تضمینی خریداری می شود، افزایش
            کشت مقرون به صرفه خواهد بود. در رابطه با چغندرقند نیز باید اشاره‌کرد
            که برای کشت به آب زیادی نیاز دارد و فاروج هم ازلحاظ منابع آبی وضعیت
            خیلی پایداری ندارد؛ زیرا با بارش‌های اخیر وضعیت آب بهترشده و در
            سال‌های گذشته خشکسالی وجود داشت. همچنین باتوجه به وجود کارخانه
            شیروان در شهرستان شیروان که در فاصله سی و پنج کیلومتری فاروج قرار
            گرفته، می توان کشت آن را توسعه داد.
          </p>
          <p>
            طبق آمار سال 1393 از تعداد 700 بهره برداری زعفران در استان، 465 مورد
            مربوط به این شهرستان بوده است. زعفران تولیدی در فاروج از مرغوبیت
            خوبی برخورداربوده و باتوجه به اینکه با آب‌وهوا و اقلیم سنخیت داشته و
            برای پرورش به آب کمی احتیاج دارد، پیشنهاد می شود. در ادامه نیز باید
            به کشت گندم اشاره کرد که باتوجه به وجود بازار فروش و استراتژیک بودن
            آن، دارای مزیت خواهد بود.{" "}
          </p>
          <p>
            در اولویت‌های بعد عدس، کلزا، پیاز و سیب‌زمینی قرار خواهند گرفت که به
            میزان کمی تولید می‌شود. باتوجه به مهارت کشاورزان در این زمینه‌ها و
            وجود زمین، می‌توان تولید این محصولات را توسعه داد و حداقل نیاز خود
            شهرستان را تامین کرد.{" "}
          </p>
          <p>
            کشت گل محمدی، یونجه، لوبیا، نخود، کدو آجیلی و پرورش گل آفتابگردان
            نیز در لیست مزیت سنجی پیشنهاد شده‌اند که درصورت فراهم‌بودن شرایط
            قابل کشت هستند. در پایان نیز به علت مستعد بودن زمین های شهرستان، کشت
            گیاهان دارویی پیشنهاد می‌شود.{" "}
          </p>
        </Section>
        <Section id="undefined" title="صنایع تبدیلی" size="h3">
          <p>
            صنایع بسته بندی و تکمیلی، باتوجه به نزدیکی شهرستان فاروج به مشهد
            مقدس، دارای مزیت خوبی بوده و درصورت ایجاد میزان اشتغال مناسبی ایجاد
            خواهند کرد.{" "}
          </p>
          <p>
            بسته‌بندی زعفران و انواع فرآورده‌های میوه جاتی که در قسمت صنایع
            غذایی به آنها اشاره شد مانند چیپس میوه، شیره انگور، کشمش، مربا،
            ترشی‌جات، و خشکبار و... در اولویت اول مزیت قرار گرفته و مقرون به
            صرفه است.{" "}
          </p>
          <p>
            باتوجه به اینکه زنبورداری درحال انجام است و قابلیت توسعه دارد،
            تابحال اقدام قابل توجهی در زمینه بسته‌بندی عسل و یا تولید موم و کندو
            انجام نگرفته است. به نظر می‌رسد احداث چنین واحدی، ارزش افزوده بالایی
            به دنبال دارد.{" "}
          </p>
          <p>
            نبود صنایع تبدیلی در زمینه تولید کودهای فسیلی و وسعت انجام دامداری،
            فرصت خوبی را برای کار در این شغل فراهم کرده‌است.{" "}
          </p>
          <p>
            در اولویت‌های پایین‌تر نیز می توان به ایجاد سردخانه اشاره‌کرد. به
            نظر می‌رسد باتوجه به میزان تولیدات باغی، ایجاد سردخانه دارای مزیت
            باشد البته باید توجه داشت این مورد با ایجاد یک یا دو واحد اشباع
            خواهد شد و قبل از هر اقدامی در این حیطه، باید تمام جوانب را به طور
            کامل بررسی کرد.{" "}
          </p>
          <p>
            در پایان باید گفت که در لیست مزیت سنجی به بسته بندی غلات اشاره
            شده‌است؛ اما باتوجه به اینکه بیشتر غلات ابتدا فرآوری‌شده و سپس به
            مصرف می رسند، به نظر نمی‌رسد بسته بندی آنها دارای مزیت بوده و
            بازارفروش خوبی داشته باشد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            همانطور که در مقدمه اشاره شد، عدم اعطای تسهیلات و آموزش، یکی از
            موانع اصلی ایجاد کسب‌وکار در شهرستان فاروج است؛ درصورتیکه اگر این
            اقدامات توسط واحدهای ذیربط انجام شود، می‌تواند در ایجاد مشاغلی مانند
            دوزندگی لباس‌های محلی، ایجاد گلخانه، خدمات خودرو و... موثر باشد و در
            حل مشکل بیکاری جوانان نقش قابل ملاحظه ای ایفاکند. بیشتر این مشاغل به
            سرمایه اولیه زیادی احتیاج ندارند و تنها با چند ساعت آموزش، فرد را به
            مهارت نسبی برای شروع کار می‌رسانند.
          </p>
          <p>
            با توجه به اینکه این شهرستان دارای جاذبه‌های طبیعی و گردشگری بکری
            است؛ اما در زمینه اقامتگاه بوم‌گردی آن اقدامات درخوری
            انجام‌نشده‌است. از آنجایی که این شهرستان در مسیر زائران قرار گرفته
            است، احداث مجتمع‌های گردشگری و انجام خدمات بین‌راهی، بسیار ثمر بخش
            خواهدبود.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            شهرستان فاروج در این حوزه شکوفایی خاصی ندارد و بیشتر واحدهایی که
            وجود دارد بصورت نیمه فعال درآمده و احتیاج به حمایت دارند با این وجود
            و باتوجه به اقلیم منطقه و نیاز مردم، پرورش مرغ تخم‌گذار، مرغ گوشتی
            در اولویت اول و پرورش شترمرغ در اولویت دوم قرار دارد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            به دلیل وجود مهارت و علاقه در زنان، مخصوصا اهالی روستا، بافت فرش
            دستبافت، قالیچه و گلیم در حوزه صنایع دستی دارای مزیت بوده و حتی کشش
            برای ایجاد کارگاه‌های تجمیعی فرش‌بافی وجود دارد تا علاوه بر ایجاد
            شغل برای زنان خانه‌‌دار، زمینه صادرات و ارزآوری را نیز فراهم کند.
            تولید این محصولات درگذشته زیاد بوده است؛ ولی به علت کاهش قیمت،
            انگیزه و اشتیاق بافندگان از بین رفته و میزان تولیدات افت شدیدی پیدا
            کرده‌است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            صنعت در شهرستان فاروج مزیت قابل توجهی ندارد؛ زیرا جمعت شهرستان
            کم‌بوده و جوابگوی میزان تولیدات بالای یک کارخانه بزرگ و صنعتی
            نخواهدبود. درضمن باتوجه به شرایط آب، به نظر نمی‌رسد بتوان شکوفایی
            زیادی در این زمینه ایجاد کرد؛ با این حال واحدهای صنعتی در زمینه
            تولید خوراک دام و تولید محصولات لبنی فعال و موفق هستند. مهمترین دلیل
            موفقیت این واحدها نیز وجود تقاضا برای محصولاتشان عنوان شده‌است.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            به دلیل کمبود آب در شهرستان فاروج، پرورش ماهی مزیت چندانی ندارد؛
            هرچند که اگر بتوان شرایط را برای پرورش ماهیان مخصوصا ماهیان زینتی
            ایجاد کرد، سود خوبی خواهد داشت.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
