import { copyrightText, whatsappNumber } from "../constants/content";
import {
  _footer_copyright,
  _footer_whatsapp,
} from "../constants/sectionController";
function Footer() {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-around bg-accent text-cloud py-3 text-md bottom-0 w-full mt-5 px-3">
      {_footer_copyright && _footer_copyright && <span>{copyrightText}</span>}
      {_footer_whatsapp && (
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Whatsapp: {whatsappNumber}</span>
        </a>
      )}
    </div>
  );
}

export default Footer;
