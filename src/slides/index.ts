import type { ComponentType } from "react";
import * as P1 from "./part1";
import * as P2 from "./part2";
import * as P3 from "./part3";

export interface SlideDef {
  /** 1-based slide number */
  n: number;
  /** short title for overview / export */
  title: string;
  Component: ComponentType;
}

const titles = [
  "جلد — دستورالعمل جامع آموزش پرسنل فروش و کانتر",
  "فهرست مطالب",
  "فلسفه فروش و خدمت‌رسانی",
  "آمادگی قبل از فروش",
  "چک‌لیست افتتاح سالن",
  "تحویل غذا از آشپزخانه",
  "چیدمان کانتر و ابزار سرو",
  "زمان مجاز ماندن غذا در کانتر",
  "FIFO و شارژ مستمر کانتر",
  "کنترل هر ۲۰ دقیقه",
  "محصولات سرد و دورچین‌ها",
  "بهداشت فردی در حین کار",
  "بهداشت محیط کانتر",
  "ترازو و وزن‌کشی",
  "رفتار در تایم فروش",
  "ارتباط با مشتری",
  "تلفن همراه و حواس‌پرتی",
  "کنترل سفارش قبل از تحویل",
  "ساعات اوج فروش (پیک)",
  "مدیریت اعتراض مشتری",
  "تغییر شیفت ساعت ۱۶",
  "شربت پذیرایی استاندارد",
  "بستن شیفت و تحویل کانتر",
  "مسئولیت کانتردار",
  "مسئولیت صندوق و فروش",
  "مسئولیت مدیر شعبه و سوپروایزر",
  "۱۰ قانون طلایی (بخش اول)",
  "۱۰ قانون طلایی (بخش دوم)",
  "استاندارد نهایی",
  "پایان و سپاسگزاری",
];

const components: ComponentType[] = [
  P1.Slide01, P1.Slide02, P1.Slide03, P1.Slide04, P1.Slide05,
  P1.Slide06, P1.Slide07, P1.Slide08, P1.Slide09, P1.Slide10,
  P2.Slide11, P2.Slide12, P2.Slide13, P2.Slide14, P2.Slide15,
  P2.Slide16, P2.Slide17, P2.Slide18, P2.Slide19, P2.Slide20,
  P3.Slide21, P3.Slide22, P3.Slide23, P3.Slide24, P3.Slide25,
  P3.Slide26, P3.Slide27, P3.Slide28, P3.Slide29, P3.Slide30,
];

export const slides: SlideDef[] = components.map((Component, i) => ({
  n: i + 1,
  title: titles[i],
  Component,
}));
