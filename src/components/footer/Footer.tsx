import React, { FC, cloneElement, isValidElement } from "react";
import { FooterProps } from "./Footer.types";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
  ...props
}) => {
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
                variant="link"
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
                  variant="ghost"
                  size="icon"
                  asChild
                  className={cn(
                    "h-9 w-9 p-1.5 transition-all duration-200 hover:scale-110 hover:z-10",
                    darkMode ? "text-gray-300" : "text-foreground",
                  )}
                >
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        darkMode
                          ? "text-gray-300 hover:text-gray-300"
                          : "text-current",
                      )}
                    />
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
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (e.target as HTMLFormElement).email.value;
                  onNewsletterSubmit?.(email);
                }}
                className="space-y-3"
              >
                <Input
                  type="email"
                  name="email"
                  placeholder={newsletterPlaceholder}
                  required
                  className={cn(
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:outline-none",
                    darkMode
                      ? "border-gray-600 text-white placeholder:text-gray-400 focus:border-[var(--yellow)] focus-visible:border-[var(--yellow)]"
                      : "border-gray-300 focus:border-[var(--yellow)] focus-visible:border-[var(--yellow)]",
                  )}
                  style={
                    darkMode
                      ? { backgroundColor: "var(--darkGray)" }
                      : { backgroundColor: "transparent" }
                  }
                />
                <Button
                  type="submit"
                  className={cn(
                    "w-full",
                    "text-black hover:brightness-110 transition-all duration-200",
                  )}
                  style={{
                    backgroundColor: "var(--yellow)",
                    borderColor: "var(--yellow)",
                  }}
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
