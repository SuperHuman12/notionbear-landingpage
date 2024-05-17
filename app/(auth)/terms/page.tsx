import Link from 'next/link';
import Image from 'next/image'


export const metadata = {
  title: 'Migrate to NotionBear',
  description: 'Migrate your helpdesk, blog, or even marketplace to notionbear. Start living a hassle free life just SET and FORGET.',
  openGraph: {
    images: [
        {
            url: "/images/meta-image.png",
            width: 1200,
            height: 630,
            alt: "Create a Marketplace with Notion",
        },
    ],
},
twitter: {
    card: "summary_large_image",
    images: [
        {
            url: "/images/meta-image.png",
            alt: "Create a Marketplace with Notion",
        },
    ],
},
}

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-18 md:pb-20">

          {/* Page header */}

            <div className="w-full px-8 sm:px-0 py-16 m-auto !prose">
                <main className="notion">
                    <h1 className="h1">
                        <span><span>Terms and Conditions</span></span>
                    </h1>
                    <p className="text gray">
                        <span><span>Last updated January 10, 2022</span></span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="mb-8">
                        <span>
                            <b><span>AGREEMENT TO TERMS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and&nbsp;Malai Tikka Labs LLC, doing business as NotionBear&nbsp;("NotionBear", “</span>
                            <b><span>we</span></b><span>”, “</span><b><span>us</span></b><span>”, or “</span><b><span>our</span></b><span>”), concerning your access to and use of the&nbsp;</span>
                            <a target="_blank" href="https://www.notionbear.com/" className="link"><span>https://www.notionbear.com</span></a>
                            <span>
                                &nbsp;website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you
                                have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST&nbsp;DISCONTINUE USE
                                IMMEDIATELY.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or
                                modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of
                                each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes
                                in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would
                                subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for
                                compliance with local laws, if and to the extent local laws are applicable.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions
                                would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or&nbsp;register for the Site.</span></span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>INTELLECTUAL PROPERTY RIGHTS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the
                                “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual
                                property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal
                                use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated,
                                transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely
                                for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>USER REPRESENTATIONS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                By using the Site, you represent and warrant that:&nbsp;(1)&nbsp;all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly
                                update such registration information&nbsp;as necessary;&nbsp;(3) you have the legal capacity and you agree to comply with these Terms of Use;&nbsp;(4) you are not a minor in the jurisdiction in which you reside;&nbsp;(5)
                                you will not access the Site through automated or non-human means, whether through a bot, script or otherwise;&nbsp;(6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will
                                not violate any applicable law or regulation.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion
                                thereof).
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>USER REGISTRATION</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username
                                you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable. The same applies for project names.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>FEES AND PAYMENT</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span><span>We accept the following forms of payment:</span></span>
                    </p>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>Visa</span></span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>Mastercard</span></span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>American Express</span></span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>PayPal</span></span>
                        </li>
                        
                    </ul>
                    <div className="blank">&nbsp;</div>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You may be required to purchase or pay a fee to access some of our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to
                                promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. We bill you through an
                                online billing account for purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in&nbsp;U.S. dollars.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon making your purchase.&nbsp;If&nbsp;your purchase
                                is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you notify us of your cancellation.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Site.</span></span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h3 className="h4 my-2">
                        <span>
                            <b><span>MONTHLY SUBSCRIPTION</span></b>
                        </span>
                    </h3>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                If you have chosen a monthly term, your NotionBear subscription will continue month-to-month unless and until you cancel or we terminate it. You must cancel your subscription before it renews each month in order to avoid
                                billing of the next month’s subscription fees. Monthly renewals occur on the month anniversary of your initial purchase date. We will bill the monthly fee to the Payment Method you provide to us during registration or in
                                your account settings. Subscription fees are fully earned upon payment.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>With a monthly subscription, your license to use NotionBear will be extended monthly, and is valid for one whole month (for example July 14, 2019 until August 14, 2019).</span></span>
                    </p>
                    <h3 className="h4 my-2">
                        <span><span>YEARLY SUBSCRIPTION</span></span>
                    </h3>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                If you have chosen a yearly term, your NotionBear subscription will continue year-to-year unless and until you cancel or we terminate it. You must cancel your subscription before it renews each year in order to avoid
                                billing of the next year’s subscription fees. Yearly renewals occur on the anniversary (month and day) of your initial purchase date. We will bill the yearly membership fee to the Payment Method you provide to us during
                                registration or in your account settings. Subscription fees are fully earned upon payment.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>With a yearly subscription, your license will be extended yearly, and is valid for the year you paid for (for example July 14, 2019 until July 14, 2020).</span></span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>CANCELLATION</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                All purchases are non-refundable.&nbsp;You can cancel your subscription at any time in your user account under your account settings or&nbsp;by contacting us using the contact&nbsp;information provided below. Your
                                cancellation will take effect at the end of the current paid term.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>If you are unsatisfied with our services, please email us at&nbsp;vaibhav@notionbear.com</span></span>
                    </p>
                    <h2 className="h4 my-2">
                        <span><span>LICENSE</span></span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span><span> LLC grants you a revocable, non-exclusive, non-transferable, limited license to use the Application strictly in accordance with the terms of this Agreement. </span></span>
                    </p>
                    <h2 className="h4 my-2">
                        <span><span>RESTRICTIONS</span></span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span><span>You agree not to, and you will not permit others to:</span></span>
                    </p>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>license, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Application or make the Application available to any third party.</span></span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the Application.</span></span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span><span>remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Malai Tikka Labs LLC or its affiliates, partners, suppliers or the licensors of the Application.</span></span>
                        </li>
                        
                    </ul>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span><span>FAIR USE POLICY</span></span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span><span>Customers of Malai Tikka Labs need to adhere the following fair use policy:</span></span>
                    </p>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <span>
                                    Email contact integration: Customers can use NotionBear’s email contact form integration to receive their customers support tickets send via email. This email contact integration has a limit of 1000 emails per month
                                    sent as a regular customer and 500 emails sent per month as an NGO customer. Exceeding the limit will require upgrading to an enterprise plan.
                                </span>
                            </span>
                        </li>
                        
                    </ul>
                    <h2 className="h4 my-2">
                        <span><span>YOUR SUGGESTIONS</span></span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Any feedback, comments, ideas, improvements or suggestions (collectively, "Suggestions") provided by you to Malai Tikka Labs LLC with respect to the Application shall remain the sole and exclusive property of Malai
                                Tikka Labs LLC shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>PROHIBITED ACTIVITIES</span></b><span></span>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or
                                approved by us.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>As a user of the Site, you agree not to:</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>1.&nbsp;&nbsp;Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                2.&nbsp;&nbsp;Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by
                                automated means or under false pretenses.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>3.&nbsp;&nbsp;Use a buying agent or purchasing agent to make purchases on the Site.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>4.&nbsp;&nbsp;Use the Site to advertise or offer to sell goods and services.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                5.&nbsp;&nbsp;Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the
                                Site and/or the Content contained therein.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>6.&nbsp;&nbsp;Engage in unauthorized framing of or linking to the Site.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>7.&nbsp;&nbsp;Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>8.&nbsp;&nbsp;Make improper use of our support services or submit false reports of abuse or misconduct.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>9.&nbsp;&nbsp;Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>10.&nbsp;&nbsp;Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>11.&nbsp;&nbsp;Attempt to impersonate another user or person or use the username of another user.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>12.&nbsp;&nbsp;Sell or otherwise transfer your profile.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>13.&nbsp;&nbsp;Use any information obtained from the Site in order to harass, abuse, or harm another person.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>14.&nbsp;&nbsp;Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>15.&nbsp;&nbsp;Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>16.&nbsp;&nbsp;Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>17.&nbsp;&nbsp;Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>18.&nbsp;&nbsp;Delete the copyright or other proprietary rights notice from any Content.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>19.&nbsp;&nbsp;Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                20.&nbsp;&nbsp;Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that
                                interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                21.&nbsp;&nbsp;Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics
                                interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                22.&nbsp;&nbsp;Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility,
                                scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>23.&nbsp;&nbsp;Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>24.&nbsp;&nbsp;Use the Site in a manner inconsistent with any applicable laws or regulations.</span></span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>USER GENERATED CONTRIBUTIONS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                The Site offers users to create and submit knowledge base websites and embeddable widgets. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast
                                content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively,
                                "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you
                                create or make available any Contributions, you thereby represent and warrant that:
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                1. &nbsp;The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not
                                limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                2. &nbsp;You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any
                                manner contemplated by the Site and these Terms of Use.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                3. &nbsp;You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person
                                to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.
                            </span>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>4. &nbsp;Your Contributions are not false, inaccurate, or misleading.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>5. &nbsp;Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>6. &nbsp;Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>7. &nbsp;Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>8. &nbsp;Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>9. &nbsp;Your Contributions do not violate any applicable law, regulation, or rule.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>10. Your Contributions do not violate the privacy or publicity rights of any third party.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>11. &nbsp;Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>12. &nbsp;Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>13. &nbsp;Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>14. &nbsp;Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span><span>Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.</span></span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>CONTRIBUTION LICENSE</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).By submitting
                                suggestions or other feedback regarding the Site, you agree that we can use and share &nbsp;such feedback for any purpose without compensation to you.We do not assert any ownership over your Contributions. You retain
                                full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your
                                Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal
                                action against us regarding your Contributions.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>SOCIAL MEDIA</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party
                                Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent
                                and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your
                                use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us
                                access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the “Social Network
                                Content”) so that it is available on and through the Site via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the
                                extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts,
                                personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable
                                or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the
                                connection between your account on the Site and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED
                                SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and
                                we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or
                                tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by
                                contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account,
                                except the username and profile picture that become associated with your account.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>SUBMISSIONS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property.
                                We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without
                                acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such
                                Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>THIRD-PARTY WEBSITES AND CONTENT</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications,
                                software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy,
                                appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the
                                content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or
                                installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any
                                Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any
                                website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies,
                                and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered
                                on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you
                                relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>U.S. GOVERNMENT RIGHTS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Our services are “commercial items” as defined in Federal Acquisition Regulation (“FAR”) 2.101. If our services are acquired by or on behalf of any agency not within the Department of Defense (“DOD”), our services are
                                subject to the terms of these Terms of Use in accordance with FAR 12.212 (for computer software) and FAR 12.211 (for technical data). If our services are acquired by or on behalf of any agency within the Department of
                                Defense, our services are subject to the terms of these Terms of Use in accordance with Defense Federal Acquisition Regulation (“DFARS”) 227.7202‑3. In addition, DFARS 252.227‑7015 applies to technical data acquired by
                                the DOD. This U.S. Government Rights clause is in lieu of, and supersedes, any other FAR, DFARS, or other clause or provision that addresses government rights in computer software or technical data under these Terms of
                                Use.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>SITE MANAGEMENT</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms
                                of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the
                                extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and
                                content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the
                                Site.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>PRIVACY POLICY</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>We care about data privacy and security. Please review our Privacy Policy:&nbsp;</span><a target="_blank" href="https://www.notionbear.com/privacy" className="link"><span>https://www.notionbear.com/privacy</span></a>
                            <span>. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use.</span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>TERM AND TERMINATION</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
                                LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
                                CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE&nbsp;YOUR&nbsp;ACCOUNT AND&nbsp;ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
                                TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.&nbsp;If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the
                                name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation
                                pursuing civil, criminal, and injunctive redress.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>MODIFICATIONS AND INTERRUPTIONS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We
                                also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the
                                Site. &nbsp;We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or
                                errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss,
                                damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the
                                Site or to supply any corrections, updates, or releases in connection therewith.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>GOVERNING LAW</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span><span>These Terms shall be governed and construed in accordance with the laws of Wyoming, United States, without regard to its conflict of law provisions.</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
                                these Terms will remain in effect.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>DISPUTE RESOLUTION</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>The European Commission provides an online dispute resolution platform, which you can access here:&nbsp;</span>
                            <a target="_blank" href="https://ec.europa.eu/consumers/odr" className="link"><span>https://ec.europa.eu/consumers/odr</span></a>
                            <span>. If you would like to bring this subject to our attention, please contact us.</span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>CORRECTIONS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any
                                errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>DISCLAIMER</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                                IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                                REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES
                                OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
                                ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO
                                OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                                OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
                                WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS
                                OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.THIS WEBSITE IS NOT IS NOT AFFILIATED WITH
                                APPLE INC. OR GOOGLE, LLC IN ANY WAY.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>LIMITATIONS OF LIABILITY</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                IN&nbsp;NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT,
                                LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&nbsp;NOTWITHSTANDING&nbsp;ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                                LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO&nbsp;THE AMOUNT PAID,&nbsp;IF ANY, BY YOU TO US&nbsp;DURING THE&nbsp;SIX (6)&nbsp;MONTH PERIOD PRIOR TO
                                ANY CAUSE OF ACTION ARISING.&nbsp;CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF
                                THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>INDEMNIFICATION</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or
                                demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of:&nbsp;(1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and
                                warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site
                                with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you
                                agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of
                                it.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>USER DATA</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data,
                                you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data,
                                and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                Visiting&nbsp;the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and
                                other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                                ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes,
                                regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than
                                electronic means.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>CALIFORNIA USERS AND RESIDENTS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market
                                Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span><span>AFFILIATE PROGRAM TERMS OF SERVICE</span></span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>There are a few rules about our affiliate program you should know about. No “gotchas” here, just some terms to keep everyone happy. We are using </span>
                            <a target="_blank" href="https://tolt.io" className="link"><span>tolt.io</span></a>
                            <span> as our affiliate program provider. If you signup for our affiliate program you also agree to their terms and privacy policy. </span>
                        </span>
                    </p>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>Self-referrals are not allowed (i.e. signing up for NotionBear through your own affiliate link)</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>Abuse, gaming, or attempting to mislead (i.e. posting fake discounts to coupon-sharing websites) will result in your account being permanently banned.</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>No search engine ads (especially on branded terms or domain names), Facebook ads or other ads that would compete with our own marketing and cause potential confusion for customers.</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>No Facebook ads that link to our website or anything similar that would compete with our own paid marketing and drive up our costs and potentially cause confusion.</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>No pretending to be acting on behalf of us (ie. as an employee).</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>Listing NotionBear on discount or offer websites with your code will lead to a suspension of your account.</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b>
                                    <span>
                                        In some cases, we can give credit to an affiliate even if the customer didn’t sign up through an affiliate link or coupon code. If you have a case like this, please contact us and we’ll do our best to help.
                                    </span>
                                </b>
                            </span>
                        </li>
                        
                    </ul>
                    <ul className="list list-disc my-2">
                        <li>
                            <span>
                                <b><span>We reserve the right to change the Terms of Service for our affiliate program at any time.</span></b>
                            </span>
                        </li>
                        
                    </ul>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                If you do not comply with our terms of service for the affiliate program, we reserve the right to immediately remove you from the program without notice, withhold any remaining commissions, and prohibit you from
                                participating in the program indefinitely.
                            </span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>MISCELLANEOUS</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>
                                These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right
                                or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to
                                others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is
                                determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions.
                                There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against
                                us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
                            </span>
                        </span>
                    </p>
                    <h2 className="h4 my-2">
                        <span>
                            <b><span>CONTACT US</span></b>
                        </span>
                    </h2>
                    <p className="text-gray-600 my-2">
                        <span><span>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</span></span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <b><span>Malai Tikka Labs LLC</span></b>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <b><span>Kohat Enclave, Delhi, India 110033</span></b>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <b><span>Phone:&nbsp;+919711269346</span></b>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <b><span>hey@vaibhavkalra.com</span></b>
                        </span>
                    </p>
                    <p className="text-gray-600 my-2">
                        <span>
                            <span>These terms of use were created using&nbsp;</span>
                            <a target="_blank" href="https://termly.io/products/terms-and-conditions-generator/?ftseo" className="link"><span>Termly’s Terms and Conditions Generator</span></a><span>.</span>
                        </span>
                    </p>
                    <div className="blank">&nbsp;</div>
                </main>
            </div>


        </div>
      </div>
    </section>
  )
}
