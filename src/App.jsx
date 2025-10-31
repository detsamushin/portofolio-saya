import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Every line tells a story, every color carries a purpose.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I am Tama</h1>
          <p className="text-base/loose mb-6 opacity-50">
            I’m a visual creator passionate about design, illustration,
            photography, and editing. I love turning simple ideas into visuals
            that tell stories, evoke emotion, and connect with people. Every
            project I work on is an exploration of creativity and meaning.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-file-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              My Project <i className="ri-arrow-down-s-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInDown animate__delay-1s"
          loading="lazy"
        />
      </div>

      {/* abotMe section */}
      <div className="mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            I’m a visual designer with a deep passion for turning ideas into
            meaningful visuals. Over the years, I’ve worked on various creative
            projects ranging from logo design, social media feeds, banners,
            pamphlets, and mascots, to comic illustrations, video editing, and
            graduation photography. For me, design is more than just aesthetics
          </p>
          <p className="text-base/loose mb-10">
            — it’s about how visuals can communicate emotions and tell stories.
            I enjoy exploring different mediums to bring concepts to life,
            whether through a character illustration, a visual campaign, or a
            single photograph that captures a moment perfectly. I’m constantly
            inspired by how creativity connects people and shapes perception.
            Each project I handle is a new opportunity to learn, experiment, and
            grow as a designer.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
              </div>
              <p>Project Completed</p>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
              </div>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        {/* tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools
          </h1>
          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Tools that I use
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          This is My Project
        </p>
        <div className="project-box mt-14 grid-cols-3">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      {/* project */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Contact Me
        </p>
        <form
          action="https://formsubmit.co/adityatama811@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Input Your Name"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Input Your Email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Massage
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols={45}
                rows={7}
                placeholder="Massage..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Send Massage
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  );
}

export default App;
