import {
  GlassCard,
  SectionTag,
  SlideTitle,
  Pill,
  CheckItem,
  NumItem,
  FlowArrow,
  Bokeh,
} from "../components/ui";
import { toFa } from "../utils/fa";

/* ------------------- SLIDE 11 — محصولات سرد و دورچین‌ها ------------------- */
export function Slide11() {
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل نهم و دهم</SectionTag>
      <SlideTitle className="mt-3">محصولات سرد و دورچین‌ها</SlideTitle>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6">
        <GlassCard glow="green" className="anim anim-3 px-8 py-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[28px]">🥗</span>
            <span className="text-[19px] font-extrabold text-[#22C55E]">دورچین‌ها</span>
          </div>
          <ul className="space-y-4">
            <CheckItem>تازگی بصری در تمام طول سرویس</CheckItem>
            <CheckItem>تعویض منظم و پیش از افت کیفیت</CheckItem>
            <CheckItem>ظاهر آراسته و چیدمان مرتب در ظرف</CheckItem>
            <CheckItem>حداکثر {toFa(30)} دقیقه ماندگاری در کانتر</CheckItem>
          </ul>
        </GlassCard>
        <GlassCard glow="purple" className="anim anim-2 px-8 py-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[28px]">❄</span>
            <span className="text-[19px] font-extrabold text-[#c4b5fd]">محصولات سرد</span>
          </div>
          <ul className="space-y-4">
            <CheckItem>
              دمای نگهداری <b className="text-[#F5C518]">≤{toFa(4)}°C</b>
            </CheckItem>
            <CheckItem>پوشیده با سلفون تمیز و سالم</CheckItem>
            <CheckItem>تعویض هر {toFa(30)} دقیقه در صورت نمایش باز</CheckItem>
            <CheckItem>حداکثر {toFa(1)} ساعت ماندگاری در کانتر</CheckItem>
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
      <Bokeh />
      <SectionTag>فصل یازدهم</SectionTag>
      <SlideTitle className="mt-3">بهداشت فردی در حین کار</SlideTitle>
      <div className="mt-7 grid flex-1 grid-cols-3 gap-5">
        {items.map((it, i) => (
          <GlassCard key={it.t} className={`anim anim-${(i % 6) + 1} flex flex-col items-center justify-center px-5 py-6 text-center`}>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(245,197,24,0.09)] text-[32px]">
              {it.icon}
            </span>
            <span className="mt-3 text-[15.5px] font-bold leading-relaxed text-[#F8F8FF]">{it.t}</span>
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
      <Bokeh />
      <SectionTag>فصل دوازدهم</SectionTag>
      <SlideTitle className="mt-3">بهداشت محیط کانتر</SlideTitle>
      <GlassCard className="anim anim-2 mt-6 flex-1 px-10 py-8">
        <ul className="space-y-5">
          <CheckItem>پاک‌کردن سطوح کانتر هر {toFa(30)} دقیقه</CheckItem>
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
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل سیزدهم</SectionTag>
      <SlideTitle className="mt-3">ترازو و وزن‌کشی</SlideTitle>
      <GlassCard className="anim anim-2 mt-6 flex-1 px-10 py-7">
        <ol className="space-y-4">
          <NumItem n={toFa(1)}>صفرکردن ترازو قبل از هر وزن‌کشی</NumItem>
          <NumItem n={toFa(2)}>قراردادن ظرف خالی روی ترازو</NumItem>
          <NumItem n={toFa(3)}>
            <b>Tare</b> کردن (حذف وزن ظرف)
          </NumItem>
          <NumItem n={toFa(4)}>اضافه‌کردن غذا تا رسیدن به وزن استاندارد</NumItem>
          <NumItem n={toFa(5)}>بررسی بصری نهایی پیش از تحویل</NumItem>
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
      tone: "border-[rgba(34,197,94,0.45)]",
      head: "text-[#22C55E]",
      items: ["تمرکز کامل بر مشتری", "صدای آرام و محترمانه", "آمادگی پاسخ به هر سؤال"],
    },
    {
      title: "❌ نباید",
      tone: "border-[rgba(239,68,68,0.45)]",
      head: "text-[#f87171]",
      items: ["استفاده از تلفن همراه", "بحث و گفتگوی جانبی با همکار", "غذا خوردن پشت کانتر"],
    },
    {
      title: "⚡ الزام",
      tone: "border-[rgba(245,197,24,0.45)]",
      head: "text-[#F5C518]",
      items: ["سرعت در پاسخ‌گویی", "لبخند و تماس چشمی", "دانستن موجودی لحظه‌ای"],
    },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل چهاردهم</SectionTag>
      <SlideTitle className="mt-3">رفتار در تایم فروش</SlideTitle>
      <div className="mt-7 grid flex-1 grid-cols-3 gap-6">
        {cols.map((c, i) => (
          <GlassCard key={c.title} className={`anim anim-${i + 2} border ${c.tone} px-7 py-6`}>
            <div className={`mb-5 text-[20px] font-extrabold ${c.head}`}>{c.title}</div>
            <ul className="space-y-4">
              {c.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[15.5px] leading-relaxed text-[#F8F8FF]">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(248,248,255,0.4)]" />
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
      <Bokeh />
      <SectionTag>فصل پانزدهم — ارتباط با مشتری</SectionTag>
      <GlassCard glow="purple" className="glass-strong anim anim-1 mt-6 w-full max-w-[860px] px-14 py-9 text-center">
        <span className="text-[40px] leading-none text-[#8B5CF6]">❝</span>
        <p className="mt-1 text-[30px] font-extrabold leading-relaxed text-[#F8F8FF]">
          اولین <span className="text-[#F5C518]">{toFa(5)} ثانیه</span>، تجربه مشتری را شکل می‌دهد
        </p>
      </GlassCard>
      <div className="anim anim-3 mt-10 flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="glass flex w-[180px] flex-col items-center rounded-2xl px-5 py-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(139,92,246,0.55)] text-[16px] font-extrabold text-[#F5C518]">
                {toFa(i + 1)}
              </span>
              <span className="mt-2.5 text-[15.5px] font-bold text-[#F8F8FF]">{s}</span>
            </div>
            {i < steps.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 17 — تلفن همراه ---------------------- */
export function Slide17() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <Bokeh />
      <SectionTag>فصل شانزدهم — تلفن همراه و حواس‌پرتی</SectionTag>
      <div className="anim anim-1 mt-8 flex h-28 w-28 items-center justify-center rounded-3xl border-2 border-[rgba(245,197,24,0.6)] bg-[rgba(245,197,24,0.06)] text-[54px] glow-yellow">
        📵
      </div>
      <h2 className="anim anim-2 mt-7 text-center text-[34px] font-black leading-snug text-[#F8F8FF]">
        استفاده از تلفن همراه در زمان فروش{" "}
        <span className="text-[#f87171]">ممنوع</span> است
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
      <Bokeh />
      <SectionTag>فصل هفدهم</SectionTag>
      <SlideTitle className="mt-3">کنترل سفارش قبل از تحویل</SlideTitle>
      <GlassCard className="anim anim-2 mt-6 flex-1 px-10 py-7">
        <ol className="grid grid-cols-2 gap-x-10 gap-y-5">
          {items.map((it, i) => (
            <li key={it} className="flex items-start gap-3.5 text-[16px] leading-relaxed text-[#F8F8FF]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[rgba(34,197,94,0.5)] bg-[rgba(34,197,94,0.12)] text-[14px] font-black text-[#22C55E]">
                ✓
              </span>
              <span className="pt-0.5">
                <b className="ml-1 text-[#c4b5fd]">{toFa(i + 1)}.</b> {it}
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
      <Bokeh />
      <SectionTag>فصل هجدهم</SectionTag>
      <SlideTitle className="mt-3">ساعات اوج فروش (پیک)</SlideTitle>
      <GlassCard className="anim anim-2 mt-6 px-8 py-5">
        <div className="flex gap-1.5" dir="rtl">
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center">
              <div
                className={
                  isPeak(h)
                    ? "h-14 rounded-lg bg-gradient-to-t from-[#8B5CF6] to-[#a78bfa] glow-purple"
                    : "h-14 rounded-lg bg-[rgba(255,255,255,0.07)]"
                }
              />
              <div className={`mt-1.5 text-[11.5px] font-bold ${isPeak(h) ? "text-[#c4b5fd]" : "text-muted"}`}>
                {toFa(h)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center text-[13.5px] font-bold text-[#c4b5fd]">
          پیک فروش: {toFa(12)}–{toFa(14)} و {toFa(19)}–{toFa(21)}
        </div>
      </GlassCard>
      <div className="mt-5 grid flex-1 grid-cols-4 gap-4">
        {rules.map((r, i) => (
          <GlassCard key={r.t} className={`anim anim-${i + 3} flex flex-col items-center justify-center px-4 py-5 text-center`}>
            <span className="text-[30px]">{r.icon}</span>
            <span className="mt-2.5 text-[14px] font-bold leading-relaxed text-[#F8F8FF]">{r.t}</span>
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
      <Bokeh />
      <SectionTag>فصل نوزدهم</SectionTag>
      <SlideTitle className="mt-3">مدیریت اعتراض مشتری</SlideTitle>
      <div className="anim anim-2 mt-14 flex items-start justify-center gap-4">
        {steps.map((s, i) => (
          <div key={s} className="flex items-start gap-4">
            <div className="flex w-[150px] flex-col items-center">
              <div className="glass flex h-24 w-24 items-center justify-center rounded-full border-2 border-[rgba(139,92,246,0.55)] glow-purple">
                <span className="text-[34px] font-black text-[#F5C518]">{toFa(i + 1)}</span>
              </div>
              <span className="mt-3 text-center text-[16px] font-bold text-[#F8F8FF]">{s}</span>
            </div>
            {i < steps.length - 1 && <span className="mt-9 text-[24px] font-black text-[#8B5CF6]">←</span>}
          </div>
        ))}
      </div>
      <div className="anim anim-4 mt-auto flex justify-center pb-2">
        <Pill tone="red" className="px-7 py-3 text-[16px]">
          هرگز با مشتری بحث نکنید — حق را به او بدهید
        </Pill>
      </div>
    </div>
  );
}
