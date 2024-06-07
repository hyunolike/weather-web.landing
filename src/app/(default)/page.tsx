import MainTitle from "./_component/MainTitle";
import ServiceInfo from "./_component/ServiceInfo";
import DeveloperInfo from "./_component/DeveloperInfo";

export default function Home(): JSX.Element {
  return (
    <div className="h-screen px-8">
      <MainTitle />
      <ServiceInfo />
      <DeveloperInfo />
    </div>
  );
}
