import "../css/App.css";
import TextBold from "../components/textBold";
import { Title } from "../components/title";
import { SubTitle } from "../components/subTitle";
import { ButtonHour } from "../components/buttonHour";
import Text from "../components/Text";

export default function App() {
  return (
    <main className="Container">
      <div className="Container-left">
        <img src="../assets/logo-hair-day.svg" />
        <div className="Container-left-content">
          {/* */}
          <>
            <Title>Agende um Atendimento</Title>
            <SubTitle>
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </SubTitle>
          </>
          {/* */}

          <input type="date" />

          {/* */}
          <div className="Agendamento">
            <TextBold>Horários</TextBold>
            <div className="Horario">
              <Text>Manhã</Text>
              <ButtonHour>09:00</ButtonHour>
              <ButtonHour>10:00</ButtonHour>
              <ButtonHour>11:00</ButtonHour>
              <ButtonHour>12:00</ButtonHour>
            </div>
            <div className="Horario">
              <Text>Tarde</Text>
              <ButtonHour>13:00</ButtonHour>
              <ButtonHour>14:00</ButtonHour>
              <ButtonHour>15:00</ButtonHour>
              <ButtonHour>16:00</ButtonHour>
              <ButtonHour>17:00</ButtonHour>
              <ButtonHour>18:00</ButtonHour>
            </div>
            <div className="Horario">
              <Text>Noite</Text>
              <ButtonHour>19:00</ButtonHour>
              <ButtonHour>20:00</ButtonHour>
              <ButtonHour>21:00</ButtonHour>
            </div>
          </div>
          {/* */}

          {/* */}
          <div className="Agendar">
            <TextBold>Cliente</TextBold>
            <input type="text" />
            <button className="Button" type="submit">
              AGENDAR
            </button>
          </div>
          {/* */}
        </div>
      </div>

      <div className="Container-rigth">
        <h1 className="Title"> Sua agenda </h1>
      </div>
    </main>
  );
}
