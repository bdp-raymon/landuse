import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-16"].cities["IR-1623"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        birds: "طیور",
        gardening: "باغداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        agriculture: "زراعت",
        food_industry: "صنایع غذایی",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        industry: "صنعت",
        services: "خدمات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان هیرمند به مرکزیت دوست محمد در استان سیستان و بلوچستان قرار
            دارد. این شهرستان دارای دو بخش مرکزی و قرقری است و از غرب به شهرستان
            زابل و نیمروز، از شرق به کشور افغانستان، از شمال به کشور افغانستان و
            از جنوب به شهرستان زهک و زابل منتهی می‌شود. خشکسالی‌های پیاپی، خشک
            شدن دریاچه هامون، بسته شدن مرز افغانستان، شرایط نامساعد آب و هوا،
            بادهای گرد و خاک ناشی از خشک شدن هامون و نبود شغل مناسب برای جوانان،
            آسیب بسیارجدی به این شهرستان وارد کرده که به سبب آن بخش قابل توجه
            سکنه ی این شهرستان به دیگر شهرهای کشور کوچ کرده‌اند. جمعیت شهرستان
            هیرمند طی مشکلات اخیر نظیر خشکسالی، خشک شدن هامون و انسداد مرز نه
            تنها افزایش نداشته، بلکه در چند سال گذشته روند کاهشی را طی کرده است.
            آب و هوای شهرستان هیرمند همچون دیگر شهرستان های سیستان و بلوچستان
            گرم و خشک است و در زمستان ها هوای سرد و در تابستان ها هوای گرم و گاه
            سوزان بر این شهرستان حاکم می شود. جمعیت شهرستان هیرمند طبق آخرین
            آمار 63979 نفر گزارش شده‌است. شکل زیر موقعیت شهرستان هیرمند را نشان
            می دهد.در فصل های بهار و تابستان بادهای صد وبیست روزه سیستان بر این
            شهرستان و منطقه سیستان تاثیر می گذارد و گاه باعث وزش توفان های شدید
            همراه با ریزگرد ها می شود که سبب ایجاد خسارات و ایجاد مشکلاتی برای
            مردم سیستان می گردد.خشکسالی های اخیر و خشکی بخش های بزرگی از دریاچه
            هامون و قرارگیری شهرستان در دشتی پهناور تاثیر بسیاری بر میزان گرد و
            خاک ناشی از توفان ها دارد. میزان بارش در این شهرستان کم و بیشتر به
            صورت باران است و معمولا هر چند سال یکبار در شهرستان برف می‌بارد.{" "}
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
            مي‌شود. در ادامه تحليل شهرستان هیرمند ارائه‌شده‌است.
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
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            شرایط اقلیمی و جغرافیای متنوع شهرستان هیرمند بستر مناسبی جهت انجام
            فعالیتهای دامپروری است و عمده ترین محور اشتغال و تامین معاش مردم
            شهرستان دامداری بوده که دوشا دوش سایر فعالیتهای بخش کشاورزی از
            مهمترین منابع تولیدی شهرستان به شمار می رود. شهرستان هیرمند یکی از
            قطب های دامپروری جنوب شرق کشور به شمار می رود. اکثر دام های منطقه
            بدلیل کویری و بیابانی بودن مراتع غالباً از دامهای کوچک و علی الخصوص
            ترکیب بیشتر گله ها از نوع گوسفند و بز هستند لذا دام هایی که در مرتع
            حضور دارند عبارتست از گوسفند، بز، شتر و گاو از مراتع بهره برداری می
            کنند. بنابراین بیشترین درصد در ترکیب گله های استان را ابتدا گوسفند و
            بز و سپس گاو و شتر تشکیل می دهد.
          </p>
          <p>
            از جمله پتانسیل های بخش دامپروری در هیرمند می توان به بهره مندی از 2
            نژاد گاو بومی سیستانی و دشتیاری که به لحاظ خصوصیات گوشتی و شیری و
            سازگاری با شرایط آب و هوای منطقه پرورش داده می شوند و همچنین وجود بز
            و گوسفند بومی اشاره کرد. در شهرستان هیرمند تعداد دام های سبک زیاد
            است؛ اما تمایل مردم این شهرستان به پرورش دام های سنگین است؛ زیرا
            شیردهی و تولید گوشت بیشتری نسبت به بز و گوسفند دارند و همچنین به
            دلیل کمبود مراتع، این شهرستان دام های سنگین برای پرورش به مرتع زیادی
            نیاز ندارند. در سالهای اخیر نیز بعضی از دامداری های نیمه صنعتی عمل
            لقاح مصنوعی را برای اصلاح کردن نژاد های بومی انجام داده اند و تولید
            گوشت و شیر بیشتر شده است.{" "}
          </p>
          <p>
            با توجه به نیاز مردم شهرستان و کشور به گوشت قرمز، در شهرستان هیرمند
            پرورش دام های سبک و سنگین گوشتی از نژاد های بومی دارای توجیه مناسبی
            است.
          </p>
          <p>
            {" "}
            در سال های اخیردام های شیری اصلاح شده از نژاد هشتاین به این شهرستان
            آورده شده اند، البته اصلاح نژاد این دام ها به گونه ای رخ داده است که
            برای شرایط آب و هوایی منطقه مساعد هستند و دامدار های هیرمند نیز به
            پرورش آنها تمایل دارند، در نتیجه پرورش گاو های هلشتاین با بهره وری
            بهتر نسبت به دام های بومی در تولید شیر دارای مزیت هستند.
          </p>
          <p>
            بزها قادرند تعداد وسیعی از خوراك بخصوص سرشاخه ها و درخت و درختچه
            هارا مصرف کنند. بزها نسبت به گاو وگوسفند قدرت زنده مانی بیشتر در
            مناطق حاره اي ( با کمبود علوفه و میزان بارندگی سالیانه کمتر از70
            میلیمتر ) دارند. در نتیجه پرورش بزهای گوشتی در شهرستان هیرمند
            پیشنهاد می شود.
          </p>
          <p>
            پرورش شتر در کشور سابقه‌ای دیرینه دارد و گذشتگان از دیرباز از کرک،
            مو، شیر و گوشت شتر استفاده می‌کردند. صنعت شترداری فواید بسیار زیادی
            دارد. از پوست، گوشت، شیر، کرک و کوهان شتر می‌توان استفاده کرد و
            استفاده از هرکدام از این موارد می‌تواند صنعت پرورش شتر را به صنعتی
            سودآور تبدیل کند. این حیوان با کمترین هزینه ممکن برای نگهداری به
            دلیل دستگاه خاص گوارشی منحصر به فرد، بی ارزشترین گیاهان را از لحاظ
            تغذیه ای تبدیل به سلولز و انرژی می کند و این درحالی است که در شرایط
            کم آبی نیز این حیوان تا مدتها هیچ نیازی به آب ندارد. این خصوصیات شتر
            را به سرمایه ای سرگردان در کویر تبدیل کرده است. شتر در استفاده از
            مراتع با هیچ دام دیگری رقابت ندارد و از علوفه ای استفاده می کند که
            توسط سایر دام ها استفاده نمی شود . در شهرستان هیرمند شترداری به
            میزان کمتری انجام می شود؛ اما شرایط اقلیمی و آب و هوایی منطقه و
            همچنین استقبال از گوشت این دام در کشور های اطراف باعث می شود تا به
            میزان بیشتری در این زمینه فعالیت شود.{" "}
          </p>
          <p>
            بدلیل شرایط نامساعد جوی و اقلیمی زنبورداری به ندرت انجام می شود و
            برای افزایش فعالیت در این زمینه مزیتی وجود ندارد.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            در شهرستان های هامون، هیرمند، زهک، میرجاوه و سراوان پرورش شتر مرغ در
            حال انجام است. سالیانه بیش از 50 تن گوشت شترمرغ در استان تولید و به
            بازار عرضه می شود. این صنعت توانسته از زمان تاسیس خود در استان
            اشتغال زایی مناسبی داشته باشد. مصرف گوشت شترمرغ به دلیل کم چرب بودن
            و پایین بودن میزان کلسترول نسبت به سایر گوشت های قرمز از سلامت
            ویژه‌ای برخوردار است. شهرستان هیرمند یکی از قطب های پرورش شتر مرغ در
            شرق کشور است و با توجه به بازار خوبی که برای گوشت شتر مرغ در خارج از
            استان و کشور وجود دارد و همچنین قابلیت اقلیمی و آب و هوایی شهرستان
            هیرمند، پرورش این گونه ی جانوری در واحد های صنعتی و نیمه صنعتی دارای
            مزیت خوبی است.
          </p>
          <p>
            در پرورش مرغ های بومی، عدم نیاز به سرمایه بسیار زیاد و عدم نیاز به
            فضای بسیار زیاد در کنار وزن گیری و تخم گذاری مناسب آن ها، از مواردی
            است که پرورش این گونه ها را با استقبال روبه رو کرده است. بدین ترتیب
            در سالن، حیاط خانه های روستایی و یا در باغ می توان به پرورش انواع
            نژاد های پر بازده مرغ محلی شهرستان پرداخت. مرغ محلی معمولا در هر آب
            و هوایی دوام مناسبی دارد. این موضوع باعث شده تا افراد مختلف در هر
            منطقه ای از شهرستان هیرمند بتوانند از پرورش مرغ بومی برای خود کسب
            درآمد. در شهرستان هیرمند، پرورش مرغ های بومی گوشتی و تخم گذار نسبت
            به مرغداری های صنعتی دارای بازار بسیار مناسبی است و وجود یک پشتیبان
            برای ایجاد بازارفروش می تواند فعالیت در این حوزه را در شهرستان
            هیرمند گسترش و افزایش دهد.{" "}
          </p>
          <p>
            واحد های صنعتی برای پرورش بلدرچین و کبک نیز در شهرستان دایر است، در
            واقع پرورش این گونه ها با اینکه سوداوری زیادی ندارد؛ اما به دلیل
            اینکه در شهرستان برای تخم بلدرچین و همچنین گوشت کبک و بلدرچین
            استقبال وجود دارد، پرورش آنها برای شهرستان مزیت دارد.
          </p>
          <p>
            گوشت بوقلمون دارای ویتامین های B1– B3–B6–B12 و سرشار از ویتامین A و
            اسید فولیک می باشد. همچنین کلسترول آن نصف گوشت قرمز است و کلسترول بد
            خون را کاهش می دهد و چربی های اشباع شده در آن نصف گوشت قرمز است و در
            هر ۳۰ گرم گوشت بوقلمون، کمتر از ۱گرم چربی وجود دارد. بوقلمون با جمجه
            ای ۴۰ گرمی سرعت رشد بالایی دارد به طوریکه در طول ۳ ماه به ۱۵ کیلوگرم
            می رسد و به سرعت رشد می کند. تنها پرنده ای است که ۲ نوع گوشت دارد،
            سینه این پرنده (بوقلمون) دارای گوشت سفید و گوشت ران آن، قرمز است،
            پرورش بوقلمون در شهرستان به صورت سنتی انجام می شود و با توجه به
            بازار فروش خوبی که در استان های خراسان جنوبی، فارس و اصفهان دارد،
            برای پرورش آن به صورت سنتی یا در واحد های نیمه صنعتی در شهرستان
            هیرمند مزیت وجود دارد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            در شهرستان هیرمند فعالیت های کشاورزی و باغداری به دلیل مسدود شدن رود
            هیرمند توسط کشور افغانستان از رونق افتاده است. با این حال در فصل
            بهار که سرریز آب این رود به شهرستان وارد می شود، برای باغات استان
            قابل استفاده است و به کمک آن تولیدات جالیزی، صیفی جات و سبزیجات
            انجام می گیرد و در بازه ی سه تا چهارماه به محصول می رسند و این
            تولیدات نیز سوددهی خوبی دارند.{" "}
          </p>
          <p>
            صیفی جات نظیر گوجه فرنگی، خیار و بامیه در هیرمند در مزارع و باغات به
            صورت آزاد تولید می شود و در چند سال اخیر نیز فعالیت های گلخانه ای در
            شهرستان برای تولید صیفی جات و سبزیجات صورت می گیرد و همچنان در این
            زمینه برای هیرمند مزیت مناسبی وجود دارد.
          </p>
          <p>
            از جمله محصولاتی که در گلخانه های شهرستان قابلیت تولید دارد، بامیه
            است. بامیه در آب و هوای معتدل شهرستان هیرمند می روید. این گیاه دارای
            گل های بزرگی است که در نهایت به گیاه سبزغلاف مانند پر از دانه ای
            تبدیل می شود. این محصول باارزش که از آن به عنوان «بمب خاصیت» هم یاد
            می شود، خطر ابتلا به بسیاری از بیماری ها و سرطان ها را کاهش می دهد و
            سیستم ایمنی بدن را قوی می کند. در شهرستان هیرمند تولید بامیه در فصل
            بهار به میزان زیاد انجام می شود و با توجه به اینکه صیفی جات و
            سبزیجات این منطقه کیفیت و سوددهی مناسبی دارند، تولید بامیه در کنار
            سایر صیفی جات نظیر گوجه فرنگی و خیار دارای مزیت است.
          </p>
          <p>
            عمده محصول باغی تولید شده در شهرستان انگور است و در کنار این محصول،
            محصولات جالیزی نظیر هندوانه سیستانی و خربزه های قندک و سفیدک نیز
            تولید می شوند، در واقع با توجه به کم آبی منطقه بهتر است که از کاشت
            بیشتر خربزه و هندوانه به سمت محصولات کم آب تر حرکت کرد، البته این
            محصولات فقط در هیرمند و بخش سیستان تولید می شوند و بازار فروش خوبی
            دارند، کاشت آنها متوقف نمی شود؛ ولی باید تولید این محصولات را در
            همین حد نگه داشت.
          </p>
          <p>
            انگور های تولید شده در شهرستان یاقوتی هستند و باید آبیاری شوند،
            کیفیت انگور های این منطقه بسیاربالاست و بیشتر این محصولات به کشور
            های اطراف ارسال می شود. برای تولید بیشتر در حوزه ی انگور یاقوتی و
            همچنین احداث باغات انگور دیمی مزیت خوبی وجود دارد و می توان در زمینه
            ی این تولیدات فعالیت بیشتری انجام داد.
          </p>
          <p>
            در شهرستان هیرمند با توجه به اینکه کم آبی حاکم است، کاشت گل محمدی از
            جمله گیاهانی است، که برای تغییر الگوی مصرف استفاده شده است و با توجه
            به بازار خوبی که این محصول در کشور های اطراف و استان خراسان رضوی
            دارد، افزایش تولید آن دارای مزیت است.
          </p>
          <p>
            همچنین شهرستان هیرمند دارای گیاهان خودروی دارویی است و با توجه به
            اقلیم این منطقه کاشت آلوئه ورا با خواص درمان تبخال، درمان راش پوستی،
            درمان یبوست و... و همچنین داشتن بازار فروش خوب در داخل کشور و کشور
            های اطراف، برای شهرستان هیرمند قابل پیشنهاد است. آلوئه ورا به رطوبت
            بالا، آب ایستایی و آبیاری زیاد حساس است. از این رو آبیاری گیاهان
            باید زمانی انجام شود که خاک آن ها کاملا خشک شود. چنانچه این گیاه در
            مناطق گرم و خشک شهرستان کاشته شود، باید تحت آبیاری به موقع قرار
            بگیرد. آلوئه ورا را در هر نوع خاک شهرستان می توان کاشت، ولی خاک های
            سبک که از زهکشی مناسبی برخوردار باشند، برای کاشت این گیاه توصیه می
            شود. بازار و جایگاه آلوئه ورا در کشور جدید بوده و آن چنان که باید
            جایگاه خود را پیدا نکرده است اما این گیاه از اندک گیاهان دارویی است
            که علاوه بر مصرف دارویی در حوزه های آرایشی و تغذیه ای نیز کاربرد
            دارد.
          </p>
          <p>
            طبق بررسی های انجام شده تولید فیسالیس در شهرستان هیرمند قابل توصیه
            است. فیسالیس گیاهی از خانواده ی بادمجانیان است که میوه ی رسیده ی آن
            دارای خواص دارویی، صنعتی و خوراکی است. این گیاه دارای دو گونه ی یک
            ساله و چند ساله است. با توجه به شرایط اقلیمی شهرستان هیرمند و همچنین
            بازار فروش مناسب برای این میوه در کشور های اطراف، احداث باغات تولید
            آن دارای مزیت است.{" "}
          </p>
          <p>
            انبه از جمله میوه هایی است که در مناطق گرمسیر شهرستان می توان اقدام
            به کاشت آن نمود. میزان بارندگي برای کاشت انبه اهمیت زیادی ندارد،
            بلکه شدت بارندگي و توزیع آن در طول سال از اهمیت خاصي برخوردار است.
            چرا که انبه مي تواند در مناطقي از شهرستان با بارندگي کمتر از 373
            میليمتر رشد کند، مشروط بر اینکه بارندگي در زمان حداکثر نیاز گیاه
            یعني دوره رشد میوه رخ دهد. انبه در مناطقي که در فصل گلدهي بارندگي
            زود به زود اتفاق ميافتد و یا رطوبت نسبي بالاتر از 33 درصد است، نمي
            تواند به خوبي میوه تولید کند؛ زیرا این شرایط موجب شیوع و گسترش آفات
            و بیماری هایي از قبیل سفیدک پودری و آنتراکنوز مي شود. با توجه به
            شرایط آب و هوایی و اقلیمی و همچنین بازار فروش مناسب برای این میوه در
            کشور های اطراف، احداث باغات این محصول و همچنین تولید انبه به صورت
            گلخانه ای در شهرستان هیرمند توجیه اقتصادی مناسبی دارد.
          </p>
          <p>
            باتوجه به گرمای شدید در شهرستان و همچنین نیاز به درختانی که در مقابل
            باد های 120 روزه مقاومت داشته باشند، احداث باغات موز و نارگیل دارای
            مزیت است. در واقع این میوه ها از جمله تولیدات پر سود هستند که برای
            شهرستان مزیت زیادی دارند؛ ولی تاکنون فعالیتی برای آنها صورت نگرفته
            است.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان هیرمند، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از محصولات تولید شده در شهرستان در مراحل
            کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا
            تولید بسیاری از محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛
            اما مصرف آن‌ها در طی سال صورت می‌پذیرد؛ لذا احداث صنایع تبدیلی در
            این شهرستان می‌تواند زمان استفاده از محصولات کشاورزی را افزایش دهد و
            از میزان ضایعات آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی،
            ایجاد درآمد و جلوگیری از اتلاف و ضایع شدن محصولات کشاورزی در این
            شهرستان می‌گردد.
          </p>
          <p>
            با توجه به اینکه گوشت تولید شده در شهرستان هیرمند بیشتر از نیاز
            شهرستان و استان است و در سال های اخیر به دلیل مصرف بالای گوشت در
            کشور، واردات این محصول انجام شده است، ایجاد واحدی برای بسته بندی
            گوشت و عرضه ی آن به فروشگاه های سراسر کشور دارای مزیت است.
          </p>
          <p>
            پرورش شتر در شهرستان هیرمند در حال افزایش است و با توجه به اینکه
            صنایع تبدیلی و تکمیلی این نوع دام سوددهی خوبی دارد، ایجاد واحدی برای
            فراوری پوست و پشم شتر و تولید محصولاتی نظیر روکش صندلی، زانوبند و
            همچنین نمد مالی دارای مزیت است.
          </p>
          <p>
            بیشتر پوست و پشمی که در هیرمند تولید می شود، به استان خراسان رضوی
            ارسال می شود. با توجه به اینکه این محصولات در کشور های اطراف بازار
            فروش خوبی دارد، ایجاد واحد تولید چرم و فراوری پوست دام ها در شهرستان
            قابلیت سرمایه گذاری را دارد.{" "}
          </p>
          <p>
            گوشت بوقلمون و بلدرچین در کشور های حوزه ی خلیج فارس بازار فروش خوبی
            دارد و بسته بندی گوشت این پرنده ها دارای مزیت است. همچنین تخم
            بلدرچین های تولید شده در واحد های صنعتی شهرستان با توجه به اینکه
            مصرف خوبی دارند، دارای مزیت است و می توان در این مورد نیز فعالیت
            کرد.
          </p>
          <p>
            تولید بالای دام و طیور نیاز به راه اندازی کشتارگاه های دام و طیور را
            در شهرستان هیرمند الزامی خواهد کرد. در کشتارگاه ها باید فضای مناسب
            برای کشتار دام سبک و سنگین به صورت همزمان وجود داشته باشد. همچنین
            باید آب مورد نیاز در زمان کشتار نیز تامین شده و تجهیزات و امکانات
            لازم برای رعایت مسائل بهداشتی و زیست محیطی در زمان کشتار فراهم شود.
            علاوه بر گوشت قرمز در ذبح دام، به عنوان اصلی ترین محصول کشتارگاه،
            سایر محصولات حاصل از ذبح گاو و گوسفند شامل محصولاتی نظیر پوست، زبان،
            مغز، دل و جگر و قلوه و… به دست خواهد آمد
          </p>
          <p>
            به دلیل اینکه دامداری در شهرستان به میزان زیاد انجام می شود، برای
            تولید خوراک دام و طیور در شهرستان مزیت وجود دارد و می توان در این
            زمینه واحدی را جهت تولید خوراک دام و طیور برای تامین نیاز شهرستان
            هیرمند و شهرستان های اطراف ایجاد کرد.
          </p>
          <p>
            تولید زیاد هندوانه در شهرستان باعث می شود همواره بخشی از این محصولات
            خراب شوند، لذا ایجاد واحدی جهت تولید آبمیوه و اسانس هندوانه برای
            شهرستان مزیت دارد. تولید پکتین (پروتئین ها و فیبرهای داخل میوه ی
            هندوانه هستند که خشک می شوند و در داخل آب حجیم شده و برای خوراک دام
            مورد استفاده قرار می گیرند) از هندوانه در اولویت های پایین تر برای
            شهرستان مزیت دارد.{" "}
          </p>
          <p>
            با توجه به بازارخوبی که برای چای ترش وجود دارد، ایجاد واحدی برای
            بسته بندی این محصولات به صورت چای کیسه ای که مصرف راحت تری دارند،
            برای شهرستان قابل پیشنهاد است.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            تولیدات زراعی شهرستان هیرمند شامل گندم، جو، عدس و یونجه به نسبت سایر
            محصولات از میزان بیشتری برخوردار هستند. البته این تولیدات بیشتر برای
            تامین نیاز شهرستان کشت می شوند و اگرمازاد داشته باشند به سیلوی
            شهرستان زابل ارسال می شوند. با توجه به تمهیداتی که جهاد کشاورزی در
            سال های اخیر برای مکانیزه شدن کشاورزی در نظرگرفته است، برای افزایش
            تولید گندم، عدس و جو مزیت بیشتری نسبت به تولید یونجه وجود دارد؛ زیرا
            میزان مصرف آب در یونجه بسیار بالاست و باید برای رفع این مشکل قبل از
            افزایش کشت اقداماتی را انجام داد.{" "}
          </p>
          <p>
            موقعیت آب و هوایی و اقلیم مناسب، هیرمند را به رویشگاه گیاهان دارویی
            كمیاب نظیر انغوزه، وشا، مورت، گز روغن، آلوئه ورا، سورنجان یا گل
            حسرت، ریشه شیرین بیان، زیره سیاه، چای ترش، مریم گلی، بادام كوهی و
            پونه تبدیل كرده است و در این راستا تولید گیاهان دارویی نظیر ختمی،
            چای ترش، خارشتر و زعفران برای شهرستان دارای مزیت است.{" "}
          </p>
          <p>
            {" "}
            اصلاح الگوی کشت یکی از راهکارهای دولت برای مدیریت منابع آب و عبور از
            تنش‌های آبی است چنانکه کشاورزان بایستی کشت محصولات استراتژیک همچون
            دانه روغنی کلزا را جایگزین محصولات آب‌دوست کنند.کلزا یکی از دانه‌های
            روغنی بسیار مهم است که در مناطق معتدل شهرستان هیرمند کشت می‌شود و
            کاشت این محصول کم آب‌بر و به‌صرفه می‌تواند نقش مهمی در تحقق اقتصاد
            مقاومتی و تضمین امنیت غذایی مردم شهرستان داشته باشد. کشت این محصول
            با توجه به اینکه در دوره ی کشت آن که در بهار و پاییز است، شرایط آب و
            هوایی هیرمند مناسب است، و از این رو برای شهرستان مزیت دارد.{" "}
          </p>
          <p>
            بادام زمینی از گیاهان کم آب است که از نظر اقتصادی می تواند در معیشت
            و درآمد کشاورزان شهرستان هیرمند تحول ایجاد کند و قابلیت خوبی جهت غرس
            در اراضی شیب دار و کشت به صورت دیم را دارد. در نتیجه احداث باغات
            برای تولید این محصول در شهرستان دارای مزیت است و این محصول به صورت
            آزمایشی تولید شده و جواب دهی خوبی داشته است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            صنایع غذایی را می‌توان یکی از مهم‌ترین بخش‌های صنعت تلقی کرد که
            ارتباط مستقیمی با امنیت غذایی دارد و از سوی دیگر همگام نبودن افزایش
            جمعیت و کمبود منابع غذایی یکی از چالش‌های اساسی این عرصه به‌شمار
            می‌رود. براساس آمارها، میزان تولید محصولات کشاورزی در کشور حدود ۱۰۰
            میلیون تن در سال برآورد می‌شود و از سوی دیگر سهم محصولات کشاورزی
            ایران از تولید محصولات کشاورزی حدود یک درصد کشورهای دنیا به‌دست آمده
            است. از این زاویه ضروری است که «ایجاد و توسعه صنعت غذا»،
            «اشتغال‌زایی»، «افزایش صادرات»، «افزایش ارزش افزوده» و «جلوگیری از
            ضایعات محصولات کشاورزی» در اولویت‌های سیاست‌گذاری قرار گیرد.
          </p>
          <p>
            با توجه به اینکه هدف از دامداری در شهرستان هیرمند بیشتر تولید گوشت
            می باشد، تولید گوشت چرخ شده و ارسال این محصولات به سراسرکشور دارای
            سوددهی خوبی است.
          </p>
          <p>
            تولید رب گوجه فرنگی در شهرستان به صورت خانگی انجام می شود؛ ولی برای
            ایجاد واحدهای کوچک تولید این محصول با توجه به اینکه در زمینه ی این
            تولیدات می توان از بانوان نیز به عنوان نیروی فعال استفاده کرد و برای
            بانوان نیز اشتغال ایجاد کرد و همچنین کیفیت بالای این محصولات، مزیت
            خوبی وجود دارد.
          </p>
          <p>
            تولید کشمش و شیره ی انگور بعد از فرش و پسته سومین محصول غیرنفتی و
            صادراتی کشور محسوب می شود. در شهرستان هیرمند انگور های یاقوتی تولید
            شده علاوه بر اینکه به صورت خام به کشور های اطراف ارسال می شود،
            محصولات فراوری شده ی آن نظیر کشمش، آبغوره و شیره ی انگور نیز صادر می
            شود و ایجاد واحدی برای تولید این محصولات در شهرستان برای سرمایه
            گذاران پیشنهاد می شود.
          </p>
          <p>
            کارخانه های تولید لبنیات در شهرستان هیرمند به دلیل افزایش سه برابری
            قیمت نهاده های تولید، قوانین دست و پاگیر، بی اعتنایی بانک های عامل و
            عدم حمایت لازم از طرف دولت با رکود جدی مواجه شده اند؛ در نتیجه ایجاد
            واحد صنعتی تولید لبنیات در شهرستان مزیت ندارد؛ ولی با این حال به
            دلیل استقبال مردم شهرستان هیرمند و شهرستان های اطراف از لبنیات سنتی،
            پتانسیل برای ایجاد کارگاه هایی برای تولید این محصولات وجود دارد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوان خود، روح و جان فرهنگ و هنر به یادگار مانده از نیاکان
            خویش را جاودانه می‌سازند. صنایع دستی سیستان و بلوچستان نیز نماد
            فرهنگ اصیل و تاریخ کهن و هنر بی‌مثال مردم این سرزمین اسطوره‌ای است،
            گوهرِ پاکیزه و قیمتیِ مردمی که نه به وسیله صنعت که به دستِ پرتوان
            صنعتگران، هنرمندان و بافندگان این دیار کهن تولید شده، گوهری پاکیزه
            که برآمده از رنجِ آدمیزاد است.
          </p>
          <p>
            سیستان و بلوچستان و از جمله شهرستان هیرمند دارای صنایع دستی متنوع و
            جذاب بی‌نظیری است که حاصل ذوق و خلاقیت ذهن و دستان توانای زنان و
            مردان هنرمند این خطه است و از جایگاه ویژه‌ای در میان مردم و به ویژه
            اقوام و عشایر برخوردار و پاسخگوی همه سلیقه‌ها است و جذابیت‌های خاص
            آنها سبب شده تقریباً هیچ مسافری از این استان دست خالی نرود.
          </p>
          <p>
            از آنجایی که صنایع دستی در نگاهی اساسی رنگ و بویی قومی و منطقه‌ای
            دارد، مواد اولیه ساخت آن نیز بیشتر مواد موجود در طبیعت اطراف است و
            سیستان و بلوچستان با تنوع جغرافیایی خاص و کثرت اقوام و مذاهب، نمود
            زیبایی از گنج‌های صنایع دستی است به طوری که شمال آن با آب و هوای گرم
            و خشک، مرکز با کوهستانی بودن و مناطق جنوبی استان با توجه به گرما و
            شرجی هوا هر یک صنایع دستی مخصوص خود را دارند.{" "}
          </p>
          <p>
            صنایع دستی شهرستان هیرمند شامل بافت قالی و تابلو فرش، بافت پرده خلک
            از حصیر، سوزن دوزی و خامه دوزی است. در گذشته این تولیدات به استان
            های اطراف یا کشور های افغانستان و پاکستان صادر می شدند؛ ولی در حال
            حاضربازار فروش رونق ندارد و همین امر باعث شده تا تولید صنایع دستی در
            شهرستان کاهش پیدا کند و بیشتر برای مصارف شخصی تولید صورت گیرد. اگر
            بازار فروش ایجاد شود، می توان روی بافت قالی و تابلو فرش و همچنین
            بافت پرده خلک از حصیر و سوزن دوزی کار کرد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            همانطور که قبلا نیز اشاره شد، بخش عظیمی از آبزی پروری شهرستان هیرمند
            به دلیل خشک سالی های مداوم مختل شده است. در شهرستان هیرمند پرورش
            ماهیان گرمابی شیر و انواع کپور و ماهی سردابی قزل آلا انجام می گیرد.
            در واقع پرورش ماهی به دلیل کمبود منابع آبی، رونقی ندارد و در واقع
            همین میزان تولید ماهی که نیاز مردم شهرستان را رفع می کند، کافی است و
            با توجه به شرایط آب های شهرستان نیازی به تولید بیشتر نیست.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            بخش صنعت شهرستان هیرمند نیز مانند سایر بخش های تولیدی و تبدیلی این
            شهرستان دچار کم و کاست است و با اینکه دارای شهرک صنعتی است، ولی واحد
            فعالی در آن دایر نیست و به نوعی در بخش صنعت و ایجاد شغل در این
            شهرستان مشکلات زیادی وجود دارد و یکی از دلایل مهاجرت جوانان از این
            شهرستان، عدم چرخه ی اقتصادی حاکم در هیرمند است.
          </p>
          <p>
            {" "}
            با توجه به اینکه در شهرستان هیرمند 120 روز از سال باد های شدید می
            وزد و علاوه بر آن تابستان های گرم و آفتاب سوزانی دارد؛ فعالیت در
            حوزه‌ی احداث نیروگاه بادی و خورشیدی دارای مزیت است .
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            نگاه کوتاه به شهرستان هیرمند نشان از این دارد که این سرزمین خاستگاه
            و پرورشگاه نخستین شهرنشینی بشری بوده است که شهر باستانی سوخته به
            عنوان هفدهمین اثر جهانی ایران ثبت یونسکو نیز گردیده است. پژوهش های
            انجام شده نشان می دهد که این شهر با بیش از 5 هزار سال دیرینگی،
            خاستگاه بسیاری از اندیشه های نخستین بشری در ایجاد ساختارها و مناسبات
            شهر نشینی بشر با گرایش های انسانی، صلح دوستی و ایجاد پیوند های
            فرهنگی و تاریخی با تمدن های هم زمان و هم جوار با تکیه بر توحید و فن
            آوری های صنعتی بوده است.{" "}
          </p>
          <p>
            با تمام آثاری که در شهرستان هیرمند وجود دارد؛ اما امکانات رفاهی و
            اقامتی در شهرستان موجود نیست. برای فعالیت در حوزه ی خدمات به ترتیب
            ایجاد مهمانسرا، اقامتگاه بومگردی، مجتمع های رفاهی و شهربازی دارای
            مزیت است.{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
