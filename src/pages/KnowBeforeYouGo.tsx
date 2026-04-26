import KnowBeforeHero from '@/components/know-before/KnowBeforeHero'
import PolicyBlock from '@/components/know-before/PolicyBlock'
import CancellationPolicy from '@/components/know-before/CancellationPolicy'
import TippingBanner from '@/components/know-before/TippingBanner'
import PackingItems from '@/components/know-before/PackingItems'
import SafariFaq from '@/components/know-before/SafariFaq'

export default function KnowBeforeYouGo() {
  return (
    <>
      <KnowBeforeHero />

      <PolicyBlock
        title="Payment Policy"
        body={
          <p>
            A <span className="font-semibold">**50% deposit**</span> is required to confirm your booking and secure
            your dates. The <span className="font-semibold">**full balance is due 45 days**</span> before the departure
            date. Please note that permits (e.g., Gorilla/Chimpanzee) and international/domestic flights must be paid
            <span className="font-semibold"> **100% upfront**</span> at the time of booking due to third-party
            requirements.
          </p>
        }
        image="https://images.unsplash.com/photo-1452796382428-1a47ddf63bc5?auto=format&fit=crop&w=1200&q=80"
        imageOnRight
      />

      <CancellationPolicy />

      <PolicyBlock
        title="Visa and Entry Requirements for East Africa"
        body={
          <p>
            Most visitors require a visa for entry into Uganda and Rwanda. The{' '}
            <span className="font-semibold">**East African Tourist Visa (EATV)**</span> is highly recommended as it
            covers Uganda, Rwanda, and Kenya. Please check the latest requirements with your local embassy well in
            advance of your travel date. Your passport must be valid for at least{' '}
            <span className="font-semibold">**six months**</span> beyond your intended departure date.
          </p>
        }
        image=""
        centered
      />

      <TippingBanner />

      <PolicyBlock
        title="Health (Vaccinations)"
        body={
          <p>
            A <span className="font-semibold">**Yellow Fever vaccination certificate is mandatory**</span> for entry
            into Uganda and Rwanda. Malaria is present in many areas; consult your doctor about appropriate
            prophylaxis. We also recommend routine vaccinations (Tetanus, Hepatitis A &amp; B). Always carry personal
            medications and a basic first-aid kit.
          </p>
        }
        image="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80"
        imageOnRight={false}
      />

      <PackingItems />
      <SafariFaq />
    </>
  )
}
