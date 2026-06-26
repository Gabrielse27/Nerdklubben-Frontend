// app/om-oss/page.tsx
import Image from "next/image";

export default function OmOssPage() {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white text-slate-900">
      {/* Vänster sidan: Färgen blå.grå */}
      <div className="bg-[#467393] text-white p-8 sm:p-12 flex flex-col justify-start gap-6">
        <div>
          {/* SECȚIUNEA 1: Vad är Nerdklubben? */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              Vad är Nerdklubben?
            </h2>
            <div className="space-y-4 text-[#E1D3BE] font-light text-sm leading-relaxed">
              <p>
                Nerdklubben är ett strategiskt tech
                <br />
                forum för ledare och beslutsfattare i<br />
                Helsingborg.
              </p>
              <p>
                Här möts personer som bygger, leder
                <br />
                och påverkar teknikens riktning i<br />
                Helsingborg.
                <br />
                Inte för att nätverka brett utan för att
                <br />
                samtala och nätverka på djupet.
              </p>
              <p>
                Alla nätverk är inte skapade för
                <br />
                samma sak.
                <br />
                Nerdklubben är för dig som vill forma
                <br />
                riktning, inte bara relationer.
              </p>
              <p>
                Det är inte ett öppet event.
                <br />
                Det är ett tech fokuserat rum.
              </p>
            </div>
          </div>

          {/* SEKTION 2: Vem är detta för? */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              Vem är detta för?
            </h2>
            <div className="space-y-4 text-sm font-light  text-[#E1D3BE]  ">
              <div>
                <p className=" font-normal mb-1">Detta är inte:</p>
                <ul className="list-disc list-inside space-y-1 text-[#E1D3BE]">
                  <li>En öppen nätverksträff</li>
                  <li>Ett säljforum</li>
                  <li>Ett tech-event för alla</li>
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-[#E1D3BE] font-normal mb-1">Detta är:</p>
                <ul className="list-disc list-inside space-y-1 text-[#E1D3BE]">
                  <li>Ett nördigt samtalsrum</li>
                  <li>Ett nätverk för inflytande</li>
                  <li>Ett nätverk med riktning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SEKTION 3: Samarbete  */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <h3 className="text-2xl font-bold mb-3">
            Samarbete med Tech
            <br />
            Trainee Talent
            <br />
            och Konnekt of sweden
          </h3>
          <p className="text-sm text-[#E1D3BE] font-light leading-relaxed">
            Nerdklubben verkar i samarbete
            <br />
            med Tech Trainee Talent och
            <br />
            Konnekt of sweden. En del av
            <br />
            arbetet med att stärka Helsingborgs
            <br />
            tech-ekosystem.
          </p>
        </div>
      </div>

      {/* COL Högra Sidan: Bild upp + text nere, wit text */}
      <div className="flex flex-col">
        {/* Bilden med citat */}
        <div className="relative h-[45vh] md:h-[90vh] w-full">
          <Image
            src="/om-oss.jpg"
            alt="Nerdklubben meeting space"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay mörk för läsbarhet */}
          <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>

          {/* Citat som är på bilden*/}
          <div className="relative inset-0 flex items-center p-8 sm:p-12">
            <h2 className="text-white text-2xl lg:text-4xl font-serif italic font-bold max-w-md leading-snug">
              ”Runt bordet möts erfarenhet, ansvar och riktning”
            </h2>
          </div>
        </div>

        {/* Nedredelen: Text på vit bakrund */}
        <div className="bg-white text-slate-900 p-8 sm:p-12 flex-1">
          <h1 className="text-3xl font-black tracking-wider mb-6 text-black">
            NERDKLUBBEN
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-900 font-normal leading-relaxed">
            <p className="font-normal text-slate-900">
              Ibland behövs ett rum där tempot sänks och perspektiven höjs.{" "}
              <br />
              Ett sammanhang där samtal får ta tid och där rätt personer möts
              runt samma bord.
            </p>

            <p className="text-slate-900">
              I en tid där beslut fattas snabbt och utvecklingen accelererar,
              behövs platser för eftertanke. <br />
              Platser där erfarenheten får möta nyfikenheten och där tech idéer
              får mogna innan de omsätts.
            </p>

            <p className="text-slate-900">
              Nerdklubben är ett sådant rum. <br />
              Ett forum där samtal inte handlar om att imponera utan om att
              förstå, utmana och bygga vidare.
            </p>

            <div className="pt-4 border-t border-slate-100 text-sm sm:text-base text-slate-900">
              <p>Det är inte tempot som avgör värdet.</p>
              <p className=" text-slate-900">Det är djupet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
