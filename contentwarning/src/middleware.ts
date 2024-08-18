import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18-config";
import { matchLocale } from "locale-matcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders = Object.fromEntries(request.headers.entries());
  const localesArray: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(localesArray);
  const locale = matchLocale(languages, localesArray);
  return typeof locale === 'string' ? locale : undefined;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip locale detection for paths starting with /font/ or /images/
  if (pathname.startsWith('/font/') || pathname.startsWith('/images/')) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const locale = getLocale(request) || i18n.defaultLocale;

  // Store locale in the request headers
  request.headers.set('x-locale', locale);

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
    );
  }

  // Return the response so that the locale is applied and used by other parts of the app
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};