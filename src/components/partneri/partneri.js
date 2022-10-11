import React from 'react';
import './partneri.css';
import Partner from './partner';
// import "./Partneri.scss";
// import Levi9 from '../../assets/Images/Partneri/Partneri2022/levi9manji.png';
// import Levi9 from '../../assets/Images/Partneri/Partneri2022/Logo Levi9 -01 (1).png';
// import Catenamedia from '../../assets/Images/Partneri/catenamedia.png';
// import Fon from '../../assets/Images/Partneri/fon.png';
// import Guarana from '../../assets/Images/Partneri/guarana.png';
// import Prime from '../../assets/Images/Partneri/prime-software.png';
// import Raiffeisen from '../../assets/Images/Partneri/rafaisen.png';
import './slick/slick.css';
import './slick/slick-theme.css';
import PartneriSlider from './partneri_slider';
// import Kocka1 from '../../assets/Images/Kocka1.png';
// import Kocka2 from '../../assets/Images/Kocka2.png';
// import Kocka3 from '../../assets/Images/Kocka3.png';
// import Digitec from '../../assets/Images/Partneri/Digitec stamparija-1.png';
// import DevIt from '../../assets/Images/Partneri/devIT_logo.png';
// import Mainstream from '../../assets/Images/Partneri/logo1.png';
// import BalkanFun from '../../assets/Images/Partneri/Robni/BF LOGO png.png';
// import Yolo from '../../assets/Images/Partneri/Robni/YoloBook_Vektor_Pink_print.png';
// import Enigma from '../../assets/Images/Partneri/Robni/enigma games logo claim.jpg';
// import NMuzej from '../../assets/Images/Partneri/nm_logo_pozitiv_srb.png';
// import NTesla from '../../assets/Images/Partneri/logotip_mnt sve varijacije-08.png';
// import Portal from '../../assets/Images/Partneri/Portal Logo RGB-3.jpg';
// import BHB from '../../assets/Images/Partneri/Robni/p1ftn8svu84mr1m0u8cgdp91uem4_page_01.png';
// import ER from '../../assets/Images/Partneri/Robni/ER-logo-black.png';
// import Zabac from '../../assets/Images/Partneri/Robni/Zabac Logo 1a.png';
// import Predator from '../../assets/Images/Partneri/Robni/Predator-logotip-za-koriscenje-na-racunaru-i-internetu-na-crnoj-pozadini.jpg';
// import Aegee from '../../assets/Images/Partneri/Medijski/AEGEE NIS.png';
// import Brainz from '../../assets/Images/Partneri/Medijski/Brainz TV.PNG';
// import Best from '../../assets/Images/Partneri/Medijski/BEST Nis logo.png';
// import Transfer from '../../assets/Images/Partneri/Medijski/centar za transfer tehn 2.jpg';
// import Cysecor from '../../assets/Images/Partneri/Medijski/cysecor logo-01 (1).png';
// import DME from '../../assets/Images/Partneri/Medijski/digitalizuj-me-logo.png';
// import ETF from '../../assets/Images/Partneri/Medijski/ETF logo_transparent (1).png';
// import FOn from '../../assets/Images/Partneri/Medijski/FON logo - crni (1).png';
// import Smart from '../../assets/Images/Partneri/Medijski/gimnazija logo (1).jpg';
// import Imi from '../../assets/Images/Partneri/Medijski/imi_kragujevac (1).png';
// import ITBoot from '../../assets/Images/Partneri/Medijski/IT Bootcamp (1).JPG';
// import Joberty from '../../assets/Images/Partneri/Medijski/Joberty vektorski logo-1.png';
// import Kanc from '../../assets/Images/Partneri/Medijski/Kancelarija za mlade (1).PNG';
// import LCNis from '../../assets/Images/Partneri/Medijski/LC_Nis_red (1).png';
// import FTN from '../../assets/Images/Partneri/Medijski/logo ftn cacak (1)-1.png';
// import NTP from '../../assets/Images/Partneri/Medijski/logo NTP_final-4.jpg';
// import ON from '../../assets/Images/Partneri/Medijski/logo ON (1)-1.png';
// import Bor from '../../assets/Images/Partneri/Medijski/Logo.jpg';
// import Student from '../../assets/Images/Partneri/Medijski/Magazin Student.png';
// import Masinski from '../../assets/Images/Partneri/Medijski/masinskiLogo.png';
// import Estiem from '../../assets/Images/Partneri/Medijski/NOVI estiem lg belgrade zeleni-01.png';
// import OpenIt from '../../assets/Images/Partneri/Medijski/Open IT 1.PNG';
// import Play from '../../assets/Images/Partneri/Medijski/play radio.png';
// import Sesta from '../../assets/Images/Partneri/Medijski/Sesta gimnazija-logo(poslao parlament).png';
// import Sicef from '../../assets/Images/Partneri/Medijski/SICEF_logo_2020.png';
// import Viser from '../../assets/Images/Partneri/Medijski/SO_VISER_LOGO (2).png';
// import SPEF from '../../assets/Images/Partneri/Medijski/SPEF Logo.png';
// import Startuj from '../../assets/Images/Partneri/Medijski/startuj logo.png';
// import Suma from '../../assets/Images/Partneri/Medijski/SUMA_LOGO_FATTY_FADE.png';
// import Unija from '../../assets/Images/Partneri/Medijski/Unija.png';
// import Znanje from '../../assets/Images/Partneri/Medijski/znanje_plakat.png';
// import SZ from '../../assets/Images/Partneri/Medijski/SZ logo-1.png';
// import Matf from '../../assets/Images/Partneri/Medijski/MATF LOGO SRPSKI I ENGLESKI-1.png';
// import FCZ from '../../assets/Images/Partneri/Medijski/centar beli (1).png';
// import Poslovni from '../../assets/Images/Partneri/Medijski/Centar poslovni trening  (1).PNG';
// import FF from '../../assets/Images/Partneri/Medijski/Centar za razvoj karijere FF.PNG';
// import CZRK from '../../assets/Images/Partneri/Medijski/CzRK logo cir vektor.png';
// import Wolt from '../../assets/Images/Partneri/Robni/RGB_Wolt_logo_w_Tagline-1.jpg';
// import Mint from '../../assets/Images/Partneri/Robni/MINT LOGO VEKTORI-1.png';
// import Stark from '../../assets/Images/Partneri/Robni/Stark logo CMYK i pantone -1.jpg';
// import Atlantic from '../../assets/Images/Partneri/Robni/atlantic_logo_RGB-2.png';
// import Safon from '../../assets/Images/Partneri/Medijski/ljubicasti safon.png';
// import VO from '../../assets/Images/Partneri/Medijski/logo_orange-01-01.png';
// import Znam from '../../assets/Images/Partneri/Medijski/Logo_znamjakositi.png';
// import Savez from '../../assets/Images/Partneri/Medijski/savez.jpg';
// import ViserBG from '../../assets/Images/Partneri/Medijski/viser.png';
// import Youth from '../../assets/Images/Partneri/Medijski/YOUTH.RSlogo.png';
// import Marija from '../../assets/Images/Partneri/Medijski/MarijaDev.jpeg';

