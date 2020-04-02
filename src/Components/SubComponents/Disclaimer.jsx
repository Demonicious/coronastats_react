import React from 'react'

export const Disclaimer = (props) => {
    return (
        <div className={"backdrop sourcesDropOpen " + props.showForm}>
            <div className="backdropInnerMain latestNewsDropOpenInner">
                <div className="backdropInner">
                    <span onClick={() => props.toggle()} className="backdropCloseIcon privacyPolicyDrop">✕</span>
                    <div className="backdropHeader">Disclaimer &amp; Privacy Policy</div>
                    <div className="backdropContent">
                        <div className="pagesTexts">
                            <p>Information on this web site is provided "as is" without warranty of any kind, either express or implied about the completeness, accuracy, reliability, suitability or availability with respect to the web site or the information, products, services, or graphics contained on the web site for any purpose including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.
            <br />
                                <br /> You expressly understand and agree that Coronastats.co shall not be liable to you for:
            <br />
                                <br /> a) any direct, indirect, incidental, special, consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall include, but not be limited to, any loss of profit or revenue (whether incurred directly or indirectly), any loss of goodwill or business reputation, any loss of data suffered, cost of procurement of substitute goods or services, or other intangible loss;
            <br />
                                <br /> b) any direct, indirect, incidental, special, consequential or exemplary damages arising out of or related to Coronastats.co web site or the information contained in it, whether such damages arise in contract, negligence, tort, under statute, in equity, at law or otherwise;
            <br />
                                <br /> c) any loss or damage which may be incurred by you, including but not limited to loss or damage as a result of:
          </p>
                            <ul>
                                <li>any reliance placed by you on the completeness, accuracy, reliability, suitability or availability with respect to the information on the web site and the services provided;
              <br /> </li>
                                <li>any changes which Coronastats.co may make to the information or services, or for any permanent or temporary cessation in the provision of the information or services (or any related features);</li>
                            </ul>
                            <p>
                                <br /> Coronastats.co takes no responsibility for and will not be liable for the web site being temporarily unavailable.
            <br />
                                <br /> Links provided on this site are provided solely as a convenience to you and the provision of any such link does not constitute our endorsement of that site or its provider or of any of the content, products, or services contained or offered therein. your use of each of those sites is subject to the conditions, if any, that each of those sites has posted. you agree that we are not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the contents, products, services or any transmissions received through such sites. you further agree that we have no liability whatsoever from such third party sites and your usage of them.</p>
                            <p>Coronastats.co is not directly or indirectly owned or managed by any governmental organization, United Nations organization, public charity, non-profit, or private foundation. Coronastats.co is not affiliated, associated with, or in any way has any official status with the United Nations or any other official organization.
            <br />
                                <br /> Information on this web site may contain inaccuracies or errors. Information may be changed or updated without notice. Coronastats.co may also make improvements and/or changes in the content, the products, and/or the services at any time without notice. Coronastats.co takes absolutely no responsibility for any errors on the site. Any reliance you place on the information is therefore strictly at your own risk. </p>
                            <h3><strong>Privacy policy</strong></h3>
                            <p>By using this website you agree to our Privacy Policy.</p>
                            <p>Coronastats.co collects data to deliver the best content, services, and personalized digital ads. We partner with third party advertisers who may use tracking technologies to collect information about your activity on sites and applications across devices, both on our sites and across the Internet.</p>
                            <p>You always have the choice to experience our website without personalized advertising based on your web browsing activity by visiting the <a target="_blank" rel="noopener noreferrer nofollow" href="http://optout.aboutads.info/?c=2#!/">DAA’s Consumer Choice page</a>, the <a target="_blank" rel="noopener noreferrer nofollow" href="http://optout.networkadvertising.org/?c=1#!/">NAI's websit</a>e, and/or the <a target="_blank" rel="noopener noreferrer nofollow" href="http://www.youronlinechoices.com/">EU online choices page</a>, from each of your browsers or devices. To avoid personalized advertising based on your mobile app activity, you can install the <a target="_blank" rel="noopener noreferrer nofollow" href="http://www.aboutads.info/appchoices">DAA’s AppChoices app here</a>. </p>
                            <p><strong>Log Files</strong>
                                <br /> Like most standard Web site servers we use log files. This includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, platform type, date/time stamp, and number of clicks to analyze trends, administer the site, track user’s movement in the aggregate, and gather broad demographic information for aggregate use. IP addresses, etc. are not linked to personally identifiable information.</p>
                            <p><strong>Google Analytics </strong>
                                <br /> We use Google Analytics, which is Google’s analytics tool that helps websites to understand how their visitors engage with their web properties. It may use a set of cookies to collect information and report website usage statistics without personally identifying individual visitors. The main cookie used by Google Analytics is the ‘_ga’ cookie. In addition to reporting website usage statistics, Google Analytics can also be used, together with some of the advertising cookies described below, to help show more relevant ads on Google properties (like Google Search) and across the web and to measure interactions with the ads shown by Google. Learn more about <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.google.com/policies/privacy/partners/">how Google uses data when you use this websit</a>e and about <a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies?hl=en">Analytics cookies and privacy information.</a></p>
                            <p><strong>Cookies and web beacons </strong>
                                <br /> Our site does not use cookies. However, we use outside companies to display ads on our site and to collect statistics about web visitors. These companies may be placing and reading cookies on your web browser, or using web beacons to collect information. Remember that cookies do not allow anyone to access your private information on your computer. They only record information about your visits to a web site. Cookies may be used tfor personalization of ads but can be also used for non-personalized advertising.</p>
                            <p><strong>Other third party advertisers<br /> </strong>Advertisers who will have access to data we collect on this site currently include: GoogleAdX, Freestar, AppNexus, IndexExchange, OpenX RhythmOne, DistrictM, RubiconProject, Sovrn, Conversant, Amazon, Sharethrough, EMX, SublimeSkinz, JustPremium, LKQD, Telaria, AnswerMedia, Pubmatic, bluTonic, ROIMedia, Aerserv, Lockerdome, Consumable, Beachfront, Gumgum, Triplelift, Media.net, BounceX, Undertone, Powerlinks, Nativo, NativoVideo, advertising.com, 33Across, Teads, and Unruly.
            <br />
                                <br /> <strong>Cookie management</strong>
                                <br />It is important to know that if you disable cookies you may not be able to use certain features offered by some web sites. You can disable cookies through your browser. Most browsers have instructions on how to disable cookies in their "Help" sections. The instructions for all browsers vary. But the steps are generally similar for most. Here are some places you can look to disable or enable cookies:</p>
                            <ul>
                                <li>Internet Explorer: Look in the Tools menu, select Internet Options, and then click the Security tab. Click Internet, and then click Custom Level. Scroll down to Cookies, click disable (or enable) for both cookie options, and then click OK.
              <br /> </li>
                                <li>Mozilla Firefox: Open Tasks, choose Privacy &amp; Security, and then Cookie Manager. Choose View Stored Cookies from the submenu to open the Cookie Manager window. Select one or more cookies and click either Remove Cookie or Remove All Cookies.
              <br /> </li>
                                <li>Safari: Choose Preferences from the Safari menu and click Security. Select Never, Always, or Only from sites you navigate to, to set your preferences at the level you desire. To see the cookies stored on your computer, click Show Cookies. From here you have the option to remove one or two cookies or all cookies.</li>
                            </ul>
                            <p>
                            </p></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
