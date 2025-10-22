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
} from "@tabler/icons-react";
import { Button } from "../button";
import { Input } from "../input";
import { cn } from "../../lib/utils";

const Footer: FC<FooterProps> = ({
  cities,
  address,
  copyright,
  cguLink,
  cguText,
  instagramLink,
  linkedinLink,
  githubLink,
  facebookLink,
  youtubeLink,
  centerButtons,
  badges,
  socialNetworksText = "Suivez-nous",
  centerButtonsText = "Actions",
  moreActions,
  newsletterText = "Newsletter",
  newsletterPlaceholder = "Votre email...",
  newsletterButtonText = "S'abonner",
  onNewsletterSubmit,
  newsletterLoading: externalLoading,
  onNewsletterSubmitAsync,
  newsletterSuccessMessage = "Newsletter envoyée avec succès !",
  newsletterErrorMessage = "Erreur lors de l'envoi de la newsletter",
  newsletterMessageDuration = 3000,
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const isLoading = externalLoading || internalLoading;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, newsletterMessageDuration);
      return () => clearTimeout(timer);
    }
  }, [message, newsletterMessageDuration]);
  const socialLinks = [
    { href: instagramLink, icon: IconBrandInstagram, label: "Instagram" },
    { href: linkedinLink, icon: IconBrandLinkedin, label: "LinkedIn" },
    { href: githubLink, icon: IconBrandGithub, label: "GitHub" },
    { href: facebookLink, icon: IconBrandFacebook, label: "Facebook" },
    { href: youtubeLink, icon: IconBrandYoutube, label: "YouTube" },
  ].filter((link) => link.href);

  return (
    <footer
      className="bg-background px-0 py-8 sm:px-4 md:px-6 lg:px-8  dark:text-white"
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-4 w-full min-w-0 overflow-hidden">
            <h2 className="text-lg font-semibold">{cities.join(" - ")}</h2>

            <div className="space-y-2 text-sm">
              {address.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <p className="text-sm">{copyright}</p>

            {cguLink && cguText && (
              <Button
                variant="socraft-link"
                asChild
                className="h-auto p-0 text-sm hover:brightness-110 transition-all duration-200"
                style={{
                  color: "var(--yellow)",
                }}
              >
                <a href={cguLink}>{cguText}</a>
              </Button>
            )}

            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {badges.map((badge, index) => (
                  <div key={index}>{badge}</div>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: Center Buttons */}
          {centerButtons && centerButtons.length > 0 ? (
            <div className="space-y-4 w-full min-w-0 overflow-hidden flex flex-col items-center">
              <h2 className="text-lg font-semibold text-center">
                {centerButtonsText}
              </h2>

              <div className="flex flex-col space-y-2 items-center w-full">
                {centerButtons.map((button, index) => (
                  <div key={index}>
                    {isValidElement(button)
                      ? cloneElement(button, {
                          ...button.props,
                          className: cn(
                            button.props.className,
                            "text-black hover:brightness-110 transition-all duration-200",
                          ),
                          style: {
                            backgroundColor: "var(--yellow)",
                            borderColor: "var(--yellow)",
                            ...(button.props.style || {}),
                          },
                        })
                      : button}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full min-w-0"></div>
          )}

          {/* Section 3: Social Networks */}
          <div className="space-y-4 w-full min-w-0 overflow-hidden text-right">
            <h2 className="text-lg font-semibold">{socialNetworksText}</h2>

            <div className="flex justify-end gap-1">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="socraft-icon"
                  size="icon"
                  asChild
                  className="h-9 w-9 p-1.5"
                >
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {moreActions && <div className="pt-4">{moreActions}</div>}

            <div className="space-y-4 mt-8 text-right">
              <h2 className="text-lg font-semibold">{newsletterText}</h2>

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
                        text: newsletterSuccessMessage,
                        type: "success",
                      });
                    } catch (error) {
                      console.error("Newsletter submission error:", error);
                      setMessage({
                        text: newsletterErrorMessage,
                        type: "error",
                      });
                    } finally {
                      setInternalLoading(false);
                    }
                  } else {
                    onNewsletterSubmit?.(email);
                  }
                }}
                className="space-y-3"
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
                  placeholder={newsletterPlaceholder}
                  required
                />
                <Button
                  type="submit"
                  variant="yellow"
                  disabled={isLoading}
                  loading={isLoading}
                  className={cn(
                    "w-full",
                    "hover:brightness-110 transition-all duration-200",
                  )}
                >
                  {newsletterButtonText}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
