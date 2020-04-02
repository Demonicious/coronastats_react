import React from 'react'

export const Sources = (props) => {
    return (
        <div className={"backdrop sourcesDropOpen " + props.showForm}>
            <div className="backdropInnerMain sourcesDropOpenInner">
                <div className="backdropInner">
                    <span onClick={() => props.toggle()} className="backdropCloseIcon sourcesDrop">✕</span>
                    <div className="backdropHeader">What are our sources?</div>
                    <div className="backdropContent">
                        <div className="pagesTexts">
                            <ul className="datasources">
                                <li>World Health Organization (WHO): https://www.who.int/</li>
                                <li>DXY.cn. Pneumonia. 2020. http://3g.dxy.cn/newh5/view/pneumonia.</li>
                                <li>BNO News: https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases/</li>
                                <li>National Health Commission of the People’s Republic of China (NHC): http://www.nhc.gov.cn/xcs/yqtb/list_gzbd.shtml</li>
                                <li>China CDC (CCDC): http://weekly.chinacdc.cn/news/TrackingtheEpidemic.htm</li>
                                <li>Hong Kong Department of Health: https://www.chp.gov.hk/en/features/102465.html</li>
                                <li>Macau Government: https://www.ssm.gov.mo/portal/</li>
                                <li>Taiwan CDC: https://sites.google.com/cdc.gov.tw/2019ncov/taiwan?authuser=0</li>
                                <li>US CDC: https://www.cdc.gov/coronavirus/2019-ncov/index.html</li>
                                <li>Government of Canada: https://www.canada.ca/en/public-health/services/diseases/coronavirus.html</li>
                                <li>Australia Government Department of Health: https://www.health.gov.au/news/coronavirus-update-at-a-glance</li>
                                <li>European Centre for Disease Prevention and Control (ECDC): https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases</li>
                                <li>Ministry of Health Singapore (MOH): https://www.moh.gov.sg/covid-19</li>
                                <li>Italy Ministry of Health: http://www.salute.gov.it/nuovocoronavirus</li>
                                <li>BBC News</li>
                                <li>Japanese Ministry of Health, Labour and Welfare</li>
                                <li>Ministry of Health Singapore</li>
                                <li>Director General of Health Malaysia</li>
                                <li>France 24</li>
                                <li>Worldometers</li>
                                <li>Ministry of Health Bavaria</li>
                                <li>Emirates News Agency</li>
                                <li>Government of Ontario</li>
                                <li>Ministry of Health Vietnam</li>
                                <li>UK government</li>
                                <li>Health Commission of Shanghai</li>
                                <li>Health Commission of Shaanxi</li>
                                <li>Public health Agency of Sweden</li>
                                <li>Fujian Radio &amp; Television Network</li>
                                <li>Weibo</li>
                                <li>Robert Kock Institut</li>
                                <li>MOHW Korea</li>
                                <li>John Hopkins University, Center for Systems Science and Engineering</li>
                                <li>Worldometers</li>
                                <li>BNO News</li>
                                <li>Wikipedia</li>
                                <li>1point3acres</li>
                                <li>US Centers for Disease Control and Prevention</li>
                                <li>Santé Publique France</li>
                                <li>Ministry of Health &amp; Family Welfare of India</li>
                                <li>https://cv.nmhealth.org/</li>
                                <li>https://health.ri.gov/data/covid-19/</li>
                                <li>https://www.healthy.arkansas.gov/programs-services/topics/novel-coronavirus</li>
                                <li>https://coronavirus.dc.gov/page/coronavirus-data</li>
                                <li>https://coronavirus.dc.gov/page/coronavirus-data</li>
                                <li>https://idph.iowa.gov/emerging-health-issues/novel-coronavirus</li>
                                <li>https://chfs.ky.gov/agencies/dph/pages/covid19.aspx</li>
                                <li>https://www.in.gov/coronavirus/</li>
                                <li>https://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html</li>
                                <li>https://scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19/monitoring-testing-covid-19</li>
                                <li>https://portal.ct.gov/Coronavirus</li>
                                <li>https://coronavirus.utah.gov/latest/</li>
                                <li>https://www.ncdhhs.gov/divisions/public-health/coronavirus-disease-2019-covid-19-response-north-carolina</li>
                                <li>https://coronavirus.maryland.gov/</li>
                                <li>http://dpbh.nv.gov/coronavirus/</li>
                                <li>https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html</li>
                                <li>https://www.dhs.wisconsin.gov/outbreaks/index.htm</li>
                                <li>https://odh.ohio.gov/wps/portal/gov/odh/know-our-programs/Novel-Coronavirus/2019-nCoV</li>
                                <li>https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx</li>
                                <li>http://www.vdh.virginia.gov/surveillance-and-investigation/novel-coronavirus/</li>
                                <li>https://www.tn.gov/health/cedep/ncov.html</li>
                                <li>https://www.health.state.mn.us/diseases/coronavirus/situation.html</li>
                                <li>https://www.michigan.gov/coronavirus/</li>
                                <li>https://www.health.pa.gov/topics/disease/Pages/Coronavirus%20Archive.aspx</li>
                                <li>https://www.dshs.state.tx.us/news/updates.shtm#coronavirus</li>
                                <li>http://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus</li>
                                <li>https://dph.georgia.gov/georgia-department-public-health-covid-19-daily-status-report</li>
                                <li>http://ldh.la.gov/Coronavirus/</li>
                                <li>https://docs.google.com/document/d/13bsMNnTb5kilxWJS6OHGNEP6I1HqBaeWLdtSEMVirAE/preview</li>
                                <li>http://www.floridahealth.gov/diseases-and-conditions/COVID-19/</li>
                                <li>https://www.nj.gov/health/</li>
                                <li>https://www.mass.gov/info-details/covid-19-cases-quarantine-and-monitoring</li>
                                <li>https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/nCOV2019.aspx</li>
                                <li>https://www.doh.wa.gov/emergencies/coronavirus</li>
                                <li>https://www.health.ny.gov/diseases/communicable/coronavirus/</li>
                            </ul></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
