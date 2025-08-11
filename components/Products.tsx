import React from "react";
import Head from "next/head";

const Products: React.FC = () => {
  return (
    <>
      <div className="bg-[var(--primary-800)] text-gray-200">
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 ">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-5xl font-extrabold tracking-tighter text-[var(--primary-50)] mb-4">
                    Our Premium Cashew Products
                  </h1>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Discover the exceptional taste and quality of Tanzanian
                    cashews. Each product is carefully selected and prepared to
                    bring you the best nature has to offer.
                  </p>
                </div>
                <div className="space-y-16">
                  <section>
                    <h2 className="text-3xl font-bold text-[var(--primary-100)] border-b-2 border-[var(--primary-200)] pb-4 mb-8">
                      Raw Cashew Kernels
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Whole Cashew Kernels"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNJRfx-_GoU_0TxsxFZbxzJ7xiJbEfjKhPC0c8INB7Yv9uoimbrpWVgP5mTn89evBKjWMF6TNsiBagUMSsihvAnMKF1zXzV0PSmNKibso_li5LO78U1fo6YnvzDOMByRVS_MwaVasS7NwNmc13Br00_88SRwBzVQoBkXR_k0wQRiBfFSIv54pVKd45xnZuktDaiKMAVnDnFgXWvy1cIUKF3xRItBb1_J0zkqMElC9dAfGs16WlxGVpxGFqmGr0Z784bw2bffchDkjg"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Whole Kernels
                          </h3>
                          <p className="text-gray-600">
                            Perfect for roasting or adding to your favorite
                            recipes.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Split Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGZwBwls0E88g4U_bCYbbQk-lPIiGEZ1aXWqGjSD_-jtvOtnxu0gH9mJJP4ZX-webOzMGfLj3PxMFdJRJ3thO6iYD1wrEUoly1El9onfTpHWXBBrFcZhJ0iL0nm9hE2odF6Ncyd2ZwNFIynYDpjUfB5QAB4HC1pbHzhdrjSChQp-ZsWzLVNp-B8I6mQ53D0meQ2WmJ02YdfzQzRPf29zGmry88Lqh_8XhbMzfC4i13NC9vs57LCSu1RcqI-sOdDSIhp6pjqteNTWWd"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Splits
                          </h3>
                          <p className="text-gray-600">
                            Ideal for baking and cooking, offering a rich
                            flavor.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Cashew Butts"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-NHtV6VWWpZtedrj7xK4VUMaDFooCxrTCpPnLIK2fHOo-Aa5D7LIaZyvyIeOfFT6e3S21PTeDMnQvJ3Jo6BIWH9UcwZCTrU1pRh3gEz_chXwRJVFQPyKnH0PdbRqh7TSylGPL-WS1bX3bNY6g8CuaSIcOx08ValczHuHHR-DLQpYrtx03pTsGzFv89M8hE0APhBLUM7a3Jpc3zczuPObMpADKpFiw164MIMUFqNqSOLLCfoekhbK8zHuvuM0QIfDboZLp2b5n8mG0"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Butts
                          </h3>
                          <p className="text-gray-600">
                            Great for snacking or as an ingredient in various
                            dishes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <h2 className="text-3xl font-bold text-[var(--primary-100)] border-b-2 border-[var(--primary-200)] pb-4 mb-8">
                      Roasted Cashew Nuts
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Salted Roasted Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCasv7nAwOhmZ2Fc_oLsbmr8fLunrKbz_bgv1I-60K7DRVbcL9i4YjWhAQcbpWVLV8M6sJJ_zNR1WdHf2W6BzO7kwsB05aDkNsZjXF2QYJTKXwexVFRWg8LFJNrKFIUmqG9EMDQemgRgV1oRmJ9OPIwiSZ4DODr8DkVZ9ISuNtfkImcnDFZ3glLgh7HCT4TUDv-E4Snj3WzlvbA5gcQVj28vxR9-inZxp9Ml6qHt6QqaluTDWCCm89oWCoaTRmqkyKDMVTVOw_QmLnz"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Salted
                          </h3>
                          <p className="text-gray-600">
                            Classic salted cashews, roasted to perfection.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Unsalted Roasted Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gNItzGLs6oKYlxW2wIjIe4Mg6E56X2stLix5qCB1D0lTi9Czzf_yz_pVYBqTlvXqpK9wtla0AeeGXGHqVFdcJKLcmNKHemsTkPj7ghj5drRUb9IooXwIbku-xZjXyYpgEfdIcuoe38JWiB_4QZupUp04DxBSGEH6RGqPU1ScQfWw_nUPPuBfrVPQrh122Et7CAG7QNLJx_y4lyUFlONe3NRO83akPmbL4Qu0J9ADapLw4yo7f5clXLR92z4pyJhM-5au6xLZmPDj"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Unsalted
                          </h3>
                          <p className="text-gray-600">
                            Naturally roasted cashews with no added salt.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Honey Roasted Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFilwRDjWpclydx9oYEvKqwlXZfe2Ki4Kae92M7HkvHIxu1FQ6nWhuUjNxRYawCu9sXQra65KqqmBYEcqvEGF8GcIAQr7G68MGoOPvuwMr97kSZ7V1blwaz3SJEzrmmQXZKAb1_qP6AixIG0Qd9BZfogplKV2l8JJKh282prHdkiklUg756kKExVOD3tpsSz1E7J6C3mUViIMUNG4JYLwkwXL2eUZAnsPmb0opdZdAFqK9YP7W0lL69R0zAG5Hxl6lpt_ZgXltiHrV"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Honey Roasted
                          </h3>
                          <p className="text-gray-600">
                            Sweet and savory honey roasted cashews for a
                            delightful treat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <h2 className="text-3xl font-bold text-[var(--primary-100)] border-b-2 border-[var(--primary-200)] pb-4 mb-8">
                      Flavored Cashew Nuts
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Spicy Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD89GBer4v3jWBuCgNXa74JHkGArca2igETScUDzRhnTacRJDSz_FEHeQdh9Cx5hLvL_24helovKTJC9kxuxwzoY2oN6mbZHXWF1ZUSwa9QXnTW2zJUlBkbsUNozWCIxvrN0owyXpUW6Uaoj6Pm3QaRLNxrZlTy1rUbjaAGpyakrQiGDLXL9mz0K90We0pgVK5ExVgEqFHLaUIfs3idPiI9-zEx51v6tBDupr5UXHsN7suYuw2CIcg9x_gzydTeVmWsY918SCc37wSB"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Spicy
                          </h3>
                          <p className="text-gray-600">
                            Cashews with a spicy kick, perfect for those who
                            love heat.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Garlic & Herb Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDziFUzFrnSyojk3RwSAJhJi0vGorXEJpBmFhtozt_DttaKD6wu8B-1PyIVXn-aPEdHlSAJMGhJLzmCz1kWBsRxfhfcFJq1EmFDb_oEAsyM75_l8oPZhU5Z7yN1quxT049sNWaXVQfdYgJzRCjy1KUR24-tWmI93IbXlvH0WhF5_0dqE8PPzKK0vJvTiko00feNitGh_1-tXE6EA5XyLfoxMjIdIK7X_AnKGN0PH5xC1Hi6yYQ-ij8FmD4J5TDxVaaKhir4UYqkCI7k"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Garlic & Herb
                          </h3>
                          <p className="text-gray-600">
                            Savory cashews with a blend of garlic and herbs.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-64">
                          <img
                            alt="Cinnamon Cashews"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-hnp1mEHO6psmDiyWNeOfA6oLlsjXT-wIOekK3xD7n5GalBFN85h0pCbHp809YrlDKLkSQrTWpJAUPgug3BTN4ID6hJBpnZ6Mxahj81QBaeLuhbxrJiiuaeWiPYlzGUgMU1v1kIqSk8Ik_oSgEzIkwzxKGHuv3Ux8Shlgn-lV_ZHve_fY7XalFRYzZbIXC6pH-WdENoMxV1gLsnuk-2uliNUHWJCuK-msonQzaeHuMAtqxpNSXjbRiWioMf1hAgTphNEA9EKaHv1J"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Cinnamon
                          </h3>
                          <p className="text-gray-600">
                            Sweet and aromatic cashews with a hint of cinnamon.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
