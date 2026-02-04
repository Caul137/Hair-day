import { useState, type FormEvent } from "react";
import logoImg from "../assets/logo-hair-day.svg";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";
import Text from "../components/Text";
import TextBold from "../components/TextBold";
import { HorarioManha } from "../components/HorarioManha";
import { HorarioTarde } from "../components/HorarioTarde";
import { HorarioNoite } from "../components/HorarioNoite";
import { useRef } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [selectedHourTime, setSelectedHourTime] = useState<string | null>(null);
  const [dataChange, setDataChange] = useState<boolean>(false);
  const [dataChangeS, setDataChangeS] = useState<boolean>(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dateInputRefS = useRef<HTMLInputElement>(null);

  const [time, setTime] = useState("")
  // const [date, setDate] = useState("")
  const [id, setId] = useState(0)
  const [label, setLabel] = useState("")



  const handleSelectHour = (time: string) => {
    setSelectedHourTime((prev) => (prev === time ? null : time));
  };



 const saveLocalStorage = (e: FormEvent) => {
  e.preventDefault()
  alert([time, dateInputRef.current?.value, id, label])
 }


  return (
    <main className="max-w-300 w-full mx-auto my-0 grid grid-cols-1 md:grid-cols-[450px_1fr] gap-15 p-4 md:p-0">
      {/* Container-left */}
      <aside className="bg-[#282829] p-11 px-15 rounded-5 flex flex-col relative">
        <div className="absolute top-0 -left-2 bg-[#383838] p-3 rounded-br-2xl rounded-br-4">
          <img src={logoImg} className="w-24 " />
        </div>

        <form onSubmit={saveLocalStorage} className="mt-12 flex flex-col gap-3">
          <Title>Agende um Atendimento</Title>
          <SubTitle>
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </SubTitle>

          <div>
            <Text>Data</Text>
            <div
              onClick={() => dateInputRef.current?.showPicker()}
              className="flex items-center gap-3 border border-[#4d4d4e] rounded-2xl px-3 mb-5 focus-within:border-[#b89e49] transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-4 h-4 fill-[#b89e49] shrink-0 pointer-events-none"
              >
                <path d="M26 3.5H23.5V3C23.5 2.60218 23.342 2.22064 23.0607 1.93934C22.7794 1.65804 22.3978 1.5 22 1.5C21.6022 1.5 21.2206 1.65804 20.9393 1.93934C20.658 2.22064 20.5 2.60218 20.5 3V3.5H11.5V3C11.5 2.60218 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5C9.60218 1.5 9.22064 1.65804 8.93934 1.93934C8.65804 2.22064 8.5 2.60218 8.5 3V3.5H6C5.33696 3.5 4.70107 3.76339 4.23223 4.23223C3.76339 4.70107 3.5 5.33696 3.5 6V26C3.5 26.663 3.76339 27.2989 4.23223 27.7678C4.70107 28.2366 5.33696 28.5 6 28.5H26C26.663 28.5 27.2989 28.2366 27.7678 27.7678C28.2366 27.2989 28.5 26.663 28.5 26V6C28.5 5.33696 28.2366 4.70107 27.7678 4.23223C27.2989 3.76339 26.663 3.5 26 3.5ZM8.5 6.5C8.5 6.89782 8.65804 7.27936 8.93934 7.56066C9.22064 7.84196 9.60218 8 10 8C10.3978 8 10.7794 7.84196 11.0607 7.56066C11.342 7.27936 11.5 6.89782 11.5 6.5H20.5C20.5 6.89782 20.658 7.27936 20.9393 7.56066C21.2206 7.84196 21.6022 8 22 8C22.3978 8 22.7794 7.84196 23.0607 7.56066C23.342 7.27936 23.5 6.89782 23.5 6.5H25.5V9.5H6.5V6.5H8.5ZM6.5 25.5V12.5H25.5V25.5H6.5Z"></path>
              </svg>
              <input
                type="date"
                ref={dateInputRef}
                onChange={(e) => {setDataChange(true)}}
                className="flex-1 bg-transparent py-3 text-white outline-none cursor-pointer"
              />
              <span className="text-[10px] text-[#8a8989]">🔽</span>
            </div>

            <TextBold>Horários</TextBold>

            <Text>Manhã</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              {HorarioManha.map((hour) => (
                <label
                  key={hour.id}
                  className={`flex items-center justify-center p-2 text-text-gray text-sm  rounded-xl  ${dataChange === true ? "bg-[#ffffff21] text-gray-300 cursor-pointer hover:bg-[#ffffff3b]" : "bg-[#55555536] text-black"} ${dataChange && selectedHourTime && selectedHourTime === hour.time ? "border border-solid border-gray-400" : "border-none"}`}
                >
                  <span>{hour.time}</span>
                  <input
                    type="radio"
                    hidden={true}
                    name={hour.time}
                    value={hour.time}
                    disabled={dataChange ? false : true}
                    checked={selectedHourTime === hour.time}
                    onChange={() => {handleSelectHour(hour.time), dataChange ?  [setTime(hour.time), setLabel(hour.label), setId(hour.id)] : undefined}}
                  
                  />
                </label>
              ))}
            </div>

            <Text>Tarde</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              {HorarioTarde.map((hour) => (
                <label
                  key={hour.id}
                  className={`flex items-center justify-center p-2 text-text-gray text-sm  rounded-xl  ${dataChange === true ? "bg-[#ffffff21] text-gray-300 cursor-pointer hover:bg-[#ffffff3b]" : "bg-[#55555536] text-black"} ${dataChange && selectedHourTime && selectedHourTime === hour.time ? "border border-solid border-gray-400" : "border-none"}`}
                >
                  <span>{hour.time}</span>
                  <input
                    type="radio"
                    hidden={true}
                    name={hour.time}
                    value={hour.time}
                    disabled={dataChange ? false : true}
                    checked={selectedHourTime === hour.time}
                    onChange={() => {handleSelectHour(hour.time), dataChange ?  [setTime(hour.time), setLabel(hour.label), setId(hour.id)] : undefined}}
                  />
                </label>
              ))}
            </div>

            <Text>Noite</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              {HorarioNoite.map((hour) => (
                <label
                  key={hour.id}
                  className={`flex items-center justify-center p-2 text-text-gray text-sm  rounded-xl  ${dataChange === true ? "bg-[#ffffff21] text-gray-300 cursor-pointer hover:bg-[#ffffff3b]" : "bg-[#55555536] text-black"} ${dataChange && selectedHourTime && selectedHourTime === hour.time ? "border border-solid border-gray-400" : "border-none"}`}
                >
                  <span>{hour.time}</span>
                  <input
                    type="radio"
                    hidden={true}
                    name={hour.time}
                    value={hour.time}
                    disabled={dataChange ? false : true}
                    checked={selectedHourTime === hour.time}
                    onChange={() => {handleSelectHour(hour.time), dataChange ?  [setTime(hour.time), setLabel(hour.label), setId(hour.id)] : undefined}}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-4">
            <div>
              <TextBold>Cliente</TextBold>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 bg-transparent border border-[#4d4d4e] rounded-2xl text-white mt-2 mb-5 outline-none focus:border-[#b89e49]"
              />
            </div>

            <button
              className="w-full p-5 bg-[#f0c94c9c] rounded-2 text-[#19181b] font-bold cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-50"
              disabled={!userName}
            >
              AGENDAR
            </button>
          </div>
        </form>
      </aside>




      {/* ---------------- */}





      {/* Container-rigth */}
      <section className="flex flex-col ml-16 mt-24 gap-7 w-full md:p-0 p-8 text-start">
        <header className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col">
            <Title>Sua agenda</Title>
            <SubTitle>
              Consulte os seus cortes de cabelo agendados por dia
            </SubTitle>
          </div>
          <div
            onClick={() => dateInputRefS.current?.showPicker()}
            className="flex items-center gap-3 border border-[#4d4d4e] rounded-2xl px-3 mb-5 focus-within:border-[#b89e49] transition-colors cursor-pointer"
          >
            <svg
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-[#b89e49] shrink-0 pointer-events-none"
            >
              <path d="M26 3.5H23.5V3C23.5 2.60218 23.342 2.22064 23.0607 1.93934C22.7794 1.65804 22.3978 1.5 22 1.5C21.6022 1.5 21.2206 1.65804 20.9393 1.93934C20.658 2.22064 20.5 2.60218 20.5 3V3.5H11.5V3C11.5 2.60218 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5C9.60218 1.5 9.22064 1.65804 8.93934 1.93934C8.65804 2.22064 8.5 2.60218 8.5 3V3.5H6C5.33696 3.5 4.70107 3.76339 4.23223 4.23223C3.76339 4.70107 3.5 5.33696 3.5 6V26C3.5 26.663 3.76339 27.2989 4.23223 27.7678C4.70107 28.2366 5.33696 28.5 6 28.5H26C26.663 28.5 27.2989 28.2366 27.7678 27.7678C28.2366 27.2989 28.5 26.663 28.5 26V6C28.5 5.33696 28.2366 4.70107 27.7678 4.23223C27.2989 3.76339 26.663 3.5 26 3.5ZM8.5 6.5C8.5 6.89782 8.65804 7.27936 8.93934 7.56066C9.22064 7.84196 9.60218 8 10 8C10.3978 8 10.7794 7.84196 11.0607 7.56066C11.342 7.27936 11.5 6.89782 11.5 6.5H20.5C20.5 6.89782 20.658 7.27936 20.9393 7.56066C21.2206 7.84196 21.6022 8 22 8C22.3978 8 22.7794 7.84196 23.0607 7.56066C23.342 7.27936 23.5 6.89782 23.5 6.5H25.5V9.5H6.5V6.5H8.5ZM6.5 25.5V12.5H25.5V25.5H6.5Z"></path>
            </svg>
            <input
              type="date"
              ref={dateInputRefS}
              onChange={() => setDataChangeS(!dataChangeS)}
              className="flex-1 bg-transparent py-3 text-white outline-none cursor-pointer"
            />
            <span className="text-[10px] text-[#8a8989]">🔽</span>
          </div>
        </header>

        <div className="flex flex-col gap-5">
          {/* Período Manhã */}
          <div className="w-full rounded-2 border border-white/10 pb-3">
            <div className="flex justify-between p-2 px-3 border-b border-white/10 mb-3">
              <Text>Manhã</Text>
              <Text>09-12h</Text>
            </div>
            <p className="px-3 text-zinc-400 text-sm">
              Nenhum agendamento para este período
            </p>
          </div>

          {/* Período Tarde */}
          <div className="w-full rounded-2 border border-white/10 pb-3">
            <div className="flex justify-between p-2 px-3.75 border-b border-white/10 mb-3">
              <Text>Tarde</Text>
              <Text>13-18h</Text>
            </div>
            <p className="px-3 text-zinc-400 text-sm">
              Nenhum agendamento para este período
            </p>
          </div>

          {/* Período Noite */}
          <div className="w-full rounded-2 border border-white/10 pb-3">
            <div className="flex justify-between p-2 px-3 border-b border-white/10 mb-3">
              <Text>Noite</Text>
              <Text>19-21h</Text>
            </div>
            <p className="px-3 text-zinc-400 text-sm">
              Nenhum agendamento para este período
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
