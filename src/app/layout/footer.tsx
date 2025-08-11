import Image from "next/image";
import '@/app/assets/sass/components/footer.sass';

export default function Footer() {
  return (
    <footer className="footer bg-gray-100 dark:bg-black">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <div className="footer__logo__inner">
              <a href="#" aria-label="logo footer" className="footer__logo__link dark:brightness-0 dark:invert">
                <Image
                  className="footer__logo__image"
                  src="/image/logo.png"
                  alt="logo footer"
                  width={80}
                  height={23}
                />
              </a>
              <a href="#" aria-label="logo brand">
                <Image 
                  className="logo-brand" 
                  src="https://preview-kly.akamaized.net/liputan6/trustworthy.svg" 
                  width={50} 
                  height={68} 
                  alt="Trustworthy"
                />
              </a>
              <a href="#" aria-label="logo brand">
                <Image 
                  className="logo-brand" 
                  src="https://preview-kly.akamaized.net/liputan6/ifcn.png" 
                  width={50} 
                  height={68} 
                  alt="IFCN"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </a>
            </div>
          </div>
          <nav className="footer__list border-neutral-200 text-neutral-400 dark:text-white dark:border-white/20">
            <a href="#" className="footer__list__link">Redaksi</a>
            <a href="#" className="footer__list__link">Disclaimer</a>
            <a href="#" className="footer__list__link">Kode Etik</a>
            <a href="#" className="footer__list__link">Provacy Policy</a>
            <a href="#" className="footer__list__link">Pedoman Media Siber</a>
            <a href="#" className="footer__list__link">Sitemap</a>
          </nav>
          <div className="footer__bottom">
            <ul className="footer__network text-neutral-400 dark:text-white">
              <li className="footer__network__item">
                <a href="http://liputan6.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --liputan6"></i>
                  <span>Liputan6</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="http://kapanlagi.com/" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --kapanlagi"></i>
                  <span>Kapanlagi.com</span>
                </a>
              </li>
              {/* <li className="footer__network__item">
                <a href="https://www.otosia.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --otosia"></i>
                  <span>Otosia</span>
                </a>
              </li> */}
              <li className="footer__network__item">
                <a href="http://fimela.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --fimela"></i>
                  <span>Fimela</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="http://bola.net" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --bolanet"></i>
                  <span>Bola.net</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="http://brilio.net" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --brilio"></i>
                  <span>Brilio</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="http://bola.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --bolacom"></i>
                  <span>Bola.com</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="http://merdeka.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --merdeka"></i>
                  <span>Merdeka</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="https://www.dream.co.id" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --dream"></i>
                  <span>Dream.co.id</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="https://www.trstdly.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --trstdly"></i>
                  <span>Trstdly.com</span>
                </a>
              </li>
              <li className="footer__network__item">
                <a href="https://manisdansedap.com" target="_blank" className="footer__network__item__link">
                  <i className="footer__network__icon --manisdansedap"></i>
                  <span>Manisdansedap.com</span>
                </a>
              </li>
            </ul>
            <div className="footer__socmed">
              <span className="footer__socmed__title text-gray-400 dark:text-white">Connect with us</span>
              <ul className="footer__socmed__list">
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --threads"></i>
                  </a>
                </li>
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --whatsapp"></i>
                  </a>
                </li>
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --facebook"></i>
                  </a>
                </li>
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --x"></i>
                  </a>
                </li>
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --instagram"></i>
                  </a>
                </li>
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --youtube"></i>
                  </a>
                </li>
                <li className="footer__socmed__list__item">
                  <a href="#" target="_blank" className="footer__socmed__list__item__link">
                    <i className="footer__socmed__icon --tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer__copyright text-gray-400 dark:text-white dark:border-white/20">Copyright ©2024 Liputan.com KLY KapanLagi Youniverse All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
