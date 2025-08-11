import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Global Foods Inc.",
      photo:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDr0h8erjxRpuEfvC9Pyz3IY3yqv_c9-66w0s7uv1JLOPOgWqhzm-yDrvkrucMnA3XGAAYK-J026INSK6YER2PFxRMN8__MZpQbpPqJAb_i-FOZuLnJJhMtr1SdsagCcOrrin54NSFYYgGdPVf8hlqiHGn_UteYE7E9DwskN1OACBGOTNriZ9yJB5AtNxYRzky4Zl6DK3F_iMoW7L1Pb_1tHOS2TBuj_5MrhdKUiyV8ubM3mdluo5iTCec5ByzHTedjFPbEx-OmVgT2",
      quote:
        "Velaris has been an invaluable partner. Their commitment to quality and ethical sourcing is unmatched. The cashews we receive are consistently excellent, and their team is a pleasure to work with.",
    },
    {
      name: "Jane Smith",
      title: "Procurement Manager, Healthy Snacks Co.",
      photo:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCuhuATdKuty7CC9B_353sURqU75q8eBVSCrLLCdev9BXpijxF8gl4Xdkdmn0pJd5d87wVpKfY3RjTO0GGXX3F7nkUAcH-bSt1CrhHy9YvlKIgc5Jj7ly8bFmrb57izhs8Gye2jKiAKdjJNVihvSBPwqP0OhstjnLom3NKZki-e_OIUYNtb_aEsWd8x2iyCnyNcs1AuyZwJ5pmDGyJ9ooZDExtjhKxYvKD7jswy5htJMOM4kPEXclL5bJTreWVJyK5Pnmwm3sIXT_do",
      quote:
        "We have been sourcing our cashews from Velaris for over three years, and we couldn't be happier. Their supply chain is reliable, and they always deliver on their promises. Highly recommended.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold uppercase tracking-wider text-[var(--primary-500)]">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--neutral-900)] sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-[var(--neutral-50)] p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  alt="Client photo"
                  className="h-14 w-14 rounded-full object-cover"
                  src={testimonial.photo}
                  width={56}
                  height={56}
                />
                <div>
                  <p className="text-base font-semibold text-[var(--neutral-900)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <blockquote className="mt-6 text-lg text-[var(--neutral-700)]">
                <p>"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
