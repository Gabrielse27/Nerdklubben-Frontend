import Image from "next/image";

export default function VisionPage() {
  return (
    // Huvudcontainer med responsiv grid: 1 kolumn på mobil, 2 kolumner på stora skärmar
    <section
      className="grid grid-cols-1 md:grid-cols-2 w-full bg-white h-auto text-slate-800 rounded-2xl overflow-hidden
       shadow-2xl mb-56 sm:mb-88 md:mb-[544px] lg:mb-[640px] xl:mb-12"
    >
      <div className="md:col-span-1 bg-[#43708C] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between space-y-12 min-h-full">
        {/* Innehållsblock för de fyra huvudpunkterna */}
        <div className="space-y-10 mt-8">
          {/* Punkt 1: Närvaro */}
          <div className="space-y-3">
            <h3 className="text-3xl font-bold tracking-tight">Närvaro</h3>
            <p className="space-y-6 text-base text-[#E1D3BE] font-light leading-relaxed mt-8">
              Vi prioriterar deltagande framför
              <br />
              presentation.
              <br />
              Alla är där för att bidra, inte för att
              <br />
              imponera.
              <br />
              Samtalen blir starka när varje röst
              <br />
              räknas.
            </p>
          </div>

          {/* Punkt 2: Över tid */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight mt-18">
              Över tid
            </h3>
            <p className="space-y-6 text-base text-[#E1D3BE] font-light leading-relaxed mt-8">
              Det är i återkommande möten som
              <br />
              relationer fördjupas.
              <br />
              Nerdklubben är inte en enstaka träff
              <br />
              det är en process som utvecklas
              <br />
              månad för månad.
            </p>
          </div>

          {/* Punkt 3: Perspektiv */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight mt-18">
              Perspektiv
            </h3>
            <p className="space-y-6 text-base text-[#E1D3BE] font-light leading-relaxed mt-8">
              När olika erfarenheter möts uppstår
              <br />
              nya tankar.
              <br />
              Vi samlar ledare från olika bolag och
              <br />
              mognadsnivåer för att bredda
              <br />
              blicken inte späda ut den.
            </p>
          </div>

          {/* Punkt 4: Framtid */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight">Framtid</h3>
            <p className="space-y-6 text-base text-[#E1D3BE] font-light leading-relaxed mt-8">
              Nerdklubben är en investering i<br />
              riktning.
              <br />
              För ditt bolag. För kommunen. För
              <br />
              framtiden.
            </p>
          </div>
        </div>

        {/* Liten varumärkestext längst ner till vänster */}
        <div className="pt-6 border-t border-white/10 text-base font-semibold tracking-wider text-white-200">
          Nerdklubben
        </div>
      </div>

      {/* HÖGER SIDA: Bild och den långa texten (Ockuperar 7 av 12 kolumner på desktop) */}
      <div className="md:col-span-1 flex flex-col min-h-full">
        {/* Övre delen: Bildbehållare mit Next.js Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[90vh]">
          <Image
            src="/vision.jpg" // Du kan ändra denna till din önskade bild från public mappen (t.ex. formatet.jpg eller vardet.jpg)
            alt="Nerdklubben nätverksträff"
            fill
            className=" object-cover object-center"
            priority
          />
        </div>

        {/* Nedre delen: Vit sektion med detaljerad text och rubrik */}
        <div className="p-8 sm:p-12 md:p-16 space-y-6 max-w-3xl">
          {/* Huvudrubrik för högersidan */}
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
            Varför spelar det här roll?
          </h2>

          {/* Löpande textstycken uppdelade enligt designmallen */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              I små och medelstora techbolag tas avgörande
              <br />
              beslut varje vecka.
              <br />
              Prioriteringar i roadmap. Rekryteringar.
              <br />
              Investeringar.
            </p>

            <p>Ofta tas de besluten isolerat.</p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
              Nerdklubben finns för att minska den isolationen.
            </p>

            <p>
              När ledare möts regelbundet och delar verkliga
              <br />
              erfarenheter stärks inte bara det enskilda bolaget
              <br />
              utan hela kommunens tekniska kapacitet.
            </p>

            <p>
              Det handlar inte om att konkurrera mindre.
              <br />
              Det handlar om att bli bättre tillsammans.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
              När kunskap delas snabbare, växer bolag smartare.
              <br />
              När perspektiv breddas, tas modigare beslut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
