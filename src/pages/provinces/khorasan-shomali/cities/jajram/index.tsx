import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-12"].cities["IR-1203"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        livestock: "دامداری",
        gardening: "باغداری",
        undefined: "صنایع تبدیلی",
        handicrafts: "صنایع دستی",
        birds: "طیور",
        services: "خدمات",
        industry: "صنعت",
      },
    },
  }
  return (
    <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان جاجرم یکی از شهرستان‌های استان خراسان شمالی بوده که در جنوب
            غربی استان قرار گرفته‌است. مطابق شکل زیر، شهرستان جاجرم از شمال به
            شهرستان مانه و سملقان، از غرب به شهرستان گرمه با 220 کیلومتر فاصله،
            از جنوب به استان سمنان با 587 کیلومتر فاصله، از جنوب شرق به استان
            خراسان رضوی، از شرق به شهرستان اسفراین با 130 کیلومتر فاصله و از
            شمال شرق به شهرستان بجنورد با 157 کیلومتر فاصله محدود می‌شود. این
            شهرستان با مساحت 3654 كیلومتر دارای 3 شهر، 3 بخش، 5 دهستان و 55
            آبادی است. جمعیت شهرستان نیز در سال 1395 بالغ بر 63673 نفر برآورد
            گردیده‌است که از این تعداد 18463 نفر مرد و 18210 نفرد زن هستند.
          </p>
          <p>
            جاجرم به دلیل واقع شدن در حاشیه کویر مرکزی و اتصال به کوه بهار، از
            پوشش گیاهی و اقلیمی متنوعی برخوردار است. این شرایط، منطقه را به
            زیستگاه منحصر به فردی برای گونه‌های مختلف گیاهی و جانوری از جمله
            یوزپلنگ ایرانی که تنها بازمانده نژاد آسیایی است، بز کوهی، قوچ،
            مارال، قرقاول، تیهو و گربه‌وحشی تبدیل و میاندشت را به عنوان یکی از
            زیستگاه‌های مطرح کشور معرفی کرده‌است. همچنین تنها شهرستان استان
            خراسان شمالی است که به راه‌آهن سراسری کشور متصل بوده که این موضوع،
            اهمیت اقتصادی منطقه را دو چندان کرده است. یکی از ابعاد اقتصادی وجود
            راه آهن را می‌توان به اینصورت تفسیر کرد که هزینه حمل‌و‌نقل مواداولیه
            به شهرستان و محصولات تولیدی از شهرستان را به حداقل می‌رساند.
          </p>
          <p>
            با بارش‌های سال جاری، وضعیت آب بهتر شده تاجایی که برای آبیاری
            زمین‌های کشاورزی از آب‌های سطحی استفاده شد. به صورت کلی منابع آبی
            شهرستان خیلی زیاد نیست و بیشتر آب موردنیاز برای شرب و کشاورزی از
            آب‌های زیرزمینی تامین می‌شود. کیفیت این آب‌ها هم عمدتا شور بوده و
            دارای سختی زیادی است. برخلاف کم‌آبی و کیفیتشان، کشاورزی و دامداری در
            این شهرستان انجام می شود و تعدادی کارخانه نیز درحال فعالیت هستند.
          </p>
          <p>
            شایان ذکر است باتوجه به دور بودن جاجرم از بازارهای مصرف و شهرهایی با
            جمعیت بیش از یک میلیون نفر، به نظر می‌رسد نمی توان مزیت زیادی برای
            مشاغل صنعتی بزرگ قائل بود؛ هرچند که اگر بتوان بازار مصرفی را در
            استانهای دیگر یافت؛ درعین حال که هزینه حمل و نقل فشاری بر تولیدکننده
            وارد نکند و بتوان هزینه های متوسط تولید را تامین کرد، واحدهایی در
            مقیاس صنعتی نیز موفق خواهند بود.
          </p>
          <p>
            دور بودن از بازار مصرف، شرایط سخت اخذ وام، کمبود آب، ریسک‌پذیری کم
            مردم، جمعیت کم شهرستان و عدم حمایت بانک‌ها از مهمترین عوامل عدم
            ایجاد کسب‌وکارهای مختلف در جاجرم عنوان شده است که یکی از مهمترین راه
            ها برای از بین بردن بیشتر این موانع، آموزش و فرهنگ‌سازی آحاد مردم
            جامعه است.
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
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            برخلاف کم آبی در شهرستان جاجرم، کشاورزی یکی از مشاغل اصلی مردم است
            که مهارت خوبی هم در آن دارند. زعفران از محصولاتی است که به تازگی در
            جاجرم کشت ‌شده و جواب داده‌است. زعفران گیاهی است که به آب کمی نیاز
            داشته و در صورت تولید و فرآوری از ارزش افزوده بالایی برخورداراست.
            بنابراین می‌توان کشت این محصول سودده را توسعه داد.
          </p>
          <p>
            350 نوع گیاه دارویی در این شهرستان وجود دارد. به علت شرایط مساعد
            زمین‌های شهرستان برای کشت گیاهان دارویی و افزایش تمایل مردم به سمت
            استفاده از این محصولات مانند گل محمدی و فرآورده‌های آن‌ها مانند
            گلاب، می‌توان توسعه این کسب‌وکار را پیشنهاد کرد.
          </p>
          <p>
            کشت گندم و جو نیز کشت غالب منطقه است. میزان تولید این موارد به حدی
            است که نیاز شهرستان را تامین کرده و دیگر در این زمینه وارداتی انجام
            نمی‌شود. استراتژیک بودن این دو محصول برای ایران و رایج‌بودن استفاده
            از آنها در قوت غالب مردم، مزیت توسعه کشت آن‌ها را به خوبی نشان
            می‌دهد. در اولویت‌های پایین تر نیز ذرت و حبوبات قرار می‌گیرند که
            باتوجه به گستردگی مصرف در بین مردم قابلیت توسعه داشته و پیشنهاد می
            شوند.{" "}
          </p>
          <p>
            چغندرقند برای کشت به آب زیاد و شیرین احتیاج دارد؛ درنتیجه به نظر‌نمی
            رسد در این منطقه قابل کشت و توسعه باشد؛ هرچند که به صورت گلخانه ای
            کشت می شود. باتوجه به فاصله حدود 218 کیلومتری جاجرم از شیروان نیز به
            نظر نمی رسد در صورت تولید، بتوان این محصول را به کارخانه قند شیروان
            فروخت و صرفه اقتصادی کشت آن را تامین کرد.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            شرایط آب و هوایی و اقلیم جاجرم باعث شده‌است تا دامداری خوبی در این
            شهرستان انجام شود. یکی از مشاغل اصلی مردم مخصوص روستاییان، دامداری و
            فعالیت های مرتبط با آن است. میزان گوشت قرمز تولیدی به حدی است که
            نیاز در این زمینه برطرف شده و واردات گوشت به حداقل رسیده است. باتوجه
            به نیاز همیشگی مردم به محصولات دامی و مساعد بودن شرایط شهرستان،
            توسعه دامداری همیشه دارای مزیت بوده و پیشنهاد می‌شود.{" "}
          </p>
          <p>
            به علت وجود مراتع مناسب و درآمد خوبی که از دامداری به دست می‌آید،
            پرورش دام‌های سبک مانند گوسفند و بز دارای مزیت است. توسعه پرورش گاو
            نیز باتوجه به نیاز شهرستان به محصولات دامی پیشنهاد می‌شود.{" "}
          </p>
          <p>
            باتوجه به اقلیم کوهستانی و مزارع گیاهان دارویی و مهارت مردم شهرستان
            در زمینه زنبورداری، کشش منطقه برای توسعه این شغل خوب است.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            پسته محصولی است که با شرایط و میزان آب شهرستان جاجرم همخوانی دارد.
            کشت این محصول به تازگی رواج پیدا کرده است و توسعه ان پیشنهاد می‌شود.
            این محصول در صورت فرآوری نیز ارزش افزوده بسیارخوبی را ایجاد خواهد
            کرد.
          </p>
          <p>
            طبق آمار سال 1393، از 7950 درخت بارور و نهار انگور 406 مورد در
            شهرستان جاجرم قرار دارد . باتوجه به اینکه می‌توان فراورده‌های
            بسیارمتنوعی از انگور تولید و میزان اشتغال قابل ملاحظه ای ایجاد کرد،
            توسعه این محصول پیشنهاد می‌شود.{" "}
          </p>
          <p>
            در اولویت‌های پایین‌تر نیز می‌توان به تولید محصولاتی مانند سبزیجات،
            صیفی‌جات و خربزه اشاره کرد. توسعه کشت این محصولات از این بابت
            پیشنهاد می‌شود که می تواند نیاز خود شهرستان به محصولات این چنینی و
            فرآورده های آن‌ها را از بین ببرد.{" "}
          </p>
        </Section>
        <Section id="undefined" title="صنایع غدایی" size="h3">
          <p>
            با توجه فاصله 162 کیلومتری از مرکز استان، 641 کیلومتری از کرج، 423
            کیلومتری از مشهد، 668 کیلومتری از بیرجند و جمعیت 36 هزار نفری خود
            شهرستان، به نظر نمی‌رسد ایجاد واحدهایی در مقیاس صنعتی و بزرگ، مزیت
            داشته‌باشند. با درنظرگرفتن این شرایط می‌توان مشاغلی را در ذیل این
            رسته به صورت خانگی و یا کارگاه های کوچک پیشنهاد کرد که نیاز خود
            شهرستان به بسیاری از موارد وارداتی را برطرف کرده و علاوه بر ایجاد
            انگیزه برای تولیدکنندگان، تعداد اشتغال قابل توجهی فراهم خواهد آورد.{" "}
          </p>
          <p>
            باتوجه به میزان تولید گندم و رایج‌بودن مصرف فرآورده‌های آن می‌توان
            مشاغلی مانند تهیه نان، تولید رشته آشی و پلویی، شیرینی پزی و تولید
            آرد را پیشنهاد داد. سایر مشاغل مرتبط با فرآوری‌ گندم مانند تولید پفک
            گندمی، کلوچه و بیسکویت، نشاسته گندم، برشته کردن، نان بستنی و آرد
            سوخاری نیز پیشنهاد می‌شود.{" "}
          </p>
          <p>
            به دلیل برطرف کردن نیاز خود شهرستان به محصولاتی مانند تولید کشک،
            پنیر، کره، دوغ و... و باتوجه به سطح انجام دامداری، فرآوری شیر
            پیشنهاد می‌شود. به همین دلیل باید به فرآوری صیفی‌جات و سبزیجات مانند
            تولید خیارشور، رب گوجه و.. اشاره کرد.{" "}
          </p>
          <p>
            مستعد بودن منطقه برای کشت گیاهان دارویی، ظرفیت خوبی برای کار در
            زمینه فرآوری این گیاهان مانند بسته‌بندی، عرق‌گیری، گلاب‌گیری از گل
            محمدی و خشک کردن را ایجاد کرده است. لازم به ذکراست که یک کارخانه در
            این زمینه در شهرستان وجود دارد که موفق و فعال نیز هست درنتیجه توصیه
            می‌شود قبل از شروع هر اقدامی، شرایط بازار فروش و توان رقابت با این
            واحد سنجیده شود. باتوجه به رونق زنبورداری، فرآوری عسل و جدا کردن عسل
            از موم آن نیز پیشنهاد می‌شود.{" "}
          </p>
          <p>
            فرآوری انگور و تولید محصولاتی مانند کشمش، شیره و سرکه پیشنهاد
            می‌شود. این محصولات باتوجه به نیاز و تقاضای مردم، بازار فروش خوبی
            خواهد داشت.{" "}
          </p>
          <p>
            درصورت افزایش کشت زعفران و پسته، می‌توان در زمینه فرآوری این محصولات
            به خوبی کار کرد البته باتوجه به شرایط اقتصادی و سطح درآمدی مردم، به
            نظر می‌رسد باید برای فروش این محصولات، بازاری خارج از شهرستان تدارک
            دید.{" "}
          </p>
          <p>
            طبق لیست مزیت سنجی و باتوجه به تولید محصولات باغی در مناطق کوهستان،
            می توان در زمینه تولید چیپس میوه نیز کار کرد البته به صورت خانگی؛
            زیرا میزان این تولیدات زیاد نیست.
          </p>
        </Section>
        <Section id="undefined" title="صنایع تبدیلی" size="h3">
          <p>
            همانطوریکه در قسمت قبل توضیح داده‌شد، راه‌اندازی کسب‌وکار در سطح
            کارخانه و در مقیاس بزرگ، نیازمند بررسی پارامترهایی مانند بازار فروش
            است.
          </p>
          <p>
            باتوجه به گستردگی زنبورداری و ظرفیت برای توسعه آن می‌توان، بسته بندی
            عسل و برندسازی آن و همچنین تولید موم و کندو را پیشنهاد داد.
          </p>
          <p>
            باتوجه به سنخیت پسته با شرایط آب‌وهوایی جاجرم و درصورت افزایش سطح
            زیرکشت، می توان در زمینه بسته بندی آن کار کرد؛ اما همانطور که در
            بالاتر اشاره‌شد، باید برای بازار فروش این محصول در خارج از شهرستان
            برنامه داشت؛ زیرا به نظر نمی‌رسد توانایی مالی مردم شهرستان به
            اندازه‌ای باشد که بتوانند از این محصول به میزان زیادی استفاده کنند.
            درصورت افزایش کشت زعفران نیز، از بسته بندی آن می توان سود قابل توجهی
            را به دست آورد.{" "}
          </p>
          <p>
            وسعت دامداری باعث شده است تا بتوان در زمینه فرآوری پوست دام مانند
            تولید نخ از پشم گوسفند به صورت سنتی و خانگی کار کرد و مواداولیه
            موردنیاز در صنایع دستی را در خود شهرستان تولید کرد البته اگر برای
            فروش صنایع دستی بازاری تامین شد، می توان به صورت صنعتی فعالیت کرد.{" "}
          </p>
          <p>
            درصورت افزایش تولید انگور نیز، بسته بندی فرآورده های آن مانند کشمش،
            شیره و... پیشنهاد می شود.{" "}
          </p>
          <p>
            درپایان باید اشاره کرد باتوجه به لیست مزیت سنجی، تولید و بسته بندی
            نقل و آبنبات به دلیل تولید شکر پنیر دارای مزیت است.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            بیشتر صنایع دستی شهرستان جاجرم در خانه‌ها تولیدشده و کارگاه و
            اتحادیه خاصی در این زمینه فعالیت ندارد. در وهله اول باید به
            عروسک‌بافی اشاره کرد که در بین مردم جا افتاده و مردم در این زمینه
            مهارت خوبی دارند. مشکل عمده‌ای که وجود دارد، بازار فروش است؛
            درصورتیکه اگر بتوان در این مورد اقدام قابل توجهی انجام داد، این صنعت
            دستی قابل توسعه خواهدبود و حتی می توان به صادراتش هم فکر کرد.
          </p>
          <p>
            تولید فرش و تابلوفرش درحال حاضر انجام می‌شود و به نظر می‌رسد که
            می‌توان در این زمینه توسعه و شکوفایی ایجاد کرد. گبه‌بافی، کاموابافی،
            پبنه‌زنی و پرده دوزی هم در اولویت‌های بعدی قرار خواهند گرفت.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور به صورت گسترده در شهرستان جاجرم انجام نمی‌شود؛ ولی
            می‌توان در زمینه پرورش طیوری مانند مرغ تخم گذار، مرغ گوشتی، کبک،
            بلدرچین و شترمرغ کار کرد. البته برای پرورش هرکدام از این موارد باید
            به این نکته توجه داشت که هرچند این طیور در آب و هوای مختلف جوابگو
            هستند؛ ولی مرغوبیت گوشت آنها، درصورتیکه در آب وهوایی غیراز آب وهوایی
            که با آن بیشترین سنخیت را دارند پرورش یابند، به حدی نیست که بتوان در
            این زمینه مانور زیادی داد.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تولید پوشاک به میزان قابل توجهی در جاجرم انجام می‌شود به حدی که 20
            تا 30 درصد نیاز شهرستان را برطرف می‌کند و توسعه این پیشه باتوجه به
            نیاز همیشگی، پیشنهاد می شود. لازم به ذکر است این واحدها از واحدهای
            موفق در سطح شهرستان محسوب می شوند. درضمن طبق لیست مزیت سنجی و باتوجه
            به اینکه کارگاه هایی در زمینه تولید مصنوعات چوبی و درب و پنجره فعال
            هستند، می توان در این زمینه کار کرد.
          </p>
          <p>
            اماکن زیارتی و جاذبه های طبیعی مانند سایت گردشگری کلو، شهر کهنه،
            پارک حفاظت شده ضامن آهو، منطقه سرچشمه شوقان و... هرساله حتی از خارج
            از شهرستان نیز گردشگر دارند؛ ولی به نظر نمی رسد ایجاد اقامتگاه
            بومگردی در این مناطق دارای مزیت باشند. هرچند که باید در تمام این
            مناطق امکانات رفاهی خوبی ایجاد شود.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            کارخانه تولید و فرآوری گیاهان دارویی، تولیدی پوشاک، کارخانه فرآوری
            آلومینیوم و چند کارخانه دیگر در شهرستان وجود دارند که علاوه بر اینکه
            درحال حاضر فعال‌اند، موفق نیز هستند. علت موفقیت بیشتر این واحدها
            ارزان بودن کارگر و زمین در شهرستان، وجود نیاز در بین مردم، دسترسی
            آسان به مواداولیه و... است.{" "}
          </p>
          <p>
            بیشتر کارگران شاغل در این واحدها از افراد بومی شهرستان هستند و این
            مساله نشان می‌دهد ایجاد این واحدها در زمینه ایجاد مشاغل در شهرستان
            موثر بوده‌است و مردم از کارهایی از این دست، استقبال می‌کنند.{" "}
          </p>
          <p>
            باتوجه به کمبود آب و محدودیت های شهرستان در دیگر حیطه ها، به نطر نمی
            رسد بتوان ایجاد کسب و کاری را در این رسته پیشنهاد داد البته طبق لیست
            مزیت سنجی تولید مصنوعات چوبی به صورت کارگاهی انجام می شود و می تواند
            توسعه یابد.{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
