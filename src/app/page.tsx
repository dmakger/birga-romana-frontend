import BaseLayout from "@/widgets/Layout/Base/BaseLayout";
import CompanyList from "@/widgets/Company/List/CompanyList";

export default function Home() {
  return (
    <BaseLayout title="Каталог акций">
      <CompanyList />
    </BaseLayout>
  );
}
