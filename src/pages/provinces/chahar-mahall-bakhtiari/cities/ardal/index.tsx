import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-09"].cities["IR-0901"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        food_industry: "صنایع غذایی",
        livestock: "دامداری",
        gardening: "باغداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        industry: "صنعت",
        fisheries: "شیلات",
        services: "خدمات",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان اردل یکی از شهرستان‌های استان چهارمحال و بختیاری است که از
            شمال با شهرستان کوهرنگ، از شمال شرق با شهرستان فارسان، از شرق با
            شهرستان کیار، از جنوب شرقی و جنوب با شهرستان لردگان و از غرب با
            استان خوزستان هم‌مرز است. شهرستان اردل آب‌وهوایی معتدل مایل به سرد و
            خشک دارد. طبق آخرین سرشماری در سال 95، جمعیت شهرستان 48880 نفر گزارش
            شده‌است. شکل زیر موقعیت شهرستان اردل را نشان می دهد.
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
            مي‌شود. در ادامه تحليل شهرستان اردل ارائه‌شده‌است.
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
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            در شهرستان اردل با توجه به وجود چشمه ها و رود های دائمی و فصلی،
            کشاورزی نقطه ی عطفی برای شهرستان محسوب می شود. گندم و جو عمده محصول
            زراعی شهرستان هستند که به دو صورت دیمی و آبی تولید می‌شوند و همچنان
            ظرفیت برای افزایش سطح زیر کشت آن‌ها وجود دارد. در میان محصولات
            کشاورزی، کاشت گندم نسبت به بقیه کم دردسرتر است.گندم در بازه زمانی
            حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد. خرید تضمینی
            گندم همه ساله توسط دولت انجام می گیرد. البته خود کشاورز هم می تواند
            گندم را بفروشد و درآمد خوبی کسب کند. کود شیمیایی و بذر نیز به شکل
            یارانه‌ای در اختیار کشاورزان قرار می گیرد؛ بنابراین گسترش تولید گندم
            ارزش افزوده زیادی را به دنبال دارد. جو از دیرباز در سبد تغذیه دام
            جایگاه ویژه داشته و به صورت دانه و علوفه سبز مورد استفاده قرار
            می‌گیرد. از جو برای تهیه نان و پخت سوپ استفاده می شود و در تهیه غذای
            کودک نیز کاربرد دارد. جوشانده جو داروي خوبي براي مبتلايان به تب و كم
            خوني و سوء هاضمه بوده و پایین آورنده کلسترول است.
          </p>
          <p>
            علاوه بر گندم و جو، تولید علوفه‌های دامی نظیر شبدر، یونجه، ذرت
            علوفه‌ای، اسپرس و خلر انجام می‌شود که با توجه به رونق دامداری در
            شهرستان، افزایش فعالیت در زمینه تولید این محصولات مزیت دارد.
          </p>
          <p>
            حبوبات تولید شده در این شهرستان شامل نخود، عدس و ماش است، که به هر
            دو صورت دیمی و آبی انجام می شود، این محصولات به دلیل داشتن بازار
            فروش مناسب و کیفیت بسیار زیاد، علاوه براستفاده در داخل شهرستان اردل،
            در سایر شهرستان ها نیز استفاده می شود. این محصولات فیبربالایی دارند
            و در چند سال اخیر نیز به میزان بیشتری در غذاها مورد استفاده قرار می
            گیرند، همچنین می توان انها را در تناوب با گندم و جو قرار داد و بخشی
            از ازت مورد نیاز خاک را تامین کرد و از کاه تولید شده ی آنها برای
            خوراک دام و طیور بهره برد. کشت این محصولات برای شهرستان مزیت دارد.
          </p>
          <p>
            کلزا از جمله دانه‌های روغنی است که در شهرستان تولید می‌شود و با توجه
            به شرایط منطقه، افزایش تولید آن مزیت دارد. در واقع دانه های روغنی
            مزیت مناسبی به عنوان کشت دوم یا کشت اصلی برای شهرستان هستند که با
            توجه به سود آوری بالا، می‌توان این تولیدات را افزایش داد. کشت کلزا
            باعث از بین رفتن چرخه زندگی آفات، بیماری ها و علف های هرز گردیده و
            با کاهش جمعیت آنها موجب صرفه جویی در مصرف سموم و کاهش آلودگی های
            زیست محیطی می گردد. با توجه به آنکه زمان کشت کلزا در فصل پاییز است،
            نیاز گیاه به آب کم می‌باشد و با استفاده از نزولات جوی می توان به کشت
            آن اقدام نمود. کلزا با تولید مقادیر قابل توجهی علوفه می تواند در
            تغذیه دام های منطقه نقش موثری داشته باشد. همچنین برگردان بقای کلزا
            به خاک باعث افزایش حاصلخیزی خاک و بهبود ساختمان خاک خواهد شد. کشت
            کلزا به عنوان یک دانه روغنی بسیار مهم در تولید محصولات حوزه صنایع
            غذایی و یا تولید انواع نهاده‌های خوراکی دام و طیور متداول است. روغن
            کلزا ازجمله مشتقات این گیاه است که امروزه به دلیل سالم بودن و داشتن
            کمترین کلسترول و اسیدهای چرب اشباع ‌شده مورد استقبال قرارگرفته است.
            تحقیقات دانشمندان نشان می‌دهد که دانه کلزا 40-30 درصد روغن و
            کنجاله‌اش50-40 درصد پروتئین دارد.
          </p>
          <p>
            گلرنگ از دیگر دانه‌های روغنی است که به دلیل مزایای فراوان، قابلیت
            تولید بیشتر را در شهرستان اردل دارد. به صورت کلی می‌توان این محصول
            را به صورت دیمی کشت نمود و با افزایش تولید سود خوبی کسب کرد . گلرنگ
            با خصوصیات مطلوب زراعی نظیر مقاومت نسبی به شوری خاک و خشکی هوا،
            مقاومت بالا به سرمای زمستانه (تیپ پاییزه)، وجود روغنی مطلوب با بیش
            از ۹۰ درصد اسیدهای چرب غیر اشباع، همواره به عنوان یک دانه روغنی با
            ارزش مطرح بوده است.{" "}
          </p>
          <p>
            در سال‌های اخیر کشت‌ آزمایشی گیاهان دارویی با موفقیت در شهرستان
            همراه بوده‌است و تولید گیاهانی نظیر بابونه، زیره، موسیر و مارچوبه با
            قابلیت بالایی تولید می‌شود. تولید مارچوبه نسبت به سایر گیاهان دارویی
            ذکر شده مزیت پایین تری دارد. علاوه بر افزایش تولید این نوع از گیاهان
            دارویی، برای فعالیت در زمینه کشت سایر گیاهان نیز مزیت وجود دارد.
            تقاضای مصرف گیاهان دارویی به علت روی گردانی از داروهای شیمیایی و یا
            حتی استفاده برخی از این محصولات در تولیدات کارخانه‌های بزرگ دارویی
            همواره رو به افزایش است. از این گیاهان نه تنها برای درمان بیماری‌ها
            بلکه در صنایع کنسروسازی، نوشابه سازی، ‌عطر سازی و غذایی نیز استفاده
            می‌شود.
          </p>
          <p>
            زعفران از دیگر محصولاتی است که در سطح شهرستان کشت می‌شود و در صورت
            بازاریابی مناسب، پتانسیل برای افزایش تولید آن وجود دارد. مقاومت
            زعفران در برابر سرما زیاد است و به آب کمی نیاز دارد. زعفران به علت
            داشتن رنگ زیبا، عطر و طعم بسیار مطبوع، در صنایع غذایی کاربرد دارد.
            دمنوش زعفران آرام بخش بوده و استرس و نگرانی را برطرف می کند. کسب و
            کار کشت زعفران به علت خاصیت ضد سرطانی این گیاه اهمیت دو چندان پیدا
            می کند. مصرف زعفران در ایران بالا است و نه تنها می تواند نیاز منطقه
            زیرکشت را تامین کند بلکه درسراسر ایران نیز مشتری دارد.
          </p>
          <p>
            طبق بررسی‌های انجام شده سیب‌زمینی قابلیت کشت در شهرستان را دارد ولی
            برای ورود به این حرفه باید دو نکته را در نظر گرفت. اول اینکه، سیب
            زمینی به آب زیادی نیاز دارد و دوم اینکه سیب زمینی در شهرستان های
            اطراف به میزان زیادی تولید می‌شود و باید در ابتدا بازار فروش برای
            انها فراهم شود، تا کشاورز دچار ضرر نشده و رغبت برای تولید بیشتر
            داشته باشد.{" "}
          </p>
          <p>
            کشت چغندرقند از دیگر محصولات زراعی است که در شهرستان جواب می‌دهد.
            چغندرقندهای تولید شده در شهرستان با توجه به اینکه برای تامین نیاز
            کارخانه ی قند شهرکرد استفاده می شوند، برای شهرستان مزیت دارند. کشت
            چغندرقند علاوه بر این که از نظر اقتصادی بسیار سودآور است، می تواند
            در اصلاح خاک و کنترل علف های هرز نیز مؤثر بوده و از این رو به راحتی
            می توان این گیاه را در تناوب با گیاهان دیگر قرار داد. به خاطر
            سازگاری زیاد این گیاه با شرایط مختلف آب و هوا و خاک، در اکثر نقاط می
            توان آن را کشت کرد. این گیاه با ریشه های عمیق خود نفوذپذیری خاک را
            افزایش داده و خاک مناسبی را برای کشت های بعدی آماده می کند. همچنین
            از چغندرقند علاوه بر قند محصولات دیگری مثل برگ چغندر و تفاله مخلوط
            با ملاس (بعد از برداشت قند در کارخانه) به دست می آید که می تواند
            مورد تغذیه دام قرار گیرد. البته به دلیل مصرف زیاد آب توسط چغندرقند،
            بهتر است از روش های آبیاری مکانیزه و قطره ای استفاده شود.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال و عاملی مهم در توسعه پایدار امنیت غذایی محسوب می‌شود که کاهش
            هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان
            ممکن می‌کند. همانطوریکه در بخش زراعت اشاره شد، گندم یکی از محصولات
            تولیدی در شهرستان است که می‌توان در زمینه فراوری آن به منظور تولید
            آرد و رشته آشی به عنوان اولویت اول و تولید سایر محصولات نظیر تولید
            برشتوک، کلوچه با مغز خشکبار و نان های سنتی تیری و کاکولی به عنوان
            اولویت‌های پایین‌تر فعالیت کرد . البته ممکن است گندم تولیدی در
            شهرستان برای راه‌اندازی این مشاغل کافی نباشد که باید به دنبال واردات
            گندم از سایر مناطق بود. همچنین تولید آرد از مشاغلی است که با ایجاد
            یک یا دو واحد به اشباع می‌رسد و برای راه‌اندازی آن باید بازار مصرف
            را بررسی کرد.
          </p>
          <p>
            باتوجه به تولیدات کلزا در شهرستان احداث واحدی برای روغن‌گیری از آن
            مزیت دارد. فراوری کلزا ارزش افزوده بالاتری نسبت به خام‌فروشی آن
            دارد.
          </p>
          <p>
            گردو و بادام از دیگر محصولات شهرستان است که احداث واحد فراوری آن‌ها
            برای تهیه روغن گردو و بادام پیشنهاد می‌شود.{" "}
          </p>
          <p>
            باتوجه به رونق دامداری در شهرستان تولید لبنیات و قره‌قوروت در
            شهرستان مزیت دارد. در حال حاضر فعالیت‌هایی در زمینه تولید این
            محصولات انجام می‌شود که بیشتر به صورت سنتی است؛ درصورتیکه می‌توان با
            افزایش تولید و بازاریابی مناسب به سود خوبی دست یافت. البته برای
            موفقیت در این زمینه باید به رقابت با نشان‌های تجاری موجود نیز فکر
            کرد.
          </p>
          <p>
            تولید گیاهان دارویی متنوع، زمینه را برای احداث واحد فراوری آن‌ها
            فراهم کرده‌است . فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز به
            سرمايه‌گذاري زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته
            باشد. یکی از فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات
            دارای تکنولوژی و دانش فنی پیچیده ای نمی باشد و می توان با سرمایه‌ای
            اندک به این کسب و کار مشغول شد. خشک کردن و بسته‌بندی نیز از دیگر
            فرآوری‌های گیاهان دارویی است که می‌توان با فعالیت در آن‌ها به سود
            رسید.
          </p>
          <p>
            تولید کشمش و شیره ی انگور به صورت خانگی در شهرستان انجام می شود و
            معمولا این تولیدات در داخل شهرستان و استان بازار فروش دارند. انگور
            تولید شده در شهرستان زیاد است و با توجه به حجم تولیدات می توان واحدی
            برای فرآوری این محصول ایجاد و محصولاتی نظیر کشمش، شیره، آبغوره و
            سرکه تولید کرد.
          </p>
          <p>
            تهیه میوه خشک و چیپس میوه از محصولات باغی تولیدی از جمله مشاغل
            مزیت‌دار در حوزه صنایع غذایی است. خشک کردن میوه‌جات، یکی از روش‌هاي
            جلوگیري از فساد میکروبی آن‌ها است. در این روش، در اثر کاهش میزان
            رطوبت، امکان فساد میکروبی بسیار کم شده و سرعت دیگر واکنش‌هاي مضر
            نیز، به مقدار قابل توجهی کاهش می‌یابد. خشک کردن، ضمن اینکه روي محصول
            اثر حفاظتی دارد، وزن و حجم آن را نیز به میزان چشمگیری کاهش می‌دهد،
            در نتیجه از هزینه‌های حمل و نقل و ذخیره‌سازي نیز می‌کاهد. با توجه به
            اینکه بخشی از بازار میوه خشک ایران، سهم محصولات وارداتی است، با
            تولید مشابه داخلی این میوه‌ها (از نظر نوع و کیفیت)، می‌توان مانع
            واردات و خروج میلیون‌ها دلار ارز از کشور شد. همچنین نیاز بیش از حد
            برخی از کشورها به این گونه محصولات (به دلیل شرایط ویژه اقلیمی آن‌ها،
            هزینه بالای حمل و نقل سبزیجات و میوه‌های تازه و محدود بودن زمان
            نگه‌داری آن‌ها)، فرصت مناسبی برای رونق تولید و صادرات چیپس میوه
            فراهم آورده است.
          </p>
          <p>
            ترشی و شور، بیشتر به‌عنوان یک چاشنی در کنار غذا مصرف می شود و به
            دلیل خاصیت اسیدی که دارد، باعث افزایش اشتها و میل به غذا خوردن در
            افراد می‌شود. این محصول یکی از فرآیندهای نگهداری طولانی‌ مدت صیفی‌ و
            سبزیجات است. در جوامع امروزی به دلیل افزایش مشغله افراد و شاغل بودن
            بسیاری از زنان، فرصت کافی برای تهیه آن در منزل و توسط خود افراد وجود
            ندارد و اکثر خانواده‌ها تمایل دارند ترشی و شور موردنیاز خود را
            به‌صورت آماده تهیه نمایند. بنابراین راه اندازی کسب‌ وکار تهیه ترشی و
            شور می‌تواند راهی برای پاسخ به این نیاز افراد جامعه و کسب درآمد
            باشد.
          </p>
          <p>
            از جمله تولیداتی که در شهرستان انجام می شود و به عنوان سوغات یا
            محصول تولید شده در این شهرستان در استان های دیگر به فروش می رسد می
            توان به سوهان عسلی اشاره کرد. سوهان عسلی ترکیبی از قند و شکر آب شده
            با استفاده از خشکبار نظیر بادام، گردو و... است و با توجه به بازار
            فروش خوب، تولید این محصول دارای مزیت است.
          </p>
          <p>
            طبق نظرکارشناسان به دلیل تولید انبوه ماهی در این شهرستان، برای ایجاد
            یک واحد فرآوری گوشت ماهی به منظور تولید کنسرو ماهی، ماهی سوخاری و
            ماهی شور قابلیت خوبی وجود دارد که می توان برای صادرات محصولات تولیدی
            نیز اقداماتی انجام داد. البته شرط موفقیت در این زمینه رقابت با
            نشان‌های تجاری موجود در بازار است.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به دلیل وجود عشایر و زندگی عشایری، رونق خوبی در شهرستان دارد
            و پرورش دام به هر دو شیوه ی صنعتی و سنتی در حال انجام است. در زمینه
            پرورش دام سبک بیشتر گوسفند از نژاد بومی لری بختیاری، بز و بزغاله با
            هدف تولید شیر و گوشت پرورش داده می‌شود که مزیت پرورش گوسفند
            لری-بختیاری بالاتر است.{" "}
          </p>
          <p>
            گوسفند لری بختیاری گونه‌ای از نژادهای گوسفندان ایرانی است که در
            ایران زیست بوم دارند و پرورش داده می شوند. همان طور که از اسم این
            نوع نژاد پیداست، این گوسفندان در مناطق لرنشین ایران و به خصوص
            منطقه‌ی چهار محال بختیاری پرورش داده می شوند و این استان به عنوان
            زیست بوم اصلی این گونه گوسفندان زنده محسوب می شود. آنچه که جالب است
            و باعث می شود که ارزش قیمت قوچ لری بختیاری بالا برود، وجود کاکل یا
            چرک سر است . به طور کلی گوسفند لری بختیاری را جزو دسته های گوسفندان
            گوشتی می نامند. تمایز گوسفند لری بختیاری نسبت به دیگر نژادهای
            گوسفندان ایرانی در این است که در پشت دست و پا، حتی جلوی پوزه، دور
            چشم ها و روی گوش های آن لکه هایی به رنگ قهوه ای تیره یا مشکی دیده می
            شود.{" "}
          </p>
          <p>
            به طورکلی بز به‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر و گوشت
            در مناطق مختلف پرورش داده می‌شود. جثه کوچک، کم توقع بودن و مقاومت در
            برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز به‌عنوان حیوانی
            محبوب در بین دامداران تلقی شود. در نقاط مختلف از این حیوان علاوه بر
            تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز استفاده می‌شود.
          </p>
          <p>
            در اولویت های پایین تر پرورش بز سانن دارای مزیت است، برای پروش این
            دام باید به صورت صنعتی یا نیمه صنعتی فعالیت انجام داد. بز سانن یک
            نژاد شیری پرتولید است که نسبت به بزهای بومی، تولید شیر بسیار بیشتری
            دارد و می‌تواند بخشی از نیاز کشور به شیر و پروتئین حیوانی را تأمین
            نماید. نرخ تبدیل مواد خوراکی به شیر در بزهای سانن بالاتر می‌باشد که
            این امر موجب افزایش بازدهی بز سانن از خوراک مصرف شده توسط آن می‌شود.
            کسب و کار پرورش بز سانن موجب اشتغال‌زایی و رغبت بیشتر جوانان به امر
            دام‌پروری می‌شود. هر کیلوگرم شیر بز با قیمت بیشتری نسبت به شیر گاو
            فروخته می‌شود و در نقاط مختلف کشور طرفداران خاص خود را دارد.
          </p>
          <p>
            در زمینه پرورش دام سنگین نیز از گاوشیری نژاد هلشتاین به اندازه
            نژادهای بومی استفاده می‌شود . باتوجه به نیاز منطقه به شیر و گوشت،
            افزایش پرورش دام سنگین مزیت دارد.
          </p>
          <p>
            گاو هلشتاین که به نام هولشتاین هم شناخته می شود جزء سنگین وزن ترین
            گاوهای شیری در جهان است. این نژاد که از نظر تولید شیر بهترین نژاد در
            میان گاوهای شیری است حدودا ۷۲۴۰ لیتر شیر در سال تولید می کند. درصد
            چربی این شیر 65/3 درصد و درصد پروتئین آن ۳ درصد است.
          </p>
          <p>
            با توجه به رشد جمعیت کشور و نیاز روز افزون جامعه به گوشت و مواد
            گوشتی و نقش مهم این محصولات در تامین پروتئین و غذای افراد جامعه،
            پرورش دام های پر بازده به منظور افزایش تولید و خودکفایی غذایی کشور،
            امری لازم و ضروری است. گاوهای بومی به لحاظ تنوع و اختلاف ژنتیکی،
            ویژگی های خاص نژادی و مقاومت های طبیعی ایجاد شده در آن ها طی قرن ها
            زیست در شرایط سخت محیطی و آب و هوایی مختلف به عنوان یک منبع عظیم
            تولید شیر و گوشت می تواند نقش موثر در تامین مواد پروتئین حیوانی و
            اقتصاد جامعه ایفا نماید. همچنین پوست گاو به عنوان یک محصول با ارزش
            دامی در صنعت چرم‌سازی استفاده می‌شود، حتی شاخ و سم و فضولات حیوان
            نیز ارزش اقتصادی داشته و به روش های مختلف مورد استفاده قرار می گیرد.
          </p>
          <p>
            در چند سال اخیر زنبورداری رشد خوبی داشته و تعداد زنبورستان ها و کلنی
            های زنبورداری در حال افزایش است. با وجود مراتع غنی و رونق باغداری و
            زراعت در شهرستان افزایش پرورش زنبورعسل مزیت دارد. پرورش زنبور عسل از
            جمله مشاغلی است که می تواند سود خوبی به همراه داشته باشد. باردهی گل
            ها و میوه ها با گرده افشانی توسط زنبور عسل افزایش می یابد. این مسئله
            باعث شده ارزش اقتصادی پرورش زنبور عسل بسیار بیشتر از ارزش ریالی حاصل
            از تولید عسل باشد. در طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد
            کندوها می توان به فروش کندو نیز فکر کرد و به سود خوبی دست یافت. در
            مناطق گرمسیری از هر کندو یک بچه کندو گرفته می شود. در ضمن محصول
            مزرعه پرورش زنبور عسل صرفاً کندو و عسل نیست؛ موم، زهر و ژل آن نیز
            قابل فروش است.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            در یک نگاه کلی می توان گفت نقش کشاورزی و به خصوص باغداری در کاهش فقر
            بسیار چشمگیر بوده و در برقراری الگوی صحیح توسعه شهری مؤثر است و در
            صورت بی توجهی به این بخش، توسعه شهرنشینی، الگوی متمرکز و ناسالمی به
            خود می‌گیرد که پیدایش شهرهای بزرگ با هزینه زندگی بسیار بالا مثال
            بارز آن است. در شهرستان اردل محصولات باغی متنوعی تولید می‌گردد که
            افزایش تولید برخی از آن‌ها پیشنهاد می‌شود. از جمله محصولات مزیت دار
            در شهرستان، سیب، هلو و انگور است که افزایش تولید آن‌ها با توجه به
            شرایط شهرستان اردل و وجود بازار مصرف مناسب هم به صورت تازه‌خوری و هم
            فراوری شده، پیشنهاد می‌شود.
          </p>
          <p>
            گردو و بادام از دیگر محصولات باغی شهرستان هستند که افزایش تولید
            آن‌ها قابل سرمایه‌گذاری است. گردو، درختی چندساله و مقاوم است که پس
            از رشد کامل، هر درخت تا 18 کیلوگرم تولید محصول خواهد داشت. محصول
            نهایی قیمت بالایی دارد که هم در داخل کشور طرفداران زیادی داشته و هم
            قابلیت بالای صادرات دارد. در صورت احداث باغ گردو، تا سال های سال
            نیاز به سرمایه گذاری و کشت دوباره وجود ندارد؛ زیرا درخت گردو دارای
            عمر طولانی است و تا ده ها سال قابلیت برداشت دارد. میوه گردو هم جزء
            معدود میوه هایی است که هیچ گونه نیازی به هزینه انبار در سردخانه
            ندارد و به دلیل ماندگاری طولانی، می تواند چند ماه و حتی چند سال مورد
            مصرف قرار گیرد. در ضمن چوب درخت گردو هم برای منبت کاری، خراطی و کنده
            کاری، ساخت مجسمه و اشیاء دکوری، ساخت آلات موسیقی و همچنین در
            دکوراسیون داخلی منزل و ساخت روکش های چوب بسیار پرکاربرد است. این چوب
            نیمه سنگین و نیمه سخت بوده و مقاومت مناسبی در برابر فشار، خمش، رطوبت
            و کشش دارد. بادام یکی از میوه های سردرختی خشک و از جمله محصولات
            ارگانیک محسوب می شود. از ویژگی های درخت بادام این است که نسبت به کم
            آبی مقاوم و نگهداری آن نیز نسبت به سایر درختان آسانتر است. این میوه
            ی باارزش با قیمت بالایی در بازارفروش، عرضه می شود و توسعه باغات
            مربوط به آن با درآمدزایی بسیار خوبی روبه رو خواهد بود.{" "}
          </p>
          <p>
            باغات زردآلو، گیلاس، پسته، آلو و انار نیز در شهرستان اردل وجود دارد
            .طبق بررسی‌های انجام‌شده شرایط برای افزایش تولید این محصولات فراهم
            است؛ اما مزیت کمتری نسبت به محصولات قبلی معرفی‌شده، دارند.
          </p>
          <p>
            در شهرستان چندین واحد گلخانه ی سنتی و نیمه صنعتی دایر است که تولید
            صیفی جاتی نظیر گوجه فرنگی، خیار، بادمجان و فلفل و همچنین پرورش گل
            های زینتی نظیر رز را انجام می دهند. برای افزایش فعالیت گلخانه ها
            منوط به اینکه در فصل زمستان فعالیت نکنند، قابلیت خوبی وجود دارد.{" "}
          </p>
          <p>
            پرورش قارچ دکمه ای به صورت خانگی و در فضاهای کوچک در حال انجام است؛
            ولی مسئله ی اصلی در این زمینه، نبود بازار مصرف داخلی در شهرستان است؛
            به‌گونه‌ای که برای فروش محصولات تولیدی باید در خارج از شهرستان
            بازاریابی نمود ، درصورت تأمین بازار مصرف، افزایش تولید قارچ مزیت
            دارد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی، بررسی‌ها نشان می‌دهد که سالانه
            مقداری از آن در مراحل کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند.
            از سوی دیگر برداشت و یا تولید بسیاری از محصولات کشاورزی در یک بازه
            زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال صورت می‌پذیرد. لذا
            صنایع تبدیلی می‌تواند زمان استفاده را افزایش دهد و از میزان ضایعات
            آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و
            جلوگیری از اتلاف و ضایع شدن محصولات می‌گردد.
          </p>
          <p>
            باتوجه به رونق دامداری و پرورش طیور و همچنین تولید علوفه‌های دامی،
            تولید خوراک دام، طیور و ماهی در شهرستان مزیت دارد . با اجرای پروژه
            های صنعتی که از ضایعات کشاورزی و… خوراک دام تولید شود، هم غذای مورد
            نیاز دام‌ها تأمین می شود و شهرستان را به خودکفایی سوق می دهد و هم
            استفاده از مواد اولیه ارزانتر در تولید این محصول سبب خواهد شد تا
            قیمت تمام شده آن پایین تر و در نتیجه قیمت فروش آن نیز پایین باشد.
            تولید خوراک دام می تواند زمینه اشتغال خوبی را به طور مستقیم و غیر
            مستقیم برای افراد ایجاد کند.{" "}
          </p>
          <p>
            تغییر سبک زندگی مردم برای استفاده از محصولات با بسته‌بندی‌های کوچک و
            متنوع و همچنین تولید حبوبات در شهرستان، کسب‌وکار بسته‌بندی حبوبات را
            دارای مزیت کرده‌است. بسته‌بندی زعفران تولیدی در شهرستان نیز از دیگر
            مزیت‌های شغلی پیشنهادی است که در اولویت‌های پایین تر قرار می‌گیرد.
          </p>
          <p>
            فراوانی عسل تولید شده در سطح شهرستان و استان، شرایط را برای راه
            اندازی کسب و کار بسته‌بندی عسل در اردل فراهم کرده است . ویژگی مهم
            عسل آن است که این ماده طبیعی به دلیل نداشتن آب، به شرط دوری از
            رطوبت، در مدت طولانی فاسد نمی‌شود. این ماده فقط در صورتی ارزش غذایی
            خود را از دست می‌دهد که بیش از ۶۰ درجه، حرارت ببیند. البته برای حفظ
            قدرت ضد میکروبی عسل باید آن را در مکانی تاریک و یا در ظرف شیشه ای
            مات یا تیره خارج از یخچال نگه داشت. نگهداری عسل در ظروف فلزی برای
            مدت طولانی مناسب نیست. بدین منظور امروزه بسته بندی عسل به شکل های
            جذاب، خلاقانه و مناسب جهت نگهداری رو به افزایش است. بسته‌بندی های
            شکیل، باعث جذب بیشتر مشتری و همچنن تسهیل در حمل و نقل عسل می‌شود؛
            لذا کار کردن در حوزه بسته بندی عسل تولیدی شهرستان علاوه بر سودآوری
            باعث ایجاد اشتغال پایدار می‌شود.{" "}
          </p>
          <p>
            علی‌رغم پرورش زیاد دام در شهرستان، کشتارگاهی در این زمینه وجود ندارد
            و برای انتقال دام ها برای کشتار باید هزینه‌ی زیادی صرف شود؛
            درصورتیکه اگر این واحدها در شهرستان ایجاد شود، به نفع دامداران و شخص
            سرمایه‌گذار خواهد بود .
          </p>
          <p>
            ایجاد سردخانه برای محصولات تولید شده به دو دلیل برای شهرستان مفید
            است، یکی اینکه سودآوری بهتری برای شهرستان خواهد داشت و دیگری اینکه
            می توان از این محصولات برای فرآوری استفاده کرد.{" "}
          </p>
          <p>
            به دلیل حجم به نسبت بالای تولید مرغ های گوشتی و همچنین بوقلمون و
            شترمرغ در شهرستان ایجاد واحدی برای بسته بندی گوشت این طیور و ارسال
            این محصولات به مناطق دیگر پیشنهاد می‌شود. تولید روغن شترمرغ نیز در
            شهرستان قابلیت تولید دارد؛ ولی این تولیدات مزیت کمتری نسبت به بسته
            بندی گوشت آن دارد. بسته‌بندی گوشت ماهی نیز، باتوجه به تولید ماهی بیش
            از نیاز شهرستان، مزیت خوبی دارد .
          </p>
          <p>
            یکی از تولیداتی که در شهستان به دلیلوجود میزان زیاد ماهی قابلیت
            انجام دارد، تولیدپودر گوشت ماهی است. پودرگوشت ماهی به عنوان منبع
            پروتئین و اسیدهای امینه در تغذیه دام، طیور و آبزیان دارای حساسیتهای
            بسیاری در ایران و جهان هستند. در حال حاضر این محصولات در صنعت
            دامداری و مرغداری و پرورش شیلات که دومین صنعت کشور می باشند، مصرف
            دارد. پودر گوشت ماهی تا 5 درصد از ماده تشکیل دهنده دانه مرغ گوشتی،
            همچنین در دامپروری، میزان مصرف پودر گوشت ماهی به‌طور متوسط 5 تا 7 %
            و حداکثر 10 % می‌باشد و در خوراک آبزیان میزان استفاده تا 20 درصد نیز
            هست. گوشت ماهی و فضولات حاصل از آن پس از پودر و خشک شدن مورد استفاده
            قرار می گیرد. با توجه به اینکه فعالیت در حوزه ی شیلات ودامداری در
            این شهرستان رونق خوبی دارد، احداث واحدی برای این تولیدات دارای مزیت
            است.
          </p>
          <p>
            لازم به ذکر است در صورت دقت نکردن به بازارفروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد.
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازارفروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل رایج در بین مردم شهرستان است. تعدادی مرغداری
            صنعتی در شهرستان وجود دارند که اکثرا به پرورش مرغ گوشتی مشغول هستند.
            طبق بررسی‌های انجام‌شده ظرفیت شهرستان برای احداث مرغداری‌های جدید
            گوشتی اشباع شده ولی می‌توان در زمینه پرورش مرغ تخم‌گذار و بومی
            فعالیت کرد . البته پرورش مرغ بومی از اولویت‌های بعدی این رسته به
            حساب می‌آید.{" "}
          </p>
          <p>
            پرورش شترمرغ و بوقلمون نیز از جمله طیوری هستند که در اردل پرورش داده
            می شوند و همچنان به دلیلبازار فروش خوب دارای مزیت هستند. گوشت
            بوقلمون دارای خواص غذائي ويژه ای است، محدوديت مصرف خاصي نيز ندارد و
            مي تواند جايگزين مناسبی براي گوشت قرمز علی الخصوص در بيمارانی که
            مصرف گوشت قرمز برای آنها با محدوديت هایی همراه است، مطرح گردد. از
            ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز در يک
            لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد وزن يک لاشه 8 کيلوئي
            را تشکيل مي دهد. تولید بوقلمون گوشتی به دلیل به صرفه بودن تولید، در
            دسترس بودن نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز امکان
            انجام صادرات به کشورهای منطقه حائز اهمیت است. شترمرغ در گروه پرندگان
            طبقه بندی شده و گوشت آن جزء گوشت‌های قرمز محسوب می‌شود که نسبت به
            دیگر گوشت‌های قرمز کم چرب‌تر و سالم‌تر است به طوری که ۹۰ درصد آن
            قابلیت هضم داشته و بعد از گوشت ماهی در رتبه دوم قرار دارد. پوست این
            پرنده از بهترین نوع چرم بوده، مقاومتش3 برابر چرم گاو است، ظرافت خاصی
            دارد و در تولید کیف و کفش با قیمت بالا به کار می رود. علاوه بر آن،
            از پر و تخم شترمرغ، ناخن و قرنیه چشم آن برای مصارف صنعتی، دارویی،
            زینتی و نیز تولید نخ بخیه استفاده می شود. همچنین با استفاده از پوکه
            تخم این پرنده در زمینه صنایع دستی و خلق آثار هنری، می توان اشتغال
            زایی کرد.
          </p>
          <p>
            کبک و بلدرچین از دیگر ماکیان قابل پرورش در شهرستان هستند که در
            اولویت‌های آخر این حوزه قرار دارند. البته تولید انبوه در حیطه ی
            پرورش این طیور منوط به یافتن بازار فروش مناسب است؛ زیرا این قبیل
            تولیدات را قشر خاصی مصرف می کنند.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            اردل، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما پتانسیل های
            شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای صنعتی
            جدید ظرفیت وجود دارد.
          </p>
          <p>
            معادن سنگ در اطراف شهرستان اردل وجود دارد. تنها واحد فعال در این
            زمینه یک کارگاه سنگ شکن است و این محصول به صورت خام به استان های
            اطراف نظیر اصفهان ارسال می شود. احداث واحد های سنگبری و فرآوری سنگ
            های معدنی نظیر تولید پودر مش، برای شهرستان مزیت خواهد داشت. مش در
            علم خاک شناسی به دانه بندی خاک مورد نظر برای الک کردن آن اشاره دارد.
            بدین معنی که اندازه ذرات خاک مورد نظر برای گذر از الک یا سرند مورد
            نظر مش نامیده میشود و یک توده خاک یا پودر ترکیبی از دانه بندی های
            متفاوت است که شامل توزیعی از اندازه های متفاوت است. از پودر مش در
            صنایع مختلفی نظیر تولید گچ، سیمان و... استفاده می شود.
          </p>
          <p>
            ایجاد واحدهای ماسه شویی، تولید آجر و کاشی و سرامیک در شهرستان اردل
            دارای مزیت است. البته یک واحد تولید کاشی و سرامیک در شهرستان فعالیت
            می‌کند و احداث واحد دیگر منوط به تأمین بازار فروش است.{" "}
          </p>
          <p>
            در شهرستان اردل چشمه های آب مرغوب و با خاصیتی وجود دارد، که می توان
            در کنار آن‌هاکارخانه ی آب معدنی احداث کرد، البته چند سالی است که یک
            کارخانه برای تولید آب معدنی در حال احداث است؛ ولی هنوز به پایان
            نرسیده است.{" "}
          </p>
          <p>
            ایجاد واحد تولید نمک از چشمه نمکی شهرستان با شرط توجه به تامین مواد
            اولیه و بازار فروش، مزیت دارد.{" "}
          </p>
          <p>
            با توجه به اینکه تولیدات زراعی در شهرستان زیاد است و باید کشاورزی در
            اردل به سمت مکانیزه شدن برود، ایجاد واحد های ساخت ادوات کشاورزی،
            پیشنهاد می‌شود.{" "}
          </p>
          <p>
            در صورت احداث شهرک صنعتی، تامین مواد اولیه و صادرات محصولات تولیدی،
            ایجاد کارخانه‌های پوشاک و لوازم خانگی مزیت دارد.{" "}
          </p>
          <p>
            واحد های سنگ شکن، تولید آرد و تولید خوراک دام و طیور از واحدهای فعال
            شهرستان هستند .
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش شیلات در شهرستان اردل شامل پرورش ماهیان قزل آلا و زینتی می
            شود. در این شهرستان حوضچه ها و استخر های پرورش قزل آلا بسیارزیاد است
            وبا توجه به اینکه پرورش ماهی در کل استان کهگیلویه و بویر احمد به
            میزان زیاد انجام می شود، این فعالیت در داخل شهرستان اردل دیگر مزیت
            زیاد شدن ندارد ولی در حوزه ی پرورش ماهیان زینتی همچنان جا برای
            فعالیت وجود دارد.
          </p>
          <p>
            در سال‌های اخیر، با توجه به رواج آپارتمان‌نشینی و دور افتادن انسان
            از طبیعت، شرایط به‌گونه‌ای رقم خورده است که بازار ماهیان زینتی رونق
            گرفته و زمینه‌ساز ایجاد مشاغل مختلف شده است. به‌طوری‌که امروزه در
            بسیاری از شهرها، چندین مغازه به خرید و فروش این آبزیان مشغول هستند.
            پرورش ماهیان زینتی نیاز به آب کمی دارد و می‌توان از آب‌های شهری برای
            تولید آنها استفاده کرد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            مشاغل خدماتی یکی از منابع مهم کسب درآمد از گذشته بوده است. تنوع در
            حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی گیرد که
            میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با یکدیگر تفاوت
            هایی دارد. برای مثال گردشگری از فعالیت هایی است که با سودآوری بسیاری
            همراه است. باتوجه به وجود جاذبه‌های طبیعی و دیدنی در شهرستان اردل،
            ظرفیت‌های خوبی برای سرمایه گذاری در زمینه گردشگری وجود دارد. احداث
            مجتمع‌های رفاهی و اقامتگاه بومگردی از اولویت‌های اول حوزه در زمینه
            گردشگری هستند.
          </p>
          <p>
            ایجاد شهربازی، سالن‌های ورزشی و فروشگاه‌های زنجیره‌ای از دیگر مشاغل
            خدماتی هستند که در صورت راه‌اندازی با استقبال خوبی از طرف مردم
            شهرستان مواجه خواهد شد. موارد بیان شده طبق اولویت هستند.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی از جمله مشاغل رایج در شهرستان اردل است که بیشتر توسط
            بانوان و در حوزه‌های نمدمالی، جاجیم دوزی، گلیم بافی، گل دوزی، خورجین
            بافی و ملیله بافی انجام می‌شود. برای تولید این محصولات و مخصوصا
            گلیم، گبه و نمد، اگر آموزش‌های لازم به جوانان داده شود، بازار فروش
            در دسترس باشد و یک سرپرست برای این تولیدات وجود داشته باشد، مزیت
            تولید در این زمینه ها وجود دارد.{" "}
          </p>
          <p>
            یکی دیگر از مشاغل پیشنهادی در شهرستان شمع‌سازی است. کسب و کار شمع
            سازی از مشاغل خانگی پر درآمدی است که امروزه به علت خواص دارویی، خواص
            زینتی و زیبایی، بازار مصرفی بالا و پررونقی دارد. این کسب و کار از
            ریسک پایینی برخوردار است و چون مواد اولیه آن به راحتی تامین می شود،
            بازار مصرفی خوبی دارد (مواد اولیه شمع سازی، پارافین می‌باشد که ایران
            منابع سرشاری از پارافین را داراست). شمع‌سازی در مقیاس کوچک قابل
            انجام است و خطرهایی مثل بیماری و یا آب و هوای اقلیمی، کار و سرمایه
            را تهدید نمی کند. به همین خاطر می تواند از بهترین گزینه ها برای راه
            اندازی کسب و کار باشد و با بازاریابی مناسب سود خوبی را عاید شخص کند.
            در صورت تامین بازار می‌توان این شغل را در مقیاس‌های بزرگ‌تر نیز
            راه‌اندازی کرد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
