import { BrandLogo } from '@/components/ui/BrandLogo';
import { BrandWordmark } from '@/components/ui/BrandWordmark';
import { GlassThemeToggle } from '@/components/ui/GlassThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { BRAND_CONFIG } from '@/data/brand';
import { NAVIGATION_ITEMS } from '@/data/navigation';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--bs-border-subtle)] bg-[var(--bs-surface)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <BrandLogo size={32} />
              <BrandWordmark className="text-lg font-semibold text-[var(--bs-text-primary)]" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--bs-text-muted)]">
              {t.footer.tagline}
            </p>
            <p className="mt-4 inline-flex items-center rounded-full border border-[var(--bs-border-subtle)] bg-[var(--bs-surface-subtle)] px-3 py-1 text-xs font-medium text-[var(--bs-text-muted)]">
              {t.footer.nativeBadge}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-[var(--bs-text-primary)] uppercase">
              {t.footer.productColumn}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[var(--bs-text-muted)] transition-colors hover:text-[var(--bs-accent-text)]"
                  >
                    {t.nav.items[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wider text-[var(--bs-text-primary)] uppercase">
              {t.footer.preferencesColumn}
            </h3>
            <div className="mt-4 flex flex-col items-start gap-3">
              <LanguageSwitcher />
              <GlassThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--bs-border-subtle)] pt-6 text-xs text-[var(--bs-text-muted)] sm:flex-row sm:items-center">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={BRAND_CONFIG.appRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--bs-text-primary)]"
            >
              {t.footer.sourceCode}
            </a>
            <a
              href={BRAND_CONFIG.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--bs-text-primary)]"
            >
              {t.footer.releases}
            </a>
            <a
              href={BRAND_CONFIG.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--bs-text-primary)]"
            >
              {t.footer.license}
            </a>
            <a href="#faq" className="transition-colors hover:text-[var(--bs-text-primary)]">
              {t.footer.support}
            </a>
            <a href="#exports" className="transition-colors hover:text-[var(--bs-text-primary)]">
              {t.footer.privacy}
            </a>
            <a href="#downloads" className="transition-colors hover:text-[var(--bs-text-primary)]">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
