import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-12"].cities["IR-1208"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        gardening: "باغداری",
        livestock: "دامداری",
        food_industry: "صنایع غذایی",
        undefined: "صنایع تبدیلی",
        services: "خدمات",
        birds: "طیور",
        fisheries: "شیلات",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان مانه و سملقان به مركزيت شهر آش خانه، یکی از شهرستان های
            استان خراسان شمالی است که در شمال غربي استان واقع شده است. مانه
            وسملقان از شرق به شهرستان بجنورد با 66 کیلومتر فاصله، از جنوب به
            شهرستان جاجرم با 125 کیلومتر، از شمال به شهرستان رازوجرگلان و از غرب
            به استان گلستان محدود مي‌گردد. فاصلۀ مركز شهرستان تا مشهد مقدس 280
            كيلومتر است. مانه و سملقان با مساحت 4898 كيلومتر مربع داراي 3 شهر، 3
            بخش، 6 دهستان و 133 آبادي است. جمعيت شهرستان در سال 1395 بالغ بر
            101727 نفر بوده است. شکل زیر موقعیت شهرستان مانه و سملقان را نشان
            می‌دهد.
          </p>
          <p>
            شهرستان مانه و سملقان ازنظر جغرافيايي به دو قسمت كوهستاني و دشتي
            تقسيم مي‌شود. بخش كوهستاني عمدتاً جنوب و جنوب غربي شهرستان و كوه‌هاي
            قورخورد و حسن‌بگ را شامل می‌شود. بخش دشتي نیز، غرب شهرستان و
            محدوده‌هايي در شمال و مركز را شامل مي‌شود كه مراكز جمعيتي را در خود
            جاي داده‌است.
          </p>
          <p>
            بیشتر مردم مانه و سملقان را افراد روستایی تشکیل می دهند که اکثرا به
            سمت کارهایی مانند دامپروری تمایل دارند؛ هرچند که در شهر کارهای
            خدماتی نیز انجام می‌شود.
          </p>
          <p>
            مانه و سملقان بعلت ظرفیت های خوب در زمینه کشاورزی، از دیرباز پذیرای
            اقوام مختلف ومهاجرت آنان بوده‌است. از جمله مهم‌ترین آن‌ها که به
            شهرستان مهاجرت کرده، ساکن شده و امروزه به صورت غالب درآمده‌اند،
            اقوام کرد، ترک، ترکمن، خاوری، بلوچ، فارس، یزدی و تات با مذاهب شیعه و
            اهل سنت هستند. از این بابت شهرستان مانه وسملقان، تجلی‌گاه واقعی وحدت
            اقوام و مذاهب مختلف در ایران اسلامی است.
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
            مانه و سملقان در بین شهرستان‌های استان خراسان شمالی وسعت بالایی
            دارد. به طور كلي وجود منابع آب دائمي و خاك حاصلخيز، موجب رونق
            کشاورزی در این شهرستان شده‌است. هرساله محصولات زراعی قابل توجهی در
            شهرستان کشت‌شده و بخش زیادی از تولیدات سطح استان را به خود اختصاص
            داده‌است. عمده‌ترین محصولات زراعی تولیدی، گندم و جو بوده که باتوجه
            به خرید تضمینی دولت و وجود کارخانه آرد، توسعه کشت این محصولات سود
            خوبی را به دنبال خواهدداشت.
          </p>
          <p>
            شرایط آب‌وهوایی و موقعیت شهرستان به‌گونه‌ای است که می‌توان دانه‌های
            روغنی مانند آفتابگردان و کلزا را کشت کرد. باتوجه به واردات بی‌رویه
            دانه‌های روغنی و پایین بودن سطح زیرکشت این دانه‌ها در کشور،
            راه‌اندازی این کسب‌وکار موفق خواهدبود{" "}
          </p>
          <p>
            زعفران از محصولاتی است که به تازگی در مانه و سملقان کشت‌شده و جواب
            داده‌است. زعفران گیاهی است که به آب کمی نیاز داشته و در صورت تولید و
            فرآوری، از ارزش افزوده بالایی برخورداراست. بنابراین می‌توان کشت این
            محصول سودده را توسعه داد.
          </p>
          <p>
            طبق بررسی‌های انجام‌شده، ذائقه مردم بیشتر به سمت مصرف محصولات طبیعی
            مثل گیاهان دارویی سوق پیداکرده‌است؛ بنابراین با توجه به بازار فروش
            مناسب، می‌توان این محصول را کشت کرده و روی فرآوری آن کارکرد.
          </p>
          <p>
            کشت پنبه یکی دیگر از مشاغلی است که با توجه به وجود سد شیرین‌ده و
            کارخانه پنبه‌زنی، قابلیت توسعه و سرمایه‌گذاری دارد.
          </p>
          <p>
            بعد از محصولات فوق می‌توان روی کشت حبوباتی مانند عدس، نخود و لوبیا و
            محصولاتی همچون برنج، پیاز و یونجه کارکرد. توجه به این نکته ضروری است
            که در حال حاضر کشت این محصولات به‌صورت محدود صورت می‌گیرد و بازدهی
            خوبی را به دنبال داشته‌است؛ بنابراین با درنظرگرفتن بازارفروش و تأمین
            مواداولیه می‌توان در زمینه تولید این محصولات فعالیت کرد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            شرایط جغرافیایی شهرستان مانه و سملقان، وجود کوهستان و دشت‌ها و
            همچنین وجود رود دائمی اترک باعث رونق باغداری شده است؛ به گونه‌ای که
            می‌توان باغداری را یکی از مشاغل اصلی مردم معرفی کرد. محصولات باغی در
            سطح شهرستان از مرغوبیت بالایی برخوردار است و بیشتر این محصولات در
            سطح کشور توزیع می‌شود. مشکل اساسی در زمینه باغداری و صنایع غذایی
            مرتبط با آن، نبود فرآوری لازم روی این محصولات است.نبود این فرآیند
            باعث شده بیشتر میوه‌ها به‌صورت فله‌ای به فروش برسند و سود قابل توجهی
            عاید کشاورز نشود.
          </p>
          <p>
            از میان محصولات باغی می‌توان به میوه‌هایی مانند هلو، گیلاس، زردآلو،
            انگور، شلیل، آلبالو، گلابی و سیب اشاره‌کرد که در شهرستان تولید
            می‌شوند. باتوجه به وجود آب و زمین کافی و همچنین مهارت افراد شهرستان
            در زمینه باغداری، توسعه باغات پیشنهاد می شود و پیش بینی می شود سود
            خوبی داشته باشد. گردو و بادام نیز در شهرستان تولید می‌شود. توسعه این
            محصولات نیز باتوجه به میزان تقاضا و قیمت آن‌ها در بازار، دارای سود
            خوبی خواهد بود.{" "}
          </p>
          <p>
            هندوانه، خیار و گوجه فرنگی از دیگر محصولاتی است که درحال تولید بوده
            و توسعه کشتشان دارای سود و مزیت خواهد بود. در اینجا دو نکته حائز
            اهمیت است. اول اینکه طبق لیست مزیت سنجی می توان خیار را به صورت
            گلخانه ای نیز کشت کرد. نکته دوم این است که کشت صیفی جات و سبزیجات به
            آب زیادی احتیاج دارد درنتیجه قبل از انجام هر اقدامی در زمینه کشت این
            محصولات، باید شرایط آب را بطور دقیق بررسی کرد و از پایداری آن
            اطمینان حاصل کرد.
          </p>
          <p>
            طبق مطالعات انجام‌شده مدتی است پرورش گل محمدی در مانه و سملقان در
            حال اتجام است. این نوع گیاه برای پرورش به آب زیادی احتیاج ندارد و
            باتوجه به بازار همیشگی و نسبتا تضمین شده گلاب، افزایش کشت آن پیشنهاد
            می‌شود.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            گرایش مردم روستاهای شهرستان به سمت دامداری است. آب و هوا، وجود مراتع
            سرسبز و علوفه مرغوب باعث رونق این حرفه شده است. همه این عوامل
            نشان‌دهنده مزیت دامداری بوده که قابلیت توسعه دارد. توجه به این نکته
            ضروری است که بیشتر دامداری‌ها بصورت سنتی و از نوع سبک (پرورش گوسفند)
            هستند؛ البته چند واحد صنعتی نیز در سطح شهرستان فعالیت دارند. پرورش
            گاو نیز در سطح شهرستان انجام می‌شود.
          </p>
          <p>
            وجود باغات زیاد باعث رونق پرورش زنبور عسل شده است. این کار یکی از
            مشاغل اصلی مردم منطقه است. عسل تولیدی نیز با طعم های مختلف و دارای
            مرغوبیت بالایی است. خواص درمانی انواع عسل و وجود بازار فروش همیشگی
            این محصول و همچنین مهارت افرد شهرستان در این شغل، باعث می شود تا
            بتوان پیشنهاد توسعه این کسب و کار را مطرح کرد.{" "}
          </p>
          <p>
            در لیست مزیت سنجی، پرورش کرم ابریشم پیشنهاد شده و وجود توتستان‌ها در
            دهستان‌های جیرانسو و شیرین‌سو، به این کار رونق بخشیده است. درحال
            حاضر در همین مناطق، پرورش اسب ترکمن به صورت محدود انجام می شود.
            همچنین در منطقه کالیمانی نیز پرورش شتر رونق خوبی دارد و توسعه آن
            پیشنهاد داده می‌شود.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            میوه های خوب و باکیفیتی در باغات مانه و سملقان کشت می شوند؛ ولی به
            دلیل نبود صنایع غذایی، میوه‌هایی مانند هلو، انگور، گیلاس، آلبالو و
            گلابی به صورت خام و فله‌ای به فروش می‌رسد؛ درحالیکه با فرآوری و
            تبدیل آن‌ها به آبمیوه، چیپس میوه، خشکبار و میوه‌خشک می‌توان به
            بهترین شکل درآمدزایی کرد. درواقع نبود این صنایع، اصلی ترین خلأ در
            مانه و سملقان محسوب می‌شود. سایر فرآوری‌های میوه‌جات مانند تولید
            مربا، کمپوت، کنسانتره، لواشک، شهد، سرکه و ترشی نیز می تواند
            درآمدزایی خوبی داشته باشد.
          </p>
          <p>
            مانه و سملقان يك سوم كلزاي استان را توليد مي كند و با توجه به اقليم،
            آب‌وهوا و خاك مناسب، توليد اين محصول در شهرستان هرساله در حال افزایش
            است. باتوجه به افزایش سطح زیرکشت کلزا، ايجاد كارخانه روغن كشي يكي از
            خواسته هاي كشاورزان است. درنتیجه این شغل دارای مزیت خوبی است و
            پیشنهاد می‌شود.{" "}
          </p>
          <p>
            باتوجه به سطح انجام دامداری، واحدهایی به تولید لبنیات سنتی مشغول
            هستد. باتوجه به رایج بودن مصرف لبنیات و محصولات دامی، به نظر می رسد
            بتوان همچنان در این زمینه فعالیت کرده و درآمد خوبی کسب کرد.{" "}
          </p>
          <p>
            گستردگی تولیدات گندم باعث شده تا بتوان مزیت خوبی برای مشاغلی مانند
            تولید آرد، رشته پلویی و آشی، نان، شیرینی پزی و سایر فرآوری های گندم
            مانند پفک گندمی، نشاسته، آرد سوخاری، نان بستنی، برشته کردن گندم و
            کلوچه و بیسکویت قائل بود. ماده اولیه تولید آنها یعنی گندم به وفور در
            شهرستان وجود دارد و این مسئله باعث افزایش مزیت مشاغل نام برده می
            شود. ذکر این نکته ضروری است که با وجود کارخانه آرد، قبل از انجام هر
            اقدامی باید به بازارفروش این محصولات دقت و توان رقابت با این واحد را
            بررسی کرد.
          </p>
          <p>
            در ادامه باید به فرآوری زعفران و فرآوری گیاهان دارویی مانند
            بسته‌بندی، عرق‌گیری و خشک‌کردن به عنوان مشاغل مزیت‌دار شهرستان
            اشاره‌کرد. درصورت افزایش سطح زیرکشت گل‌محمدی می‌توان به خشک‌کردن و
            گلاب‌گیری نیز فکرکرد.
          </p>
          <p>
            در اولویت های پایین تر روغن گیری از آفتابگردان پیشنهاد می‌شود.
            همچنین باتوجه به ذائقه مردم شهرستان و سطح دامداری انجام شده، می توان
            در زمینه تولید سوسیس و کالباس و سایر فرآوری‌های دامی مانند تولید
            ژلاتین، شیرخشک و ناگت کار کرد.
          </p>
          <p>
            در پایان خاطر نشان می شود فرآوری شیر شتر می تواند سود خوبی را به
            دنبال داشته باشد؛ زیرا امروزه تمایل بخشی از مردم به سمت استفاده از
            محصولات شتر سوق پیدا کره است البته باتوجه به شرایط اقتصادی امروز،
            باید بازار فروش این مورد به خوبی بررسی کرد و درصورت نیاز و درصورت
            داشتن صرفه اقتصادی، این محصولات را در مشهد که یک شهر توریستی است، به
            فروش رساند.{" "}
          </p>
          <p>
            در پایان باید اشاره کرد باتوجه به وجود کارخانه هایی مانند کارخانه
            آرد یا تولید رب گوجه فرنگی که در زمینه صنایع غذایی فعال هستند،
            درصورت وارد شدن به این حیطه ها، باید شرایط بازار فروش را به خوبی
            بررسی کرد.
          </p>
        </Section>
        <Section id="undefined" title="صنایع تبدیلی" size="h3">
          <p>
            اگرچه در حوزه صنایع تبدیلی در مانه و سملقان کارشده و بسته‌بندی برخی
            محصولات انجام می شود؛ اما به نظر می‌رسد با توجه به جایگاه این
            شهرستان در سطح استان، همچنان ظرفیت برای راه اندازی چنین طرح‌هایی
            وجود دارد.{" "}
          </p>
          <p>
            باتوجه به سطح تولیدات باغی و امکان تولید انواع فرآورده‌ها از این
            محصولات و حتی صادرات آنها به سطح کشور، بسته بندی این موارد دارای سود
            بسیار خوبی خواهدبود. این شغل بصورت خانگی نیز قابلیت انجام دارد.
            همچنین اگر بتوان بازار فروش میوه های تولیدی را در شهر توریستی مشهد
            یافت، سود خوبی از بسته بندی این محصولات به دست خواهدآمد.
          </p>
          <p>
            با توجه به کشت زعفران در شهرستان، درصورت افزایش سطح زیرکشت می‌توان
            به راه‌اندازی کسب‌وکار بسته بندی زعفران نیز فکرکرد.
          </p>
          <p>
            باتوجه به مرغوبیت عسل تولیدی، بسته‌بندی عسل دارای سود خوبی خواهد
            بود. اگر صنعت بسته‌بندی عسل توسعه پیداکند، صادرات این محصول به مشهد
            امکان‌پذیر خواهد بود. تولید موم و کندو نیز باتوجه به وجود شرایط برای
            افزایش زنبورداری دارای مزیت است.{" "}
          </p>
          <p>
            سردخانه در ناحیه صنعتی وجود دارد و به نظر نمی رسد نیازی به احداث
            واحد این چنینی وجود داشته باشد. اگر میزان تولید میوه‌جات افزایش
            یابد، می توان تعداد سردخانه‌ها را افزایش داد و از این محصولات در
            دیگر فصول استفاده کرد.{" "}
          </p>
          <p>
            باتوجه به سطح وسعت دامداری و طیور، احداث کشتارگاه مقرون به صرفه
            خواهد بود. ذکر این نکته ضروری است که هرچند ایجاد کشتارگاه و سردخانه
            تعدای شغل پایدار ایجاد خواهد کرد؛ ولی باید توجه داشت این واحدها با
            ایجاد چند مورد به حالت اشباع می رسند و ظرفیتی برای ایجاد واحدهای
            جدیدتر نخواهد بود.{" "}
          </p>
          <p>
            فرآوری محصولات شتر مانند تولید روغن ازکوهان و بسته بندی گوشت آن می
            تواند دارای سود خوبی باشد؛ زیرا تمایل مردم نسبت به استفاده از این
            محصولات درحال افزایش است. باتوجه به رفت‌وآمد زوار و گردشگرانی از
            خارج از کشور به مشهد مقدس، می توان این محصولات را در مشهد به فروش
            رساند.
          </p>
          <p>
            به نظر می رسد وجود تنها کارخانه ریسندگی و بافندگی در مانه و سملقان
            برای فرآوری پنبه‌های کشت‌شده کفایت کند. تولید گسترده انواع صنایع
            دستی در مانه و سملقان باعث می‌شود که بتوان فرآوری پنبه و تولید برخی
            از مواداولیه صنایع دستی را پیشنهاد داد؛ البته در این رابطه باید توان
            رقابت با کارخانه مذکور و شرایط بازار مصرف این محصولات را به خوبی
            بررسی کرد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            وجود ظرفیت‌های گردشگری اعم از جاذبه‌های طبیعی و آثار باستانی و از
            طرفی قرار گرفتن این شهرستان در مسیر استان گلستان، باعث شده تا ایجاد
            کسب و کار دراین رسته دارای مزیت باشد. عموما مسافران برای سفر به
            استان گلستان و یا مشهد مقدس از این شهر عبور می‌کنند؛ بنابراین خدمات
            بین راهی مانند ایجاد کافه رستوران‌ها و یا اقامتگاه‌ها، دارای مزیت
            خوبی است.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            علی رغم وجود آب و هواهای متفاوت در شهرستان مانه و سملقان، پرورش طیور
            شغل مرسومی محسوب نشده و بیشتر نیاز در این زمینه از خارج از شهرستان
            تامین می شود؛ با این وجود همانطورکه در لیست مزیت سنجی اشاره شده،
            پرورش انواع طیور بازدهی خوبی دارد.{" "}
          </p>
          <p>
            پرورش مرغ و شترمرغ درحال انجام است و باتوجه به نیاز مردم شهرستان،
            توسعه آنها پیشنهاد می‌شود.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            طبق مزیت سنجی، با توجه به داشتن آب مناسب در برخی از مناطق شهرستان از
            قبیل روستای زو علیا و روستاهای پایین‌دست سد شیرین‌دره، پرورش ماهی
            سردآبی از رونق خوبی برخوردار بوده و دارای مزیت است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            روحیه کم ریسک پذیری در مردم شهرستان مانه و سملقان باعث شده است که
            رسته صنعت، حداقل در شرایط اقتصادی امروز کشور ایران، مزیت زیادی
            نداشته باشد.{" "}
          </p>
          <p>
            واحدهایی مانند کارخانه تولید آرد، تولید رب گوجه فرنگی، درب و
            پنجره‌سازی، کارخانه پنبه پاک‌کنی، سبدسازی، تولیدی لباس، موزائیک سازی
            و... در داخل و خارج از ناحیه های صنعتی شهرستان مانه و سملقان فعالیت
            دارند. لازم به ذکراست بیشتر کارگران مشغول در این واحدها بومی خود
            شهرستان هستند. نکته ای که در رابطه با کارخانه آرد، رب گوجه فرنگی و
            پنبه پاک‌کنی مطرح است این است که بیشتر مواداولیه خود را از داخل
            شهرستان تامین می‌کنند و این مساله، یکی از علل موفقیت آنهاست.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            به دلیل تنوع قومیت ها و اقلیت های مذهبی‌ای که در شهرستان وجود دارند،
            تنوع در تولیدات صنایع دستی نیز بالاست. گلیم‌بافی، نمدمالی،
            قالی‌بافی، و تولید تابلو فرش قابلیت از مشاغلی هستند که قابلیت توسعه
            دارند. درضمن باتوجه به موقعیت جغرافیایی شهرستان که در مسیر مسافرین
            زائرین قرار گرفته‌است، می توان بازار فروش خوبی برای این محصولات
            یافت.
          </p>
          <p>
            راه اندازی بازارچه فروش برای این تولیدات و تامین بازار فروش، باعث
            ایجاد انگیزه و تمایل به تولید بیشتر برای بافندگان می‌شود.
          </p>
          <p>
            مهمترین موانع عدم ایجاد کسب و کار در شهرستان مانه و سملقان بروکراسی
            اداری، عدم روحیه ریسک پذیری، مشکل در زمینه اخذ وام از بانک ها و...
            عنوان شده است. درواقع برای شروع کار در مانه و سملقان، باید تمام این
            موارد را مدنظر قرار داد و پس از بررسی کامل آنها، شروع به فعالیت
            اقتصادی کرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
