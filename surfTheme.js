export function makeTheme(prismTheme, override = {}) {
  return {
    codeSurfer: {
      styles: prismTheme.styles,
      title: {
        background: prismTheme.plain.backgroundColor
      },
      subtitle: {
        color: "#d6deeb",
        background: "rgba(10,10,10,0.9)"
      },
      pre: {
        color: prismTheme.plain.color,
        background: prismTheme.plain.backgroundColor
      },
      code: {
        color: prismTheme.plain.color,
        background: prismTheme.plain.backgroundColor
      },
      ...override
    }
  };
}

export function addColors(theme, prismTheme) {
  const stringStyle = theme.codeSurfer.styles.find(s =>
    s.types.includes("string")
  );

  return {
    colors: {
      text: prismTheme.plain.color,
      background: prismTheme.plain.backgroundColor,
      link: stringStyle && stringStyle.style.color,
      pre: prismTheme.plain.color,
      code: prismTheme.plain.color,
      preBackground: prismTheme.plain.backgroundColor
    },
    ...theme
  };
}

const prismTheme = {
  plain: {
    backgroundColor: "#282C34",
    color: "rgb(166, 178, 182)"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(92, 99, 112)",
        fontStyle: "italic"
      }
    },
    {
      types: ["keyword", "selector", "changed"],
      style: {
        color: "rgb(97, 175, 239)"
      }
    },
    {
      types: ["operator", "punctuation"],
      style: {
        color: "rgb(204, 211, 223)"
      }
    },
    {
      types: ["constant", "number", "builtin"],
      style: {
        color: "rgb(209, 154, 102)"
      }
    },
    {
      types: ["char", "symbol"],
      style: {
        color: "rgb(86, 182, 194)"
      }
    },
    {
      types: ["variable", "tag", "deleted"],
      style: {
        color: "rgb(224, 108, 117)"
      }
    },
    {
      types: ["string", "inserted", "attr-value"],
      style: {
        color: "rgb(229, 192, 123)"
      }
    },
    {
      types: ["function"],
      style: {
        color: "rgb(133, 200, 96)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(229, 192, 123)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(133, 200, 96)"
      }
    }
  ]
};

const theme = makeTheme(prismTheme);
const fullTheme = addColors(theme, prismTheme);
export default theme;
