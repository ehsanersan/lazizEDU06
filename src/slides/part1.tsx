import {
  GlassCard,
  SectionTag,
  SlideTitle,
  Pill,
  DiamondItem,
  CheckItem,
  StatBubble,
  FlowArrow,
  Bokeh,
} from "../components/ui";
import { toFa } from "../utils/fa";

/* ------------------------------- SLIDE 01 — Cover ------------------------------- */
export function Slide01() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <Bokeh v={1} />
      {/* logo placeholder top-right */}
      <div className="anim absolute right-12 top-10 flex items-center gap-3">
        <div className="glass glow-purple flex h-14 w-14 items-center justify-center rounded-2xl text-[26px]">
          🍽
        </div>
        <div className="text-right">
          <div className="text-[17px] font-extrabold text-[#23203F]">مجموعه لذیذ</div>
          <div className="text-muted text-[11px]">Lazizz Group</div>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-1/2 top-1/2 h-[340px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.2), transparent)" }}
        />
        <GlassCard ring glow="purple" className="glass-strong anim relative w-[880px] px-16 py-14 text-center">
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-l from-[#8B5CF6] to-[#F5C518]" />
          <h1 className="title-gradient anim anim-1 text-[46px] font-black leading-[1.35] tracking-tight">
            دستورالعمل جامع آموزش
            <br />
            پرسنل فروش و کانتر
          </h1>
          <div className="anim anim-2 mt-7 flex items-center justify-center gap-3 text-[19px] font-semibold text-[#23203F]">
            <span className="pulse-dot inline-block h-3 w-3 rounded-full bg-[#22C55E]" />
            مجموعه لذیذ | راهنمای عملیاتی سرویس و کانتر
          </div>
          <div className="anim anim-3 mx-auto mt-8 flex w-fit items-center gap-6 border-t divider-purple pt-5 text-[14px] text-muted">
            <span>نسخه {toFa("1.0")}</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(139,92,246,0.6)]" />
            <span>{toFa(1405)}</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(139,92,246,0.6)]" />
            <span>واحد آموزش و توسعه منابع انسانی</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ------------------------------ SLIDE 02 — TOC ------------------------------ */
const chapters: { group: string; items: string[] }[] = [
  { group: "آمادگی و افتتاح", items: ["آمادگی فردی قبل از فروش", "چک‌لیست افتتاح سالن"] },
  {
    group: "کانتر و محصول",
    items: [
      "تحویل غذا از آشپزخانه",
      "چیدمان کانتر",
      "ابزار سرو و ظروف",
      "زمان مجاز ماندن غذا در کانتر",
      "FIFO و شارژ مستمر",
      "کنترل هر ۲۰ دقیقه",
      "محصولات سرد",
      "دورچین‌ها",
    ],
  },
  { group: "بهداشت", items: ["بهداشت فردی حین کار", "بهداشت محیط کانتر", "ترازو و وزن‌کشی"] },
  {
    group: "فروش و مشتری",
    items: [
      "رفتار در تایم فروش",
      "ارتباط با مشتری",
      "تلفن همراه و حواس‌پرتی",
      "کنترل سفارش قبل از تحویل",
      "ساعات اوج فروش (پیک)",
      "مدیریت اعتراض مشتری",
    ],
  },
  {
    group: "شیفت و مسئولیت‌ها",
    items: [
      "تغییر شیفت ساعت ۱۶",
      "شربت پذیرایی استاندارد",
      "بستن شیفت و تحویل کانتر",
      "مسئولیت کانتردار",
      "مسئولیت صندوق و فروش",
      "مسئولیت مدیر شعبه و سوپروایزر",
    ],
  },
  {
    group: "قوانین و استاندارد",
    items: ["ده قانون طلایی (بخش اول)", "ده قانون طلایی (بخش دوم)", "استاندارد نهایی لذیذ", "جمع‌بندی و سپاسگزاری"],
  },
];

