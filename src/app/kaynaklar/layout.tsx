import { Metadata } from 'next';

export const metadata = {
  title: "Kaynaklar | Genarative AI Fundamentals",
  description: "Bootcamp'imizde kullanılan ve işinize yarayacağını düşündüğümüz kaynakları bir araya toplandık. Sen de GenAI için kaynak arayışındaysan seni buraya alalım!"
};

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return children;
}