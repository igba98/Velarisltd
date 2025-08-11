"use client";

import React, { useEffect, useRef } from "react";
import { useQuoteModal } from "./QuoteModalContext";

export default function QuoteModal() {
  const { isOpen, close } = useQuoteModal();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={close}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          ref={dialogRef}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-200 ease-out"
        >
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                Request a Quote
              </h2>
              <button
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600"
                onClick={close}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-[var(--text-secondary)] mt-2 mb-8">
              Fill out the form below and we'll get back to you with a
              personalized quote.
            </p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-[var(--neutral-300)] focus:ring-[var(--primary-700)] focus:border-[var(--primary-700)] bg-[var(--neutral-100)] h-12 px-4 placeholder:text-gray-400 text-[var(--text-primary)]"
                    id="name"
                    placeholder="e.g. Jane Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-[var(--neutral-300)] focus:ring-[var(--primary-700)] focus:border-[var(--primary-700)] bg-[var(--neutral-100)] h-12 px-4 placeholder:text-gray-400 text-[var(--text-primary)]"
                    id="email"
                    placeholder="e.g. jane.doe@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  htmlFor="company"
                >
                  Company Name
                </label>
                <input
                  className="form-input w-full rounded-lg border-[var(--neutral-300)] focus:ring-[var(--primary-700)] focus:border-[var(--primary-700)] bg-[var(--neutral-100)] h-12 px-4 placeholder:text-gray-400 text-[var(--text-primary)]"
                  id="company"
                  placeholder="e.g. Velaris Inc."
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  htmlFor="product"
                >
                  Product of Interest
                </label>
                <select
                  className="form-select w-full rounded-lg border-[var(--neutral-300)] focus:ring-[var(--primary-700)] focus:border-[var(--primary-700)] bg-[var(--neutral-100)] h-12 px-4 text-[var(--text-primary)]"
                  id="product"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option value="raw_cashew">Raw Cashew Nuts</option>
                  <option value="processed_cashew">
                    Processed Cashew Kernels
                  </option>
                  <option value="cashew_shell_liquid">
                    Cashew Nut Shell Liquid (CNSL)
                  </option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  htmlFor="message"
                >
                  Additional Information
                </label>
                <textarea
                  className="form-textarea w-full rounded-lg border-[var(--neutral-300)] focus:ring-[var(--primary-700)] focus:border-[var(--primary-700)] bg-[var(--neutral-100)] p-4 placeholder:text-gray-400 text-[var(--text-primary)]"
                  id="message"
                  placeholder="Let us know about your quantity requirements, specifications, or any questions you have."
                  rows={4}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center rounded-lg h-12 px-6 bg-[var(--primary-500)] text-white text-base font-bold tracking-wide hover:bg-[var(--primary-600)] transition-colors duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
