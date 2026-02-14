import SEO from '../components/SEO';

const ShippingPage = () => {
  return (
    <>
      <SEO
        title="Shipping & Returns Policy"
        description="Learn about Purest Peptides shipping options, processing times, return policy, and refund procedures for research peptide orders."
        canonicalUrl="https://purestpeptides.com/shipping"
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              Policies
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Shipping & Returns
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Everything you need to know about shipping, delivery, returns, and
              refunds for research peptide orders.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Shipping Information */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Shipping Information
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <h3 className="font-semibold text-navy-900 text-lg">
                Processing Time
              </h3>
              <p>
                Orders are processed within 1-2 business days after payment
                confirmation. Orders placed on weekends or holidays will be
                processed on the next business day. You will receive a shipping
                confirmation email with tracking information once your order has
                shipped.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Domestic Shipping (United States)
              </h3>
              <div className="bg-slate-50 rounded-2xl p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 text-navy-900 font-semibold">
                        Shipping Method
                      </th>
                      <th className="text-left py-3 text-navy-900 font-semibold">
                        Estimated Delivery
                      </th>
                      <th className="text-left py-3 text-navy-900 font-semibold">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Standard Shipping</td>
                      <td className="py-3">5-7 business days</td>
                      <td className="py-3">$9.95</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Priority Shipping</td>
                      <td className="py-3">2-3 business days</td>
                      <td className="py-3">$14.95</td>
                    </tr>
                    <tr>
                      <td className="py-3">Express Shipping</td>
                      <td className="py-3">1-2 business days</td>
                      <td className="py-3">$24.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500">
                Free standard shipping on orders over $150. Delivery times are
                estimates and may vary based on carrier conditions and location.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                International Shipping
              </h3>
              <p>
                We currently ship to select international destinations.
                International shipping rates and delivery times vary by location.
                Please note that international orders may be subject to customs
                duties, taxes, and fees imposed by the destination country. These
                charges are the responsibility of the recipient.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Packaging & Handling
              </h3>
              <p>
                All peptide products are shipped with appropriate cold chain
                packaging when required to maintain product integrity. Orders are
                discreetly packaged with no external indication of contents.
                Lyophilized peptides are shipped with desiccant packs to protect
                against moisture.
              </p>
            </div>
          </div>

          {/* Returns Policy */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-navy-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Returns Policy
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We stand behind the quality of our research peptides. If you are
                not satisfied with your purchase, we offer returns under the
                following conditions:
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Eligibility for Returns
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Returns must be initiated within 30 days of delivery date
                </li>
                <li>
                  Products must be unopened, unused, and in original packaging
                </li>
                <li>
                  Products must be stored according to specified storage
                  conditions
                </li>
                <li>
                  Proof of purchase (order confirmation or receipt) is required
                </li>
              </ul>

              <h3 className="font-semibold text-navy-900 text-lg">
                Non-Returnable Items
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opened or partially used products</li>
                <li>Products that have been reconstituted</li>
                <li>Products not stored according to specified conditions</li>
                <li>Products purchased more than 30 days prior</li>
                <li>Clearance or final sale items</li>
              </ul>

              <h3 className="font-semibold text-navy-900 text-lg">
                How to Initiate a Return
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Contact our customer service team at{' '}
                  <a
                    href="mailto:returns@purestpeptides.com"
                    className="text-teal-600 hover:text-teal-700"
                  >
                    returns@purestpeptides.com
                  </a>{' '}
                  with your order number and reason for return
                </li>
                <li>
                  Receive a Return Merchandise Authorization (RMA) number and
                  return shipping instructions
                </li>
                <li>
                  Package items securely in original packaging with the RMA
                  number clearly marked
                </li>
                <li>Ship the package to the provided return address</li>
                <li>
                  Once received and inspected, refunds will be processed within
                  5-7 business days
                </li>
              </ol>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> Return shipping costs are the
                  responsibility of the customer unless the return is due to our
                  error or a defective product. We recommend using a trackable
                  shipping method for returns.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Refund Policy
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <h3 className="font-semibold text-navy-900 text-lg">
                Refund Processing
              </h3>
              <p>
                Once we receive and inspect your returned items, we will notify
                you of the approval or rejection of your refund. If approved,
                your refund will be processed within 5-7 business days to your
                original payment method.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Refund Options
              </h3>
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Full Refund</h4>
                    <p className="text-sm">
                      Available for unopened products returned within 30 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Store Credit</h4>
                    <p className="text-sm">
                      110% store credit option available for faster processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Exchange</h4>
                    <p className="text-sm">
                      Exchange for a different product of equal or lesser value
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-navy-900 text-lg">
                Damaged or Defective Products
              </h3>
              <p>
                If you receive a damaged or defective product, please contact us
                immediately at{' '}
                <a
                  href="mailto:support@purestpeptides.com"
                  className="text-teal-600 hover:text-teal-700"
                >
                  support@purestpeptides.com
                </a>{' '}
                with photos of the damage and your order number. We will arrange
                for a replacement or full refund at no additional cost to you,
                including return shipping.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Lost or Missing Packages
              </h3>
              <p>
                If your package is lost in transit or shows as delivered but was
                not received, please contact us within 7 days of the expected
                delivery date. We will work with the carrier to locate your
                package or arrange for a replacement shipment.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl text-navy-900 mb-4">
              Questions About Your Order?
            </h2>
            <p className="text-slate-600 mb-6">
              Our customer service team is here to help with any shipping or
              return inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@purestpeptides.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-900 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                support@purestpeptides.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-slate-100 rounded-xl">
            <p className="text-sm text-slate-500 text-center">
              <strong>Research Use Only:</strong> All products are sold for
              laboratory research purposes only. Not for human consumption.
              Shipping policies apply to qualifying research institutions and
              verified researchers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingPage;
