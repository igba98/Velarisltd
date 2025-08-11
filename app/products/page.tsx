"use client";

import Image from "next/image";

export default function Products() {
  const cards = [
    {
      title: "Raw Cashew Nuts",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDTQygK8Ix4PPHznTAsmJWCQSCw58tirHh5InhmsT6Ac7hQ2GQrlGlpwMVk1l1qxwtaH_iRFW42yDg8TM4i_SIoouyX9RXsp5mqLoohx8pryIZeNJPNIDKtrCZhsJ8IKgyngv4NGY8lrMw4coAsGrSG4SkL0MAEw6jREba4jcCMi8HqF32bqENuIdGs87yvoLLVk0oCBO_Jwzj6Rtu2j97pnYVJuJCckek_80ANo-FuZa1Mw-f3tvna9HZ3tC5zFozisPyh2OoWUnb",
      desc: "High-quality raw cashew nuts, perfect for processing or direct consumption.",
    },
    {
      title: "Processed Kernels",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO4Tq4-3MmhwKWbFxcJfqqjhw_zbGKQ8zISGiFEYYs1AL3q1hU8aLhk2nzz4eg6A_KquiA-WkSCoNGV8L7DLes1f_zlLgz1tanxI3we7vgowXKdw62gISWcd-EWBpiuM7U5uhJ9ExunN1qzO74UuPewa_ia_wnXezZFNchgPE4tAEtwmWJOV8jyAzN1-XFm17_Abdwr9O7LzBtEbncHiVythSDErMjuTDGLJF1kC7wAa9-QgA8FSlkuOFIXC3oNzEinXDOEg25_Wll",
      desc: "Premium cashew kernels, processed to perfection for a delicious snack.",
    },
    {
      title: "Cashew Nut Shell Liquid",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR9SRla97LElkWFsDxKoa5HARdhaQicZT2NATgCUMu4J-6RMHplcLhMlZWyePYsc6nrxs7-UXdMY64DxsXi7SiYyEzPZxTazZZQOelOA7RvOtU4iljsM9m0ORZrQEkzpkhUhiNveU9CL-VqurVAYL0szRvT9QoW22iOvoTd1UYI-utVTvhRBcDOpRlwGEEW2dQOsq_Ugx2ir6cg4Rp7TpYl2s58l5w73RI4CUZ2mp6EIgRC3M8ODmOWjWfPbHVHUVJVsLgkwljfBss",
      desc: "A versatile by-product with various industrial applications.",
    },
    {
      title: "Cashew By-Products",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhKomvxHrfwm79M_RI-8WarmIR8y5JOEMGcVsXLzjLQZe-NY_LiMBSu15Nj2hPHP_yP6DXu5f-xJ3BTkNlnq0-HPzxJIfbAbYJq-HR808Jf8b54mEJSm0DxKv_nDkPnluI73tw2ySmue0eeyVZb95vO1gjjV9SZLINpQVRLW6pNN2__eHcUtGjvTQbrAwhqIdGbP0s1QKR6uUL_LRimkWGMOs9jjK7FkHlO-LJ0wlzaNFKdp2E08zP58lq9gBYI35T9CfBv703_H-G",
      desc: "Sustainable by-products from cashew processing for various industries.",
    },
  ];

  const details = [
    {
      title: "Raw Cashew Nuts",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuZsgTdk2bH6aQdbczyJPpGIWSyZQgjOhIlQPc0zx4UBugZo9VjnZ5zahH4zNos1o5xEw3jOp7-Ph90axnTJZf2VPFfBtGohRkA9PdtVI79Zaim-bbowRmG95jPylZi5ST8eagG7iegP_pYBJVJbFeI6-ZUWUa124rSukU6kigBLD0gueumsj3poPdIokYB-QUTiIjQcR3vC8IRuAtt8Gmw9S75U7igTiO2F3_ldTAP4bO5srTqCWyiJJcNtLWc_vYhCUTqGUciVV4",
      desc: "Our raw cashew nuts are sourced directly from local farmers in Tanzania, ensuring the highest quality and freshness. These nuts are ideal for processing into kernels or for direct consumption after roasting.",
      reverse: false,
    },
    {
      title: "Processed Cashew Kernels",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdgIFaO9h3ioxnDAIDjhL52G1I81cBjtum4hOXCf9yMKWQD9FPPbtd88O2URfZUwtURU8BMrLS1cKNJyU8kVssuct0rKX6trgXu3eUnpRvcVy4WEOY1bKodWzUu3mBn_04Aux9ueAFjW2umKD-YtkNQXRsQK6JkKzVwgCI87UD6DFiIlevy1lBsrcliqSYNCtcnPyCT9MQVpPuZKo9PSmQ3f7QrzMRL384XATdIHL-2kBS0d27_0wRAPVeEuOqmCoOOw2IrGHpvBLw",
      desc: "Our processed cashew kernels are carefully selected and processed to meet the highest standards. Available in various grades and sizes, these kernels are perfect for snacking, cooking, or as an ingredient in various food products.",
      reverse: true,
    },
    {
      title: "Cashew Nut Shell Liquid (CNSL)",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcOgyoVKMCkKvV0FweV83Aiu5xyDanSENyMWY2-pZllahq5P3WnDEFnoD-wZ7yS82tdtLQVVt11hN-Y_i8vzPOpVok5ALn64wOyeRpdHzzNtmlxV0A-VnUTemVXOIoOFSVFLIPvGziR7maq2JbpstEAOI3SgMSxdw3SGmxH_UrLjnBaYQRAiJKowBXLCNxeaeBQ98wSzAqKkmhMlxyk97WzbprMq6k6d8v2CFRdlLOGkf5fSA1741WHx5tjQ14679waGSHMjc3sBfU",
      desc: "Cashew Nut Shell Liquid (CNSL) is a versatile by-product of cashew processing. It has numerous industrial applications, including the production of resins, friction materials, and surface coatings.",
      reverse: false,
    },
    {
      title: "Cashew Nut By-Products",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-TgJdiVv3p-0eR2OsrJiEinx3Q2LIT7-J3qAWNrM5APasprxOCllbz--LPzOQ3Nai95T5yRTSFnGdHo2etULkEoWL6ptVVO8ijsKeVuDc3WWwNLyAQ78xEUYSO7kN7WcRMxlV0_GCYyQgm2cUmkkjwX0pSCFtoS3d2fvWK7HgcNIArgzW9XwDStU1CN9BQbngNYe7gWvcPptsDzyqhfJPqI6JbgDCHdgHXdgPntjT4r2f48mudtXG-9BuoFvNBi9tHUWVwqtgA3P",
      desc: "We utilize cashew nut by-products in a sustainable manner, creating value-added products for various industries. These by-products include cashew shell cake and other materials used in agriculture and energy production.",
      reverse: true,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <section>
        <div className="max-w-3xl text-center mx-auto mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary-500)] sm:text-5xl">
            Our Premium Cashew Selection
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Explore our range of premium cashew products, sourced directly from
            the heart of Tanzania. Each product is carefully selected and
            processed to ensure the highest quality and freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden text-center"
            >
              <div className="relative w-full h-48">
                <Image
                  alt={c.title}
                  src={c.src}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[var(--neutral-900)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-[var(--neutral-100)]/60 rounded-2xl p-6 sm:p-10">
        <div className="max-w-3xl text-center mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--primary-500)] sm:text-4xl">
            Detailed Specifications
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Discover the specifics of each of our premium products. We pride
            ourselves on transparency and quality.
          </p>
        </div>

        <div className="space-y-16">
          {details.map((d) => (
            <div
              key={d.title}
              className={`flex flex-col items-center gap-8 lg:gap-12 ${
                d.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="relative w-full lg:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  alt={d.title}
                  src={d.src}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-[var(--neutral-900)]">
                  {d.title}
                </h3>
                <p className="mt-4 text-base text-[var(--text-secondary)]">
                  {d.desc}
                </p>
                <button className="mt-6 rounded-full border-2 border-[var(--primary-500)] px-6 py-2 text-base font-bold text-[var(--primary-600)] transition-colors duration-200 hover:bg-[var(--primary-500)] hover:text-white">
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
