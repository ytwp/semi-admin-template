import zh_cn from "./zh_cn";
import en_us from "./en_us";
import { merge } from "../utils/merge";
import type { LocaleType } from "./zh_cn";
export type { LocaleType, PartialLocaleType } from "./zh_cn";

const ALL_LANGS = {
  zh_cn,
  en_us,
};

export type Lang = keyof typeof ALL_LANGS;

export const AllLangs = Object.keys(ALL_LANGS) as Lang[];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  zh_cn: "简体中文",
  en_us: "English",
};

export const SERVER_LAND_MAPPER: Record<Lang, string> = {
  zh_cn: "zh_CN",
  en_us: "en_US",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en_us";

const fallbackLang = en_us;
const targetLang = ALL_LANGS[getLang()] as LocaleType;

// if target lang missing some fields, it will use fallback lang string
merge(fallbackLang, targetLang);

export default fallbackLang as LocaleType;

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    console.error('error')
  }
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }

  return DEFAULT_LANG;
}

export function getServerLang(): string {
  return SERVER_LAND_MAPPER[getLang()]
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}
