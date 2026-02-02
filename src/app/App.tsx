import {  useState } from "react";
import logoImg from "../assets/logo-hair-day.svg";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";
import Text from "../components/Text";
import TextBold from "../components/TextBold";
import { ButtonHour } from "../components/ButtonHour";
import { InputData } from "../components/Input-data";

export default function App() {
  const [userName, setUserName] = useState("");


  return (
    <main className="max-w-300 w-full mx-auto my-0 grid grid-cols-1 md:grid-cols-[450px_1fr] gap-15 p-4 md:p-0">
      {/* Container-left */}
      <aside className="bg-[#282829] p-11 px-15 rounded-5 flex flex-col relative">
        <div className="absolute top-0 -left-2 bg-[#383838] p-3 rounded-br-2xl rounded-br-4">
          <img src={logoImg} className="w-24 " />
        </div>

        <form className="mt-12 flex flex-col gap-3">
          <Title>Agende um Atendimento</Title>
          <SubTitle>
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </SubTitle>

          <div>
            <Text>Data</Text>
            <InputData/>

            <TextBold>Horários</TextBold>

            <Text>Manhã</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              <ButtonHour>09:00</ButtonHour>
              <ButtonHour>10:00</ButtonHour>
              <ButtonHour>11:00</ButtonHour>
              <ButtonHour>12:00</ButtonHour>
            </div>

            <Text>Tarde</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              <ButtonHour>13:00</ButtonHour>
              <ButtonHour>14:00</ButtonHour>
              <ButtonHour>15:00</ButtonHour>
              <ButtonHour>16:00</ButtonHour>
              <ButtonHour>17:00</ButtonHour>
              <ButtonHour>18:00</ButtonHour>
            </div>

            <Text>Noite</Text>
            <div className="grid grid-cols-4 gap-2 mb-2 mt-2">
              <ButtonHour>19:00</ButtonHour>
              <ButtonHour>20:00</ButtonHour>
              <ButtonHour>21:00</ButtonHour>
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
              className="w-full p-5 bg-[#b89e4973] rounded-2 text-[#19181b] font-bold cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-50"
              disabled={!userName}
            >
              AGENDAR
            </button>
          </div>
        </form>
      </aside>

      {/* Container-rigth */}
      <section className="flex flex-col ml-16 mt-24 gap-7 w-full md:p-0 p-8 text-start">
        <header className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col">
            <Title>Sua agenda</Title>
            <SubTitle>
              Consulte os seus cortes de cabelo agendados por dia
            </SubTitle>
           </div>
             <InputData/>
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
