import {
  GlassCard,
  SectionTag,
  SlideTitle,
  Pill,
  CheckItem,
  NumItem,
  Bokeh,
} from "../components/ui";
import { toFa } from "../utils/fa";

/* ---------------------- SLIDE 21 — تغییر شیفت ساعت ۱۶ ---------------------- */
export function Slide21() {
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل بیستم</SectionTag>
      <SlideTitle className="mt-3">تغییر شیفت ساعت {toFa(16)}</SlideTitle>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6">
        <GlassCard className="anim anim-2 px-8 py-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[26px]">📤</span>
            <span className="text-[18px] font-extrabold text-[#c4b5fd]">تحویل‌دهنده</span>
          </div>
          <ul className="space-y-4">
            <CheckItem>گزارش سفارش‌های باز و در جریان</CheckItem>
            <CheckItem>اعلام وضعیت موجودی محصولات</CheckItem>
            <CheckItem>اعلام کمبودها و اقلام رو به اتمام</CheckItem>
            <CheckItem>گزارش مشکلات و خرابی تجهیزات</CheckItem>
          </ul>
        </GlassCard>
        <GlassCard className="anim anim-3 px-8 py-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[26px]">📥</span>
            <span className="text-[18px] font-extrabold text-[#4ade80]">تحویل‌گیرنده</span>
          </div>
          <ul className="space-y-4">
            <CheckItem>تأیید وضعیت کانتر و محصولات</CheckItem>
            <CheckItem>کنترل سلامت تجهیزات</CheckItem>
            <CheckItem>تأیید نظافت محیط کار</CheckItem>
            <CheckItem>ثبت و امضای فرم تحویل شیفت</CheckItem>
          </ul>
        </GlassCard>
      </div>
      <p className="text-muted anim anim-5 mt-5 text-center text-[14px]">
        «اولویت با مشتری است — اگر صف وجود دارد، تحویل شیفت صبر می‌کند»
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 22 — شربت پذیرایی ---------------------- */
export function Slide22() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <Bokeh />
      <SectionTag>فصل بیست‌ویکم — شربت پذیرایی استاندارد</SectionTag>
      <GlassCard glow="purple" className="glass-strong anim anim-1 mt-7 w-full max-w-[820px] px-12 py-10 text-center">
        <div className="flex items-center justify-center gap-4 text-[24px] font-extrabold text-[#F8F8FF]">
          <span className="glass rounded-2xl px-6 py-3">💧 آب</span>
          <span className="text-[#F5C518]">+</span>
          <span className="glass rounded-2xl px-6 py-3">🍋 آبلیمو</span>
          <span className="text-[#F5C518]">+</span>
          <span className="glass rounded-2xl px-6 py-3">🍯 شیرین‌کننده</span>
        </div>
        <div className="mx-auto mt-6 h-px w-56 bg-[rgba(139,92,246,0.4)]" />
        <p className="mt-5 text-[21px] font-extrabold text-[#c4b5fd]">= فرمول واحد در همه شعب</p>
      </GlassCard>
      <div className="anim anim-3 mt-7 flex items-center gap-5">
        <Pill tone="green" className="px-7 py-3 text-[16px]">🕐 ساعت سرو: {toFa(11)} تا {toFa(22)}</Pill>
      </div>
      <p className="text-muted anim anim-4 mt-6 max-w-[680px] text-center text-[15px] leading-relaxed">
        «هر مشتری در هر شعبه لذیذ، همان طعم استاندارد را دریافت می‌کند»
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 23 — بستن شیفت ---------------------- */
export function Slide23() {
  const items = [
    "تعیین تکلیف باقیمانده غذاها",
    "خارج‌کردن بن‌ماری‌ها",
    "تمیزکردن داخل کانتر",
    "شست‌وشو و خشک‌کردن سطوح",
    "شستن کامل ابزار سرو",
    "تمیزکردن ترازو",
    "تعویض سلفون‌های آلوده",
    "تمیزکردن کف و زیر کانتر",
    "تخلیه کامل زباله",
    "گزارش کمبود ظروف و خرابی تجهیزات",
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل بیست‌ودوم</SectionTag>
      <SlideTitle className="mt-3">بستن شیفت و تحویل کانتر</SlideTitle>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6">
        <GlassCard className="anim anim-2 px-8 py-6">
          <ol className="space-y-3.5">
            {items.slice(0, 5).map((it, i) => (
              <NumItem key={it} n={toFa(i + 1)} tone="yellow">
                {it}
              </NumItem>
            ))}
          </ol>
        </GlassCard>
        <GlassCard className="anim anim-3 px-8 py-6">
          <ol className="space-y-3.5">
            {items.slice(5).map((it, i) => (
              <NumItem key={it} n={toFa(i + 6)} tone="yellow">
                {it}
              </NumItem>
            ))}
          </ol>
        </GlassCard>
      </div>
      <p className="text-muted anim anim-5 mt-5 text-center text-[14px]">
        کانتر تمیز و آماده، هدیه‌ی هر شیفت به شیفت بعدی است
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 24 — مسئولیت کانتردار ---------------------- */
export function Slide24() {
  const line1 = ["محصول صحیح", "مقدار صحیح", "کیفیت صحیح"];
  const line2 = ["دمای مناسب", "ظاهر مناسب", "بسته‌بندی صحیح"];
  const chip = (t: string) => (
    <span key={t} className="glass rounded-xl px-5 py-2.5 text-[16.5px] font-bold text-[#F8F8FF]">
      {t}
    </span>
  );
  const plus = <span className="text-[20px] font-black text-[#F5C518]">+</span>;
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <Bokeh />
      <SectionTag>فصل بیست‌وسوم — مسئولیت کانتردار</SectionTag>
      <GlassCard glow="purple" className="glass-strong anim anim-1 mt-7 w-full max-w-[900px] px-12 py-9 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {line1.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {chip(t)}
              {i < line1.length - 1 && plus}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {line2.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {chip(t)}
              {i < line2.length - 1 && plus}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">{chip("تمام اقلام سفارش")}</div>
        <div className="mx-auto mt-6 h-px w-72 bg-[rgba(139,92,246,0.45)]" />
        <p className="mt-5 text-[26px] font-black text-[#F5C518]">= مسئولیت کانتردار</p>
      </GlassCard>
      <div className="anim anim-4 mt-7">
        <Pill tone="red" className="px-7 py-3 text-[16px]">
          «من فقط غذا را سرو کردم» قابل قبول نیست
        </Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDE 25 — مسئولیت صندوق ---------------------- */
export function Slide25() {
  const items = [
    { icon: "📋", t: "ثبت دقیق سفارش" },
    { icon: "✏️", t: "ورود صحیح درخواست خاص" },
    { icon: "📢", t: "ارائه اطلاعات واضح به مشتری" },
    { icon: "📦", t: "اطلاع از موجودی لحظه‌ای" },
    { icon: "🚫", t: "پرهیز از وعده‌های غیرقابل انجام" },
    { icon: "🎯", t: "تمرکز کامل در ساعات پیک" },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل بیست‌وچهارم</SectionTag>
      <SlideTitle className="mt-3">مسئولیت صندوق و فروش</SlideTitle>
      <div className="mt-7 grid flex-1 grid-cols-3 gap-5">
        {items.map((it, i) => (
          <GlassCard key={it.t} className={`anim anim-${(i % 6) + 1} flex flex-col items-center justify-center px-5 py-6 text-center`}>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(139,92,246,0.12)] text-[30px]">
              {it.icon}
            </span>
            <span className="mt-3 text-[15.5px] font-bold leading-relaxed text-[#F8F8FF]">{it.t}</span>
          </GlassCard>
        ))}
      </div>
      <p className="text-muted anim anim-6 mt-5 text-center text-[14px]">
        صندوق، دروازه‌ی ورود سفارش صحیح به سیستم است
      </p>
    </div>
  );
}

/* ---------------------- SLIDE 26 — مسئولیت مدیر شعبه ---------------------- */
export function Slide26() {
  const phases = [
    {
      title: "قبل از فروش",
      icon: "🌅",
      items: ["کنترل آمادگی کامل شعبه", "تعیین جایگاه نفرات"],
    },
    {
      title: "حین فروش",
      icon: "🔥",
      items: ["حضور فعال در سالن", "کنترل کیفیت و مدیریت صف", "رسیدگی به اعتراض مشتری"],
    },
    {
      title: "بعد از فروش",
      icon: "🌙",
      items: ["کنترل تحویل شیفت", "ثبت خطاها", "آموزش نیروی جدید"],
    },
  ];
  return (
    <div className="relative flex h-full flex-col px-14 py-10">
      <Bokeh />
      <SectionTag>فصل بیست‌وپنجم</SectionTag>
      <div className="anim anim-1 mt-3 flex items-center gap-4">
        <span className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#a78bfa] to-[#8B5CF6]" />
        <h2 className="text-[32px] font-extrabold text-[#F8F8FF]">مسئولیت مدیر شعبه و سوپروایزر</h2>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-3 gap-5">
        {phases.map((p, i) => (
          <GlassCard key={p.title} className={`anim anim-${i + 2} px-6 py-6`}>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[24px]">{p.icon}</span>
              <span className="text-[17px] font-extrabold text-[#c4b5fd]">{p.title}</span>
            </div>
            <ul className="space-y-3">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#F8F8FF]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1.5px] bg-[#F5C518]" />
                  {it}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
      <div className="anim anim-5 mt-5 flex justify-center">
        <Pill tone="purple" className="px-7 py-3 text-[16px]">مدیر ناظر نیست — مجری سیستم است</Pill>
      </div>
    </div>
  );
}

/* ---------------------- SLIDES 27 & 28 — قوانین طلایی ---------------------- */
function GoldenRules({ start, rules, part }: { start: number; rules: string[]; part: string }) {
  return (
    <div className="relative flex h-full flex-col px-16 py-10">
      <Bokeh />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "radial-gradient(600px 160px at 50% 0%, rgba(245,197,24,0.1), transparent)" }}
      />
      <div className="anim text-center">
        <div className="text-[13px] font-bold tracking-wide text-[#F5C518]">{part}</div>
        <h2 className="title-gradient mt-1 text-[34px] font-black">
          {toFa(10)} قانون طلایی فروش و کانتر لذیذ
        </h2>
      </div>
      <div className="mt-7 flex flex-1 flex-col gap-3.5">
        {rules.map((r, i) => (
          <div key={r} className={`glass anim anim-${i + 1} flex items-center gap-6 rounded-2xl px-8 py-4`}>
            <span className="w-16 shrink-0 text-center text-[44px] font-black leading-none text-[#F5C518]">
              {toFa(start + i)}
            </span>
            <span className="h-10 w-px bg-[rgba(139,92,246,0.35)]" />
            <span className="text-[18px] font-bold leading-relaxed text-[#F8F8FF]">{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Slide27() {
  return (
    <GoldenRules
      part={`بخش اول — قوانین ${toFa(1)} تا ${toFa(5)}`}
      start={1}
      rules={[
        "مشتری در تایم فروش اولویت اول است",
        "غذای خارج از استاندارد وارد کانتر نمی‌شود",
        "هیچ سفارش کنترل‌نشده‌ای تحویل نمی‌شود",
        "محصول گرم، گرم — محصول سرد، سرد",
        "کانتر کم ولی مستمر شارژ می‌شود",
      ]}
    />
  );
}

export function Slide28() {
  return (
    <GoldenRules
      part={`بخش دوم — قوانین ${toFa(6)} تا ${toFa(10)}`}
      start={6}
      rules={[
        "FIFO در گردش محصولات رعایت می‌شود",
        "ظاهر غذا تا لحظه تحویل بخشی از کیفیت است",
        "بهداشت فردی و محیطی در تمام مدت برقرار است",
        "در ساعات پیک هیچ فعالیت غیرضروری اولویت ندارد",
        "هر خطا باید اصلاح، ثبت و از تکرار آن جلوگیری شود",
      ]}
    />
  );
}

/* ---------------------- SLIDE 29 — استاندارد نهایی ---------------------- */
export function Slide29() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <span className="bokeh h-96 w-96 bg-[rgba(139,92,246,0.22)]" style={{ top: "-8rem", right: "10%" }} />
      <span className="bokeh h-96 w-96 bg-[rgba(34,197,94,0.14)]" style={{ bottom: "-8rem", left: "10%" }} />
      <SectionTag>استاندارد نهایی</SectionTag>
      <GlassCard glow="purple" className="glass-strong anim anim-1 mt-7 w-full max-w-[980px] px-14 py-12 text-center">
        <span className="text-[46px] leading-none text-[#8B5CF6]">❝</span>
        <p className="mt-2 text-[26px] font-extrabold leading-[2] text-[#F8F8FF]">
          <span className="text-[#F5C518]">سفارش درست</span>، <span className="text-[#F5C518]">غذای باکیفیت</span>،{" "}
          <span className="text-[#F5C518]">دمای مناسب</span>، <span className="text-[#F5C518]">بسته‌بندی کامل</span>،
          <br />
          <span className="text-[#4ade80]">محیط تمیز</span>، <span className="text-[#4ade80]">تحویل سریع</span> و{" "}
          <span className="text-[#4ade80]">رفتار محترمانه</span>
        </p>
        <div className="mx-auto mt-7 h-px w-64 bg-[rgba(139,92,246,0.4)]" />
        <p className="anim anim-3 mt-6 text-[19px] font-bold text-[#c4b5fd]">این است استاندارد مجموعه لذیذ</p>
      </GlassCard>
    </div>
  );
}

/* ---------------------- SLIDE 30 — پایان ---------------------- */
export function Slide30() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-16">
      <span className="bokeh h-80 w-80 bg-[rgba(139,92,246,0.2)]" style={{ top: "-6rem", left: "30%" }} />
      <span className="bokeh h-64 w-64 bg-[rgba(245,197,24,0.08)]" style={{ bottom: "-4rem", right: "20%" }} />
      <div className="anim glass glow-purple flex h-24 w-24 items-center justify-center rounded-3xl text-[44px]">
        🍽
      </div>
      <h2 className="title-gradient anim anim-1 mt-8 text-[52px] font-black tracking-tight">
        ممنون از توجه شما
      </h2>
      <p className="anim anim-2 mt-5 text-[19px] font-semibold text-[#F8F8FF]">
        موفقیت ما در گرو کیفیت خدمت شماست
      </p>
      <div className="anim anim-3 mt-10 flex items-center gap-4 border-t divider-purple pt-6 text-[13.5px] text-muted">
        <span>مجموعه لذیذ</span>
        <span className="h-1 w-1 rounded-full bg-[rgba(139,92,246,0.6)]" />
        <span>واحد آموزش و توسعه منابع انسانی</span>
        <span className="h-1 w-1 rounded-full bg-[rgba(139,92,246,0.6)]" />
        <span>نسخه {toFa("1.0")} — {toFa(1405)}</span>
      </div>
    </div>
  );
}
