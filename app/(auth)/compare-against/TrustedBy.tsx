import Image from 'next/image'

const imageData = [
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3d6d8b9e-51b7-4733-8611-12babc56d8c3/Strapi/w=441.59999999999997,quality=90',
    alt: 'Strapi',
    width: 144,
    height: 42,
  },
  {
    src: 'https://dazzling-cat.netlify.app/tinystartups-gray.png',
    alt: 'Gumroad',
    width: 200,
    height: 34,
  },
  {
    src: 'https://dazzling-cat.netlify.app/remotedesk-gray.png',
    alt: 'Circle',
    width: 120,
    height: 35,
  },
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d4e13333-1551-4114-b1a6-d2a7041c58a4/spline/w=441.59999999999997,quality=90',
    alt: 'Spline',
    width: 144,
    height: 39,
  },
  {
    src: 'https://dazzling-cat.netlify.app/rightagency-gray.png',
    alt: 'Clubhouse',
    width: 192,
    height: 31,
  },
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4f2d2e91-850a-49df-b099-c685aba7c766/browser-company/w=441.59999999999997,quality=90',
    alt: 'Browser Company',
    width: 144,
    height: 73,
  },
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cba078a4-ecf1-4336-97d9-bffabc5fb432/Harmony/w=736,quality=90',
    alt: 'Harmony',
    width: 240,
    height: 48,
  },
];

export default function TrustedBy() {
  return (
    <div>

    <p className="text-center">Trusted by teams</p>

    <div className="flex flex-row flex-wrap max-w-800 gap-4 mx-auto justify-center flex items-center p-6">
        {/* Image 1 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="144"
                height="42"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3d6d8b9e-51b7-4733-8611-12babc56d8c3/Strapi/w=441.59999999999997,quality=90"
            />
        </div>
        {/* Image 2 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="200"
                height="34"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://dazzling-cat.netlify.app/tinystartups-gray.png"
            />
        </div>
        {/* Image 3 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="120"
                height="35"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://dazzling-cat.netlify.app/remotedesk-gray.png"
            />
        </div>
        {/* Image 4 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="144"
                height="39"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d4e13333-1551-4114-b1a6-d2a7041c58a4/spline/w=441.59999999999997,quality=90"
            />
        </div>
        {/* Image 5 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="192"
                height="31"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://dazzling-cat.netlify.app/rightagency-gray.png"
            />
        </div>
        {/* Image 6 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="144"
                height="73"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4f2d2e91-850a-49df-b099-c685aba7c766/browser-company/w=441.59999999999997,quality=90"
            />
        </div>
        {/* Image 7 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <Image
                alt="image"
                loading="lazy"
                width="240"
                height="48"
                decoding="async"
                className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
                unoptimized
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cba078a4-ecf1-4336-97d9-bffabc5fb432/Harmony/w=736,quality=90"
            />
        </div>
    </div>
</div>

  );
}
