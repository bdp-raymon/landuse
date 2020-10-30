import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-31"].cities["IR-3110"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        industry: "صنعت",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        food_industry: "صنایع غذایی",
        gardening: "باغداری",
        birds: "طیور",
        livestock: "دامداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        agriculture: "زراعت",
        fisheries: "شیلات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان یزد، مرکز استان یزد از شمال به شهرستان اردكان، از شرق به
            شهرستان بافق، از جنوب به شهرستان مهریز و از جنوب غرب و غرب به
            شهرستان تفت و اشکذر محدود می‌شود. شکل زیر موقعیت شهرستان یزد را نشان
            می‌دهد. شهرستان یزد در دره‌ای وسیع، خشك و محصور بین رشته كوههای
            شیركوه و خرانق قرار گرفته است. یزد به علت قرار داشتن بر روی کمربند
            خشک جهانی دارای زمستان های سرد و نسبتاً مرطوب و تابستان های گرم و
            طولانی و خشک است. طبق سرشماری سال 95 جمعیت شهرستان 656474 نفر گزارش
            شده‌است.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب ‌و كارهاي موجود در هر شهرستان بر مبناي
            يک روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب ‌و كار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان یزد
            ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان طوري كه در قسمت مقدمه اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب ‌و كارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب ‌و كارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی هر کشوری است که متاسفانه
            در کشور ما آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل
            های هر شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در
            شهرستان یزد، واحدهای صنعتی زیادی در زمینه های مختلف وجود دارد،
            بطوریکه یزد را به عنوان یک شهر صنعتی معرفی می کنند. در این شهرستان
            کارخانه های بزرگی در حوزه هایی مانند لاستیک سازی، فرش بافی، نساجی،
            تولید کاشی، فولاد و... فعال هستند و بخش بسیار زیادی از نیروی کار
            بومی و غیربومی شهرستان در این صنایع مشغول به کار هستند. با توجه به
            موقعیت جغرافیای مناسب شهرستان و ظرفیت های موجود برخی از صنایع قابل
            گسترش و سرمایه گذاری، بر اساس مصاحبه های صورت گرفته از کارشناسان
            مشاغل شهرستان در زیر ارائه شده است.{" "}
          </p>
          <p>
            صـنعت کاشـی و سرامیک یکی از پر رونق‌ترین صنایع استان یزد می‌باشد و
            نقش مهمی در اقتصاد یـزد ایفـا می کند. وجود کارخانجات، بنگاه‌ها و
            معادن مرتبط با این صنعت در استان، باعث ایجاد رونق در این صنعت شده
            است. تولید و صادرات کاشی در استان یزد رونـد رو بـه رشـدی را در
            سالهای اخیر طی کرده و این تولیدات تبدیل به برندهای معروفی شده‌اند.
            با توجه به امکان صادرات، وجود معادن خاک کاشی و سرامیک در استان یزد و
            نیروی متخصص در شهرستان، گسترش تولید این محصولات دارای مزیت می باشد.
          </p>
          <p>
            صنعت نساجی و تولید پارچه سهم بزرگی در اشتغال زایی در شهرستان یزد
            دارد و این شهرستان به عنوان یکی از قطب های تولید پارچه کشور شناخته
            می شود. انواع پارچه های مختلف به صورت دستی و صنعتی در تولیدی های
            شهرستان تولید می گردد و محصولات آنها در سراسر کشور به فروش می رسند.
            با توجه به سابقه تاریخی پارچه بافی، وجود نیروی متخصص و امکان صادرات
            محصولات باعث شده تا سرمایه گذاری در این صنعت قابل توجیه باشد.
          </p>
          <p>
            با توجه به وجود صنایع مختلف در یزد، ایجاد واحد تولید ظروف پلاستیکی
            می تواند سودده باشد، البته چنین واحدهایی باید توان رقابت با ظروف
            وارداتی از چین را داشته باشند، که این کار مستلزم افزایش کیفیت و
            بازاریابی محصولات می باشد. علاوه بر صنایع بزرگ، صنایع کوچکی مانند
            تولید مصنوعات چوبی، مصنوعات آلومنیومی، کلید سازی و تولید لوازم
            التحریر نیز در شهرستان وجود دارند که با توجه به امکان گسترش آنها،
            دارای مزیت می باشند.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری آنها با توجه به نیاز و ظرفیت منطقه با یکدیگر
            تفاوت هایی دارد. برای مثال گردشگری از فعالیت هایی است که با سودآوری
            بسیاری همراه است و در شهرستان یزد نیز ظرفیت های بسیار خوبی برای
            سرمایه گذاری در زمینه گردشگری وجود دارد. شهر یزد به دلیل معماری خاص
            و وجود اماکن مختلف تاریخی، ثبت جهانی شده و به همین دلیل سالانه
            گردشگران زیادی از نقاط مختلف جهان و کشور به این شهر سفر می کنند.
            اماکن تاریخی مانند مسجد جامع، میدان امیر چخماق، باغ دولت آباد،
            بادگیرها، زندان اسکندر، آتشکده زرتشتیان و... و جاذبه طبیعی کویر یزد
            از نقاط گردشگری مهم شهر یزد محسوب می شوند. طبق گفته های کارشناسان
            حوزه اشتغال شهرستان، امکانات رفاهی مناسبی برای استقبال از گردشگران
            در یزد وجود دارد، اما در برخی از ماه های سال به دلیل حجم زیاد
            گردشگر، این امکانات پاسخگو نبوده و مردم خانه های های خود را به
            گردشگران اجاره می دهند .
          </p>
          <p>
            رستوران‌های بومی، مکان‌هایی با فضای سنتی و متناسب با آداب ‌و ‌رسوم
            هر منطقه هستند که در آن‌ها بیشتر به جای استفاده از میز و صندلی‌های
            مدرن از تخت یا سایر وسایل سنتی استفاده می شود و علاوه بر سرو غذاهای
            محلی، ترشیجات خانگی و نوشیدنی‌هایی مانند چای و قهوه نیز عرضه می
            گردند. رستوران‌ بومی جزء مهم‌ترین نمادهای فرهنگی محسوب می‌شود و می
            تواند در خانه های قدیمی موجود در هر منطقه اجرا شود. بسیاری از
            گردشگران و توریست های غذایی برای امتحان کردن غذاهای مختلف به سفر می
            روند و این مسئله برای مناطق مختلف قابل استفاده و بهره برداری است؛
            بنابراین ایجاد رستوران بومی نیز از کسب و کارهای زود بازده است؛ زیرا
            هم تمایل مردم به سمت سرو غذاهای محلی بیشتر شده و هم معاملات این کسب
            و کار به صورت نقدی انجام می‌شود. در شهرستان یزد نیز میزان استقبال
            گردشگران و مردم بومی از این رستوران ها زیاد است، بنابراین سرمایه
            گذاری در این زمینه دارای مزیت می باشد.
          </p>
          <p>
            در حقیقت پیش از آن که یک گردشگر از شهری بازدید کند، بخشی از جستجوی
            آن‌‌‌‌‌‌ها در مورد این خواهد بود که چگونه نزدیک‌‌‌‌‌‌ترین هتل و
            اقامتگاه را در شهر پیدا کند. حقیقت این است که اگر یک شهر توریستی
            فاقد هتل‌‌‌‌‌‌ و اقامتگاه‌‌‌‌‌‌های استاندارد باشد، احتمالاً
            بازدیدکنندگان (گردشگران) کمتری جذب خواهد کرد. با توجه به حجم زیاد
            گردشگر، احداث هتل های جدید در شهرستان یزد سودده خواهد بود.
          </p>
          <p>
            طبق گفته کارشناسان بخش مشاغل شهرستان یزد، به دلیل وجود پزشکان متخصص
            و بیمارستانهای تخصصی در یزد، تعداد زیادی از مردم استان های نزدیک
            برای درمان به یزد سفر می کنند و از طرفی هم در ایام مختلف تعداد زیادی
            مسافر برای مقاصد مختلف وارد شهرستان می شوند؛ بنابراین ایجاد
            مسافرخانه نیز دارای مزیت می باشد.
          </p>
          <p>
            کویر در شهرستان یزد به عنوان یک جاذبه طبیعی مورد بهره برداری قرار می
            گیرد و در فصل زمستان کمپ های کویرنوردی در این منطقه مورد استقبال
            قرار می گیرند. در کمپ های کویرنوردی خدمات مختلفی مانند ماشین سواری،
            شتر سواری، موتور سواری، کویرگردی و... ارائه می شوند و سالانه تعداد
            زیادی از عاشقان کویر برای تفریح به این مناطق سفر می کنند. با توجه به
            ظرفیت شهرستان و وجود کویرهای زیبا در اطراف آن، گسترش کسب و کارهای
            کویر گردی دارای مزیت است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوانشان روح و جان فرهنگ و هنر به یادگار مانده از نیاکان خویش
            را جاودانه می‌سازند. صنایع دستی نماد فرهنگ اصیل، تاریخ کهن و هنر
            بی‌مثال مردم این سرزمین اسطوره‌ای است. صنایع دستی در شهرستان یزد از
            دیرباز به عنوان یک هنر اصیل و کسب و کاری پررونق همواره مورد توجه
            بوده و در حال حاضر نیز برخی از این هنرهای دستی در سطح صنعتی تولید می
            شوند. در زیر به برخی از این صنایع دستی دارای مزیت گسترش در شهرستان
            اشاره شده است.
          </p>
          <p>
            در زمینه تولید فرش های ماشینی و دستی، یزد یکی از قطب های تولید می
            باشد و کارخانجات بزرگی در این شهرستان با چند برند معروف در حوزه
            تولید قالی در حال فعالیت هستند. علاوه بر فرش دستی، قالی بافی در
            واحدهای کوچک و توسط بانوان انجام می شود که فرش های دستی تولید شده
            آنها با قیمت بیشتری نسبت به فرش ماشینی به فروش می رسند. قالی بافی در
            کارگاه های کوچک و به صورت دستی شامل دریافت تسهیلات و حمایت های دولتی
            می شود و از طرفی نیز شهر یزد یک منطقه گردشگری است و گردشگران خارجی و
            داخلی از هنرهای دستی مانند قالی استقبال خوبی می کنند.
          </p>
          <p>
            ترمه بافی از دیگر هنرهای دستی معروف در شهرستان یزد می باشد که به
            صورت صنعتی و دستی انجام می شود. هنر ترمه بافی همواره مورد توجه
            گردشگران قرار گرفته و به عنوان سوغات شهر یزد مطرح می باشد. پارچه
            ترمه به پارچه ظریف و لطیفی اطلاق می‌شود كه جنس آن از كرك، پشم یا
            ابریشم با طرح‌های اصیل و سنتی ایران است. با توجه به حمایت های دولت
            از صنایع دستی و علاقه گردشگران به خرید این تولیدات، ایجاد و گسترش
            کارگاه های ترمه بافی درارای مزیت می باشند.
          </p>
          <p>
            زیلو بافی یکی از هنرهای دستی با ارزش بوده که نشان از دقت نظر و نگاه
            ظریف و زیبا پسند ایرانیان دارد. این که این هنر نخست از کدام نقطه از
            ایران بزرگ برخاسته به درستی مشخص نیست، اما این هنر زیبا در شهرستان
            یزد کماکان پابرجاست و تولیدات آن زمینه اشتغال افراد زیادی را فراهم
            کرده است. این رشته از صنایع دستی به دلیل ویژگی خاص کاربری، عدم
            وابستگی به فناوری خارج، اشتغال زایی و رابطه با صنعت جهانگردی از
            جایگاه ویژه‌ای برخوردار می باشد. با در نظر گرفتن ظرفیت های یزد و
            علاقه مردم به تولید هنرهای دستی، گسترش زیلوبافی و سرمایه گذاری در
            این زمینه دارای مزیت می باشد.
          </p>
          <p>
            بازار زرگری یزد یکی از اصلی‌ترین جاذبه های تاریخی شهرستان به شمار می
            رود که رونق اقتصادی این شهر در زمینه طلا را نمایان می کند. زیورآلات
            ساخته شده در یزد معمولاً از جنس طلای عیار 20 و به صورت دستی هستند؛
            بنابراین مشتریان زیادی از جنوب کشور و خود شهر یزد دارند. در یزد مردم
            طلای عیار 20 و دست ساز را بیشتر می پسندند؛ به همین دلیل طلاسازی و
            ساخت زیورآلات رونق خوبی در این شهر دارد. بیشتر زیورآلات ساخته شده در
            یزد به سایر استان ها صادر می شود. با توجه به استقبال مردم از خرید
            طلا و کیفیت طلای یزد، گسترش این کسب و کار دارای مزیت می باشد.
          </p>
          <p>
            در شهرستان یزد صنایع دستی دیگری همچون معرق کاری، ساخت تابلو فرش و
            حکاکی روی سنگ نیز وجود دارند که هرکدام به نوعی قابلیت گسترش دارند.
            هنر معرق کاری جزء هنرهای قدیمی و ریشه داری است که در برخی از استان
            های کشور و از جمله یزد انجام می شود. معرق کاری می تواند روی چوب و یا
            کاشی باشد و در اکثر اماکن مذهبی می توان آثاری از هنرمندان این حوزه
            را مشاهده کرد. تابلوفرش نیز یکی از زیر مجموعه های قالی بافی محسوب می
            شود و به دو صورت دستی و ماشینی ساخته می شود. در شهرستان یزد نیز با
            توجه به اینکه هنر قالی بافی بسیار پررونق است، تابلو فرش نیز دارای
            رونق مناسبی می باشد. حکاکی روی سنگ نیز با استفاده از دستگاه لیزر و
            به صورت دستی در یزد انجام می شود. حکاکی معمولا روی سنگ های قیمتی
            انجام می شود و این آثار از قیمت زیادی برخوردارند. با توجه به حضور
            گردشگران و امکان صادرات محصولات هنری ذکر شده، گسترش این صنایع دستی
            دارای مزیت می باشد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی یکی از مهمترین روش ها
            برای ایجاد اشتغال پایدار بوده و عاملی مهم در توسعه پایدار امنیت
            غذایی شهرستان محسوب می‌شود. ایجاد و گسترش صنایع غذایی در شهرستان
            یزد، علاوه بر اشتغالزایی برای مردم شهرستان، باعث ارتقای سطح درآمد
            ارزی کشور نیز می‌شود که کاهش هدررفت محصولات کشاورزی و ایجاد ارزش
            افزوده از منابع را تا حد امکان ممکن می‌سازد.
          </p>
          <p>
            شیرینی‌پزی در یزد سابقه‌ای طولانی دارد و انواع شیرینی‌های سنتی مانند
            باقلوا، قطاب، لوز، نارگیل، پشمک، نان‌برنجی و حاجی بادام در یزد تولید
            می شوند. پخت شیرینی در ابعاد وسیع و کارگاهی و حتی در محیطی کوچک (در
            خانه) امکان پذیر می باشد. شیرینی محصولی است که در انواع متفاوت و با
            طعم های متنوعی تهیه می شود. این کسب و کار را می توان با تجهیزات کم و
            سرمایه پایین شروع کرد و در زمان کوتاه با فروش محصول به سود بالایی
            رسید. پخت شیرینی یکی از مشاغل زودبازده و یک فرصت شغلی مناسب مخصوصاً
            برای زنان خانه دار محسوب می شود. یافتن بازار فروش محصول یکی از
            ضروریات این حرفه می‌باشد که با تبلیغات مناسب مخصوصا در فضای مجازی می
            توان به آن دست یافت. توجه به این نکته ضروری است که یکی از لازمه های
            موفقیت در این شغل گذراندن دوره های آموزشی مرتبط با پخت شیرینی است.
            گسترش کسب و کار شیرینی پزی در یزد با توجه به تنوع محصول، وجود
            گردشگران و امکان صادرات آن، دارای مزیت می باشد.
          </p>
          <p>
            یزد به عنوان قطب تولید نبات در کشور شناخته می شود و کارگاه ها و
            کارخانجات مختلفی در زمینه تولید نبات در این شهرستان مشغول به کار
            هستند. اغلب مصرف کننده های نبات، می دانند که نبات یزد یکی از بهترین
            گونه های نبات ایران بوده و کارخانه یا کارگاه های تولیدی فعال در این
            شهر، هنوز هم به روش های سنتی نبات را تولید می نمایند. گسترش کسب و
            کار تولید نبات با توجه به کیفیت محصول تولیدی و بازارپسندی آن در
            شهرستان یزد دارای مزیت است.
          </p>
          <p>
            با توجه به تولید انار تولیدی در شهرستان، فرآوری انار سودآور خواهد
            بود. فرآوری انار شامل تهیه رب انار، سس انار، آب انار، شربت انار،
            مربا، مارمالاد، ژله انار، نوشابه، بستنی انار، ترشی، سرکه و لواشک
            انار است که با استقبال خوب، بازار مناسب و ارزآوری همراه خواهد بود.
            فرآورده‌های حاصل از انار تنها به محصولاتی که بیان شد محدود نمی شوند،
            بلکه فراورده های بسیار باارزش دیگری نیز به نام روغن هسته انار می
            توان تولید کرد که خواص درمانی فوق العاده‌ای نیز برای بدن دارد.
            متاسفانه بسیاری از مردم از خواص شگفت انگیز روغن هسته انار بی اطلاع
            هستند و با تبلیغات صحیح باید بازار فروش این محصول را گسترده تر کرد.
            البته روغن هسته انار در خارج از کشور نیز بازار فروش خوبی دارد و می
            توان روی صادرات آن کار کرد و سود اقتصادی بالایی را به دست آورد.
            علاوه بر هسته انار، پوست آن نیز قابل فرآوری است و می توان پودر شده
            آن را مورد استفاده قرار دارد. از آنجایی که پودر پوست انار خواص زیادی
            دارد و مردم کشورهای جهان از آن استفاده می کنند کشورهایی که دارای
            انار مرغوب هستند پوست آن را با دستگاه های خشک کن خشک می کنند و به
            کشورهایی صادر می کنند که این محصول را تقاضا کرده اند و مردم آن
            کشورها از این طریق می توانند از پودر پوست انار مرغوب استفاده کنند.
            قیمت پودر پوست انار در بازار جهانی مشخص می شود و به دلیل ارزش بالای
            این محصول از قیمت بالایی برخوردار است. پودر پوست انار علاوه بر اینکه
            در ساخت لوازم آرایشی و بهداشتی کابرد دارد، در درمان گلودرد، تقویت
            سیستم گوارشی، تقویت لثه و... موثر است.
          </p>
          <p>
            تولید لبنیات در یزد به صورت سنتی و صنعتی انجام می شود. شیر و فرآورده
            هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان است که از لحاظ
            ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز و پروتئین، غنی
            می‌باشد و همیشه استقبال بسیار خوبی از این نوع محصولات می شود. البته
            باید توجه داشت برای موفقیت در زمینه تولید لبنیات باید به بالا بردن
            توانایی در زمینه رقابت با نشان‌های تجاری معروف نیز فکر کرد. وجود
            امکانات مناسب، موقعیت شهرستان یزد و پویایی صنعت در این شهرستان،
            تأسیس واحدهای تولید لبنیات را مزیت دار می کند.
          </p>
          <p>
            نان به عنوان یکی از ارکان اصلی تأمین احتیاجات غذایی انسان در طول
            تاریخ از اهمیت ویژه ای برخوردار بوده است. در چند سال اخیر مصرف نان
            به دلایل متعدد از جمله بالا رفتن هزینه سایر مواد غذایی افزایش قابل
            ملاحظه ای یافته و بدیهی است که با توجه به محدودیت منابع و عدم
            امکانات تأمین مواد غذایی می بایست جهت رفع نیازهای تغذیه ای مردم به
            ویژه اقشار کم درآمد از ساده ترین روش جهت تأمین مواد مورد نیاز آن ها
            استفاده شود. در شهر یزد از قدیم کسب و کار نانوایی رواج داشته و
            امروزه نیز واحدهایی برای تولید نان های صنعتی به وجود آمده اند. نان
            صنعتی شامل انواع مختلفی نان مانند نان های رژیمی، غنی شده، نان جو،
            نان شیری و... می باشد و قابلیت بسته بندی و ارسال را نیز دارد. ایجاد
            واحدهای تولید نان صنعتی برای یزد دارای مزیت می باشد.
          </p>
          <p>
            در شهرستان یزد مقدار قابل توجهی خیار تولید می شود که بخشی از این
            تولیدات می تواند جهت ساخت خیارشور مورد استفاده قرار گیرد. تهیه خیار
            شور به صورت سنتی و خط تولید صنعتی امکان پذیر است؛ بنابراین هم به
            عنوان مشاغل خانگی و هم کارگاه صنعتی می توان این کسب و کار را راه
            اندازی کرد. با توجه به وجود گلخانه های تولید خیار و بازارپسندی محصول
            خیارشور ایجاد و گسترش این کسب و کار دارای مزیت می باشد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            اشتغالزایی در رسته باغداری مناسب می باشد و به اقتصاد و فضای کسب و
            کار شهرستان ها رونق می‌بخشد. کشاورزی و از جمله باغبانی در توسعه ملی
            و افزایش رفاه عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه
            شهری، توزیع درآمد و عدالت اجتماعی موثر است. در یک نگاه کلی می توان
            گفت نقش کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در
            برقراری الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این
            بخش، توسعه شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش
            شهرهای بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.
          </p>
          <p>
            اگر چه در شهرستان یزد به واسطه محدودیت منابع آبی و وجود املاح و
            کیفیت پایین آب و کاهش سطح سفره های آب زیرزمینی به دلیل خشکسالی های
            متوالی، بخش کشاورزی با مشکلات و محدودیت هایی مواجه شده است اما با
            این وجود می توان با استفاده از روش های نوین و کاشت محصولات سازگار با
            منطقه اقتصاد کشاورزان را رونق بخشید. در ادامه به نمونه هایی از این
            محصولات قابل تولید در شهرستان یزد پرداخته می‌شود.
          </p>
          <p>
            با توجه به شرایط اقلیمی و نیز محدودیت منابع آبی، شهرستان یزد از
            مناطق مستعد برای توسعه کشت گلخانه‌ای است. گياهان براي داشتن رشد
            مطلوب نياز به شرايط خاصي از نظر شدت نور، دماي روزانه، دماي ‌شبانه،
            ميزان رطوبت نسبي هوا و رطوبت خاک دارند. براي توليد و پرورش تجاري
            گياهان با کيفيت بالا و در تمام طول سال بايد شرايط محيطي مطلوب مهیا
            شده و عوامل خسارت زا نظير آفات و بیماری ها، باد، طوفان هاي ويرانگر،
            سرما و يخبندان و ...کنترل شوند. گلخانه محیطی است که به راحتی می توان
            در داخل آن شرایط محیطی را تحت کنترل درآورد و به سمت رشد مطلوب گیاه
            سوق داد. گلخانه‌ها که از نظر اندازه متغیرند گیاهان را از سرمای بیش
            از حد زمستان یا گرمای بیش از حد تابستان حفظ می‌کنند. کشاورزی در
            گلخانه ها نسبت به کشاورزی در فضای آزاد و در زمین های کشاورزی دارای
            دردسر و مشکلات کمتری است، به علاوه بازه زمانی برای به ثمر نشستن و
            برداشت محصولات نیز نسبت به کشاورزی سنتی، کوتاه تر است؛ اما با این
            وجود پرورش گلخانه ای محصولات نیز نیاز به مراقبت های خاص خود دارد.
            محصولاتی نظیر انواع سبزیجات و صیفی جات همچون خیار، گوجه فرنگی،
            بادمجان، فلفل دلمه ای و... را می توان در محیط گلخانه پرورش داد.
            بازاریابی مناسب و عرضه به موقع محصولات موجب می شود تا بازگشت سرمایه
            سریعتر اتفاق بیفتد و نزدیک شدن به موفقیت سرعت بیشتری بگیرد. طبق
            بررسی های انجام شده و نظر کارشناسان حوزه اشتغال شهرستان، کشت گلخانه
            ای محصولاتی مانند خیار و گوجه در یزد رونق دارد و سالانه محصول زیادی
            از گلخانه‌های این شهرستان برداشت می شود ، با توجه به شرایط آب و
            هوایی یزد و لزوم تولید محصولات باغی از طریق گلخانه، گسترش این کسب و
            کار دارای مزیت است.
          </p>
          <p>
            علاوه بر خیار و گوجه در گلخانه می توان انواع سبزیجات را تولید کرد و
            با توجه به مشکلات کشت سبزی در فضای آزاد، احداث گلخانه سبزیجات در یزد
            دارای مزیت است. از مزیت های پرورش سبزی در گلخانه می توان به برداشت
            سبزی در هر فصلی اشاره کرد. میزان ثمردهی سبزی در گلخانه نسبت به فضای
            آزاد بیشتر است همچنین با توجه به کاشت انواع سبزی و عدم استفاده از
            سموم شیمیایی می توان یک محصول با کیفیت برداشت نمود. مشتری اصلی
            محصول، میادین میوه و تره بار و میوه فروشی ها هستند.
          </p>
          <p>
            طبق گفته کارشناسان حوزه اشتغال یزد، در زمینه کشت انار نیز شهرستان
            یزد ظرفیت خوبی دارد و این امر نشان دهنده پتانسیل بالا برای تولید این
            محصول است ؛ بنابراین به شرط تامین منابع آبی مورد نیاز گسترش باغات
            انار مزیت دارد. نهال انار حداقل سه سال نیاز به رشد دارد و از سال
            چهارم به بعد شروع به باردهی می کند. درخت انار بیش از 40 سال عمر مفید
            داشته و در مقابل کم آبی مقاوم است؛ اما میزان و نوع آب در کیفیت و
            کمیت میوه آن تاثیر مهمی دارد. مصرف انار در سال های اخیر افزایش یافته
            است. خواص این میوه و ابعاد مختلف محصولی آن از دلایل افزایش مصرف آن
            است. از انار در تولید داروهای تقویتی و صنایع آرایشی و بهداشتی
            استفاده می شود. مصرف رب و آب انار نیز از گذشته رواج داشته و در سال
            های اخیر به اشکال متنوع و بهتری انجام می شود. کاشت انار فعالیتی
            درآمدزا است که با ارزیابی نیاز بازار، به روزرسانی فرآیند بسته بندی و
            جابجایی و ... می توان درآمد حاصل از آن را افزایش داد.
          </p>
          <p>
            یکی دیگر از محصولاتی که امکان کشت گلخانه ای دارد، توت فرنگی است که
            در گلخانه های خاکی و هیدروپونیک قابل تولید می باشد. توت فرنگی یکی از
            میوه های گرانقیمت و پرطرفدار در بازار است که علاوه بر مصرف مستقیم
            خوراکی در تولید نوشیدنی ها و شیرینی های مختلف استفاده می شود. در
            شهرستان یزد فعالیت های محدودی در زمینه کاشت گلخانه ای توت فرنگی
            انجام شده و گسترش این کسب و کار دارای مزیت می باشد.
          </p>
          <p>
            در شهرستان یزد پرورش قارچ نیز به صورت محدود انجام می شود که گسترش
            کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته باشد.
            فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی دارای مزیت
            خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین امر باعث شده که
            جایگزین مناسبی برای گوشت باشد. در برخی از شهرها و روستاها به دلیل
            عدم آشنایی با فواید قارچ، میزان مصرف این محصول پایین است که می توان
            با تبلیغ و معرفی این محصول، میزان مصرف را افزایش داد. همچنین پرورش
            قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک شروع
            کرد.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            امروزه یکی از معیارهای پیشرفت جوامع، وضعیت تغذیه به ویژه تغذیه
            پروتئین توسط افراد آن جامعه است. وظیفه متخصصین علوم دامی تولید
            پروتئین با حداکثر کیفیت و عملکرد و حداقل هزینه و بار محیطی می باشد.
            فراورده های طیور از مهم ترین منابع پروتئینی در اغلب کشورها هستند، به
            طوری که تولید و مصرف آن ها در اغلب کشورها با سرعت روز افزون در حال
            افزایش است. در این زمینه برای پرورش برخی از طیور شرایط مساعدی در
            شهرستان یزد وجود دارد اما نکته مهم و قابل توجه، بازاریابی جهت فروش
            محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می تواند
            زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه صنعتی
            فراهم نماید؛ بنابراین طیوری که به آن پرداخته می شوند، به شرط
            بازازیابی مناسب مزیت پرورش دارند.
          </p>
          <p>
            پرورش بلدرچین در یزد انجام می شود و به طور کلی استان یزد یکی از قطب
            های تولید این پرنده می باشد. بلدرچین پرنده ای با جثه کوچک است که در
            برابر بسیاری از بیماری ها مقاوم است. پرورش بلدرچین به دلیل هزینه های
            جاری پایین، اشباع نبودن بازار فروش، کوتاه بودن دوره پرورش (40 روز) و
            عدم پرورش انحصاری توسط شرکت های بزرگ دارای مزیت است. محصولات این
            پرنده شامل گوشت، تخم بلدرچین و کود است. گوشت و تخم این پرنده دارای
            ارزش غذایی و دارویی و همچنین سرشار از پروتئین است. باتوجه به سازگاری
            بلدرچین با آب و هوای یزد و بازار فروش مناسب آن، گسترش این کسب و کار
            دارای مزیت می باشد.
          </p>
          <p>
            در شهرستان یزد پرورش کبوتر برای تولید گوشت نیز انجام می شود و این
            پرنده گوشت بسیار لذیذی نیز دارد . کبوترهای گوشتی با انواع زینتی آن
            که به طور معمول در پشت بام ها پرورش داده می شوند، متفاوت است و وزن
            آنها به یک کیلوگرم نیز می رسد. گوشت کبوتر دارای پروتئین زیاد، هضم
            آسان و کلسیم زیاد می باشد و برای مصرف سالخوردگان و بچه ها بسیار
            مناسب می باشد.
          </p>
          <p>
            از دیگر پرندگانی که در یزد پرورش داده می شود، می توان به کبک اشاره
            کرد که گوشت آن همچون گوشت بلدرچین مورد استقبال مردم قرار گرفته است.
            محصولات کبک نسبت به دیگر طیور به دلیل طعم و کیفیت مناسب و قیمت
            بیشتر، مشتریان خاص خود را دارد. از جهت دیگر به دلیل مقاومت نسبتاً
            بالای این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به دیگر پرندگان
            کمتر است. با پرورش کبک به‌صورت صنعتی می‌توان بخشی از نیاز کشور در
            حوزه گوشت را تأمین کرد و از میزان واردات به داخل کشور کاست. همچنین
            می‌توان به بازار جوجه و تخم کبک اشاره نمود که قابلیت تولید و عرضه را
            دارد.
          </p>
          <p>
            اقلیم شهرستان یزد برای پرورش شترمرغ بسیار مناسب می باشد و گوشت آن
            نیز مورد استقبال مردم این منطقه قرار گرفته است. ظرفیت گسترش واحدهای
            پرورش شترمرغ در شهرستان یزد وجود دارد؛ بنابراین سرمایه گذاری در این
            زمینه دارای مزیت است. شترمرغ در گروه پرندگان طبقه بندی شده و گوشت آن
            جزء گوشت‌های قرمز محسوب می‌شود که نسبت به دیگر گوشت‌های قرمز کم
            چرب‌تر و سالم‌تر است. از پوست شترمرغ در تولید کیف و کفش استفاده می
            شود و علاوه بر آن، از پر و تخم شترمرغ، ناخن و قرنیه چشم آن برای
            مصارف صنعتی، دارویی، زینتی و نیز تولید نخ بخیه استفاده می شود.
            همچنین با استفاده از پوکه تخم این پرنده در زمینه صنایع دستی و خلق
            آثار هنری، می توان اشتغال زایی کرد.
          </p>
          <p>
            پرورش پرندگان زینتی به دلیل مزایایی از قبیل درآمدزایی بالا، بازار
            عرضه و تقاضای خوب، پرورش آسان تر در مقایسه با سایر ماکیان و نیاز به
            سرمایه و تجهیزات پایین توانسته مقبولیت گسترده‌ای را در بین افراد
            جامعه پیدا کند. این قبیل از کسب ‌وکارها به‌خوبی توانسته‌اند
            زمینه‌ساز ظهور فرصت‌های شغلی درآمدزا و زودبازده باشند. در همین راستا
            پرورش‌دهنده با اجرا و پیاده‌سازی طرح پرورش پرندگان زینتی می‌تواند در
            کنار اشتغال‌زایی و به حرکت درآوردن چرخ‌های اقتصادی منطقه به سود
            دلخواه خود هم‌دست یابد. در شهرستان یزد نیز فرصت های مناسبی برای
            ایجاد این کسب و کار به عنوان مشاغل خانگی وجود دارد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            از آن جایی که حوزه دامداری با یکی از مهم ترین نیازهای انسان، یعنی
            نیاز به منابع غذایی و خصوصاً منابع پروتئینی مرتبط می‌باشد، توجه به
            آن امری ضروری است. فعالیت در این حوزه شغلی و افزایش بهره وری در آن،
            می تواند عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی در این
            شهرستان محسوب شود.
          </p>
          <p>
            در شهرستان یزد پرورش گاو بیشتر در واحدهای صنعتی انجام می شود و گوشت
            و شیر تولیدی نیز در شهرستان و استان مصرف می شوند. ایجاد واحدهای جدید
            پرورش گاو می تواند این شهرستان را از نظر تولید لبنیات و گوشت خودکفا
            کند. در واحدهای صنعتی شهرستان یزد بیشتر از گاوهای پرتولیدی مانند
            نژاد هلشتاین استفاده می شود.{" "}
          </p>
          <p>
            یزد استعداد بسیار خوبی برای پرورش شتر دارد زیرا هم شرایط اقلیمی
            مناسب است و هم بازارپسندی محصولات شتر در این مناطق زیاد می باشد.
            علاوه بر این ها مرکز تحقیقات شتر تک کوهانه در شهرستان بافق در استان
            یزد واقع شده که خود یک مزیت بسیار مناسب برای گسترش این کسب و کار
            است. پرورش شتر نسبت به سایر دام ها مزیت‌هایی مانند قابلیت سازگاری با
            شرایط سخت محیطی مناطق خشک و نیمه خشک، تحمل گرما، کم آبی و کیفیت
            پایین علوفه و مقاومت نسبی در مقابل امراض و عوامل بیماری زا دارد.
            همچنین شتر در مقایسه با سایر دام های اهلی علوفه را با قابلیت هضم
            بالا و بازده بیشتری استفاده می نماید و قادر است از انواع خاص گیاهان
            مرتعی (خشبی، خاردار و تیغ دار) به میزانی استفاده نماید که سایر دام
            ها قادر به استفاده از آن نیستند. از دیگر فواید پرورش شتر، حداقلِ
            نیاز به تاسیسات، تجهیزات و امکانات پرورش و نگهداری و در نتیجه کمترین
            نیاز به سرمایه گذاری سنگین را دارد. گوشت شتر منبع بسیار خوبی برای
            بسیاری از مواد غذایی مهم و مورد نیاز بدن می‌ باشد. سازمان جهانی غذا
            و دارو شیر شتر را جزو سالم‌ترین شیر حیوانی جهان شمرده است و به ‌دلیل
            خواص زیاد شیر شتر برخی محققان به آن طلای سفید بیابان می‌گویند.
          </p>
          <p>
            در یزد پرورش بز شیری از نژادهای سانن و مورسیا انجام می شود و این دام
            ها به دلیل تولید شیر زیاد و چندقلوزا بودن، مورد توجه دامداران و
            سرمایه گذاران قرار گرفته‌اند. جثه کوچک، کم توقع بودن و مقاومت در
            برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز به‌عنوان حیوانی
            محبوب در بین دامداران تلقی شود. در نقاط مختلف از این حیوان علاوه بر
            تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز استفاده می‌شود. بز
            سانن یک نژاد شیری پرتولید است که نسبت به بزهای بومی، تولید شیر بسیار
            بیشتری دارد و می‌تواند بخشی از نیاز کشور به شیر و پروتئین حیوانی را
            تأمین نماید. کسب و کار پرورش بز سانن موجب اشتغال‌زایی و رغبت بیشتر
            جوانان به امر دام‌پروری می‌شود. هر کیلوگرم شیر بز با قیمت بیشتری
            نسبت به شیر گاو فروخته می‌شود و در نقاط مختلف کشور طرفداران خاص خود
            را دارد. بز مورسیا نیز یک نژاد شیری است که از کشور اسپانیا وارد می
            شود و رنگ بدن آن سیاه می باشد. بز مورسیا مقاومت بیشتری نسبت به آب و
            هوای گرم دارد و گزینه مناسبی جهت پرورش در شهرستان یزد است.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            بررسی‌ها نشان می‌دهد که سالانه مقداری از محصولات کشاورزی در مراحل
            کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند، از سوی دیگر برداشت و یا
            تولید بسیاری از محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛
            اما مصرف آن‌ها در طی سال صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی
            می‌تواند زمان استفاده از محصولات را افزایش دهد و از میزان ضایعات آن
            بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و
            جلوگیری از اتلاف و ضایع شدن محصولات در این شهرستان خواهد شد.
          </p>
          <p>
            در شهرستان یزد تعداد زیادی گلخانه خیار، گوجه و سبزیجات وجود دارد و
            می توان تولیدات آنها را بسته بندی و به نقاط دیگر ارسال کرد. بسته
            بندی انواع محصولات گلخانه ای جهت کاهش ضایعات و صادرات آنها امری
            ضروری است که امروزه طبق برنامه ریزی مناسب و با استفاده از تجهیزات
            مدرن انجام می‌شود.
          </p>
          <p>
            لازم به ذکر است که در صورت دقت نکردن به بازار فروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد؛
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازار فروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی،
            ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام برد. در
            شهرستان یزد به دلیل کم آبی و خشک سالی های متوالی بخش زراعت با مشکلات
            زیادی روبه رو بوده و کشت اکثر محصولات زراعی مقرون بصرفه نیست؛ اما
            برخی گیاهان مقاوم به کم آبی و شوری، در این مناطق قابل کشت هستند. در
            زیر گیاه کنجد بعنوان یک گزینه مناسب جهت کشت در شهرستان یزد معرفی شده
            است.
          </p>
          <p>
            کاشت کنجد به دلیل سازگاری محیطی، بازدهی بالا، مفید بودن برای خاک،
            نیاز به سرمایه اولیه کم و بازاریابی آسان، گزینه شغلی مناسبی برای
            کشاورزان است. کنجد از آن دسته از گیاهانی محسوب می شود که با هر بار
            کشت و پرورش، محصول و بار قابل توجهی را به ارمغان می آورد. یکی دیگر
            از مزایای کاشت کنجد، صرفه جویی در منابع آب است. این گیاه قادر است تا
            با جذب رطوبت باقیمانده در خاک رشد کند و همین امر موجب سازگاری کنجد
            با آب و هوای گرم می شود. ریشه های کنجد در بهبود ساختمان خاک و افزایش
            نفوذپذیری آن نقش موثری داشته و به عنوان یکی از گیاهان مناسب برای
            تناوب‌های زراعی در نظر گرفته می شود. همچنین در بعضی از مناطق این
            گیاه به عنوان کود سبز کاشته می شود. کنجد در روغن کشی (کنجد و ارده)،
            نانوایی و آجیل فروشی ها، تهیه عطرها، به عنوان حلال در داروسازی و...
            مورد استفاده قرار می‌گیرد. صادرات ارزش افزوده و فرآوری های کنجد، می
            تواند هدف تولید انبوه کشاورزان باشد، از همین رو نگرانی‌ها برای
            بازاریابی این محصول نسبت به سایر محصولات کمتر است. با توجه به رونق
            صنعت شیرینی پزی در شهرستان یزد و کاربرد زیاد کنجد در این صنعت، کشت
            این محصول سودآور خواهد بود.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در کشور ما
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور به همراه خواهد شد. طبق گفته کارشناسان بخش مشاغل
            شهرستان یزد، فعالیت خاصی در زمینه شیلات در این شهرستان صورت نمی
            گیرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
