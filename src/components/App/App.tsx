import { Routes, Route } from 'react-router-dom';
import Bank from '../bank/Bank';
import Pay from '../pay/Pay';
import Onboarding from '../onboarding/Onboarding';
import MySubscriptions from '../my-subscriptions/MySubscriptions';
import Help from '../help/Help';
import Notifications from '../Notifications';

function App() {


  return (
    <div className="relative w-[375px] h-[100%] flex flex-col mx-auto">

      <Routes>
        <Route
          path='/'
          element={
            <Bank />
          } />

        <Route
          path='/pay2u'
          element={
            <Pay />
          } />

        <Route
          path='/onboarding_1'
          element={<Onboarding
            bar2={"./images/icons/UnactiveLine.svg"}
            bar3={"./images/icons/UnactiveLine.svg"}
            title={"Все подписки в одном месте"}
            subtitle={"Добавляйте и отслеживайте все ваши подписки"}
            image={"./images/Logos.png"}
            link={"/onboarding_2"}
            picture={"first"}
          />}
        />

        <Route
          path='/onboarding_2'
          element={<Onboarding
            bar2={"./images/icons/ActiveLine.svg"}
            bar3={"./images/icons/UnactiveLine.svg"}
            title={"Ваши данные в безопасности"}
            subtitle={"Оплата через ваш банк, никаких сторонних платежных сервисов"}
            image={"./images/Lock.png"}
            link={"/onboarding_3"}
            picture={"second"}
          />}
        />

        <Route
          path='/onboarding_3'
          element={<Onboarding
            bar2={"./images/icons/ActiveLine.svg"}
            bar3={"./images/icons/ActiveLine.svg"}
            title={"Напоминания об оплате"}
            subtitle={"Получайте уведомления о предстоящей оплате"}
            image={"./images/Bell.png"}
            link={"/pay2u"}
            picture={"third"}
          />}
        />
        <Route
          path='/my-subscriptions'
          element={
            <MySubscriptions />
          } />
          <Route
          path='/help'
          element={
            <Help />
          } />
          <Route
          path='/notifications'
          element={
            <Notifications />
          } />
      </Routes>

    </div>
  );
}

export default App;
