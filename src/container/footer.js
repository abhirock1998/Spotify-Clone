import React from "react";
import { FooterViewer } from "../component";

export default function FooterSpotify() {
  return (
    <>
      <FooterViewer>
        <FooterViewer.Conent>
          <FooterViewer.FooterLinks>
            <img src="/images/logo.png" alt="loco"></img>
          </FooterViewer.FooterLinks>
        </FooterViewer.Conent>
        <FooterViewer.Conent>
          <FooterViewer.FooterLinks>
            <h5>COMPANY</h5>
            <FooterViewer.FooterOption>About</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>Jobs</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>
              For the Record
            </FooterViewer.FooterOption>
          </FooterViewer.FooterLinks>
        </FooterViewer.Conent>
        <FooterViewer.Conent>
          <FooterViewer.FooterLinks>
            <h5>COMMUNITIES</h5>
            <FooterViewer.FooterOption>For Artists</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>Developers</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>Advertising</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>Investors</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>Vendors</FooterViewer.FooterOption>
          </FooterViewer.FooterLinks>
        </FooterViewer.Conent>
        <FooterViewer.Conent>
          <FooterViewer.FooterLinks>
            <h5>USEFUL LINKS</h5>
            <FooterViewer.FooterOption>Support</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>Web Player</FooterViewer.FooterOption>
            <FooterViewer.FooterOption>
              Free Mobile App
            </FooterViewer.FooterOption>
            <FooterViewer.FooterOption>2020 Wrapped</FooterViewer.FooterOption>
          </FooterViewer.FooterLinks>
        </FooterViewer.Conent>
        <FooterViewer.Conent>
          <FooterViewer.FooterLinks>
            <FooterViewer.IconsWrapper>
              <FooterViewer.SocialIcons>
                <img src="/images/facebook.svg" alt="facebook-logo" />
              </FooterViewer.SocialIcons>
              <FooterViewer.SocialIcons>
                <img src="/images/twitter.svg" alt="twitter-logo" />
              </FooterViewer.SocialIcons>
              <FooterViewer.SocialIcons>
                <img src="/images/instagram.svg" alt="instagram-logo" />
              </FooterViewer.SocialIcons>
            </FooterViewer.IconsWrapper>
          </FooterViewer.FooterLinks>
        </FooterViewer.Conent>
      </FooterViewer>
      <FooterViewer.LegalOptions>
        <FooterViewer.BottomLinks>
          <FooterViewer.BottomLinksOption>Legal</FooterViewer.BottomLinksOption>
          <FooterViewer.BottomLinksOption>
            Privacy Center
          </FooterViewer.BottomLinksOption>
          <FooterViewer.BottomLinksOption>
            Privacy Policy
          </FooterViewer.BottomLinksOption>
          <FooterViewer.BottomLinksOption>
            Cookies
          </FooterViewer.BottomLinksOption>
          <FooterViewer.BottomLinksOption>
            About Ads
          </FooterViewer.BottomLinksOption>
        </FooterViewer.BottomLinks>
        <FooterViewer.BottomLinks>
          <FooterViewer.BottomLinksOption>
            <span>
              India
              <img src="/images/in.svg" alt="country-flag" /> <br />© 2020
              Spotify AB
            </span>
          </FooterViewer.BottomLinksOption>
        </FooterViewer.BottomLinks>
      </FooterViewer.LegalOptions>
    </>
  );
}
