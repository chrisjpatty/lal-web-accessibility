import React from "react";
import styled from "@emotion/styled";

export default () => (
  <Page>
    <Wrapper>
      <Header>Header</Header>
      <BodyWrapper>
        <Sidebar>
          Sidebar
        </Sidebar>
        <Body>
          <Section>Section 1</Section>
          <Section>Section 2</Section>
        </Body>
      </BodyWrapper>
      <Footer>Footer</Footer>
    </Wrapper>
  </Page>
);

const Page = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled('div')`
  width: 90%;
  height: 70%;
  background: rgba(255,255,255,.2);
  border-radius: .6vw;
  overflow: hidden;
`

const Header = styled('div')`
  background: rgb(51, 59, 64);
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled('div')`
  background: rgb(51, 59, 64);
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BodyWrapper = styled('div')`
  display: flex;
  height: 80%;
  flex: 1 0 auto;
`

const Body = styled('div')`
  background: rgb(145, 165, 177);
  height: 100%;
  flex: 1 1 auto;
`

const Section = styled('div')`
  background: rgb(101, 115, 124);
  margin: 1vw;
  border-radius: .5vw;
`

const Sidebar = styled('div')`
  background: rgb(58, 68, 74);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`
