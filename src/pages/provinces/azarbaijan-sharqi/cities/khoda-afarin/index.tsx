import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"

export default function () {
  const city = Provinces["IR-01"].cities["IR-0109"]

  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان خداآفرین",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        agriculture: "زراعت",
        gardening: "باغداری",
        Birds: "طیور",
        Food_industry: "صنایع غذایی",
        Fisheries: "شیلات",
        Handicrafts: "صنایع دستی",
        Conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        Services: "خدمات",
        Industry: "صنعت",
      },
    },
  }

  return (
    <div>


      <CityContent menu={menu} advantage={city.advantage}>

        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان خداآفرین، یکی از شهرستان‌های استان آذربایجان شرقی است که
            با وسعت ۱۵۲۵ کیلومتر مربع 3.3 درصد مساحت استان را شامل می‌شود و
            از سمت شمال با کشور جمهوری آذربایجان، از سمت شرق با استان
            اردبیل، از سمت غرب با شهرستان جلفا و از سمت جنوب با شهرستان‌های
            کلیبر و ورزقان هم‌مرز است. این شهرستان از سه بخش مرکزی، گرمادوز
            و منجوان تشکیل یافته ‌است . مطابق با آمار نفوس و مسکن در سال
            1395، تعداد جمعیت این شهرستان 32 هزار و 995 نفر بوده است . این
            شهرستان در شمال شرقی استان آذربایجان شرقی بین رشته کوه‌های جنگلی
            قره‌داغ و رشته کوه‌های قفقاز واقع شده است و بیش از 86 درصد از
            وسعت اراضی این شهرستان را جنگل‌ها و مراتع تشکیل می‌دهند. این
            شهرستان دارای تابستان‌های گرم و معتدل و كوه‌های جنگلی پوشیده از
            درخت بوده و اكثر اراضی مستعد كشاورزی در این منطقه قرار گرفته
            اند. شکل زیر موقعیت شهرستان خداآفرین را نشان می دهد.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان خداآفرین">
          <p>
            شهرستان خداآفرین، یکی از شهرستان‌های استان آذربایجان شرقی است که
            با وسعت ۱۵۲۵ کیلومتر مربع 3.3 درصد مساحت استان را شامل می‌شود و
            از سمت شمال با کشور جمهوری آذربایجان، از سمت شرق با استان
            اردبیل، از سمت غرب با شهرستان جلفا و از سمت جنوب با شهرستان‌های
            کلیبر و ورزقان هم‌مرز است. این شهرستان از سه بخش مرکزی، گرمادوز
            و منجوان تشکیل یافته ‌است . مطابق با آمار نفوس و مسکن در سال
            1395، تعداد جمعیت این شهرستان 32 هزار و 995 نفر بوده است . این
            شهرستان در شمال شرقی استان آذربایجان شرقی بین رشته کوه‌های جنگلی
            قره‌داغ و رشته کوه‌های قفقاز واقع شده است و بیش از 86 درصد از
            وسعت اراضی این شهرستان را جنگل‌ها و مراتع تشکیل می‌دهند. این
            شهرستان دارای تابستان‌های گرم و معتدل و كوه‌های جنگلی پوشیده از
            درخت بوده و اكثر اراضی مستعد كشاورزی در این منطقه قرار گرفته
            اند. شکل زیر موقعیت شهرستان خداآفرین را نشان می دهد.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان‌طوري‌كه در قسمت قبل اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده‌ است. مبناي اين اولويت‌بندي، فراواني و ميزان
            اشاره افراد كارشناس به كسب ‌وكارهاي رايج در هر شهرستان و اولويتي
            كه اين مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌
            وكارهاي رايج به ترتيب اولويت مشخص شده است. در تحليل به مشاغل
            موجود، مشاغل قابل توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي
            نشده و پتانسيل ايجاد آن‌ها در شهرستان وجود دارد، اشاره شده ‌است.
            مزيت‌هاي شغلي به ترتيب اولويت در ادامه آورده شده ‌است.
          </p>
          <ol className="prose ">
            <li>دامداری</li>
            <li>زراعت</li>
            <li>باغداری</li>
            <li>طیور</li>
            <li>صنایع غذایی</li>
            <li>شیلات</li>
            <li>صنایع دستی</li>
            <li>صنایع تبدیلی و تکمیلی</li>
            <li>خدمات</li>
            <li>صنعت</li>
          </ol>
        </Section>
        <Section size="h3" id="livestock" title="دامداری">
          <p>
            در شهرستان خداآفرین پرورش قارچ نیز به صورت محدود انجام می شود که
            گسترش کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته
            باشد. فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی
            دارای مزیت خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین
            امر باعث شده که جایگزین مناسبی برای گوشت باشد. در برخی از شهرها
            و روستاها به دلیل عدم آشنایی با فواید قارچ، میزان مصرف این محصول
            پایین است که می توان با تبلیغ و معرفی این محصول، میزان مصرف را
            افزایش داد. همچنین پرورش قارچ از شغل هایی است که می توان با
            سرمایه اولیه کم و محیط کوچک شروع کرد. در کل در شهرستان فعالیت
            جدی در این زمینه نشده است و جای کار برای ورود به این عرصه وجود
            دارد. شاید دلیل موفقیت تولید قارچ در این شهرستان را بتوان دسترسی
            به مواد اولیه ارزان عنوان کرد.
          </p>
          <p>
            بیشتر مردم در شهرستان خداآفرین به پرورش دام سنگین و سبک مشغول
            هستند و عده ای نیز پرورش زنبور عسل را پیشه خود کرده اند. در
            اولویت‌های پایین تر، پرورش زنبور عسل و کرم ابریشم مزیت داشته و
            عده‌ای در شهرستان به این شغل ها مشغول هستند. با توجه به سازگاری
            آب و هوا و سایر شرایط محیطی با کسب و کارهای ذکر شده در زمینه
            دامداری، اولویت فعالیت در این زمینه به همان ترتیب می باشد که
            بیان شد و در ادامه هر کدام از آنها مختصری توضیح داده می شوند.
          </p>
          <p>
            در شهرستان خداآفرین گاوهای نژاد بومی و دورگ هلشتاین-بومی پرورش
            داده می شوند و توسعه پرورش دام های ذکر شده در این شهرستان مزیت
            دارد. گاوهای بومی به دلیل سازگاری بالا به شرایط محیطی و
            بیماریهای شایع در منطقه، نقطه قوت خوبی جهت پرورش دارند و درصورت
            پرورش گاو های بومی تلفات در گله بسیار پایین بوده و از علوفه های
            با کیفیت پایین می توان برای تغذیه آنها استفاده نمود. هر چند که
            عملکرد این نوع گاوها در مقایسه با نيادهای دورگ هلشتاین-بومی
            پایین است، ولی قیمت کمتری داشته و سرمایه گذاری کمتری نیز برای
            راه اندازی یک گاوداری بومی مورد نیاز است.
          </p>
          <p>
            امروزه پرورش گاوهای دورگه نژاد هولشتاین-بومی در شهرستان در حال
            رایج شدن است. علت این امر وجود عملکرد بالای گاو هلشتاین و همزمان
            سازگاری گاو نژاد بومی در گاوهای دورگ می باشد که دامدار را با
            تلفات کمتر مواجه کرده و گاو دورگ سازگاری خوبی با شرایط منطقه
            دارد. هرچند میزان سرمایه گذاری برای این نوع از گاوها بسیار بیشتر
            از گاوهای بومی است، ولی در مقابل میزان سوددهی نیز بیشتر بوده و
            عملکرد گاوها قابل پیش بینی تر است.
          </p>
          <p>
            در کل گاوها به عنوان یکی از بزرگترین منابع تامین گوشت قرمز و
            لبنیات در شهرستان خداآفرین مطرح بوده و حمایت های خوبی از طرف
            دولت در جهت احداث گاوداری صورت میگیرد. نیاز روزافزون به منابع
            پروتئینی همچون گوشت گاو در شهرستان و کل کشور رو به افزایش است و
            همین امر ایجاد گاوداری های جدید را در شهرستان خداآفرین موجه می
            کند و هر میزان تولید از نظر فروش مشکلی نخواهد داشت. از این رو می
            توان بر روی پرورش گاو های نژاد بومی یا دورگ در شهرستان اقدام
            کرد.
          </p>
          <p>
            در شهرستان خداآفرین، پرورش گوسفند بومی نسبت به سایر دام ها،
            بیشتر مورد توجه دامداران قرار گرفته است؛ زیرا توان گوسفند بومی
            برای تحمل اقلیم های متفاوت شهرستان بیشتر است و جیره غذایی کمتر و
            در نتیجه هزینه کمتری نیز دارد. همچنین تمامی فرآورده های دامی
            مانند گوشت، شیر، ماست، کره و حتی پشم و پوست دام پرکاربرد هستند و
            فروش این فرآورده ها در تمامی روزهای سال انجام می‌شود. قیمت گوشت
            گوسفند بالا است و به علاوه اجزای گوسفند مانند دل، قلوه، جگر،
            سیرابی، کله پاچه، خوش گوشت و… نیز قابل فروش هستند. خرید دام برای
            قربانی کردن در ایام مذهبی مانند عید قربان و… موجب رونق این کسب و
            کار می‌شود؛ بنابراین گسترش پرورش گوسفند سوددهی خوبی را در
            شهرستان به همراه خواهد داشت.
          </p>
          <p>
            با توجه به آب هوای شهرستان و منابع طبیعی فراوان، فعالیت در حوزه
            زنبورداری برای شهرستان مزیت خوبی دارد. این مسئله باعث شده ارزش
            اقتصادی پرورش زنبور عسل بسیار بیشتر از ارزش ریالی حاصل از تولید
            عسل باشد. در طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد
            کندوها می توان به فروش کندو نیز فکر کرد و به سود خوبی دست یافت.
            در ضمن محصول مزرعه پرورش زنبور عسل صرفاً کندو و عسل نیست، بلکه
            موم، زهر و ژل آن نیز قابلیت فروش دارد. در نتیجه افزایش این
            فعالیت در شهرستان دارای توجیه مناسبی است و می توان این فعالیت را
            به میزان بیشتری انجام داد.
          </p>
          <p>
            بزهای پرورشی در این شهرستان بیشتر از نوع بومی هستند و قابلیت
            توسعه پرورش آن‌ها در شهرستان وجود دارد. با توجه به وجود فصل گرم
            و تمایل بزهای بومی برای چریدن در مناطق مختلف شهرستان، به نظر می
            رسد، پرورش بز بومی در شهرستان امتیاز خوبی نسبت به بسیاری از دام
            های دیگر داشته باشد. به طورکلی بز به ‌عنوان یک حیوان اهلی
            نشخوارکننده جهت تولید شیر و گوشت در مناطق مختلف شهرستان پرورش
            داده می‌شود. جثه کوچک، کم توقع بودن و مقاومت در برابر بیماری‌ها
            و شرایط سخت محیطی، باعث شده تا بز به ‌عنوان حیوانی محبوب در بین
            دامداران این شهرستان نیز تلقی شود.
          </p>
          <p>
            پرورش کرم ابریشم (نوغانداری) به دلیل ویژگی‌هایی از جمله جانبی
            بودن و تکمیلی بودن در کنار سایر مشاغل می‌تواند موجب ایجاد اشتغال
            و تأمین درآمد برای خانوارهای روستایی و کشاورز شود. نیاز به
            سرمایه گذاری کم، بازگشت سریع سرمایه، کوتاه بودن دوره پرورش کرم
            ابریشم در حداکثر ۴۵ روز زمان کاری و فعالیت افراد مسن و جوانان،
            علی‌الخصوص بانوان خانه‌دار روستایی در این حوزه، از مزیت‌های این
            صنعت به شمار می‌رود. همین ویژگی ها در کنار وجود ماده غذایی
            ابریشم یعنی برگ توت، باعث شده است تا سالانه حدود 2.46 تن پیله تر
            در شهرستان تولید شود و همچنان ظرفیت برای فعالیت در این حوزه برای
            شهرستان وجود دارد.
          </p>
        </Section>
        <Section title="زراعت" id="agriculture" size="h2">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده
            دارد که از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه
            مورد نیاز صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف
            تولیدات سایر بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و
            ماشین‌آلات کشاورزی، ارزآوری و تامین مالی سایر بخش‎های زیربنایی
            را نام برد. در شهرستان خداآفرین بیشتر آب مورد نیاز در زمینه
            کشاورزی را از طریق چشمه ها و آب رودخانه به دست می آورند. با توجه
            به نظر کارشناسان، کاشت یونجه، پنبه، برنج، گندم، جو و در اولویت
            های پایین تر کاشت کلزا، کنجد، حبوبات و ذرت در شهرستان در حوزه
            زراعت دارای مزیت می باشد.
          </p>
          <p>
            شهرستان خداآفرین در زمینه تولید علوفه های دامی مانند یونجه وضعیت
            خوبی دارد. این محصول را می توان به میزان بیشتری در شهرستان تولید
            و کسب سود کرد. در میان گیاهان علوفه ای، یونجه به دلیل ارزش غذایی
            بالا و عملکرد خوب آن از اهمیت خاصی برخوردار است. همچنین یونجه به
            علت وجود باکتریهای ریزوبیوم در ریشه های خود قادر به تثبیت ازت
            هوا بوده و به این طریق باعث باروری خاک می شود. از طرفی دیگر
            یونجه گیاهی چندساله است و تا چند سال می توان آن را برداشت کرد؛
            بنابراین توسعه کشت یونجه توجیه اقتصادی داشته و امکان تامین بخشی
            از علوفه مورد نیاز دام، فراهم می‌شود که علاوه بر ایجاد اشتغال
            مولد و حصول درآمد مناسب برای زارعین، در استفاده بهینه از ظرفیت
            های پرورش دام نیز موثر خواهد بود و نیاز شهرستان برای وارد کردن
            نهاده های مورد نیاز دام از سایر مناطق را برطرف خواهد کرد. هر
            مقدار تولید یونجه در شهرستان خداآفرین به دلیل رونق دامداری در
            این شهرستان فوری به فروش می رسد و اکثر مواقع یونجه را پس از
            برداشت در محل خریداری می کنند. از این رو کاشت این محصول با توجه
            به سازگاری خوبی که با شرایط جغرافیایی شهرستان دارد، از مزیت و
            ظرفیت خوبی برخوردار است.
          </p>
          <p>
            شهرستان خداآفرین در زمینه تولید علوفه های دامی مانند یونجه وضعیت
            خوبی دارد. این محصول را می توان به میزان بیشتری در شهرستان تولید
            و کسب سود کرد. در میان گیاهان علوفه ای، یونجه به دلیل ارزش غذایی
            بالا و عملکرد خوب آن از اهمیت خاصی برخوردار است. همچنین یونجه به
            علت وجود باکتریهای ریزوبیوم در ریشه های خود قادر به تثبیت ازت
            هوا بوده و به این طریق باعث باروری خاک می شود. از طرفی دیگر
            یونجه گیاهی چندساله است و تا چند سال می توان آن را برداشت کرد؛
            بنابراین توسعه کشت یونجه توجیه اقتصادی داشته و امکان تامین بخشی
            از علوفه مورد نیاز دام، فراهم می‌شود که علاوه بر ایجاد اشتغال
            مولد و حصول درآمد مناسب برای زارعین، در استفاده بهینه از ظرفیت
            های پرورش دام نیز موثر خواهد بود و نیاز شهرستان برای وارد کردن
            نهاده های مورد نیاز دام از سایر مناطق را برطرف خواهد کرد. هر
            مقدار تولید یونجه در شهرستان خداآفرین به دلیل رونق دامداری در
            این شهرستان فوری به فروش می رسد و اکثر مواقع یونجه را پس از
            برداشت در محل خریداری می کنند. از این رو کاشت این محصول با توجه
            به سازگاری خوبی که با شرایط جغرافیایی شهرستان دارد، از مزیت و
            ظرفیت خوبی برخوردار است.
          </p>
          <p>
            برنج مهم ترین غلات و اقلام غذایی است که بیشتر مردم به عنوان یک
            غذای اصلی به آن وابسته هستند. آب مورد نیاز برای کشت برنج از سایر
            غلات بیشتر و رطوبت کافی از عوامل مورد نیاز برای کاشت بهتر این
            محصول است. البته برای کشت این محصول باید بازار فروش و قیمت مناسب
            باشد تا کشاورزان متضرر نشوند و رونق تولیدات داخلی را زمینه ساز
            شود. در شهرستان خداآفرین، درحاشیه رودخانه ارس، کاشت برنج متداول
            شده است و کشاورزان توانسته اند سود خوبی را از این محصول کسب
            کنند. از این رو می توان کاشت این گیاه را برای مناطق نزدیک به
            رودخانه ارس پیشنهاد داد.
          </p>
          <p>
            درصد زیادی از زراعت گندم و جو در شهرستان به صورت دیم انجام
            می‌شود و درصد بسیار کمی از آن به صورت آبی می باشد و درحالت آبی،
            بازدهی بیشتر است. در میان محصولات کشاورزی، کاشت گندم نسبت به
            بقیه کم دردسرتر است. گندم در بازه زمانی حدودا هشت ماهه به ثمر
            نشسته و به مرحله سوددهی می‌رسد و در دو نوع بهاره و پاییزه کشت می
            شود که محصول دهی پاییزه آن بیشتر است. علاوه بر خود گندم، کاه آن
            نیز مشتری خاص خودش را دارد. بعد از برداشت محصول، زمین آن هم
            چراگاه گوسفندان می‌شود. همچنین مورد حمایت های دولت واقع شده و
            کود شیمیایی و بذر نیز به شکل یارانه ای در اختیار کشاورزان قرار
            می گیرد؛ بنابراین توسعه این کشت توجیه اقتصادی خوبی در این
            شهرستان دارد.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت
            سوپ استفاده می شود و در تهیه غذای کودک نیز کاربرد دارد. جوشانده
            جو داروي خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و
            پایین آورنده کلسترول است. کاشت این گیاه زراعی در کنار گندم، در
            شهرستان خداآفرین رایج بوده و با توجه به سازگاری خوب برخی ارقام
            جو برای شرایط شهرستان، امکان استفاده از اراضی دیم وجود دارد.
            بازار فروش مطمئن، کاشت، داشت و برداشت مکانیزه، از عواملی است که
            باعث ایجاد مزیت برای کاشت این گیاه شده و با توجه به تولید پایین
            جو در کشور نسبت به میزان مورد نیاز، توسعه کاشت این محصول پیشنهاد
            می شود.
          </p>
          <p>
            در اولویت های پایین تر، کاشت گیاه کلزا در شهرستان خداآفرین قابل
            پیشنهاد است. کشت کلزا باعث از بین رفتن چرخه زندگی آفات، بیماری
            ها و علف های هرز گردیده و با کاهش جمعیت آن‌ها، موجب صرفه جویی در
            مصرف سموم و کاهش آلودگی های زیست محیطی می گردد. با توجه به آنکه
            زمان کشت کلزا در فصل پاییز است، نیاز گیاه به آب کم می‌باشد و با
            استفاده از نزولات جوی می توان به کشت آن در مناطقی از شهرستان که
            در فصل تابستان آبی در آنجا نیست، اقدام نمود. کلزا با تولید
            مقادیر قابل توجهی علوفه می تواند در تغذیه دام های منطقه نقش
            موثری داشته باشد. همچنین برگرداندن بقایای کلزا به خاک باعث
            افزایش حاصلخیزی خاک و بهبود ساختمان خاک خواهد شد.
          </p>
          <p>
            گرمای سوزان در زمین های زراعی در طول تابستان باعث شده است تا
            مردم شهرستان بعد از برداشت گندم و جو، کاشت کنجد را به عنوان
            گیاهی برای کشت دوم انتخاب کنند. وجود ارقام مقاوم و سازگار با
            شرایط شهرستان، عملکرد بالا، قیمت زیاد محصول و مقاومت در برابر کم
            آبی از ویژگی های کنجد می باشد که آن را برای کاشت در شهرستان
            توجیه پذیر کرده است. با توجه به بازار خوب کنجد در شهرستان، کاشت
            بیشتر آن در شهرستان توصیه می شود.
          </p>
          <p>
            حبوباتی همچون نخود نیز در این شهرستان کشت می گردند که می توان در
            زمینه گسترش سطح کشت آن ها اقدام کرد. نخود گیاهی است که به آب و
            هوای سرد نیاز دارد و در این شهرستان شرایط مهیا می باشد. این گیاه
            دارای دو تیپ زمستانه و تابستانه است. نخود به علت دارا بودن
            اسیدهای آمینه مختلف، ویتامین ها و مواد معدنی، غذای بسیار خوبی
            است. همچنین از نظر طب قدیم ایران گرم و خشک است و خواص بی‌شماری
            دارد.
          </p>
          <p>
            در شهرستان خداآفرین ذرت دانه‌ای و علوفه ای کشت می شود و با توجه
            به منابع آبی کافی کشت آنها دارای مزیت است. کاشت ذرت در مناطقی از
            شهرستان خداآفرین با خاک هایی که دارای عمق کافی، نرم و قابل نفوذ
            باشند امکان پذیر است. ذرت بر خلاف گندم و جو احتیاج به گرما و
            حرارت زیاد خورشید دارد که در فصل تابستان در شهرستان این شرایط به
            خوبی ایجاد می شود.
          </p>
        </Section>
        <Section title="باغداری" id="gardening" size="h2">
          <p>
            در شهرستان خداآفرین باغات آلو، زردآلو، هلو، شلیل، انگور، گوجه
            سبز، گردو، زغال اخته و پرورش قارچ نسبت به سایر فعالیت های
            باغبانی از رونق خوبی برخوردار است و می توان روی احداث این باغ ها
            سرمایه گذاری نمود.
          </p>
          <p>
            آلو، زردآلو، هلو و شلیل و در اولویت های پایین تر گوجه سبز میوه
            هایی تک هسته‌ای و هم خانواده هستند که دارای طعم متغیر (از ترش تا
            شیرین) و رنگ‌هــای زرد، سبـز، قـرمـز و ارغوانـی هستند که بیش از
            هزاران گونه متفاوت از این میوه در دنیا وجود دارد که از نظر رنگ،
            شکل و اندازه دارای تنوع زیادی هستند. درختان هسته دار مذکور به
            دماهای پایین در طول زمستان برای برطرف شدن نیاز سرمایی و رفع خواب
            زمستانه خود نیاز دارند که سرمای حاکم بر شهرستان خداآفرین این
            نیاز را به راحتی برطرف می کند. درختان هسته دار در دامنه وسیعی از
            خاک ها قابل کشت هستند و خاک آن‌ها ترجیحا باید عمیق و با زهکشی
            مناسب باشد. pH قابل تحمل برای این درختان در محدوده 5.5 تا 6.5
            است. هسته داران به دلیل داشتن فیبر غذایی، برای کنترل قند خون،
            جلوگیری از یبوست و حفظ سلامت دستگاه گوارش مفید هستند. اجداد وحشی
            درختانی همچون زرد آلو و گوجه سبز به وفور در جنگل های ارسباران
            شهرستان یافت می شوند و نشان از سازگاری خوب آنها با شرایط اقلیمی
            و خاکی منطقه دارد. بازار فروش خوب برای میوه های هسته دار در کنار
            سایر مزایای آن ها، باعث شده است تا افزایش سطح زیرکشت آن ها در
            شهرستان مورد تاکید کارشناسان باغبانی قرار بگیرد.
          </p>
          <p>
            انگور از مهم‌ترین محصولات باغی است که هم به لحاظ سطح زیر کشت و
            هم ارزش اقتصادی و تغذیه‌ای، مورد توجه کشاورزان و کارآفرینان قرار
            گرفته است. زیبایی، تنوع رنگ، طعم و مزه، ارزش غذایی، خواص دارویی
            و وجود فرآورده‌‌های تبدیلی چون کشمش، شیره انگور، روغن هسته
            انگور، کنسانتره، آب انگور، سرکه، آبغوره، دارو‌های تقویتی و مواد
            آرایشی ‌بهداشتی، همچنین توصیه‌‌های دینی و مذهبی، انگور را به یک
            میوه استثنایی و بی‌نظیر تبدیل کرده است؛ بنابراین در بین مردم
            طرفداران زیادی دارد و بازار مصرف این محصول به صورت محصولات
            فراوری شده و تازه خوری فراهم است. سطح زیرکشت این محصول در
            شهرستان حدود 20 هکتار است.
          </p>
          <p>
            گردو، درختی چندساله و مقاوم است که پس از رشد کامل، هر درخت تا 18
            کیلوگرم تولید محصول خواهد داشت. محصول نهایی قیمت بالایی دارد که
            هم در داخل کشور طرفداران زیادی داشته و هم قابلیت بالایی برای
            صادرات دارد. در صورت احداث باغ گردو، تا سال های سال نیاز به
            سرمایه گذاری و کشت دوباره وجود ندارد؛ زیرا درخت گردو دارای عمر
            طولانی است و تا ده ها سال قابلیت برداشت دارد. میوه گردو هم جزء
            معدود میوه هایی است که هیچ گونه نیازی به هزینه انبار در سردخانه
            ندارد و به دلیل ماندگاری طولانی، می تواند چند ماه و حتی چند سال
            مورد مصرف قرار گیرد. نیاز سرمایی گردو در شهرستان خداآفرین به
            دلیل وجود زمستان های سرد و برفی به راحتی برطرف می شود و وجود
            انواع گردو در دل جنگل ها نشان از سازگاری این میوه با آب و خاک
            شهرستان دارد. از این رو احداث باغ گردو در شهرستان مزیت داشته و
            برای سرمایه گذاری قابل پیشنهاد است.
          </p>
          <p>
            درخت زغال اخته به دلیل شرایط اقلیمی مناسب در شهرستان خداآفرین،
            به صورت طبیعی رشد می کند و در آن هیچ محصول شیمیایی دخیل نمی
            باشد؛ به همین دلیل برای صادرات و سودآوری مورد توجه قرار می‌گیرد.
            از این رو بیش از ۱۲۶ هکتار از باغات شهرستان کلیبر و خداآفرین به
            کشت زغال اخته اختصاص یافته است و سالانه حدود 600 تن زغال اخته از
            آن‌ها برداشت شده و روانه بازار مصرف می شود. همین امر این دو
            شهرستان را به یکی از قطب های تولید زغال اخته کشور تبدیل کرده
            است، چراکه این درخت سازگاری بسیار خوبی با شرایط محیطی شهرستان
            داشته و آفات و بیماری های بسیار کمی دارد؛ از این رو برای سرمایه
            گذاری قابل پیشنهاد است.
          </p>
          <p>
            در شهرستان خداآفرین پرورش قارچ نیز به صورت محدود انجام می شود که
            گسترش کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته
            باشد. فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی
            دارای مزیت خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین
            امر باعث شده که جایگزین مناسبی برای گوشت باشد. در برخی از شهرها
            و روستاها به دلیل عدم آشنایی با فواید قارچ، میزان مصرف این محصول
            پایین است که می توان با تبلیغ و معرفی این محصول، میزان مصرف را
            افزایش داد. همچنین پرورش قارچ از شغل هایی است که می توان با
            سرمایه اولیه کم و محیط کوچک شروع کرد. در کل در شهرستان فعالیت
            جدی در این زمینه نشده است و جای کار برای ورود به این عرصه وجود
            دارد. شاید دلیل موفقیت تولید قارچ در این شهرستان را بتوان دسترسی
            به مواد اولیه ارزان عنوان کرد.
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </Section>

      </CityContent>

    </div>
  )
}
