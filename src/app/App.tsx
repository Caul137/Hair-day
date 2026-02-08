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
  {
    /* Usado para controlar o estado do checkbox do input radio, no aside do container left */
  }
  const [selectedHourTime, setSelectedHourTime] = useState<string | null>(null);
  {
    /* Usado para controlar estados como disabled do input radio no aside do container left*/
  }

  const [dataChange, setDataChange] = useState<boolean>(false);
  {
    /*  É o valor da data, selectedData valor da data do container left e selectedDateScheduled do container right */
  }
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateScheduled, setSelectedDateScheduled] = useState("");
  {
    /* Usado apenas para referenciar o campo data com a div */
  }
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dateInputRefScheduled = useRef<HTMLInputElement>(null);
  {
    /*  Dados que vão para o localStorage */
  }
  const [userName, setUserName] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState(Number);
  const [label, setLabel] = useState("");

  {
    /*  Model de sucesso ao agendar uma atendimento  */
  }
  const [scheduleModel, setScheduleModel] = useState<boolean>(false);

  {
    /* ----------------------------------------------------------------- */
  }

  const getLocalStorage = JSON.parse(localStorage.getItem("clientes") || "[]");

  const renderManha = getLocalStorage.filter(
    (label: any) => label.turno === "manha",
  );

  const renderTarde = getLocalStorage.filter(
    (label: any) => label.turno === "tarde",
  );

  const renderNoite = getLocalStorage.filter(
    (label: any) => label.turno === "noite",
  );

  const checkSameHour = (hourTime: String) => {
    return getLocalStorage.some(
      (item: any) => item.data === selectedDate && item.horario === hourTime,
    );
  };

  const handleSelectHour = (time: string) => {
    setSelectedHourTime((prev) => (prev === time ? null : time));
  };

  const saveLocalStorage = (e: FormEvent) => {
    e.preventDefault();

    if (!time) {
      alert("Você precisa ter um nome e definir o horário do agendamento");
      return;
    }

    const newScheduling = [
      ...getLocalStorage,
      {
        cliente: userName,
        id: id,
        horario: time,
        data: selectedDate,
        turno: label,
      },
    ];

    localStorage.setItem("clientes", JSON.stringify(newScheduling));

    setUserName("");
    setSelectedHourTime(null);
    setLabel("");
    setTime("");
    setId(Number);
    setSelectedDate("");
    setDataChange(false);


    setScheduleModel(true);
    setInterval(() => {
      setScheduleModel(false);
    }, 6000);
  };

