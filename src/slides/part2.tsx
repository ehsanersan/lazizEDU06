import {
  GlassCard,
  SectionTag,
  SlideTitle,
  Pill,
  CheckItem,
  StatBubble,
  FlowArrow,
  Bokeh,
} from "../components/ui";
import { toFa } from "../utils/fa";

/* ------------------- SLIDE 11 — محصولات سرد و دورچین‌ها ------------------- */
export function Slide11() {
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={2} />
      <SectionTag>فصل نهم و دهم</SectionTag>
      <SlideTitle className="mt-3" gradient>محصولات سرد و دورچین‌ها</SlideTitle>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6">
        <GlassCard ring glow="green" className="anim anim-3 px-8 py-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="glass flex h-12 w-12 items-center justify-center rounded-xl text-[26px]">🥗</span>
            <span className="text-[19px] font-extrabold text-[#15803D]">دورچین‌ها</span>
          </div>
          <ul className="space-y-4">
            <CheckItem>تازگی بصری در تمام طول سرویس</CheckItem>
            <CheckItem>تعویض منظم و پیش از افت کیفیت</CheckItem>
            <CheckItem>ظاهر آراسته و چیدمان مرتب در ظرف</CheckItem>
            <CheckItem>حداکثر <b className="text-[#A16207]">{toFa(30)} دقیقه</b> ماندگاری در کانتر</CheckItem>
          </ul>
        </GlassCard>
        <GlassCard ring glow="purple" className="anim anim-2 px-8 py-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="glass flex h-12 w-12 items-center justify-center rounded-xl text-[26px]">❄</span>
            <span className="text-[19px] font-extrabold text-[#7C3AED]">محصولات سرد</span>
          </div>
          <ul className="space-y-4">
            <CheckItem>
              دمای نگهداری <StatBubble>≤{toFa(4)}°C</StatBubble>
            </CheckItem>
            <CheckItem>پوشیده با سلفون تمیز و سالم</CheckItem>
            <CheckItem>تعویض هر <b className="text-[#A16207]">{toFa(30)} دقیقه</b> در صورت نمایش باز</CheckItem>
            <CheckItem>حداکثر <b className="text-[#A16207]">{toFa(1)} ساعت</b> ماندگاری در کانتر</CheckItem>
          </ul>
        </GlassCard>
      </div>
      <div className="anim anim-5 mt-5 flex justify-center">
        <Pill tone="green">زنجیره سرد هرگز قطع نمی‌شود</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 12 — بهداشت فردی حین کار ---------------------- */
export function Slide12() {
  const items = [
    { icon: "🧤", t: "دستکش هنگام سرو" },
    { icon: "😷", t: "سرفه و عطسه فقط با ماسک" },
    { icon: "🚿", t: "شستن دست پس از هر وقفه" },
    { icon: "💊", t: "ممنوعیت کار با بیماری پوستی/تنفسی" },
    { icon: "💍", t: "بدون انگشتر و ساعت" },
    { icon: "🍽", t: "عدم تماس مستقیم دست با غذا" },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={3} />
      <SectionTag>فصل یازدهم</SectionTag>
      <SlideTitle className="mt-3" gradient>بهداشت فردی در حین کار</SlideTitle>
      <div className="mt-7 grid flex-1 grid-cols-3 gap-5">
        {items.map((it, i) => (
          <GlassCard ring key={it.t} className={`anim anim-${(i % 6) + 1} flex flex-col items-center justify-center px-5 py-6 text-center`}>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(245,197,24,0.18)] text-[32px]">
              {it.icon}
            </span>
            <span className="mt-3 text-[15.5px] font-bold leading-relaxed text-[#23203F]">{it.t}</span>
          </GlassCard>
        ))}
      </div>
      <p className="text-muted anim anim-6 mt-5 text-center text-[14px]">
        بهداشت فردی، خط اول اعتماد مشتری به برند لذیذ است
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 13 — بهداشت محیط کانتر ---------------------- */
export function Slide13() {
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={1} />
      <SectionTag>فصل دوازدهم</SectionTag>
      <SlideTitle className="mt-3" gradient>بهداشت محیط کانتر</SlideTitle>
      <GlassCard ring className="anim anim-2 mt-6 flex-1 px-10 py-8">
        <ul className="space-y-5">
          <CheckItem>پاک‌کردن سطوح کانتر هر <b className="text-[#A16207]">{toFa(30)} دقیقه</b></CheckItem>
          <CheckItem>تعویض فوری دستمال‌های آلوده</CheckItem>
          <CheckItem>ضدعفونی کردن دستگیره‌ها و نقاط پرتماس</CheckItem>
          <CheckItem>نگهداری زباله فقط در سطل دردار</CheckItem>
          <CheckItem>پاک بودن ترازو و صفحه وزن در تمام مدت</CheckItem>
        </ul>
      </GlassCard>
      <div className="anim anim-4 mt-5 flex justify-center">
        <Pill tone="purple">محیط تمیز = پیام بی‌صدای کیفیت</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 14 — ترازو و وزن‌کشی ---------------------- */
export function Slide14() {
  const steps = [
    <span key="a">صفرکردن ترازو قبل از هر وزن‌کشی</span>,
    <span key="b">قراردادن ظرف خالی روی ترازو</span>,
    <span key="c"><b>Tare</b> کردن (حذف وزن ظرف)</span>,
    <span key="d">اضافه‌کردن غذا تا رسیدن به وزن استاندارد</span>,
    <span key="e">بررسی بصری نهایی پیش از تحویل</span>,
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={2} />
      <SectionTag>فصل سیزدهم</SectionTag>
      <SlideTitle className="mt-3" gradient>ترازو و وزن‌کشی</SlideTitle>
      <GlassCard ring className="anim anim-2 relative mt-6 flex-1 px-10 py-7 pt-9">
        {/* connected vertical timeline rail */}
        <div
          className="absolute right-[3.95rem] top-12 bottom-10 w-[3px] rounded-full"
          style={{ background: "linear-gradient(to bottom, #8B5CF6, #F5C518, #22C55E)", opacity: 0.5 }}
        />
        <ol className="relative space-y-4">
          {steps.map((s, i) => (
            <li key={i} className="flex items-center gap-4 text-[16px] font-medium leading-relaxed text-[#23203F]">
              <span className="glass glow-purple z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-[#6D28D9]">
                {toFa(i + 1)}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </GlassCard>
      <div className="anim anim-4 mt-5 flex justify-center">
        <Pill tone="red">⛔ کم‌فروشی و زیادفروشی هر دو ممنوع است</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 15 — رفتار در تایم فروش ---------------------- */
export function Slide15() {
  const cols = [
    {
      title: "✅ باید",
      tone: "border-[rgba(34,197,94,0.4)]",
      glow: "green" as const,
      head: "text-[#15803D]",
      dot: "bg-[#22C55E]",
      items: ["تمرکز کامل بر مشتری", "صدای آرام و محترمانه", "آمادگی پاسخ به هر سؤال"],
    },
    {
      title: "❌ نباید",
      tone: "border-[rgba(239,68,68,0.35)]",
      glow: undefined,
      head: "text-[#DC2626]",
      dot: "bg-[#EF4444]",
      items: ["استفاده از تلفن همراه", "بحث و گفتگوی جانبی با همکار", "غذا خوردن پشت کانتر"],
    },
    {
      title: "⚡ الزام",
      tone: "border-[rgba(245,197,24,0.6)]",
      glow: "yellow" as const,
      head: "text-[#946B00]",
      dot: "bg-[#F5C518]",
      items: ["سرعت در پاسخ‌گویی", "لبخند و تماس چشمی", "دانستن موجودی لحظه‌ای"],
    },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={3} />
      <SectionTag>فصل چهاردهم</SectionTag>
      <SlideTitle className="mt-3" gradient>رفتار در تایم فروش</SlideTitle>
      <div className="mt-7 grid flex-1 grid-cols-3 gap-6">
        {cols.map((c, i) => (
          <GlassCard key={c.title} glow={c.glow} className={`anim anim-${i + 2} border ${c.tone} px-7 py-6`}>
            <div className={`mb-5 text-[20px] font-extrabold ${c.head}`}>{c.title}</div>
            <ul className="space-y-4">
              {c.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[15.5px] leading-relaxed text-[#23203F]">
                  <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
                  {it}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 16 — ارتباط با مشتری ---------------------- */
export function Slide16() {
  const steps = ["سلام گرم", "معرفی موجودی", "دریافت سفارش", "تأیید سفارش"];
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <Bokeh v={1} />
      <SectionTag>فصل پانزدهم — ارتباط با مشتری</SectionTag>
      <GlassCard ring glow="purple" className="glass-strong anim anim-1 mt-6 w-full max-w-[860px] px-14 py-9 text-center">
        <span className="text-[40px] leading-none text-[#8B5CF6]">❝</span>
        <p className="mt-1 text-[30px] font-extrabold leading-relaxed text-[#23203F]">
          اولین <span className="rounded-xl bg-[rgba(245,197,24,0.24)] px-2 text-[#8A6400]">{toFa(5)} ثانیه</span>،
          تجربه مشتری را شکل می‌دهد
        </p>
      </GlassCard>
      <div className="anim anim-3 relative mt-10">
        <div
          className="absolute inset-x-8 top-[28px] h-[3px] rounded-full"
          style={{ background: "linear-gradient(to left, #8B5CF6, #F5C518, #22C55E)", opacity: 0.5 }}
        />
        <div className="relative flex items-start gap-3">
          {steps.map((s, i) => (
            <div key={s} className="flex items-start gap-3">
              <div className="glass flex w-[180px] flex-col items-center rounded-2xl px-5 py-4">
                <span className="glass glow-purple z-[1] flex h-11 w-11 items-center justify-center rounded-full text-[16px] font-extrabold text-[#6D28D9]">
                  {toFa(i + 1)}
                </span>
                <span className="mt-2.5 text-[15.5px] font-bold text-[#23203F]">{s}</span>
              </div>
              {i < steps.length - 1 && <span className="mt-[31px]"><FlowArrow /></span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 17 — تلفن همراه ---------------------- */
export function Slide17() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <Bokeh v={2} />
      <SectionTag>فصل شانزدهم — تلفن همراه و حواس‌پرتی</SectionTag>
      <div className="glass glow-yellow anim anim-1 mt-8 flex h-28 w-28 items-center justify-center rounded-3xl border-2 border-[rgba(245,197,24,0.8)] text-[54px]">
        📵
      </div>
      <h2 className="anim anim-2 mt-7 text-center text-[34px] font-black leading-snug text-[#23203F]">
        استفاده از تلفن همراه در زمان فروش <span className="text-[#DC2626]">ممنوع</span> است
      </h2>
      <p className="text-muted anim anim-3 mt-4 text-[15.5px]">
        مگر برای امور اضطراری — آن هم فقط با اطلاع سرپرست شیفت
      </p>
      <div className="anim anim-4 mt-8">
        <Pill tone="green" className="px-7 py-3 text-[16px]">حضور ذهنی = کیفیت خدمت</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 18 — کنترل سفارش قبل از تحویل ---------------------- */
export function Slide18() {
  const items = [
    "تطابق کامل سفارش با فیش",
    "بررسی وزن / تعداد اقلام",
    "کیفیت ظاهری هر قلم",
    "دمای مناسب (گرم، گرم — سرد، سرد)",
    "بسته‌بندی کامل و ایمن",
    "قرارگیری تمام اقلام در کیسه",
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={3} />
      <SectionTag>فصل هفدهم</SectionTag>
      <SlideTitle className="mt-3" gradient>کنترل سفارش قبل از تحویل</SlideTitle>
      <GlassCard ring className="anim anim-2 mt-6 flex-1 px-10 py-7">
        <ol className="grid grid-cols-2 gap-x-10 gap-y-5">
          {items.map((it, i) => (
            <li key={it} className="flex items-start gap-3.5 text-[16px] leading-relaxed text-[#23203F]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[rgba(34,197,94,0.5)] bg-[rgba(34,197,94,0.12)] text-[14px] font-black text-[#16A34A]">
                ✓
              </span>
              <span className="pt-0.5">
                <b className="ml-1 text-[#7C3AED]">{toFa(i + 1)}.</b> {it}
              </span>
            </li>
          ))}
        </ol>
      </GlassCard>
      <div className="anim anim-4 mt-5 flex justify-center">
        <Pill tone="yellow">هیچ سفارش کنترل‌نشده‌ای تحویل نمی‌شود</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 19 — ساعات اوج فروش ---------------------- */
export function Slide19() {
  const hours = Array.from({ length: 12 }, (_, i) => i + 11); // 11..22
  const isPeak = (h: number) => (h >= 12 && h < 14) || (h >= 19 && h < 21);
  const rules = [
    { icon: "📦", t: "پیش‌بینی و شارژ اضافه قبل از پیک" },
    { icon: "🧍", t: "حضور تمام نفرات در جایگاه تعیین‌شده" },
    { icon: "🚫", t: "ممنوعیت ترک کانتر بدون جانشین" },
    { icon: "🎫", t: "مدیریت صف با سیستم نوبت‌دهی" },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={1} />
      <SectionTag>فصل هجدهم</SectionTag>
      <SlideTitle className="mt-3" gradient>ساعات اوج فروش (پیک)</SlideTitle>
      <GlassCard ring className="anim anim-2 mt-6 px-8 py-5">
        <div className="flex gap-1.5" dir="rtl">
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center">
              <div
                className={isPeak(h) ? "h-14 rounded-lg glow-purple" : "h-14 rounded-lg"}
                style={
                  isPeak(h)
                    ? { background: "linear-gradient(to top, #8B5CF6, #C4B5FD)" }
                    : { background: "linear-gradient(to top, rgba(139,92,246,0.16), rgba(139,92,246,0.05))" }
                }
              />
              <div className={`mt-1.5 text-[11.5px] font-bold ${isPeak(h) ? "text-[#6D28D9]" : "text-muted"}`}>
                {toFa(h)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ background: "linear-gradient(to top, #8B5CF6, #C4B5FD)" }} />
          <span className="text-[13.5px] font-bold text-[#6D28D9]">
            پیک فروش: {toFa(12)}–{toFa(14)} و {toFa(19)}–{toFa(21)}
          </span>
        </div>
      </GlassCard>
      <div className="mt-5 grid flex-1 grid-cols-4 gap-4">
        {rules.map((r, i) => (
          <GlassCard key={r.t} className={`anim anim-${i + 3} flex flex-col items-center justify-center px-4 py-5 text-center`}>
            <span className="glass flex h-14 w-14 items-center justify-center rounded-2xl text-[28px]">{r.icon}</span>
            <span className="mt-2.5 text-[14px] font-bold leading-relaxed text-[#23203F]">{r.t}</span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 20 — مدیریت اعتراض مشتری ---------------------- */
export function Slide20() {
  const steps = ["شنیدن کامل", "عذرخواهی", "راه‌حل فوری", "پیگیری", "ثبت"];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh v={2} />
      <SectionTag>فصل نوزدهم</SectionTag>
      <SlideTitle className="mt-3" gradient>مدیریت اعتراض مشتری</SlideTitle>
      <div className="anim anim-2 relative mt-14">
        {/* gradient connector line through the nodes */}
        <div
          className="absolute inset-x-24 top-[46px] h-[4px] rounded-full"
          style={{ background: "linear-gradient(to left, #8B5CF6, #F5C518, #22C55E)", opacity: 0.55 }}
        />
        <div className="relative flex items-start justify-center gap-6">
          {steps.map((s, i) => (
            <div key={s} className="flex w-[160px] flex-col items-center">
              <div className="glass glow-purple z-[1] flex h-24 w-24 items-center justify-center rounded-full border-2 border-[rgba(124,58,237,0.4)]">
                <span className="num-gradient text-[34px] font-black">{toFa(i + 1)}</span>
              </div>
              <span className="mt-3 text-center text-[16px] font-bold text-[#23203F]">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="anim anim-4 mt-auto flex justify-center pb-2">
        <Pill tone="red" className="px-7 py-3 text-[16px]">
          هرگز با مشتری بحث نکنید — حق را به او بدهید
        </Pill>
      </div>
    </div>
  );
}
