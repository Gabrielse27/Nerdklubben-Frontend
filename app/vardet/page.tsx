// app/vardet/page.tsx
import Image from "next/image";

export default function VardetPage() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 w-full bg-white h-auto text-slate-800 rounded-2xl overflow-hidden
       shadow-2xl mb-56 sm:mb-88 md:mb-[544px] lg:mb-[640px] xl:mb-12"
    >
      {/* VÄNSTER KOLUMN: BLÅ BAKGRUND (VÄRDET AV ATT VARA MED) */}
      <div className="bg-[#467393] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8 tracking-tight">
            Värdet av att vara med
          </h1>

          <div className="space-y-6 text-base text-[#E1D3BE] font-light leading-relaxed ">
            <p>
              Nerdklubben är för dig som har
              <br /> tekniskt ansvar och påverkar riktning i<br />
              ditt bolag.
            </p>
            <p>
              I techledarskap är många beslut
              <br />
              ensamma. Du är den som förväntas veta även
              <br />
              när svaren inte är självklara.
            </p>
            <p>
              Nerdklubben ger dig ett sammanhang
              <br />
              där du kan testa tankar innan de blir
              <br />
              strategi.
              <br />
              Där du kan dela utmaningar utan att
              <br />
              behöva försvara dem.
              <br />
              Där du kan höra hur andra har löst
              <br />
              liknande problem i verkligheten, inte i<br />
              teorin.
            </p>

            <p className="pt-4 font-normal text-[#E1D3BE]">
              Här uppstår värde i flera lager:
            </p>

            <p className="space-y-3 list-none pl-0">
              Du får nya perspektiv på beslut du
              <br />
              redan står inför.
              <br />
              Du minskar risken att upprepa andras
              <br />
              misstag.
              <br />
              Du breddar din förståelse för hur
              <br />
              andra bolag i regionen tänker och
              <br />
              prioriterar.
              <br />
              Du bygger relationer som kan bli
              <br />
              framtida samarbeten, rekryteringar
              <br />
              eller bollplank.
            </p>

            <p className="pt-4">
              Det är inte kunskap i form av
              <br />
              föreläsning. <br />
              Det är erfarenhet i realtid.
            </p>
            <p>
              När du lämnar rummet har du inte
              <br />
              bara lyssnat. <br />
              Du har förflyttat din egen riktning.
            </p>
          </div>
        </div>

        {/* FOOTER TEXT INUTI DEN BLÅ KOLUMNEN */}
        <div className="pt-8 border-t border-white/10 mt-12">
          <span className="text-sm font-bold tracking-widest  uppercase">
            Nerdklubben
          </span>
        </div>
      </div>

      {/* HÖGER KOLUMN: VIT BAKGRUND (BILD & NERDKLUBBEN TEXT) */}
      <div className="bg-white flex flex-col justify-start">
        {/* BILDSEKTION MED OVERLAY TEXT */}
        <div className="relative h-[45vh] md:h-[90vh] w-full bg-slate-900">
          <Image
            src="/vardet.jpg"
            alt="Tillsammans leder vi tech framåt"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* TEXT OVERLAY PÅ BILDEN */}
          <div className="relative inset-0 flex items-center p-8 sm:p-12">
            <h2 className="text-white text-3xl lg:text-4xl font-serif italic font-bold max-w-md leading-snug drop-shadow-md">
              ”Tillsammans leder vi tech framåt”
            </h2>
          </div>
        </div>

        {/* TEXTSEKTION: NERDKLUBBEN */}
        <div className="p-8 sm:p-12 md:p-16 space-y-6 text-base text-slate-700 font-light leading-relaxed">
          <h2 className="text-4xl font-bold tracking-wider text-slate-900 mb-4 uppercase">
            NERDKLUBBEN
          </h2>

          <p className="font-normal text-base text-slate-900 mt-14">
            Här nördar vi ner oss i tech. Hjälper varandra
            <br />
            framåt. Tar upp viktiga ämnen att diskutera
            <br />
            som vi tar fram tillsammans. Workshops för att
            <br />
            utveckla förståelsen. Sätter riktningen framåt.
            <br />
            Växer tillsammans.
          </p>
          <p className="font-normal text-base text-slate-900  py-2">
            Teamwork makes the dream work.
          </p>
          <p className="font-normal text-base text-slate-900">
            Det här är inte ännu ett nätverk.
            <br />
            Det är ett sammanhang för de som leder
            <br />
            tekniken framåt. Där vi kan nörda ner oss i tech.
          </p>
          <p className="font-normal text-base  text-slate-900">
            Om du känner att det saknas ett rum där
            <br />
            samtal får vara både skarpa och ärliga
            <br />
            då är det här rummet ditt.
          </p>
          <p className="pt-4 font-normal text-slate-900">Vi ses runt bordet.</p>
        </div>
      </div>
    </div>
  );
}
