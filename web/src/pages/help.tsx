import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/App.css";

export default function Help() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <section className="text-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              Moitabank Support
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Optio maiores eligendi molestiae totam dolores similique?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Modi dolorem veritatis culpa quos consequuntur beatae itaque
                  excepturi perspiciatis?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    aspernatur quae, eos explicabo odit minima libero veniam
                    similique quibusdam doloribus facilis ipsa accusantium vel
                    maiores corrupti! Libero voluptate a doloribus?
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Magni reprehenderit possimus debitis?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    voluptates aspernatur dolores in consequatur doloremque
                    inventore reprehenderit, consequuntur perspiciatis
                    architecto.
                  </p>
                  <p>
                    Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                    veritatis velit quasi cupiditate unde eaque! Iure,
                    voluptatibus autem eaque unde possimus quae.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
