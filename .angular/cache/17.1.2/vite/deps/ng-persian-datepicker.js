import {
  FormControlDirective,
  FormControlName
} from "./chunk-CMAF2SJ2.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-OPAKLLNP.js";
import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  InputFlags,
  NgModule,
  Output,
  Pipe,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BCBXPVHY.js";
import {
  __commonJS,
  __spreadValues,
  __toESM
} from "./chunk-JZJW2K2Z.js";

// node_modules/jalali-ts/dist/index.js
var require_dist = __commonJS({
  "node_modules/jalali-ts/dist/index.js"(exports, module) {
    var j = Object.defineProperty;
    var O = Object.getOwnPropertyDescriptor;
    var Z = Object.getOwnPropertyNames;
    var L = Object.prototype.hasOwnProperty;
    var N = (a, e) => {
      for (var t in e)
        j(a, t, { get: e[t], enumerable: true });
    };
    var F = (a, e, t, n) => {
      if (e && typeof e == "object" || typeof e == "function")
        for (let r of Z(e))
          !L.call(a, r) && r !== t && j(a, r, { get: () => e[r], enumerable: !(n = O(e, r)) || n.enumerable });
      return a;
    };
    var z = (a) => F(j({}, "__esModule", { value: true }), a);
    var G = {};
    N(G, { Jalali: () => p, Utils: () => m });
    module.exports = z(G);
    var m = class {
      static toJalali(e, t, n) {
        let r = e instanceof Date ? e : null, s = r ? r.getFullYear() : e, i = r ? r.getMonth() + 1 : t, o = r ? r.getDate() : n, u = this.gregorianToJulian(s, i, o);
        return this.julianToJalali(u);
      }
      static toGregorian(e, t, n) {
        let r = this.jalaliToJulian(e, t, n);
        return this.julianToGregorian(r);
      }
      static isValid(e, t, n, r = 0, s = 0, i = 0, o = 0) {
        return e >= -61 && e <= 3177 && t >= 1 && t <= 12 && n >= 1 && n <= this.monthLength(e, t) && r >= 0 && r <= 23 && s >= 0 || s <= 59 && i >= 0 || i <= 59 && o >= 0 || o <= 999;
      }
      static isLeapYear(e) {
        return this.calculateLeap(e) === 0;
      }
      static monthLength(e, t) {
        return t <= 6 ? 31 : t <= 11 || this.isLeapYear(e) ? 30 : 29;
      }
      static calculateLeap(e, t) {
        let n = this.breaks.length, r = t ? t.jp : this.breaks[0], s = t ? t.jump : 0;
        if (!t) {
          if (e < r || e >= this.breaks[n - 1])
            throw new Error(`Invalid Jalali year ${e}`);
          for (let u = 1; u < n; u++) {
            let c = this.breaks[u];
            if (s = c - r, e < c)
              break;
            r = c;
          }
        }
        let i = e - r;
        s - i < 6 && (i = i - s + this.div(s + 4, 33) * 33);
        let o = this.mod(this.mod(i + 1, 33) - 1, 4);
        return o === -1 && (o = 4), o;
      }
      static calculateJalali(e, t = true) {
        let n = this.breaks.length, r = e + 621, s = -14, i = this.breaks[0];
        if (e < i || e >= this.breaks[n - 1])
          throw new Error(`Invalid Jalali year ${e}`);
        let o = 0;
        for (let d = 1; d < n; d++) {
          let g = this.breaks[d];
          if (o = g - i, e < g)
            break;
          s = s + this.div(o, 33) * 8 + this.div(this.mod(o, 33), 4), i = g;
        }
        let u = e - i;
        s = s + this.div(u, 33) * 8 + this.div(this.mod(u, 33) + 3, 4), this.mod(o, 33) === 4 && o - u === 4 && (s += 1);
        let c = this.div(r, 4) - this.div((this.div(r, 100) + 1) * 3, 4) - 150, l = 20 + s - c;
        return { gregorianYear: r, march: l, leap: t ? this.calculateLeap(e, { jp: i, jump: o }) : -1 };
      }
      static jalaliToJulian(e, t, n) {
        let r = this.calculateJalali(e, false);
        return this.gregorianToJulian(r.gregorianYear, 3, r.march) + (t - 1) * 31 - this.div(t, 7) * (t - 7) + n - 1;
      }
      static julianToJalali(e) {
        let t = this.julianToGregorian(e), n = t.year - 621, r = this.calculateJalali(n), s = this.gregorianToJulian(t.year, 3, r.march), i = e - s;
        if (i >= 0) {
          if (i <= 185)
            return { year: n, month: 1 + this.div(i, 31), date: this.mod(i, 31) + 1 };
          i -= 186;
        } else
          n -= 1, i += 179, r.leap === 1 && (i += 1);
        return { year: n, month: 7 + this.div(i, 30), date: this.mod(i, 30) + 1 };
      }
      static gregorianToJulian(e, t, n) {
        return this.div((e + this.div(t - 8, 6) + 100100) * 1461, 4) + this.div(153 * this.mod(t + 9, 12) + 2, 5) + n - 34840408 - this.div(this.div(e + 100100 + this.div(t - 8, 6), 100) * 3, 4) + 752;
      }
      static julianToGregorian(e) {
        let t = 4 * e + 139361631;
        t = t + this.div(this.div(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
        let n = this.div(this.mod(t, 1461), 4) * 5 + 308, r = this.div(this.mod(n, 153), 5) + 1, s = this.mod(this.div(n, 153), 12) + 1;
        return { year: this.div(t, 1461) - 100100 + this.div(8 - s, 6), month: s, date: r };
      }
      static jalaliWeek(e, t, n) {
        let r = this.toDate(e, t, n).getDay(), s = r === 6 ? 0 : -(r + 1), i = 6 + s;
        return { saturday: this.julianToJalali(this.jalaliToJulian(e, t, n + s)), friday: this.julianToJalali(this.jalaliToJulian(e, t, n + i)) };
      }
      static toDate(e, t, n, r = 0, s = 0, i = 0, o = 0) {
        let u = this.toGregorian(e, t, n);
        return new Date(u.year, u.month - 1, u.date, r, s, i, o);
      }
      static div(e, t) {
        return ~~(e / t);
      }
      static mod(e, t) {
        return e - ~~(e / t) * t;
      }
    };
    m.breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    var T = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
    var v = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
    var I = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    var b = (a) => {
      let e = m.toJalali(a);
      return e.month -= 1, e;
    };
    var y = (a, e, t) => {
      let n = m.toGregorian(a, e + 1, t);
      return n.month -= 1, n;
    };
    var Y = (a, e) => (e = m.mod(e, 12), a += m.div(e, 12), e < 0 && (e += 12, a -= 1), m.monthLength(a, e + 1));
    var w = (a) => {
      let e = /* @__PURE__ */ new Map();
      return e.set("۰", "0"), e.set("۱", "1"), e.set("۲", "2"), e.set("۳", "3"), e.set("۴", "4"), e.set("۵", "5"), e.set("۶", "6"), e.set("۷", "7"), e.set("۸", "8"), e.set("۹", "9"), String(a).split("").map((t) => e.get(t) ?? t).join("");
    };
    var S = (a, e) => {
      let t = null;
      return String(a).toLowerCase().includes("am") && (t = "am"), String(a).toLowerCase().includes("pm") && (t = "pm"), t === "am" && e === 12 ? 0 : t === "pm" && e >= 1 && e <= 11 ? e + 12 : t !== null && e > 12 ? -1 : e;
    };
    var H = (a) => a.length === 1 ? Number(a) * 100 : a.length === 2 ? Number(a) * 10 : a.length > 3 ? -1 : Number(a);
    var f = (a, e = 2) => String(a).padStart(e, "0");
    var k = (a) => {
      throw new Error(`Invalid: ${a}`);
    };
    var h = class {
      constructor(e = /* @__PURE__ */ new Date(), t = true) {
        this.date = e;
        if (h.checkTimeZone) {
          let n = h.timeZone, r = Intl.DateTimeFormat().resolvedOptions().timeZone;
          r !== n && (console.warn(`Your system time zone doesn't equal to '${n}', current: ${r}`), console.warn("You may getting unexpected results (calculated timestamp)"));
        }
        t || this.date.setMilliseconds(0);
      }
      static set timeZone(e) {
        this._timeZone = e, this.setTimeZone && typeof process == "object" && process?.release?.name === "node" && (process.env.TZ = e);
      }
      static get timeZone() {
        return this._timeZone ?? this.defaultTimeZone;
      }
      static parse(e, t = true) {
        let n = w(e), r = n.match(/\d\d?\d?\d?/g) || [], s = new Array(7).fill("0"), [i, o, u, c, l, d, g] = [...r, ...s].slice(0, 7).map((D, M) => {
          let J = Number(D);
          return M === 3 ? J = S(n, Number(D)) : M === 6 && (J = H(D)), J;
        });
        return m.isValid(i, o, u, c, l, d, g) || k(e), new h(m.toDate(i, o, u, c, l, d, g), t);
      }
      static gregorian(e, t = true) {
        let n = w(e), r = new Date(n);
        return Number.isNaN(+r) && k(e), new h(r, t);
      }
      static timestamp(e, t = true) {
        return new h(new Date(e), t);
      }
      static now(e = true) {
        return new h(/* @__PURE__ */ new Date(), e);
      }
      clone(e = true) {
        return h.timestamp(+this, e);
      }
      valueOf() {
        return +this.date;
      }
      toString() {
        return this.format();
      }
      getFullYear() {
        return b(this.date).year;
      }
      getMonth() {
        return b(this.date).month;
      }
      getDate() {
        return b(this.date).date;
      }
      getHours() {
        return this.date.getHours();
      }
      getMinutes() {
        return this.date.getMinutes();
      }
      getSeconds() {
        return this.date.getSeconds();
      }
      getMilliseconds() {
        return this.date.getMilliseconds();
      }
      setFullYear(e) {
        let t = b(this.date), n = Math.min(t.date, Y(e, t.month)), r = y(e, t.month, n);
        return this.update(r), this;
      }
      setMonth(e) {
        let t = b(this.date), n = Math.min(t.date, Y(t.year, e));
        this.setFullYear(t.year + m.div(e, 12)), e = m.mod(e, 12), e < 0 && (e += 12, this.add(-1, "year"));
        let r = y(this.getFullYear(), e, n);
        return this.update(r), this;
      }
      setDate(e) {
        let t = b(this.date), n = y(t.year, t.month, e);
        return this.update(n), this;
      }
      setHours(e) {
        return this.date.setHours(e), this;
      }
      setMinutes(e) {
        return this.date.setMinutes(e), this;
      }
      setSeconds(e) {
        return this.date.setSeconds(e), this;
      }
      setMilliseconds(e) {
        return this.date.setMilliseconds(e), this;
      }
      isLeapYear() {
        return m.isLeapYear(b(this.date).year);
      }
      monthLength() {
        let e = b(this.date);
        return Y(e.year, e.month);
      }
      add(e, t) {
        switch (t) {
          case "year":
            this.setFullYear(this.getFullYear() + e);
            break;
          case "month":
            this.setMonth(this.getMonth() + e);
            break;
          case "week":
            this.date.setDate(this.date.getDate() + e * 7);
            break;
          case "day":
            this.date.setDate(this.date.getDate() + e);
            break;
        }
        return this;
      }
      startOf(e) {
        if (e === "year" && this.setMonth(0), (e === "year" || e === "month") && this.setDate(1), e === "week") {
          let t = this.date.getDay(), n = this.date.getDate() - (t === 6 ? 0 : this.date.getDay() + 1);
          this.date.setDate(n);
        }
        return this.setHours(0).setMinutes(0).setSeconds(0).setMilliseconds(0), this;
      }
      endOf(e) {
        return this.startOf(e).add(1, e).setMilliseconds(-1), this;
      }
      dayOfYear(e) {
        let t = this.clone(), n = +t.startOf("day"), r = +t.startOf("year"), s = Math.round((n - r) / 864e5) + 1;
        return e === void 0 ? s : (this.add(e - s, "day"), this);
      }
      format(e = "YYYY/MM/DD HH:mm:ss", t = false) {
        let n = String(e), r = t ? this.date : this, s = r.getMonth(), i = this.date.getDay(), o = r.getFullYear(), u = s + 1, c = r.getDate(), l = r.getHours(), d = r.getMinutes(), g = r.getSeconds(), D = r.getMilliseconds();
        if (t || (e.includes("dddd") && (n = n.replace("dddd", T[i])), e.includes("dd") && (n = n.replace("dd", v[i])), e.includes("MMMM") && (n = n.replace("MMMM", I[s]))), e.includes("YYYY") && (n = n.replace("YYYY", String(o))), e.includes("MM") && (n = n.replace("MM", f(u))), e.includes("DD") && (n = n.replace("DD", f(c))), e.includes("HH") && (n = n.replace("HH", f(l))), e.includes("mm") && (n = n.replace("mm", f(d))), e.includes("ss") && (n = n.replace("ss", f(g))), e.includes("SSS") && (n = n.replace("SSS", f(D, 3))), e.includes("hh")) {
          let M = l >= 12 ? "pm" : "am";
          e.includes("a") && (n = n.replace("a", M)), e.includes("A") && (n = n.replace("A", M.toUpperCase())), l === 0 && (l = 12), l >= 13 && l <= 23 && (l -= 12), n = n.replace("hh", f(l));
        }
        return n;
      }
      gregorian(e = "YYYY-MM-DD HH:mm:ss") {
        return this.format(e, true);
      }
      update(e) {
        this.date = new Date(e.year, e.month, e.date, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
      }
    };
    var p = h;
    p.defaultTimeZone = "Asia/Tehran", p.checkTimeZone = true, p.setTimeZone = true;
  }
});

// node_modules/ng-persian-datepicker/fesm2022/ng-persian-datepicker.mjs
var import_jalali_ts = __toESM(require_dist(), 1);
function NgPersianDatepickerComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵlistener("click", function NgPersianDatepickerComponent_div_17_div_2_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r12);
      const year_r9 = restoredCtx.$implicit;
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.yearClick(year_r9));
    });
    ɵɵelementStart(1, "div", 22, 23)(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const year_r9 = ctx.$implicit;
    const _r10 = ɵɵreference(2);
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("background-color", year_r9.isYearDisabled ? ctx_r8.uiTheme.disabledBackground : year_r9.isYearOfSelectedDate ? ctx_r8.uiTheme.selectedBackground : _r10.classList.contains("hover") ? ctx_r8.uiTheme.hoverBackground : year_r9.isYearOfTodayDate ? ctx_r8.uiTheme.todayBackground : null)("color", year_r9.isYearDisabled ? ctx_r8.uiTheme.disabledText : year_r9.isYearOfSelectedDate ? ctx_r8.uiTheme.selectedText : _r10.classList.contains("hover") ? ctx_r8.uiTheme.hoverText : year_r9.isYearOfTodayDate ? ctx_r8.uiTheme.todayText : null);
    ɵɵclassProp("disabled", year_r9.isYearDisabled)("selected", year_r9.isYearOfSelectedDate)("today", year_r9.isYearOfTodayDate);
    ɵɵadvance(3);
    ɵɵtextInterpolate(year_r9.value);
  }
}
function NgPersianDatepickerComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 18)(1, "div", 19);
    ɵɵtemplate(2, NgPersianDatepickerComponent_div_17_div_2_Template, 5, 11, "div", 20);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("no-margin-bottom", !ctx_r3.timeEnable && !ctx_r3.uiTodayBtnEnable);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.years);
  }
}
function NgPersianDatepickerComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵlistener("click", function NgPersianDatepickerComponent_div_18_div_2_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r17);
      const month_r14 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.monthClick(month_r14));
    });
    ɵɵelementStart(1, "div", 22, 27)(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "month");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const month_r14 = ctx.$implicit;
    const _r15 = ɵɵreference(2);
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("background-color", month_r14.isMonthDisabled ? ctx_r13.uiTheme.disabledBackground : month_r14.isMonthOfSelectedDate ? ctx_r13.uiTheme.selectedBackground : _r15.classList.contains("hover") ? ctx_r13.uiTheme.hoverBackground : month_r14.isMonthOfTodayDate ? ctx_r13.uiTheme.todayBackground : null)("color", month_r14.isMonthDisabled ? ctx_r13.uiTheme.disabledText : month_r14.isMonthOfSelectedDate ? ctx_r13.uiTheme.selectedText : _r15.classList.contains("hover") ? ctx_r13.uiTheme.hoverText : month_r14.isMonthOfTodayDate ? ctx_r13.uiTheme.todayText : null);
    ɵɵclassProp("disabled", month_r14.isMonthDisabled)("selected", month_r14.isMonthOfSelectedDate)("today", month_r14.isMonthOfTodayDate);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 11, month_r14.indexValue));
  }
}
function NgPersianDatepickerComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 24)(1, "div", 19);
    ɵɵtemplate(2, NgPersianDatepickerComponent_div_18_div_2_Template, 6, 13, "div", 25);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("no-margin-bottom", !ctx_r4.timeEnable && !ctx_r4.uiTodayBtnEnable);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r4.months);
  }
}
function NgPersianDatepickerComponent_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const weekDay_r20 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(weekDay_r20);
  }
}
function NgPersianDatepickerComponent_div_19_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 35);
    ɵɵlistener("click", function NgPersianDatepickerComponent_div_19_ng_container_4_div_1_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r26);
      const day_r23 = restoredCtx.$implicit;
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.dayClick(day_r23));
    });
    ɵɵelementStart(1, "div", 22, 36)(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const day_r23 = ctx.$implicit;
    const _r24 = ɵɵreference(2);
    const ctx_r22 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵstyleProp("background-color", day_r23.isDayDisabled ? ctx_r22.uiTheme.disabledBackground : day_r23.isDayOfSelectedDate ? ctx_r22.uiTheme.selectedBackground : _r24.classList.contains("hover") ? ctx_r22.uiTheme.hoverBackground : day_r23.isDayOfTodayDate ? ctx_r22.uiTheme.todayBackground : !day_r23.isDayInCurrentMonth ? ctx_r22.uiTheme.otherMonthBackground : null)("color", day_r23.isDayDisabled ? ctx_r22.uiTheme.disabledText : day_r23.isDayOfSelectedDate ? ctx_r22.uiTheme.selectedText : _r24.classList.contains("hover") ? ctx_r22.uiTheme.hoverText : day_r23.isDayOfTodayDate ? ctx_r22.uiTheme.todayText : !day_r23.isDayInCurrentMonth ? ctx_r22.uiTheme.otherMonthText : null);
    ɵɵclassProp("disabled", day_r23.isDayDisabled)("selected", day_r23.isDayOfSelectedDate)("today", day_r23.isDayOfTodayDate)("other-month", !day_r23.isDayInCurrentMonth);
    ɵɵadvance(3);
    ɵɵtextInterpolate(day_r23.value);
  }
}
function NgPersianDatepickerComponent_div_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgPersianDatepickerComponent_div_19_ng_container_4_div_1_Template, 5, 13, "div", 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", row_r21);
  }
}
function NgPersianDatepickerComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 28)(1, "div", 29);
    ɵɵtemplate(2, NgPersianDatepickerComponent_div_19_div_2_Template, 3, 1, "div", 30);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 31);
    ɵɵtemplate(4, NgPersianDatepickerComponent_div_19_ng_container_4_Template, 2, 1, "ng-container", 32);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.weekDays);
    ɵɵadvance();
    ɵɵclassProp("no-margin-bottom", !ctx_r5.timeEnable && !ctx_r5.uiTodayBtnEnable);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r5.days);
  }
}
function NgPersianDatepickerComponent_ng_container_20_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39)(1, "div", 45, 46);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_20_ng_container_7_div_1_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r37);
      const i_r34 = restoredCtx.index;
      const ctx_r36 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r36.setHour(i_r34));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const i_r34 = ctx.index;
    const _r35 = ɵɵreference(2);
    const ctx_r32 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r32.hour === i_r34 ? ctx_r32.uiTheme.selectedBackground : _r35.classList.contains("hover") ? ctx_r32.uiTheme.hoverBackground : null)("color", ctx_r32.hour === i_r34 ? ctx_r32.uiTheme.selectedText : _r35.classList.contains("hover") ? ctx_r32.uiTheme.hoverText : null);
    ɵɵclassProp("selected", ctx_r32.hour === i_r34);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 7, i_r34, "2.0"));
  }
}
var _c0 = () => [];
function NgPersianDatepickerComponent_ng_container_20_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgPersianDatepickerComponent_ng_container_20_ng_container_7_div_1_Template, 6, 10, "div", 42);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c0).constructor(24));
  }
}
function NgPersianDatepickerComponent_ng_container_20_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39)(1, "div", 45, 47);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_20_ng_container_8_div_1_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r43);
      const i_r40 = restoredCtx.index;
      const ctx_r42 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r42.set12Hour(i_r40 + 1));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const i_r40 = ctx.index;
    const _r41 = ɵɵreference(2);
    const ctx_r38 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r38.hour === 0 && i_r40 + 1 === 12 || ctx_r38.hour >= 1 && ctx_r38.hour <= 12 && ctx_r38.hour === i_r40 + 1 || ctx_r38.hour > 12 && ctx_r38.hour === i_r40 + 1 + 12 ? ctx_r38.uiTheme.selectedBackground : _r41.classList.contains("hover") ? ctx_r38.uiTheme.hoverBackground : null)("color", ctx_r38.hour === 0 && i_r40 + 1 === 12 || ctx_r38.hour >= 1 && ctx_r38.hour <= 12 && ctx_r38.hour === i_r40 + 1 || ctx_r38.hour > 12 && ctx_r38.hour === i_r40 + 1 + 12 ? ctx_r38.uiTheme.selectedText : _r41.classList.contains("hover") ? ctx_r38.uiTheme.hoverText : null);
    ɵɵclassProp("selected", ctx_r38.hour === 0 && i_r40 + 1 === 12 || ctx_r38.hour >= 1 && ctx_r38.hour <= 12 && ctx_r38.hour === i_r40 + 1 || ctx_r38.hour > 12 && ctx_r38.hour === i_r40 + 1 + 12);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 7, i_r40 + 1, "2.0"));
  }
}
function NgPersianDatepickerComponent_ng_container_20_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgPersianDatepickerComponent_ng_container_20_ng_container_8_div_1_Template, 6, 10, "div", 42);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c0).constructor(12));
  }
}
function NgPersianDatepickerComponent_ng_container_20_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39)(1, "div", 45, 48);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_20_div_18_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r48);
      const i_r45 = restoredCtx.index;
      const ctx_r47 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r47.setMinute(i_r45));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const i_r45 = ctx.index;
    const _r46 = ɵɵreference(2);
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r29.minute === i_r45 ? ctx_r29.uiTheme.selectedBackground : _r46.classList.contains("hover") ? ctx_r29.uiTheme.hoverBackground : null)("color", ctx_r29.minute === i_r45 ? ctx_r29.uiTheme.selectedText : _r46.classList.contains("hover") ? ctx_r29.uiTheme.hoverText : null);
    ɵɵclassProp("selected", ctx_r29.minute === i_r45);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 7, i_r45, "2.0"));
  }
}
function NgPersianDatepickerComponent_ng_container_20_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39)(1, "div", 45, 50);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_20_div_23_div_5_Template_div_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r54);
      const i_r51 = restoredCtx.index;
      const ctx_r53 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r53.setSecond(i_r51));
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const i_r51 = ctx.index;
    const _r52 = ɵɵreference(2);
    const ctx_r49 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r49.second === i_r51 ? ctx_r49.uiTheme.selectedBackground : _r52.classList.contains("hover") ? ctx_r49.uiTheme.hoverBackground : null)("color", ctx_r49.second === i_r51 ? ctx_r49.uiTheme.selectedText : _r52.classList.contains("hover") ? ctx_r49.uiTheme.hoverText : null);
    ɵɵclassProp("selected", ctx_r49.second === i_r51);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(5, 7, i_r51, "2.0"));
  }
}
function NgPersianDatepickerComponent_ng_container_20_div_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 49)(1, "div", 39)(2, "div", 40)(3, "span");
    ɵɵtext(4, "--");
    ɵɵelementEnd()()();
    ɵɵtemplate(5, NgPersianDatepickerComponent_ng_container_20_div_23_div_5_Template, 6, 10, "div", 42);
    ɵɵelementStart(6, "div", 39)(7, "div", 40)(8, "span");
    ɵɵtext(9, "--");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵstyleProp("background-color", ctx_r30.uiTheme.disabledBackground)("color", ctx_r30.uiTheme.disabledText);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(9, _c0).constructor(60));
    ɵɵadvance(2);
    ɵɵstyleProp("background-color", ctx_r30.uiTheme.disabledBackground)("color", ctx_r30.uiTheme.disabledText);
  }
}
function NgPersianDatepickerComponent_ng_container_20_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 51)(1, "div", 39)(2, "div", 45, 52);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_20_div_24_Template_div_click_2_listener() {
      ɵɵrestoreView(_r58);
      const ctx_r57 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r57.toggleAmPm("AM"));
    });
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "AM");
    ɵɵelementEnd()()();
    ɵɵelementStart(6, "div", 39)(7, "div", 45, 53);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_20_div_24_Template_div_click_7_listener() {
      ɵɵrestoreView(_r58);
      const ctx_r59 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r59.toggleAmPm("PM"));
    });
    ɵɵelementStart(9, "span");
    ɵɵtext(10, "PM");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const _r55 = ɵɵreference(3);
    const _r56 = ɵɵreference(8);
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵstyleProp("background-color", ctx_r31.hour < 12 ? ctx_r31.uiTheme.selectedBackground : _r55.classList.contains("hover") ? ctx_r31.uiTheme.hoverBackground : null)("color", ctx_r31.hour < 12 ? ctx_r31.uiTheme.selectedText : _r55.classList.contains("hover") ? ctx_r31.uiTheme.hoverText : null);
    ɵɵclassProp("selected", ctx_r31.hour < 12);
    ɵɵadvance(5);
    ɵɵstyleProp("background-color", ctx_r31.hour >= 12 ? ctx_r31.uiTheme.selectedBackground : _r56.classList.contains("hover") ? ctx_r31.uiTheme.hoverBackground : null)("color", ctx_r31.hour >= 12 ? ctx_r31.uiTheme.selectedText : _r56.classList.contains("hover") ? ctx_r31.uiTheme.hoverText : null);
    ɵɵclassProp("selected", ctx_r31.hour >= 12);
  }
}
function NgPersianDatepickerComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "div", 40)(5, "span");
    ɵɵtext(6, "--");
    ɵɵelementEnd()()();
    ɵɵtemplate(7, NgPersianDatepickerComponent_ng_container_20_ng_container_7_Template, 2, 2, "ng-container", 16)(8, NgPersianDatepickerComponent_ng_container_20_ng_container_8_Template, 2, 2, "ng-container", 16);
    ɵɵelementStart(9, "div", 39)(10, "div", 40)(11, "span");
    ɵɵtext(12, "--");
    ɵɵelementEnd()()()();
    ɵɵelementStart(13, "div", 41)(14, "div", 39)(15, "div", 40)(16, "span");
    ɵɵtext(17, "--");
    ɵɵelementEnd()()();
    ɵɵtemplate(18, NgPersianDatepickerComponent_ng_container_20_div_18_Template, 6, 10, "div", 42);
    ɵɵelementStart(19, "div", 39)(20, "div", 40)(21, "span");
    ɵɵtext(22, "--");
    ɵɵelementEnd()()()();
    ɵɵtemplate(23, NgPersianDatepickerComponent_ng_container_20_div_23_Template, 10, 10, "div", 43)(24, NgPersianDatepickerComponent_ng_container_20_div_24_Template, 11, 12, "div", 44);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("border-top-color", ctx_r6.uiTheme.timeBorder)("border-bottom-color", ctx_r6.uiTheme.timeBorder);
    ɵɵadvance(3);
    ɵɵstyleProp("background-color", ctx_r6.uiTheme.disabledBackground)("color", ctx_r6.uiTheme.disabledText);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r6.timeMeridian);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.timeMeridian);
    ɵɵadvance(2);
    ɵɵstyleProp("background-color", ctx_r6.uiTheme.disabledBackground)("color", ctx_r6.uiTheme.disabledText);
    ɵɵadvance(5);
    ɵɵstyleProp("background-color", ctx_r6.uiTheme.disabledBackground)("color", ctx_r6.uiTheme.disabledText);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(25, _c0).constructor(60));
    ɵɵadvance(2);
    ɵɵstyleProp("background-color", ctx_r6.uiTheme.disabledBackground)("color", ctx_r6.uiTheme.disabledText);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r6.timeShowSecond);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.timeMeridian);
  }
}
function NgPersianDatepickerComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 54, 55);
    ɵɵlistener("click", function NgPersianDatepickerComponent_ng_container_22_Template_div_click_1_listener() {
      ɵɵrestoreView(_r62);
      const ctx_r61 = ɵɵnextContext();
      return ɵɵresetView(ctx_r61.selectToday());
    });
    ɵɵelementStart(3, "span");
    ɵɵtext(4, "امروز");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const _r60 = ɵɵreference(2);
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("background-color", _r60.classList.contains("hover") ? ctx_r7.uiTheme.hoverBackground : null)("color", _r60.classList.contains("hover") ? ctx_r7.uiTheme.hoverText : null);
  }
}
var _c1 = ["*"];
var defaultTheme = {
  border: "#CCCCCC",
  timeBorder: "#CCCCCC",
  background: "#FFFFFF",
  text: "#333333",
  hoverBackground: "#007BE6",
  hoverText: "#FFFFFF",
  disabledBackground: "#F1F1F1",
  disabledText: "#CCCCCC",
  selectedBackground: "#005299",
  selectedText: "#FFFFFF",
  todayBackground: "#333333",
  todayText: "#FFFFFF",
  otherMonthBackground: "rgba(0, 0, 0, 0)",
  otherMonthText: "#CCCCCC"
};
var weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
var months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
var ThemeHoverDirective = class _ThemeHoverDirective {
  elementRef;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  onMouseOver() {
    this.elementRef.nativeElement?.classList?.add("hover");
  }
  onMouseOut() {
    this.elementRef.nativeElement?.classList?.remove("hover");
  }
  static ɵfac = function ThemeHoverDirective_Factory(t) {
    return new (t || _ThemeHoverDirective)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ThemeHoverDirective,
    selectors: [["", "themeHover", ""]],
    hostBindings: function ThemeHoverDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseover", function ThemeHoverDirective_mouseover_HostBindingHandler() {
          return ctx.onMouseOver();
        })("mouseout", function ThemeHoverDirective_mouseout_HostBindingHandler() {
          return ctx.onMouseOut();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeHoverDirective, [{
    type: Directive,
    args: [{
      selector: "[themeHover]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    onMouseOver: [{
      type: HostListener,
      args: ["mouseover"]
    }],
    onMouseOut: [{
      type: HostListener,
      args: ["mouseout"]
    }]
  });
})();
var MonthPipe = class _MonthPipe {
  transform(index) {
    return months[index];
  }
  static ɵfac = function MonthPipe_Factory(t) {
    return new (t || _MonthPipe)();
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "month",
    type: _MonthPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthPipe, [{
    type: Pipe,
    args: [{
      name: "month"
    }]
  }], null, null);
})();
var NgPersianDatepickerComponent = class _NgPersianDatepickerComponent {
  elementRef;
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.setToday();
  }
  input;
  inputEventFocusListener;
  formControl;
  formControlValueChanges;
  dateValue;
  lastEmittedDateValue;
  preventClose = false;
  uiYearView = true;
  uiMonthView = true;
  today;
  viewDate;
  selectedDate;
  wasInsideClick = false;
  viewDateTitle = "";
  viewModes = [];
  viewModeIndex = 0;
  weekDays = weekDays;
  years = [];
  months = [];
  days = [];
  hour = 0;
  minute = 0;
  second = 0;
  /** @ReactiveForm */
  set _formControlDirective(value) {
    this.setFormControl(value?.control);
  }
  set _formControlName(value) {
    this.setFormControl(value?.control);
  }
  /** @Input */
  // date
  inputDateValue;
  dateInitValue = true;
  dateIsGregorian = false;
  dateFormat = "YYYY/MM/DD";
  set _dateFormat(value) {
    this.dateFormat = value.replace(new RegExp("j", "g"), "");
  }
  dateGregorianFormat = "YYYY-MM-DD";
  dateMin = null;
  set _dateMin(value) {
    this.dateMin = value;
    if (this.days.length)
      this.setViewDate();
  }
  dateMax = null;
  set _dateMax(value) {
    this.dateMax = value;
    if (this.days.length)
      this.setViewDate();
  }
  // time
  timeEnable = false;
  set _timeEnable(value) {
    this.timeEnable = value;
    if (!this.timeEnable && this.dateValueDefined())
      this.onChangeSelectedDate(true);
    this.setTime();
    this.scrollIntoActiveTime();
  }
  timeShowSecond = false;
  set _timeShowSecond(value) {
    this.timeShowSecond = value;
    this.scrollIntoActiveTime();
  }
  timeMeridian = false;
  set _timeMeridian(value) {
    this.timeMeridian = value;
    this.scrollIntoActiveTime();
  }
  // ui
  uiTheme = defaultTheme;
  set _uiTheme(value) {
    this.uiTheme = __spreadValues(__spreadValues({}, defaultTheme), value);
  }
  uiIsVisible = false;
  uiHideOnOutsideClick = true;
  uiHideAfterSelectDate = true;
  set _uiYearView(value) {
    this.uiYearView = value;
    this.checkViewModes();
    this.setViewDateTitle();
  }
  set _uiMonthView(value) {
    this.uiMonthView = value;
    this.checkViewModes();
    this.setViewDateTitle();
  }
  uiInitViewMode = "day";
  uiTodayBtnEnable = true;
  /** @Output */
  // date
  dateOnInit = new EventEmitter();
  dateOnSelect = new EventEmitter();
  // ui
  uiIsVisibleChange = new EventEmitter();
  ngOnInit() {
    this.setViewModes();
    this.setInitViewMode();
    this.setShowOnInputFocus();
    if (this.inputDateValue)
      this.setFormControl(this.inputDateValue);
  }
  ngOnDestroy() {
    this.formControlValueChanges?.unsubscribe();
    if (this.input) {
      this.input.removeEventListener("focus", this.inputEventFocusListener);
    }
  }
  dateValueDefined() {
    return typeof this.dateValue === "number";
  }
  setFormControl(value) {
    if (!value)
      return;
    this.formControl = value;
    if (!this.dateValueDefined()) {
      this.setDateInitValue(this.formControl?.value);
      this.setSelectedDate(this.formControl?.value);
      this.setViewDate();
      this.setTime();
      this.setFormControlValue();
    }
    this.formControlValueChanges?.unsubscribe();
    this.formControlValueChanges = this.formControl?.valueChanges?.subscribe({
      next: (value2) => {
        if (typeof value2 === "string" && !value2.trim() || typeof value2 === "number" && Number.isNaN(value2) || value2 === null || value2 === void 0) {
          this.dateValue = void 0;
          this.lastEmittedDateValue = void 0;
          this.selectedDate = void 0;
          this.setViewDate();
          return;
        }
        let valueOf = void 0;
        try {
          valueOf = this.valueOfDate(value2);
        } catch (e) {
          return;
        }
        if (typeof valueOf === "undefined" || valueOf === this.dateValue) {
          return;
        }
        const date = import_jalali_ts.Jalali.timestamp(valueOf, false);
        if (!this.isDateInRange(date.valueOf(), false, false)) {
          return;
        }
        this.setTime(date);
        this.changeSelectedDate(date, false);
        this.scrollIntoActiveTime();
      }
    });
  }
  setToday() {
    const today = import_jalali_ts.Jalali.now(false);
    if (!this.timeEnable)
      today.startOf("day");
    this.today = today;
  }
  setViewModes() {
    this.viewModes = ["day"];
    if (this.uiMonthView) {
      this.viewModes.push("month");
    }
    if (this.uiYearView) {
      this.viewModes.push("year");
    }
    if (this.viewModes.length <= this.viewModeIndex) {
      this.viewModeIndex = 0;
    }
  }
  setInitViewMode() {
    const index = this.viewModes.indexOf(this.uiInitViewMode);
    if (index !== -1)
      this.viewModeIndex = index;
  }
  checkViewModes() {
    let viewModesCount = 1;
    if (this.uiYearView) {
      viewModesCount++;
    }
    if (this.uiMonthView) {
      viewModesCount++;
    }
    if (viewModesCount !== this.viewModes.length) {
      this.setViewModes();
    }
  }
  setDateInitValue(dateValue) {
    if (dateValue || !this.dateInitValue) {
      return;
    }
    this.dateValue = this.today.valueOf();
    this.selectedDate = import_jalali_ts.Jalali.timestamp(this.dateValue, false);
    this.lastEmittedDateValue = +this.selectedDate;
    this.dateOnInit.next({
      shamsi: String(this.selectedDate.format(this.dateFormat)),
      gregorian: String(this.selectedDate.gregorian(this.dateGregorianFormat)),
      timestamp: Number(this.selectedDate.valueOf())
    });
  }
  setSelectedDate(dateValue) {
    if (!dateValue) {
      return;
    }
    const date = import_jalali_ts.Jalali.timestamp(this.valueOfDate(dateValue), false);
    if (!this.timeEnable)
      date.startOf("day");
    this.dateValue = date.valueOf();
    this.selectedDate = date;
  }
  setViewDate() {
    if (!this.dateValueDefined()) {
      this.viewDate = this.dateMax ? import_jalali_ts.Jalali.timestamp(this.dateMax, false) : this.today.clone();
    } else {
      this.viewDate = this.dateMax && this.selectedDate.valueOf() > this.dateMax.valueOf() ? import_jalali_ts.Jalali.timestamp(this.dateMax, false) : this.selectedDate.clone();
    }
    if (!this.timeEnable)
      this.viewDate.startOf("day");
    this.onChangeViewDate();
  }
  onChangeViewDate() {
    this.viewDate.startOf("month");
    this.setYears();
    this.setMonths();
    this.setDays();
    this.setViewDateTitle();
  }
  setYears() {
    this.years = [];
    const years = this.viewDate.clone();
    years.startOf("year");
    years.add(-6, "year");
    for (let i = 0; i < 12; i++) {
      const year = [years.valueOf(), years.getFullYear()];
      this.years.push({
        timestamp: year[0],
        value: year[1],
        isYearOfTodayDate: this.isYearOfTodayDate(year),
        isYearOfSelectedDate: this.isYearOfSelectedDate(year),
        isYearDisabled: this.isYearDisabled(year)
      });
      years.add(1, "year");
    }
  }
  setMonths() {
    this.months = [];
    const months2 = this.viewDate.clone();
    months2.startOf("year");
    for (let i = 0; i < 12; i++) {
      const month = [months2.valueOf(), months2.getFullYear(), months2.getMonth()];
      this.months.push({
        timestamp: month[0],
        year: month[1],
        indexValue: month[2],
        isMonthOfTodayDate: this.isMonthOfToday(month),
        isMonthOfSelectedDate: this.isMonthOfSelectedDate(month),
        isMonthDisabled: this.isMonthDisabled(month)
      });
      months2.add(1, "month");
    }
  }
  setDays() {
    this.days = [];
    const prevMonthDetails = [];
    const currentMonthDetails = [];
    const nextMonthDetails = [];
    const prevMonth = import_jalali_ts.Jalali.timestamp(this.viewDate.valueOf(), false);
    const currentMonth = import_jalali_ts.Jalali.timestamp(this.viewDate.valueOf(), false);
    const nextMonth = import_jalali_ts.Jalali.timestamp(this.viewDate.valueOf(), false);
    prevMonth.add(-1, "month");
    nextMonth.add(1, "month");
    const currentMonthDays = currentMonth.monthLength();
    const prevMonthDays = prevMonth.monthLength();
    const nextMonthDays = nextMonth.monthLength();
    for (let i = 0; i < prevMonthDays; i++) {
      prevMonthDetails.push([prevMonth.valueOf(), prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate()]);
      prevMonth.add(1, "day");
    }
    for (let i = 0; i < currentMonthDays; i++) {
      currentMonthDetails.push([currentMonth.valueOf(), currentMonth.getFullYear(), currentMonth.getMonth(), currentMonth.getDate()]);
      currentMonth.add(1, "day");
    }
    for (let i = 0; i < nextMonthDays; i++) {
      nextMonthDetails.push([nextMonth.valueOf(), nextMonth.getFullYear(), nextMonth.getMonth(), nextMonth.getDate()]);
      nextMonth.add(1, "day");
    }
    for (let row = 0; row < 6; row++) {
      const rowValue = [];
      for (let col = 0; col < 7; col++) {
        const fromPrevMonth = this.viewDate.date.getDay() === 6 ? 0 : this.viewDate.date.getDay() + 1;
        let index = row * 7 + col - fromPrevMonth;
        let day = [];
        if (index < 0) {
          index = prevMonthDetails.length - (fromPrevMonth - col);
          day = prevMonthDetails[index];
        } else if (index >= currentMonthDetails.length) {
          index = index - currentMonthDetails.length;
          day = nextMonthDetails[index];
        } else {
          day = currentMonthDetails[index];
        }
        rowValue.push({
          timestamp: day[0],
          year: day[1],
          monthIndex: day[2],
          value: day[3],
          isDayInCurrentMonth: this.isDayInCurrentMonth(day),
          isDayOfTodayDate: this.isDayOfTodayDate(day),
          isDayOfSelectedDate: this.isDayOfSelectedDate(day),
          isDayDisabled: this.isDayDisabled(day)
        });
      }
      this.days.push(rowValue);
    }
  }
  setViewDateTitle() {
    const year = this.viewDate ? this.viewDate.getFullYear() : 0;
    if (!year) {
      return;
    }
    switch (this.viewModes[this.viewModeIndex]) {
      case "day":
        this.viewDateTitle = months[this.viewDate.getMonth()] + " " + year.toString();
        break;
      case "month":
        this.viewDateTitle = year.toString();
        break;
      case "year":
        this.viewDateTitle = (year - 6).toString() + "-" + (year + 5).toString();
        break;
    }
  }
  setTime(date = null) {
    if (date) {
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    } else if (this.selectedDate) {
      this.hour = this.selectedDate.getHours();
      this.minute = this.selectedDate.getMinutes();
      this.second = this.selectedDate.getSeconds();
    } else {
      this.hour = this.today.getHours();
      this.minute = this.today.getMinutes();
      this.second = this.today.getSeconds();
    }
  }
  setFormControlValue() {
    if (!this.formControl) {
      return;
    }
    if (this.dateValueDefined()) {
      this.formControl?.setValue(import_jalali_ts.Jalali.timestamp(this.dateValue, false).format(this.dateFormat));
    }
  }
  setShowOnInputFocus() {
    const input = this.elementRef.nativeElement?.querySelector("input");
    if (!input) {
      return;
    }
    this.inputEventFocusListener = () => {
      if (!this.uiIsVisible) {
        this.setUiIsVisible(true);
      }
    };
    this.input = input;
    this.input.addEventListener("focus", this.inputEventFocusListener);
  }
  skipViewDate(skip, type) {
    if (type === 1) {
      this.viewDate.add(skip, "year");
    } else if (type === 2) {
      this.viewDate.add(skip, "month");
    }
  }
  navigate(forward) {
    let skip = 1;
    if (!forward) {
      skip = skip * -1;
    }
    switch (this.viewModes[this.viewModeIndex]) {
      case "day":
        this.skipViewDate(skip, 2);
        break;
      case "month":
        this.skipViewDate(skip, 1);
        break;
      case "year":
        this.skipViewDate(skip * 12, 1);
        break;
    }
    this.onChangeViewDate();
  }
  nextViewMode() {
    if (this.viewModes.length === 1) {
      return;
    }
    if (this.viewModes.length <= this.viewModeIndex + 1) {
      this.viewModeIndex = 0;
    } else {
      this.viewModeIndex++;
    }
    this.setViewDateTitle();
  }
  selectToday() {
    this.setToday();
    this.preventClose = true;
    this.changeSelectedDate(this.today);
  }
  yearClick(year) {
    if (year.isYearDisabled) {
      return;
    }
    this.viewDate = import_jalali_ts.Jalali.timestamp(year.timestamp, false);
    let viewModeIndex = this.viewModes.indexOf("month");
    if (viewModeIndex === -1) {
      viewModeIndex = this.viewModes.indexOf("day");
    }
    this.viewModeIndex = viewModeIndex;
    this.onChangeViewDate();
  }
  monthClick(month) {
    if (month.isMonthDisabled) {
      return;
    }
    this.viewDate = import_jalali_ts.Jalali.timestamp(month.timestamp, false);
    this.viewModeIndex = this.viewModes.indexOf("day");
    this.onChangeViewDate();
  }
  dayClick(day) {
    if (day.isDayDisabled) {
      return;
    }
    this.changeSelectedDate(import_jalali_ts.Jalali.timestamp(day.timestamp, false));
  }
  isYearOfTodayDate(year) {
    return this.today.getFullYear() === year[1];
  }
  isYearOfSelectedDate(year) {
    if (!this.selectedDate) {
      return false;
    }
    return year[1] === this.selectedDate.getFullYear();
  }
  isYearDisabled(month) {
    return !this.isDateInRange(month[0], true, false);
  }
  isMonthOfToday(month) {
    return this.today.getFullYear() === month[1] && this.today.getMonth() === month[2];
  }
  isMonthOfSelectedDate(month) {
    if (!this.selectedDate) {
      return false;
    }
    return month[1] === this.selectedDate.getFullYear() && month[2] === this.selectedDate.getMonth();
  }
  isMonthDisabled(month) {
    return !this.isDateInRange(month[0], false, true);
  }
  isDayInCurrentMonth(day) {
    return day[1] === this.viewDate.getFullYear() && day[2] === this.viewDate.getMonth();
  }
  isDayOfTodayDate(day) {
    return day[1] === this.today.getFullYear() && day[2] === this.today.getMonth() && day[3] === this.today.getDate();
  }
  isDayOfSelectedDate(day) {
    if (!this.selectedDate) {
      return false;
    }
    return day[1] === this.selectedDate.getFullYear() && day[2] === this.selectedDate.getMonth() && day[3] === this.selectedDate.getDate();
  }
  isDayDisabled(day) {
    return !this.isDateInRange(day[0], false, false);
  }
  isDateInRange(date, isYear, isMonth) {
    const result = [];
    if (this.dateMin) {
      const min = import_jalali_ts.Jalali.timestamp(this.dateMin, false);
      if (isYear) {
        min.startOf("year");
      }
      if (isMonth) {
        min.startOf("month");
      }
      result.push(min.valueOf() <= date);
    }
    if (this.dateMax) {
      const max = import_jalali_ts.Jalali.timestamp(this.dateMax, false);
      if (isYear) {
        max.startOf("year");
      }
      if (isMonth) {
        max.startOf("month");
      }
      result.push(max.valueOf() >= date);
    }
    return !(result.indexOf(false) !== -1);
  }
  changeSelectedDate(date, setInputValue = true) {
    this.selectedDate = date.clone();
    this.onChangeSelectedDate(setInputValue);
  }
  onChangeSelectedDate(setInputValue) {
    if (this.timeEnable) {
      this.selectedDate.setHours(this.hour);
      this.selectedDate.setMinutes(this.minute);
      this.selectedDate.setSeconds(this.second);
      this.selectedDate.setMilliseconds(0);
    } else {
      this.selectedDate.startOf("day");
    }
    this.dateValue = this.selectedDate.valueOf();
    if (this.uiHideAfterSelectDate && !this.preventClose) {
      this.setUiIsVisible(false);
    } else {
      this.preventClose = false;
    }
    if (this.lastEmittedDateValue === +this.selectedDate)
      return;
    if (setInputValue) {
      this.setFormControlValue();
    }
    this.setViewDate();
    this.lastEmittedDateValue = +this.selectedDate;
    this.dateOnSelect.next({
      shamsi: String(this.selectedDate.format(this.dateFormat)),
      gregorian: String(this.selectedDate.gregorian(this.dateGregorianFormat)),
      timestamp: Number(this.selectedDate.valueOf())
    });
  }
  set12Hour(value) {
    let hour = value;
    const isAM = this.hour < 12;
    const isPM = this.hour >= 12;
    if (isAM && hour === 12) {
      hour = 0;
    }
    if (isPM && hour === 12) {
      hour = 12;
    }
    if (isPM && hour < 12) {
      hour = value + 12;
    }
    this.setHour(hour);
  }
  setHour(value) {
    if (value === this.hour) {
      return;
    }
    this.hour = value;
    this.onTimeChange();
  }
  setMinute(value) {
    if (value === this.minute) {
      return;
    }
    this.minute = value;
    this.onTimeChange();
  }
  setSecond(value) {
    if (value === this.second) {
      return;
    }
    this.second = value;
    this.onTimeChange();
  }
  toggleAmPm(current) {
    if (current === "AM" && this.hour < 12 || current === "PM" && this.hour >= 12) {
      return;
    }
    if (this.hour < 12) {
      this.hour += 12;
    } else {
      this.hour -= 12;
    }
    this.onTimeChange();
  }
  onTimeChange() {
    this.preventClose = true;
    if (!this.selectedDate)
      this.selectedDate = this.today.clone();
    this.changeSelectedDate(this.selectedDate);
  }
  scrollIntoActiveTime() {
    if (!this.uiIsVisible || !this.timeEnable) {
      return;
    }
    setTimeout(() => {
      const activeHour = this.elementRef.nativeElement?.querySelector(".time-col.hour-col .dp-btn.selected");
      if (activeHour)
        activeHour.scrollIntoView({
          block: "center"
        });
      const activeMinute = this.elementRef.nativeElement?.querySelector(".time-col.minute-col .dp-btn.selected");
      if (activeMinute)
        activeMinute.scrollIntoView({
          block: "center"
        });
      const activeSecond = this.elementRef.nativeElement?.querySelector(".time-col.second-col .dp-btn.selected");
      if (activeSecond)
        activeSecond.scrollIntoView({
          block: "center"
        });
    }, 10);
  }
  onInsideClick() {
    this.wasInsideClick = true;
  }
  onOutsideClick() {
    const wasInsideClick = Boolean(this.wasInsideClick);
    this.wasInsideClick = false;
    if (wasInsideClick || !this.uiHideOnOutsideClick) {
      return;
    }
    this.setUiIsVisible(false);
  }
  valueOfDate(date) {
    if (typeof date === "string") {
      const gregorian = this.dateIsGregorian && !this.dateValueDefined();
      return gregorian ? +import_jalali_ts.Jalali.gregorian(date, false) : +import_jalali_ts.Jalali.parse(date, false);
    }
    return date;
  }
  setUiIsVisible(value) {
    this.uiIsVisible = value;
    this.uiIsVisibleChange.next(value);
    this.scrollIntoActiveTime();
  }
  static ɵfac = function NgPersianDatepickerComponent_Factory(t) {
    return new (t || _NgPersianDatepickerComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgPersianDatepickerComponent,
    selectors: [["ng-persian-datepicker"]],
    contentQueries: function NgPersianDatepickerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, FormControlDirective, 5);
        ɵɵcontentQuery(dirIndex, FormControlName, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._formControlDirective = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._formControlName = _t.first);
      }
    },
    hostBindings: function NgPersianDatepickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function NgPersianDatepickerComponent_click_HostBindingHandler() {
          return ctx.onInsideClick();
        })("click", function NgPersianDatepickerComponent_click_HostBindingHandler() {
          return ctx.onOutsideClick();
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      inputDateValue: [InputFlags.None, "dateValue", "inputDateValue"],
      dateInitValue: "dateInitValue",
      dateIsGregorian: "dateIsGregorian",
      _dateFormat: [InputFlags.None, "dateFormat", "_dateFormat"],
      dateGregorianFormat: "dateGregorianFormat",
      _dateMin: [InputFlags.None, "dateMin", "_dateMin"],
      _dateMax: [InputFlags.None, "dateMax", "_dateMax"],
      _timeEnable: [InputFlags.None, "timeEnable", "_timeEnable"],
      _timeShowSecond: [InputFlags.None, "timeShowSecond", "_timeShowSecond"],
      _timeMeridian: [InputFlags.None, "timeMeridian", "_timeMeridian"],
      _uiTheme: [InputFlags.None, "uiTheme", "_uiTheme"],
      uiIsVisible: "uiIsVisible",
      uiHideOnOutsideClick: "uiHideOnOutsideClick",
      uiHideAfterSelectDate: "uiHideAfterSelectDate",
      _uiYearView: [InputFlags.None, "uiYearView", "_uiYearView"],
      _uiMonthView: [InputFlags.None, "uiMonthView", "_uiMonthView"],
      uiInitViewMode: "uiInitViewMode",
      uiTodayBtnEnable: "uiTodayBtnEnable"
    },
    outputs: {
      dateOnInit: "dateOnInit",
      dateOnSelect: "dateOnSelect",
      uiIsVisibleChange: "uiIsVisibleChange"
    },
    ngContentSelectors: _c1,
    decls: 23,
    vars: 26,
    consts: [[1, "datepicker-content"], [1, "datepicker-outer-container"], [1, "datepicker-inner-container"], [1, "content-container", "navigation-container", "horizontal-padding"], ["themeHover", "", 1, "go-back", "dp-btn", 3, "click"], ["goBack", ""], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 240.823 240.823"], ["d", "M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179\n                   l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261\n                   C187.881,124.315,187.881,116.495,183.189,111.816z"], ["themeHover", "", 1, "switch-view", "dp-btn", 3, "click"], ["switchView", ""], ["themeHover", "", 1, "go-forward", "dp-btn", 3, "click"], ["goForward", ""], ["d", "M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n                   l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n                   C52.942,116.507,52.942,124.327,57.633,129.007z"], ["class", "years-container horizontal-padding", 4, "ngIf"], ["class", "months-container horizontal-padding", 4, "ngIf"], ["class", "days-container horizontal-padding", 4, "ngIf"], [4, "ngIf"], [1, "the-toolbox", "horizontal-padding"], [1, "years-container", "horizontal-padding"], [1, "content-container"], ["class", "year-col three-col-per-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "year-col", "three-col-per-row", 3, "click"], ["themeHover", "", 1, "dp-btn"], ["yearCol", ""], [1, "months-container", "horizontal-padding"], ["class", "month-col three-col-per-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "month-col", "three-col-per-row", 3, "click"], ["monthCol", ""], [1, "days-container", "horizontal-padding"], [1, "content-container", "week-days"], ["class", "day-col", 4, "ngFor", "ngForOf"], [1, "content-container", "month-days"], [4, "ngFor", "ngForOf"], [1, "day-col"], ["class", "day-col", 3, "click", 4, "ngFor", "ngForOf"], [1, "day-col", 3, "click"], ["dayCol", ""], [1, "time-container", "horizontal-padding", "content-container"], [1, "time-col", "hour-col"], [1, "item"], [1, "dp-btn", "disabled"], [1, "time-col", "minute-col"], ["class", "item", 4, "ngFor", "ngForOf"], ["class", "time-col second-col", 4, "ngIf"], ["class", "time-col meridian-col", 4, "ngIf"], ["themeHover", "", 1, "dp-btn", 3, "click"], ["hourCol", ""], ["hour12Col", ""], ["minuteCol", ""], [1, "time-col", "second-col"], ["secondCol", ""], [1, "time-col", "meridian-col"], ["amCol", ""], ["pmCol", ""], ["themeHover", "", 1, "the-item", "dp-btn", 3, "click"], ["today", ""]],
    template: function NgPersianDatepickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4, 5);
        ɵɵlistener("click", function NgPersianDatepickerComponent_Template_div_click_5_listener() {
          return ctx.navigate(false);
        });
        ɵɵnamespaceSVG();
        ɵɵelementStart(7, "svg", 6);
        ɵɵelement(8, "path", 7);
        ɵɵelementEnd()();
        ɵɵnamespaceHTML();
        ɵɵelementStart(9, "div", 8, 9);
        ɵɵlistener("click", function NgPersianDatepickerComponent_Template_div_click_9_listener() {
          return ctx.nextViewMode();
        });
        ɵɵelementStart(11, "span");
        ɵɵtext(12);
        ɵɵelementEnd()();
        ɵɵelementStart(13, "div", 10, 11);
        ɵɵlistener("click", function NgPersianDatepickerComponent_Template_div_click_13_listener() {
          return ctx.navigate(true);
        });
        ɵɵnamespaceSVG();
        ɵɵelementStart(15, "svg", 6);
        ɵɵelement(16, "path", 12);
        ɵɵelementEnd()()();
        ɵɵtemplate(17, NgPersianDatepickerComponent_div_17_Template, 3, 3, "div", 13)(18, NgPersianDatepickerComponent_div_18_Template, 3, 3, "div", 14)(19, NgPersianDatepickerComponent_div_19_Template, 5, 4, "div", 15)(20, NgPersianDatepickerComponent_ng_container_20_Template, 25, 26, "ng-container", 16);
        ɵɵnamespaceHTML();
        ɵɵelementStart(21, "div", 17);
        ɵɵtemplate(22, NgPersianDatepickerComponent_ng_container_22_Template, 5, 4, "ng-container", 16);
        ɵɵelementEnd()()()();
      }
      if (rf & 2) {
        const _r0 = ɵɵreference(6);
        const _r1 = ɵɵreference(10);
        const _r2 = ɵɵreference(14);
        ɵɵadvance(2);
        ɵɵstyleProp("background-color", ctx.uiTheme.background)("color", ctx.uiTheme.text)("border-color", ctx.uiTheme.border);
        ɵɵclassProp("hide", !ctx.uiIsVisible);
        ɵɵadvance(3);
        ɵɵstyleProp("background-color", _r0.classList.contains("hover") ? ctx.uiTheme.hoverBackground : null);
        ɵɵadvance(2);
        ɵɵstyleProp("fill", _r0.classList.contains("hover") ? ctx.uiTheme.hoverText : ctx.uiTheme.text);
        ɵɵadvance(2);
        ɵɵstyleProp("background-color", _r1.classList.contains("hover") ? ctx.uiTheme.hoverBackground : null)("color", _r1.classList.contains("hover") ? ctx.uiTheme.hoverText : null);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.viewDateTitle);
        ɵɵadvance();
        ɵɵstyleProp("background-color", _r2.classList.contains("hover") ? ctx.uiTheme.hoverBackground : null);
        ɵɵadvance(2);
        ɵɵstyleProp("fill", _r2.classList.contains("hover") ? ctx.uiTheme.hoverText : ctx.uiTheme.text);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.viewModes[ctx.viewModeIndex] === "year");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.viewModes[ctx.viewModeIndex] === "month");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.viewModes[ctx.viewModeIndex] === "day");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.timeEnable);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.uiTodayBtnEnable);
      }
    },
    dependencies: [NgForOf, NgIf, ThemeHoverDirective, DecimalPipe, MonthPipe],
    styles: [".datepicker-outer-container[_ngcontent-%COMP%]{direction:rtl;vertical-align:top;min-width:200px;font-size:12px;padding-top:8px;padding-bottom:8px;-webkit-user-select:none;user-select:none;text-align:center;border-radius:5px;border-width:1px;border-style:solid}.datepicker-outer-container.hide[_ngcontent-%COMP%]{display:none}.datepicker-outer-container.manual-position[_ngcontent-%COMP%]{width:100%}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .horizontal-padding[_ngcontent-%COMP%]{padding-right:5px;padding-left:5px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .no-margin-bottom[_ngcontent-%COMP%]{margin-bottom:0!important}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]{border-radius:5px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{margin-bottom:8px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .switch-view[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;height:24px;cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]{width:15%;position:relative}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px;position:absolute;top:calc(50% - 6px);right:calc(50% - 6px)}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .switch-view[_ngcontent-%COMP%]{width:66%;margin:0 2%;font-weight:700}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .switch-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:14.2857142857%;padding:1px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:24px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .week-days[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{font-weight:700}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .month-days[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .three-col-per-row[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:33.3333333333%;padding:1px;cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .three-col-per-row[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-content:center;min-height:36px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{border-top-width:1px;border-top-style:solid;border-bottom-width:1px;border-bottom-style:solid;height:82px;direction:ltr;display:flex;flex-direction:row;justify-content:center;align-content:center}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]{flex:1;height:100%;overflow:auto}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:1px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type{padding-top:3px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-of-type{padding-bottom:3px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]{min-height:24px;display:flex;flex-direction:column;justify-content:center;align-content:center}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col.meridian-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]{text-align:right}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]   .the-item[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;min-width:40px;cursor:pointer;font-weight:700;padding:3px 5px;margin-left:5px;text-align:center}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]   .the-item[_ngcontent-%COMP%]:last-child{margin-left:0}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPersianDatepickerComponent, [{
    type: Component,
    args: [{
      selector: "ng-persian-datepicker",
      template: `<div class="datepicker-content">
  <ng-content></ng-content>
  <div class="datepicker-outer-container"
       [style.background-color]="uiTheme.background"
       [style.color]="uiTheme.text"
       [style.border-color]="uiTheme.border"
       [class.hide]="!uiIsVisible">
    <div class="datepicker-inner-container">

      <!-- Start: navigation -->
      <div class="content-container navigation-container horizontal-padding">
        <div class="go-back dp-btn"
             [style.background-color]="goBack.classList.contains('hover') ? uiTheme.hoverBackground : null"
             (click)="navigate(false)" themeHover #goBack>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 240.823 240.823"
               [style.fill]="goBack.classList.contains('hover') ? uiTheme.hoverText : uiTheme.text">
            <path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
                   l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
                   C187.881,124.315,187.881,116.495,183.189,111.816z"></path>
          </svg>
        </div>
        <div class="switch-view dp-btn"
             [style.background-color]="switchView.classList.contains('hover') ? uiTheme.hoverBackground : null"
             [style.color]="switchView.classList.contains('hover') ? uiTheme.hoverText : null"
             (click)="nextViewMode()" themeHover #switchView>
          <span>{{ viewDateTitle }}</span>
        </div>
        <div class="go-forward dp-btn"
             [style.background-color]="goForward.classList.contains('hover') ? uiTheme.hoverBackground : null"
             (click)="navigate(true)" themeHover #goForward>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 240.823 240.823"
               [style.fill]="goForward.classList.contains('hover') ? uiTheme.hoverText : uiTheme.text">
            <path d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
                   l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
                   C52.942,116.507,52.942,124.327,57.633,129.007z"></path>
          </svg>
        </div>
      </div>
      <!-- End: navigation -->

      <!-- Start: year view mode -->
      <div *ngIf="viewModes[viewModeIndex] === 'year'"
           class="years-container horizontal-padding">
        <div class="content-container"
             [class.no-margin-bottom]="!timeEnable && !uiTodayBtnEnable">
          <div class="year-col three-col-per-row"
               (click)="yearClick(year)"
               *ngFor="let year of years">
            <div class="dp-btn"
                 [class.disabled]="year.isYearDisabled"
                 [class.selected]="year.isYearOfSelectedDate"
                 [class.today]="year.isYearOfTodayDate"
                 [style.background-color]="
                   (year.isYearDisabled) ?
                     uiTheme.disabledBackground :
                     (year.isYearOfSelectedDate) ?
                       uiTheme.selectedBackground :
                       (yearCol.classList.contains('hover')) ?
                         uiTheme.hoverBackground :
                         (year.isYearOfTodayDate) ?
                           uiTheme.todayBackground :
                           null
                 "
                 [style.color]="
                   (year.isYearDisabled) ?
                     uiTheme.disabledText :
                     (year.isYearOfSelectedDate) ?
                       uiTheme.selectedText :
                       (yearCol.classList.contains('hover')) ?
                         uiTheme.hoverText :
                         (year.isYearOfTodayDate) ?
                           uiTheme.todayText :
                           null
                 "
                 themeHover #yearCol>
              <span>{{ year.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End: year view mode -->

      <!-- Start: month view mode -->
      <div *ngIf="viewModes[viewModeIndex] === 'month'"
           class="months-container horizontal-padding">
        <div class="content-container"
             [class.no-margin-bottom]="!timeEnable && !uiTodayBtnEnable">
          <div class="month-col three-col-per-row"
               (click)="monthClick(month)"
               *ngFor="let month of months">
            <div class="dp-btn"
                 [class.disabled]="month.isMonthDisabled"
                 [class.selected]="month.isMonthOfSelectedDate"
                 [class.today]="month.isMonthOfTodayDate"
                 [style.background-color]="
                   (month.isMonthDisabled) ?
                     uiTheme.disabledBackground :
                     (month.isMonthOfSelectedDate) ?
                       uiTheme.selectedBackground :
                       (monthCol.classList.contains('hover')) ?
                         uiTheme.hoverBackground :
                         (month.isMonthOfTodayDate) ?
                           uiTheme.todayBackground :
                           null
                 "
                 [style.color]="
                   (month.isMonthDisabled) ?
                     uiTheme.disabledText :
                     (month.isMonthOfSelectedDate) ?
                       uiTheme.selectedText :
                       (monthCol.classList.contains('hover')) ?
                         uiTheme.hoverText :
                         (month.isMonthOfTodayDate) ?
                           uiTheme.todayText :
                           null
                 "
                 themeHover #monthCol>
              <span>{{ month.indexValue | month }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End: month view mode -->

      <!-- Start: day view mode -->
      <div *ngIf="viewModes[viewModeIndex] === 'day'"
           class="days-container horizontal-padding">
        <div class="content-container week-days">
          <div class="day-col"
               *ngFor="let weekDay of weekDays">
            <span>{{ weekDay }}</span>
          </div>
        </div>
        <div class="content-container month-days"
             [class.no-margin-bottom]="!timeEnable && !uiTodayBtnEnable">
          <ng-container *ngFor="let row of days">
            <div class="day-col"
                 (click)="dayClick(day)"
                 *ngFor="let day of row">
              <div class="dp-btn"
                   [class.disabled]="day.isDayDisabled"
                   [class.selected]="day.isDayOfSelectedDate"
                   [class.today]="day.isDayOfTodayDate"
                   [class.other-month]="!day.isDayInCurrentMonth"
                   [style.background-color]="
                     (day.isDayDisabled) ?
                       uiTheme.disabledBackground :
                       (day.isDayOfSelectedDate) ?
                         uiTheme.selectedBackground :
                         (dayCol.classList.contains('hover')) ?
                           uiTheme.hoverBackground :
                           (day.isDayOfTodayDate) ?
                             uiTheme.todayBackground :
                             (!day.isDayInCurrentMonth) ?
                               uiTheme.otherMonthBackground :
                               null
                   "
                   [style.color]="
                     (day.isDayDisabled) ?
                       uiTheme.disabledText :
                       (day.isDayOfSelectedDate) ?
                         uiTheme.selectedText :
                         (dayCol.classList.contains('hover')) ?
                           uiTheme.hoverText :
                           (day.isDayOfTodayDate) ?
                             uiTheme.todayText :
                             (!day.isDayInCurrentMonth) ?
                               uiTheme.otherMonthText :
                               null
                   "
                   themeHover #dayCol>
                <span>{{ day.value }}</span>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
      <!-- End: day view mode -->

      <!-- Start: time picker -->
      <ng-container *ngIf="timeEnable">
        <div class="time-container horizontal-padding content-container"
             [style.border-top-color]="uiTheme.timeBorder"
             [style.border-bottom-color]="uiTheme.timeBorder">
          <div class="time-col hour-col">
            <div class="item">
              <div class="dp-btn disabled"
                   [style.background-color]="uiTheme.disabledBackground"
                   [style.color]="uiTheme.disabledText">
                <span>--</span>
              </div>
            </div>
            <ng-container *ngIf="!timeMeridian">
              <div class="item"
                   *ngFor="let _ of [].constructor(24); let i = index">
                <div class="dp-btn"
                     (click)="setHour(i)"
                     [class.selected]="hour === i"
                     [style.background-color]="
                       (hour === i) ?
                         uiTheme.selectedBackground :
                         (hourCol.classList.contains('hover')) ?
                           uiTheme.hoverBackground :
                           null
                     "
                     [style.color]="
                       (hour === i) ?
                         uiTheme.selectedText :
                         (hourCol.classList.contains('hover')) ?
                           uiTheme.hoverText :
                           null
                     " themeHover #hourCol>
                  <span>{{ i | number: '2.0' }}</span>
                </div>
              </div>
            </ng-container>
            <ng-container *ngIf="timeMeridian">
              <div class="item"
                   *ngFor="let _ of [].constructor(12); let i = index">
                <div class="dp-btn"
                     (click)="set12Hour(i + 1)"
                     [class.selected]="
                       (hour === 0 && (i + 1) === 12) ||
                       (hour >= 1 && hour <= 12 && hour === (i + 1)) ||
                       (hour > 12 && hour === ((i + 1) + 12))
                     "
                     [style.background-color]="
                       (
                         (hour === 0 && (i + 1) === 12) ||
                         (hour >= 1 && hour <= 12 && hour === (i + 1)) ||
                         (hour > 12 && hour === ((i + 1) + 12))
                       ) ?
                         uiTheme.selectedBackground :
                         (hour12Col.classList.contains('hover')) ?
                           uiTheme.hoverBackground :
                           null
                     "
                     [style.color]="
                       (
                         (hour === 0 && (i + 1) === 12) ||
                         (hour >= 1 && hour <= 12 && hour === (i + 1)) ||
                         (hour > 12 && hour === ((i + 1) + 12))
                       ) ?
                         uiTheme.selectedText :
                         (hour12Col.classList.contains('hover')) ?
                           uiTheme.hoverText :
                           null
                     " themeHover #hour12Col>
                  <span>{{ (i + 1) | number: '2.0' }}</span>
                </div>
              </div>
            </ng-container>
            <div class="item">
              <div class="dp-btn disabled"
                   [style.background-color]="uiTheme.disabledBackground"
                   [style.color]="uiTheme.disabledText">
                <span>--</span>
              </div>
            </div>
          </div>
          <div class="time-col minute-col">
            <div class="item">
              <div class="dp-btn disabled"
                   [style.background-color]="uiTheme.disabledBackground"
                   [style.color]="uiTheme.disabledText">
                <span>--</span>
              </div>
            </div>
            <div class="item"
                 *ngFor="let _ of [].constructor(60); let i = index">
              <div class="dp-btn"
                   (click)="setMinute(i)"
                   [class.selected]="minute === i"
                   [style.background-color]="
                     (minute === i) ?
                       uiTheme.selectedBackground :
                       (minuteCol.classList.contains('hover')) ?
                         uiTheme.hoverBackground :
                         null
                   "
                   [style.color]="
                     (minute === i) ?
                       uiTheme.selectedText :
                       (minuteCol.classList.contains('hover')) ?
                         uiTheme.hoverText :
                         null
                   " themeHover #minuteCol>
                <span>{{ i | number: '2.0' }}</span>
              </div>
            </div>
            <div class="item">
              <div class="dp-btn disabled"
                   [style.background-color]="uiTheme.disabledBackground"
                   [style.color]="uiTheme.disabledText">
                <span>--</span>
              </div>
            </div>
          </div>
          <div *ngIf="timeShowSecond"
               class="time-col second-col">
            <div class="item">
              <div class="dp-btn disabled"
                   [style.background-color]="uiTheme.disabledBackground"
                   [style.color]="uiTheme.disabledText">
                <span>--</span>
              </div>
            </div>
            <div class="item"
                 *ngFor="let _ of [].constructor(60); let i = index">
              <div class="dp-btn"
                   (click)="setSecond(i)"
                   [class.selected]="second === i"
                   [style.background-color]="
                     (second === i) ?
                       uiTheme.selectedBackground :
                       (secondCol.classList.contains('hover')) ?
                         uiTheme.hoverBackground :
                         null
                   "
                   [style.color]="
                     (second === i) ?
                       uiTheme.selectedText :
                       (secondCol.classList.contains('hover')) ?
                         uiTheme.hoverText :
                         null
                   " themeHover #secondCol>
                <span>{{ i | number: '2.0' }}</span>
              </div>
            </div>
            <div class="item">
              <div class="dp-btn disabled"
                   [style.background-color]="uiTheme.disabledBackground"
                   [style.color]="uiTheme.disabledText">
                <span>--</span>
              </div>
            </div>
          </div>
          <div *ngIf="timeMeridian"
               class="time-col meridian-col">
            <div class="item">
              <div class="dp-btn"
                   (click)="toggleAmPm('AM')"
                   [class.selected]="hour < 12"
                   [style.background-color]="
                     (hour < 12) ?
                       uiTheme.selectedBackground :
                       (amCol.classList.contains('hover')) ?
                         uiTheme.hoverBackground :
                         null
                   "
                   [style.color]="
                     (hour < 12) ?
                       uiTheme.selectedText :
                       (amCol.classList.contains('hover')) ?
                         uiTheme.hoverText :
                         null
                   " themeHover #amCol>
                <span>AM</span>
              </div>
            </div>
            <div class="item">
              <div class="dp-btn"
                   (click)="toggleAmPm('PM')"
                   [class.selected]="hour >= 12"
                   [style.background-color]="
                     (hour >= 12) ?
                       uiTheme.selectedBackground :
                       (pmCol.classList.contains('hover')) ?
                         uiTheme.hoverBackground :
                         null
                   "
                   [style.color]="
                     (hour >= 12) ?
                       uiTheme.selectedText :
                       (pmCol.classList.contains('hover')) ?
                         uiTheme.hoverText :
                         null
                   " themeHover #pmCol>
                <span>PM</span>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
      <!-- End: time picker -->

      <!-- Start: toolbox -->
      <div class="the-toolbox horizontal-padding">
        <ng-container *ngIf="uiTodayBtnEnable">
          <div class="the-item dp-btn"
               [style.background-color]="today.classList.contains('hover') ? uiTheme.hoverBackground : null"
               [style.color]="today.classList.contains('hover') ? uiTheme.hoverText : null"
               (click)="selectToday()" themeHover #today>
            <span>امروز</span>
          </div>
        </ng-container>
      </div>
      <!-- End: toolbox -->

    </div>
  </div>
</div>
`,
      styles: [".datepicker-outer-container{direction:rtl;vertical-align:top;min-width:200px;font-size:12px;padding-top:8px;padding-bottom:8px;-webkit-user-select:none;user-select:none;text-align:center;border-radius:5px;border-width:1px;border-style:solid}.datepicker-outer-container.hide{display:none}.datepicker-outer-container.manual-position{width:100%}.datepicker-outer-container .datepicker-inner-container .horizontal-padding{padding-right:5px;padding-left:5px}.datepicker-outer-container .datepicker-inner-container .no-margin-bottom{margin-bottom:0!important}.datepicker-outer-container .datepicker-inner-container .dp-btn{border-radius:5px}.datepicker-outer-container .datepicker-inner-container .content-container{margin-bottom:8px}.datepicker-outer-container .datepicker-inner-container .navigation-container .go-forward,.datepicker-outer-container .datepicker-inner-container .navigation-container .switch-view,.datepicker-outer-container .datepicker-inner-container .navigation-container .go-back{display:inline-block;vertical-align:top;height:24px;cursor:pointer}.datepicker-outer-container .datepicker-inner-container .navigation-container .go-forward,.datepicker-outer-container .datepicker-inner-container .navigation-container .go-back{width:15%;position:relative}.datepicker-outer-container .datepicker-inner-container .navigation-container .go-forward svg,.datepicker-outer-container .datepicker-inner-container .navigation-container .go-back svg{width:12px;height:12px;position:absolute;top:calc(50% - 6px);right:calc(50% - 6px)}.datepicker-outer-container .datepicker-inner-container .navigation-container .switch-view{width:66%;margin:0 2%;font-weight:700}.datepicker-outer-container .datepicker-inner-container .navigation-container .switch-view span{vertical-align:sub}.datepicker-outer-container .datepicker-inner-container .days-container .day-col{display:inline-block;vertical-align:top;width:14.2857142857%;padding:1px}.datepicker-outer-container .datepicker-inner-container .days-container .day-col .dp-btn{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:24px}.datepicker-outer-container .datepicker-inner-container .days-container .week-days .day-col{font-weight:700}.datepicker-outer-container .datepicker-inner-container .days-container .month-days .day-col{cursor:pointer}.datepicker-outer-container .datepicker-inner-container .three-col-per-row{display:inline-block;vertical-align:top;width:33.3333333333%;padding:1px;cursor:pointer}.datepicker-outer-container .datepicker-inner-container .three-col-per-row .dp-btn{display:flex;flex-direction:column;justify-content:center;align-content:center;min-height:36px}.datepicker-outer-container .datepicker-inner-container .time-container{border-top-width:1px;border-top-style:solid;border-bottom-width:1px;border-bottom-style:solid;height:82px;direction:ltr;display:flex;flex-direction:row;justify-content:center;align-content:center}.datepicker-outer-container .datepicker-inner-container .time-container .time-col{flex:1;height:100%;overflow:auto}.datepicker-outer-container .datepicker-inner-container .time-container .time-col .item{padding:1px}.datepicker-outer-container .datepicker-inner-container .time-container .time-col .item:first-of-type{padding-top:3px}.datepicker-outer-container .datepicker-inner-container .time-container .time-col .item:last-of-type{padding-bottom:3px}.datepicker-outer-container .datepicker-inner-container .time-container .time-col .item .dp-btn{min-height:24px;display:flex;flex-direction:column;justify-content:center;align-content:center}.datepicker-outer-container .datepicker-inner-container .time-container .time-col.meridian-col{display:flex;flex-direction:column;justify-content:center}.datepicker-outer-container .datepicker-inner-container .the-toolbox{text-align:right}.datepicker-outer-container .datepicker-inner-container .the-toolbox .the-item{display:inline-block;vertical-align:top;min-width:40px;cursor:pointer;font-weight:700;padding:3px 5px;margin-left:5px;text-align:center}.datepicker-outer-container .datepicker-inner-container .the-toolbox .the-item:last-child{margin-left:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    _formControlDirective: [{
      type: ContentChild,
      args: [FormControlDirective, {
        static: false
      }]
    }],
    _formControlName: [{
      type: ContentChild,
      args: [FormControlName, {
        static: false
      }]
    }],
    inputDateValue: [{
      type: Input,
      args: ["dateValue"]
    }],
    dateInitValue: [{
      type: Input
    }],
    dateIsGregorian: [{
      type: Input
    }],
    _dateFormat: [{
      type: Input,
      args: ["dateFormat"]
    }],
    dateGregorianFormat: [{
      type: Input
    }],
    _dateMin: [{
      type: Input,
      args: ["dateMin"]
    }],
    _dateMax: [{
      type: Input,
      args: ["dateMax"]
    }],
    _timeEnable: [{
      type: Input,
      args: ["timeEnable"]
    }],
    _timeShowSecond: [{
      type: Input,
      args: ["timeShowSecond"]
    }],
    _timeMeridian: [{
      type: Input,
      args: ["timeMeridian"]
    }],
    _uiTheme: [{
      type: Input,
      args: ["uiTheme"]
    }],
    uiIsVisible: [{
      type: Input
    }],
    uiHideOnOutsideClick: [{
      type: Input
    }],
    uiHideAfterSelectDate: [{
      type: Input
    }],
    _uiYearView: [{
      type: Input,
      args: ["uiYearView"]
    }],
    _uiMonthView: [{
      type: Input,
      args: ["uiMonthView"]
    }],
    uiInitViewMode: [{
      type: Input
    }],
    uiTodayBtnEnable: [{
      type: Input
    }],
    dateOnInit: [{
      type: Output
    }],
    dateOnSelect: [{
      type: Output
    }],
    uiIsVisibleChange: [{
      type: Output
    }],
    onInsideClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onOutsideClick: [{
      type: HostListener,
      args: ["document:click"]
    }]
  });
})();
var NgPersianDatepickerModule = class _NgPersianDatepickerModule {
  static ɵfac = function NgPersianDatepickerModule_Factory(t) {
    return new (t || _NgPersianDatepickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgPersianDatepickerModule,
    declarations: [NgPersianDatepickerComponent, ThemeHoverDirective, MonthPipe],
    imports: [CommonModule],
    exports: [NgPersianDatepickerComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPersianDatepickerModule, [{
    type: NgModule,
    args: [{
      declarations: [NgPersianDatepickerComponent, ThemeHoverDirective, MonthPipe],
      imports: [CommonModule],
      exports: [NgPersianDatepickerComponent]
    }]
  }], null, null);
})();
export {
  NgPersianDatepickerComponent,
  NgPersianDatepickerModule,
  defaultTheme
};
//# sourceMappingURL=ng-persian-datepicker.js.map
