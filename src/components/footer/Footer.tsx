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
  darkMode,
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
      className={cn(
        "bg-background px-0 py-8 sm:px-4 md:px-6 lg:px-8",
        darkMode && "text-white",
      )}
      style={darkMode ? { backgroundColor: "var(--black)" } : undefined}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
          {/* Section 1: Cities and Address */}
          <div className="space-y-4 w-full min-w-0 overflow-hidden">
            <h2
              className={cn(
                "text-lg font-semibold",
                darkMode ? "text-white" : "text-foreground",
              )}
            >
              {cities.join(" - ")}
            </h2>

            <div
              className={cn(
                "space-y-2 text-sm",
                darkMode ? "text-gray-300" : "text-muted-foreground",
              )}
            >
              {address.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <p
              className={cn(
                "text-sm",
                darkMode ? "text-gray-300" : "text-muted-foreground",
              )}
            >
              {copyright}
            </p>

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
              <h2
                className={cn(
                  "text-lg font-semibold text-center",
                  darkMode ? "text-white" : "text-foreground",
                )}
              >
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
            <h2
              className={cn(
                "text-lg font-semibold",
                darkMode ? "text-white" : "text-foreground",
              )}
            >
              {socialNetworksText}
            </h2>

            <div className="flex justify-end gap-1">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="socraft-icon"
                  size="icon"
                  darkMode={darkMode}
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

            {/* Newsletter Section */}
            <div className="space-y-4 mt-8 text-right">
              <h2
                className={cn(
                  "text-lg font-semibold",
                  darkMode ? "text-white" : "text-foreground",
                )}
              >
                {newsletterText}
              </h2>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.target as HTMLFormElement).email.value;

                  if (onNewsletterSubmitAsync) {
                    setInternalLoading(true);
                    try {
                      await onNewsletterSubmitAsync(email);
                      // Reset form after successful submission
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
                      darkMode &&
                        (message.type === "success"
                          ? "bg-green-900/20 text-green-400 border-green-800/30"
                          : "bg-red-900/20 text-red-400 border-red-800/30"),
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
                  darkMode={darkMode}
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
