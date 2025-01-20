import Heading from "./Heading";
import Section from "./Section";


const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <div class="sketchfab-embed-wrapper">
                <iframe title="E12" class="absolute inset-0 h-full w-full object-cover" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/b4c96cbfecf648b3a2fbf822df4ba37f/embed"></iframe>
              </div>
            </div>
            <div class="lg:py-24">
              <h2 class="text-3xl font-extrabold sm:text-4xl text-n-8">E12</h2>
              <p class="mt-4 text-gray-600">View 3-D Model of E12 First by IIT Bombay Racing</p>
              <a href="https://sketchfab.com/3d-models/e12-first-b4c96cbfecf648b3a2fbf822df4ba37f" target="_blank" rel="noopener noreferrer" class="mt-8 inline-block rounded bg-[#166db4] px-12 py-3 text-sm font-medium text-white transition hover:bg-n-5 focus:outline-none focus:ring focus:ring-yellow-400">
                Check out!
              </a>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Services;
