import Header from "../../Component/shared/Header/Header";
import Recruit from "../../Component/pages/RecruitSection/Recruit";
import Trendy from "../../Component/pages/Trendy/Trendy";
import Process from "../../Component/pages/Our_Process/Process";
import Advantage from "../../Component/pages/Techovise_advantage/Advantage";
import Sevice from "../../Component/shared/Services/Sevice";
import Subscription from "../../Component/shared/Subscription/Subscription";
import Virtual from "../../Component/pages/Virtual_CTO/Virtual";
import News from "../../Component/pages/News_Section/News";
import CallForm from "../../Component/shared/ExpertSection/ScheduleCallFrom/CallForm";
import Footer from "../../Component/shared/Footer/Footer";

function Index() {
  return (
    <>
      <Header />
      <Recruit />
      <Trendy />
      <Process />
      <Advantage />
      <Sevice />
      <Subscription />
      <Virtual />
      <News />
      <CallForm />
      <Footer />
    </>
  );
}

export default Index;
