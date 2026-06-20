import KnowBeforeHero from '@/components/know-before/KnowBeforeHero'
import PolicyBlock from '@/components/know-before/PolicyBlock'
import PricingPayments from '@/components/know-before/PricingPayments'
import CancellationPolicy from '@/components/know-before/CancellationPolicy'
import BookingTerms from '@/components/know-before/BookingTerms'
import TippingBanner from '@/components/know-before/TippingBanner'
import PackingItems from '@/components/know-before/PackingItems'
import KeepMyGreen from '@/components/know-before/KeepMyGreen'
import SafariFaq from '@/components/know-before/SafariFaq'

export default function KnowBeforeYouGo() {
  return (
    <>
      <KnowBeforeHero />

      {/* Safari Pricing & Payments */}
      <PricingPayments />

      {/* Payment Policy */}
      <PolicyBlock
        title="Payment Policy"
        bg="bg-white"
        body={
          <p>
            A <span className="font-semibold">50% deposit</span> is required to confirm your booking and secure
            your dates. The <span className="font-semibold">full balance is due 45 days</span> before the departure
            date. Please note that permits (e.g., Gorilla/Chimpanzee) and international/domestic flights must be paid{' '}
            <span className="font-semibold">100% upfront</span> at the time of booking due to third-party requirements.
          </p>
        }
        image="/images/parks/uganda/murchison-falls/dsc-6951.jpg"
        imageOnRight
      />

      {/* Cancellation Policy */}
      <CancellationPolicy />

      {/* Booking Terms */}
      <BookingTerms />

      {/* Visa and Entry Requirements */}
      <PolicyBlock
        title="Visa and Entry Requirements for East Africa"
        bg="section-alt"
        body={
          <p>
            Most visitors require a visa for entry into Uganda and Rwanda. The{' '}
            <span className="font-semibold">East African Tourist Visa (EATV)</span> is highly recommended as it
            covers Uganda, Rwanda, and Kenya. Please check the latest requirements with your local embassy well in
            advance of your travel date. Your passport must be valid for at least{' '}
            <span className="font-semibold">six months</span> beyond your intended departure date.
          </p>
        }
        image=""
        centered
      />

      {/* Health & Vaccinations */}
      <PolicyBlock
        title="Health (Vaccinations)"
        bg="bg-white"
        body={
          <p>
            A <span className="font-semibold">Yellow Fever vaccination certificate is mandatory</span> for entry
            into Uganda and Rwanda. Malaria is present in many areas; consult your doctor about appropriate
            prophylaxis. We also recommend routine vaccinations (Tetanus, Hepatitis A &amp; B). We recommend
            visiting a travel health clinic at least 4–6 weeks before departure. Always carry personal medications
            and a basic first-aid kit.
          </p>
        }
        image="/images/parks/uganda/murchison-falls/dsc-7081.jpg"
        imageOnRight={false}
      />

      {/* Packing List */}
      <PackingItems />

      {/* Tipping & Local Etiquette */}
      <TippingBanner />

      {/* Keep My Safari Green */}
      <KeepMyGreen />

      {/* Safari FAQ */}
      <SafariFaq />
    </>
  )
}
