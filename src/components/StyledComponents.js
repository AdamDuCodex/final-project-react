import styled from "styled-components";

const themes = {
    light: {
      bg: "#fff",
      border: "#ccc",
      buttonPrimary: {
        bg: "darkturquoise",
        text: "#000",
      },
      buttonSecondary: {
        bg: "#ddd",
        text: "#000",
      },
      shadow: "#c8c5dc",
      text: "#000",
      teal: "darkturquoise",
      tealText: "#009092",
      preview: {
        border: "#ccc",
        bg: "#eee",
        shadow: "#c8c5dc",
        placeholder: {
          bg: "#ddd",
          text: "#444",
        },
      },
      purple: "darkslateblue",
      purpleLight: "#9a94bf",
    },
    dark: {
      bg: "#242327",
      border: "#666568",
      buttonPrimary: {
        bg: "#009092",
        text: "#eee",
      },
      buttonSecondary: {
        bg: "#666",
        text: "#fff",
      },
      shadow: "#222",
      text: "#eee",
      teal: "#009092",
      tealText: "#73e4e6",
      preview: {
        border: "#5b5a5d",
        bg: "#3a393d",
        shadow: "#222",
        placeholder: {
          bg: "#504f52",
          text: "#ccc",
        },
      },
      purple: "#9853ff",
      purpleLight: "#9a94bf",
    },
  };
  
  // Global
  
  export const AppBackground = styled.div`
    ${({ theme: { theme } }) => `
      background-color: ${themes[theme].bg};
      color: ${themes[theme].text};
    `}
  `;
  
  export const Text = styled.div`
    font-size: 16px;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text}
    `}
  `;
  
  export const HeaderText = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `}
  `;
  
  export const Button = styled.button`
    border-radius: 6px;
    margin-right: 8px;
    padding: 8px;
    font-size: 16px;
    font-weight: 700;
    ${({ theme: { theme }, primary }) =>
      primary
        ? `
          border: 2px solid ${themes[theme].buttonPrimary.bg};
          background-color: ${themes[theme].buttonPrimary.bg};
          color: ${themes[theme].buttonPrimary.text};
          `
        : `
          border: 2px solid ${themes[theme].buttonSecondary.bg};
          background-color: ${themes[theme].buttonSecondary.bg};
          color: ${themes[theme].buttonSecondary.text};
          `}
  `;
  
  export const TableFilterButton = styled(Button)`
    ${({ selected, theme: { theme } }) =>
      selected
        ? `
          border: 2px solid ${themes[theme].buttonPrimary.bg};
          background-color: ${themes[theme].buttonPrimary.bg};
          color: ${themes[theme].buttonPrimary.text};
          `
        : `
          border: 2px solid ${themes[theme].buttonSecondary.bg};
          background-color: ${themes[theme].buttonSecondary.bg};
          color: ${themes[theme].buttonSecondary.text};
          `}
  `;
  
  export const Link = styled.div`
    cursor: pointer;
    font-weight: 700;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].tealText};
    `}
  `;
  
  export const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `}
  `;
  
  export const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    ${({ theme: { theme } }) => `
      border: 1px solid ${themes[theme].border};
      background-color: ${themes[theme].bg};
      color: ${themes[theme].text};
    `}
  `;
  
  // HeaderFooter
  
  export const HeaderColorBar = styled.div`
    height: 4px;
    ${({ theme: { theme } }) => `
      background-color: ${themes[theme].teal};
    `}
  `;
  
  export const HeaderLogo = styled.div`
    margin: 12px;
    padding: 10px;
    font-family: "Grandstander", cursive;
    font-size: 24px;
    font-weight: bold;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `}
  `;
  
  export const HeaderLink = styled.p`
    margin: 18px 24px;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `};
  `;
  
  export const FooterCopyright = styled.div`
    margin-top: 300px;
    padding-bottom: 24px;
    text-align: center;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `}
  `;
  
  // Home
  
  export const HomeHeroHeaderText = styled.div`
    margin: 32px;
    padding: 6px;
    font-size: 32px;
    font-weight: 700;
    ${({ theme: { theme } }) => `
      background-color: ${themes[theme].teal};
      color: ${themes[theme].text};
    `}
  `;
  
  export const HomeHeroSubheadText = styled.div`
    font-size: 24px;
    font-weight: 700;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `}
  `;
  
  // HighlightCard
  
  export const HighlightCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 15vw;
    padding: 20px;
    ${({ theme: { theme } }) => `
      box-shadow: 0px 4px 8px ${themes[theme].shadow};
      border: 1px solid ${themes[theme].purpleLight};
      background-color: ${themes[theme].bg};
    `}
  `;
  
  export const HighlightCardIcon = styled.div`
    ${({ theme: { theme } }) => `
      color: ${themes[theme].purple};
    `}
  `;
  
  // Modal
  
  export const ModalTitleBar = styled.div`
    padding: 16px;
    border-bottom: 4px solid darkturquoise;
    display: flex;
    justify-content: space-between;
  `;
  
  export const ModalTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `};
  `;
  
  export const ModalCloseButtonWrapper = styled.div`
    padding: 4px;
    cursor: pointer;
    ${({ theme: { theme } }) => `
      color: ${themes[theme].text};
    `};
  `;
  
  export const ModalTableRow = styled.div`
    padding: 16px;
    font-size: 16px;
    cursor: pointer;
    ${({ theme: { theme } }) => `
      border-bottom: 1px solid ${themes[theme].border};
      color: ${themes[theme].text};
    `}
  `;
  
  // Card Preview
  
  export const CardPreviewWrapper = styled.div`
    margin: 32px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    ${({ theme: { theme } }) => `
      box-shadow: 0px 2px 4px ${themes[theme].preview.shadow};
      border: 1px solid ${themes[theme].preview.border};
      background-color: ${themes[theme].preview.bg};
    `};
  `;
  
  export const CardPreviewText = styled.div`
    margin: 48px 0px;
    padding: 8px 0px;
    font-size: 24px;
    font-weight: 700;
  `;
  
  export const CardPreviewPlaceholderText = styled(CardPreviewText)`
    border-radius: 8px;
    padding: 8px;
    ${({ theme: { theme } }) => `
      background-color: ${themes[theme].preview.placeholder.bg};
      color: ${themes[theme].preview.placeholder.text};
    `};
  `;