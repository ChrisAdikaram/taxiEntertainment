import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";
import FooterSocialIcon from "./FooterSocialIcon";

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;
  return (
    <ul className={className}>
      {facebook && (
        <FooterSocialIcon IconType={IoLogoFacebook} href={facebook} />
      )}
      {instagram && (
        <FooterSocialIcon IconType={IoLogoInstagram} href={instagram} />
      )}
      {youtube && <FooterSocialIcon IconType={IoLogoYoutube} href={youtube} />}
      {twitter && <FooterSocialIcon IconType={IoLogoTwitter} href={twitter} />}
      {tiktok && <FooterSocialIcon IconType={IoLogoTiktok} href={tiktok} />}

      {whatsapp && (
        <FooterSocialIcon IconType={IoLogoWhatsapp} href={whatsapp} />
      )}
      {snapchat && (
        <FooterSocialIcon IconType={IoLogoSnapchat} href={snapchat} />
      )}
      {vimeo && <FooterSocialIcon IconType={IoLogoVimeo} href={vimeo} />}

      {email && (
        <li className="inline-block">
          <a
            className="block w-12 h-12 text-center text-white transition bg-transparent border rounded-lg border-light hover:border-primary hover:bg-primary"
            aria-label="email"
            href={`mailto:${email}`}
          >
            <IoMail />
          </a>
        </li>
      )}
      {phone && (
        <li className="inline-block">
          <a
            className="block w-12 h-12 text-center text-white transition bg-transparent border rounded-lg border-light hover:border-primary hover:bg-primary"
            aria-label="telephone"
            href={`tel:${phone}`}
          >
            <IoCall />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
