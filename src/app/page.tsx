import cl from "./_page.module.scss";
import CompanyList from "@/widgets/Company/List/CompanyList";

export default function Home() {
  return (
    <main className={cl.main}>
      <h1 className={cl.title}>Каталог акций</h1>
      <CompanyList />
    </main>
  );
}
