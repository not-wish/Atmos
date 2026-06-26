import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-32 h-32 bg-artic"></div>
      <div className="w-32 h-32 bg-safron"></div>
      <div className="w-32 h-32 bg-forsythia"></div>
      <div className="w-32 h-32 bg-noctural"></div>
      <div className="w-32 h-32 bg-foreground"></div>
      <div className="w-32 h-32 bg-background"></div>
      <div className="text-4xl text-bold">Hi</div>
    </div>
  );
}
