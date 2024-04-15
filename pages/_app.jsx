import "../styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
});

const App = ({ Component, PageProps }) => {
  return (
    <div className={inter.className}>
      <Component {...PageProps} />;
    </div>
  );
};

export default App;
