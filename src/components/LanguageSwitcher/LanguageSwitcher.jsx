import { useLocation, useNavigate } from "react-router-dom";
import { useLangStore } from "../../store/language/langStore";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLangStore();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeLang = (newLang) => {
    if (newLang === lang) return;

    setLang(newLang);

    const segments = location.pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/") || `/${newLang}/`;
    navigate(newPath, { replace: true });
  };

  return (
    <div>
      <button onClick={() => handleChangeLang("en")} type="button">
        en
      </button>
      <button onClick={() => handleChangeLang("uk")} type="button">
        uk
      </button>
    </div>
  );
};

export default LanguageSwitcher;
