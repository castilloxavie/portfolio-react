const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#0F1C2E]">Contact</h1>
        <form action="https://getform.io/f/fc15163e-d62d-41df-8392-f6ca5d386c3e" method="POST">
            <div className="grid md:grid-cols-2 gap-4 w-full py-3">
                <div className="flex  flex-col">
                    <label className="uppercase text-sm p-2" htmlFor="name">full name</label>
                    <input autoComplete="off" className="border-2 p-3 rounded-lg flex border-gray-300" type="text" id="name" name="name" placeholder=" Please enter your full name..."/>
                </div>

                <div className="flex flex-col">
                    <label className="uppercase text-sm p-2" htmlFor="phone">Phone Number</label>
                    <input autoComplete="off" className="border-2 p-3 rounded-lg flex border-gray-300" type="text" id="phone" name="phone" placeholder="enter your phone number please..." />
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm p-2" htmlFor="email">Email</label>
                <input autoComplete="off" className="border-2 p-3 rounded-lg flex border-gray-300" type="email" id="email" name="email" placeholder="enter your email please..." />
            </div>

            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="subject">Subject</label>
                <input autoComplete="off" className="border-2 p-3 rounded-lg flex border-gray-300" type="text" id="subject" name="subject" placeholder="enter your email please..." />
            </div>

            <div className="flex flex-col py-2">
                <label className="uppercase" htmlFor="message">Message</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={10} id="message" name="message" placeholder="enter your email please..."> </textarea>
            </div>
            <button className="bg-[#1f2b3e] text-[#e0e0e0] mt-4 w-full p-4 rounded-lg">
                Send Message
            </button>
        </form>
    </div>
  )
}
export default Contact