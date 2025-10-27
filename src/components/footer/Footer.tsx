import React, {
  FC,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
} from "react";
import { FooterProps } from "./Footer.types";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandGithub,
  IconSend,
} from "@tabler/icons-react";
import { Button } from "../button";
import { Input } from "../input";
import { cn } from "../../lib/utils";
import { Spinner } from "../ui/spinner";
import { Separator } from "../ui/separator";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";

const Footer: FC<FooterProps> = ({
  cities,
  address,
  copyright,
  instagramLink,
  linkedinLink,
  githubLink,
  facebookLink,
  youtubeLink,
  locale: localeProp,
  centerButtons,
  badges,
  usefulLinks,
  usefulLinksTitle,
  onNewsletterSubmit,
  onNewsletterSubmitAsync,
  newsletterLoading: externalLoading,
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const isLoading = externalLoading || internalLoading;
  const socialsIconSize = 35;

  const detectedLang = (() => {
    if (typeof document !== "undefined" && document.documentElement?.lang) {
      return document.documentElement.lang.toLowerCase();
    }
    if (typeof navigator !== "undefined" && navigator.language) {
      return navigator.language.toLowerCase();
    }
    return "fr";
  })();

  const locale = (localeProp ??
    (detectedLang.startsWith("fr") ? "fr" : "en")) as "fr" | "en";

  const i18n = {
    fr: {
      newsletterTitle: "Newsletter",
      newsletterPlaceholder: "Votre email...",
      newsletterButtonText: "S'abonner",
      newsletterSuccessMessage: "Newsletter envoyée avec succès !",
      newsletterErrorMessage: "Erreur lors de l'envoi de la newsletter",
    },
    en: {
      newsletterTitle: "Newsletter",
      newsletterPlaceholder: "Your email...",
      newsletterButtonText: "Subscribe",
      newsletterSuccessMessage: "Newsletter successfully sent!",
      newsletterErrorMessage: "Error sending newsletter",
    },
  } as const;

  const newsletterPlaceholderResolved = i18n[locale].newsletterPlaceholder;
  const newsletterButtonTextResolved = i18n[locale].newsletterButtonText;
  const newsletterSuccessMessageResolved =
    i18n[locale].newsletterSuccessMessage;
  const newsletterErrorMessageResolved = i18n[locale].newsletterErrorMessage;
  const newsletterTitleResolved = i18n[locale].newsletterTitle;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  const socialLinks = [
    { href: instagramLink, icon: IconBrandInstagram, label: "Instagram" },
    { href: linkedinLink, icon: IconBrandLinkedin, label: "LinkedIn" },
    { href: githubLink, icon: IconBrandGithub, label: "GitHub" },
    { href: facebookLink, icon: IconBrandFacebook, label: "Facebook" },
    { href: youtubeLink, icon: IconBrandYoutube, label: "YouTube" },
  ].filter((link) => link.href);

  const actions = centerButtons ?? [];
  const primaryAction = actions.length > 0 ? actions[0] : null;
  const showUsefulLinks = usefulLinks && usefulLinks.length > 0;
  const gridClass = showUsefulLinks
    ? "grid-cols-1 md:grid-cols-3"
    : "md:grid-cols-2";

  const renderYellowButton = (
    button: React.ReactNode,
    key: string,
    options: { fullWidth?: boolean } = {},
  ) => {
    if (!button) return null;

    const fullWidth = options.fullWidth ?? false;

    if (isValidElement(button)) {
      return cloneElement(button, {
        key,
        ...button.props,
        className: cn(
          "text-black hover:brightness-110 transition-all duration-200",
          fullWidth && "w-full",
          button.props.className,
        ),
        style: {
          backgroundColor: "var(--yellow)",
          borderColor: "var(--yellow)",
          ...(button.props.style || {}),
        },
      });
    }

    return button;
  };

  return (
    <footer
      className="bg-background px-0 py-8 sm:px-4 md:px-6 lg:px-8  dark:text-white bottom-0 w-full"
      {...props}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold">{cities.join(" • ")}</h2>
            {socialLinks.length > 0 && (
              <div className="flex flex-col items-start gap-4 md:gap-5 text-sm text-muted-foreground md:items-end">
                <div className="w-full md:w-auto flex items-center gap-1 md:gap-2 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal md:flex-wrap">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <Button
                      key={label}
                      variant="socraft-icon"
                      size="icon"
                      asChild
                      className="shrink-0 p-1"
                      style={{
                        width: `${socialsIconSize}px`,
                        height: `${socialsIconSize}px`,
                      }}
                    >
                      <a
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          className="hover:drop-shadow-[0_0_8px_#fbbb10] transition-all duration-200"
                          style={{
                            width: `${socialsIconSize * 0.8}px`,
                            height: `${socialsIconSize * 0.8}px`,
                          }}
                        />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Separator />

          <div className={cn("grid gap-10", gridClass)}>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {locale === "fr" ? "Nous contacter" : "Contact us"}
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {address.split("\n").map((line, index) => (
                  <p key={index} className="m-0">
                    {line}
                  </p>
                ))}
              </div>
              {primaryAction && (
                <div className="pt-2">
                  {renderYellowButton(primaryAction, "footer-primary-action", {
                    fullWidth: true,
                  })}
                </div>
              )}
            </div>

            {showUsefulLinks && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{usefulLinksTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(usefulLinks ?? []).map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:underline">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-left">
                {newsletterTitleResolved}
              </h3>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.target as HTMLFormElement).email.value;

                  if (onNewsletterSubmitAsync) {
                    setInternalLoading(true);
                    try {
                      await onNewsletterSubmitAsync(email);
                      (e.target as HTMLFormElement).reset();
                      setMessage({
                        text: newsletterSuccessMessageResolved,
                        type: "success",
                      });
                    } catch (error) {
                      console.error("Newsletter submission error:", error);
                      setMessage({
                        text: newsletterErrorMessageResolved,
                        type: "error",
                      });
                    } finally {
                      setInternalLoading(false);
                    }
                  } else {
                    onNewsletterSubmit?.(email);
                  }
                }}
                className="space-y-3 max-w-md"
              >
                {message && (
                  <div
                    className={cn(
                      "p-3 rounded-lg text-sm font-medium text-center transition-all duration-200",
                      message.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200",
                    )}
                  >
                    {message.text}
                  </div>
                )}
                <Input
                  type="email"
                  name="email"
                  placeholder={newsletterPlaceholderResolved}
                  required
                  disabled={isLoading}
                  className="pr-2 md:pr-3"
                  endIcon={
                    <button
                      type="submit"
                      aria-label={newsletterButtonTextResolved}
                      disabled={isLoading}
                      className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-[#fbbb10] text-[#282828] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbb10] disabled:opacity-60 disabled:cursor-not-allowed dark:text-[#1f1f1f]"
                    >
                      {isLoading ? (
                        <Spinner className="h-4 w-4" />
                      ) : (
                        <IconSend className="h-4 w-4" />
                      )}
                    </button>
                  }
                />
              </form>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {badges.map((badge, index) => (
                  <div key={index}>{badge}</div>
                ))}
              </div>
            )}
            <p className="text-center">{copyright}</p>
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
              <div className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {locale === "fr"
                  ? "Développé avec passion par"
                  : "Developed with passion by"}
                <a
                  className="inline-flex items-center gap-2 text-foreground hover:drop-shadow-[0_0_8px_#fbbb10] transition-all duration-200"
                  href="https://socraft.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoDark}
                    alt="Socraft"
                    className="h-4 w-auto block dark:hidden"
                  />
                  <img
                    src={logoLight}
                    alt="Socraft"
                    className="h-4 w-auto hidden dark:block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
