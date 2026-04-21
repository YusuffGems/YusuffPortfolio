import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t border-border">
      <div className="container text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} YusuffGems. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
