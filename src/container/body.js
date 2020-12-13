import React from "react";
import { FooterDisplayer } from ".";
import { BodyContainer } from "../component";
import { loginUrl } from "../spotify";

export default function Body() {
  return (
    <>
      <BodyContainer>
        <BodyContainer.MainTitle>
          <h1>
            Listening is <span>Everything</span>
          </h1>
        </BodyContainer.MainTitle>
        <BodyContainer.SubTitle>
          <p>Millions of songs and podcasts. No credit card needed.</p>
        </BodyContainer.SubTitle>
        <BodyContainer.SpotifyButton>
          <a href={loginUrl}>Login With Spotify</a>
        </BodyContainer.SpotifyButton>
      </BodyContainer>
      <FooterDisplayer />
    </>
  );
}
