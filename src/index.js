import { MDCSelect } from "@material/select";

import "./main.scss";

class CallMeBack {
  constructor(options) {
    this.options = options;

    this.defaults = {
      dir: "rtl",
      endpoint: "https://retuts.org/callMeBack/endpoint",
      position: {
        right: 200,
        bottom: 50,
        left: null,
        top: null
      },
      translations: {
        badge: {
          title: "Call Back for free"
        },
        modal: {
          subheader: "Leave your phone number and we will call you back.",
          select_placeholder: "Country",
          submit: "Submit",
          overlay: {
            header: "Thank You!",
            body:
              "We Have Received Details And Support Agent Will Be Contacting You Within 24 Hours"
          }
        }
      }
    };

    this.options = this.extend(this.defaults, this.options);

    this.init();
  }

  // initialize plugin
  init() {
    let vm = this;
    this.ready(function() {
      let badgeDIV = document.createElement("div");
      badgeDIV.className = "callMeBack__wrap";

      badgeDIV.innerHTML =
        "" +
        '    <div class="callMeBack__inner" dir="' +
        vm.options.dir +
        '">\n' +
        '        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        "            <path\n" +
        '                d="M21.5294 17.3439L18.1364 13.9509C17.4945 13.309 16.3024 13.309 15.6605 14.0426L13.9181 15.785C13.7347 15.6016 13.643 15.5099 13.5513 15.5099C12.4508 14.8679 10.9836 14.1343 9.42465 12.5754C7.86569 10.9247 7.04037 9.45745 6.39844 8.35701C6.39844 8.26531 6.30674 8.17361 6.21504 8.0819L7.40718 6.88976L7.9574 6.33955C8.69102 5.60592 8.69102 4.50549 7.9574 3.86356L4.65609 0.470552C4.01416 -0.17137 2.82203 -0.17137 2.1801 0.562255L1.26307 1.57099C0.896261 1.8461 0.621152 2.39632 0.437746 2.85483C0.25434 3.31335 0.162637 3.77186 0.0709335 4.23038C-0.387582 7.9902 1.35478 11.3832 5.93993 15.9684C12.3591 22.3876 17.4945 21.8374 17.6779 21.8374C18.1364 21.7457 18.595 21.654 19.0535 21.4705C19.6037 21.2871 20.0622 21.012 20.429 20.6452L21.4377 19.7282C22.1714 19.0863 22.1714 17.9858 21.5294 17.3439Z"\n' +
        '                fill="white"/>\n' +
        "        </svg>\n" +
        "    </div>\n" +
        '    <div class="callMeBack__slideOut">\n' +
        "        <span>" +
        vm.options.translations.badge.title +
        "</span>\n" +
        "    </div>\n";

      document.body.appendChild(badgeDIV);

      if (vm.options.position.top !== null) {
        badgeDIV.style.top = vm.options.position.top + "px";
      } else {
        badgeDIV.style.bottom = vm.options.position.bottom + "px";
      }

      if (vm.options.position.left !== null) {
        badgeDIV.style.left = vm.options.position.left + "px";
      } else {
        badgeDIV.style.right = vm.options.position.right + "px";
      }

      let modalDIV = document.createElement("div");
      modalDIV.className = "callMeBack-modal__wrap";
      modalDIV.innerHTML =
        '    <div class="callMeBack-modal__content">\n' +
        '        <div class="callMeBack-modal__header ">\n' +
        '            <div class="callMeBack-modal__close">\n' +
        '                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '                    <rect y="2.25" width="3.18197" height="18.0312" rx="1.59098" transform="rotate(-45 0 2.25)"\n' +
        '                          fill="#131313"/>\n' +
        '                    <rect x="12.75" width="3.18197" height="18.0312" rx="1.59098" transform="rotate(45 12.75 0)"\n' +
        '                          fill="#131313"/>\n' +
        "                </svg>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <main>\n" +
        '            <div class="callMeBack__success-overlay">\n' +
        '                <div class="callMeBack-success-overlay__header" dir="' +
        vm.options.dir +
        '">\n' +
        vm.options.translations.modal.overlay.header +
        "                </div>\n" +
        '                <div class="callMeBack-success-overlay__body" dir="' +
        vm.options.dir +
        '">\n' +
        vm.options.translations.modal.overlay.body +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        '            <div class="callMeBack-modal__subheader" dir="' +
        vm.options.dir +
        '">\n' +
        vm.options.translations.modal.subheader +
        "            </div>\n" +
        '            <div class="callmeBack-modal__body">\n' +
        '                <form action="" id="callmeback_form">\n' +
        '                    <div class="mdc-select" dir="rtl">\n' +
        '                        <i class="mdc-select__dropdown-icon"></i>\n' +
        '                        <select class="mdc-select__native-control" name="country">\n' +
        '                            <option value="" disabled selected></option>\n' +
        '                            <option value="AF" data-code="93" >Afghanistan</option>\n' +
        '                            <option value="AL" data-code="355" >Albania</option>\n' +
        '                            <option value="DZ" data-code="213" >Algeria</option>\n' +
        '                            <option value="AS" data-code="1684" >American Samoa</option>\n' +
        '                            <option value="AD" data-code="376" >Andorra</option>\n' +
        '                            <option value="AO" data-code="244" >Angola</option>\n' +
        '                            <option value="AI" data-code="1264" >Anguilla</option>\n' +
        '                            <option value="AG" data-code="1268" >Antigua and Barbuda</option>\n' +
        '                            <option value="AR" data-code="54" >Argentina</option>\n' +
        '                            <option value="AM" data-code="374" >Armenia</option>\n' +
        '                            <option value="AW" data-code="297" >Aruba</option>\n' +
        '                            <option value="AU" data-code="61" >Australia</option>\n' +
        '                            <option value="AT" data-code="43" >Austria</option>\n' +
        '                            <option value="AZ" data-code="994" >Azerbaijan</option>\n' +
        '                            <option value="BS" data-code="1242" >Bahamas</option>\n' +
        '                            <option value="BH" data-code="973" >Bahrain</option>\n' +
        '                            <option value="BD" data-code="880" >Bangladesh</option>\n' +
        '                            <option value="BB" data-code="1246" >Barbados</option>\n' +
        '                            <option value="BY" data-code="375" >Belarus</option>\n' +
        '                            <option value="BE" data-code="32" >Belgium</option>\n' +
        '                            <option value="BZ" data-code="501" >Belize</option>\n' +
        '                            <option value="BJ" data-code="229" >Benin</option>\n' +
        '                            <option value="BM" data-code="1441" >Bermuda</option>\n' +
        '                            <option value="BT" data-code="975" >Bhutan</option>\n' +
        '                            <option value="BO" data-code="591" >Bolivia</option>\n' +
        '                            <option value="BA" data-code="387" >Bosnia and Herzegovina</option>\n' +
        '                            <option value="BW" data-code="267" >Botswana</option>\n' +
        '                            <option value="BR" data-code="55" >Brazil</option>\n' +
        '                            <option value="IO" data-code="246" >British Indian Ocean Territory</option>\n' +
        '                            <option value="VG" data-code="1284" >British Virgin Islands</option>\n' +
        '                            <option value="BN" data-code="673" >Brunei</option>\n' +
        '                            <option value="BG" data-code="359" >Bulgaria</option>\n' +
        '                            <option value="BF" data-code="226" >Burkina Faso</option>\n' +
        '                            <option value="BI" data-code="257" >Burundi</option>\n' +
        '                            <option value="KH" data-code="855" >Cambodia</option>\n' +
        '                            <option value="CM" data-code="237" >Cameroon</option>\n' +
        '                            <option value="CA" data-code="1" >Canada</option>\n' +
        '                            <option value="CV" data-code="238" >Cape Verde</option>\n' +
        '                            <option value="BQ" data-code="599" >Caribbean Netherlands</option>\n' +
        '                            <option value="KY" data-code="1345" >Cayman Islands</option>\n' +
        '                            <option value="CF" data-code="236" >Central African Republic</option>\n' +
        '                            <option value="TD" data-code="235" >Chad</option>\n' +
        '                            <option value="CL" data-code="56" >Chile</option>\n' +
        '                            <option value="CN" data-code="86" >China</option>\n' +
        '                            <option value="CO" data-code="57" >Colombia</option>\n' +
        '                            <option value="KM" data-code="269" >Comoros</option>\n' +
        '                            <option value="CD" data-code="243" >Congo (DRC)</option>\n' +
        '                            <option value="CG" data-code="242" >Congo (Republic)</option>\n' +
        '                            <option value="CK" data-code="682" >Cook Islands</option>\n' +
        '                            <option value="CR" data-code="506" >Costa Rica</option>\n' +
        '                            <option value="CI" data-code="225" >CÃ´te dâ€™Ivoire</option>\n' +
        '                            <option value="HR" data-code="385" >Croatia</option>\n' +
        '                            <option value="CU" data-code="53" >Cuba</option>\n' +
        '                            <option value="CW" data-code="599" >CuraÃ§ao</option>\n' +
        '                            <option value="CY" data-code="357" >Cyprus</option>\n' +
        '                            <option value="CZ" data-code="420" >Czech Republic</option>\n' +
        '                            <option value="DK" data-code="45" >Denmark</option>\n' +
        '                            <option value="DJ" data-code="253" >Djibouti</option>\n' +
        '                            <option value="DM" data-code="1767" >Dominica</option>\n' +
        '                            <option value="DO" data-code="1" >Dominican Republic</option>\n' +
        '                            <option value="EC" data-code="593" >Ecuador</option>\n' +
        '                            <option value="EG" data-code="20" >Egypt</option>\n' +
        '                            <option value="SV" data-code="503" >El Salvador</option>\n' +
        '                            <option value="GQ" data-code="240" >Equatorial Guinea</option>\n' +
        '                            <option value="ER" data-code="291" >Eritrea</option>\n' +
        '                            <option value="EE" data-code="372" >Estonia</option>\n' +
        '                            <option value="ET" data-code="251" >Ethiopia</option>\n' +
        '                            <option value="FK" data-code="500" >Falkland Islands</option>\n' +
        '                            <option value="FO" data-code="298" >Faroe Islands</option>\n' +
        '                            <option value="FJ" data-code="679" >Fiji</option>\n' +
        '                            <option value="FI" data-code="358" >Finland</option>\n' +
        '                            <option value="FR" data-code="33" >France</option>\n' +
        '                            <option value="GF" data-code="594" >French Guiana</option>\n' +
        '                            <option value="PF" data-code="689" >French Polynesia</option>\n' +
        '                            <option value="GA" data-code="241" >Gabon</option>\n' +
        '                            <option value="GM" data-code="220" >Gambia</option>\n' +
        '                            <option value="GE" data-code="995" >Georgia</option>\n' +
        '                            <option value="DE" data-code="49" >Germany</option>\n' +
        '                            <option value="GH" data-code="233" >Ghana</option>\n' +
        '                            <option value="GI" data-code="350" >Gibraltar</option>\n' +
        '                            <option value="GR" data-code="30" >Greece</option>\n' +
        '                            <option value="GL" data-code="299" >Greenland</option>\n' +
        '                            <option value="GD" data-code="1473" >Grenada</option>\n' +
        '                            <option value="GP" data-code="590" >Guadeloupe</option>\n' +
        '                            <option value="GU" data-code="1671" >Guam</option>\n' +
        '                            <option value="GT" data-code="502" >Guatemala</option>\n' +
        '                            <option value="GN" data-code="224" >Guinea</option>\n' +
        '                            <option value="GW" data-code="245" >Guinea-Bissau</option>\n' +
        '                            <option value="GY" data-code="592" >Guyana</option>\n' +
        '                            <option value="HT" data-code="509" >Haiti</option>\n' +
        '                            <option value="HN" data-code="504" >Honduras</option>\n' +
        '                            <option value="HK" data-code="852" >Hong Kong</option>\n' +
        '                            <option value="HU" data-code="36" >Hungary</option>\n' +
        '                            <option value="IS" data-code="354" >Iceland</option>\n' +
        '                            <option value="IN" data-code="91" >India</option>\n' +
        '                            <option value="ID" data-code="62" >Indonesia</option>\n' +
        '                            <option value="IR" data-code="98" >Iran</option>\n' +
        '                            <option value="IQ" data-code="964" >Iraq</option>\n' +
        '                            <option value="IE" data-code="353" >Ireland</option>\n' +
        '                            <option value="IL" data-code="972" >Israel</option>\n' +
        '                            <option value="IT" data-code="39" >Italy</option>\n' +
        '                            <option value="JM" data-code="1876" >Jamaica</option>\n' +
        '                            <option value="JP" data-code="81" >Japan</option>\n' +
        '                            <option value="JO" data-code="962" >Jordan</option>\n' +
        '                            <option value="KZ" data-code="7" >Kazakhstan</option>\n' +
        '                            <option value="KE" data-code="254" >Kenya</option>\n' +
        '                            <option value="KI" data-code="686" >Kiribati</option>\n' +
        '                            <option value="KW" data-code="965" >Kuwait</option>\n' +
        '                            <option value="KG" data-code="996" >Kyrgyzstan</option>\n' +
        '                            <option value="LA" data-code="856" >Laos</option>\n' +
        '                            <option value="LV" data-code="371" >Latvia</option>\n' +
        '                            <option value="LB" data-code="961" >Lebanon</option>\n' +
        '                            <option value="LS" data-code="266" >Lesotho</option>\n' +
        '                            <option value="LR" data-code="231" >Liberia</option>\n' +
        '                            <option value="LY" data-code="218" >Libya</option>\n' +
        '                            <option value="LI" data-code="423" >Liechtenstein</option>\n' +
        '                            <option value="LT" data-code="370" >Lithuania</option>\n' +
        '                            <option value="LU" data-code="352" >Luxembourg</option>\n' +
        '                            <option value="MO" data-code="853" >Macau</option>\n' +
        '                            <option value="MK" data-code="389" >Macedonia</option>\n' +
        '                            <option value="MG" data-code="261" >Madagascar</option>\n' +
        '                            <option value="MW" data-code="265" >Malawi</option>\n' +
        '                            <option value="MY" data-code="60" >Malaysia</option>\n' +
        '                            <option value="MV" data-code="960" >Maldives</option>\n' +
        '                            <option value="ML" data-code="223" >Mali</option>\n' +
        '                            <option value="MT" data-code="356" >Malta</option>\n' +
        '                            <option value="MH" data-code="692" >Marshall Islands</option>\n' +
        '                            <option value="MQ" data-code="596" >Martinique</option>\n' +
        '                            <option value="MR" data-code="222" >Mauritania</option>\n' +
        '                            <option value="MU" data-code="230" >Mauritius</option>\n' +
        '                            <option value="MX" data-code="52" >Mexico</option>\n' +
        '                            <option value="FM" data-code="691" >Micronesia</option>\n' +
        '                            <option value="MD" data-code="373" >Moldova</option>\n' +
        '                            <option value="MC" data-code="377" >Monaco</option>\n' +
        '                            <option value="MN" data-code="976" >Mongolia</option>\n' +
        '                            <option value="ME" data-code="382" >Montenegro</option>\n' +
        '                            <option value="MS" data-code="1664" >Montserrat</option>\n' +
        '                            <option value="MA" data-code="212" >Morocco</option>\n' +
        '                            <option value="MZ" data-code="258" >Mozambique</option>\n' +
        '                            <option value="MM" data-code="95" >Myanmar</option>\n' +
        '                            <option value="NA" data-code="264" >Namibia</option>\n' +
        '                            <option value="NR" data-code="674" >Nauru</option>\n' +
        '                            <option value="NP" data-code="977" >Nepal</option>\n' +
        '                            <option value="NL" data-code="31" >Netherlands</option>\n' +
        '                            <option value="NC" data-code="687" >New Caledonia</option>\n' +
        '                            <option value="NZ" data-code="64" >New Zealand</option>\n' +
        '                            <option value="NI" data-code="505" >Nicaragua</option>\n' +
        '                            <option value="NE" data-code="227" >Niger</option>\n' +
        '                            <option value="NG" data-code="234" >Nigeria</option>\n' +
        '                            <option value="NU" data-code="683" >Niue</option>\n' +
        '                            <option value="NF" data-code="672" >Norfolk Island</option>\n' +
        '                            <option value="KP" data-code="850" >North Korea</option>\n' +
        '                            <option value="MP" data-code="1670" >Northern Mariana Islands</option>\n' +
        '                            <option value="NO" data-code="47" >Norway</option>\n' +
        '                            <option value="OM" data-code="968" >Oman</option>\n' +
        '                            <option value="PK" data-code="92" >Pakistan</option>\n' +
        '                            <option value="PW" data-code="680" >Palau</option>\n' +
        '                            <option value="PS" data-code="970" >Palestine</option>\n' +
        '                            <option value="PA" data-code="507" >Panama</option>\n' +
        '                            <option value="PG" data-code="675" >Papua New Guinea</option>\n' +
        '                            <option value="PY" data-code="595" >Paraguay</option>\n' +
        '                            <option value="PE" data-code="51" >Peru</option>\n' +
        '                            <option value="PH" data-code="63" >Philippines</option>\n' +
        '                            <option value="PL" data-code="48" >Poland</option>\n' +
        '                            <option value="PT" data-code="351" >Portugal</option>\n' +
        '                            <option value="PR" data-code="1" >Puerto Rico</option>\n' +
        '                            <option value="QA" data-code="974" >Qatar</option>\n' +
        '                            <option value="RE" data-code="262" >RÃ©union</option>\n' +
        '                            <option value="RO" data-code="40" >Romania</option>\n' +
        '                            <option value="RU" data-code="7" >Russia</option>\n' +
        '                            <option value="RW" data-code="250" >Rwanda</option>\n' +
        '                            <option value="BL" data-code="590" >Saint BarthÃ©lemy</option>\n' +
        '                            <option value="SH" data-code="290" >Saint Helena</option>\n' +
        '                            <option value="KN" data-code="1869" >Saint Kitts and Nevis</option>\n' +
        '                            <option value="LC" data-code="1758" >Saint Lucia</option>\n' +
        '                            <option value="MF" data-code="590" >Saint Martin</option>\n' +
        '                            <option value="PM" data-code="508" >Saint Pierre and Miquelon</option>\n' +
        '                            <option value="VC" data-code="1784" >Saint Vincent and the Grenadines</option>\n' +
        '                            <option value="WS" data-code="685" >Samoa</option>\n' +
        '                            <option value="SM" data-code="378" >San Marino</option>\n' +
        '                            <option value="ST" data-code="239" >SÃ£o TomÃ© and PrÃ&shy;ncipe</option>\n' +
        '                            <option value="SA" data-code="966" >Saudi Arabia</option>\n' +
        '                            <option value="SN" data-code="221" >Senegal</option>\n' +
        '                            <option value="RS" data-code="381" >Serbia</option>\n' +
        '                            <option value="SC" data-code="248" >Seychelles</option>\n' +
        '                            <option value="SL" data-code="232" >Sierra Leone</option>\n' +
        '                            <option value="SG" data-code="65" >Singapore</option>\n' +
        '                            <option value="SX" data-code="1721" >Sint Maarten</option>\n' +
        '                            <option value="SK" data-code="421" >Slovakia</option>\n' +
        '                            <option value="SI" data-code="386" >Slovenia</option>\n' +
        '                            <option value="SB" data-code="677" >Solomon Islands</option>\n' +
        '                            <option value="SO" data-code="252" >Somalia</option>\n' +
        '                            <option value="ZA" data-code="27" >South Africa</option>\n' +
        '                            <option value="KR" data-code="82" >South Korea</option>\n' +
        '                            <option value="SS" data-code="211" >South Sudan</option>\n' +
        '                            <option value="ES" data-code="34" >Spain</option>\n' +
        '                            <option value="LK" data-code="94" >Sri Lanka</option>\n' +
        '                            <option value="SD" data-code="249" >Sudan</option>\n' +
        '                            <option value="SR" data-code="597" >Suriname</option>\n' +
        '                            <option value="SZ" data-code="268" >Swaziland</option>\n' +
        '                            <option value="SE" data-code="46" >Sweden</option>\n' +
        '                            <option value="CH" data-code="41" >Switzerland</option>\n' +
        '                            <option value="SY" data-code="963" >Syria</option>\n' +
        '                            <option value="TW" data-code="886" >Taiwan</option>\n' +
        '                            <option value="TJ" data-code="992" >Tajikistan</option>\n' +
        '                            <option value="TZ" data-code="255" >Tanzania</option>\n' +
        '                            <option value="TH" data-code="66" >Thailand</option>\n' +
        '                            <option value="TL" data-code="670" >Timor-Leste</option>\n' +
        '                            <option value="TG" data-code="228" >Togo</option>\n' +
        '                            <option value="TK" data-code="690" >Tokelau</option>\n' +
        '                            <option value="TO" data-code="676" >Tonga</option>\n' +
        '                            <option value="TT" data-code="1868" >Trinidad and Tobago</option>\n' +
        '                            <option value="TN" data-code="216" >Tunisia</option>\n' +
        '                            <option value="TR" data-code="90" >Turkey</option>\n' +
        '                            <option value="TM" data-code="993" >Turkmenistan</option>\n' +
        '                            <option value="TC" data-code="1649" >Turks and Caicos Islands</option>\n' +
        '                            <option value="TV" data-code="688" >Tuvalu</option>\n' +
        '                            <option value="VI" data-code="1340" >U.S. Virgin Islands</option>\n' +
        '                            <option value="UG" data-code="256" >Uganda</option>\n' +
        '                            <option value="UA" data-code="380" >Ukraine</option>\n' +
        '                            <option value="AE" data-code="971" >United Arab Emirates</option>\n' +
        '                            <option value="GB" data-code="44" >United Kingdom</option>\n' +
        '                            <option value="US" data-code="1" >United States</option>\n' +
        '                            <option value="UY" data-code="598" >Uruguay</option>\n' +
        '                            <option value="UZ" data-code="998" >Uzbekistan</option>\n' +
        '                            <option value="VU" data-code="678" >Vanuatu</option>\n' +
        '                            <option value="VA" data-code="39" >Vatican City</option>\n' +
        '                            <option value="VE" data-code="58" >Venezuela</option>\n' +
        '                            <option value="VN" data-code="84" >Vietnam</option>\n' +
        '                            <option value="WF" data-code="681" >Wallis and Futuna</option>\n' +
        '                            <option value="YE" data-code="967" >Yemen</option>\n' +
        '                            <option value="ZM" data-code="260" >Zambia</option>\n' +
        '                            <option value="ZW" data-code="263" >Zimbabwe</option>\n' +
        "                        </select>\n" +
        '                        <label class="mdc-floating-label">Country</label>\n' +
        '                        <div class="mdc-line-ripple"></div>\n' +
        "                    </div>\n" +
        "\n" +
        '                    <div class="inputs__wrap">\n' +
        '                        <div class="input-code__wrap">\n' +
        '                            <div class="retuts-material-input__wrap">\n' +
        '                                <input type="text" name="code"\n' +
        '                                       style="cursor:default; direction: ltr;text-align: right;" id="callmeback_code"\n' +
        '                                       readonly required tabindex="-1"/>\n' +
        '<!--                                <span class="bar"></span>-->\n' +
        "                                <label></label>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        '                        <div class="input-number__wrap">\n' +
        '                            <div class="retuts-material-input__wrap">\n' +
        '                                <input type="number" name="number" id="callmeback_phone" required/>\n' +
        '<!--                                <span class="bar"></span>-->\n' +
        "<!--                                <label>numba</label>-->\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        '                        <div class="clearfix"></div>\n' +
        '                        <div class="submit-btn__wrap" dir="' +
        vm.options.dir +
        '">\n' +
        "                            <button>" +
        vm.options.translations.modal.submit +
        "</button>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                </form>\n" +
        "            </div>\n" +
        "        </main>\n" +
        "    </div>\n";

      document.body.append(modalDIV);

      vm.initialized = true;

      vm.setEventListeners();
    });
  }