export function Slide02() {
  let counter = 0;
  const groups = chapters.map((g) => ({ ...g, items: g.items.map((t) => ({ n: ++counter, t })) }));
  const right = groups.slice(0, 3);
  const left = groups.slice(3);

  const renderGroup = (g: (typeof groups)[number]) => (
    <div key={g.group} className="mb-4 border-b divider-purple pb-3 last:mb-0 last:border-b-0 last:pb-0">
      <div className="mb-2 text-[12px] font-bold tracking-wide text-[#7C3AED]">{g.group}</div>
      <ul className="space-y-1.5">
        {g.items.map((it) => (
          <li key={it.n} className="flex items-center gap-3 text-[13.5px] leading-snug text-[#23203F]">
            <span className="w-7 shrink-0 text-left text-[15px] font-extrabold text-[#A16207]">{toFa(it.n)}</span>
            {it.t}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={2} />
      <SlideTitle gradient className="mb-1">فهرست مطالب</SlideTitle>
      <p className="text-muted anim anim-2 mb-5 text-[14px]">{toFa(29)} فصل عملیاتی در {toFa(6)} بخش</p>
      <div className="grid flex-1 grid-cols-2 gap-6">
        <GlassCard ring className="anim anim-2 px-7 py-5">{right.map(renderGroup)}</GlassCard>
        <GlassCard ring className="anim anim-3 px-7 py-5">{left.map(renderGroup)}</GlassCard>
      </div>
    </div>
  );
}

/* --------------------------- SLIDE 03 — فلسفه فروش --------------------------- */
function Hi({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-xl bg-[rgba(245,197,24,0.24)] px-2 py-0.5 font-extrabold text-[#8A6400]">
      {children}
    </span>
  );
}

export function Slide03() {
  const pillars = [
    { icon: "🍽", label: "کیفیت غذا" },
    { icon: "⚡", label: "سرعت سرویس" },
    { icon: "🤝", label: "رفتار کارکنان" },
  ];
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-20">
      <Bokeh v={3} />
      <SectionTag>فلسفه فروش و خدمت‌رسانی</SectionTag>
      <GlassCard ring glow="purple" className="glass-strong anim anim-1 mt-6 w-full px-14 py-10 text-center">
        <span className="text-[44px] leading-none text-[#8B5CF6]">❝</span>
        <p className="mt-1 text-[27px] font-extrabold leading-[2] text-[#23203F]">
          فروش یعنی ترکیب درست <Hi>غذای باکیفیت</Hi>، <Hi>سرعت سرویس</Hi>، <Hi>نظم محیط</Hi> و <Hi>رفتار کارکنان</Hi>
        </p>
      </GlassCard>
      <div className="anim anim-3 mt-7 flex gap-5">
        {pillars.map((p) => (
          <div key={p.label} className="glass flex items-center gap-3 rounded-full px-6 py-3">
            <span className="text-[22px]">{p.icon}</span>
            <span className="text-[16px] font-bold text-[#23203F]">{p.label}</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-[11px] font-black text-[#16A34A]">
              ✓
            </span>
          </div>
        ))}
      </div>
      <p className="text-muted anim anim-4 mt-7 max-w-[760px] text-center text-[15.5px] leading-relaxed">
        شعبه‌ی خوب با مجموع این عوامل ساخته می‌شود، نه فقط با غذای خوب. حذف هر یک از این ارکان،
        تجربه‌ی مشتری و اعتبار برند لذیذ را مخدوش می‌کند.
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 04 — آمادگی قبل از فروش ---------------------- */
export function Slide04() {
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={1} />
      <SectionTag>فصل اول و دوم</SectionTag>
      <SlideTitle className="mt-3">آمادگی قبل از فروش</SlideTitle>
      <GlassCard className="anim anim-2 mt-6 flex-1 px-10 py-8">
        <ul className="space-y-5">
          <DiamondItem>استحمام روزانه و رعایت کامل بهداشت شخصی</DiamondItem>
          <DiamondItem>لباس فرم کامل، تمیز و مرتب مطابق استاندارد مجموعه</DiamondItem>
          <DiamondItem>ناخن کوتاه، بدون عطر تند، بدون زیورآلات</DiamondItem>
          <DiamondItem>آمادگی ذهنی — آشنایی کامل با منو، قیمت‌ها و موجودی روز</DiamondItem>
          <DiamondItem>
            حضور <b className="text-[#A16207]">{toFa(30)} دقیقه قبل</b> از شروع فروش در شعبه
          </DiamondItem>
        </ul>
      </GlassCard>
      <div className="anim anim-4 mt-5">
        <Pill tone="green">آمادگی فردی، اولین گام کیفیت سرویس است</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 05 — چک‌لیست افتتاح سالن ---------------------- */
export function Slide05() {
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={2} />
      <SectionTag>فصل دوم</SectionTag>
      <SlideTitle className="mt-3" gradient>چک‌لیست افتتاح سالن</SlideTitle>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6">
        <GlassCard className="anim anim-2 px-8 py-7">
          <div className="mb-4 text-[15px] font-bold text-[#7C3AED]">سیستم‌ها و تجهیزات</div>
          <ul className="space-y-4">
            <CheckItem>سیستم نوبت‌دهی روشن و آماده</CheckItem>
            <CheckItem>سیستم فروش (POS) تست‌شده</CheckItem>
            <CheckItem>مانیتورهای منو فعال</CheckItem>
            <CheckItem>پرینتر فیش با کاغذ کافی</CheckItem>
          </ul>
        </GlassCard>
        <GlassCard className="anim anim-3 px-8 py-7">
          <div className="mb-4 text-[15px] font-bold text-[#7C3AED]">کانتر و سالن</div>
          <ul className="space-y-4">
            <CheckItem>دمای کانتر گرم در محدوده استاندارد</CheckItem>
            <CheckItem>ابزار سرو کامل و تمیز</CheckItem>
            <CheckItem>ظروف کافی و سالم</CheckItem>
            <CheckItem>صندلی‌ها و میزها مرتب و تمیز</CheckItem>
          </ul>
        </GlassCard>
      </div>
      <p className="text-muted anim anim-5 mt-5 text-center text-[14px]">
        «همه موارد باید قبل از ساعت {toFa(11)} آماده باشد»
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 06 — تحویل غذا از آشپزخانه ---------------------- */
export function Slide06() {
  const controls = [
    { icon: "🌡", title: "دما", sub: <>حداقل <StatBubble>≥{toFa(65)}°C</StatBubble> هنگام تحویل</> },
    { icon: "👁", title: "ظاهر", sub: <>رنگ، بافت و نبود آلودگی بصری</> },
    { icon: "⚖", title: "وزن", sub: <>وزن استاندارد هر پرس مطابق دستورالعمل</> },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={3} />
      <SectionTag>فصل سوم</SectionTag>
      <SlideTitle className="mt-3">
        تحویل غذا از آشپزخانه — <span className="text-[#7C3AED]">سه کنترل الزامی</span>
      </SlideTitle>
      <div className="mt-7 grid flex-1 grid-cols-3 gap-6">
        {controls.map((c, i) => (
          <GlassCard ring glow="purple" key={c.title} className={`anim anim-${i + 2} flex flex-col items-center justify-center px-6 py-8 text-center`}>
            <span className="glass flex h-20 w-20 items-center justify-center rounded-3xl text-[44px]">{c.icon}</span>
            <div className="num-gradient mt-4 text-[26px] font-black">{c.title}</div>
            <div className="text-muted mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[14.5px] leading-relaxed">{c.sub}</div>
          </GlassCard>
        ))}
      </div>
      <div className="anim anim-5 mt-6 flex justify-center">
        <Pill tone="yellow">⚠ غذای زیر استاندارد وارد کانتر نمی‌شود — به آشپزخانه برگردد</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 07 — چیدمان کانتر و ابزار سرو ---------------------- */
export function Slide07() {
  const zones = ["بن‌ماری گرم", "محصولات سرد", "دورچین‌ها", "ترازو و بسته‌بندی", "تحویل"];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={1} />
      <SectionTag>فصل چهارم و پنجم</SectionTag>
      <SlideTitle className="mt-3" gradient>چیدمان کانتر و ابزار سرو</SlideTitle>
      <GlassCard className="anim anim-2 mt-6 px-8 py-6">
        <div className="text-muted mb-4 text-[13px] font-semibold">نمای شماتیک کانتر (مسیر حرکت: راست ← چپ)</div>
        <div className="flex items-stretch gap-3">
          {zones.map((z, i) => (
            <div key={z} className="flex flex-1 items-center gap-3">
              <div
                className="glass w-full rounded-xl px-3 py-4 text-center text-[13.5px] font-bold text-[#23203F]"
                style={{ border: "1.5px dashed rgba(124,58,237,0.4)" }}
              >
                <span className="num-gradient mb-1 block text-[17px]">{toFa(i + 1)}</span>
                {z}
              </div>
              {i < zones.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </GlassCard>
      <GlassCard className="anim anim-3 mt-5 flex-1 px-9 py-6">
        <ul className="space-y-3.5">
          <DiamondItem>ابزار سرو اختصاصی برای هر غذا — بدون استفاده مشترک</DiamondItem>
          <DiamondItem>نام‌گذاری تمام ابزارها با برچسب مشخص</DiamondItem>
          <DiamondItem>ظروف تمیز، بدون ترک یا رنگ‌رفتگی</DiamondItem>
          <DiamondItem>
            دمای بن‌ماری گرم: <StatBubble>{toFa(75)}–{toFa(85)}°C</StatBubble>
          </DiamondItem>
        </ul>
      </GlassCard>
    </div>
  );
}

/* ---------------------- SLIDE 08 — زمان مجاز ماندن غذا ---------------------- */
function HoldBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(139,92,246,0.1)]">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export function Slide08() {
  const rows = [
    { t: "غذاهای گرم", d: `${toFa(2)} ساعت`, icon: "🔥", pct: 100, color: "linear-gradient(90deg,#F5C518,#8B5CF6)" },
    { t: "غذاهای سرد", d: `${toFa(1)} ساعت`, icon: "❄", pct: 50, color: "linear-gradient(90deg,#8B5CF6,#22C55E)" },
    { t: "دورچین‌ها", d: `${toFa(30)} دقیقه`, icon: "🥗", pct: 25, color: "linear-gradient(90deg,#22C55E,#F5C518)" },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={2} />
      <SectionTag>فصل ششم</SectionTag>
      <SlideTitle className="mt-3" gradient>زمان مجاز ماندن غذا در کانتر</SlideTitle>
      <GlassCard ring glow="purple" className="anim anim-2 mx-auto mt-6 w-[760px] overflow-hidden">
        <div className="grid grid-cols-2 border-b divider-purple bg-[rgba(139,92,246,0.09)] px-8 py-3.5 text-[15px] font-extrabold text-[#6D28D9]">
          <span>نوع غذا</span>
          <span className="text-left">حداکثر زمان در کانتر</span>
        </div>
        {rows.map((r) => (
          <div key={r.t} className="grid grid-cols-2 items-center border-b border-[rgba(139,92,246,0.09)] px-8 py-4 last:border-b-0">
            <div>
              <span className="flex items-center gap-3 text-[17px] font-bold text-[#23203F]">
                <span className="text-[20px]">{r.icon}</span> {r.t}
              </span>
              <HoldBar pct={r.pct} color={r.color} />
            </div>
            <div className="text-left">
              <StatBubble>{r.d}</StatBubble>
            </div>
          </div>
        ))}
      </GlassCard>
      <div className="anim anim-4 mt-6 flex items-center justify-center gap-5">
        <Pill tone="purple" className="px-7 py-3 text-[16px]">شارژ کم و مستمر — نه زیاد و یکباره</Pill>
        <div className="glass flex items-center gap-3 rounded-full px-6 py-3">
          <span className="text-[20px]">🔁</span>
          <span className="text-[14.5px] text-[#23203F]">
            <b className="text-[#16A34A]">FIFO</b> — اول وارد، اول خارج
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 09 — FIFO و شارژ مستمر ---------------------- */
export function Slide09() {
  const steps = [
    { icon: "👨‍🍳", label: "آشپزخانه" },
    { icon: "🛒", label: "انتقال" },
    { icon: "♨", label: "بن‌ماری پشتی" },
    { icon: "🍲", label: "بن‌ماری جلویی" },
    { icon: "😊", label: "مشتری" },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={3} />
      <SectionTag>فصل هفتم</SectionTag>
      <SlideTitle className="mt-3" gradient>FIFO و شارژ مستمر کانتر</SlideTitle>
      <div className="anim anim-2 relative mt-10">
        <div
          className="absolute inset-x-16 top-1/2 h-[3px] -translate-y-[30px] rounded-full"
          style={{ background: "linear-gradient(to left, #8B5CF6, #F5C518 50%, #22C55E)", opacity: 0.55 }}
        />
        <div className="relative flex items-center justify-center gap-3">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="glass glow-purple flex w-[170px] flex-col items-center rounded-2xl px-4 py-6">
                <span className="glass flex h-14 w-14 items-center justify-center rounded-full text-[30px]">{s.icon}</span>
                <span className="mt-2.5 text-[15.5px] font-bold text-[#23203F]">{s.label}</span>
                <span className="num-gradient mt-1 text-[13px] font-black">{toFa(i + 1)}</span>
              </div>
              {i < steps.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>
      <div className="anim anim-4 mx-auto mt-10 max-w-[780px]">
        <GlassCard glow="yellow" className="border-[rgba(245,197,24,0.6)] px-8 py-5 text-center">
          <span className="text-[17px] font-extrabold text-[#946B00]">
            ⚠ هرگز غذای قدیمی‌تر را زیر غذای جدید قرار ندهید
          </span>
          <p className="text-muted mt-2 text-[13.5px]">
            محصول جدید همیشه در انتهای جریان خروج قرار می‌گیرد تا محصول قدیمی‌تر ابتدا سرو شود
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 10 — کنترل هر ۲۰ دقیقه ---------------------- */
export function Slide10() {
  const checks = [
    { icon: "🌡", t: "دمای غذا", s: "ثبت در فرم کنترل دما" },
    { icon: "👁", t: "ظاهر و تازگی", s: "بازبینی بصری محصولات" },
    { icon: "📦", t: "موجودی و نیاز به شارژ", s: "هماهنگی با آشپزخانه" },
    { icon: "🧽", t: "نظافت بن‌ماری", s: "پاکیزگی لبه‌ها و سطوح" },
  ];
  const R = 92;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={1} />
      <SectionTag>فصل هشتم</SectionTag>
      <SlideTitle className="mt-3" gradient>کنترل هر {toFa(20)} دقیقه</SlideTitle>
      <div className="mt-4 flex flex-1 items-center justify-center gap-12">
        {/* circular progress-ring clock */}
        <div className="anim anim-2 relative shrink-0">
          <svg width="250" height="250" viewBox="0 0 250 250" className="drop-shadow-[0_12px_30px_rgba(139,92,246,0.2)]">
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>
            <circle cx="125" cy="125" r="108" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="2 9" />
            <circle cx="125" cy="125" r={R} fill="rgba(255,255,255,0.75)" stroke="rgba(139,92,246,0.12)" strokeWidth="16" />
            <circle
              cx="125" cy="125" r={R} fill="none" stroke="url(#ringGrad)" strokeWidth="16" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={C * 0.22} transform="rotate(-90 125 125)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="num-gradient text-[62px] font-black leading-none">{toFa(20)}</div>
            <div className="mt-1 text-[16px] font-bold text-[#23203F]">دقیقه</div>
            <div className="text-muted text-[12px]">چرخه کنترل</div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4">
          {checks.map((c, i) => (
            <GlassCard key={c.t} className={`anim anim-${i + 2} px-6 py-5`}>
              <div className="flex items-center gap-3">
                <span className="glass flex h-12 w-12 items-center justify-center rounded-xl text-[24px]">{c.icon}</span>
                <div>
                  <div className="text-[16px] font-bold text-[#23203F]">{c.t}</div>
                  <div className="text-muted text-[13px]">{c.s}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <p className="text-muted anim anim-6 mt-2 text-center text-[14px]">
        «مسئولیت کنترل با <b className="text-[#6D28D9]">کانتردار ارشد شیفت</b> است»
      </p>
    </div>
  );
}