{/* Usar selectdate(false) para quando limpar o input*/}


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
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setDataChange(true);
                }}
                className="flex-1 bg-transparent py-3 text-white outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden appearance-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-gray-400"
                viewBox="0 0 640 640"
              >
                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
              </svg>
            </div>

            <TextBold>Horários</TextBold>

            <Text>Manhã</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              {HorarioManha.map((hour) => (
                <label
                  key={hour.id}
                  className={`flex items-center justify-center p-2 text-text-gray text-sm  rounded-xl  ${dataChange === true ? "bg-[#ffffff21] text-gray-300  hover:bg-[#ffffff3b]" : "bg-[#55555536] text-black"} ${dataChange && selectedHourTime && selectedHourTime === hour.time ? "border border-solid border-gray-400" : "border-none"} ${checkSameHour(hour.time) ? "opacity-20 cursor-not-allowed bg-red-900/20" : "cursor-pointer"}`}
                >
                  <span>{hour.time}</span>
                  <input
                    type="radio"
                    hidden={true}
                    name={hour.time}
                    value={hour.time}
                    disabled={!dataChange || checkSameHour(hour.time)}
                    checked={selectedHourTime === hour.time}
                    onChange={() => {
                      (handleSelectHour(hour.time),
                        dataChange
                          ? [
                              setTime(hour.time),
                              setLabel(hour.label),
                              setId(hour.id),
                            ]
                          : undefined);
                    }}
                  />
                </label>
              ))}
            </div>

            <Text>Tarde</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              {HorarioTarde.map((hour) => (
                <label
                  key={hour.id}
                  className={`flex items-center justify-center p-2 text-text-gray text-sm  rounded-xl  ${dataChange === true ? "bg-[#ffffff21] text-gray-300 hover:bg-[#ffffff3b]" : "bg-[#55555536] text-black"} ${dataChange && selectedHourTime && selectedHourTime === hour.time ? "border border-solid border-gray-400" : "border-none"} ${checkSameHour(hour.time) ? "opacity-20 cursor-not-allowed bg-red-900/20" : "cursor-pointer"}`}
                >
                  <span>{hour.time}</span>
                  <input
                    type="radio"
                    hidden={true}
                    name={hour.time}
                    value={hour.time}
                    disabled={!dataChange || checkSameHour(hour.time)}
                    checked={selectedHourTime === hour.time}
                    onChange={() => {
                      (handleSelectHour(hour.time),
                        dataChange
                          ? [
                              setTime(hour.time),
                              setLabel(hour.label),
                              setId(hour.id),
                            ]
                          : undefined);
                    }}
                  />
                </label>
              ))}
            </div>

            <Text>Noite</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              {HorarioNoite.map((hour) => (
                <label
                  key={hour.id}
                  className={`flex items-center justify-center p-2 text-text-gray text-sm  rounded-xl  ${dataChange === true ? "bg-[#ffffff21] text-gray-300  hover:bg-[#ffffff3b]" : "bg-[#55555536] text-black"} ${dataChange && selectedHourTime && selectedHourTime === hour.time ? "border border-solid border-gray-400" : "border-none"} ${checkSameHour(hour.time) ? "opacity-20 cursor-not-allowed bg-red-900/20" : "cursor-pointer"}`}
                >
                  <span>{hour.time}</span>
                  <input
                    type="radio"
                    hidden={true}
                    name={hour.time}
                    value={hour.time}
                    disabled={!dataChange || checkSameHour(hour.time)}
                    checked={selectedHourTime === hour.time}
                    onChange={() => {
                      (handleSelectHour(hour.time),
                        dataChange
                          ? [
                              setTime(hour.time),
                              setLabel(hour.label),
                              setId(hour.id),
                            ]
                          : undefined);
                    }}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-4">
            <div>
              <TextBold>Cliente</TextBold>
              <div className="flex items-center text-center gap-1 p-3 border border-[#4d4d4e] rounded-2xl px-3 mt-2 mb-5 focus-within:border-[#b89e49] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-square w-4 h-4 fill-amber-400/80 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-transparent text-white outline-none focus:border-[#b89e49]"
                />
              </div>
            </div>

            {scheduleModel ? (
              <span className="bg-linear-to-l from bg-green-100 to-green-200  p-4 rounded-xl text-start text-sm">
                {" "}
                Seu agendamento foi realizado com sucesso!
              </span>
            ) : (
              ""
            )}

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
            onClick={() => dateInputRefScheduled.current?.showPicker()}
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
              ref={dateInputRefScheduled}
              value={selectedDateScheduled}
              onChange={(e) => {
                setSelectedDateScheduled(e.target.value);
              }}
              className="flex-1 bg-transparent py-3 text-white outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden appearance-none" 
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-gray-400"
              viewBox="0 0 640 640"
            >
              <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
            </svg>
          </div>
        </header>

        <div className="flex flex-col gap-5">
          {/* Período Manhã */}
          <div className="w-full rounded-2 border border-white/10 pb-3">
            <div className="flex justify-between p-2 px-3 border-b border-white/10 mb-3">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-brightness-alt-high w-5 h-6 fill-amber-400/80"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8" />
                </svg>
                <Text>Manhã</Text>
              </div>

              <Text>09-12h</Text>
            </div>
            <p className="px-3 text-zinc-400 text-sm">
              {renderManha.length > 0
                ? renderManha.map((item: any) => (
                    <div key={item.time}>
                      {selectedDateScheduled === item.data ? item.cliente : ""}
                    </div>
                  ))
                : ""}
            </p>
          </div>

          {/* Período Tarde */}
          <div className="w-full rounded-2 border border-white/10 pb-3">
            <div className="flex justify-between p-2 px-3.75 border-b border-white/10 mb-3">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cloud-sun w-4 h-4 fill-amber-400/80"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z" />
                  <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
                <Text>Tarde</Text>
              </div>

              <Text>13-18h</Text>
            </div>
            <p className="px-3 text-zinc-400 text-sm">
              {renderTarde.length > 0
                ? renderTarde.map((item: any) => (
                    <div key={item.time}>
                      {" "}
                      {selectedDateScheduled === item.data
                        ? item.cliente
                        : ""}{" "}
                    </div>
                  ))
                : ""}
            </p>
          </div>

          {/* Período Noite */}
          <div className="w-full rounded-2 border border-white/10 pb-3">
            <div className="flex justify-between p-2 px-3 border-b border-white/10 mb-3">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon-stars w-4 h-4 fill-amber-400/80"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
                <Text>Noite</Text>
              </div>

              <Text>19-21h</Text>
            </div>
            <p className="px-3 text-zinc-400 text-sm">
              {renderNoite.length > 0
                ? renderNoite.map((item: any) => (
                    <div key={item.time}>
                      {" "}
                      {selectedDateScheduled === item.data
                        ? item.cliente
                        : ""}{" "}
                    </div>
                  ))
                : ""}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
