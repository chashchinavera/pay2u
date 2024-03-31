import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';
import Onboarding from '../onboarding/Onboarding';
import Bank from '../bank/Bank';

function App() {
  return (
    <div className="relative w-[375px] h-[100%] flex flex-col mx-auto">

      <Header />
        <Routes>
          <Route
            path='/'
            element={<Onboarding
              bar2={"./images/icons/UnactiveLine.svg"}
              bar3={"./images/icons/UnactiveLine.svg"}
              title={"Все подписки в одном месте"}
              subtitle={"Добавляйте и отслеживайте все ваши подписки"}
              image={"./images/Logos.png"}
              link={"/onboarding_1"}
              picture={"first"}
            />}
          />
          <Route
            path='/onboarding_1'
            element={<Onboarding
              bar2={"./images/icons/ActiveLine.svg"}
              bar3={"./images/icons/UnactiveLine.svg"}
              title={"Ваши данные в безопасности"}
              subtitle={"Оплата через ваш банк, никаких сторонних платежных сервисов"}
              image={"./images/Lock.png"}
              link={"/onboarding_2"}
              picture={"second"}
            />}
          />
          <Route
            path='/onboarding_2'
            element={<Onboarding
              bar2={"./images/icons/ActiveLine.svg"}
              bar3={"./images/icons/ActiveLine.svg"}
              title={"Напоминания об оплате"}
              subtitle={"Получайте уведомления о предстоящей оплате"}
              image={"./images/Bell.png"}
              link={"/main"}
              picture={"third"}
            />}
          />
          <Route
            path='/main'
            element={<Main />}
          />
          <Route
            path='/bank'
            element={<Bank />}
          />
        </Routes>

    </div>
  );
}

export default App;
