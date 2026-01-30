import "../css/App.css";
import TextBold from "../components/TextBold";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";
import { ButtonHour } from "../components/ButtonHour";
import Text from "../components/Text";
import logoImg from "../assets/logo-hair-day.svg";

export default function App() {
  return (
    <main className="Container">
      <div className="Container-left">
        <div className="image-card">
          <img src={logoImg} />
        </div>
        <div className="Container-left-content">
          {/* */}
          <Title>Agende um Atendimento</Title>
          <SubTitle>
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </SubTitle>
          {/* */}

          {/* */}
          <div className="Agendamento">
            <Text>Data</Text>
            <input type="date" className="Input-date" />
            <TextBold>Horários</TextBold>
            <Text>Manhã</Text>
            <div className="Horario">
              <ButtonHour>09:00</ButtonHour>
              <ButtonHour>10:00</ButtonHour>
              <ButtonHour>11:00</ButtonHour>
              <ButtonHour>12:00</ButtonHour>
            </div>
            <Text>Tarde</Text>
            <div className="Horario">
              <ButtonHour>13:00</ButtonHour>
              <ButtonHour>14:00</ButtonHour>
              <ButtonHour>15:00</ButtonHour>
              <ButtonHour>16:00</ButtonHour>
              <ButtonHour>17:00</ButtonHour>
              <ButtonHour>18:00</ButtonHour>
            </div>
            <Text>Noite</Text>
            <div className="Horario">
              <ButtonHour>19:00</ButtonHour>
              <ButtonHour>20:00</ButtonHour>
              <ButtonHour>21:00</ButtonHour>
            </div>
          </div>
          {/* */}

          {/* */}
          <div className="Agendar">
            <div>
              <TextBold>Cliente</TextBold>
              <input type="text" className="Input-agendar-nome" />
            </div>

            <button className="Button-agendar" type="submit">
              AGENDAR
            </button>
          </div>
          {/* */}
        </div>
      </div>

      <div className="Container-rigth">
        <div className="Header-sua-agenda">
          <div>
            <Title> Sua agenda </Title>
            <SubTitle>
              Consulte os seus cortes de cabelo agendados por dia{" "}
            </SubTitle>
          </div>
          <div>
            <input type="date"  className="Input-date" />
          </div>
        </div>

        <div className="Dias-agendados">
          <div className="Card-dias-agendados">
            <div className="Border-para-o-card-dia-agendado">
              <Text>Manhã</Text>
              <Text>09-12</Text>
            </div>
            <Text>Nenhum agendamento para este período</Text>
          </div>
          <div className="Card-dias-agendados">
            <div className="Border-para-o-card-dia-agendado">
              <Text>Tarde</Text>
              <Text>13-18</Text>
            </div>
            <Text>Nenhum agendamento para este período</Text>
          </div>
          <div className="Card-dias-agendados">
            <div className="Border-para-o-card-dia-agendado">
              <Text>Noite</Text>
              <Text>19-21</Text>
            </div>
            <Text>Nenhum agendamento para este período</Text>
          </div>
        </div>
      </div>
    </main>
  );
}
