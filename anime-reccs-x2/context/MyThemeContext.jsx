// theme options with specific colour values
import React, { useContext} from "react";

export const themes = {
light: {
foreground: "#333333",
background: "#fce1f9"
},
dark: {
foreground: "#ffffff",
background: "#222222"
}
};
// named export for this context (to be used via useContext elsewhere)
export const MyThemeContext = React.createContext(
{theme: themes.light,
    setTheme: () => {},
});

export default function MyThemeProvider(props) {
const [theme, setTheme] = React.useState(themes.light);
// helper boolean to tell if we’re currently in dark mode
const darkMode = theme.background === themes.dark.background;


  
 return (
    <MyThemeContext.Provider value={{ theme, setTheme, darkMode }}>
      <div
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        {props.children}
      </div>
    </MyThemeContext.Provider>
  );
}