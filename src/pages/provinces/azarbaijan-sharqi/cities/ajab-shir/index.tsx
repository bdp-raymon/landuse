import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-01"].cities["IR-0112"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        livestock: "دامداری",
        agriculture: "زراعت",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
        fisheries: "شیلات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان عجب شير یکي از شهرستان هاي استان آذربایجان شرقی با وسعتي
            معادل 44/738 کیلومترمربع از شمال به شهرستانهای اسكو و آذرشهر، از شرق
            به شهرستان مراغه، از غرب به درياچه اروميه و از جنوب به شهرستان بناب
            محدود است. شکل زیر موقعیت شهرستان عجب شیر را نشان می‌دهد. اين
            شهرستان در بخش غربي استان آذربایجان شرقی واقع شده است كه از نظر
            مساحت 62/1 درصد از مساحت استان را داراست و از اين بابت رتبه بيستم را
            به خود اختصاص داده است. فاصله اين شهرستان از مركز استان برابر 98
            کیلومتر است. اين شهرستان بر اساس آخرين تقسيمات كشوري داراي 2 شهر، 2
            بخش (مركزي و قلعه چای) و 4 دهستان و 48 آبادي است. مرکز شهرستان، شهر
            عجب شیر است که جزء شهرهای زیر 50 هزار نفر بوده و نقش شهر محلی را در
            محدوده شهرستان ایفا می نماید. نقش غالب اقتصادی شهر، بازرگانی است.بر
            اساس نتايج سرشماري عمومي نفوس و مسكن سال 1395، جمعیت این شهرستان
            70852 نفر بوده است که 36546 نفر آنها در نقاط روستایی ساکن هستند.اين
            شهرستان در منطقه كوهستاني واقع شده و داراي تابستان‌هاي معتدل و
            زمستان‌هاي سرد و برفی مي‌باشد. ارتفاع اين شهرستان از سطح آزاد دريا
            147.8 متر بوده و داراي زمين‌هاي حاصلخيز و پرمحصول و مستعد كشاورزي
            مي‌باشد و قسمتي از اراضي در نواحي درياچه اروميه در منطقه شوره‌زار و
            پست واقع شده است.شهرستان عجب شیر به دلیل سابقه تاریخی و ویژگی طبیعی
            و همچنین وجود دو منطقه نمونه گردشگری قلعه چای و رحمانلو، دارای جاذبه
            های گردشگری مناسبی است ولی به دلیل نبود زیرساختهای مناسب گردشگری از
            قبیل شبکه های ارتباطی مناسب، خدمات رفاهی، مراکز حمایتی گردشگری و...
            تنها به عنوان یک منطقه گردشگری مطرح شده و از قابلیت های آن در
            درآمدزایی، اشتغال و توسعه فعالیت های اقتصادی و اجتماعی استفاده
            مناسبی صورت نگرفته است.{" "}
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
            مي‌شود. در ادامه تحليل شهرستان عجب‌شیر ارائه‌شده‌است.
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
            شهرستان عجب شیر در حوزه باغداری، تولید قابل توجهی دارد. توسعه
            باغداری برای این شهرستان مزیت بالایی دارد.خصوصا که ظرفیت برای کاشت
            محصولات سوداوری مانند گردو، بادام، پسته و....وجود دارد.
          </p>
          <p>
            عمده محصولات باغی این شهرستان، انگور،گردو و بادام است که افزایش کاشت
            آن ها مزیت بالایی دارد. گردو از محصولاتی است که تمام اجزای آن قابل
            استفاده است. برای مثال از مغز گردو، پوست سبز گردو، برگ و چوب درخت
            گردو استفاده های مفیدی صورت می گیرد و طبیعتا احداث باغ گردو در مکان
            هایی که ظرفیت لازم وجود دارد انتخاب بسیار خوب و به صرفه ای است.
            بادام نیز از محصولاتی است که همانند گردو استفاده های زیادی (مانند
            استفاده از مغز و روغن آن)دارد. همچنین افزایش کاشت انگور این شهرستان
            نیز با توجه به اینکه برای تولید کشمش مناسب است صرفه اقتصادی بسیار
            خوبی دارد.
          </p>
          <p>
            سیب نیز از محصولات باغی شهرستان است که مقدار تولید نسبتا خوبی دارد و
            گسترش تولید آن نیز از مزیت بالایی برخوردار است. لازم به ذکر است در
            شهرستان عجب شیر تولید کمپوت صورت می گیرد و بخشی از سیب مورد استفاده
            از مراغه وارد می شود و با تولید بیشتر سیب این نیاز شهرستان رفع می
            شود.
          </p>
          <p>
            محصولات باغی دیگر مانند گیلاس، آلبالو، سیب، زردآلو و آلوچه نیز به
            میزان نسبتا خوبی کاشته می شوند و امکان افزایش کاشت آن ها وجود دارد.
            همچنین با توجه به وجود کارخانه آبمیوه‌ی نوش ایران در این
            شهرستان،تولید کنندگان این محصولات با مشکل بازار فروش مواجه نخواهند
            شد.
          </p>
          <p>
            {" "}
            گوجه فرنگی در شهرستان عجب شیر مقدار تولید خوبی دارد و با وجود
            کارخانه تولید رب و ظرفیتی که برای کاشت این محصول در شهرستان وجود
            دارد، تولید مقدار بیشتری از آن مزیت دارد. همچنین برای صیفی جاتی
            مانند گوجه همواره بازار فروش در بین مردم وجود دارد. البته خیار،
            بادمجان، کدو(آجیلی)، توت فرنگی، خربزه و هندوانه نیز از صیفی جات
            دیگری هستندکه در سطح خوبی کاشته می شوند و می توان برای گسترش تولید
            آن ها اقدام کرد.خربزه و هندوانه از گذشته مورد توجه بوده و خربزه
            قبادلو که متعلق به شهرستان عجب شیر است نیز معروف است. البته کاشت توت
            فرنگی نسبت به سایر صیفی جات در چند سال اخیر کمتر مورد توجه قرار
            گرفته و به نظر می رسد ظرفیت برای کاشت این محصول نسبت به صیفی جات
            دیگر کمتر است؛ اما به هرحال می توان مقدار بیشتری از آن را تولید کرد.{" "}
          </p>
          <p>
            لازم به ذکر است که گوجه و خیار علاوه بر کاشت در فضای آزاد، در گلخانه
            نیز کاشته می شوند. تعداد گلخانه های مربوط به تولید این صیفی جات در
            شهرستان زیاد است. شرایط مناسب و ظرفیت برای احداث گلخانه های بیشتر در
            شهرستان عجب شیر وجود دارد و به عنوان یکی از مزیت های شغلی حوزه
            باغداری پیشنهاد می گردد. به تازگی یک یا دو واحد گلخانه ای به کاشت گل
            رز روی آورده اند. گل رز نیز بازار فروش خوبی پیدا کرده وبرای تولید
            مربا به تبریز فرستاده می شود. سرمایه گذاری در زمینه تولید گل رز
            سوددهی خوبی خواهد داشت. به صورت کلی احداث گلخانه در شهرستان عجب شیر
            اشتغالزایی خوبی داشته است. البته در خصوص تولید گل رز باید بازار فروش
            ان را نیز در نظر گرفت. برای مثال بازار فروش برای گل و گیاه در ایام
            عید گسترده تر است.
          </p>
          <p>
            پرورش قارچ نیز به صورت کارگاهی در حال انجام است و افزایش این واحد ها
            یک مزیت برای شهرستان محسوب می شود.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            آب و هوای مناسب منطقه و وجود شرایط لازم برای دامداری، باعث شده که
            دامداری از کسب و کارهای پرطرفدار و با مزیتی بالا برای سرمایه گذاری
            باشد.در این حوزه پرورش دام سنگین(گاو) و دام سبک(گوسفند) به میزان
            خوبی انجام می شود و ظرفیت خوب و مشابهی برای گسترش پرورش در هردو
            زمینه وجود دارد. البته در حال حاضر میزان پرورش دام سبک در شهرستان
            بیشتر است ولی این موضوع نشان دهنده این نیست که پرورش آن مزیت بیشتری
            دارد. در بین دام های سبک بزگوشتی نیز وجود دارد ولی تعداد آن زیاد
            نیست و مزیت پرورش آن در اولویت های بعدی قرار می گیرد. در مجموع بسته
            به منطقه های مختلف در شهرستان، قابلیت پرورش هر نوع دام(سنگین یا سبک)
            وجود دارد، مثلا در منطقه ی کوهستانی پرورش گوسفند و در منطقه ای که
            کشت جو انجام می گیرد گاو پرورش می یابد. در رابطه با دام های اصلاح
            نژادی نیز لازم به ذکر است که نژادهای هلشتاین وسمینتال در بین دام های
            سنگین و نژاد رومانف و افشاری در بین دام های سبک وجود دارد و پرورش
            این نژاد ها در شهرستان جواب داده است و قابلیت گسترش در زمینه پرورش
            این نوع دام ها وجود دارد اما در اولویت پایین تری نسبت به دام های
            بومی قرار می گیرند. در مقایسه دو نژاد رومانف و افشاری لازم است این
            نکته گفته شود که گوسفند رومانف قابلیت پرورش در مراتع را ندارد و باید
            صنعتی پرورش داده شود ولی گوسفند افشاری این گونه نیست و علاوه بر
            داشتن گوشت و پشم عالی، پرورش آن نیز بسیار راحت است و نه ما از سال می
            توان آن را در مراتع پرورش داد. در این شهرستان هم به پرواربندی برای
            تولید گوشت و هم به پرورش دام داشتی برای تولید شیر اهمیت داده شده
            است.
          </p>
          <p>
            زنبورداری شاخه دیگری از دامداری است که در سطحی عالی انجام می شود و
            سرمایه زیادی نیز برای راه اندازی این حرفه نیاز نیست و درآمد بسیار
            خوبی هم دارد. اما بهتر است که مردم شهرستان با اصول مدرن در رابطه با
            زنبورداری برای افزایش بهره وری آشنا شوند. به هرحال گسترش انجام این
            فعالیت مزیت دارد و با پرورش دام سنگین و سبک اولویت یکسانی دارد.
          </p>
          <p>
            در روستاهای شهرستان عجب شیر تاحدودی به پرورش اسب نیز توجه شده است.
            گسترش واحدهای پرورش اسب با توجه به قیمت بالای این دام صرفه اقتصادی
            خوبی دارد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            زراعت در شهرستان عجب شیر به میزان خوبی انجام می شود و گسترش کشت
            محصولات زراعی از مزیت های این منطقه شمرده می شود. عمده محصولات زراعی
            شهرستان سیب زمینی و پیاز هستند که از نیاز های اساسی مردم محسوب می
            شوند و در تمام فصول بازار فروش دارند. کشت دو محصول گفته شده ارزش
            افزوده بسیار خوبی را برای کشاورزان ایجاد می کند و این موضوع باعث شده
            که اکثر مردم شهرستان، کشت این محصولات را به سایر محصولات زراعی ترجیح
            دهند. علی رغم اینکه در چند سال اخیر به دلیل مشکلات کم آبی رخ داده،
            جهاد کشاورزی هرساله از کشت پیاز ممانعت می کند ولی به دلیل ارزش
            افزوده بالایی که کشت این محصول دارد، مردم باز هم پیاز می کارند. درست
            است که کشت پیاز در این شهرستان مزیت بالایی دارد ولی به دلیل اینکه
            ممکن است کم آبی مشکل ساز شود، بهتر است در کشت آن زیاده روی نشود.{" "}
          </p>
          <p>
            سیر نیز از محصولاتی است که به تازگی(دو یا سه سال) کشت می شود و کشت
            آن به خوبی با شرایط شهرستان سازگاری دارد و افزایش تولید آن به دلیل
            سازگار بودن این محصول با اقلیم شهرستان و مصرف آب کمتر، پیشنهاد می
            شود. گندم و جو هم از محصولاتی هستند که سطح کشت زیادی دارند،خصوصا که
            اخیرا کشت آن ها به دلیل کم آبی به عنوان کشت جایگزین مورد تاکید است.{" "}
          </p>
          <p>
            گیاهان دارویی به صورت خودرو در کوه ها وجود دارند و تا اندازه ای هم
            کشت می شوند. بعضی از انواع این گیاهان عبارتند از کاکوتی،نعناع،بیدمشک
            و... . به هرحال توسعه کشت گیاهان دارویی باتوجه به بازار فروشی که
            امروزه پیدا کرده است صرفه اقتصادی خوبی دارد و برای شهرستان عجب شیر
            مزیت محسوب می شود.{" "}
          </p>
          <p>
            در شهرستان عجب شیر به کشت حبوبات نیز توجه شده است. در بین حبوبات،
            نخود از سطح کشت نسبتا وسیعی برخوردار است و حتی به خارج از شهرستان
            نیز ارسال می گردد. این محصول در اکثر نقاط به صورت دیم کشت می شود.
            انواع نخود تولید شده شامل نخود مناسب برای تولید نخودچی، لپه و نخود
            آبگوشتی است. البته نخود مناسب برای تولید نخودچی میزان بیشتری دارد.
            نخود مناسب برای تولید لپه به نخود کفتری معروف است. افزایش کشت نخود
            به عنوان محصولی که به آب زیادی نیاز ندارد و فروش آن سود خوبی را نصیب
            کشاورز می کند توصیه می شود. حبوبات دیگر مانند عدس و لوبیا نیز کشت می
            شوند اما مقدار کمتری نسبت به نخود دارند و افازیش تولید آن ها در
            اولولیت های بعدی قرار می گیرد.{" "}
          </p>
          <p>
            کشت زعفران به تازگی در شهرستان انجام شده است و زعفران کاران از کشت
            این محصول، راضی و درحال توسعه آن هستند. زعفران گران ترین محصول
            کشاورزی جهان و مهم ترین محصول صادراتی کشاورزی ایران است. به غیر از
            مصرف زیاد داخلی، همه ساله مقدار قابل توجّهی ارز با صادرات زعفران
            وارد کشور می شود. با توجه به این که درشهرستان عجب شیر نیز،کشت زعفران
            جواب می دهد گسترش کشت آن برای کسب سود بیشتر،مزیت دارد.{" "}
          </p>
          <p>
            دانه های روغنی مانند کلزا، کنجد، آفتابگردان و سیاه دانه در شهرستان
            عجب شیر کشت می شوند واز آن جایی که فروش دانه های روغنی سود بسیار
            خوبی دارد و ظرفیت کشت آن ها نیز در شهرستان وجود دارد،گسترش کشت این
            محصولات پیشنهاد می شود.
          </p>
          <p>
            یونجه و شبدر نیز از گیاهان بومی منطقه هستند و در بعضی از مناطق
            شهرستان خصوصا مناطقی که دامداری در آن انجام می شود کشت می شوند. با
            وجود این حجم از دامداری انجام شده در شهرستان و بازار فروشی که برای
            این محصولات وجود دارد افزایش کشت آن ها برای شهرستان مزیت دارد و
            پیشنهاد می شود.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            صنعت غذا دارای ویژگی‌های مهمی است و در درجه اول باید به تامین امنیت
            غذایی کشور خودمان اشاره کرد که از اهمیت بالایی برخوردار است. در
            درجه‌ دوم کشورهای اطراف هستند که در زمینه تولید محصولات غذایی، ضعیف
            بوده و ما می‌توانیم با تقویت سیستم‌های تولید، نیازهای کشورهای اطراف
            را تامین کنیم. در درجه‌ سوم مساله ظرفیت‌های خاص کشورمان و همچنین،
            موضوع مواد اولیه ارگانیک و طبیعی است. ما محصولات و مواد اولیه‌ خاص و
            کمیابی در کشورمان داریم که معمولا در کشورهای توسعه‌یافته نیز کمتر
            یافت می‌شود. رویکرد مصرف جهانی نیز به سمت مصرف محصولات تغییر ژنتیک
            نیافته است؛ این موضوع نیز فرصتی برای صنعت غذایی کشور است و بنابراین،
            صنعت غذا می‌تواند یکی از تکیه‌گاه‌های توسعه‌ کشور باشد. این مطلب به
            خوبی نشان دهنده اهمیت توسعه صنایع غذایی در کشور است. شهرستان عجب شیر
            با داشتن ظرفیت های بسیار خوب، نیز می تواند در قسمتی از این فرآیند
            توسعه سهیم باشد. بعضی از این ظرفیت ها در حوزه کشاورزی به چشم می
            خورد. برای مثال سیب زمینی از محصولات اصلی شهرستان است که تولید بسیار
            زیادی دارد و مقدار تولید آن برای تولید چیپس سیب زمینی و خلال سیب
            زمینی به صورت کارخانه ای کفایت می کند. این تولیدات، از خوراکی های
            پرطرفدار در بین مردم هستند. همچنین درحال حاضر در بازار ایران، چیپس
            کالایی رقابتی است و شرکت هاي تولید کننده سعی دارند با ارائه اشکال و
            طعم هاي جدید در بسته بندي هاي متنوع و تبلیغات فراوان، سهم بیشتري از
            بازار را به خود اختصاص دهند. لازم به ذکر است در حال حاضر کارخانه در
            خصوص تولید چیپس سیب زمینی وجود ندارد.
          </p>
          <p>
            گردو و بادام نیز از محصولاتی هستند که میزان تولید زیادی دارند و
            تولید فرآورده های حاصل از آن ها مانند روغن گردو و بادام از مشاغل
            پیشنهادی در این حوزه است. ایران وضعیت بسیار خوبی در زمینه صادارت
            گردو دارد، اما خام فروشی این محصول باعث شده، آن طور که باید و شاید
            به پتانسیل این محصول توجه نشود. در حال حاضر قیمت ۳۰ میلی گرم روغن
            گردو، ۵۰ هزار تومان است و ۴ کیلو گرم گردوی معمولی، نزدیک به ۲ لیتر
            روغن می دهد. بنابراین با تولید این محصول سود بسیاربالایی عاید تولید
            کننده خواهد شد. روغن بادام نیز همچون روغن گردو قیمت بالایی دارد و
            تولید بیشتر آن، از میزان واردات در این زمینه کم می کند. با توجه به
            ظرفیتی که در شهرستان عجب شیر برای تولید روغن بادام وجود دارد، احداث
            واحدهای تولید آن لازم است و صرفه اقتصادی بسیار خوبی را نیز به همراه
            دارد.{" "}
          </p>
          <p>
            از انگور کاشته شده در شهرستان می توان برای تولید کشمش، شیره انگور،
            سرکه انگور و روغن هسته انگور استفاده کرد. تولید زیاد انگور این امکان
            را به وجود آورده است که بتوان واحدی در این خصوص احداث کرد. در حال
            حاضر تولید محصولاتی مانند کشمش، شیره انگور و سرکه انگور به صورت سنتی
            وجود دارد. استفاده از اکثر فرآورده های نام برده شده در بین مردم
            ایران رایج است. البته این محصولات میزان تولید خوبی نیز در کشور
            دارند. اما میزان تولید روغن هسته انگور در کشور ما،قابل توجه نیست و
            لازم است توجه بیشتری به توسعه این نوع صنعت غذایی شود. خواص و مزیت
            هایی که این روغن دارد از علل اصلی سرمایه گذاری برای تولید این محصول
            است. این روغن از جمله روغن‌های گیاهی برشمرده می‌شود که با بالا بردن
            کلسترول خوب بدن و پایین آوردن کلسترول بد به پاکیزگی رگ‌های خونی و
            شست‌وشوی آنها کمک می‌کند و از بیماری‌های قلبی- عروقی و سکته قلبی و
            مغزی جلوگیری می کند.در اروپا از این روغن هم برای خام خواری و هم برای
            سرخ کردن استفاده می‌شود و در تهیه انواع سالادها و انواع غذاها،
            همچنین تهیه شیرینی و گریل مورد استفاده قرار می‌گیرد. همین چند منظوره
            بودن آن یکی دیگر از مزیت‌ها به شمار می‌آید، از طرفی اسیدهای چرب امگا
            ۳، ۶ و ۹ بالاتری نسبت به سایر انواع روغن گیاهی در این روغن وجود دارد
            که مصرف متعادل آن می‌تواند به ارتقای سطح سلامت کمک کند. همچنین با
            توجه به اینکه بیش از ۸۰درصد روغن مصرفی کشور از خارج تامین می‌شود
            توجه به ضایعات و هسته‌های میوه‌های فرآوری‌شده مانند انگور می‌تواند
            در کاهش وابستگی کشور موثر باشد و مورد حمایت دولت هم قرار بگیرد. با
            توجه به این که تعداد رقبای موجود نیز در تولید این محصول کم
            است،سرمایه گذاری در این حوزه می تواند صرفه اقتصادی بسیاری داشته
            باشد.{" "}
          </p>
          <p>
            پیاز نیز از محصولاتی است که تولید عمده آن در شهرستان، شرایط را برای
            احداث واحد صنعتی تولید فرآورده های حاصل از آن مانند کنسرو پیاز سرخ
            شده و پودر پیاز فراهم کرده است. فرآورده های نام برده شده با توجه به
            مدرن شدن زندگی های امروزی بازار فروش خوبی دارند و تولید آن ها مقرون
            به صرفه است. البته لازم به ذکر است که ممکن است برای فرآورده های حاصل
            از پیاز بازار فروش مناسبی در داخل شهرستان وجود نداشته باشد که در این
            صورت باید روی ارسال آن به خارج از شهرستان کارکرد.
          </p>
          <p>
            در خصوص صنایع غذایی مربوط به دامداری، ظرفیت خوبی در شهرستان وجود
            دارد. شیر تولید شده به ۳کارخانه ی تولید لبنیات در تبریز، بناب و
            مراغه فرستاده می شود. در صورتی که می توان برای تولید لبنیات در همین
            شهرستان اقدام کرد و به جای فروش شیر خام می توان با فروش فرآورده های
            متنوع حاصل از آن،درآمد بیشتری کسب کرد.
          </p>
          <p>
            در شهرستان عجب شیر کارخانه نوش ایران در زمینه تولید آبمیوه و
            کنسانتره وجود دارد که پیشرفت خوبی را برای شهرستان رقم زده است و
            کشاورزان ترغیب شده اند که محصولات باغی بیشتری تولید کنند. به نظر می
            رسد با وجود چنین کارخانه ای ظرفیت برای احداث واحد جدید دیگری وجود
            نداشته باشد. اما برای تولید فرآورده های دیگر حاصل از محصولات باغی
            ظرفیت بسیار خوبی وجود دارد.فرآورده هایی مانند میوه خشک و چیپس میوه
            از این دست هستند. تولید این محصولات همیشه جواب می دهد و ریسک زیادی
            ندارد و با تولید این محصولات می توان از خواص میوه ها در تمام فصل ها
            بهره مند بود. سایر فرآورده های حاصل از محصولات باغی مانند
            لواشک،ترشیجات،مربا و شهد نیز در این شهرستان قابلیت تولید دارند که در
            اولویت های بعدی قرار می گیرند. البته تولید مربا، شربت توت فرنگی،
            ترشیجات و لواشک درحال حاضر نیز به صورت خانگی انجام می شود. لازم به
            ذکر است تولید کمپوت سیب نیز صورت می گیرد که مواد اولیه آن از مراغه
            تامین می شود.{" "}
          </p>
          <p>
            گوشت تولید شده در شهرستان مقدار خوبی دارد و برای تولید سوسیس و
            کالباس مناسب است. امروزه الگوی مصرف غذا در جهان به سرعت رو به تغییر
            است و با توجه به اشتغال زن و مرد در بیرون از خانه، تمایل به مصرف
            غذاهایی كه به سرعت آماده می شوند،بیشتر شده است. به همین دلیل تاسیس
            كارخانه های مختلف مواد غذایی مانند کارخانه تولید سوسیس و کالباس صرفه
            اقتصادی خوبی دارند. البته باید در نظر داشت که ممکن است بازار فروش
            خوبی برای این محصولات در شهرستان عجب شیر وجود نداشته باشد که در این
            صورت باید روی ارسال آن به خارج از شهرستان کار کرد.
          </p>
          <p>
            برای فرآوری گندم تولیدی در شهرستان که مقدار کشت زیادی نیز دارد،چند
            کارخانه تولید آرد وجود دارد. اما آرد تنها فرآورده ای نیست که می توان
            از گندم تولید کرد. بلکه محصولات دیگری مانند نان(صنعتی و سنتی)،رشته
            آشی و پلویی، شیرینی،کیک، کلوچه و بیسکوییت نیز قابلیت تولید دارند.
            نان کالایی ضروری است که حتی افزایش قیمت، تاثیر خاصی روی مصرف آن نمی
            گذارد بنابراین تولید کننده آن برای بازار فروش نگرانی ندارد. رشته آشی
            و پلویی نیز با توجه به فرهنگ تغذیه ای مردم ایران،استفاده های زیادی
            دارد. در رابطه با تولید کیک و کلوچه باید گفت به دلیل تنوع مواد اولیه
            باکیفیت و همچنین تخصص موجود در میان تولیدکنندگان کشورمان، اکنون
            کمترین میزان وابستگی به خارج از مرزها وجود دارد و ارزش افزوده تولید
            و صادرات محصولات کیک و کلوچه در کشورمان می‌تواند عاملی قابل توجه در
            اقتصاد ایران شناخته شود. با استفاده از چنین ظرفیت هایی در شهرستان
            عجب شیر و سایر شهرستان های کشور می توانیم ایران را به قطب تولید چنین
            محصولاتی،حداقل در منطقه تبدیل کنیم.
          </p>
          <p>
            سایر فرآورده های حاصل از گندم مانند گندم برشته،آرد سوخاری،پفک گندمی
            و نشاسته نیز امکان تولید دارند ولی در اولویت های بعدی قرار می گیرند.
          </p>
          <p>
            برای فرآوری گوجه تولیدی در شهرستان کارخانه رب موجود است اما فرآورده
            دیگری مانند پودر گوجه نیز می توان تولید کرد. گوجه فرنگي به علت داشتن
            رطوبت بسيار زياد، قابل نگهداري به صورت خيس نبوده و در مدت كمتر از 72
            ساعت دچار كپك زدگي و فساد مي شود و در نتيجه به هيچ عنوان امكان خشك
            كردن آن به صورت سنتي وجود ندارد و مصرف كنندگاني كه به مصرف خشک شده
            این محصول در آفتاب اقدام نموده اند در دراز مدت بيمار شده و دليل آن
            وجود قارچ هاي سمي به علت خشك كردن غير اصولي اين مواد بوده است. پودر
            گوجه به علت ارزش غذايي بالا و غني سازي محصولات غذايي، از لحاظ وجود
            ويتامين Cكه موجب مقاوم سازي بدن مي شود ، در صنايع غذايي كاربرد
            فراوان دارد. از آنجا كه مصرف اين محصول سهل و بهداشتي بوده و در
            بسياري از غذاهاي آماده قابل استفاده است، توليد آن حائز اهميت
            بسياراست .{" "}
          </p>
          <p>
            نخود تولیدی در شهرستان که برای تولید لپه مناسب است، به آذر شهر
            فرستاده می شود. درصورتی که می توان در شهرستان عجب شیر برای احداث
            چنین واحدی تولیدی اقدام کرد.
          </p>
          <p>
            از خیار تولید شده در شهرستان نیز می توان برای تولید خیار شور استفاده
            کرد. اما به دلیل انبوه نبودن خیار تولیدی انجام این کار به صورت خانگی
            یا در حد کارگاهی(کوچک) امکان پذیر است. البته در حال حاضر نیز خیارشور
            به صورت خانگی تولید می شود.{" "}
          </p>
          <p>
            امکان تولید فرآورده هایی مانند پودر سیر از سیر کشت شده و عرقیجات
            گیاهی از گیاهان دارویی موجود در شهرستان به صورت مشاغل خانگی و یا در
            کارگاه های کوچک، وجود دارد. البته در کنار تولید عرقیجات گیاهی، خشک
            کردن و بسته بندی گیاهان دارویی نیز سودآور است. در صورت تولید انبوه
            سیر و گیاهان دارویی امکان تولید فرآورده های نامبرده شده در کارگاه
            های بزرگ وجود دارد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            صنایع تبدیلی و تکمیلی از صنایعی است که وجود آن در شهرستان لازم است و
            عاملی برای افزایش تولیدات آن شهرستان محسوب می شود. اگر صنایع تبدیلی
            و تکمیلی مربوط به محصولی که در شهرستان تولید می شود وجود داشته
            باشد،تولید آن محصول قابلیت گسترش بیشتری دارد و سود بیشتری نیز نصیب
            فرد تولید کننده می شود. همچنین میزان واردات بعضی از کالاها نیز کاهش
            پیدا می کند. با اینکه شهرستان عجب شیر تولیدات بسیار خوبی را در زمینه
            کشاورزی و دامداری دارد و مواد اولیه برای بعضی از صنایع تبدیلی و
            تکمیلی به راحتی فراهم است اما متاسفانه فعالیت زیادی در این زمینه
            انجام نشده است. برای مثال یکی از مواردی که در شهرستان جای کار
            دارد،بسته بندی خشکبار است. بسته‌بندی‌های شکیل و مناسب ، عرضه ،
            نگهداری ، دوام و فروش کالاها را آسان‌تر نموده است.خشکبار تولیدی در
            شهرستان مانند گردو و بادام را می توان به صورت بسته بندی شده فروخت.
            خشکبار های بسته بندی شده از جهت رعایت بهداشت نسبت به خشکبار فله ای
            مورد اعتماد تر هستند. از این جهت خشکبار بسته بندی شده امروزه بازار
            فروش خوبی در بین مردم دارد.
          </p>
          <p>
            در زمینه سورتینگ و بسته بندی پیاز و سیب زمینی که محصول اصلی این
            شهرستان هستند واحدی در حال راه اندازی است. اما از آن جایی که تولید
            این محصولات بسیار زیاد است، نیاز به واحدهای سورتینگ و بسته بندی نیز
            بیشتر می شود. سیب زمینی و پیاز از محصولاتی هستند که نمی توان آن ها
            را از چرخه صادرات کشور خارج کرد. سورتینگ و بسته بندی از فرآیند هایی
            است که بر میزان صادارت تاثیر دارد. بسته بندی محصولات همچنان که ضریب
            ایمنی محصولات کشاورزی را بالا می برد مانع آلودگی ،کاهش ضایعات و
            افزایش پایداری محصولاتی مانند سیب زمینی و پیاز می شود. عرضه محصولات
            بسته بندی شده باعث بالا رفتن شاخص حقوق مصرف کنندگان گردیده و انگیزه
            رقابت در بین تولیدکنندگان و عرضه کنندگان محصولات را بالا می برد.{" "}
          </p>
          <p>
            برای محصولات کشاورزی در شهرستان عجب شیر سردخانه وجود دارد اما با
            توجه به میزان محصول تولیدی باز هم به سردخانه نیاز است و احداث آن
            پیشنهاد می شود. احداث سردخانه‌ها ارتباط مستقیمی با رونق کشاورزی
            دارد. سردخانه دست دلالان را کوتاه می‌کند و هرچقدر شهرستان از این جهت
            غنی تر باشد کشاورزان ناچار نیستند که به علت خراب شدن محصولات خود،آن
            ها را با قیمت بسیار پایین به دلال بفروشند.
          </p>
          <p>
            تعداد دام و طیوری که در شهرستان وجود دارد یک کشتارگاه صنعتی دام و
            طیور را می طلبد. وجود کشتارگاه در این شهرستان از فرستادن دام ها به
            شهرستان های دیگر برای کشتار جلوگیری می کند و باعث می شود که دامداران
            برای کشتار دام های خود هزینه های حمل و نقل را نپردازند. نبود
            کشتارگاه صنعتی، مانع ایجاد ارزش افزوده در دامداری و پرورش طیور می
            شود. وجود کشتارگاه دام امکان تولید پودر گوشت از ضایعات کشتارگاه را
            نیز فراهم می کند.
          </p>
          <p>
            {" "}
            البته باید توجه داشت که احداث سردخانه و کشتارگاه از مواردی هستند که
            بسته به نیاز و ظرفیت شهرستان، احداث یک یا دو واحد از آن کفایت می کند
            و در صورت ایجاد واحدهای بیشتر با مشکل اشباع شدن این موارد روبه رو می
            شویم.
          </p>
          <p>
            زنبورداری به میزان نسبتا خوبی در شهرستان انجام می شود و برای بسته
            بندی عسل واحدی صنعتی وجود دارد که در آن دو نوع عسل موسوم به شیره و
            عسل های مومی در بسته بندی های کریستال یا در قوطی های حلبی به آذر
            کندوی مراغه یا تبریز فرستاده می شود و در آنجا در بسته بندی های 200
            گرمی تا 2 کیلوگرمی به سراسر کشور صادر می شوند. این فعالیت را می توان
            در داخل شهرستان انجام داد و سودی را که نصیب شهرستان مراغه می شود را
            نصیب خود کرد. تولید کندو نیز در حال حاضر در شهرستان انجام می شود و
            بازهم جای کار در این حوزه وجود دارد.{" "}
          </p>
          <p>
            فرآوری پوست گوسفند به منظور تولید نخ از آن برای شهرستان مزیت دارد.
            زیرا قالی بافی یکی از مشاغل اصلی مردم شهرستان است و نخ نیز مواد
            اولیه اصلی مورد نیاز برای بافت قالی است. پوست گاو نیز در شهرستان عجب
            شیر تولید می شود اما فرآوری آن به منظور تولید چرم دارای مزیت به نظر
            نمی رسد. زیرا شهرستان تبریز در استان آذربایجان شرقی قطب تولید چرم در
            کشور است و تولید چرم در سایر شهرستان ها مانند عجب شیر بازار فروش
            خوبی نخواهد داشت. بهتر است پوست های گاو تولید شده به شهرستان تبریز
            برای فرآوری فرستاده شود. تولید کمپوست (افزودن مقدار مشخصی از کودهای
            شیمیایی به کود حیوانی) نیز با وجود کشاورزی گسترده در این
            شهرستان،استفاده زیادی برای تقویت زمین های کشاورزی دارد و دامداری
            موجود در شهرستان قابلیت تولید این محصول را فراهم کرده است.
          </p>
          <p>
            وابستگی شدید کشور به واردات خوراک دام باعث شوک‌های قیمتی در بازار
            داخلی و افزایش مکرر قیمت محصولات دامی می‌شود، دولت به‌دنبال
            راهبردهای تولید محصولات جایگزین برای خوراک دام وارداتی است تا
            وابستگی کشور به این محصولات وارداتی کاهش یابد. خوراک دام و طیور از
            محصولاتی است که می توان در شهرستان تولید کرد. البته در حال حاضر واحد
            تولید خوراک دام و طیور وجود دارد اما بازهم ظرفیت برای ایجاد واحدی
            دیگر وجود دارد.{" "}
          </p>
          <p>
            {" "}
            یکی دیگر از صنایع مربوط به بسته بندی در شهرستان عجب شیر، بسته بندی
            گوشت قرمز است.{" "}
          </p>
          <p>
            انجام بسته بندی گوشت مرغ نیز با وجود تعداد مرغداری های زیاد و بسته
            بندی گوشت بوقلمون با توجه به تولید انبوه این پرنده، برای این شهرستان
            مزیت دارد. البته امکان نبود بازار فروش در شهرستان عجب شیر برای گوشت
            بسته بندی شده وجود دارد که در این صورت می توان آن را به خارج از
            شهرستان ارسال کرد
          </p>
          <p>
            بسته بندی تخمه کدو،آفتابگردان و بادام زمینی در حال حاضر در شهرستان
            انجام می شود و قابلیت برای توسعه این فعالیت نیز در شهرستان وجود
            دارد.{" "}
          </p>
          <p>
            غلات موجود در شهرستان می تواند به صورت بسته بندی شده فروخته شود. هر
            بسته بندي اصولي، جذاب و قابل رقابت در بازار، ارزش افزوده قابل توجهي
            در پي خواهد داشت.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            {" "}
            پرورش طیور در شهرستان عجب شیر میزان قابل توجهی دارد. مرغداری های
            زیادی در این شهرستان وجود دارد که به جزدو مورد تخم گذار بقیه آن ها
            گوشتی هستند. هدف اصلی از راه اندازی مرغداری تامین بخشی از سرانه مصرف
            پروتئین کشور است که پیرو آن تعداد زیادی از افراد بیکار صاحب شغل و
            درآمد خواهند شد ضمن اینکه کود حاصله صرف تقویت اراضی کشاورزی هم می
            شود. با توجه به افزایش روز افزون جمعیت جهان، افزایش سطح بهداشت، کاهش
            مرگ ومیر و نیاز روز افزون مردم برای به دست آوردن غذا، تامین مواد
            غذایی مورد نیاز مصرف کنندگان یکی از مهمترین مسائل روز در کشور است و
            پرورش دهندگان طیور سهم بزرگی در پوشش دادن این مسئله مهم دارند. با
            توجه به مطالب گفته شده و اینکه در این شهرستان پرورش مرغ گوشتی جواب
            می دهد راه اندازی واحدهای بیشتر برای پرورش این پرنده صرفه اقتصادی
            بسیار خوبی دارد. پرورش مرغ تخم گذار نیز برای شهرستان عجب شیر مزیت
            دارد اما در اولویت های بعدی قرار می گیرد.{" "}
          </p>
          <p>
            بوقلمون نیز در این شهرستان به میزان زیادی پرورش داده می شود. با توجه
            به اینکه بوقلمون ترکیبی از گوشت قرمز و سفید است و با گران شدن گوشت
            قرمز،طرفداران بیشتری نسبت به قبل پیدا کرده است،پرورش آن به میزان
            بیشتر در شهرستان از مزیت بالایی برخوردار است.{" "}
          </p>
          <p>
            کبک، بلدرچین و اردک نیز در شهرستان عجب شیر پرورش داده می شوند که
            البته تعداد زیادی ندارند. بلدرچین و کبک مقاومت زیادی در مقابل بیماری
            ها دارند و این ویژگی مزیت پرورش آن ها را بیشتر کرده است. اردک نیز
            پرنده ای با سرعت رشد بالا، راندمان غذایی بالا و سهولت در نگه داری
            است. موارد گفته شده انگیزه را برای پرورش این پرنده بیشتر می کند.{" "}
          </p>
          <p>
            در این شهرستان بیشتر از 20راس شترمرغ نیز وجود دارد که به صورت سنتی
            پرورش می یابند و می توان در خصوص پرورش آن به صورت صنعتی اقدام کرد.
            شترمرغ پرنده ای است بسیار مقاوم، با قابلیت سازگاری بالا با شرایط
            محیطی جدید و علی رغم اینکه زیستگاه شترمرغ مناطق گرم و حاره ای است
            اما پرورش شترمرغ حتی در برخی نواحی سردسیر نیز صورت می گیرد. تطابق
            کامل شترمرغ با هر نوع آب وهوا به طوری که بر اساس گزارشات مختلف
            کارشناسان در مناطق مختلف کشور در دمای 15- تا 50+ درجه سانتی گراد به
            راحتی زندگی کرده و نسبت به کم آبی و خشکی هوا مقاوم است باعث شده تا
            تمایل به پرورش این پرنده بیشتر شود. شترمرغ پرنده ای است با سودآوری
            بالا زیرا از تمام اجزای آن برای تولید نوعی فرآورده استفاده می شود.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            شهرستان زیبای عجب‌شیر یکی از مناطق بکر گردشگری آذربایجان شرقی است که
            روستاهای زیبای آن سالهاست مقصد گردشگری خیل عظیمی از مردم کشورمان
            بوده است. این شهرستان به دلیل نزدیکی به مرکز استان از امتیازات ویژه
            ای برخوردار است. عجب شیر در ۹۰ کیلومتری مرکز آذربایجان شرقی قرار
            دارد و غرب آن به نمک زار دریاچه ارومیه محدود می شود. وجود این شوره
            زارها سبب شده که مسافران زیادی برای درمان و شفا بخشی به ساحل دریاچه
            بیایند و دستها و پاهای خود را در شوره زار نمک دفن کنند و باعث درمان
            بیماری های خاص عضلانی، استخوانی و آرتروز خود شوند. قلعه چای عجب شیر،
            بندر رحمانلو، مساجد چوبی عجب شیر، آبشار هرگلان، پل قیزیل کورپی
            خانیان، کویر کبودان، امامزاده سیدابوالقاسم(ع) وقلعه ضحاک عجب شیر از
            جاذبه های گردشگری این شهرستان هستند. با توجه به ظرفیت ها گردشگری
            شهرستان فعالیت در این زمینه لازم است و درآمد های مربوط به گردشگری را
            چند برابر می کند. منظور از فعالیت های مربوط به حوزه گردشگری احداث
            اقامتگاه های بومگردی و رستوران های بومی است. این موارد از مشاغل
            خدماتی هستند که درآمد زایی بسیاری برای شهرستان دارند.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی در این شهرستان به یکی از مشاغل اصلی مردم تبدیل شده است.
            البته منظور، اشتغال وسیع در تمام زمینه های صنایع دستی نیست. بلکه
            قالی بافی حرفه ایست که طرفداران زیادی در بین مردم شهرستان داشته و
            رونق بسیار خوبی دارد. این قالی ها کیفیت بسیار خوبی دارند. 90درصد
            قالی های تولیدی به تبریز فرستاده می شوند. توسعه ی قالی بافی در این
            شهرستان درآمد خوبی دارد. البته بهتر است از طرح ها و نقشه های به
            روزتر استفاده شود تا بازار فروش بهتری برای آن ها وجود داشته باشد.{" "}
          </p>
          <p>
            حکاکی روی فلز، معرق کاری، منبت کاری، عروسک دوزی، گلیم بافی و جاجیم
            بافی از صنایع دستی دیگری هستند که در این شهرستان انجام می شوند.
            موارد گفته شده امکان گسترش دارند اما نسبت به قالی بافی مزیت بسیار
            پایین تری دارند.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از عوامل مهم توسعه اقتصادی هر کشوری است و ظرفیت های
            بسیار خوبی نیز در کشور ما برای ایجاد مشاغل صنعتی وجود دارد و
            پیشنهاداتی نیز در این حوزه می توان مطرح کرد برای مثال معادنی مانند
            معدن آهک، آهن، گرانیت سبز و زغال سنگ در شهرستان وجود دارند که ایجاد
            واحدهای فرآوری این مواد معدنی سود بسیار زیادی را برای تولید کننده به
            همراه دارد. البته به سرمایه زیادی نیز برای راه اندازی چنین واحدهایی
            نیاز است. یکی دیگر از پیشنهادات در حوزه صنعت، ایجاد کارگاه تولید سبد
            پلاستیکی در شهرستان است. با توجه به تولیدات قابل توجه در حوزه
            کشاورزی، تولید بیشتر سبدهای پلاستیکی جهت بسته بندی محصولات ضروری
            است.در این شهرستان کارخانه ای درخصوص تولید مبل وجود دارد و بازهم
            ظرفیت برای ایجاد واحدی جدید وجود دارد.{" "}
          </p>
          <p>
            {" "}
            شهرستان عجب شیر یک شهرک صنعتی و یک ناحیه صنعتی دارد. شهرک صنعتی عجب
            شیر از شهرک های صنعتی فعال استان آذربایجان شرقی است. صنایع فعال
            شهرستان عجب شیر در حال حاضر عبارتند از : واحدهای تولید انواع آب میوه
            و کنسانتره نوش ایران، رب گوجه فرنگی، آرد، کمپوت سیب،پرده های
            ساختمانی ،میلگرد و آهن، کارتن، پلاستیک، گرانول (از ضایعات پلاستیکی)،
            قطعات کوچک آلومینیوم ،گونی های نخی، تراکتورهای کوچک برای شخم زدن
            باغات، باطری اتومبیل و موتور، خوراک دام و طیور، چوب (مانند تولید ام
            دی اف)، دستمال کاغذی،کارخانه آذر غلتک در زمینه تولید قطعات ماشین،
            کوره آجر پزی،کارگاه سنگ بری برای سنگ های زینتی،سرامیک وکاشی، بازیافت
            زباله و بسته بندی تخم کدو، بادام زمینی و آفتابگردان. کارگاه های سنتی
            و مشاغل خانگی شهرستان نیز عبارتند از: کارگاه روغن کشی از دانه های
            روغنی مانند کنجد و...، کارخانه تولید مبل، بسته بندی میوه ها و
            سبزیجات، تولید ترشیجات، لواشک، میوه خشک،مربا،شربت توت فرنگی، خیارشور
            و عرق گیری گیاهان دارویی.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            نیاز به مواد پروتئینی سالم و کمبود منابع آبی در ایران باعث شده است
            بهره‌برداری دو یا چند منظوره از منابع آب همواره مورد توجه قرار گیرد.
            یکی از این بهره‌برداری‌های چند منظوره نیز پرورش ماهی است . پرورش
            ماهی و خصوصا ماهی قزل آلا سود و بازار بسیار خوبی در کشور ما دارد که
            در شهرستان عجب شیر نیز جواب می دهد ودرحال حاضر نیز چند واحد پرورش
            این نوع ماهی در شهرستان وجود دارد. البته سال گذشته نیز یک واحد برای
            پرورش ماهی سالمون(نوعی دیگر از ماهی سردابی) شروع به کار کرده است.
            توسعه واحدهای پرورش ماهی سردابی در شهرستان عجب شیر گزینه شغلی بسیار
            خوبی است.
          </p>
          <p>
            همچنین دو یا سه واحد کوچک پرورش ماهی زینتی نیز در شهرستان فعالیت می
            کنند. پرورش ماهی زینتی نیز از جمله طرح های اشتغالزایی است که نیاز به
            سرمایه اولیه زیادی ندارد و با کمترین سرمایه و فقط با چند آکواریوم
            می‌شود به کار پرورش ماهیان زینتی در خانه پرداخت.گسترش تعداد واحدهای
            پرورش این نوع ماهی ها در شهرستان عجب شیر مزیت دارد. البته در اولویت
            پاین تری نسبت به پرورش ماهی سردابی قرار می گیرد.
          </p>
          <p>
            پرورش ماهی گرمابی نیز در پشت سد در شهرستان عجب شیر انجام می شود.
            پرورش این نوع ماهی به عنوان یکی از مزیت های شغلی این حوزه پیشنهاد می
            شود که در اولویت آخر راه‌اندازی قرار می‌گیرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
