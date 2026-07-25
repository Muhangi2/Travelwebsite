import SEO from '@/components/SEO'
import KnowBeforeHero from '@/components/know-before/KnowBeforeHero'
import KnowBeforeNav from '@/components/know-before/KnowBeforeNav'
import PolicyBlock from '@/components/know-before/PolicyBlock'
import PricingPayments from '@/components/know-before/PricingPayments'
import CancellationPolicy from '@/components/know-before/CancellationPolicy'
import BookingTerms from '@/components/know-before/BookingTerms'
import TippingBanner from '@/components/know-before/TippingBanner'
import PackingItems from '@/components/know-before/PackingItems'
import KeepMyGreen from '@/components/know-before/KeepMyGreen'
import SafariFaq from '@/components/know-before/SafariFaq'
import { safariFaqs } from '@/data/safariFaq'
import { buildFaqSchema } from '@/lib/schema'

export default function KnowBeforeYouGo() {
  return (
    <>
      <SEO
        title="Know Before You Go Safari Guide & Packing List"
        description="Everything you need to know before your East Africa safari visa requirements, health advice, packing list, cancellation policy and booking terms from Still Wild Safaris."
        url="/know-before-you-go"
        jsonLd={buildFaqSchema(safariFaqs)}
      />
      <KnowBeforeHero />
      <KnowBeforeNav />

      {/* Safari Pricing & Payments */}
      <PricingPayments />

      {/* Payment Policy */}
      <PolicyBlock
        title="Payment Policy"
        body={
          <p>
            A <span className="font-semibold">50% deposit</span> is required to confirm your booking and secure
            your dates. The <span className="font-semibold">full balance is due 45 days</span> before the departure
            date. Please note that permits (e.g., Gorilla/Chimpanzee) and international/domestic flights must be paid{' '}
            <span className="font-semibold">100% upfront</span> at the time of booking due to third-party requirements.
          </p>
        }
        image="/images/parks/uganda/murchison-falls/dsc-6951.jpg"
      />

      {/* Cancellation Policy */}
      <CancellationPolicy />

      {/* Booking Terms */}
      <BookingTerms />

      {/* Visa and Entry Requirements */}
      <PolicyBlock
        id="visa"
        title="Visa and Entry Requirements for East Africa"
        body={
          <p>
            Most visitors require a visa for entry into Uganda and Rwanda. The{' '}
            <span className="font-semibold">East African Tourist Visa (EATV)</span> is highly recommended as it
            covers Uganda, Rwanda, and Kenya. Please check the latest requirements with your local embassy well in
            advance of your travel date. Your passport must be valid for at least{' '}
            <span className="font-semibold">six months</span> beyond your intended departure date.
          </p>
        }
        image="/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg"
      />

      {/* Health & Vaccinations */}
      <PolicyBlock
        title="Health (Vaccinations)"
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
