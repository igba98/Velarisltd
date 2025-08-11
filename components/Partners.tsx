import Image from "next/image";

export default function Partners() {
  const partnerLogos = [
    {
      alt: "Partner logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuu3_cbeQtYE4XA70x-qE0LTnrR8DREhT1ZMRqgfky5Zc92n39TLOxPmuYHTHcxOiIAVSEocnvEwxmqVsjUaYHGigfKBg5vDIu19kAiMWdDM5zhCrJPg2wOpjFIFFEdzcITVR8evNGhXwpVJE9ssipaUwNZ8e7kkBRd0B-V8y93PqC68N-A966w7Fbk9KC6X4BWd90HySIrPp9qvs2mM6_LCmoaIIWAoXbIH6ecKAJRApdzygNVsDn0acH1jUe6Q1196pB6MOf3ZcJ",
    },
    {
      alt: "Partner logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMkF4kOBJCBk3urOoIcAGj7-BeH7B5sRxtapS6412wmfaOo0Ff7e-tf3a4Pue1wSLcVb5re231ZmwDnoMJs1Q2RubZtEWzfFiQWUDaBHn3SGNFSBIG0aFq571Y9BFbzHNA_tKQvNxEoXqlcn4jnWqmd5vWSdWvQQyPmf4JzrBhbNHrvt6q6rRkPVE_cDnFXPiTR3kpgnhOmkcogGM5qTsyqk0xeLJV7h_OdcmxWi06UQcONlWdhk0ZpHsUNAl8oeTbUF5DlUV34dL_",
    },
    {
      alt: "Partner logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgJISKQoZiX9APZW0MKgvEE_7Ea76k2_nbVMdq2orYoAmpXhhT_OVx7wB25G4Guu3dy5AeCNkvP5o_-to3d5_F_n9rVhQCbmSN5VXHL1-nn1dmPPFDLd_-rUWjq6eeSwvmFnIsU8wYKypJ8Uho4v8odckzgeQMzMtalmKVf6ZnpdbZ6QOqIyFdPq4sW1rSfzWw_q8vfXgQn8HoV8w7EgnosmPXql0SGPXHiUnQ-4prNlR5osEXzzc0g_qrgbCj-ZoBEgok6d4C5thE",
    },
    {
      alt: "Partner logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE9kotxqTNKIsYxuHogkSOujZf0xpylAgo1jG8_fEuXgM5dnXrh4xmUvmUJa2XZk4dKEJ0H8UcXK4bR25SISLWv68uBXjNezhyZeU9l39eDqi0_S1vBqjXb_fwvzgYYzNtD6o0HHp-Hn22jGLpLGAfQZIZJeS_UorIFXzBODkyamWU3uBeN82O-MDe-v9gEkERw9T6YxiQQiDcWwfy2X8wm61aj45FmnS7SdLoCmcz-ARdHGy4M0Ap2Vo1l9pFIHc-H3Pd-YGu8Unn",
    },
    {
      alt: "Partner logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXHqSEmcF2yAsA6oyKbfRUG7u0VoX23G3vbv3uj8oa1WDgp_f2HbgWuTKp5ImbacusPCEpO7af29zOuKsYy38ZZo3cddXd6ht1quO59twzLs9ESoWdDNtoYujeo9RFdhm8x2eJaLc174TfmxNyGD_JnA9jdYjyhCV_2Q7XQ0kUWwCAfFrmymACIkOWyGBR7fp-hI6GAU94BeaptIiOBZJ8DrORNPlUKFrAlj04riWlVLIP_9Vihdm7xalAg-7_8Xk0hAkaz2RL2TFF",
    },
  ];

  return (
    <section className="bg-[var(--neutral-100)] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold uppercase tracking-wider text-[var(--primary-500)]">
            Our Partners
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--neutral-900)] sm:text-4xl">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-lg text-[var(--neutral-600)]">
            We are proud to collaborate with a diverse range of partners who
            share our commitment to quality and ethical sourcing.
          </p>
        </div>
        <div className="mt-12">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {partnerLogos.map((partner, index) => (
              <Image
                key={index}
                alt={partner.alt}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                height={48}
                src={partner.src}
                width={158}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
