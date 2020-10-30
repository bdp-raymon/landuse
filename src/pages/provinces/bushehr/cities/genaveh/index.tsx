import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-07"].cities["IR-0710"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        birds: "طیور",
        gardening: "باغداری",
        fisheries: "شیلات",
        agriculture: "زراعت",
        services: "خدمات",
        food_industry: "صنایع غذایی",
        industry: "صنعت",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان گناوه یکی از شهرستانهای استان بوشهر بوده و مرکز آن بندر
            گناوه است. این شهرستان با مساحتی حدود 183.7 کیلومترمربع، دارای دو
            بخش، دو دهستان و دو شهر با پنجاه و یک آبادی است. شهرستان گناوه در
            ساحل شمالی خلیج فارس قرار دارد. این شهرستان از شمال غربی به شهرستان
            دیلم، از شمال شرقی به استان فارس، از مشرق به شهرستان دشتستان، از
            جنوب به شهرستان بوشهر و از مغرب به خلیج فارس منتهی می‌شود. جمعیت این
            شهرستان مطابق با آخرین سرشماری نفوس و مسکن،102484 نفر برآورد شده
            است. با توجه به استقرار شهرستان گناوه در منطقه فوق حاره‌‌ای،
            مهم‌ترین پدیده و فرآیند مشهود اقلیمی آن گرمای هواست. این ناحیه تحت
            تأثیر فشار زیاد عرض‌های متوسط قرار دارد و فاقد بارندگی قابل توجه
            است، ولی فرآیند تبخیر آن به علت طولانی بودن فصل گرما شدت و حدت
            بیشتری دارد. در فصل زمستان به دلیل هجوم و گسترش جبهه‌های هوای سرد
            شمالی و دریای مدیترانه به سمت شرق، آب و هوای مناسبی توأم با ابر و
            باران به ‌وجود می‌آید. به ‌طور کلی آب و هوای شهرستان گناوه در نوار
            ساحلی گرم و مرطوب و در قسمت‌های داخلی گرم و خشک صحرایی است. متوسط
            دمای سالانه شهرستان ۲۴ درجه سانتیگراد است که بیشترین مقدار آن در
            تابستان حدود ۵۰ درجه سانتی گراد و کمترین مقدار آن در زمستان حدود ۶
            درجه سانتی گراد ثبت شده است. دمای هوا در سردترین ماه‌های سال به ندرت
            به صفر درجه می‌رسد. گرمای متوسط خنک‌ترین ماه‌های این منطقه یعنی
            دی‌ماه ۱۵ درجه گزارش شده است. شکل زیر موقعیت شهرستان گناوه را نشان
            می دهد.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب ‌وكارهاي موجود در هر شهرستان بر مبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌ وكار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده ‌شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. یكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده‌
            است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد. بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان گناوه
            ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان‌طوري‌كه در قسمت قبل اشاره‌ شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب ‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب ‌وكارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری یکی از مشاغل رایج در شهرستان گناوه است و با یکی از مهم ترین
            نیازهای انسان، یعنی نیاز به منابع غذایی و خصوصا منابع پروتئینی مرتبط
            می‌باشد، که توجه به آن امری ضروری است. فعالیت در این حوزه شغلی و
            افزایش بهره وری در آن، می تواند از راهکارهای توسعه اقتصادی و عاملی
            برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب شود. درصد بالایی از
            مردم این شهرستان به دامداری مشغول هستند. دامداری در این شهرستان
            عمدتا به هردو صورت سنتی و صنعتی انجام می شود. دام هایی همچون گاو،
            گوسفند، بز و زنبور عسل در حال حاضر پرورش داده می شوند.
          </p>
          <p>
            در شهرستان گناوه، گاوهای نژاد بومی و دورگ هلشتاین-بومی پرورش داده می
            شوند و توسعه پرورش دام های ذکر شده در این شهرستان مزیت دارد. گاوهای
            بومی به دلیل سازگاری بالا به شرایط محیطی و بیماریهای شایع در منطقه،
            نقطه قوت خوبی جهت پرورش دارند و درصورت پرورش گاوهای بومی تلفات در
            گله بسیار پایین بوده و از علوفه های با کیفیت پایین می توان برای
            تغذیه آنها استفاده نمود. هر چند که عملکرد این نوع گاوها در مقایسه با
            نژادهای دورگ هلشتاین-بومی پایین است، ولی قیمت کمتری داشته و سرمایه
            گذاری کمتری نیز برای راه اندازی یک گاوداری بومی مورد نیاز است.
          </p>
          <p>
            امروزه پرورش گاوهای دورگه نژاد هولشتاین-بومی در شهرستان در حال رایج
            شدن است. علت این امر وجود عملکرد بالای گاو هلشتاین و همزمان سازگاری
            گاو نژاد بومی در گاوهای دورگ می باشد که دامدار را با تلفات کمتر
            مواجه کرده و گاو دورگ سازگاری خوبی با شرایط منطقه دارد. هرچند میزان
            سرمایه گذاری برای این نوع از گاوها بسیار بیشتر از گاوهای بومی است،
            ولی در مقابل میزان سوددهی نیز بیشتر بوده و عملکرد گاوها قابل پیش
            بینی تر است.
          </p>
          <p>
            در کل گاوها به عنوان یکی از بزرگترین منابع تامین گوشت قرمز و لبنیات
            در شهرستان گناوه مطرح بوده و حمایت های خوبی از طرف دولت در جهت احداث
            گاوداری صورت میگیرد. نیاز روزافزون به منابع پروتئینی همچون گوشت گاو
            در شهرستان و کل کشور رو به افزایش است و همین امر ایجاد گاوداری های
            جدید را در شهرستان گناوه موجه می کند و هر میزان تولید از نظر فروش
            مشکلی نخواهد داشت. از این رو می توان بر روی پرورش گاو های نژاد بومی
            یا دورگ در شهرستان اقدام کرد.
          </p>
          <p>
            در شهرستان گناوه، پرورش گوسفند بومی نسبت به سایر دام ها، بیشتر مورد
            توجه دامداران قرار گرفته است؛ زیرا توان گوسفند بومی برای تحمل اقلیم
            های متفاوت شهرستان بیشتر است و جیره غذایی کمتر و در نتیجه هزینه
            کمتری نیز دارد. همچنین تمامی فرآورده های دامی مانند گوشت، شیر، ماست،
            کره و حتی پشم و پوست دام پرکاربرد هستند و فروش این فرآورده ها در
            تمامی روزهای سال انجام می‌شود. قیمت گوشت گوسفند بالا است و به علاوه
            اجزای گوسفند مانند دل، قلوه، جگر، سیرابی، کله پاچه و خوش گوشت نیز
            قابل فروش هستند. خرید دام برای قربانی کردن در ایام مذهبی مانند عید
            قربان موجب رونق این کسب و کار می‌شود؛ بنابراین گسترش پرورش گوسفند
            سوددهی خوبی را در شهرستان به همراه خواهد داشت.
          </p>
          <p>
            بزهای پرورشی در این شهرستان بیشتر از نوع بومی هستند و قابلیت توسعه
            پرورش آن‌ها در شهرستان وجود دارد. با توجه به وجود فصل گرم و تمایل
            بزهای بومی برای چریدن در مناطق مختلف شهرستان، به نظر می رسد، پرورش
            بز بومی در شهرستان از امتیاز خوبی نسبت به برخی دام های دیگر برخوردار
            باشد. به طورکلی بز به‌ عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر
            و گوشت در مناطق مختلف شهرستان پرورش داده می‌شود. جثه کوچک، کم توقع
            بودن و مقاومت در برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز
            به ‌عنوان حیوانی محبوب در بین دامداران شهرستان گناوه نیز تلقی شود.
          </p>
          <p>
            با توجه به آب هوای شهرستان و منابع طبیعی فراوان، فعالیت در حوزه
            زنبورداری برای شهرستان مزیت خوبی دارد. این مسئله باعث شده ارزش
            اقتصادی پرورش زنبور عسل بسیار بیشتر از ارزش ریالی حاصل از تولید عسل
            باشد. در طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد کندوها می
            توان به فروش کندو نیز فکر کرد و به سود خوبی دست یافت. در ضمن محصول
            مزرعه پرورش زنبور عسل صرفاً کندو و عسل نیست، بلکه موم، زهر و ژل آن
            نیز قابلیت فروش دارد. در نتیجه افزایش این فعالیت در شهرستان دارای
            توجیه اقتصادی مناسبی است و می توان این فعالیت را به میزان بیشتری
            انجام داد.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            امروزه یکی از معیارهای پیشرفت جوامع، وضعیت تغذیه به ویژه تغذیه
            پروتئین توسط افراد آن جامعه است. وظیفه متخصصین علوم دامی تولید
            پروتئین با حداکثر کیفیت و عملکرد و حداقل هزینه و بار محیطی می باشد.
            فراورده های طیور از مهم ترین منابع پروتئینی در اغلب کشورها هستند، به
            طوری که تولید و مصرف آن ها در اغلب کشورها با سرعت روز افزون در حال
            افزایش است. در این زمینه برای پرورش بسیاری از طیور شرایط مساعدی در
            شهرستان گناوه وجود دارد، اما نکته مهم و قابل توجه، بازاریابی جهت
            فروش محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می
            تواند زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه
            صنعتی فراهم نماید؛ بنابراین طیوری که در ادامه به آن ها پرداخته می
            شوند، به شرط بازاریابی مناسب مزیت پرورش دارند.
          </p>
          <p>
            با وجود اینکه بالغ بر بیست مرغداری صنعتی در شهرستان گناوه وجود دارد،
            ولی شهرستان فاقد کشتارگاه مرغ می باشد و مرغ شهرستان جهت کشتار به
            شهرستان دشتستان منتقل می شوند. ولی به تازگی یک کشتارگاه طیور در سطح
            شهرستان درحال احداث می باشد تا نیاز شهرستان را برطرف کند؛ از این رو
            به نظر می رسد فرصت خوبی برای احداث واحدهای جدید پرورش مرغ در شهرستان
            ایجاد شده است. همانطور که بیان شد، مرغ از جمله طیوری است که در این
            شهرستان توجه خوبی به پرورش آن شده است. مرغداری های موجود در این
            شهرستان به پرورش مرغ گوشتی می پردازند و می توان نسبت به توسعه پرورش
            آن ها اقدام کرد. گوشت مرغ به سبب مزیت‌های فراوانی که دارد به عنوان
            منابع تامین پروتئین می تواند مطرح و نیاز عمومی منطقه و کشور را در
            این زمینه مرتفع نماید. ارزش غذایی بالای گوشت طیور، کم بودن افت پس از
            کشتار، سالم و بهداشتی بودن گوشت طیور، قابلیت هضم و جذب بالا، سرعت
            رشد سریع، صرفه جویی در جایگاه و زمین و دوره بازگشت سرمایه سریع از
            فواید پرورش مرغ گوشتی است.
          </p>
          <p>
            از طیور دیگری که پرورش آن در شهرستان رواج یافته و بازار خوبی برای
            گوشت آن در داخل شهرستان و کشورهای خارجی ایجاد شده است می توان به
            بلدرچین اشاره کرد. از این رو پرورش آن دارای مزیت خواهد بود. بلدرچین
            پرنده ای با جثه کوچک، در برابر بسیاری از بیماری ها مقاوم است. پرورش
            بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن بازار فروش، کوتاه
            بودن دوره پرورش(40 روز) و عدم پرورش انحصاری توسط شرکت های بزرگ دارای
            مزیت است. محصولات این پرنده شامل گوشت، تخم بلدرچین و کود است. گوشت و
            تخم این پرنده دارای ارزش غذایی و دارویی و همچنین سرشار از پروتئین
            است.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج در شهرستان گناوه است. تولید اشتغال توسط
            رسته باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار
            رونق می‌بخشد. کشاورزی و از جمله باغبانی در توسعه ملی و افزایش رفاه
            عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع
            درآمد و عدالت اجتماعی موثر است. در یک نگاه کلی می توان گفت نقش
            کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری
            الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه
            شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای
            بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.
          </p>
          <p>
            در گناوه روستایی به نام مال محمود و چابهار وجود دارد که قطب سبزی
            منطقه است و شغل نود درصد مردم این روستا سبزیکاری است و سبزی کل منطقه
            گناوه را تامین می کنند . ازطرفی نزدیکی شهرستان به کشورهای همسایه
            خلیج فارس و دسترسی به آب های آزاد باعث شده است تا ظرفیت برای کاشت
            بیشتر سبزیجات در این شهرستان فراهم باشد و مزیت خوبی داشته باشد.
          </p>
          <p>
            در شهرستان گناوه، صیفی جاتی نظیر خیار در فضای آزاد کشت می شوند. با
            توجه به نیاز بازار برای مصرف تازه خوری این محصول و امکان فرآوری آن
            در کارخانجات مختلف، توسعه کشت آن پیشنهاد می شود. نزدیکی شهرستان
            گناوه به بازار بزرگ مصرفی همچون شهر بوشهر، باعث شده است تا طرح کاشت
            خیار از توجیه اقتصادی بیشتری برخوردار باشند. خیار در سبد غذایی مردم
            نقش بسیار مهمی داشته و بسیاری از ویتامین های مورد نیاز بدن را تامین
            می کند و در بسیاری از غذاها بصورت سالاد مورد استفاده قرار می‌گیرد.
          </p>
          <p>
            خرما از جمله محصولات باغی است که با آب و هوای گرم و اقلیم جغرافیایی
            شهرستان گناوه سازگاری دارد. خرما میوه ای با ارزش غذایی بالا است که
            به علت دارا بودن مواد قندی قابل توجه (حدود 70 درصد) علاوه بر مصرف
            غذایی، در صنعت نیز موارد استفاده فراوان دارد. مصارف مختلف خرما در
            صنعت شامل موارد خوراکی مانند شیره، شهد و شکلات خرما است. همچنین از
            ضایعات آن نیز در ترکیب خوراک دام و طیور و از برگ خرما نیز در ساخت
            انواع ظروف بافتنی و حصیر و از تنه و چوب خرما در کارخانجات نئوپان
            سازی و کاغذ سازی و همین طور پوشش ساختمان ها و پل ها استفاده می کنند.
          </p>
          <p>
            مرکبات تولید شده در این شهرستان بیشتر شامل لیمو می باشد. به دلیل
            بازار فروش خوب لیمو در داخل کشور و همچنین کشور های اطراف برای لیمو،
            مزیت خوبی برای احداث باغات لیمو در شهرستان ایجاد شده است. سازگاری
            درختان لیمو با شرایط آب و هوایی و شرایط خاکی این شهرستان از دیگر
            دلایل مزیت داشتن تولید این نوع میوه در شهرستان می باشد.
          </p>
          <p>
            کاشت آلوئه ورا در چند سال اخیر در شهرستان گناوه انجام شده است. گونه
            های مختلف آلوئه ورا گیاهانی مقاوم به گرما، خشکی، بیماری‌ها، آفات و
            حتی شوری هستند. علت مقاومت زیاد آن ها ساختار مرفولوژیکی این گیاه است
            و بذر آن ها نیز در شرایط اقلیمی مناسب و در دمای 21 درجه سانتی گراد
            سبز می شوند. البته این گیاهان به سرما بسیار حساس هستند؛ به طوری که
            در در دمای زیر 10 درجه سانتی گراد رشد آن ها متوقف می شود. همین شرایط
            رشدی باعث شده است تا شهرستان گناوه یکی از بهترین مکان ها برای کاشت
            این گیاه دارویی تلقی شود و با توجه به سطح زیر کشت آلوئه ورا و نیاز
            داخلی به این گیاه ارزشمند، توسعه کاشت آن در شهرستان پیشنهاد می شود.
          </p>
          <p>
            بامیه در خانواده گیاهان ختمی، چای ترش، کاکائو و پنبه قرار می گیرد.
            این گیاه سازگاری خوبی با شرایط آب و هوایی این شهرستان دارد و به خوبی
            رشد می کند و دارای گل های بزرگی است که در نهایت به گیاه سبز غلاف
            مانندِ پر از دانه تبدیل می شود. بامیه برای مناطق گرمسیری مناسب بوده
            و در مناطق سردسیر، محصول کمتری تولید می کند. با توجه به گرمسیری بودن
            این شهرستان، مزیت خوبی برای این گیاه در شهرستان به وجود آمده است که
            برای سرمایه گذاری قابل پیشنهاد است.
          </p>
          <p>
            در این شهرستان پرورش قارچ نیز به صورت محدود انجام می شود که گسترش
            کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته باشد.
            فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی دارای مزیت
            خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین امر باعث شده که
            جایگزین مناسبی برای گوشت باشد. در برخی از شهرها و روستاها به دلیل
            عدم آشنایی با فواید قارچ، میزان مصرف این محصول پایین است که می توان
            با تبلیغ و معرفی این محصول، میزان مصرف را افزایش داد. همچنین پرورش
            قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک شروع
            کرد. در کل در شهرستان فعالیت جدی در این زمینه نشده است و جای کار
            برای ورود به این عرصه وجود دارد. شاید دلیل موفقیت تولید قارچ در
            شهرستان گناوه را به دسترسی به مواد اولیه ارزان بتوان عنوان کرد.
          </p>
          <p>
            در اولویت بعدی می توان کاشت درخت کنار را برای شهرستان پیشنهاد داد.
            کنار درختی گرمسیری است که به نام های عناب هندی، سیب چینی و رملیک نیز
            شناخته می شود و میوه ای از تیره عنابیان است. حدود 40 گونه کنار در
            جهان وجود دارد که دو نوع کنار آفریقایی و کنار کازرونی یا ایرانی آن
            معروف تر هستند. سازگاری این درخت و وجود بازار فروش مناسب، از عواملی
            هستند که توسعه کاشت این درخت را در شهرستان توجیه می کنند.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی برای آن وجود
            دارد که اگر از این ظرفیت های شیلاتی استفاده شود، ارزآوری بسیار خوبی
            به همراه خواهد شد. در شهرستان گناوه به دلیل داشتن ساحل با دریای خلیج
            فارس، پرورش شیلات به میگو محدود می شود و بیشتر مردم در حوزه شیلات به
            ماهی گیری از دریا مشغول هستند.
          </p>
          <p>
            این شهرستان قطب آبزی‌پروری کشور در زمینه پرورش میگو است و
            سرمایه‌گذاران از این بخش استقبال خوبی کرده‌اند. شهرک شیلاتی رودشور
            اولین و بزرگ‌ترین سایت پرورش میگو در کشور در این شهرستان قرار دارد و
            زیرساخت‌های آن شروع شده است . شهرستان گناوه حدود 30 درصد از میگوی
            استان بوشهر را تولید می کند و سالانه در این شهرستان حدود 4 هزار و
            334 تن میگو تولید می شود. پرورش میگو در سایت های ریگ، رودشور جنوبی و
            حله به مساحت یک‌هزار و 513 هکتار و در 1300 استخر انجام می شود . با
            توجه به قطبیت شهرستان در تولید میگوی کشور و بازار فروش خوب این محصول
            برای مصرف در داخل کشور و بازارهای صادراتی، نشان از مزیت خوب پرورش
            میگو در شهرستان را داشته و توسعه پرورش میگو در شهرستان گناوه پیشنهاد
            می شود. میگو از جانوران آبزی است که جزو شاخه بندپایان و رده سخت
            پوستان است. میگو از خواص فراوانی برای بدن برخوردار است که حفظ سلامت
            پوست، مو و ناخن، جلوگیری از کم خونی، کاهش خطر افسردگی، کاهش خطر کم
            کاری تیروئید، جلوگیری از سرطان و تقویت استخوان ها برخی از این خواص
            هستند.
          </p>
          <p>
            ماهی به خاطر خواص غذایی که دارد همیشه از غذاهایی است که برای سلامتی
            بدن مفید بوده و مورد علاقه افراد بسیاری است. با توجه به شرایط
            شهرستان گناوه، بسیاری از افراد ماهی گیری را به عنوان منبع درآمد خود
            انتخاب کرده اند. در شهرستان گناوه این فعالیت بیشتر به صورت سنتی است
            و با استفاده از روش هایی که نسل به نسل انتقال داده شده است و با
            تورهایی که در کف دریا و یا عمودی قرار می دهند، صورت می گیرد.
            ماهیگیران سنتی به صورت آزادانه کار می کنند و شرایط و قوانینی به شدت
            ماهیگیران تجاری ندارند، ولی شاید میزان صید هفته ها و ماه های آنها به
            اندازه یک بار صید ماهیگیری به روش صنعتی و با استفاده از روش های نوین
            نباشد. در سال‌های اخیر برای ماهیگیران به خصوص ماهیگیران تجاری،
            محدودیت هایی گذاشته شده است؛ زیرا صید بی رویه آنان باعث صدمه زدن به
            زیستگاه بسیاری از موجودات دریایی می شود. با توجه به بازار فروش خوب
            ماهی در شهرستان و کشور و وجود کارخانه‌های بزرگ فرآوری کننده گوشت
            ماهی در سراسر کشور، میزان تولید قابل افزایش بوده و از طرفی با توجه
            به دسترسی شهرستان به آب های آزاد، از این رو می توان شغل ماهیگیری را
            در این شهرستان به افراد علاقه مند پیشنهاد داد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی،
            ارزآوری و تامین مالی سایر بخش‎های زیربنایی را نام برد. در شهرستان
            گناوه بیشتر آب مورد نیاز در زمینه کشاورزی را از طریق چاه و سد به دست
            می آورند. با توجه به نظر کارشناسان، کاشت گندم، جو، یونجه و در اولویت
            های پایین تر کاشت پیاز در شهرستان در حوزه زراعت دارای مزیت می باشد.
          </p>
          <p>
            ۷۰ درصد از زراعت گندم و جو در شهرستان به صورت دیم انجام می‌شود و ۳۰
            درصد آن به صورت آبی می باشد و درحالت آبی، بازدهی بیشتر است . در میان
            محصولات کشاورزی، کاشت گندم نسبت به بقیه کم دردسرتر است.گندم در بازه
            زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سوددهی می رسد و در دو
            نوع بهاره و پاییزه کشت می شود که محصول دهی پاییزه آن بیشتر است.
            علاوه بر خود گندم، کاه آن نیز مشتری خاص خودش را دارد. بعد از برداشت
            محصول، زمین آن هم چراگاه گوسفندان می‌شود. همچنین مورد حمایت های دولت
            واقع شده و کود شیمیایی و بذر نیز به شکل یارانه ای در اختیار کشاورزان
            قرار می گیرد؛ بنابراین توسعه این کشت توجیه اقتصادی خوبی در شهرستان
            گناوه دارد.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            استفاده می شود و در تهیه غذای کودک نیز کاربرد دارد. جوشانده جو داروي
            خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین آورنده
            کلسترول است. کاشت این گیاه زراعی در کنار گندم، در این شهرستان رایج
            بوده و با توجه به سازگاری خوب برخی ارقام جو برای شرایط شهرستان،
            امکان استفاده از اراضی دیم وجود دارد. بازار فروش مطمئن، کاشت، داشت و
            برداشت مکانیزه، از عواملی است که باعث ایجاد مزیت برای کاشت این گیاه
            شده و با توجه به تولید پایین جو در کشور نسبت به میزان مورد نیاز،
            توسعه کاشت این محصول پیشنهاد می شود.{" "}
          </p>
          <p>
            شهرستان گناوه در زمینه تولید علوفه های دامی مانند یونجه نیز وضعیت
            خوبی دارد. این محصول را می توان به میزان بیشتری در شهرستان تولید و
            کسب سود کرد. در میان گیاهان علوفه ای، یونجه به دلیل ارزش غذایی بالا
            و عملکرد خوب آن از اهمیت خاصی برخوردار است. همچنین یونجه به علت وجود
            باکتریهای ریزوبیوم در ریشه های خود قادر به تثبیت ازت هوا بوده و به
            این طریق باعث باروری خاک می شود. از طرفی دیگر یونجه گیاهی چندساله
            است و تا چند سال می توان آن را برداشت کرد؛ بنابراین توسعه کشت یونجه
            توجیه اقتصادی داشته و امکان تامین بخشی از علوفه مورد نیاز دام، فراهم
            می‌شود که علاوه بر ایجاد اشتغال مولد و حصول درآمد مناسب برای زارعین،
            در استفاده بهینه از ظرفیت های پرورش دام نیز موثر خواهد بود و نیاز
            شهرستان برای وارد کردن نهاده های مورد نیاز دام از سایر مناطق را
            برطرف خواهد کرد.
          </p>
          <p>
            در ادامه می‌توان به توسعه سطح زیر کشت پیاز اشاره کرد که تاکنون
            عملکرد خوبی در شهرستان داشته است و در صورت مدیریت منابع آبی، گزینه
            مناسبی برای اشتغالزایی و سوددهی است. پیاز از جمله محصولاتی است که در
            اکثر غذاها مورد استفاده قرار می گیرد و فرهنگ مصرف بالایی دارد. در
            شهرستان گناوه مناطق و زمین های کشاورزی سیار خوبی برای کاشت این محصول
            وجود داشته و برخی از کشاورزان علاقه خاصی به کاشت آن در مزارع خود
            دارند.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت شهرستان با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از جمله فعالیت هایی است که
            با سودآوری بسیاری همراه است و در شهرستان گناوه نیز ظرفیت های بسیار
            خوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد. با توجه به اظهار
            نظر کارشناسان، شغل بسیاری از افراد در زمینه خدمات، ملوانی است که با
            توجه به موقعیت خاص شهرستان، منطقی است. در اولویت بعدی مغازه داری و
            در اولویت های پایین تر، احداث هتل و رستوران، اقامتگاه بومگردی و
            ایجاد سینما و شهر بازی دارای مزیت برای این شهرستان می باشد.
          </p>
          <p>
            ملوانی برای دیدن موانع احتمالی بر سر راه کشتی، اندازه‌گیری عمق آب،
            تغییر سکان در پل‌ها، یا استفاده از تجهیزات اضطراری تحت هدایت ناخدا،
            کمک ناخدا، یا راننده کشتی. انجام کارهایی مانند آماده کردن طناب‌ها و
            تجهیزات، سرویس کامل کشتی و تثبیت کالاها و بارها در محل مورد نظر.
            انجام وظایف گوناگون مرتبط با نگهداری و محافظت از سطوح رنگ ‌شده کشتی
            و حفظ تجهیزات خطوط دریانوردی یا خود کشتی از جمله وظایف ملولانی در
            دریاست. درآمد مناسب این شغل به همراه بازار کار خوب آن در این شهرستان
            باعث شده است تا بسیاری از افراد شهرستان به شغل ملوانی به کشتی ها و
            قایق ها در دریا مشغول باشند.{" "}
          </p>
          <p>
            مغازه داری از جمله شغل هایی است که در بسیاری از شهرها و شهرستان ها
            رایج بوده و افراد زیادی در هر شهرستان به این شغل مشغول هستند. در
            شهرستان گناوه نیز بسیاری از مردم به شغل مغازه داری مشغول هستند و با
            توجه به شرایط خاص این شهرستان مثل گرمی هوا و نزدیکی به دریا و عدم
            دسترسی آسان به آب خنک و شیرین، ایجاد مغازه هایی همچون یخ فروشی را با
            توجیه اقتصادی مناسبی قرین کرده است. وجود گردشگران زیاد که در طول سال
            به این شهرستان سفر می کنند باعث شده است تا ظرفیت برای ایجاد مغازه
            های جدید در حوزه های مختلف مهیا باشد.
          </p>
          <p>
            ایجاد هتل، رستوران و اقامتگاه های بومگردی جدید در شهرستان به دلیل
            موقعیت مطلوب این شهرستان از لحاظ نزدیکی به دریا و وجود جاذبه های
            گردشگری از توجیه اقتصادی خوبی برخوردار خواهد بود. وجود سواحل زیبا در
            شهرستان گناوه، این شهرستان را به یک منطقه گردشگری بی نظیری تبدیل
            کرده است و همه ساله مسافران زیادی برای تفریح به این سواحل سفر می
            کنند. همچنین همین مساله، در اولویت های پایین تر احداث پارک های جدید
            و مدرن را نیز با موفقیت روبه رو خواهد کرد . از جمله آثار باستانی
            شهرستان گناوه میرمحنا یا میر محلا است که مجسمه آن هم وجود دارد. برج
            خان هم جزو آثار باستانی منطقه است و میرمحنا به ثبت میراث فرهنگی
            رسیده است و به احتمال زیاد برج خان هم رسیده باشد. محل قرارگیری این
            آثار داخل شهر می باشد، چون بندرریگ شهر کوچکی است و کمتر از ۱۰ هزار
            نفر جمعیت دارد. بازدید از این آثار در ایام عید و توسط مسافرین انجام
            می شود. رسیدگی به این آثار انجام شده و برج خان تعمیر شده است و هر
            ساله ترمیم می شوند . شهرستان فاقد شهربازی و سینما است و تابستان ها
            شهرستان شلوغ است و استقبال خوبی از این خدمات خواهد شد .
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و عاملی مهم در توسعه پایدار امنیت غذایی شهرستان محسوب
            می‌شود. ایجاد صنایع غذایی در شهرستان گناوه، علاوه بر اشتغالزایی،
            باعث ارتقای سطح درآمد ارزی نیز می‌شود که کاهش هدررفت محصولات کشاورزی
            و ایجاد ارزش افزوده از منابع را تا حد زیادی ممکن می‌سازد. این
            شهرستان ظرفیت های بسیار خوبی در زمینه احداث صنایع غذایی مختلف دارد،
            اما تا به حال آنگونه که باید از این ظرفیت ها استفاده نشده است؛
            بنابراین سرمایه گذاری در زمینه ایجاد واحدهای تولید مواد غذایی در این
            شهرستان امکان پذیر بوده و ارزش افزوده خوبی را ایجاد خواهد کرد.
          </p>
          <p>
            همانطور که در بخش های قبلی اشاره شد، شغل بسیاری از افراد در شهرستان
            صیادی و ملوانی بوده که علت آن هم دسترسی این شهرستان به آب دریا می
            باشد. همین امر باعث شده است تا میزان تولید ماهی در شهرستان زیاد
            باشد. با توجه به مطالب مذکور و با توجه به اظهار نظر کارشناسان، ایجاد
            کارخانه تولید تن ماهی در این شهرستان دارای مزیت بسیار خوبی است.
          </p>
          <p>
            در این شهرستان به دلیل وجود مراتع، گیاهان دارویی خودرو بسیار زیادی
            می رویند و همچنین در سال های اخیر کشت این محصولات نیز رو به افزایش
            بوده است، در نتیجه فرآوری آنها دارای مزیت خواهد بود. فرآوری گياهان
            دارويي، علاوه بر ارزش افزوده، نياز به سرمايه‌گذاري زيادي نداشته و
            مي‌تواند نقش مهمي در کارآفرینی داشته باشد. یکی از فرآوری‌های گیاهان
            دارویی تولید عرقیات سنتی است. تولید عرقیات دارای تکنولوژی و دانش فنی
            پیچیده ای نمی باشد و با توجه به ظرفیت بالای گیاهان دارویی خودرو و
            همچنین سهولت صادرات این محصولات به کشورهای دیگر، می توان با
            سرمایه‌ای اندک به این کسب و کار مشغول شد.
          </p>
          <p>
            تولید ترشیجات سنتی همچون خیار شور به دلیل سرمایه نسبتا کم در مقایسه
            با دیگر خطوط تولید و همچنین مواد اولیه تولید شده در داخل شهرستان،
            فرصت مناسبی را برای سرمایه گذاری در این زمینه فراهم کرده‌ است. برخی
            از خواص ترشیجات سنتی برای سلامتی عبارتند از: بهبود وضعیت گوارش، منبع
            غنی از آنتی‌اکسیدان، کمک به کنترل دیابت، حفظ سلامت کبد و حفظ سلامت
            معده. ترشیجات، بیشتر به عنوان یک چاشنی در کنار غذا مصرف می شوند و به
            دلیل خاصیت اسیدی که دارند، باعث افزایش اشتها و میل به غذا خوردن در
            افراد می‌شوند. در جوامع امروزی به دلیل افزایش مشغله افراد و شاغل
            بودن بسیاری از زنان، فرصت کافی برای تهیه آن در منزل و توسط خود افراد
            وجود ندارد و اکثر خانواده‌ها تمایل دارند ترشیجات مورد نیاز خود را
            به‌ صورت آماده تهیه نمایند؛ بنابراین راه اندازی کسب‌ و کار تهیه
            ترشیجات می‌تواند راهی برای پاسخ به نیاز افراد جامعه و کسب درآمد
            باشد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی است، اما در شهرستان
            گناوه آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های
            شهرستان در این حوزه برای پیشرفت اقتصادی استفاده شود. در این شهرستان،
            تعدادی واحد صنعتی در زمینه های مختلف وجود دارد، اما پتانسیل های
            شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای صنعتی
            جدید ظرفیت وجود دارد.
          </p>
          <p>
            تولید تور ماهیگیری از جمله کسب و کارهایی است که در شهرستان گناوه
            برای آن ظرفیت وجود دارد و با توجه به شرایط فعالیت شیلاتی شهرستان،
            مزیت خوبی برای آن قابل شناسایی می باشد. امروزه صیادان و پرورش
            دهندگان ماهی و میگو در شهرستان، از تور ماهیگیری در ابعاد و اندازه
            های مختلف استفاده می کنند که علاوه بر خرید، استهلاک تورهای خریداری
            شده، بازار نسبتاً مطمئنی را برای تولید کنندگان انواع تور ماهیگیری
            مهیا کرده است.
          </p>
          <p>
            این شهرستان، یکی از شهرستان هایی است که بیشترین مرز دریایی کشور را
            دارا بوده و همین موضوع توانسته فرصت دریانوردی را برای اهالی این
            منطقه به خوبی فراهم آورد. همجوار بودن گناوه با خلیج فارس سبب شده تا
            یکی از مهمترین آبراه های جهان را شامل شود و از دیرباز تاکنون مردم
            این خطه در اندیشه دریانوردی باشند و در این راه گام های مهمی بردارند.
            با توجه به اهمیت دریا برای مردم گناوه و نیاز آن ها به لنج و قایق،
            دلیلی بوده بر اینکه یکی از هنرهای مردمان این منطقه ی جنوبی از دیرباز
            تاکنون لنج سازی یا گلافی باشد. نیاز صیادان و ملوانان به انواع لنج در
            شهرستان باعث شده است تا برای کسب و کار لنج سازی در شهرستان مزیت و
            ظرفیت خوبی ایجاد شود و برای سرمایه گذاری قابل پیشنهاد باشد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان گناوه، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از این محصولات در مراحل کاشت، داشت و برداشت
            به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از
            محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در
            طی سال صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی در شهرستان می‌تواند
            زمان استفاده از محصولات را افزایش دهد و از میزان ضایعات آن بکاهد.
            همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از
            اتلاف و ضایع شدن محصولات در این شهرستان خواهد شد.
          </p>
          <p>
            همانطور که در بخش شیلات اشاره شد، گناوه قطب آبزی‌پروری کشور در زمینه
            پرورش میگو است و سرمایه‌گذاران از این بخش استقبال خوبی کرده‌اند و
            سالانه در این شهرستان حدود 4 هزار و 334 تن میگو تولید می شود. این
            موضوع باعث شده است تا سالانه ده‌ها هزار تن خوراک میگو در شهرستان
            مورد نیاز باشد و پرورش دهندگان میگو ناچارند حجم بزرگی از خوراک میگو
            را از شهرستان های اطراف تهیه کنند. از این رو به نظر می رسد، احداث
            کارخانه تولید خوراک دارای مزیت خوبی در شهرستان باشد و برای سرمایه
            گذاری قابل پیشنهاد است. خوراک میگو از مواد اولیه با کیفیت و قابلیت
            هضم بالا از جمله انواع پودر ماهی با کیفیت، پودر اسکوئید، روغن‌های
            ماهی و گیاهی، لستین، کنجاله سویا، کنستانتره‌های پروتئینی گیاهی، آرد
            و گلوتن گندم، مکمل‌های ویتامینه و معدنی، مواد جاذب غذایی، محرک‌های
            سیستم ایمنی و منابع کیتین و با بهره‌گیری از تکنولوژی پرس پلت تولید
            می‌گردد.
          </p>
          <p>
            با وجود اینکه مقدار تولید خرما در شهرستان زیاد است، اما بسته بندی
            صنعتی خرما در شهرستان وجود ندارد و باغداران محصولات خود را بدون بسته
            بندی به فروش می رسانند که در نتیجه سود بسیار کمی نصیب آن ها می شود.
            این در حالی است که اگر بسته بندی شود و به فروش رود، بازدهی بسیار
            بیشتر خواهد بود ؛ از این رو ایجاد واحدی برای بسته بندی خرما در
            شهرستان گناوه از مزیت خوبی برخوردار بوده و برای سرمایه گذاری مناسب
            می باشد. در حال حاضر فعالیت سورتینگ و بسته بندی خرما به صورت سنتی در
            شهرستان در حال انجام است و قابلیت انجام آن به صورت صنعتی وجود دارد.
            هدف از سورتینگ محصولات، دسته بندی و درجه بندی انواع محصول بر اساس
            سایز و کیفیت است؛ به طوری که بتوان محصول نهایی را به صورت یک دست و
            یک اندازه در بسته بندی های مختلف در بازار ارائه نمود و مشتری نهایی
            در طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن باشد. بسته
            بندی نهایی محصولات پس از عملیات سورتینگ به منظور جابجایی آسان و
            همچنین حفاظت از محصول نهایی سورتینگ شده صورت می گیرد. از ویژگی های
            بسته بندی مناسب محصولات، می‌توان به عدم استفاده از مواد مضر و
            شیمیایی در ساختار بسته بندی، سهولت فریز کردن و نگهداری در سردخانه،
            قابلیت حمل و نقل مناسب، پاسخگویی به نیازهای نهایی بازار به طوری که
            در وزن ها و بسته های مختلف، همه سلیقه ها را در بر بگیرد، استحکام
            فیزیکی مناسب بسته بندی به خصوص در صورت سورتینگ صادراتی محصولات، پالت
            سازی و جایگذاری صحیح کارتن ها درون پالت اشاره کرد. همچنین بسته بندی
            باید به گونه ای باشد که درون بسته و محصول سورتینگ شده کاملا مشخص
            باشد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوانشان روح و جان فرهنگ و هنر به یادگار مانده از نیاکان خویش
            را جاودانه می‌سازند. صنایع دستی نماد فرهنگ اصیل، تاریخ کهن و هنر
            بی‌مثال مردم این سرزمین اسطوره‌ای است.
          </p>
          <p>
            نکته ای که در رابطه با صنایع دستی وجود دارد این است که برخلاف زحمتی
            که هنرمند می کشد تا یکی از صنایع دستی را تولید کند، متاسفانه به علت
            عدم حمایت و بازار فروش داخلی و خارجی، رغبت به سمت فعالیت در این
            زمینه کاهش یافته است و بسیاری از هنرهای دستی به همین دلیل به فراموشی
            سپرده شده اند. در ادامه توضیحاتی راجع به پتانسیل صنایع دستی در
            شهرستان گناوه مانند قالی بافی پرداخته شده است، اما در هر صورت اگر
            توجهی به آن از سمت دولت و نهادهای مربوطه نشود، نمی توان انتظار
            موفقیت برای آن داشت.
          </p>
          <p>
            قالی بافی که به صورت بافت فرش و تابلوفرش در این شهرستان انجام می شود
            از جمله صنایع دستی شهرستان است که قابلیت گسترش دارد. بافندگی فرش با
            سرمایه کم و بدون نیاز به مدرک، یک شغل امن و پردرآمدی را در محیطی
            سالم برای تمام افراد به ویژه دختران و زنان ایجاد می کند. این کسب و
            کار را می توان در فضایی کوچک حتی در منزل و با سرمایه اولیه کم راه
            اندازی کرد و نیازی به مدرک و تکنولوژی خاصی نیست. از طرفی، قالیبافی
            از مشاغل خانگی پردرآمدی است که تسهیلات خوبی به آن تعلق می گیرد.
            بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب می دانند چون
            در کنار کارهای روزمره می توانند به این کار بپردازند و درآمد خوبی کسب
            کنند. در کل قالیبافی در این شهرستان رونق خوبی داشته و برای سرمایه
            گذاری قابل پیشنهاد است. شاید یکی از دلایل مزیت داشتن قالی بافی را در
            شهرستان دسترسی به مواد اولیه ارزان (پشم گوسفند) بتوان عنوان کرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