  setEventListeners() {
    let that = this;
    const select = new MDCSelect(document.querySelector(".mdc-select"));

    select.listen("MDCSelect:change", this.selectChange);

    let formDOM = document.getElementById("callmeback_form");

    formDOM.addEventListener(
      "submit",
      function(event) {
        that.formSubmit(event);
      },
      true
    );

    document
      .getElementsByClassName("callMeBack__wrap")[0]
      .addEventListener("click", this.openModal, true);

    document
      .getElementsByClassName("callMeBack-modal__close")[0]
      .addEventListener("click", this.closeModal, true);

    document
      .getElementsByClassName("callMeBack-modal__wrap")[0]
      .addEventListener("click", this.globalCloseModal, true);
  }

  openModal() {
    document
      .getElementsByClassName("callMeBack-modal__wrap")[0]
      .classList.add("open");
  }

  selectChange(event) {
    let nativeSelect = event.target.querySelector(
      ".mdc-select__native-control"
    );
    let code = nativeSelect.options[nativeSelect.selectedIndex].getAttribute(
      "data-code"
    );
    let code_input = document.getElementById("callmeback_code");
    code_input.value = "+" + code;

    document.getElementById("callmeback_phone").focus();
  }

  globalCloseModal(event) {
    if (
      event.target ===
      document.getElementsByClassName("callMeBack-modal__wrap")[0]
    ) {
      document
        .getElementsByClassName("callMeBack-modal__wrap")[0]
        .classList.remove("open");
    }
  }

  closeModal(event) {
    document
      .getElementsByClassName("callMeBack-modal__wrap")[0]
      .classList.remove("open");
  }

  formSubmit(event) {
    event.preventDefault();

    fetch(this.options.endpoint, {
      method: "POST",
      body: new FormData(event.target)
    })
      .catch(error => console.error("Error:", error))
      .then(function(response) {
        document
          .getElementsByClassName("callMeBack__success-overlay")[0]
          .classList.add("open");
      });
  }

  /**
   * Merge defaults with user options
   * @param {Object} target Default settings
   * @param {Object} options User options
   */
  extend(target, options) {
    var prop,
      extended = {};
    for (prop in target) {
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
        extended[prop] = target[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  }

  ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
}

export default CallMeBack;
