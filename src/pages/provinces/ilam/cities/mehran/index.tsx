import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-06"].cities["IR-0610"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        livestock: "دامداری",
        services: "خدمات",
        undefined: "صنایع تبدیلی",
        gardening: "باغداری",
        food_industry: "صنایع غذایی",
        handicrafts: "صنایع دستی",
        birds: "طیور",
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
            شهرستان مهران یکی از شهرستانهای استان ایلام است که ازلحاظ جغرافیایی
            در غرب استان واقع شده است. مهران به چهار بخش فرخ‌آباد، هرمزآباد،
            رستم‌آباد، بهین و بهروزان تقسیم می‌شود . فاصله این شهر تا کربلا 280
            و تا نجف 303 کیلومتر است. این شهرستان از شمال و شرق با شهرستان‌های
            ایلام و ملکشاهی، از جنوب با شهرستان دهلران و از غرب با کشور عراق
            هم‌مرز است. شکل زیر موقعیت شهرستان مهران را نشان می‌دهد.
          </p>
          <p>
            بنابر سرشماری مرکز آمار ایران، جمعیت شهرستان مهران در سال ۱۳۹۵ برابر
            با ۲۹٬۷۹۷ نفر بوده‌است. جمعیت کم باعث می شود تا مقدار زیادی از
            محصولات تولید شده در یک کارخانه بزرگ و صنعتی، مازاد بر مصرف مردم
            باشد؛ درنتیحه این واحد باید به فکر بازار فروش در دیگر شهرستانها و یا
            حتی عراق باشد. مهران شهرستانی است با اقلیم گرمسیر. گرمی هوا باعث شده
            است که ظرفیت برای سرمایه‌گذاری در بسیاری از کسب‌وکارها از بین برود.
          </p>
          <p>
            موقعیت جغرافیایی مرزی مهران باعث شده است که پتانسیل خوبی ازنظر
            صادرات در این منطقه وجود داشته باشد. باتوجه به روابط دوستانه ایران و
            عراق، هم‌پوشانی فرهنگی و مذهبی این دو کشور و نیاز آن کشور به انواع
            خدمات زیرساخی و فرهنگی بعداز پشت سر گذاشتن دوره‌ای نسبتا طولانی از
            اشغال توسط آمریکایی ها، فرصت مناسبی برای ایجاد بازارچه‌های مرزی و
            ایجاد انواع امکانات رفاهی و صنعتی وجود دارد که می‌توان از این شرایط
            به نحواحسن استفاده کرد. مزیت انجام این کار در وهله اول استفاده زوار
            اربعین از این امکانات رفاهی خواهد بود. برای تبیین مزیت دوم ابتدا
            باید به شرایط اقتصادی حال حاضر کشور، تفاوت ارزش پول ایران و عراق و
            تمایل عراقی ها برای تعامل با ایران اشاره کرد که می تواند ارزآوری و
            درآمدزایی بسیار خوبی علاوه بر کشور، برای خود منطقه داشته باشد. البته
            در این میان نباید از اقلیم گرم منطقه غافل شد که لزوم وجود و تامین
            تجهیزات لازم و کافی برای فائق آمدن به این مسئله طبیعی را یادآوری
            می‌کند.
          </p>
          <p>
            شغل بیشتر مردم در مهران کشاورزی و دامداری است. عده ای نیز به مشاغل
            کاذبی مانند کولبری و... در مرز مشغول هستند. تمایل جوانان بیشتر در
            حیطه‌های خدمات و شغل اجدادی‌شان یعنی کشاورزی و دامپروری است. گرمی
            هوا، عدم وجود نقدینگی و سرمایه در سطح شهرستان، بروکراسی اداری و
            طولانی بودن پروسه اخذ مجوز از مهمترین موانع ایجاد کسب و کار در مهران
            است. نکته قابل ذکر در این رابطه این است که موقعیت جغرافیایی مهران
            هزینه حمل و نقل برای صادرات به عراق به حداقل می رساند؛ ولی مشکلات
            ذکر شده باعث می شود تا افراد بومی شهرستان تمایل زیادی به سرمایه
            گذاری در این بخش ها نداشته باشند و ترجیح دهند که به صورت غیررسمی به
            کارهایی مانند کولبری مشغول باشند.
          </p>
          <p>
            منابع نفت و گاز در مهران بسیار زیاد است و مشاغل خوبی را نیز ایجاد
            کرده است؛ اما مسئله ای که وجود دارد این است که فرآوری این محصول در
            خود شهرستان انجام نمی‌شود؛ درصورتیکه اگربتوان کارهای این چنینی را
            انجام داد، قطعا موفق خواهد بود.
          </p>
          <p>
            سامانه گرمسیری یکی از طرح های مهم برای رونق بخشیدن به کشاورزی و دیگر
            کسب‌وکارها در ایلام به شمار می آید که در این شهرستان نیز درحال
            اجرایی شدن است. باتوجه به وسعت مهران، اجرایی شدن طرح سامانه گرمسیری
            و وجود مهارت و اشتیاق در بین مردم در زمینه کشاورزی، باعث شده است تا
            علاوه بر ایجاد پتانسیل برای گسترده‌ترکردن کشاورزی، بتوان گام‌های
            بلندی نیز در زمینه تکمیل زنجیره تولید هرکدام از این محصولات برداشت.
          </p>
          <p>
            راه های مواصلاتی و موقعیت مرزی این شهرستان، مزیت بسیارخوبی برای
            انجام انواع فعالیت‌های اقتصادی و ترانزیتی است. باتوجه به ریسک‌پذیری
            کم مردم بومی شهرستان و افزایش زوار اربعین و اصلی بودن این مرز برای
            گذر به عتبات عالیات، به نظر می‌رسد ظرفیت برای کار بیشتر و تخصصی‌تر
            در زمینه ایجاد انواع خدمات در این منطقه وجود دارد البته باید توجه
            داشت که رفت و آمد زوار اربعین از این منطقه به صورت فصلی خواهد بود.
            بحث ترانزیت کالا نیز می تواند درآمد زایی بسیارخوبی برای این شهرستان
            داشته باشد. اگر ترانزیت کالا از این مرز توسط مراکز دولتی جدی تر
            حمایت شود، انگیزه تولیدکنندگان برای کار در این شهرستان و سرمایه
            گذاران برای سرمایه گذاری در این منطقه به مراتب افزایش خواهد یافت.
            توسعه ترانزیت کالا باعث می شود تا میزان مهاجرت نیز کاهش یابد و افراد
            بومی که به هر دلیلی مهاجرت کرده اند، به علت وجود کار و رونق تولید و
            اقتصاد به شهرستان بازگردند.
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
            به علت زیاد بودن آب و وجود زمین‌های حاصلخیز در شهرستان مهران، زراعت
            از اصلی‌ترین مشاغل مردم خصوصا روستاییان محسوب می‌شود. میزان تولید
            بیشتر محصولات نیز درحد رفع نیاز خود مردم است؛ ولی بعضا به دیگر
            شهرستانهای استان و یا کشور عراق نیز صادر می‌شوند.{" "}
          </p>
          <p>
            اصلی ترین محصول این منطقه گندم است. طبق آمار سال 1393، یک دهم از
            محصول تولیدی در سطح استان، در مهران تولید می شود. گندم محصولی است که
            بصورت تضمینی توسط دولت خریداری می‌شود و در تولید بسیاری از محصولات
            خوراکی مهم، نقش اساسی دارد؛ درنتیجه می توان کشت آنرا توسعه داد.{" "}
          </p>
          <p>
            به تازگی کشت کلزا در مهران شروع شده و جواب داده است. علاوه بر واردات
            انواع دانه های روغنی، اینکه این محصول برای پرورش به آب کمی نیاز
            دارد؛ باعث می‌شود تا بتوان توسعه کشت آنرا پیشنهاد داد. لازم به ذکر
            است ماشین‌های برداشت کلزا مخصوص و بعضا گران هستند؛ ولی میزان سود به
            دست آمده از این محصول و فرآورده های آن باعث شده تا بتوان مزیت خوبی
            را به کشت کلزا اختصاص داد. درضمن این محصول نیز مانند گندم، در اولویت
            اول مزیت قرار گرفته است.{" "}
          </p>
          <p>
            جو محصولی است مانند گندم که توسط دولت خریداری می‌شود و با شرایط آب و
            هوایی و اقلیم مهران سازگار است. درحال حاضر کشت این محصول به میزان
            قابل توجهی انجام می‌شود و باتوجه به اینکه می‌توان از آن در زمینه
            تولید خوراک دام استفاده کرد، افزایش سطح زیرکشت آن پیشنهاد می شود.
            کنجد نیز یکی دیگر از محصولات کشاورزی متناسب با شرایط منطقه است که
            باتوجه به تمایل مردم به سمت استفاده از روغن آن و قیمت مناسبی که نسبت
            به سایر محصولاتی که از آنها روغن‌گیری انجام می‌شود دارد، کشت آن
            پیشنهاد می‌شود.{" "}
          </p>
          <p>
            بعد از موارد فوق کشت حبوباتی مانند ماش و عدس انجام شده و با آب و
            هوای این منطقه سازگار است؛ لذا اگر با در نظر گرفتن ظرفیت شهرستان در
            این زمینه اقدام کنیم، علاوه بر کسب در آمد خوب، نیاز مردم شهرستان نیز
            تامین می‌شود. درضمن می توان در زمینه کشت حبوبات دیگر مانند نخود نیز
            کار کرد.{" "}
          </p>
          <p>
            در اولویت های پایین تر باید به محصولاتی مانند ذرت علوفه‌ای، ذرت
            دانه‌ای و یونجه اشاره کرد که درحال حاضر درحال کشت هستند. سطح انجام
            دامداری باعث می‌شود تا بتوان توسعه کشت این محصولات را پیشنهاد کرد و
            نیاز شهرستان به واردات خوراک دام را به طور کامل از بین برد. درپایان
            باید اشاره کرد باتوجه به افزایش تمایل مردم به سمت استفاده از داروهای
            گیاهی، کشت گیاهان دارویی دارای مزیت خوبی خواهد بود.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری از مشاغلی است که از دیرباز در شهرستان مهران انجام می‌شود.
            مهارت مردم در این زمینه و مشاغل مرتبط با آن و همچنین نیاز همیشگی
            مردم به مصرف محصولات دامی، لزوم گسترده‌تر شدن کار در این رسته را
            یادآورد می‌شود. دامداری در مهران فصلی انجام می شود؛ زیرا در فصول گرم
            سال نمی توان دامداری را بصورت گسترده دنبال کرد. بیشتر آب موردنیاز در
            دامداری نیز از رودخانه‌ها تامین می شود.{" "}
          </p>
          <p>
            در حالت کلی دامداری‌های شهرستان به دو صورت بومی و سنتی انجام
            می‌شوند، البته واحدهایی نیز به صورت صنعتی و نیمه صنعتی در این زمینه
            مشغول به کار هستند؛ ولی تعدادشان خیلی زیاد نیست.
          </p>
          <p>
            پرورش دو نوع دام سبک مانند گوسفند و بز و دام های سنگین مانند گاو
            انجام می شود و با آب و هوای مهران سنخیت دارند. باتوجه به وجود بازار
            مصرف و لزوم استفاده از محصولات لبنی، گسترش پرورش این دام‌ها پیشنهاد
            می شود.
          </p>
          <p>
            طبیعت مهران برای زنبورداری مناسب است؛ حتی در فصل زمستان و اواخر
            پاییز، زنبورداران مهاجر از کرمانشاه، کردستان و دیگر استانهای سردسیر
            به مهران کوچ می‌کنند؛ زیرا زمین‌هایی سرسبز دارای گل و همچنین زمین
            های کلزا موجود است. عسل تولیدی نیز از مرغوبیت خوبی برخوردار است.
            باتوجه به بازار مصرف عسل در داخل و خارج از کشور و همچنین موقعیت
            جغرافیایی مهران (هم‌مرز بودن با عراق)، توسعه این شغل پیشنهاد می‌شود.{" "}
          </p>
          <p>
            در اولویت های پایین تر باید به دام های اصلاح نژادشده اشاره کرد.
            بصورت کلی این نوع از دام‌ها سود خوب و بازدهی عالی‌ای دارند به همین
            دلیل پرورش آنها دارای مزیت است البته تنها در مناطق سردسیر می توان
            برروی پرورش این دام ها کار کرد.{" "}
          </p>
          <p>
            در ادامه باید گفت باتوجه به شرایط مرزی شهرستان و تردد عراقی ها به
            این شهر، به نظر می رسد بتوان سود خوبی از مشاغلی مانند پرورش زالو و
            عقرب به دست آورد. از این دو مورد می توان در زمینه درمان بسیاری از
            بیماری‌ها استفاده کرد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            شـهر کوچـک مهـران محـل تـردد روزانـه ده‌هـا هـزار نفـر مسـافر اسـت
            کـه رونـق زیـادی بـه ایـن شـهر داده اسـت. اکنون بـا فعالیـت گمـرک
            مهـران در مـرز بهرام‌آبـاد کـه بزرگتریـن گمـرک خاکـی کشـور اسـت
            روزانـه حجـم بالایی از کالا از ایـران بـه عـراق صـادر می شـود.
            خروجـی مهـران از فعالتریـن مرزهـای رسـمی ایـران اسـت کـه نزدیکـی بـه
            شـهرهای مذهبـی کشـور عـراق ایـن مـرز را بـه یکـی از مهمتریـن کانون
            هـای آمـد و شـد زائـران و صـدور کالا بـه کشـور عـراق تبدیـل کـرده
            اسـت. مـرز مهـران در سـال ۱۳۸۲ بـا پیشـنهاد وزارت امـور خارجـه کشـور
            از سـوی سـازمان ملـل متحـد بـه عنـوان مـرز بین المللـی شـناخته شـد.
            لازم به ذکر است شـهر مهـران حـدود ۶۰ سـال پیـش دارای فـرودگاه بـوده
            ولـی هم‌اکنـون ایـن فـرودگاه متروکـه شـده‌است.{" "}
          </p>
          <p>
            تردد زوار عتبات عالیات از این منطقه، تردد عراقی‌ها برای تامین
            مایحتاج روزانه‌شان، وجود پتانسیل برای ترانزیت کالا و اماکن باستانی،
            تاریخی و طبیعی در این منطقه باعث شده است تا بتوان از رسته خدمات و
            مشاغل مرتبط با آن درآمد خوبی کسب کرد. درواقع نیاز و تقضا برای ایجاد
            امکانات رفاهی بسیار گسترده‌تر، مزیت خوبی برای ایجاد مشاغلی از این
            دست در مهران ایجاد کرده است. بعلاوه ریسک‌پذیری کم مردم در زمینه
            ایجاد واحدهای صنعتی، عامل خوبی است تا در زمینه خدمات، مشاغلی ایجاد
            شود و از نرخ بیکاری منطقه بکاهد. در رابطه با ایجاد امکانات رفاهی
            برای زوار اربعین باید فصلی بودن این مسئله را درنظرداشت و برای سودده
            بودن کسب و کارهایی که ایجاد خواهد شد در دیگر فصول، برنامه‌ریزی کرد.{" "}
          </p>
          <p>
            تجارت و دادوستد کالا در مرز مهران باعث می شود تا بتوان درآمد خوبی از
            ایجاد مواردی مانند رستوران، اقامتگاه و.... کارهای شایان توجهی کرد و
            سود خوبی بدست آورد.{" "}
          </p>
          <p>
            پس از ارائه خدمات به زوار اربعین و عراقیان باید به پتانسیل های خود
            شهرستان اشاره کرد. قلعه کنجانچم در مسیر زائران عتبات است؛ ولی
            متاسفانه اقدامی در زمینه ایجاد امکانات تفریحی و احیای این مکان انجام
            نداده است. درصورت ایجاد چنین امکاناتی می توان اشتغال خوبی ایجاد کرد.
          </p>
        </Section>
        <Section id="undefined" title="صنایع تبدیلی" size="h3">
          <p>
            باتوجه به موقعیت مرزی مهران، می توان مزیت خوبی برای صنایع تبدیلی
            قائل بود؛ زیرا درصورت صادرات، هزینه حمل و نقل کاهش چشمگیری خواهد
            داشت. همچنین فعال بودن مرز مهران، باعث شده است تا بتوان مزیت بالایی
            را برای صنایع بسته‌بندی انواع و اقسام محصولات قائل بود.{" "}
          </p>
          <p>
            در اینجا باید تاکید شود که باتوجه به ممنوعیت صادرات گوشت دام و طیور
            از کشور، باید شرایط شروع بسیاری از مشاغلی که در ذیل در رابطه با رسته
            دامداری پیشنهاد می شوند، به صورت دقیق تری بررسی شوند.{" "}
          </p>
          <p>
            باتوجه به سطح انجام دامداری در استان ایلام و شهرستان مهران، فرآوری
            پوست دام‌ها مانند تولید نخ از پشم گوسفند و یا تولید چرم از پوست گاو
            پیشنهاد می شود. اگر چنین واحدهایی ایجاد شوند، می توانند تاثیر
            مستقیمی بر انگیزه بافندگان و فعالین صنایع دستی برای توسعه کارشان
            داشته باشند و هزینه‌های جاری آنها را کاهش دهند.
          </p>
          <p>
            تولیدات دامی در مهران قابل توجه است. اگر کشتارگاهی برای کشتار این
            دام‌ها در شهرستان ایجاد شود و به فرآوری و بسته‌بندی گوشت نیز مجهز
            باشد، سود تولیدکننده افزایش و میزان اشتغال خوبی را به ارمغان خواهد
            آورد. همچنین درصورت وجود صرفه اقتصادی، می‌توان دام‌ها را از
            شهرستان‌های همجوار به مهران آورده و در خود شهرستان کار کشتار و
            بسته‌بندی آنها را انجام داد و حتی صادر کرد. البته اگر این واحد تنها
            برای از بین بردن نیاز شهرستان در این زمینه ایجاد شود، باید به این
            نکته توجه داشت که معمولا کشتارگاه‌ها با ایجاد یک یا دو واحد به حالت
            اشباع می رسند و نمی‌توان مزیتی برای ایجاد واحدهای جدید قائل بود.
          </p>
          <p>
            همانطور که در قسمت دامداری اشاره شد، وجود مهارت خوب زنبورداران و
            مرغوبت عسل تولیدی باعث می شود تا بتوان بسته بندی عسل را پیشنهاد داد.
          </p>
          <p>
            باتوجه به مزیت داشتن تولید فرآورده‌هایی از محصولات باغی، کشاورزی و
            دامی در مهران، می‌توان بر روی بسته‌بندی و برندسازی این محصولات کار
            کرد. بسته‌بندی برخی محصولات مانند زیتون، خرما و... نیز دارای مزیت
            هستند.{" "}
          </p>
          <p>
            در پایان لازم است که مجددا اشاره شود که شرایط مرزی مهران و زیاد بودن
            عبور و مرور از مرز این شهر، می تواند دلیل خوبی برای ایجاد واحدهایی
            برای بسته بندی انواع محصولات کشاورزی، دامی و یا فرآورده های آنها
            باشد. شرایط اقتصادی و سطح قدرت خرید مردم در بیشتر شهرهای ایران
            ازجمله مهران اجازه کار در حوزه صنعت به صورت گسترده را نمی‌دهد؛ زیرا
            محصولات پس از بسته‌بندی، افزایش قیمت محسوسی پیدا می‌کنند. در شهر
            مرزی مانند مهران که هم توسط افراد داخل کشور و هم خارج از کشور شناخته
            شده است، می توان این محصولات را براحتی به فروش رساند البته قبل از هر
            اقدامی در این زمینه باید توان رقابت با برندهای بزرگ و شرایط صادرات
            محصول را به خوبی بررسی کرد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            آب و هوای گرم شهرستان مهران باعث شده است تا نتوان برروی توسعه باغات
            سرمایه‌گذاری زیاد و درخور توجهی انجام داد؛ هرچند که در سطح شهرستان،
            محصولاتی از رسته باغداری وجود دارند که کشتشان انجام می‌شود و قابلیت
            توسعه خواهد داشت.{" "}
          </p>
          <p>
            عمده محصولات باغی زیتون، پرتقال و خرما است. به نظر می‌رسد گسترش این
            باغات؛ علی رغم گرمی هوا قابل توسعه باشد؛ زیرا علاوه بر تامین نیاز
            شهرستان، می توانند صادر شوند. درضمن می‌توان فرآورده‌هایی با ارزش
            افزوده بالا از این موارد تولید کرد که در قسمت صنایع غذایی به آنها
            اشاره خواهد شد.{" "}
          </p>
          <p>
            بامیه تولیدی در مهران نیز در سطح کشور بسیار معروف بوده و مرغوبیت
            بالایی دارد؛ بنابراین می توان در زمینه توسعه کشت این محصول کار کرد و
            تولیدات را افزایش داد.
          </p>
          <p>
            پس از محصولات فوق باید به کشت گوجه و خیار اشاره کرد که به صورت
            گسترده درحال انجام است؛ اما متاسفانه صنایع تبدیلی آنها ضعیف است کشت
            سبزیجات و صیفی جاتی مانند فلفل نیز در شهرستان جواب می دهد؛ زیرا آب
            برای تولید این محصول به مقدار کافی وجود دارد و زمین‌ها نیز کشش
            دارند. وجود بازار فروش همیشگی برای این محصولات و فرآورده‌های آن‌ها،
            دلیل خوبی برای توسعه کشت این موارد است.
          </p>
          <p>
            متاسفانه تا بحال کسی در زمینه ایجاد گلخانه در مهران کار نکرده است؛
            زیرا این منطقه گرمسیر است و درجه هوا به پنجاه تا شصت درجه می‌رسد و
            محصولات گلخانه ای نابود می شوند البته مزیت داشتن ایجاد گلخانه در
            شهرستان، بستگی به نوع محصول تولیدی و اقلیم منطقه‌ای که در آن احداث
            می‌کنند، دارد. می توان در شمال شهرستان و در اقلیم سردسیر، گوجه
            گلخانه ای کشت کرد و صد درصد هم جواب می دهد. خیار نیز با این شرایط
            جواب خواهد داد.{" "}
          </p>
          <p>
            انگور محصولی است که درحال حاضر کشت می شود و می‌تواند براحتی توسعه
            پیدا کند؛ زیرا با شرایط اقلیمی شهرستان مطابقت دارد و سود خوبی را
            ایجاد خواهد کرد.
          </p>
          <p>
            در اولویت‌های پایین‌تر باید به باغات لیمو، سیب، پسته، انار و زالزالک
            اشاره کرد. تولید این موارد به دلیل گرمای هوا کم است؛ اما اگر بتوان
            شرایط کشت این محصولات را فراهم کرد و یا تولید آنها را در مناطق
            سردسیر شهرستان دنبال کرد، سود خوبی به دست خواهد آمد.{" "}
          </p>
          <p>
            در پایان نیز باید پرورش قارچ را پیشنهاد کرد. این محصول در بیشتر
            اقلیم های آب و هوایی البته با ایجاد شرایط مختص به خودش، جوابگو خواهد
            بود.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            موقعیت خوب برای ترانزیت کالا و رفت و آمد رانندگان و استفاده همیشگی
            از محصولات غذایی ازجمله دلایلی است که باعث می شود تا بتوان مشاغل
            پرسودی را در این رسته پیشنهاد داد و تاحدود زیادی از بازار فروش آنها
            اطمینان داشت.{" "}
          </p>
          <p>
            باتوجه به کشت زیاد گندم می‎‌توان در زمینه فرآوری آن مانند تولید آرد،
            شیرینی پزی، تولید رشته آشی و پلویی، تهیه نان و سایر فرآورده های آن
            مانند پفک گندم، آرد سوخاری، برشته کردن گندم، تهیه نان بستنی، بیسکویت
            و کلوچه به خوبی کارکرد. رایج بودن استفاده از این محصولات علت دیگری
            است که باعث می شود تا به این مشاغل مزیت بالایی تعلق گیرد.{" "}
          </p>
          <p>
            فرآوری شیر دام ها و تولید لبنیات به علت وجود تقاضای همیشگی، از
            مشاغلی است که هیچگاه به حالت اشباع نمی‌رسد و دارای مزیت است.{" "}
          </p>
          <p>
            در ادامه باید به تولید سوسیس و کالباس البته به صورت خانگی اشاره کرد
            که بازار فروش خوبی خواهد داشت؛ زیرا جدیدا ذائقه مردم به سمت استفاده
            از محصولاتی که دارای موادنگهدارنده کمی هستند، سوق پیدا کرده است.{" "}
          </p>
          <p>
            فرآوری صیفی‌جات به صورت رب، خیارشور و... با توجه به اینکه مواد اولیه
            آنها به مقدار خیلی زیاد در این شهرستان وجود دارد و بازار مصرف خوبی
            دارد، پیشنهاد می‌شود.
          </p>
          <p>
            کشت کلزا در مهران جواب داده است و پیشنهاد توسعه آن نیز در بالاتر
            داده شد. روغن گیری و فرآوری این محصول دارای مزیت خواهد بود. کلزا و
            به صورت کلی دانه های روغنی، هرساله سهم زیادی از واردات محصولات
            کشاورزی کشور را به خود اختصاص می دهند درنتیحه درصورت افزایش سطح
            زیرکشت و فرآوری شان، سود خوبی به دست خواهد آمد.{" "}
          </p>
          <p>
            فرآوری محصولاتی مانند خرما و زیتون، باتوجه به وجود این محصولات و
            وجود پتانسیل برای کشتشان، سودده هستند. میوه ها را نیز می توان به
            صورت هایی مانند چیپس میوه و یا میوه خشک درآورد و از فروششان سود خوبی
            را کسب کرد.{" "}
          </p>
          <p>
            تولید محصولاتی مانند ارده کنجد و روغن‌گیری از کنجد هم زمینه‌های لازم
            برای گسترش را دارد؛ زیرا ماده اولیه آن یعنی کنجد وجود دارد.
          </p>
          <p>
            درصورت افزایش سطح زیرکشت، فراوری گیاهان دارویی شامل خشک کردن، بسته
            بندی و عرق گیری آنها و همچنین فرآوری سبزیجات شامل خشک کردن و بسته
            بندی آنها نیز از مزیت های این شهرستان است که می‌توانند سودآوری خوبی
            را داشته باشند.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی در شهرستان مهران به دو صورت کارگاهی و خانگی انجام می‌شود.
            بازار فروش این محصولات نیز، بیشتر در نمایشگاه‌ها است. مهارت و علاقه
            افراد مهران باعث می‌شود تا بتوان در این زمینه توسعه و شکوفایی خوبی
            ایجاد کرد.{" "}
          </p>
          <p>
            تامین بازار فروش مهمترین مشکل در تولید صنایع دستی است. بادرنظر گرفتن
            موقعیت مرزی مهران، به نظر می‌رسد بتوان براحتی مشکل فروش این محصولات
            را حل و فصل کرد. باید توجه داشت که اگر این مسئله برطرف شود، انگیزه
            بافندگان به توسعه کارشان بیشتر شده و افراد علاقمند دیگری نیز وارد
            این کار خواهندشد.{" "}
          </p>
          <p>
            در اینجا باید اشاره کرد ایجاد بازارچه مرزی می تواند توسعه و شکوفایی
            بسیارخوبی در زمینه فروش این محصولات و دیگر محصولات تولیدی در شهرستان
            ایجاد کند. اگر بازارچه مرزی ایجاد شود؛ حتی می توان محصولات دیگری
            ازجمله صنایع دستی را از دیگر شهرهای همجوار برای فروش به این منطقه
            آورد.{" "}
          </p>
          <p>
            طبق بررسی های انجام شده، بیشتر مواداولیه مورداستفاده تولید صنایع
            دستی در داخل شهرستان و به صورت سنتی تولید می شود؛ اما باتوجه به سطح
            دامداری انجام شده، درصورت تامین بازار فروش صنایع دستی و رونق گرفتن
            تولید، می توان در زمینه فرآوری پوست دام ها برای تولید گسترده تر
            مواداولیه اقدام کرد.{" "}
          </p>
          <p>
            تولید صنایعی مانند قالی، گلیم و جاجیم بسیار کاهش یافته است.
            عروسک‌بافی، چرم‌دوزی، نمدمالی، تراشکاری سنگ های زینتی و چیت بافی نیز
            به صورت محدود انجام می شود.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            باتوجه به وجود دو اقلیم سرد و گرم در شهرستان مهران، می‌توان در زمینه
            پرورش انواع طیوری که با این اقلیم سنخیت دارند، کار کرد و حداقل نیاز
            خود شهرستان را در این زمینه‌ها برطرف نمود.{" "}
          </p>
          <p>
            پرورش هردونوع مرغ یعنی مرغ گوشتی و تخم‌گذار، دارای مزیت بوده و
            تاحدودی درحال انجام است. بوقلمون، کبک، بلدرچین و شترمرغ نیز ازجمله
            طیوری هستند که باتوجه به تامین بازار فروش و اقلیم، پرورششان پیشنهاد
            می شود البته درحال حاضر بعضی از این طیور مانند بوقلمون به صورت محدود
            و سنتی درحال پرورش هستند. همچنین قبل از هراقدامی در زمینه پرورش این
            طیور، باید بازار فروش گوشت این طیور را به خوبی مورد بررسی قرار داد؛
            زیرا مانند گوشت مرغ، مصرفشان رایج نیست.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            طبق اطلاعات بدست آمده، کارگاه و کارخانه خاصی در مهران در زمینه صنایع
            فعال نیست. وجود نیروی کار جوان، نیاز همیشگی به برخی محصولات صنعتی در
            زندگی روزمره و... دلیل خوبی است برای اینکه در زمینه تولید محصولات
            موردنیاز مردم در رسته صنعت، توجه و تمرکز بیشتری شود.
          </p>
          <p>
            همانطور که در بالاتر اشاره شد؛ با وجود منابع نفت و گاز، در حال حاضر
            فقط استخراج نفت انجام می شود و این نفت برای فرآوری به اهواز و سایر
            نقاط فرستاده می‌شود؛ در صورتی که می توان واحدی را برای فراوری ایجاد
            کرد.
          </p>
          <p>
            به نظر می رسد باتوجه به مزیت داشتن بسته بندی انواع و اقسام محصولات و
            فرآوری آنها، تولید گونی و سبد نیز موفق باشد.{" "}
          </p>
          <p>
            تولید سموم شیمیایی نیاز به تخصصی ندارد و فقط مواد اولیه‌ای که از
            خارج وارد می‌شود را ترکیب می کنند؛ بنابراین راه‌اندازی این کار نیز
            سودآوری خواهد داشت؛ زیرا کشاورزی در این شهرستان رونق دارد و این سموم
            از واردات این شهرستان هستند.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی در شهرستان مهران به صورت گسترده انجام نمی‌شود؛ اما با
            وجود دو اقلیم سرد و گرم می‌توان پرورش ماهی را به عنوان شغلی که
            بتواند نیاز خود شهرستان را تأمین کند، پیشنهاد داد.{" "}
          </p>
          <p>
            ماهیان گرم آبی مانند کپور نیز برای پرورش در مناطق گرمسیر پیشنهاد می
            شوند؛ ولی باتوجه به گرمی هوا باید به این نکته توجه داشت که دمای آب
            از مقداری مشخص بالاتر نرود.{" "}
          </p>
          <p>
            درپایان باید اشاره کرد وجود رودخانه کنجانچم در مهران، مزیت خوبی برای
            فعالیت در زمینه شیلات ایجاد کرده است. ذکر این نکته نیز ضروری است که
            قبل از هراقدامی در زمینه ایجاد واحد پرورش ماهی، باید بازار فروش این
            محصولات را باتوجه به ذائقه مردم درنظر گرفت.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