const Partneri = (props) => {
  const generalniSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const medijskiSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const naturalniSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const generalniPartneri = [
    {
      partnerSlika: undefined,
      partnerIme: 'Fon',
      pozadina: '#fff',
      link: 'http://fon.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Catenamedia',
      pozadina: '#f53942',
      link: 'https://www.catenamedia.com/',
    },

    {
      partnerSlika: undefined,
      partnerIme: 'Prime',
      pozadina: '#fff',
      link: 'https://www.primeholding.com/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Guarana',
      pozadina: '#a5de2f',
      link: 'https://guarana.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'DevIT',
      pozadina: '#fff',
      link: 'https://www.devit.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Raiffeisen',
      pozadina: '#ffed00',
      link: 'https://www.raiffeisenbank.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Digitec',
      pozadina: '#fff',
      link: 'https://www.digitec.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Mainstream',
      pozadina: '#0276BF',
      link: 'https://www.mainstream.rs/',
    },
  ];
  const naturalni = [
    {
      partnerSlika: undefined,
      partnerIme: 'Balkan Fun',
      pozadina: '#fff',
      link: 'https://balkanfun.travel/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Yolo Book',
      pozadina: '#fff',
      link: 'https://yolobook.com/sr',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Enigma',
      pozadina: '#fff',
      link: 'https://www.enigma-games-vr.com/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Narodni muzej',
      pozadina: '#fff',
      link: 'http://www.narodnimuzej.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Muzej Nikole Tesle',
      pozadina: '#58585A',
      link: 'https://nikolateslamuseum.org/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Portal',
      pozadina: '#060612',
      link: 'https://portalgamingworld.com/en/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Burger House',
      pozadina: '#fff',
      link: 'http://burgerhouse.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'ER',
      pozadina: '#fff',
      link: 'https://englishroom.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Zabac',
      pozadina: '#fff',
      link: 'https://zabac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Predator',
      pozadina: '#000',
      link: 'http://lasertagpredator.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Wolt',
      pozadina: '#fff',
      link: 'https://wolt.com/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Mint',
      pozadina: '#fff',
      link: 'https://www.mintpromoprint.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Stark',
      pozadina: '#fff',
      link: 'https://javolimstark.rs/',
    },

    {
      partnerSlika: undefined,
      partnerIme: 'Atlantic',
      pozadina: '#ED1C2A',
      link: 'https://www.atlanticgrupa.com/en/',
    },
  ];

  const medijski = [
    {
      partnerSlika: undefined,
      partnerIme: 'Aegee',
      pozadina: '#000',
      link: 'https://www.aegeenis.org.rs/',
    },

    {
      partnerSlika: undefined,
      partnerIme: 'Best',
      pozadina: '#fff',
      link: 'https://bestnis.rs/language/en/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Centar za transfer tehnologije',
      pozadina: '#000',
      link: 'http://www.ctt.bg.ac.rs/en/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Cysecor',
      pozadina: '#121D29',
      link: 'https://cysecor.com/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'DevIT',
      pozadina: '#fff',
      link: 'https://www.devit.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Brainz TV',
      pozadina: '#fff',
      link: 'https://brainz.center/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Digitalizuj me',
      pozadina: '#fff',
      link: 'https://digitalizuj.me/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'ETF',
      pozadina: '#fff',
      link: 'https://etf.unibl.org/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'FOn',
      pozadina: '#fff',
      link: 'http://www.fon.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Smart',
      pozadina: '#fff',
      link: 'https://www.smartschool.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Imi',
      pozadina: '#fff',
      link: 'https://imi.pmf.kg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'ITBoot',
      pozadina: '#fff',
      link: 'https://itbootcamp.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Joberty',
      pozadina: '#fff',
      link: 'https://www.joberty.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Kanc',
      pozadina: '#fff',
      link: 'http://kancelarijazamlade.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'LCNis',
      pozadina: '#fff',
      link: 'https://eestec.net/cities/nis/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'FTN',
      pozadina: '#fff',
      link: 'http://www.ftn.kg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'NTP',
      pozadina: '#0B4F6F',
      link: 'https://ntpark.rs/en/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'ON',
      pozadina: '#fff',
      link: 'https://omladinskenovine.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Bor',
      pozadina: '#fff',
      link: 'https://www.tfbor.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Student',
      pozadina: '#fff',
      link: 'https://magazinstudent.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Masinski',
      pozadina: '#fff',
      link: 'https://www.mas.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Estiem',
      pozadina: '#fff',
      link: 'https://estiem.org/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'OpenIt',
      pozadina: '#160E23',
      link: 'https://open-it.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Play',
      pozadina: '#E52E40',
      link: 'https://www.playradio.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Sesta',
      pozadina: '#fff',
      link: 'http://vigimnazija.edu.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Sicef',
      pozadina: '#fff',
      link: 'https://sicef.info/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Viser',
      pozadina: '#fff',
      link: 'https://www.viser.edu.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'SPEF',
      pozadina: '#fff',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Startuj',
      pozadina: '#fff',
      link: 'https://startuj.com/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Suma',
      pozadina: '#fff',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Unija',
      pozadina: '#fff',
      link: 'https://unijastudenatafona.org/o-nama/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Znanje',
      pozadina: '#fff',
      link: 'http://www.znanje.rs/index.php?ur=c',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'SZ',
      pozadina: '#fff',
      link: 'https://www.studentskizivot.com/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Matf',
      pozadina: '#fff',
      link: 'http://www.matf.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'FCZ',
      pozadina: '#EC571B',
      link: 'https://www.fonovcentar.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Poslovni',
      pozadina: '#fff',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'FF',
      pozadina: '#fff',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'CZRK',
      pozadina: '#fff',
      link: 'http://www.razvojkarijere.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Safon',
      pozadina: '#fff',
      link: 'http://safon.fon.bg.ac.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Virtual office',
      pozadina: '#fff',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Znam ja ko si ti',
      pozadina: '#0D534B',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Savez studenata fona',
      pozadina: '#fff',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Viser',
      pozadina: '#fff',
      link: 'https://www.viser.edu.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Youth.rs',
      pozadina: '#000',
      link: 'https://youth.rs/',
    },
    {
      partnerSlika: undefined,
      partnerIme: 'Marija dev',
      pozadina: '#F6F55B',
      link: 'https://www.instagram.com/codewithmary/',
    },
  ];
  return (
    <div className="partneri" ref={props.section} id="partneri">
      <div>
        <h2 className="partneri-naslov">Partneri</h2>
      </div>
      <div className="pokrovitelj">
        <div>
          <h2 className="pokroviteljpr-naslov">POWERED BY</h2>
        </div>
        <div className="pokrovitelj-logo">
          <Partner
            partnerSlika={undefined}
            partnerIme="Levi9"
            width="20em"
            height="12em"
            pozadina="#ffffff"
            link="https://www.levi9.com/"
          ></Partner>
        </div>
      </div>
      <div className="generalni">
        <div>
          <h2 className="sponzor-naslov">GODIŠNJI PARTNERI</h2>
        </div>
      </div>
      <hr class="hr-style"/>
      <div className="slajder1">
        <PartneriSlider
          partneri={generalniPartneri}
          settings={generalniSettings}
          width="16rem"
          height="11rem"
        />
        {/* <div className="kocka-1">
          <img src={Kocka3} alt="Kocka 3" />
        </div> */}
        {/* <div className="kocka-2">
          <img src={Kocka1} alt="Kocka 1" />
        </div>
        <div className="kocka-3">
          <img src={Kocka3} alt="Kocka 3" />
        </div>
        <div className="kocka-4">
          <img src={Kocka3} alt="Kocka 3" />
        </div> */}
      </div>
      <hr class="hr-style"/>
      <div className="naturalni">
        <div>
          <h2 className="sponzor-naslov">NATURALNI PARTNERI</h2>
        </div>
      </div>
      <hr class="hr-style"/>
      <div className="slajder2">
        <PartneriSlider
          partneri={naturalni}
          settings={naturalniSettings}
          width="15rem"
          height="10rem"
        />
      </div>
      <hr class="hr-style"/>
      {/* <div className="kocka-5">
          <img src={Kocka2} alt="Kocka 2" />
        </div>
        <div className="kocka-6">
          <img src={Kocka1} alt="Kocka 1" />
        </div>
        <div className="kocka-7">
          <img src={Kocka1} alt="Kocka 1" />
        </div> */}
      <div className="medijski">
        <div>
          <h2 className="sponzor-naslov">MEDIJSKI PARTNERI</h2>
        </div>
      </div>
      <hr class="hr-style"/>
      <PartneriSlider
        partneri={medijski}
        settings={medijskiSettings}
        width="14rem"
        height="9rem"
      />
      <hr class="hr-style"/>
    </div>
    
  );
};

export default Partneri;
