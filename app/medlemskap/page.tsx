// app/medlemskap/page.tsx

import Image from "next/image";

export default function MedlemskapPage() {
  return (
    <div className="flex w-full max-w-[1200px] flex-col bg-white shadow-md md:flex-row">
      {/* Col vänster (vit) */}
      <div className="flex flex-col md:w-[50%] bg-white">
        <div className="relative w-full h-[45vh] md:h-[90vh]">
          <Image
            src="/medlemskap.jpg"
            alt="Nerdklubben middagsbord"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black mb-5 mt-10">
            Ramar för samtalen
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 mt-8">
            Samtalen i Nerdklubben bygger på
            <br />
            förtroende, närvaro och ömsesidighet.
            <br />
            Det som delas i rummet stannar i<br />
            rummet.
            <br />
            Vi talar öppet, lyssnar aktivt och bidrar
            <br />
            med respekt för varandras ansvar och
            <br />
            erfarenhet.
          </p>

          <h2 className="text-3xl font-bold text-black mt-18">Kontinuitet</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-12">
            Nerdklubben är inte en enskild träff.
            <br />
            Det är ett pågående forum där
            <br />
            relationer och samtal byggs över tid.
          </p>
        </div>
      </div>

      {/* Col höger (blå) */}
      <div className="flex flex-col md:w-[50%] bg-[#46718F] text-white p-4 md:p-12 justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-4xl font-bold mb-8 tracking-tight">
            Strukturen bakom
          </h1>
          <h2 className="text-2xl font-semibold mb-6">Urval och medlemskap</h2>

          <div className="space-y-6 text-base text-[#E1D3BE] font-light leading-relaxed">
            <p>
              Nerdklubben är medlemsbaserad
              <br />
              av en anledning.
              <br />
              För att samtalen ska få djup krävs
              <br />
              rätt sammansättning i rummet.
            </p>

            <p>
              Vi samlar personer som bär ansvar
              <br />
              för teknik, team och riktning.
              <br />
              Ledare som fattar beslut som <br />
              påverkar mer än sin egen kalender.
              <br />
              Personer som både kan bidra med
              <br />
              erfarenhet och är öppna för att
              <br />
              utmanas.
            </p>

            <p>
              Urvalet handlar inte om titel i sig.
              <br />
              Det handlar om inflytande,
              <br />
              perspektiv och viljan att dela
              <br />
              verkliga erfarenheter.
            </p>

            <p>
              Antalet platser är begränsat.
              <br />
              Inte för att skapa distans utan för
              <br />
              att skapa kvalitet.
            </p>

            <p>
              Ett mindre forum ger utrymme för
              <br />
              ärlighet.
              <br />
              För förtroende.
              <br />
              För samtal som inte stannar på
              <br />
              ytan.
            </p>

            <p>
              Medlemskapet bekräftas efter
              <br />
              ansökan och personlig dialog.
              <br />
              Vi ser till helheten: roll, ansvar,
              <br />
              ambition och hur varje medlem
              <br />
              stärker dynamiken i rummet.
            </p>

            <p>
              Det är i kombinationen av olika
              <br />
              perspektiv som riktning formas.
            </p>
          </div>
        </div>

        <div className="text-right text-base font-bold text-white pt-10 mt-auto">
          Nerdklubben
        </div>
      </div>
    </div>
  );
}
