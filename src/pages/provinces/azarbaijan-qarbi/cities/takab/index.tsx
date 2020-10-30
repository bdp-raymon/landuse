import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-02"].cities["IR-0205"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        services: "خدمات",
        livestock: "دامداری",
        gardening: "باغداری",
        agriculture: "زراعت",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        birds: "طیور",
        industry: "صنعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            تکاب، یکی از شهرستان‌های استان آذربایجان غربی است که در جنوبی ترین
            نقطه این استان و در ارتفاع 1790 متری از سطح دریا قرار گرفته است.
            جمعیت این شهرستان بر اساس سرشماری نفوس و مسکن سال 1395 بالغ بر
            80.556 نفر می‌باشد. تکاب از شمال با استان آذربایجان شرقی، از شرق و
            شمال شرق با استان زنجان، از جنوب به شهرستان‌های بیجار، دیواندره و
            سقز در استان کردستان و از غرب به شهرستان شاهین‌دژ در استان آذربایجان
            غربی ارتباط دارد. آب و هوای شهرستان تکاب تابعی است از اقلیم حاکم بر
            آذربایجان، با این تفاوت که توپوگرافی و جهت گسترش ناهمواری ها و دوری
            منطقه تکاب از دریا و کانون‌های رطوبتی، شرایط ویژه‌ای به آب و هوای
            منطقه بخشیده که بارزترین مشخصه آن، زمستان های سرد و برفی و تابستان
            های معتدل و خشک می‌باشد و از این بابت اندک تفاوتی با اقلیم حاکم بر
            آذربایجان دارد. شهرستان تکاب با در نظر گرفتن میانگین بارش سالانه ۳۵۰
            میلی‌متر، در گروه رژیم بارانی نیمه بیابانی یا نیمه خشک محسوب می‌شود
            . شکل زیر موقعیت شهرستان تکاب را نشان می دهد.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌ و كارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌ و كار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح‌ شده‌
            است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان تکاب
            ارائه‌ شده‌ است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان‌طوري‌كه در قسمت قبل اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده‌ است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب ‌و كارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب ‌و كارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجوددارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            بخش کشاورزی و باغداری تکاب با وجود تولید بالا و ظرفیت‌های مناسب،
            فاقد صنایع تبدیلی و بسته‌بندی بوده و همین امر میزان بهره‌وری و صرفه
            اقتصادی این بخش را پایین آورده ‌است. با وجود رفت و آمد گردشگر به این
            منطقه، با افزایش سطح تولید و رونق بخشیدن به صنایع تبدیلی، می توان از
            این راه نیز بازار فروش خوبی برای محصولات تولیدی ایجاد کرد.{" "}
          </p>
          <p>
            شهرستان تكاب به علت اقليم و آب و هوای منحصر به فرد و كوهستاني و
            داشتن مراتع غني و تنوع گياهي يكي از بهترين مناطق كشور براي پرورش
            زنبور عسل و توليد عسل مرغوب است. در حال حاضر این محصول بدون برند در
            سطح کشور توزیع شده و در زمينه معرفي آن اقدام جدی صورت نگرفته است؛
            درصورتی که اگر بسته بندی و برندسازی آن به طور جدی تر پیگیری شود،
            منافع اقتصادی بسیار خوبی برای شهرستان به همراه خواهد داشت و میزان
            اشتغال خوبی را نیز ایجاد خواهد کرد. در همین راستا باید به تولید موم
            و کندو و مزیت داشتن کار در این زمینه نیز اشاره کرد.{" "}
          </p>
          <p>
            با توجه به ازدیاد سیب تولیدی در تکاب و صادرات آن به نقاط مختلف
            ایران، بسته بندی و برندسازی آن پیشنهاد می شود؛ البته در این رابطه
            باید توجه داشت که این اقدام نباید باعث افزایش بیش از اندازه قیمت آن
            شود؛ زیرا در شرایط اقتصادی امروز کشور، به نظر نمی رسد جز برای مناطقی
            خاص، کشش استفاده از این محصول زیاد باشد. در ادامه باید گفت بسته بندی
            محصولات غذایی تولید شده مانند میوه خشک، آبمیوه، چیپس میوه و... نیز
            دارای سود خوبی خواهند بود.{" "}
          </p>
          <p>
            سطح دامداری که در حال حاضر در حال انجام است، مهارت افراد در این
            زمینه، وجود قابلیت برای توسعه و... از مهمترین عواملی است که باعث
            ایجاد رونق و کار بیشتر در زمینه دامداری می شود. با توجه به اینکه در
            حال حاضر تعداد قابل ملاحظه ای از دام ها به سایر نقاط کشور صادر می
            شود، به نظر می رسد با ایجاد صنایع تبدیلی محصولات دامی مانند فرآوری
            پوست دام، بتوان سود بیشتری کسب کرد. فرآوری پوست دام ها مانند تولید
            نخ و یا چرم، علاوه بر ایجاد شغل، باعث رونق بیشتر صنعت دستی در سطح
            شهرستان خواهد شد، البته در این رابطه باید به توان رقابت با دیگر
            استان ها و شهرستان های فعال در این حوزه مانند تبریز و.. توجه ویژه ای
            کرد.{" "}
          </p>
          <p>
            با توجه به فراهم بودن شرایط اقلیمی برای پرورش شترمرغ و همچنین سود و
            درآمد بسیار زیاد محصولات شترمرغ، همزمان با ایجاد توسعه در زمینه
            پرورش آن، می توان تولید انواع فرآوری های آن مانند تولید روغن یا بسته
            بندی گوشت را دنبال کرد. نکته ای که باعث می شود این مشاغل در این
            شهرستان دارای مزیت باشند، نزدیکی نسبی تکاب به مرز های غربی ایران است
            که کار صادرات را آسانتر و صرفه اقتصادی آن را بیشتر می کند. درضمن
            ایجاد چنین واحدهایی باعث افزایش انگیزه افراد برای کار بیشتر و یا
            وارد شدن به این زمینه خواهد بود.{" "}
          </p>
          <p>
            طبق لیست مزیت سنجی و بررسی های انجام شده، شرایط شهرستان باعث می شود
            تا بتوان مزیت خوبی برای بسته بندی غلات، حبوبات، خشکبار و... قائل
            بود؛ زیرا میزان این تولیدات در شهرستان زیاد بوده؛ ولی واحدی برای
            تبدیل آنها وجود ندارد. با این وجود جمعیت کم شهرستان باعث می شود تا
            کشش و بازار فروش زیادی برای محصولات تولیدی وجود نداشته باشد؛ ولی با
            توجه به اینکه در حال حاضر صادرات بیشتر محصولات به استانهای کشور
            درحال انجام است، می توان توسعه بیشتری در آن ایجاد کرد و همزمان صنعت
            صنایع تبدیلی و بسته بندی را نیز رونق بخشید البته همانطور که اشاره
            شد، با توجه به اینکه محصولات پس از بسته بندی، تغییر قیمت قابل ملاحظه
            ای را تجربه می کنند، باید تحقیقات بیشتر و دقیق تری در این زمینه
            انجام شود.{" "}
          </p>
          <p>
            میزان تولید میوه جات در سطح استان زیاد است و تعدادی سردخانه نیز در
            سطح استان وجود دارند که در زمینه نگهداری محصولات باغی فعالیت دارند و
            موفق نیز هستند. طبق بررسی های انجام شده سردخانه ای برای نگهداری
            محصولات باغی در تکاب وجود ندارد و می توان در این حوزه کار کرد؛ البته
            باید توجه داشت که احداث این واحدها به سرمایه اولیه زیادی نیاز داشته
            و با ایجاد چند واحد محدود به حالت اشباع می رسند؛ در ضمن اگر واحدهای
            فرآوری میوه جات ایجاد شوند، به نظر می رسد دیگر نیاز زیادی به سردخانه
            نخواهد بود.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            سیب تکاب یکی از باکیفیت‌ترین سیب های تولیدی در سطح کشور است؛ اما به
            دلیل معرفی نشدن و تبلیغات ضعیف به خوبی شناخته نشده و به دلیل نبود
            صنایع بسته‌بندی و تبدیلی، بهره‌وری اقتصادی مناسبی برای شهرستان
            ندارد. کیفیت و مرغوبیت سیب تکاب باید به نحو مطلوبی در سطح کشور معرفی
            شود؛ در این صورت تولید فرآورده های آن مانند تولید آبمیوه، میوه خشک،
            چیپس میوه و سایر محصولات مانند لواشک، کمپوت و کنسانتره پیشنهاد می
            شود. در ضمن می توان در زمینه سایر میوه جات مانند آلبالو، زردآلو
            و.... نیز این کسب و کارها را ایجاد کرد و سود خوبی به دست آورد.{" "}
          </p>
          <p>
            دامداری یکی از اصلی ترین مشاغل درسطح شهرستان تکاب است که مردم بومی
            مهارت خوبی در آن دارند. تولید لبنیات و فرآوری شیر دام ها مانند تولید
            کشک، کره، ماست و... می تواند سود این دامداران را چندین برابر کرده و
            در عین حال نیاز شهرستان به این موارد را نیز برطرف نماید.{" "}
          </p>
          <p>
            گندم اصلی ترین محصول زراعی تکاب است. هرچند که فرآوری آن به میزانی که
            نیاز شهرستان به محصولات مهم تامین شود، درحال انجام است؛ ولی با توجه
            به اینکه بازار فروش بیشتر محصولات به دست آمده از گندم در اکثر مواقع
            و مناطق وجود دارد، ایجاد و توسعه آنها پیشنهاد داده می شود؛ بنابراین
            تولید محصولاتی مانند آرد، نان، شیرینی، رشته آشی و پلویی و سایر
            محصولات مانند پفک گندمی، نشاسته گندم، نان بستنی و آرد سوخاری در
            شهرستان دارای مزیت می باشد.
          </p>
          <p>
            در لیست مزیت سنجی، به علت وجود گیاهان با خواص دارویی و درمانی در
            مراتع این شهرستان، تولید عرقیات و گلاب پیشنهاد داده شده است.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تخت سلیمان، کوه بلقیس، آبگرم احمدآباد، چمن متحرک چملی و... از آثار
            باستانی و جاذبه های طبیعی شهرستان تکاب هستند که بعضا به ثبت یونسکو
            نیز رسیده اند.
          </p>
          <p>
            چمن متحرک چملی گولی در روستای ویر در فاصله حدود 20 کیلومتری شرق شهر
            تکاب واقع شده است. چملی گولی در زبان محلی این منطقه یعنی جزیره ای از
            چمن که بر روی برکه است. چمن متحرک چملی، قطعه بزرگی از نی‌هایی است که
            از به هم چسبیدن ریشه آن‌ها بدون ارتباط با زمین بر روی آب شناور
            مانده، تشکیل شده است. این جزیره متحرک با مساحت بیش از 100 مترمربع بر
            روی برکه‌ای کوچک قرار دارد که با وزش باد و جریان هوا و یا تکان خاصی
            به جهات مختلف تغییر مسیر داده و حرکت می‌کند. این جاذبه در میان
            دره‌ای عمیق قرار گرفته که نیزارها، چمن سرسبز درختان بلند و گل‌های
            زیبا اطراف آن جلوه‌ای خاص، طبیعی و زیبا به آن بخشیده و همین امر موجب
            منحصر به فرد شدن این جاذبه طبیعی شده است. نبود جاده جهت دسترسی
            مناسب، امکانات رفاهی و بهداشتی متناسب با حضور گردشگران خارجی و عدم
            تبلیغات و معرفی این اثر از دلایل ناشناخته ماندن چمن متحرک تکاب و
            شاید اصلی ترین دلیل بکر ماندن آن است.
          </p>
          <p>
            این مورد تنها جاذبه ناشناخته آذربایجان‌غربی نیست و موارد دیگری هم
            وجود دارد که با استفاده از پتانسیل آنها می توان اقتصاد فعالی به راه
            انداخت و گردشگران خارجی را برای سفر به ایران و از همه مهم‌تر
            آذربایجان‌غربی ترغیب کرد.{" "}
          </p>
          <p>
            بازدید گردشگران و توریست های داخلی و خارجی از این جاذبه های طبیعی و
            باستانی در فصول مختلف سال، افزایش تبلیغ در مورد آنها و توسعه امکانات
            رفاهی و اقامتی و خدمات گردشگری در این موارد و اطراف آنها مانند
            رستوران های بومی، اقامتگاه های بومگردی و... دارای مزیت بسیار خوبی
            خواهند بود و ایجاد آنها در شهرستان تکاب پیشنهاد می شود. نزدیکی استان
            به کشورهایی مانند عراق و ترکیه که دارای روابط نسبتاً خوب با ایران
            هستند، بر اهمیت و مزیت مشاغل این چنینی می افزاید. در ضمن در حال حاضر
            بازدید از جاذبه های تکاب انجام شده و به میزان محدودی نیز امکانات
            رفاهی وجود دارد؛ ولی می تواند بسیار گسترده تر دنبال شود و درآمد خوبی
            را به همراه داشته باشد.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            شهرستان تکاب با دارا بودن طبیعت زیبا و ییلاقات خوش آب و هوا، شرایط
            مساعدی برای پرورش انواع دام خصوصا دام سبک دارد. تكاب در منطقه اي
            كوهستاني و سردسير در جنوب آذربايجان غربي واقع شده است و از نظر اقلیم
            آب و هوایی، دارای شرایط مطلوبی برای دامداری است. طبق تحقیقات انجام
            شده، با وجود جمعيت دامي مناسب و با كيفيت و مراتع غني و مرغوب
            شهرستان، رونق مطلوبی در این زمینه حاصل نشده است.{" "}
          </p>
          <p>
            عسل این منطقه یکی از محصولات مرغوب و مشتری پسند آذربایجان می باشد.
            پرورش زنبور عسل به دلیل اقلیم مساعد و پوشش گیاهی مناسب، از جمله اصلی
            ترین محورهای دامداری در سطح شهرستان تکاب به حساب می آید. در حال حاضر
            صادرات این محصول سودده و با ارزش غذایی و دارویی بالا بدون برند و
            بدون بسته بندی خاص انجام می شود؛ ولی وجود بازار فروش و مزیت کار در
            زمینه صنایع تبدیلی و بسته بندی عسل، باعث می شود تا بتوان توسعه در
            این زمینه و افزایش تولید را سودده دانست.
          </p>
          <p>
            پرورش دو نوع دام سبک و سنگین در سطح شهرستان انجام می شود. طبيعت بكر
            و آب و هواي كوهستاني نیز بستر خوبی برای این فعالیت ها ایجاد کرده
            است. در رابطه با نژادهای مختلف دامی در سطح شهرستان نیز باید گفت که
            یکی از مهمترین آنها نژاد قوچ قزل و افشاری است. در ضمن در این منطقه
            اولویت بالاتری به پرورش دام سبک مانند گوسفند و بز داده می شود.{" "}
          </p>
          <p>
            با توجه به زودبازده بودن دامداری و سود آن و همچنین بازار فروش
            محصولات دامی، کار بیشتر در این حوزه و ایجاد توسعه در آن پیشنهاد می
            شود. در پایان باید اشاره کرد در لیست مزیت سنجی به بز سانن و مزیت
            پرورش آن نیز در منطقه اشاره شده است.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            به عقیده کارشناسان بخش کشاورزی، سیب تکاب به علت کوهستانی بودن و
            شرایط آب و هوایی خوب و طبیعت بکر منطقه، از کیفیت و مرغوبیت بسیار
            بالایی برخوردار است و مدت زمان ماندگاری زیادی دارد . در حال حاضر
            میزان قابل ملاحظه ای از این محصول، به صورت خام، به سراسر کشور صادر
            می شود. وجود بازار فروش و مهارت کشاورزی در این زمینه از جمله دلایلی
            است که باعث وجود مزیت برای کار بیشتر و توسعه در این زمینه عنوان می
            شود.{" "}
          </p>
          <p>
            سایر محصولات باغی عمده تولیدی در سطح شهرستان شامل زردآلو، آلبالو و
            گیلاس هستند. اگر میزان تولید این محصولات افزایش یابد، علاوه بر
            افزایش صرفه اقتصادی برای صنایع غذایی و تبدیلی، باعث افزایش انگیزه
            کشاورزان و باغداران برای کار در این زمینه خواهد شد؛ ازاین رو احداث
            باغات این محصولات دارای مزیت بوده و پیشنهاد می شود. در ضمن بیشتر این
            میوه های هسته دار در بخش های احمدآباد، افشار و چمن تولید می شوند.{" "}
          </p>
          <p>
            گلخانه‌ها گیاهان را از سرمای زمستان و گرمای تابستان حفظ می کند و
            شرایطی را برای کشت محصول بیشتر فراهم می کند؛ زیرا که می توان در تمام
            فصول در آن به تولید و کشت پرداخت. گلخانه ها برای صرفه جویی در مصرف
            آب حائز اهمیت هستند و مزیت کار کشاورزی را افزایش می دهند. در سالهای
            اخیر، به دلیل این ویژگی ها و چندین مورد دیگر، توجه ویژه ای به گلخانه
            ها و ایجاد آنها در سطح کشور شده است. گلخانه هایی در سطح شهرستان تماب
            نیز در حال فعالیت هستند که به پرورش توت فرنگی و صیفی جاتی مانند خیار
            و گوجه مشغول می باشند. با توجه به بازار مصرف صیفی جات، توسعه و ایجاد
            چنین واحدهایی در شهرستان دارای مزیت خواهد بود؛ ولی در عین حال قبل از
            هر اقدامی در این زمینه، باید شرایط آب و هوایی و اقلیمی مناطق مختلف
            تکاب را در نظر گرفت و به طور دقیق مورد بررسی قرار داد.{" "}
          </p>
          <p>
            گردو درختی است که در شرایط آب و هوایی معتدل مدیترانه‌ای به‌خوبی رشد
            می‌کند و پس از رشد کامل تا 18 کیلوگرم تولید محصول خواهد داشت. از
            مهمترین خواص مغز گردو باید به ضدسرطان بودن، تنظیم سوخت و ساز بدن،
            تنظیم قند خون و... اشاره کرد. گردو محصولی است با ارزش افزوده بالا که
            در شهرستان تکاب به صورت محدود کشت می شود. در صورت ایجاد توسعه در این
            زمینه، صرفه اقتصادی ایجاد کسب و کارهای مرتبط مانند روغن گیری از گردو
            افزایش خواهد یافت و می تواند ایجاد اشتغال خوبی برای منطقه داشته
            باشد.{" "}
          </p>
          <p>
            در لیست مزیت سنجی، به علت افزایش قیمت گوشت و رواج یافتن تمایل به
            مصرف، تولید قارچ دکمه ای و صدفی دارای مزیت شمرده شده است؛ بنابراین
            راه اندازی چنین کسب و کاری، در عین اینکه سود خوب و قابل ملاحظه ای
            خواهد داشت، به سرمایه فیزیکی و مالی کمی احتیاج دارد.
          </p>
          <p>
            طبق بررسی های انجام شده و لیست مزیت سنجی، پرورش گل محمدی، به علت
            سازگاری با شرایط آب و هوایی منطقه دارای مزیت خواهد بود.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            نخود، عدس و لوبیا از جمله حبوباتی هستند که در حال حاضر به میزان قابل
            توجهی در سطح شهرستان، در حال کشت و تولید هستند. سازگاری این محصولات
            با اقلیم منطقه و قیمت مناسب تر آنها نسبت به دیگر حبوبات، از دلایلی
            است که می توان برای پیشنهاد توسعه کشت آنها عنوان کرد.{" "}
          </p>
          <p>
            شرایط اقلیمی و حاصلخیزی خاک شهرستان تکاب باعث شده است تا زراعت از
            رونق خوبی برخوردار باشد. گندم و جو، محصولاتی هستند که در شهرستان
            تکاب تولید می شود. با توجه به اینکه این محصولات، محصولات استراتژیکی
            هستند و بازار مصرف بزرگی دارند افزایش تولیدشان پیشنهاد می شود.{" "}
          </p>
          <p>
            سیب زمینی بعـد از گنـدم، برنـج و ذرت، بیشتریـن سـهم را در میـزان
            تولید محصولات غذایـي داراسـت و نقـش مهمـي در تغذیه و سـبد غذایي
            جمعیـت جهان دارد. در کشـورهاي در حال توسـعه، اهمیـت غذایـي سـیب
            زمیني به مراتـب بیشتـر اسـت و در ایـران نیـز بعـد از گنـدم، رتبـه
            دوم را بـه خـود اختصاص داده اسـت. سیب زمینی از محصولاتی است که کشت
            بسیار خوبی در سطح استان آذربایجان غربی دارد و تولید آن در شهرستان
            تکاب نیز انجام می شود. ارزش غذایی فوق العاده بالا، قیمت مناسب و
            اینکه مواد مغذی مورد نیاز انسان را در زمان كمتر و با زمین كمتر به
            خوبی فراهم می کند، اهمیت توسعه تولید سیب زمینی را چندین برابر می
            کند. درضمن پیاز نیز ازجمله محصولاتی که با توسعه کشت می تواند سود
            خوبی داشته باشد؛ زبرا همیشه برای آن بازار فروش و تقاضا وجود دارد.
            کشت یونجه و ذرت علوفه ای نیز می تواند سود آور باشد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            قالیبافی یکی از اصلی ترین مشاغل مردم در سطح شهرستان تکاب، عنوان می
            شود. آذربایجان‌غربی یکی از قطب‌های مهم تولید فرش دستباف در کشور است
            که شهرهای ارومیه، خوی، بوکان، تکاب و مهاباد دارای بیشترین بافنده فرش
            در استان هستند .{" "}
          </p>
          <p>
            قالی و قالیچه‌های نفیس و گرانبهای شهرستان تکاب، به این علت که در
            منطقه افشار بافته می شود، به فرش افشار معروف شده و محبوبیت خاصی در
            بازارهای فرش دنیا دارد. احیای بازار این فرش و افزایش صادرات، علاوه
            بر ایجاد انگیزه برای بافندگان، باعث ورود گروه تازه ای از افراد به
            این حوزه خواهد شد. همچنین در مشاغل مرتبط با تولید آن مانند رنگرزی و
            تولید نخ هم رونق قابل ملاحظه ای ایجاد خواهد شد. در ضمن با تبلیغ و
            معرفی بیشتر، موانع صادرات نیز تا حدی برداشته خواهد شد و فرآیند آن را
            آسانتر خواهد کرد.{" "}
          </p>
          <p>
            در لیست مزیت سنجی به گلیم بافی، نمدبافی، گبه بافی و دوزندگی لباس های
            محلی نیز اشاره شده و دارای مزیت شمرده شده اند؛ زیرا اکثر زنان و
            افراد شهرستان در این زمینه دارای مهارت و تجربه هستند و در حال حاضر
            نیز تولید آنها در مناطقی از شهرستان درحال انجام است.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            بر اساس طرح های مطالعاتی انجام شده در سطح استان، هفت شهرستان
            آذربايجان غربي شامل چايپاره، پلدشت، سردشت، سلماس، تكاب، اروميه و
            شاهين دژ از مناطق مستعد جهت آبزي پروري هستند.{" "}
          </p>
          <p>
            در حال حاضر در شهرستان تکاب، پرورش ماهی سردآبی خصوصا قزل آلا انجام
            می شود. پرورش این ماهی با شرایط اقلیمی شهرستان همخوانی دارد و ظاهرا
            دارای بازار فروش و سود خوبی نیز می باشد. توسعه در این بخش می تواند
            دارای مزیت باشد و تعداد قابل ملاحظه ای شغل پایدار ایجاد کند.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            شهرستان تکاب، ظرفیت و پتانسیل خوبی برای کار در زمینه پرورش طیور دارد
            که می توان با برنامه ریزی و بررسی و تامین دقیق بازار فروش، از آن به
            بهترین نحو استفاده کرد. مرغ، تنها پرنده ای است که به میزان انبوه و
            بعضا نیمه صنعتی در شهرستان تکاب، پرورش می یابد. طبق بررسی های انجام
            شده، بیشتر این مرغ ها گوشتی هستند. طبق لیست مزیت سنجی، در منازل نیز
            مرغ های تخم گذار بومی پرورش می یابند و با توجه به بازار مصرف، کار
            بیشتر در این زمینه دارای مزیت است.{" "}
          </p>
          <p>
            شترمرغ حیوانی بسیار مقاوم و با قابلیت سازگاری بالا با شرایط محیطی
            جدید است و علی رغم اینکه زیستگاه آن مناطق گرم و حاره ای و استپی
            آفریقاست اما حتی در برخی نواحی سردسیر نیز رشد و عملکرد مناسبی از خود
            نشان می دهد. بر اساس گزارشات مختلف، شترمرغ در دمای 15- تا 50+ درجه
            سانتی گراد به راحتی زندگی کرده و نسبت به کم آبی و خشکی هوا مقاوم می
            باشد. این پرنده با آب و هوای تکاب سازگاری خوبی دارد؛ ولی یک واحد
            پرورش آن در شهرستان به دلیل مشکلاتی تعطیل شده است. بنا به موارد ذکر
            شده کار در زمینه پرورش شترمرغ و همزمان ایجاد واحدهای تبدیلی آن در
            شهرستان، سود سرشاری را برای سرمایه گذار به همراه خواهد داشت.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            به صورت کلی کمبود زیرساخت، اصلی ترین عاملی است که باعث می شود صنعت
            مزیت پایینی در بین رسته ها در تکاب داشته باشد و علاقه مردم به این
            دست از کارها را نیز کاهش داده است. طبق بررسی های انجام شده ریسک
            پذیری مردم در این شهرستان درحد قابل قبولی است؛ ولی عدم فعالیت و
            ارتقاء زیرساخت ها، باعث کاهش میل مردم به کار در زمینه های صنعتی شده
            است.{" "}
          </p>
          <p>
            در شهرستان تکاب یک شهرک صنعتی وجود دارد که اکثریت قریب به اتفاق
            واحدهای آن تعطیل بوده و رونق خاصی ندارد. با این حال چند واحد صنعتی
            مانند تولید کارتون، تولید دستمال کاغذی و کارخانه ها و معادن طلا به
            علت تجربه، مدیریت صحیح و سرمایه درگردش موفق هستند و بیشتر کارگران
            آنها نیز بومی خود شهرستان می باشند.{" "}
          </p>
          <p>
            تکاب دارای دو معدن بزرگ طلا در مناطق آق‌دره و زرشوران است و با داشتن
            بیش از 100 تن ذخیره طلا در کوه‌های خود، یکی از قطب‌های تولید طلا در
            کشور به شمار می‌رود؛ معدن طلای زرشوران بزرگترین معدن طلای خاورمیانه
            است. در حال حاضر (سال 1398) چهار واحد تولید و استحصال طلا در کنار
            این معادن فعالیت می‌کند. حدود سی سال از آغاز اکتشافات طلا در معدن
            زره‌شوران تکاب می گذرد و اکنون ثابت شده که در این معدن در حدود ۱۱۰
            تن طلا وجود دارد. علی رغم تلاش های انجام شده، هیچ منفعت خاص و درخوری
            از این معادن به مردم شهرستان نمی رسد.{" "}
          </p>
          <p>
            با توجه به بررسی های انجام شده،، همچنان قابلیت برای ایجاد واحدهای
            فرآوری طلاهای استخراج شده از معادن و کار بر روی آنها وجود دارد؛ اما
            مساله ای که وجود دارد این است که باید توسعه آموزش‌های فنی در زمینه
            جواهرسازی، با نگاه دقیق به بازار کار و رونق اقتصادی با تکیه بر
            ظرفیت‌های بزرگ این معادن انجام گیرد؛ زیرا نیاز ایجاد آنها در شهرستان
            احساس می شود و علاوه بر آن در صورت صادرات به سراسر کشور، سود بسیار
            خوبی به همراه خواهد داشت. در ادامه باید به معادن سنگ نیز اشاره کرد
            که محصولات استخراج شده از آنها نیز برای فرآوری قابلیت دارند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
