import { useTranslation } from "react-i18next"

const Contact = () => {
    const {t} = useTranslation("translation")
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 bg-primaryBg">
        <h1 className="py-4 text-4xl font-bold text-center text-textPrimary">{t("cContact")}</h1>
        <form action="https://getform.io/f/fc15163e-d62d-41df-8392-f6ca5d386c3e" method="POST" className="bg-secondaryBg p-8 rounded-lg shadow-lg border border-borderSubtle">
            <div className="grid md:grid-cols-2 gap-4 w-full py-3">
                <div className="flex flex-col">
                    <label className="uppercase text-sm p-2 text-textPrimary font-semibold" htmlFor="name">{t("cFullName")}</label>
                    <input autoComplete="off" className="border-2 border-accent bg-primaryBg text-textPrimary p-3 rounded-lg focus:outline-none focus:border-accentHover transition-colors placeholder-textSecondary" type="text" id="name" name="name" placeholder=" Please enter your full name..."/>
                </div>

                <div className="flex flex-col">
                    <label className="uppercase text-sm p-2 text-textPrimary font-semibold" htmlFor="phone">{t("cphoneNumber")}</label>
                    <input autoComplete="off" className="border-2 border-accent bg-primaryBg text-textPrimary p-3 rounded-lg focus:outline-none focus:border-accentHover transition-colors placeholder-textSecondary" type="text" id="phone" name="phone" placeholder="enter your phone number please..." />
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm p-2 text-textPrimary font-semibold" htmlFor="email">{t("cEmail")}</label>
                <input autoComplete="off" className="border-2 border-accent bg-primaryBg text-textPrimary p-3 rounded-lg focus:outline-none focus:border-accentHover transition-colors placeholder-textSecondary" type="email" id="email" name="email" placeholder="enter your email please..." />
            </div>

            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 text-textPrimary font-semibold" htmlFor="subject">{t("cSubject")}</label>
                <input autoComplete="off" className="border-2 border-accent bg-primaryBg text-textPrimary p-3 rounded-lg focus:outline-none focus:border-accentHover transition-colors placeholder-textSecondary" type="text" id="subject" name="subject" placeholder="enter your subject please..." />
            </div>

            <div className="flex flex-col py-2">
                <label className="uppercase text-textPrimary font-semibold" htmlFor="message">{t("cMessage")}</label>
                <textarea className="border-2 border-accent rounded-lg p-3 bg-primaryBg text-textPrimary focus:outline-none focus:border-accentHover transition-colors placeholder-textSecondary" rows={10} id="message" name="message" placeholder="enter your message please..."> </textarea>
            </div>
            <button className="bg-accent text-primaryBg mt-4 w-full p-4 rounded-lg font-bold hover:bg-accentHover transition-colors duration-200 shadow-lg hover:shadow-xl">
                {t("cSendMessage")}
            </button>
        </form>
    </div>
  )
}
export default Contact
