import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
const Subscribe = () => {    
    return(
        <>  
            <section className="flex flex-col justify-center items-center h-[50vh]">
                <div className="mt-4">
                    <h1 className=" flex lg:text-4xl drop-shadow-xl text-center mt-20 text-2xl ">
                        Subscribe
                    </h1>
                </div>
                <div className="flex mx-auto mt-17 border border-white rounded-2xl lg:w-[40em] md:w-[30rem] w-80 shadow-xl">
                    <div className="w-full relative flex items-center justify-center rounded-2xl">
                        <div
                            className="py-4 w-full px-4 flex flex-col items-center justify-center relative z-40 rounded-2xl text-black">
                            <p className="text-base leading-normal text-center ">
                                Subscribe to your newsletter to stay in the loop. Our newsletter
                                is sent once in a week on every friday so subscribe to get
                                latest news and updates.
                            </p>
                            <iframe id="invisible" name="invisible" className="hidden"></iframe>
                            <form onInvalid={()=>toast.error("Granko")} onSubmit={() => toast.success("Thanks for subscribing")} className="border border-white flex flex-col items-center w-full mt-6 space-y-0 "
                                action="https://assets.mailerlite.com/jsonp/395251/forms/84841814525216393/subscribe"
                                method="post"
                                target="invisible"
                                data-code=""
                            >
                                <div className="ml-form-formContent">
                                    <div className="ml-form-fieldRow ml-last-item">
                                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                            <input required="required" id="newsletter" aria-label="email" aria-required="true" type="email" className="border rounded-2xl border-transparent text-base w-full mb-5 font-medium leading-none  p-4 focus:outline-none bg-transparent placeholder-black" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email" aria-invalid="false"/>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="ml-submit" value="1" aria-invalid="false"/>
                                <div className="ml-form-embedSubmit">
                                    <button className="btn btn-primary px-12">Submit</button>
                                    <button disabled="disabled" type="button" className="loading">
                                        <div className="ml-form-embedSubmitLoad"></div>
                                        <span className="sr-only">Loading...</span>
                                    </button>
                                </div>
                                <input type="hidden" name="anticsrf" value="true" aria-invalid="false"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Subscribe